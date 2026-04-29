document.addEventListener("DOMContentLoaded", () => {
  renderHomeStats();
  renderHomeEvents();
  renderEventsPage();
  renderTeamsPage();
  renderNewsPage();
});

function renderHomeStats() {
  const statsBox = document.querySelector("[data-home-stats]");
  if (!statsBox) return;

  const eventCount = siteData.events.length;
  const teamCount = siteData.teams.length;
  const openEventCount = siteData.events.filter(event => event.status === "open").length;
  const newsCount = siteData.news.length;

  statsBox.innerHTML = `
    <a class="info-card platform-card" href="events.html">
      <span>已登记赛事</span>
      <strong>${eventCount} 个</strong>
      <p>社区赛、城市赛与历史赛事归档。</p>
    </a>

    <a class="info-card platform-card" href="teams.html">
      <span>注册队伍</span>
      <strong>${teamCount} 支</strong>
      <p>展示已注册的队伍或俱乐部。</p>
    </a>

    <a class="info-card platform-card" href="events.html">
      <span>开放报名</span>
      <strong>${openEventCount} 个</strong>
      <p>当前可提交报名的赛事入口。</p>
    </a>

    <a class="info-card platform-card" href="news.html">
      <span>最新公告</span>
      <strong>${newsCount} 条</strong>
      <p>赛事通知、规则更新与赛程调整。</p>
    </a>
  `;
}

function renderHomeEvents() {
  const homeEventsBox = document.querySelector("[data-home-events]");
  if (!homeEventsBox) return;

  const latestEvents = siteData.events.slice(0, 2);

  homeEventsBox.innerHTML = latestEvents.map(event => {
    return `
      <article class="tournament-card">
        <div class="card-banner ${getBannerClass(event.status)}" style="background-image:
        linear-gradient(120deg, rgba(0,0,0,0.88), rgba(0,0,0,0.48)), url('${event.cover}');">
          <div class="status-tag ${getStatusClass(event.status)}">${event.statusText}</div>
            <div class="banner-text">
                <span>${event.game}</span>
                <h3 class="cover-title-en">${event.coverTitle || event.title}</h3>
            </div>
        </div>

        <div class="card-body">
          <h3>${event.title}</h3>
          <p>${event.description}</p>

          <div class="card-meta">
            <span>赛事类型：${event.type}</span>
            <span>比赛时间：${event.matchTime}</span>
          </div>

          <a href="${event.detailUrl}" class="card-link">进入赛事</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderEventsPage() {
  const eventsBox = document.querySelector("[data-events-list]");
  if (!eventsBox) return;

  eventsBox.innerHTML = siteData.events.map(event => {
    return `
      <article class="platform-event-card">
        <div class="platform-event-cover ${getCoverClass(event.status)}" style="background-image:
            linear-gradient(120deg, rgba(0,0,0,0.82), rgba(0,0,0,0.38)),
            url('${event.cover || "images/default-event.jpg"}');">
            <span class="event-status-tag ${getEventStatusClass(event.status)}">${event.statusText}</span>
            <div>
                <span class="event-kicker">${event.game}</span>
                <h2>${event.coverTitle || event.title}</h2>
            </div>
        </div>

        <div class="platform-event-body">
          <h3>${event.title}</h3>
          <p>${event.description}</p>

          <div class="event-meta-grid">
            <div>
              <span>报名时间</span>
              <strong>${event.registerTime}</strong>
            </div>
            <div>
              <span>比赛时间</span>
              <strong>${event.matchTime}</strong>
            </div>
            <div>
              <span>状态</span>
              <strong>${event.statusText}</strong>
            </div>
          </div>

          <a href="${event.detailUrl}" class="card-link ${event.detailUrl === "#" ? "muted-link" : ""}">
            ${event.detailUrl === "#" ? "详情待开放" : "进入赛事"}
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function renderTeamsPage() {
  const teamsBox = document.querySelector("[data-teams-list]");
  if (!teamsBox) return;

  teamsBox.innerHTML = siteData.teams.map(team => {
    const firstLetter = team.name.charAt(0).toUpperCase();

    return `
      <article class="team-card">
        <div class="team-badge">${firstLetter}</div>
        <h3>${team.name}</h3>
        <p>地区：${team.region}</p>
        <p>参与赛事：${team.events.join(" / ")}</p>
        <span>状态：${team.status}</span>
      </article>
    `;
  }).join("");
}

function renderNewsPage() {
  const newsBox = document.querySelector("[data-news-list]");
  if (!newsBox) return;

  newsBox.innerHTML = siteData.news.map(news => {
    return `
      <article class="news-card">
        <span class="news-date">${news.date}</span>
        <h2>${news.title}</h2>
        <p>${news.content}</p>
        <a href="#">阅读全文</a>
      </article>
    `;
  }).join("");
}

function getBannerClass(status) {
  if (status === "preparing") return "secondary";
  if (status === "finished") return "secondary";
  return "";
}

function getStatusClass(status) {
  if (status === "open") return "";
  return "gray";
}

function getCoverClass(status) {
  if (status === "open") return "open";
  if (status === "preparing") return "preparing";
  if (status === "finished") return "finished";
  return "";
}

function getEventStatusClass(status) {
  if (status === "open") return "";
  if (status === "preparing") return "gray";
  if (status === "finished") return "dark";
  return "";
}