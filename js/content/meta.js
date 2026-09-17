(function (global) {
  global.LLB = global.LLB || {};
  global.LLB.papers = global.LLB.papers || {};

  global.LLB.pages = {
    strategy() {
      return `<article class="topic" id="topic-method" data-jump="method">
        <p class="kicker">Sem-3 · method</p>
        <h1>Exam strategy for Semester-3</h1>
        <p class="lede">CCS long answers still reward named sections, named cases, and a visible structure. Sem-3 adds personal-law statutes, UNCLOS diagrams, administrative-law control matrices, TPA section ladders, and professional-ethics problem facts — treat each 20-marker as a spec: definition, essentials, authorities, distinction, close. Wave-1 cards are original teaching prose on the official CCS book spine; Unique/Nitin is still drill only.</p>
        <h2 class="section-title">Weekly OS (repeat until December)</h2>
        ${window.LLBDiagrams.render({ type: "flow", steps: ["Muslim Law spine", "PIL sources + Sea", "Admin NJ + DL", "TPA mortgages", "Ethics + contempt", "Timed PYQ"] })}
        <table class="compare">
          <thead><tr><th>Week slice</th><th>Hours</th><th>Output artefact</th></tr></thead>
          <tbody>
            <tr><td>K-3001 marriage → talaq → Shah Bano overlay</td><td>8–10</td><td>Nikah essentials + talaq modes table + CrPC 125 / MWA one-pager</td></tr>
            <tr><td>K-3002 sources + State + Law of the Sea</td><td>8–10</td><td>Art. 38 sheet + recognition/extradition table + UNCLOS zone sketch</td></tr>
            <tr><td>K-3003 DL + natural justice + writs</td><td>8–10</td><td>Controls triad + NJ exceptions + HMPCQ flash</td></tr>
            <tr><td>K-3004 transfer + mortgage + lease + 53A</td><td>8–10</td><td>Section ladder + six mortgage forms + lease vs licence</td></tr>
            <tr><td>K-3005 enrolment + contempt + misconduct</td><td>6–8</td><td>Bar Council map + civil/criminal contempt table + strike holding</td></tr>
            <tr><td>PYQ writing</td><td>6</td><td>One timed 20-marker per paper</td></tr>
          </tbody>
        </table>
        <aside class="note"><h3>K-3005 practical</h3>
          <p>The college <strong>Project File / viva pack</strong> is offline print work. Use this site for doctrine cards only; do not treat sealed topics as a substitute for the practical file.</p>
        </aside>
      </article>
      <article class="topic" id="topic-answers" data-jump="answers">
        <p class="kicker">Sem-3 · writing</p>
        <h1>Answer formula (print this)</h1>
        <ol>
          <li><strong>Hook (2 lines):</strong> define the concept + name the statute / convention / doctrine.</li>
          <li><strong>Essentials:</strong> numbered ingredients. Examiners tick lists.</li>
          <li><strong>Authorities:</strong> 2–3 cases or treaty articles with one-line ratios.</li>
          <li><strong>Distinction / diagram:</strong> talaq modes, monism/dualism, certiorari/prohibition, mortgage forms, civil/criminal contempt.</li>
          <li><strong>Indian / problem landing:</strong> one paragraph tying doctrine to facts.</li>
          <li><strong>Close:</strong> answer the exact verb (comment / distinguish / critically examine).</li>
        </ol>
        <aside class="analogy"><h3>Latency budget in the hall</h3>
          <p>20-marker ≈ 25–30 minutes. 10-marker ≈ 12–14. Short notes ≈ 4–5. If you cannot name two authorities in the first 8 minutes of a talaq, Art. 38, natural-justice, or mortgage essay, switch questions.</p>
        </aside>
      </article>
      <article class="topic" id="topic-heatmap" data-jump="heatmap">
        <p class="kicker">Sem-3 · recall spine</p>
        <h1>Paper-wise spine (write these cold)</h1>
        <ul>
          <li><strong>K-3001:</strong> sources/schools; nikah essentials; mahr; talaq modes; Shah Bano / MWA / CrPC 125; hiba; wakf.</li>
          <li><strong>K-3002:</strong> Art. 38 sources; IL vs municipal; recognition; extradition/asylum; diplomats; UNCLOS zones.</li>
          <li><strong>K-3003:</strong> Rule of Law; delegated legislation controls; natural justice; five writs; PIL; CAT.</li>
          <li><strong>K-3004:</strong> transfer + 53A; sale vs contract for sale; mortgage forms; lease vs licence; easement modes.</li>
          <li><strong>K-3005:</strong> enrolment/Bar Councils; contempt civil/criminal; lawyers’ strike; misconduct / bar–bench.</li>
        </ul>
        <h2 class="section-title">Last 48 hours</h2>
        <p>One A4 hook sheet per paper. Physical stack: primary commentaries + bare Acts (TPA, Easements, DMMA/MWA, Advocates Act, Contempt Act) + UNCLOS zone sketch. Unique only for question-shape. Nothing new except section flash and the K-3005 project-file checklist.</p>
      </article>`;
    },
    resources() {
      return `<article class="topic" id="topic-publishers" data-jump="publishers">
        <p class="kicker">Bhawana’s shelf · then Unique drill · then extras</p>
        <h1>Primary textbooks, exam drill, secondary refs</h1>
        <p class="lede">Spine = official CCS recommended books (syllabus PDF w.e.f. 2017–18, CDN Aug 2025) plus bare Acts. Confirm the exact edition on the <strong>HLM list</strong> for your batch. Site prose is original — it does not reproduce Unique/Nitin or textbook paragraphs. Track new content in <button type="button" class="text-link" data-nav="logbook">Logbook</button>.</p>

        <h2 class="section-title">1. Official CCS books → teaching spine (buy / use)</h2>
        <table class="compare">
          <thead><tr><th>Paper</th><th>Official CCS recommended books</th><th>Spine this site writes from</th><th>How the cards track it</th></tr></thead>
          <tbody>
            <tr><td>K-3001 Family Law–II</td><td>Aqeel Ahmad; Ameer Ali; Fyzee; Tahir Mahmood; Mulla; Khalid Rashid; Wilson. Central Acts listed in the syllabus: DMMA 1939; Family Courts Act 1984; Shariat Application Act 1937; Muslim Women (Protection of Rights on Divorce) Act 1986.</td><td><strong>Mulla</strong> (Indian digest) + <strong>Fyzee</strong> (concepts) + Aqil Ahmad-style college text; Tahir Mahmood for reform/statutes. 2019 triple-talaq statute and BNSS successor of CrPC 125 are flagged as later overlays (VERIFY section numbers).</td><td>Intro → sources → schools → applicability → nikah → mahr → talaq → Shah Bano/DMMA/MWA cluster → wasiyat → hiba → wakf → shufa → acknowledgement &amp; guardianship</td></tr>
            <tr><td>K-3002 PIL</td><td>H.O. Aggarwal; Greig; Harris; S.K. Kapoor; Starke.</td><td><strong>Starke</strong> / <strong>S.K. Kapoor</strong> student texts + <strong>H.O. Aggarwal</strong>; Harris for case extracts. Instruments: UN Charter, ICJ Statute Art. 38, VCLT themes, UNCLOS zones.</td><td>Theory → Art. 38 sources → IL &amp; municipal law → sovereignty/territory → recognition/succession → intervention → nationality → diplomats → extradition → asylum → war/disputes → special cluster → Law of the Sea</td></tr>
            <tr><td>K-3003 Admin Law</td><td>Basu; Jain &amp; Jain; Joshi; I.P. Massey; Sathe; C.K. Takwani; Thakkar; Wade.</td><td><strong>Massey</strong> + <strong>Takwani</strong>. Constitution Arts. 14, 21, 32, 226, 136, 323A–B; CAT statute; Lokpal Act 2013 + UP Lokayukta statute (VERIFY amendments).</td><td>Evolution/scope → Rule of Law → SOP → delegated legislation → natural justice → HMPCQ writs → PIL → Lokpal/UP Lokayukta → tribunals/CAT</td></tr>
            <tr><td>K-3004 Property &amp; Easement</td><td>Paras Diwan; Lahri; Mulla TPA; Shah; S.N. Shukla; V.N. Shukla; Sinha; G.P. Tripathi.</td><td><strong>Mulla, Transfer of Property Act</strong> + college TPA text (Shukla / Tripathi class). Bare: TPA 1882; Indian Easements Act 1882.</td><td>Ss. 1–4 → 5–53A → sale → mortgages &amp; charges → leases → exchange → gifts → actionable claims → Easements Act overview</td></tr>
            <tr><td>K-3005 Prof. Ethics (practical)</td><td>S.P. Gupta; Kailash Rai; Sirohi (Dr.).</td><td><strong>Kailash Rai / Gupta / Sirohi for chapter map only</strong> + Advocates Act 1961 + BCI Rules Parts VI–VII + Contempt of Courts Act 1971. Project File / viva pack is <strong>separate print work</strong>.</td><td>History &amp; regulation → enrolment/Bar Councils → nature of ethics → contempt (civil/criminal, defences, validity, status-specific) → lawyers’ strike → professionalization (code, misconduct, bar–bench, accountability, social role)</td></tr>
          </tbody>
        </table>

        <h2 class="section-title">2. Unique Q&amp;A — exam drill only</h2>
        <p>Unique Law Series / Nitin Prakashan (Meerut) “30 Questions &amp; Answers” is for CCS question <em>shape</em>. Use it <strong>after</strong> the primary book + this site + the bare act — never as first principles.</p>
        ${window.LLBDiagrams.render({
          type: "compare",
          headers: ["Good for", "Bad for"],
          rows: [
            ["Seeing CCS-style long questions", "Learning first principles"],
            ["Last 10–15 days recall", "Replacing bare-act section precision"],
            ["Hindi-medium phrasing practice", "Copying model answers into the hall"],
            ["Checking you did not miss a unit", "Case ratios (use primary text + judgments)"]
          ]
        })}

        <h2 class="section-title">3. Secondary references (library / depth)</h2>
        <table class="compare">
          <thead><tr><th>Paper</th><th>Secondary (do not replace the primary shelf)</th></tr></thead>
          <tbody>
            <tr><td>K-3001</td><td>Ameer Ali; Khalid Rashid; Wilson (on the official list but secondary to Mulla/Fyzee for this site); statutory commentaries on DMMA / MWA / 2019 Act</td></tr>
            <tr><td>K-3002</td><td>Greig; Harris cases; Oppenheim extracts; Shaw; UNCLOS handbook summaries</td></tr>
            <tr><td>K-3003</td><td>Jain &amp; Jain; Sathe; Wade (library); Basu comparative notes</td></tr>
            <tr><td>K-3004</td><td>Shah; Paras Diwan; Sinha; classic easement notes — only after Mulla + the college TPA text</td></tr>
            <tr><td>K-3005</td><td>Selected BCI opinions; Contempt of Courts Act commentary; Krishnaswami Aiyar ethics classics (library). Not a substitute for India Code + BCI Rules PDF</td></tr>
          </tbody>
        </table>
      </article>
      <article class="topic" id="topic-youtube" data-jump="youtube">
        <p class="kicker">Resources · video</p>
        <h1>YouTube (search titles — playlists move)</h1>
        <div class="yt-row">
          <div class="yt-card"><strong>StudyIQ Judiciary</strong><p>@studyiqjudiciary — Admin Law + PIL marathons.</p></div>
          <div class="yt-card"><strong>Law Wallah (PW)</strong><p>@LawWallahPW — TPA + Muslim Law foundations.</p></div>
          <div class="yt-card"><strong>Unacademy Judiciary</strong><p>@UnacademyJudiciary — natural justice / writs.</p></div>
          <div class="yt-card"><strong>LegalEdge / Adda247 JS</strong><p>Property + ethics capsules.</p></div>
          <div class="yt-card"><strong>International law one-shots</strong><p>Search UNCLOS zones + Art. 38 ICJ.</p></div>
          <div class="yt-card"><strong>Contempt / Advocates Act</strong><p>Search BCI enrolment + civil vs criminal contempt.</p></div>
        </div>
        <p>Hygiene: confirm every section in the bare Act before the hall; prefer recent uploads for statutory overlays (Waqf / MWA updates).</p>
      </article>
      <article class="topic" id="topic-bareacts" data-jump="bareacts">
        <p class="kicker">Resources · bare acts</p>
        <h1>Bare acts &amp; public syllabus hooks</h1>
        <div class="pub-grid">
          <div class="pub-card"><strong>Muslim Law statutes</strong><p>Shariat Act 1937; DMMA 1939; MWPRDA 1986; Family Courts Act 1984; Muslim Women (Protection of Rights on Marriage) Act 2019; Waqf framework (VERIFY current short title after later amendments); CrPC 125 / BNSS successor (VERIFY s. 144). <a href="https://www.indiacode.nic.in/" target="_blank" rel="noopener">indiacode.nic.in</a></p></div>
          <div class="pub-card"><strong>PIL instruments</strong><p>UN Charter highlights; ICJ Statute Art. 38; UNCLOS zone articles (verify numbers before the hall).</p></div>
          <div class="pub-card"><strong>Admin + Constitution</strong><p>Arts. 32, 226, 136, 323A–323B; key tribunal / PIL cases from your primary book.</p></div>
          <div class="pub-card"><strong>TPA + Easements</strong><p>Transfer of Property Act 1882; Indian Easements Act 1882 — section ladders on the desk.</p></div>
          <div class="pub-card"><strong>Professional ethics</strong><p>Advocates Act 1961; Contempt of Courts Act 1971; BCI Standards of Professional Conduct.</p></div>
          <div class="pub-card"><strong>CCS syllabus PDF</strong><p><a href="https://cdn.ccsuniversity.ac.in/public/pdf/2025/08/2%20llb%20syllabus.pdf" target="_blank" rel="noopener">CCS CDN Aug 2025</a> — confirm Sem-3 paper titles with HLM.</p></div>
        </div>
        <h2 class="section-title">Public PYQ hubs</h2>
        <ul>
          <li><a href="https://ccsullb.blogspot.com/" target="_blank" rel="noopener">ccsullb.blogspot.com</a> — transcribed papers</li>
          <li><a href="https://www.ccsustudy.com/ccsu-llb-papers.html" target="_blank" rel="noopener">ccsustudy.com</a> — recent CCS LL.B. files</li>
        </ul>
      </article>
      <article class="topic" id="topic-copyright" data-jump="copyright">
        <p class="kicker">Resources · citation</p>
        <h1>How to cite this site</h1>
        <aside class="note"><h3>Copyright stance</h3>
          <p>Original teaching explainers only. Cites publicly available statutes, the CCS syllabus outline, well-known case holdings, and publicly blogged exam <em>themes</em>. Does not copy Unique Law Series, Nitin Prakashan, or primary textbook prose, tables, or chapter text. Uncertain citations are marked VERIFY.</p>
        </aside>
      </article>`;
    }
  };
})(window);
