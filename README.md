# LL.B. Semester-3 Study Bench

Interactive study site for **CCS University Meerut** LL.B. 3-year **Semester 3** (paper codes **K-3001–K-3005**). Built for **Bhawana Chaudahry**, **HLM College, Ghaziabad**, December **2026** exams.

UX, fonts, dark/light theme, sticky nav, search, and seal meters follow the Sem-1 bench pattern ([gauravch86/LLB-I](https://github.com/gauravch86/LLB-I)). Content here is **original Sem-3 teaching prose** synthesised from CCS syllabus headings, bare-act sections, and well-known case holdings. Unique Law Series / Nitin Prakashan is **exam-drill only** and is not copied. Uncertain citations are marked **VERIFY**.

**GitHub Pages:** [https://gauravch86.github.io/GC_LLB-3/](https://gauravch86.github.io/GC_LLB-3/) (source: `main` branch, `/` root). Open `index.html` locally anytime.

## Papers

| Code | Paper | Spine (official CCS books → what the cards write from) | Topics |
|------|--------|------------------------------------------------------|--------|
| **K-3001** | Family Law–II (Muslim Law) | **Mulla** + **Fyzee**; Aqil Ahmad / Tahir Mahmood overlay. Bare: Shariat Act 1937, DMMA 1939, MWPRDA 1986, Family Courts Act 1984 | 13 |
| **K-3002** | Public International Law | **Starke** / **S.K. Kapoor** / **H.O. Aggarwal**; Harris for cases. UN Charter, ICJ Art. 38, UNCLOS zones | 13 |
| **K-3003** | Administrative Law | **Massey** + **Takwani**. Arts. 14, 21, 32, 226, 136, 323A–B; CAT | 9 |
| **K-3004** | Law of Property and Easement | **Mulla TPA** + college TPA text (Shukla / Tripathi class). Bare: TPA 1882; Easements Act 1882 | 9 |
| **K-3005** | Professional Ethics, Accountability of Lawyers and Bar–Bench Relation (Practical Training — **theory cards**; the practical **Project File is a separate print pack**) | **Kailash Rai / S.P. Gupta / Sirohi** for structure + Advocates Act + BCI Rules + Contempt Act | 6 |

Also included: **Overview** (dashboard + seal meters), **Logbook**, **Exam strategy**, and **Resources** (official CCS shelf, Unique/Nitin = drill only, bare-act links).

**50** sealable topics. Progress uses `localStorage` keys prefixed **`llb3-`** (`llb3-progress-v1`, `llb3-theme`) so it never collides with Sem-1 `llb1-` keys.

## How to study (topic → outline → seal)

1. Pick a subject tab, then a syllabus topic in the sidebar.
2. Read the **explainer**; confirm every section on [India Code](https://www.indiacode.nic.in/) / the primary book (this site does not copy those books).
3. Redraw the **diagram**; replace the **mnemonic** with your own after one pass.
4. Attempt the **CCS-style outline** under time (20-marker ≈ 25–30 minutes).
5. Tick **Seal this topic** only when you can do that without scrolling.

Items marked **VERIFY** need a judgment PDF or the in-force Act text before you treat the cite as gospel in the hall.

## Run locally

No build step. Static HTML/CSS/JS (Chart.js from CDN). Works via `file://` or a simple static server. `index.html` is at the **repo root**.

```bash
# from the repository root
# Option A — open index.html directly in a browser (file://)
xdg-open index.html   # or double-click index.html

# Option B — local static server
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Keyboard: `/` search, `Esc` close search. Theme toggle is in the header.

## GitHub Pages

This tree is published from **`main`** at **`/` (root)** for repo **[gauravch86/GC_LLB-3](https://github.com/gauravch86/GC_LLB-3)**:

1. Open **Settings → Pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `main` · **Folder:** `/ (root)`
4. **Save** — wait about a minute, then open [https://gauravch86.github.io/GC_LLB-3/](https://gauravch86.github.io/GC_LLB-3/)

`.nojekyll` is at the repo root so GitHub Pages serves the static files as-is.

## Official syllabus

- Authoritative topic lists: [CCS LL.B. syllabus PDF (CDN, Aug 2025)](https://cdn.ccsuniversity.ac.in/public/pdf/2025/08/2%20llb%20syllabus.pdf) — confirm Sem-3 titles with HLM.
- Verify statute section numbers on [India Code](https://www.indiacode.nic.in/) before the hall.

## Copyright

Original teaching explainers and site chrome only. Cites publicly available statutes, the CCS syllabus outline, well-known case holdings, and public exam *themes*. Does **not** reproduce Unique/Nitin or primary textbook prose.

## File layout

```
.
  index.html
  .nojekyll
  README.md
  css/styles.css
  assets/favicon.svg
  js/app.js
  js/diagrams.js
  js/timeline.js
  js/content/meta.js
  js/content/muslim.js      # K-3001
  js/content/pil.js         # K-3002
  js/content/admin.js       # K-3003
  js/content/property.js    # K-3004
  js/content/ethics.js      # K-3005
  js/content/timelines.js
  js/content/logbook.js
```
