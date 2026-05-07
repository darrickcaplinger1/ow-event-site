const bracketRenderers = {
  "double-4-simple": renderTierBracket,
  "double-16-simple": renderDoubleElim16Bracket,
  "single-elim-simple": renderSingleElimBracket,
  "single-8-simple": renderSingleElimBracket
};

function escapeBracketHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderBracketTeam(team = {}) {
  const scoreEmpty = team.score === null || team.score === undefined || team.score === "";

  return `
    <div class="bracket-team-row ${team.winner ? "winner" : ""} ${team.placeholder ? "placeholder" : ""}">
      <span class="bracket-seed">${escapeBracketHtml(team.seed || "")}</span>
      <span class="bracket-team-name">${escapeBracketHtml(team.name || "待定")}</span>
      <span class="bracket-score ${scoreEmpty ? "empty" : ""}">
        ${scoreEmpty ? "" : escapeBracketHtml(team.score)}
      </span>
    </div>
  `;
}

function renderBracketMatch(match = {}) {
  return `
    <div class="bracket-match-slot ${escapeBracketHtml(match.slotClass || "")}">
      <article class="bracket-match-card">
        ${(match.teams || []).map(renderBracketTeam).join("")}
      </article>

      ${match.connector === "single" ? `<div class="bracket-single-connector"></div>` : ""}
    </div>
  `;
}

function renderBracketRound(round = {}) {
  return `
    <div class="bracket-round">
      <div class="bracket-round-title">${escapeBracketHtml(round.title)}</div>

      <div class="bracket-round-body">
        ${(round.matches || []).map(renderBracketMatch).join("")}

        ${round.connector === "pair" ? `<div class="bracket-pair-connector"><span></span></div>` : ""}
      </div>
    </div>
  `;
}

function renderBracketTier(tier = {}) {
  return `
    <div class="bracket-tier bracket-${escapeBracketHtml(tier.type)}">
      <div class="bracket-tier-title">
        <span>${escapeBracketHtml(tier.tag)}</span>
        <strong>${escapeBracketHtml(tier.title)}</strong>
      </div>

      <div class="bracket-grid bracket-${escapeBracketHtml(tier.type)}-grid">
        ${(tier.rounds || []).map(renderBracketRound).join("")}
      </div>
    </div>
  `;
}

function renderTierBracket(bracket = {}) {
  return `
    ${(bracket.tiers || []).map(renderBracketTier).join("")}
    ${renderExtraRoundsAsTier(bracket.extraRounds)}
  `;
}

function renderExtraRoundsAsTier(extraRounds = []) {
  if (!extraRounds.length) return "";

  return extraRounds.map(round => `
    <div class="bracket-tier bracket-extra">
      <div class="bracket-tier-title">
        <span>EXTRA</span>
        <strong>${escapeBracketHtml(round.title)}</strong>
      </div>

      <div class="bracket-grid bracket-extra-grid">
        <div class="bracket-round">
          <div class="bracket-round-title">${escapeBracketHtml(round.title)}</div>
          <div class="bracket-round-body">
            ${(round.matches || []).map(renderBracketMatch).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}


/* 16强双败淘汰赛：胜者组 + 败者组 + 总决赛。 */
function renderDoubleElim16Round(round = {}, roundIndex = 0, tierType = "") {
  return `
    <div class="bracket-round double16-round double16-${escapeBracketHtml(tierType)}-round-${roundIndex + 1}">
      <div class="bracket-round-title">${escapeBracketHtml(round.title)}</div>
      <div class="bracket-round-body">
        ${(round.matches || []).map(renderBracketMatch).join("")}
      </div>
    </div>
  `;
}

function renderDoubleElim16Tier(tier = {}) {
  const tierType = tier.type || "tier";

  return `
    <div class="bracket-tier bracket-${escapeBracketHtml(tierType)} double16-tier">
      <div class="bracket-tier-title">
        <span>${escapeBracketHtml(tier.tag)}</span>
        <strong>${escapeBracketHtml(tier.title)}</strong>
      </div>

      <div class="bracket-grid bracket-${escapeBracketHtml(tierType)}-grid double16-grid">
        ${(tier.rounds || []).map((round, index) => renderDoubleElim16Round(round, index, tierType)).join("")}
      </div>
    </div>
  `;
}

function renderDoubleElim16ExtraRounds(extraRounds = []) {
  if (!extraRounds.length) return "";

  return `
    <div class="bracket-tier bracket-finals double16-tier">
      <div class="bracket-tier-title">
        <span>FINALS</span>
        <strong>总决赛区</strong>
      </div>

      <div class="bracket-grid bracket-finals-grid double16-grid">
        ${extraRounds.map((round, index) => renderDoubleElim16Round(round, index, "finals")).join("")}
      </div>
    </div>
  `;
}

function renderDoubleElim16Bracket(bracket = {}) {
  return `
    <div class="double16-layout">
      ${(bracket.tiers || []).map(renderDoubleElim16Tier).join("")}
      ${renderDoubleElim16ExtraRounds(bracket.extraRounds)}
    </div>
  `;
}

/* 单败淘汰赛：适用于 8 强、16 强或自定义轮次。CSS 类名沿用 single16，是为了兼容原来的样式。 */
function renderSingleElimMatch(match = {}, hasNext = false) {
  return `
    <div class="single16-match-wrap ${hasNext ? "has-next" : ""}">
      <article class="bracket-match-card">
        ${(match.teams || []).map(renderBracketTeam).join("")}
      </article>
    </div>
  `;
}

function renderSingleElimRound(round = {}, roundIndex, totalRounds) {
  const hasNext = roundIndex < totalRounds - 1;

  return `
    <div class="single16-round single16-round-${roundIndex + 1}">
      <div class="bracket-round-title">${escapeBracketHtml(round.title)}</div>

      <div class="single16-round-body">
        ${(round.matches || []).map(match => renderSingleElimMatch(match, hasNext)).join("")}
      </div>
    </div>
  `;
}

function renderSingleElimExtraRoundsInline(extraRounds = []) {
  if (!extraRounds.length) return "";

  return extraRounds.map((round, index) => `
    <div class="single16-round single16-extra-round single16-extra-round-${index + 1}" style="margin-top: 18px;">
      <div class="bracket-round-title">${escapeBracketHtml(round.title)}</div>
      <div class="single16-round-body">
        ${(round.matches || []).map(match => renderSingleElimMatch(match, false)).join("")}
      </div>
    </div>
  `).join("");
}

function renderSingleElimBracket(bracket = {}) {
  const rounds = bracket.rounds || [];
  const regularRounds = rounds.slice(0, -1);
  const finalRound = rounds[rounds.length - 1];

  return `
    <div class="single16-layout">
      <div class="single16-rounds">
        ${regularRounds.map((round, index) => renderSingleElimRound(round, index, rounds.length)).join("")}

        <div class="single16-final-stack">
          ${finalRound ? renderSingleElimRound(finalRound, rounds.length - 1, rounds.length) : ""}
          ${renderSingleElimExtraRoundsInline(bracket.extraRounds)}
        </div>
      </div>
    </div>
  `;
}

function renderBracket(eventId) {
  const board = document.querySelector("[data-bracket-board]");

  if (!board) return;

  const bracketData = typeof brackets !== "undefined"
    ? brackets
    : (typeof window !== "undefined" ? window.brackets : undefined);

  if (!bracketData) {
    board.innerHTML = `<p class="bracket-empty">brackets 数据未加载，请检查 data.js。</p>`;
    return;
  }

  const bracket = bracketData[eventId];

  if (!bracket) {
    board.innerHTML = `<p class="bracket-empty">当前赛事暂无淘汰赛对阵。</p>`;
    return;
  }

  const renderer = bracketRenderers[bracket.type];

  if (!renderer) {
    board.innerHTML = `<p class="bracket-empty">暂不支持该 bracket 类型：${escapeBracketHtml(bracket.type)}</p>`;
    return;
  }

  board.innerHTML = renderer(bracket);
}

document.addEventListener("DOMContentLoaded", () => {
  const eventId = document.body.dataset.eventId;
  renderBracket(eventId);
});
