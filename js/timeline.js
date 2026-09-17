(function (global) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderForTopic(topicId) {
    const data = (global.LLB && global.LLB.timelines && global.LLB.timelines[topicId]) || null;
    if (!data || !(data.beats || []).length) return "";
    const beats = (data.beats || [])
      .map(
        (b) => `<li>
          <span class="tl-node" aria-hidden="true"></span>
          <article class="tl-card">
            <dl class="tl-fields">
              <div class="tl-field"><dt>Era / Year</dt><dd><span class="tl-year">${esc(b.year)}</span></dd></div>
              <div class="tl-field"><dt>Who</dt><dd><strong>${esc(b.name)}</strong></dd></div>
              <div class="tl-field"><dt>Landmark</dt><dd>${esc(b.work || "")}</dd></div>
              <div class="tl-field"><dt>What they said</dt><dd>${esc(b.doctrine || "")}</dd></div>
              <div class="tl-field"><dt>What they pushed back against</dt><dd>${esc(b.shift || "")}</dd></div>
            </dl>
          </article>
        </li>`
      )
      .join("");
    const title = data.title ? `<h2 class="section-title">${esc(data.title)}</h2>` : `<h2 class="section-title">Timeline</h2>`;
    return `${title}<ol class="timeline">${beats}</ol>`;
  }

  function searchBlob(topicId) {
    const data = (global.LLB && global.LLB.timelines && global.LLB.timelines[topicId]) || null;
    if (!data) return "";
    return JSON.stringify(data).toLowerCase();
  }

  global.LLBTimeline = { renderForTopic, searchBlob };
})(window);
