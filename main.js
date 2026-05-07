document.addEventListener("DOMContentLoaded", () => {
  renderHomeStats();
  renderHomeEvents();
  renderHomeMatches();
  renderEventsPage();
  renderTeamsPage();
  renderNewsPage();
  renderEventMatches();
  renderEventParticipants();
  renderSchedulePage();
  setupEventsFilters();
  setupScheduleFilters();
  setupEventNewsToggle();
  setupSingleNewsToggle();
  setupEventTabs();
  setupHeroTabButtons();
});

function getSiteData() {
  if (typeof siteData !== "undefined") return siteData;
  if (typeof window !== "undefined" && window.siteData) return window.siteData;
  return { events: [], news: [], matches: [], teams: [] };
}

function getEvents() {
  return getSiteData().events || [];
}

function getBrackets() {
  if (typeof brackets !== "undefined") return brackets;
  if (typeof window !== "undefined" && window.brackets) return window.brackets;
  return {};
}

function getEventById(eventId) {
  return getEvents().find(event => event.id === eventId) || null;
}

function getMatches() {
  const data = getSiteData();
  const normalMatches = Array.isArray(data.matches) ? data.matches : [];
  const bracketMatches = getBracketMatches();
  const mergedMatches = new Map();

  [...normalMatches, ...bracketMatches].forEach((match, index) => {
    if (!match || match.status === "hidden" || match.hideInSchedule) return;

    const normalizedMatch = {
      ...match,
      _sortIndex: match._sortIndex ?? index
    };

    mergedMatches.set(getMatchKey(normalizedMatch), normalizedMatch);
  });

  return Array.from(mergedMatches.values()).sort(compareMatchesDesc);
}

function getMatchKey(match) {
  return match.id || [
    match.eventId,
    match.stage,
    match.date,
    match.time,
    match.teamA,
    match.teamB
  ].filter(Boolean).join("|");
}

function getBracketMatches() {
  const bracketData = getBrackets();

  return Object.entries(bracketData).flatMap(([eventId, bracket]) => {
    return flattenBracketMatches(eventId, bracket);
  });
}

function flattenBracketMatches(eventId, bracket) {
  if (!bracket) return [];

  const event = getEventById(eventId);
  const eventTitle = bracket.eventTitle || event?.title || eventId;
  const stagePrefix = bracket.stagePrefix || "淘汰赛";
  const output = [];

  const pushMatch = (match, context) => {
    if (!match || match.hideInSchedule || match.status === "hidden") return;

    const teams = Array.isArray(match.teams) ? match.teams : [];
    const teamA = getBracketTeamName(match.teamA || teams[0]?.name, teams[0]);
    const teamB = getBracketTeamName(match.teamB || teams[1]?.name, teams[1]);
    const scoreA = match.scoreA ?? teams[0]?.score ?? "";
    const scoreB = match.scoreB ?? teams[1]?.score ?? "";
    const status = match.status || inferBracketMatchStatus(teamA, teamB, scoreA, scoreB);

    output.push({
      id: match.id || `${eventId}-bracket-${context.tierIndex}-${context.roundIndex}-${context.matchIndex}`,
      eventId,
      eventTitle,
      stage: match.stage || buildBracketStage(stagePrefix, context.tierTitle, context.roundTitle),
      date: match.date || "待定",
      time: match.time || "待定",
      teamA,
      teamB,
      scoreA,
      scoreB,
      format: match.format || bracket.format || "BO5",
      status,
      statusText: match.statusText || getStatusText(status),
      streamUrl: match.streamUrl || "#",
      source: "bracket",
      _sortIndex: context.sortIndex
    });
  };

  const collectRounds = (rounds, context = {}) => {
    (rounds || []).forEach((round, roundIndex) => {
      (round.matches || []).forEach((match, matchIndex) => {
        pushMatch(match, {
          tierTitle: context.tierTitle || "",
          tierIndex: context.tierIndex ?? 0,
          roundTitle: round.title || "",
          roundIndex,
          matchIndex,
          sortIndex: (context.sortBase || 0) + roundIndex * 100 + matchIndex
        });
      });
    });
  };

  collectRounds(bracket.rounds, { sortBase: 1000 });

  (bracket.tiers || []).forEach((tier, tierIndex) => {
    collectRounds(tier.rounds, {
      tierTitle: tier.title || tier.tag || "",
      tierIndex: tierIndex + 1,
      sortBase: 2000 + tierIndex * 1000
    });
  });

  collectRounds(bracket.extraRounds, { tierTitle: "", tierIndex: 99, sortBase: 9000 });

  return output;
}

function getBracketTeamName(name, team) {
  if (team?.placeholder) return "待定";
  return name || "待定";
}

function buildBracketStage(stagePrefix, tierTitle, roundTitle) {
  return [stagePrefix, tierTitle, roundTitle]
    .filter(Boolean)
    .join(" ");
}

function inferBracketMatchStatus(teamA, teamB, scoreA, scoreB) {
  if (teamA === "待定" || teamB === "待定") return "upcoming";
  return hasMatchScore({ scoreA, scoreB }) ? "finished" : "upcoming";
}

function getStatusText(status) {
  if (status === "finished") return "已结束";
  if (status === "live") return "进行中";
  if (status === "hidden") return "隐藏";
  return "即将开始";
}

function hasMatchScore(match) {
  return match.scoreA !== null &&
    match.scoreA !== undefined &&
    match.scoreA !== "" &&
    match.scoreB !== null &&
    match.scoreB !== undefined &&
    match.scoreB !== "";
}

function getMatchTimestamp(match) {
  const rawDate = String(match.date || "").trim();
  const rawTime = String(match.time || "00:00").trim();
  const date = rawDate.replace(/[./]/g, "-");
  const time = /^\d{1,2}:\d{2}$/.test(rawTime) ? rawTime : "00:00";
  const timestamp = Date.parse(`${date}T${time}`);

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function compareMatchesDesc(a, b) {
  const timeDiff = getMatchTimestamp(b) - getMatchTimestamp(a);
  if (timeDiff !== 0) return timeDiff;
  return (b._sortIndex || 0) - (a._sortIndex || 0);
}

function getNews() {
  return getSiteData().news || [];
}

function getTeams() {
  const data = getSiteData();

  if (Array.isArray(data.teams) && data.teams.length > 0) {
    return data.teams;
  }

  const teamMap = new Map();

  getMatches().forEach(match => {
    [match.teamA, match.teamB].forEach(teamName => {
      if (!teamName) return;

      const current = teamMap.get(teamName) || {
        name: teamName,
        region: "未分类",
        events: new Set(),
        status: "已登记"
      };

      if (match.eventTitle) current.events.add(match.eventTitle);
      teamMap.set(teamName, current);
    });
  });

  return Array.from(teamMap.values())
    .map(team => ({
      ...team,
      events: Array.from(team.events)
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRealUrl(url) {
  return Boolean(url && url !== "#");
}

function renderHomeStats() {
  const statsBox = document.querySelector("[data-home-stats]");
  if (!statsBox) return;

  const events = getEvents();
  const teams = getTeams();
  const news = getNews();
  const openEventCount = events.filter(event => event.status === "open").length;

  statsBox.innerHTML = `
    <a class="info-card platform-card" href="events.html">
      <span>已登记赛事</span>
      <strong>${events.length} 个</strong>
      <p>社区赛、城市赛与历史赛事归档。</p>
    </a>

    <a class="info-card platform-card" href="teams.html">
      <span>注册队伍</span>
      <strong>${teams.length} 支</strong>
      <p>根据已公布比赛记录自动汇总。</p>
    </a>

    <a class="info-card platform-card" href="events.html">
      <span>开放报名</span>
      <strong>${openEventCount} 个</strong>
      <p>当前可提交报名的赛事入口。</p>
    </a>

    <a class="info-card platform-card" href="news.html">
      <span>最新公告</span>
      <strong>${news.length} 条</strong>
      <p>赛事通知、规则更新与赛程调整。</p>
    </a>
  `;
}

function renderHomeEvents() {
  const homeEventsBox = document.querySelector("[data-home-events]");
  if (!homeEventsBox) return;

  const latestEvents = getEvents();

  if (latestEvents.length === 0) {
    homeEventsBox.innerHTML = renderEmptyState("暂无赛事", "当前还没有登记赛事。");
    return;
  }

  homeEventsBox.innerHTML = latestEvents.map(renderTournamentCard).join("");
}

function renderTournamentCard(event) {
  const cover = event.cover || "images/default-event.jpg";
  const detailUrl = event.detailUrl || "#";
  const detailIsReady = isRealUrl(detailUrl);

  return `
    <article class="tournament-card">
      <div class="card-banner ${getBannerClass(event.status)}" style="background-image: linear-gradient(120deg, rgba(0,0,0,0.88), rgba(0,0,0,0.48)), url('${escapeHtml(cover)}');">
        <div class="status-tag ${getStatusClass(event.status)}">${escapeHtml(event.statusText)}</div>
        <div class="banner-text">
          <span>${escapeHtml(event.game)}</span>
          <h3 class="cover-title-en">${escapeHtml(event.coverTitle || event.title)}</h3>
        </div>
      </div>

      <div class="card-body">
        <h3>${escapeHtml(event.title)}</h3>
        <p>${escapeHtml(event.description)}</p>

        <div class="card-meta">
          <span>报名时间：${escapeHtml(event.registerTime)}</span>
          <span>比赛时间：${escapeHtml(event.matchTime)}</span>
        </div>

        <a href="${escapeHtml(detailUrl)}" class="card-link ${detailIsReady ? "" : "muted-link"}">
          ${detailIsReady ? "进入赛事" : "详情待开放"}
        </a>
      </div>
    </article>
  `;
}

function renderEventsPage(filter = "all") {
  const eventsBox = document.querySelector("[data-events-list]");
  if (!eventsBox) return;

  let events = getEvents();
  if (filter !== "all") {
    events = events.filter(event => event.status === filter);
  }

  if (events.length === 0) {
    eventsBox.innerHTML = renderEmptyState("暂无赛事", "当前筛选条件下还没有赛事。");
    return;
  }

  eventsBox.innerHTML = events.map(event => {
    const cover = event.cover || "images/default-event.jpg";
    const detailUrl = event.detailUrl || "#";
    const detailIsReady = isRealUrl(detailUrl);

    return `
      <article class="platform-event-card">
        <div class="platform-event-cover ${getCoverClass(event.status)}" style="background-image: linear-gradient(120deg, rgba(0,0,0,0.82), rgba(0,0,0,0.38)), url('${escapeHtml(cover)}');">
          <span class="event-status-tag ${getEventStatusClass(event.status)}">${escapeHtml(event.statusText)}</span>
          <div>
            <span class="event-kicker">${escapeHtml(event.game)}</span>
            <h2>${escapeHtml(event.coverTitle || event.title)}</h2>
          </div>
        </div>

        <div class="platform-event-body">
          <h3>${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(event.description)}</p>

          <div class="event-meta-grid">
            <div>
              <span>报名时间</span>
              <strong>${escapeHtml(event.registerTime)}</strong>
            </div>
            <div>
              <span>比赛时间</span>
              <strong>${escapeHtml(event.matchTime)}</strong>
            </div>
            <div>
              <span>参赛规模</span>
              <strong>${escapeHtml(event.teamsLimit)}</strong>
            </div>
          </div>

          <a href="${escapeHtml(detailUrl)}" class="card-link ${detailIsReady ? "" : "muted-link"}">
            ${detailIsReady ? "进入赛事" : "详情待开放"}
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function setupEventsFilters() {
  const filterBox = document.querySelector("[data-events-filters]");
  if (!filterBox) return;

  const buttons = filterBox.querySelectorAll("[data-filter]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderEventsPage(button.dataset.filter || "all");
    });
  });
}

function getEventParticipants(eventId) {
  const data = getSiteData();
  const eventParticipants = data.eventParticipants || {};
  return Array.isArray(eventParticipants[eventId]) ? eventParticipants[eventId] : [];
}

function renderParticipantLogo(team) {
  if (team.logo) {
    return `<img src="${escapeHtml(team.logo)}" alt="${escapeHtml(team.name)} logo" class="participant-team-logo" />`;
  }

  return `<div class="team-badge">${escapeHtml(team.badge || getTeamInitial(team.name))}</div>`;
}

function getParticipantRoleClass(role) {
  const roleMap = {
    "输出": "dps",
    "坦克": "tank",
    "支援": "support",
    "教练": "coach",
    "经理": "manager"
  };

  return roleMap[role] || "default";
}

function renderParticipantMember(member) {
  const role = member.role || '成员';
  const roleClass = getParticipantRoleClass(role);

  return `
    <div class="participant-member-chip participant-member-chip-${roleClass}">
      <span class="participant-member-role participant-member-role-${roleClass}">${escapeHtml(role)}</span>
      <span class="participant-member-id">${escapeHtml(member.id || '待补充')}</span>
    </div>
  `;
}

function renderParticipantCard(team) {
  const members = Array.isArray(team.members) ? team.members : [];

  return `
    <article class="mini-team-card participant-team-card">
      <div class="participant-team-header">
        <div class="participant-team-logo-wrap">
          ${renderParticipantLogo(team)}
        </div>
        <h3>${escapeHtml(team.name || '未命名队伍')}</h3>
      </div>

      <div class="participant-members-wrap">
        ${members.length > 0
          ? members.map(renderParticipantMember).join('')
          : `<div class="participant-member-chip is-empty"><span class="participant-member-role">名单</span><span class="participant-member-id">待补充</span></div>`}
      </div>
    </article>
  `;
}

function renderEventParticipants() {
  const box = document.querySelector('[data-event-participants]');
  if (!box) return;

  const eventId = document.body.dataset.eventId;
  const teams = getEventParticipants(eventId);

  if (teams.length === 0) {
    box.innerHTML = renderEmptyState('暂无参赛队伍名单', '当前赛事还没有可展示的队伍名单。');
    return;
  }

  box.innerHTML = teams.map(renderParticipantCard).join('');
}

function renderTeamsPage() {
  const teamsBox = document.querySelector("[data-teams-list]");
  if (!teamsBox) return;

  const teams = getTeams();

  if (teams.length === 0) {
    teamsBox.innerHTML = renderEmptyState("暂无队伍", "当前还没有可展示的队伍信息。");
    return;
  }

  teamsBox.innerHTML = teams.map(team => {
    const firstLetter = team.name.trim().charAt(0).toUpperCase() || "?";
    const events = Array.isArray(team.events) && team.events.length > 0 ? team.events.join(" / ") : "暂无记录";

    return `
      <article class="team-card">
        <div class="team-badge">${escapeHtml(firstLetter)}</div>
        <h3>${escapeHtml(team.name)}</h3>
        <p>地区：${escapeHtml(team.region || "未分类")}</p>
        <p>参与赛事：${escapeHtml(events)}</p>
        <span>状态：${escapeHtml(team.status || "已登记")}</span>
      </article>
    `;
  }).join("");
}

function renderNewsPage() {
  const newsBox = document.querySelector("[data-news-list]");
  if (!newsBox) return;

  const newsItems = getNews();

  if (newsItems.length === 0) {
    newsBox.innerHTML = renderEmptyState("暂无公告", "当前还没有公告内容。");
    return;
  }

  newsBox.innerHTML = newsItems.map(news => `
    <article class="news-card">
      <span class="news-date">${escapeHtml(news.date)}</span>
      <h2>${escapeHtml(news.title)}</h2>
      <p>${escapeHtml(news.content)}</p>
    </article>
  `).join("");
}

function getBannerClass(status) {
  return status === "open" ? "" : "secondary";
}

function getStatusClass(status) {
  return status === "open" ? "" : "gray";
}

function getCoverClass(status) {
  if (status === "open") return "open";
  if (status === "preparing") return "preparing";
  if (status === "finished") return "finished";
  return "";
}

function getEventStatusClass(status) {
  return status === "open" ? "" : "gray";
}

function renderHomeMatches() {
  const box = document.querySelector("[data-home-matches]");
  if (!box) return;

  const matches = getMatches()
    .filter(match => match.status !== "hidden")
    .slice(0, 3);

  if (matches.length === 0) {
    box.innerHTML = renderEmptyState("暂无近期赛程", "当前还没有可展示的比赛安排。");
    return;
  }

  box.innerHTML = matches.map(match => renderMatchCard(match, true)).join("");
}

function renderEventMatches() {
  const box = document.querySelector("[data-event-matches]");
  if (!box) return;

  const eventId = document.body.dataset.eventId;
  const allMatches = getMatches().filter(match => match.eventId === eventId);

  if (allMatches.length === 0) {
    box.innerHTML = renderEmptyState("暂无赛程", "当前赛事暂无已公布赛程。");
    return;
  }

  const previewLimit = 3;
  let isExpanded = false;

  function renderList() {
    const matchesToShow = isExpanded ? allMatches : allMatches.slice(0, previewLimit);
    const hasMore = allMatches.length > previewLimit;

    box.innerHTML = `
      <div class="event-match-list">
        ${matchesToShow.map(match => renderMatchRow(match)).join("")}
      </div>

      ${hasMore ? `<button class="view-all-matches" type="button" data-toggle-matches>${isExpanded ? "收起比赛" : `查看全部 ${allMatches.length} 场比赛`}</button>` : ""}
    `;

    const button = box.querySelector("[data-toggle-matches]");
    if (!button) return;

    button.addEventListener("click", () => {
      isExpanded = !isExpanded;
      renderList();
    });
  }

  renderList();
}

function renderMatchCard(match, showEventTitle = false) {
  const scoreText = match.status === "finished" && hasMatchScore(match)
    ? `${match.scoreA} : ${match.scoreB}`
    : "VS";

  return `
    <div class="match-card">
      <div class="match-stage">${escapeHtml(match.statusText)}</div>
      ${showEventTitle ? `<div class="match-event-title">${escapeHtml(match.eventTitle)}</div>` : ""}

      <div class="match-date">
        <span>${escapeHtml(match.date)}</span>
        <strong>${escapeHtml(match.time)}</strong>
      </div>

      <div class="match-teams">
        <div class="team">
          <div class="team-logo">${escapeHtml(getTeamInitial(match.teamA))}</div>
          <span>${escapeHtml(match.teamA)}</span>
        </div>

        <div class="match-time">
          <strong>${escapeHtml(scoreText)}</strong>
          <span>${escapeHtml(match.format)}</span>
        </div>

        <div class="team">
          <div class="team-logo">${escapeHtml(getTeamInitial(match.teamB))}</div>
          <span>${escapeHtml(match.teamB)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderMatchRow(match) {
  return renderScheduleRow(match, false);
}

function renderSchedulePage(filter = "all") {
  const box = document.querySelector("[data-schedule-list]");
  if (!box) return;

  let matches = getMatches();

  if (filter !== "all") {
    matches = matches.filter(match => match.status === filter);
  }

  if (matches.length === 0) {
    box.innerHTML = renderEmptyState("暂无赛程", "当前筛选条件下还没有比赛安排。");
    return;
  }

  box.innerHTML = matches.map(match => renderScheduleRow(match, true)).join("");
}

function renderScheduleRow(match, showEventTitle) {
  const scoreHtml = renderScoreOrTime(match);
  const hasScore = hasMatchScore(match);
  const winnerA = match.status === "finished" && hasScore && Number(match.scoreA) > Number(match.scoreB);
  const winnerB = match.status === "finished" && hasScore && Number(match.scoreB) > Number(match.scoreA);
  const detailHtml = isRealUrl(match.streamUrl)
    ? `<a href="${escapeHtml(match.streamUrl)}" class="mini-btn" target="_blank" rel="noopener noreferrer">详情</a>`
    : `<span class="mini-btn muted-link">详情</span>`;

  return `
    <div class="schedule-row ${showEventTitle ? "schedule-row-full" : ""}">
      <div class="schedule-date">
        <strong>${escapeHtml(match.date)}</strong>
        ${scoreHtml}
      </div>

      <div class="schedule-info">
        <span class="status-tag small ${getMatchStatusClass(match.status)}">${escapeHtml(match.statusText)}</span>
        <h3>
          <span class="${winnerA ? "match-winner" : ""}">${escapeHtml(match.teamA)}</span>
          <span class="versus">vs</span>
          <span class="${winnerB ? "match-winner" : ""}">${escapeHtml(match.teamB)}</span>
        </h3>
        <p>${showEventTitle ? `${escapeHtml(match.eventTitle)} · ` : ""}${escapeHtml(match.stage)} · ${escapeHtml(match.format)}</p>
      </div>

      ${detailHtml}
    </div>
  `;
}

function getTeamInitial(teamName) {
  return String(teamName || "?").trim().charAt(0).toUpperCase() || "?";
}

function getMatchStatusClass(status) {
  return status === "finished" ? "gray" : "";
}

function renderScoreOrTime(match) {
  if (match.status === "finished" && hasMatchScore(match)) {
    return `
      <div class="schedule-time">${escapeHtml(match.time)}</div>
      <div class="schedule-score">
        <span class="${Number(match.scoreA) > Number(match.scoreB) ? "winner" : ""}">${escapeHtml(match.scoreA)}</span>
        <span>-</span>
        <span class="${Number(match.scoreB) > Number(match.scoreA) ? "winner" : ""}">${escapeHtml(match.scoreB)}</span>
      </div>
    `;
  }

  return `<div class="schedule-time">${escapeHtml(match.time)}</div>`;
}

function setupScheduleFilters() {
  const filterBox = document.querySelector("[data-schedule-filters]");
  if (!filterBox) return;

  const buttons = filterBox.querySelectorAll("[data-filter]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderSchedulePage(button.dataset.filter || "all");
    });
  });
}

function setupEventNewsToggle() {
  const list = document.querySelector("[data-event-news-list]");
  const button = document.querySelector("[data-toggle-event-news]");
  if (!list || !button) return;

  const newsItems = Array.from(list.querySelectorAll(".news-card"));
  const previewLimit = 3;
  let isExpanded = false;

  if (newsItems.length <= previewLimit) {
    button.style.display = "none";
    return;
  }

  function renderNewsVisibility() {
    newsItems.forEach((item, index) => {
      item.style.display = isExpanded || index < previewLimit ? "" : "none";
    });

    button.textContent = isExpanded
      ? "收起公告"
      : `查看所有 ${newsItems.length} 条公告`;
  }

  button.addEventListener("click", () => {
    isExpanded = !isExpanded;
    renderNewsVisibility();
  });

  renderNewsVisibility();
}

function setupSingleNewsToggle() {
  const buttons = document.querySelectorAll("[data-toggle-single-news]");

  buttons.forEach(button => {
    const card = button.closest(".collapsible-news");
    if (!card) return;

    button.addEventListener("click", () => {
      card.classList.toggle("expanded");
      button.textContent = card.classList.contains("expanded") ? "收起全文" : "展开全文";
    });
  });
}

function renderEmptyState(title, text) {
  return `
    <div class="empty-state">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function setupEventTabs() {
  const tabBox = document.querySelector("[data-event-tabs]");
  if (!tabBox) return;

  const tabs = Array.from(tabBox.querySelectorAll("[data-tab-target]"));
  const panels = Array.from(document.querySelectorAll("[data-tab-panel]"));

  if (tabs.length === 0 || panels.length === 0) return;

  function switchTab(targetName) {
    tabs.forEach(tab => {
      const isActive = tab.dataset.tabTarget === targetName;
      tab.classList.toggle("active", isActive);
    });

    panels.forEach(panel => {
      const isActive = panel.dataset.tabPanel === targetName;
      panel.classList.toggle("is-active", isActive);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tabTarget);
    });
  });
}

function setupHeroTabButtons() {
  const buttons = document.querySelectorAll("[data-hero-tab]");
  if (!buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.heroTab;
      const scrollTarget = button.dataset.scrollTarget;

      document.querySelectorAll("[data-tab-panel]").forEach(panel => {
        panel.classList.toggle("is-active", panel.dataset.tabPanel === targetTab);
      });

      document.querySelectorAll("[data-tab-target]").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.tabTarget === targetTab);
      });

      const targetElement = scrollTarget
        ? document.getElementById(scrollTarget)
        : document.querySelector(`[data-tab-panel="${targetTab}"]`);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}