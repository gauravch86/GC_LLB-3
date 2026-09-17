/* When adding a topic card, also append a logbook entry in the same commit. */
(function (g) {
  g.LLB = g.LLB || {};
  /* Newest first. paper: K-3001…K-3005 or "site". topicId must match a real card id (empty for site-only). */
  g.LLB.logbook = [
    {
      date: "2026-09-17",
      type: "added",
      paper: "site",
      topicId: "",
      title: "Content wave 1 — all five papers expanded",
      note: "Original exam-ready explainers, diagrams, mnemonics, case hooks, and CCS-theme outlines for every K-3001–K-3005 syllabus card (50 topics). Spine = official CCS books (Mulla/Fyzee; Starke/Kapoor/Aggarwal; Massey/Takwani; Mulla TPA; Kailash Rai/Gupta/Sirohi + bare Acts). Unique/Nitin remains drill-only. Uncertain cites flagged VERIFY. Resources shelf rewritten to the official list."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "K-3005",
      topicId: "e-contempt",
      title: "K-3005 Professional Ethics — six doctrine cards",
      note: "History 1879→1961; enrolment ss. 6–7–24–30; nature of the profession; Contempt Act civil/criminal + SCBA; Harish Uppal no-strike; professionalization C-M-B-A-S. Project File still a separate print pack."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "K-3004",
      topicId: "pr-transfer",
      title: "K-3004 Property & Easement — TPA ladder + easements",
      note: "Ss. 1–4 toolkit; 5–53A (lis pendens, 53A shield); sale vs contract for sale; six mortgages; lease vs licence; exchange; TPA gift vs hiba; actionable claims; Easements Act s. 4 / prescription / extinction."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "K-3003",
      topicId: "a-delegated",
      title: "K-3003 Administrative Law — Massey/Takwani spine",
      note: "Scope; Dicey in India; functional SOP; delegated legislation N-L-PPJ; natural justice B-H-R-L; HMPCQ writs; PIL standing; Lokpal + UP Lokayukta; CAT after L. Chandra Kumar."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "K-3002",
      topicId: "p-sources",
      title: "K-3002 Public International Law — Art. 38 to UNCLOS",
      note: "Austin/consent; Art. 38 + jus cogens; monism/dualism/Vishaka; territory (Palmas); recognition/succession; Nicaragua intervention; Nottebohm; VCDR; extradition vs asylum; Art. 33 ladder; special cluster; 12-24-200 sea belts."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "K-3001",
      topicId: "m-shahbano",
      title: "K-3001 Muslim Law — Mulla/Fyzee + statutory overlay",
      note: "Sources/schools/applicability; nikah valid-void-irregular; mahr; talaq after Shayara Bano; Shah Bano–MWA–Danial Latifi; wasiyat 1/3; hiba DAP; wakf; shufa; Imambandi guardianship. 2019 Act and BNSS 125-successor flagged VERIFY."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "site",
      topicId: "",
      title: "Sem-3 study-site shell created",
      note: "Day-1: LL.B. Semester-3 Study Bench for Bhawana Chaudahry (HLM / CCS). Stub cards for K-3001–K-3005, Overview seal meters, Strategy, Resources, Logbook. localStorage prefix llb3-. Full explainers pending — now landed in content wave 1."
    }
  ];
})(window);
