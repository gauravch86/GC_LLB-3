(function () {
  const STORAGE = "llb3-progress-v1";
  const THEME_KEY = "llb3-theme";
  const papers = window.LLB && window.LLB.papers ? window.LLB.papers : {};
  const extra = window.LLB && window.LLB.pages ? window.LLB.pages : {};

  const subjectNav = document.getElementById("subjectNav");
  const topicNav = document.getElementById("topicNav");
  const sidebarTitle = document.getElementById("sidebarTitle");
  const filterRow = document.getElementById("filterRow");
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const globalProgress = document.getElementById("globalProgress");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  let filter = "all";
  let charts = [];

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE) || "{}");
    } catch {
      return {};
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE, JSON.stringify(p));
  }
  function sortedTopics(paper) {
    return (paper.topics || []).slice().sort((a, b) => (a.seq || 99) - (b.seq || 99));
  }
  function allTopics() {
    const list = [];
    Object.values(papers).forEach((paper) => {
      sortedTopics(paper).forEach((t) => list.push({ paper, topic: t }));
    });
    return list;
  }
  function sealedCount() {
    const p = loadProgress();
    const all = allTopics();
    const n = all.filter((x) => p[x.topic.id]).length;
    return { n, t: all.length };
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    document.getElementById("themeBtn").textContent = theme === "light" ? "Dark" : "Light";
  }

  function parseHash() {
    const raw = (location.hash || "#/overview").replace(/^#\/?/, "");
    const [page, id] = raw.split("/");
    return { page: page || "overview", id: id || "" };
  }

  const EXTRA_DEFAULTS = { overview: "dash", strategy: "method", resources: "publishers", logbook: "all" };
  const LOG_FILTERS = [
    ["all", "All"],
    ["k3001", "Muslim Law"],
    ["k3002", "PIL"],
    ["k3003", "Admin Law"],
    ["k3004", "Property"],
    ["k3005", "Prof. Ethics"],
    ["site", "Site"]
  ];
  let scrollToken = 0;

  function headerOffset() {
    const top = document.querySelector(".topbar");
    const nav = document.querySelector(".subject-nav");
    return (top ? top.offsetHeight : 72) + (nav ? nav.offsetHeight : 58) + 12;
  }

  function revealSidebarLink() {
    const active = document.querySelector(".topic-link.active");
    const nav = document.getElementById("topicNav");
    if (!active || !nav) return;
    const a = active.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    if (a.top < n.top) nav.scrollTop -= n.top - a.top;
    else if (a.bottom > n.bottom) nav.scrollTop += a.bottom - n.bottom;
  }

  function findJumpTarget(id) {
    if (id) {
      return (
        document.getElementById("topic-" + id) ||
        document.getElementById("sec-" + id) ||
        document.querySelector("#main [data-jump=\"" + id + "\"]")
      );
    }
    return document.querySelector("#main .hero, #main article.topic[id], #main .panel[id]");
  }

  function pageAlreadyMounted(page) {
    if (page === "overview") return !!document.getElementById("topic-dash");
    if (page === "resources") return !!document.getElementById("topic-publishers");
    if (page === "strategy") return !!document.getElementById("topic-method");
    if (page === "logbook") {
      const el = document.getElementById("topic-logbook");
      return !!(el && el.getAttribute("data-jump") === (parseHash().id || "all"));
    }
    const paper = papers[page];
    if (!paper) return false;
    const first = sortedTopics(paper)[0];
    return !!(first && document.getElementById("topic-" + first.id));
  }

  function scrollToHashTarget(id) {
    const target = findJumpTarget(id);
    if (!target) return false;
    const scroller = document.scrollingElement || document.documentElement;
    const y = Math.max(0, scroller.scrollTop + target.getBoundingClientRect().top - headerOffset());
    scroller.scrollTop = y;
    revealSidebarLink();
    return true;
  }

  function afterPaint(fn) {
    requestAnimationFrame(() => requestAnimationFrame(fn));
  }

  function queueScroll(id) {
    const token = ++scrollToken;
    const run = () => {
      if (token !== scrollToken) return;
      scrollToHashTarget(id || "");
    };
    run();
    afterPaint(run);
    [32, 80, 160, 320, 640, 1000].forEach((ms) => setTimeout(run, ms));
  }

  function syncChrome() {
    navTabs();
    renderSidebar();
  }

  function go(page, id) {
    const next = id ? `#/${page}/${id}` : `#/${page}`;
    sidebar.classList.remove("open");
    if (location.hash === next) {
      queueScroll(id || "");
      return;
    }
    history.pushState({ page, id: id || "" }, "", next);
    if (pageAlreadyMounted(page)) {
      syncChrome();
      queueScroll(id || "");
      return;
    }
    render();
  }

  function onRouteChange() {
    const { page, id } = parseHash();
    if (pageAlreadyMounted(page)) {
      syncChrome();
      queueScroll(id || "");
      return;
    }
    render();
  }

  function destroyCharts() {
    charts.forEach((c) => {
      try { c.destroy(); } catch { /* ignore */ }
    });
    charts = [];
  }

  function navTabs() {
    const tabs = [
      { id: "overview", label: "Overview", small: "Dashboard" },
      { id: "k3001", label: "Muslim Law", small: "K-3001" },
      { id: "k3002", label: "PIL", small: "K-3002" },
      { id: "k3003", label: "Admin Law", small: "K-3003" },
      { id: "k3004", label: "Property", small: "K-3004" },
      { id: "k3005", label: "Prof. Ethics", small: "K-3005" },
      { id: "logbook", label: "Logbook", small: "What’s new" },
      { id: "strategy", label: "Exam strategy", small: "Sem-3 method" },
      { id: "resources", label: "Resources", small: "Books + YT" }
    ];
    const { page } = parseHash();
    subjectNav.innerHTML = tabs
      .map(
        (t) =>
          `<button class="tab ${t.id === page ? "active" : ""}" type="button" data-nav="${t.id}"><small>${t.small}</small>${t.label}</button>`
      )
      .join("");
  }

  function renderSidebar() {
    const { page, id } = parseHash();
    const paper = papers[page];
    filterRow.innerHTML = "";
    if (!paper) {
      sidebarTitle.textContent =
        page === "resources" ? "Shelf" : page === "strategy" ? "Plan" : page === "logbook" ? "Logbook" : "Navigate";
      const extras =
        page === "resources"
          ? [
              ["publishers", "Publishers"],
              ["youtube", "YouTube"],
              ["bareacts", "Bare acts"],
              ["copyright", "How to cite"]
            ]
          : page === "strategy"
            ? [
                ["method", "Study method"],
                ["answers", "Answer formula"],
                ["heatmap", "PYQ heatmap"]
              ]
            : page === "logbook"
              ? LOG_FILTERS
              : [
                  ["dash", "Dashboard"],
                  ["papers", "Five papers"],
                  ["countdown", "Dec 2026"],
                  ["heatmap", "PYQ heatmap"],
                  ["coverage", "Syllabus map"]
                ];
      topicNav.innerHTML = extras
        .map(
          ([eid, label]) =>
            `<button class="topic-link ${id === eid || (!id && eid === extras[0][0]) ? "active" : ""}" data-nav="${page}" data-topic="${eid}">${label}</button>`
        )
        .join("");
      return;
    }
    sidebarTitle.textContent = paper.short;
    ["all", "high", "open", "sealed"].forEach((f) => {
      const b = document.createElement("button");
      b.className = "chip" + (filter === f ? " on" : "");
      b.textContent = f;
      b.onclick = () => {
        filter = f;
        renderSidebar();
      };
      filterRow.appendChild(b);
    });
    const prog = loadProgress();
    const topics = sortedTopics(paper);
    topicNav.innerHTML = topics
      .filter((t) => {
        if (filter === "high") return t.yield === "high";
        if (filter === "sealed") return !!prog[t.id];
        if (filter === "open") return !prog[t.id];
        return true;
      })
      .map((t) => {
        const active = t.id === id || (!id && t.id === topics[0].id);
        return `<button class="topic-link ${active ? "active" : ""} ${prog[t.id] ? "sealed" : ""} ${t.yield === "high" ? "high" : ""}" data-nav="${page}" data-topic="${t.id}">
          <span class="dot"></span>
          <span>${t.title}${t.readAs ? `<div class="yield">${t.readAs}</div>` : t.yield === "high" ? '<div class="yield">high-yield</div>' : ""}</span>
        </button>`;
      })
      .join("");
  }

  function topicHtml(paper, topic) {
    const prog = loadProgress();
    const sealed = !!prog[topic.id];
    const cases = (topic.cases || [])
      .map(
        (c) =>
          `<div class="case"><div><strong>${c.name}</strong><div class="search-query">${c.citation || ""}</div></div><span>${c.point}</span></div>`
      )
      .join("");
    const pyqs = (topic.pyqs || [])
      .map(
        (q) => `<article class="pyq">
          <div class="meta">${q.year} · ${q.section || "theme"} · ${q.marks || ""} marks</div>
          <h4>${q.q}</h4>
          <ol class="outline">${(q.outline || []).map((li) => `<li>${li}</li>`).join("")}</ol>
        </article>`
      )
      .join("");
    const yt = (topic.youtube || paper.youtube || [])
      .slice(0, 3)
      .map(
        (y) => `<div class="yt-card"><strong>${y.title}</strong><div class="search-query">Search: ${y.search}</div>
        <p><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(y.search)}" target="_blank" rel="noopener">Open YouTube search</a></p></div>`
      )
      .join("");
    const checks = (topic.check || []).map((c) => `<li>${c}</li>`).join("");
    const shelf = paper.shelf
      ? `<aside class="note shelf-banner"><h3>Primary textbook</h3><p>${paper.shelf.primary}${topic.readAs ? ` · <em>${topic.readAs}</em>` : ""}. Site prose is original — use the book for full case extracts, then Unique only as a question drill.</p></aside>`
      : "";
    return `<article class="topic" id="topic-${topic.id}">
      <div class="topic-head">
        <div>
          <p class="kicker">${paper.code} · ${topic.readAs || "Unit " + (topic.unit || "—")} ${topic.yield === "high" ? '<span class="badge">High-yield PYQ</span>' : ""}</p>
          <h1>${topic.title}</h1>
          <p class="lede">${topic.summary || ""}</p>
        </div>
        <button class="seal-btn ${sealed ? "sealed" : ""}" data-seal="${topic.id}">${sealed ? "Sealed ✓" : "Seal this topic"}</button>
      </div>
      ${shelf}
      <h2 class="section-title">Concept</h2>
      <div class="explainer">${topic.explainer}</div>
      ${
        topic.analogy
          ? `<aside class="analogy"><h3>${topic.analogy.title || "Engineer analogy"}</h3><p>${topic.analogy.body}</p></aside>`
          : ""
      }
      ${window.LLBTimeline ? window.LLBTimeline.renderForTopic(topic.id) : ""}
      <h2 class="section-title">Diagram</h2>
      ${window.LLBDiagrams.render(topic.diagram)}
      ${
        topic.mnemonic
          ? `<aside class="mnemonic"><h3>Memory hook · ${topic.mnemonic.name}</h3><p><strong>${topic.mnemonic.hook}</strong></p><p>${topic.mnemonic.recite || ""}</p></aside>`
          : ""
      }
      <h2 class="section-title">Landmark cases / statutes</h2>
      <div class="cases">${cases}</div>
      <h2 class="section-title">CCS-style questions (public themes)</h2>
      <p class="note">Worded from public PYQ themes (blogs/indexes). Unique/Nitin and primary textbooks are not reproduced. Write your own English; confirm the year’s paper with college. Cites flagged VERIFY need a judgment PDF or India Code check before the hall.</p>
      ${pyqs}
      <h2 class="section-title">Seal checklist</h2>
      <ul class="check-list">${checks}</ul>
      <h2 class="section-title">Watch next</h2>
      <div class="yt-row">${yt}</div>
    </article>`;
  }

  function overviewHtml() {
    const { n, t } = sealedCount();
    const exam = new Date("2026-12-01T09:00:00+05:30");
    const days = Math.max(0, Math.ceil((exam - Date.now()) / 86400000));
    const cards = Object.values(papers)
      .map((p) => {
        const prog = loadProgress();
        const tot = sortedTopics(p).length;
        const done = sortedTopics(p).filter((x) => prog[x.id]).length;
        const pct = tot ? Math.round((done / tot) * 100) : 0;
        return `<div class="card" data-nav="${p.id}">
          <div class="code">${p.code}</div>
          <h3>${p.title}</h3>
          <p>${p.blurb}</p>
          <div class="meter" aria-label="${pct}% sealed"><span style="width:${pct}%"></span></div>
          <p>${done}/${tot} topics sealed</p>
        </div>`;
      })
      .join("");
    return `<section class="hero" id="topic-dash" data-jump="dash">
      <p class="kicker">Bhawana Chaudahry · HLM College, Ghaziabad</p>
      <h2>Five Sem-3 papers, one study bench</h2>
      <p class="lede">CCS University Meerut LL.B. 3-year <strong>Semester 3</strong>. Target window: December 2026. Original exam-ready explainers for all five papers. <strong>K-3005 practical Project File</strong> is a separate print pack — this tab is theory/accountability doctrine only. Track new content in <button type="button" class="text-link" data-nav="logbook">Logbook</button>.</p>
      <div class="stat-row">
        <div class="stat"><b>${days}</b>days to Dec 2026 window</div>
        <div class="stat"><b>${n}/${t}</b>topics sealed</div>
        <div class="stat"><b>500</b>theory marks</div>
        <div class="stat"><b>K-3005</b>project file separate</div>
      </div>
    </section>
    <section class="panel" id="topic-papers" data-jump="papers">
      <h2 class="display">Papers</h2>
      <div class="grid-cards">${cards}</div>
    </section>
    <section class="panel">
      <h2 class="display">How to use this bench</h2>
      <ol>
        <li>Open a topic → read the explainer → confirm every section on India Code / the CCS primary book.</li>
        <li>Redraw the diagram from memory; replace the mnemonic with your own after one pass.</li>
        <li>Attempt a timed outline (20-marker ≈ 25–30 min) from the CCS-style question spine.</li>
        <li>Hit <strong>Seal this topic</strong> only when you can do that without scrolling.</li>
        <li>Use Unique/Nitin only as a <em>question-shape drill after</em> bare act + textbook + this site.</li>
        <li>For <strong>K-3005</strong>, keep the college Project File / viva pack offline — these cards are doctrine, not the practical file.</li>
      </ol>
    </section>
    <section class="panel">
      <h2 class="display">Primary shelf (buy / use)</h2>
      <ol>
        <li>K-3001 — Mulla + Fyzee (Aqil Ahmad / Tahir Mahmood overlay) + DMMA, MWPRDA, Shariat Act, Family Courts Act</li>
        <li>K-3002 — Starke / S.K. Kapoor / H.O. Aggarwal + UN Charter / ICJ Statute Art. 38 / UNCLOS zone extracts</li>
        <li>K-3003 — Massey + Takwani + Constitution Arts. 14, 21, 32, 226, 136, 323A–B</li>
        <li>K-3004 — Mulla TPA + college TPA text (Shukla / Tripathi class) + TPA &amp; Easements Act bare</li>
        <li>K-3005 — Kailash Rai / Gupta / Sirohi for structure + Advocates Act, BCI Rules, Contempt Act + practical-training print pack</li>
      </ol>
      <aside class="note"><h3>Content status</h3>
        <p>Every syllabus heading now has an original explainer, diagram, mnemonic, case hooks, and CCS-style outline. Unique/Nitin remains drill-only. Items marked <strong>VERIFY</strong> need a judgment PDF or India Code check before you treat the cite as gospel in the hall.</p>
      </aside>
    </section>
    <section class="panel" id="topic-countdown" data-jump="countdown">
      <h2 class="display">December 2026 window</h2>
      <p>Treat this as a hard deadline. ${days} days remain from today. Five theory papers × 100 marks. Seal topics only when you can write a timed outline without scrolling this site.</p>
      <div class="stat-row">
        <div class="stat"><b>${days}</b>days remaining</div>
        <div class="stat"><b>5 × 100</b>theory marks</div>
        <div class="stat"><b>${n}/${t}</b>topics sealed</div>
      </div>
    </section>
    <section class="panel" id="topic-heatmap" data-jump="heatmap">
      <h2 class="display">PYQ pressure (theme heatmap — provisional)</h2>
      <p>Relative weight guess for Sem-3 revision sequencing from typical CCS Family Law–II / PIL / Admin / Property / Ethics themes — not an official mark scheme. Recalibrate once public Dec papers are mapped.</p>
      <canvas id="heatChart" height="120"></canvas>
    </section>
    <section class="panel" id="topic-coverage" data-jump="coverage">
      <h2 class="display">Official CCS Sem-3 map (shell coverage)</h2>
      <p>Checked against CCS LL.B. Semester-3 paper codes <strong>K-3001–K-3005</strong>. Every listed heading has a full original card (wave 1). Recalibrate PYQ years against college papers when you get them.</p>
      <table class="compare">
        <thead><tr><th>Paper</th><th>Syllabus headings on this site</th><th>Topic cards</th></tr></thead>
        <tbody>
          <tr><td>K-3001</td><td>Intro; Sources; Schools; Applicability; Marriage; Mahr; Divorce/Talaq; DMMA/MWA/CrPC 125/Shah Bano; Wills; Gifts; Wakf; Pre-emption; Acknowledgement &amp; Guardianship</td><td>13</td></tr>
          <tr><td>K-3002</td><td>Theory; Sources; IL &amp; municipal; State (sovereignty/territory, recognition/succession, intervention, nationality, diplomats, extradition, asylum); War/disputes; Special cluster; Law of the Sea</td><td>13</td></tr>
          <tr><td>K-3003</td><td>Evolution/def/scope; Rule of Law; SOP; Delegated Legislation; Natural Justice; Writs; PIL; Lokpal &amp; UP Lokayukta; Tribunals/CAT</td><td>9</td></tr>
          <tr><td>K-3004</td><td>TPA 1–4; Transfer 5–53A; Sale; Mortgages &amp; charges; Leases; Exchange; Gifts; Actionable claims; Easements Act overview</td><td>9</td></tr>
          <tr><td>K-3005</td><td>History &amp; regulation; Enrolment/Bar Councils; Nature of ethics; Contempt; Lawyers’ strike; Professionalization — <em>Project File separate</em></td><td>6</td></tr>
        </tbody>
      </table>
      <p>Track new content in <button type="button" class="text-link" data-nav="logbook">Logbook</button>.</p>
    </section>`;
  }

  function logbookNavPage(paper) {
    if (!paper || paper === "site") return "";
    return String(paper).replace(/^K-/, "k");
  }

  function logbookHtml(filterId) {
    const filter = filterId || "all";
    const entries = (window.LLB && window.LLB.logbook) || [];
    const shown = entries.filter((e) => {
      if (filter === "all") return true;
      if (filter === "site") return e.paper === "site";
      return logbookNavPage(e.paper) === filter;
    });
    const chips = LOG_FILTERS.map(
      ([fid, label]) =>
        `<button type="button" class="chip ${fid === filter ? "on" : ""}" data-nav="logbook" data-topic="${fid}">${label}</button>`
    ).join("");
    const rows = shown
      .map((e) => {
        const jump = e.topicId && e.paper !== "site";
        const title = jump
          ? `<button type="button" class="log-title" data-nav="${logbookNavPage(e.paper)}" data-topic="${e.topicId}">${e.title}</button>`
          : `<span class="log-title static">${e.title}</span>`;
        return `<li class="log-entry">
          <div class="log-meta">
            <span class="badge log-${e.type}">${e.type}</span>
            <span class="log-paper">${e.paper}</span>
            <time datetime="${e.date}">${e.date}</time>
          </div>
          ${title}
          <p class="log-note">${e.note || ""}</p>
        </li>`;
      })
      .join("");
    return `<section class="hero" id="topic-logbook" data-jump="${filter}">
      <p class="kicker">What’s new · reverse chronological</p>
      <h2>Logbook</h2>
      <p class="lede">Every promised card in this expansion, clickable. Filter by paper; the title jumps to the live topic.</p>
      <div class="filter-row log-chips">${chips}</div>
      <p class="log-count">${shown.length} ${shown.length === 1 ? "entry" : "entries"} shown</p>
    </section>
    <section class="panel">
      <ol class="log-list">${rows || "<li class=\"log-entry\">No entries in this filter.</li>"}</ol>
    </section>`;
  }

  function pageHtml(page, id) {
    if (page === "overview") return overviewHtml();
    if (page === "strategy") return extra.strategy(id);
    if (page === "resources") return extra.resources(id);
    if (page === "logbook") return logbookHtml(id);
    const paper = papers[page];
    if (!paper) return `<section class="panel"><p>Unknown page.</p></section>`;
    const topics = sortedTopics(paper);
    return topics.map((t) => topicHtml(paper, t)).join("");
  }

  function paintHeatChart() {
    const el = document.getElementById("heatChart");
    if (!el || typeof Chart === "undefined") return;
    const chart = new Chart(el, {
      type: "bar",
      data: {
        labels: [
          "Talaq / Shah Bano / Mahr",
          "Art. 38 sources + Law of Sea",
          "NJ + Delegated Leg + Writs",
          "Mortgage / 53A / Lease",
          "Contempt + Bar ethics"
        ],
        datasets: [
          {
            label: "Relative PYQ pressure",
            data: [94, 90, 93, 91, 88],
            backgroundColor: ["#d4af37", "#6ea8ff", "#3fa796", "#c45c4a", "#f0d78c"]
          }
        ]
      },
      options: {
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { color: "#b8ae97" }, grid: { color: "rgba(212,175,55,0.12)" } },
          x: { ticks: { color: "#b8ae97", maxRotation: 20 }, grid: { display: false } }
        }
      }
    });
    charts.push(chart);
  }

  function updateProgressChip() {
    const { n, t } = sealedCount();
    globalProgress.textContent = `${n}/${t} sealed`;
  }

  function render() {
    destroyCharts();
    navTabs();
    renderSidebar();
    const { page, id } = parseHash();
    main.innerHTML = pageHtml(page, id);
    updateProgressChip();
    if (page === "overview") paintHeatChart();
    sidebar.classList.remove("open");
    main.focus({ preventScroll: true });
    queueScroll(id || EXTRA_DEFAULTS[page] || "", false);
  }

  function searchIndex() {
    const hits = [];
    Object.values(papers).forEach((paper) => {
      paper.topics.forEach((t) => {
        const blob = [
          t.title,
          t.summary,
          t.explainer,
          t.mnemonic && t.mnemonic.hook,
          (t.cases || []).map((c) => c.name).join(" "),
          (t.tags || []).join(" "),
          window.LLBTimeline ? window.LLBTimeline.searchBlob(t.id) : ""
        ]
          .join(" ")
          .toLowerCase();
        hits.push({ paper, topic: t, blob });
      });
    });
    return hits;
  }
  const INDEX = searchIndex();

  function runSearch(q) {
    const query = q.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = "";
      return;
    }
    const found = INDEX.filter((h) => h.blob.includes(query)).slice(0, 12);
    searchResults.innerHTML = found
      .map(
        (h, i) =>
          `<li><button class="${i === 0 ? "active" : ""}" data-nav="${h.paper.id}" data-topic="${h.topic.id}"><small>${h.paper.code}</small> · ${h.topic.title}</button></li>`
      )
      .join("");
  }

  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav && !e.target.closest("[data-seal]")) {
      go(nav.getAttribute("data-nav"), nav.getAttribute("data-topic") || "");
      searchOverlay.hidden = true;
    }
    const seal = e.target.closest("[data-seal]");
    if (seal) {
      const id = seal.getAttribute("data-seal");
      const p = loadProgress();
      if (p[id]) delete p[id];
      else p[id] = Date.now();
      saveProgress(p);
      render();
    }
    if (e.target.id === "searchBtn") {
      searchOverlay.hidden = false;
      searchInput.focus();
    }
    if (e.target.id === "themeBtn") {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(next);
    }
    if (e.target.id === "topicsFab") sidebar.classList.toggle("open");
    if (e.target === searchOverlay) searchOverlay.hidden = true;
  });

  searchInput.addEventListener("input", () => runSearch(searchInput.value));
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = searchResults.querySelector("button");
      if (first) first.click();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      searchOverlay.hidden = false;
      searchInput.focus();
    }
    if (e.key === "Escape") searchOverlay.hidden = true;
  });

  window.addEventListener("hashchange", onRouteChange);
  window.addEventListener("popstate", onRouteChange);
  document.querySelector(".brand").addEventListener("click", () => go("overview"));

  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) location.hash = "#/overview";
  else render();
})();
