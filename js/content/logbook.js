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
      title: "Sem-3 study-site shell created",
      note: "Day-1: LL.B. Semester-3 Study Bench for Bhawana Chaudahry (HLM / CCS). Stub cards for K-3001–K-3005, Overview seal meters, Strategy, Resources, Logbook. localStorage prefix llb3-. Full explainers pending."
    }
  ];
})(window);
