(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k3001 = {
    id: "k3001",
    code: "K-3001",
    title: "Family Law–II (Muslim Law)",
    short: "Muslim Law",
    blurb: "Sources and schools, applicability, nikah, mahr, talaq and the DMMA–Shah Bano–MWA overlay, wasiyat, hiba, wakf, shufa, acknowledgement and guardianship — original explainers on the Mulla/Fyzee spine.",
    shelf: {
      primary: "Mulla, Principles of Mahomedan Law + Fyzee, Outlines of Mohammedan Law; Aqil Ahmad / Tahir Mahmood for college and reform overlay. Bare: Shariat Act 1937, DMMA 1939, MWPRDA 1986, Family Courts Act 1984"
    },
    youtube: [
      { title: "Muslim Law marriage & divorce overview", search: "Muslim Law nikah talaq judiciary CCS" },
      { title: "Shah Bano and maintenance", search: "Shah Bano CrPC 125 Muslim Women Act Danial Latifi" },
      { title: "Wakf and hiba essentials", search: "Wakf Act mutawalli hiba essentials law" }
    ],
    topics: [
      {
        id: "m-intro",
        seq: 1,
        readAs: "Unit I · introduction",
        unit: 1,
        yield: "high",
        tags: ["introduction", "muslim law", "personal law", "shariat act"],
        title: "Introduction to Muslim Law",
        summary: "Muslim personal law in India is a living family-law system — classical doctrine applied as the rule of decision in listed matters, overlaid by Indian statutes and precedent. Open every 20-marker with what the system is, whom it binds, and which statute is sitting on top of the fiqh.",
        explainer: `<p>Family Law–II is not “religion class.” It is the Indian law of Muslim family relations: marriage, dower, divorce, legitimacy, gifts, wills, wakf, pre-emption, guardianship. CCS expects a two-layer opening in almost every long answer: (1) classical Muslim law as a juristic system with sources and schools; (2) Indian application through the <strong>Muslim Personal Law (Shariat) Application Act, 1937</strong> plus later Central Acts (DMMA 1939, Muslim Women (Protection of Rights on Divorce) Act 1986, Family Courts Act 1984, and — for triple talaq — the 2019 marriage-protection statute).</p>
        <p><strong>Working definition:</strong> Muslim law, as administered in Indian courts, is that body of rules drawn from Islamic juristic sources which, by legislation and precedent, governs specified family and property topics for persons to whom it applies. It is personal law (follows the person, not the land) but it is <em>Indian</em> personal law: a High Court does not sit as a qazi of seventh-century Arabia. Mulla’s digest and Fyzee’s conceptual outline are the teaching spine because they already do this translation work. Aqil Ahmad-style college texts and Tahir Mahmood’s reform writing sit on top for statute and policy.</p>
        <p><strong>What an Indian court is doing.</strong> Section 2 of the 1937 Act directs that in listed matters (marriage, dissolution, dower, guardianship, gifts, trusts and wakfs, trusts and wakf-adjacent topics as worded in the Act — <em>quote the list from India Code, do not recite a remembered paraphrase in the hall</em>) the rule of decision shall be the Muslim Personal Law (Shariat) where the parties are Muslims. Custom is largely displaced in those fields. Where a Central Act occupies the field (DMMA grounds; post-divorce provision under the 1986 Act; criminalisation of instant triple talaq in 2019), the statute wins. Where the question is succession among Muslims, classical doctrine plus the 1937 Act still matter; the Indian Succession Act generally does not apply to Muslims except as provided (e.g. some will-formalities debates — keep that fight for the wasiyat card).</p>
        <p><strong>Nature:</strong> mixed. Nikah is classically a civil contract with religious colour (<em>Abdul Kadir v. Salima</em> is the stock citation). Wakf is dedication, not a transfer for a human transferee. Talaq is a mode of dissolving that contract, now heavily constitutionalised. Maintenance after divorce is the place where Art. 21 / equality arguments have most visibly rewritten the classical iddat-only picture.</p>
        <p><strong>Forum:</strong> Family Courts Act, 1984 channels family suits (including Muslim marriage/divorce/maintenance where the Act applies territorially) to Family Courts, with a less adversarial procedure. Do not dump a Muslim-law problem into a fictional qazi court unless the question is historical.</p>
        <p><strong>Exam method:</strong> define → sources/schools if the facts need them → statutory overlay → named case → distinction (Sunni/Shia, void/irregular, hiba/wasiyat) → close to the verb. Unique/Nitin is a question-shape drill after this card, not a source.</p>`,
        analogy: {
          title: "Runtime + overlay patches",
          body: "Classical fiqh is the runtime library. The 1937 Act selects which modules load for Indian Muslims. DMMA, MWA 1986, Family Courts Act, and the 2019 triple-talaq statute are security patches. Mulla/Fyzee are the annotated SDK. If you ship only the 7th-century library, the 20-marker fails on Indian law."
        },
        diagram: {
          type: "stack",
          title: "What Indian Muslim family law actually is",
          layers: [
            "Family Courts / CrPC 125 neighbourhood (forum & maintenance procedure)",
            "Central overlays: DMMA, MWA 1986, 2019 talaq statute",
            "Shariat Application Act 1937 (rule of decision)",
            "Precedent (Shah Bano line, Shayara Bano, Imambandi…)",
            "Classical sources via school (Hanafi default in most Indian facts)"
          ]
        },
        mnemonic: {
          name: "P-S-S-O",
          hook: "Personal law · Sources · Schools · Overlay statutes.",
          recite: "1937 chooses Shariat as rule of decision in listed matters; later Acts and the Supreme Court patch divorce and maintenance."
        },
        cases: [
          { name: "Muslim Personal Law (Shariat) Application Act", citation: "1937, s. 2 (India Code)", point: "Rule of decision in specified matters is Muslim Personal Law where parties are Muslims; custom yields in those fields." },
          { name: "Abdul Kadir v. Salima", citation: "(1886) 8 All 149 (classic teaching cite)", point: "Nikah as a civil contract — the introduction case for ‘nature of Muslim marriage’." },
          { name: "Family Courts Act, 1984", citation: "jurisdiction / procedure overlay", point: "Name the forum. Muslim family causes are still Indian civil process." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the nature and application of Muslim Law in India.",
            outline: [
              "Personal law, not a foreign theocracy; Indian courts apply it.",
              "1937 Act s. 2 list (quote, don’t guess).",
              "Sources + schools in one paragraph, pointing to later cards.",
              "Statutory overlays (DMMA, MWA, 2019 Act, Family Courts).",
              "Close: classical + statute + precedent is the exam system."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Short note: Shariat Application Act, 1937.",
            outline: ["Purpose: displace custom in listed family matters. s. 2 rule of decision. One limit: later Central Acts prevail."]
          }
        ],
        check: [
          "Can define Muslim law as Indian personal law in two sentences.",
          "Knows what the 1937 Act does (and that you must quote s. 2’s list).",
          "Can name four overlay statutes.",
          "Does not confuse Family Court with a qazi court."
        ]
      },
      {
        id: "m-sources",
        seq: 2,
        readAs: "Unit I · sources",
        unit: 1,
        yield: "high",
        tags: ["sources", "quran", "sunnah", "ijma", "qiyas", "custom", "legislation"],
        title: "Sources of Muslim Law",
        summary: "Primary sources — Quran, Sunnah, Ijma, Qiyas — plus secondary Indian sources (custom, legislation, precedent, equity/justice). In a courtroom answer, always say which source is doing the work and when a statute overrides classical doctrine.",
        explainer: `<p>This is the paper’s grammar. A talaq or hiba essay that never names a source reads like gossip. Write the four classical sources first, then the Indian add-ons. Fyzee’s value is conceptual clarity; Mulla’s is how Indian courts have used those sources.</p>
        <p><strong>1. Quran.</strong> Primary revealed text. For family law, the verses on marriage, dower, divorce, waiting period (iddat), and charity/wakf-adjacent themes are the ones CCS expects you to <em>allude to by topic</em>, not recite in Arabic. Quranic text is often general; schools differ on operationalising it (e.g. forms of talaq).</p>
        <p><strong>2. Sunnah / Hadith.</strong> The Prophet’s practice and approved precept, as transmitted. Where the Quran is silent or brief, Sunnah supplies the working rule (witnesses, marriage solemnisation culture, some divorce ethics). Indian answers should not pretend to be hadith-criticism papers; name Sunnah as the second primary source and move to application.</p>
        <p><strong>3. Ijma.</strong> Consensus of jurists (classical theory: consensus of the community of the learned). It froze many operational rules after the formative centuries. Useful exam line: ijma explains why later generations treat some rules as settled even without a one-line Quranic clause.</p>
        <p><strong>4. Qiyas.</strong> Analogical deduction from a known rule to a new fact pattern. This is the jurist’s reasoning engine. Schools differ on how freely qiyas may be used (classical teaching: more room in some Sunni usul than in some Shia descriptions — do not over-claim; the exam wants the label and one example, e.g. extending a known prohibition to a similar cause).</p>
        <p><strong>Secondary / Indian sources — the marks most students skip:</strong></p>
        <ul>
          <li><strong>Custom (urf):</strong> historically important, especially pre-1937. The Shariat Act was passed partly to sideline un-Islamic custom in listed matters. Custom may still appear at the edges (usage evidence) but is a weak opener after 1937.</li>
          <li><strong>Legislation:</strong> 1937 Act; DMMA 1939; MWA 1986; Family Courts Act 1984; Waqf framework statutes; Muslim Women (Protection of Rights on Marriage) Act 2019. Legislation is now often the <em>controlling</em> source on the exact question asked.</li>
          <li><strong>Precedent:</strong> Indian High Courts and the Supreme Court. <em>Shah Bano</em>, <em>Danial Latifi</em>, <em>Shayara Bano</em>, <em>Shamim Ara</em>, <em>Imambandi</em> are sources of Indian Muslim law as surely as a classical text.</li>
          <li><strong>Justice, equity and good conscience / fatwa literature:</strong> gap-fillers. A fatwa binds neither a court nor a party unless the court is persuaded it states the applicable rule. Say that out loud in a “sources” essay so you do not treat Dar-ul-Ifta as a court of record.</li>
        </ul>
        <p><strong>Exam ranking:</strong> if a Central Act covers the point, lead with the Act, then show the classical background. If it does not, lead with Quran/Sunnah/school rule, then Indian cases. That ranking is the whole skill.</p>`,
        analogy: {
          title: "Spec, changelog, RFCs, and local patches",
          body: "Quran = language spec. Sunnah = reference implementation. Ijma = frozen RFCs. Qiyas = extending an API by analogy. Indian statutes and SCC reports = local patches that the production court actually runs. A fatwa is a blog post: persuasive if well sourced, never binding."
        },
        diagram: {
          type: "tree",
          title: "Sources map",
          root: "Muslim law in an Indian court",
          branches: ["Quran", "Sunnah", "Ijma", "Qiyas", "Legislation + precedent (Indian)"]
        },
        mnemonic: {
          name: "QSIQ + CLP",
          hook: "Quran · Sunnah · Ijma · Qiyas, then Custom · Legislation · Precedent.",
          recite: "Primary four for doctrine; Indian three for the courtroom. Statute beats remembered fiqh when they clash."
        },
        cases: [
          { name: "Shariat Application Act, 1937", citation: "s. 2", point: "Legislative source that selects Muslim Personal Law as the rule of decision in listed matters." },
          { name: "Mohd. Ahmed Khan v. Shah Bano Begum", citation: "(1985) 2 SCC 556", point: "Illustration that Indian precedent + CrPC can operate as a source even where classical maintenance timing is argued." },
          { name: "Shayara Bano v. Union of India", citation: "(2017) 9 SCC 1", point: "Constitutional adjudication as a source that displaced a classical form (talaq-e-biddat)." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the sources of Muslim Law. Are legislation and precedent sources in India?",
            outline: [
              "QSIQ with one function each.",
              "Custom’s reduced role after 1937.",
              "Legislation list (1937, 1939, 1986, 2019, Waqf, Family Courts).",
              "Precedent: Shah Bano / Shayara Bano as Indian sources.",
              "Close: fatwa is not a judgment; statute ranks first when it speaks."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Ijma and Qiyas.",
            outline: ["Ijma = juristic consensus freezing rules. Qiyas = analogy. One sentence each on why schools still matter."]
          }
        ],
        check: [
          "Can write QSIQ without hesitation.",
          "Can list at least four Indian statutes as sources.",
          "Can explain why a fatwa is not binding.",
          "Knows to lead with statute when one exists."
        ]
      },
      {
        id: "m-schools",
        seq: 3,
        readAs: "Unit I · schools",
        unit: 1,
        yield: "high",
        tags: ["schools", "hanafi", "shia", "sunni", "ithna ashari"],
        title: "Schools of Muslim Law",
        summary: "Sunni (Hanafi, Maliki, Shafi‘i, Hanbali) and Shia (Ithna Ashari / Imami, Ismaili, Zaidi) schools diverge on marriage formalities, mut‘a, some divorce forms, and inheritance flavour. Indian courts usually apply Hanafi/Sunni rules unless the parties plead and prove another school.",
        explainer: `<p>A “school” (madhhab) is a systematic juristic tradition, not a caste. CCS loves a short compare: name the family, name the school, give one distinctive rule, and state the Indian default. Do not write a history of Kufa and Medina for three pages.</p>
        <p><strong>Sunni schools (four):</strong></p>
        <ul>
          <li><strong>Hanafi:</strong> the majority school among Indian Sunnis and the default the courts reach for. Distinctive teaching points: classification of marriage as valid / void / irregular (fasid); relatively structured talaq vocabulary; a developed law of pre-emption and gifts that Indian cases assume.</li>
          <li><strong>Maliki:</strong> historically stronger on certain judicial dissolution ideas (which later echo in DMMA policy). Name it; do not fake Maliki case law you have not read.</li>
          <li><strong>Shafi‘i:</strong> stricter on some marriage-witness and ritual points in classical accounts. Present in parts of south India / Kerala teaching examples.</li>
          <li><strong>Hanbali:</strong> least often the Indian fact pattern; mention for completeness of the four.</li>
        </ul>
        <p><strong>Shia schools:</strong> the exam usually wants <strong>Ithna Ashari (Imami / Twelver)</strong> as the principal Shia school in India, with <strong>Ismaili</strong> and <strong>Zaidi</strong> as names. Distinctive points commonly taught: <em>mut‘a</em> (temporary marriage) recognised in Ithna Ashari doctrine and not in Sunni law; differences in marriage-witness requirements in some accounts; different inheritance structure (no same residuary scheme as Sunni ‘asaba teaching). If the problem is silent, do not assume mut‘a; if the parties are pleaded as Shia Ithna Ashari, do not apply Hanafi irregular-marriage tables blindly.</p>
        <p><strong>Indian method.</strong> Personal law is the law of the sect/school the parties belong to. Proof: pleadings and evidence, not the examiner’s stereotype. In the absence of proof of a special school, Indian courts have commonly applied Hanafi rules to Sunni parties. Conversion, inter-school marriage, and a Shia–Sunni conflict of laws are advanced hypos — flag the conflict and apply the law of the person whose status is in issue, as your primary book states; do not invent a restatement.</p>
        <p><strong>Why schools still matter after 1937.</strong> The Shariat Act tells the court to apply Muslim Personal Law; it does not flatten all madhhabs into one code. Statutes (DMMA, 2019 Act) do flatten particular remedies. So: schools for classical incidents; statutes for occupied fields.</p>`,
        analogy: {
          title: "Four compilers, one language",
          body: "Sunni schools are four compilers of the same spec; they accept different warnings as errors (witnesses, mut‘a, some talaq forms). Shia toolchains fork earlier. The Indian court is CI: if the repo does not declare a compiler, it assumes Hanafi for typical Sunni facts. A Central Act is a repo-wide lint rule that every compiler must pass."
        },
        diagram: {
          type: "compare",
          title: "School compare — exam minimum",
          headers: ["", "Sunni (esp. Hanafi in India)", "Shia (esp. Ithna Ashari)"],
          rows: [
            ["Marriage flavour", "Permanent nikah; mut‘a not recognised", "Permanent nikah; mut‘a classically recognised"],
            ["Void / irregular", "Hanafi three-fold classification taught", "Do not paste Hanafi tables without checking"],
            ["Indian default", "Hanafi if Sunni school not proved otherwise", "Must be pleaded/proved; not the silent default"],
            ["Statute", "DMMA / 2019 Act still apply as Central law", "Same — statutes are not school-optional"]
          ]
        },
        mnemonic: {
          name: "HMSH + IIZ",
          hook: "Hanafi Maliki Shafi‘i Hanbali · Ithna Ashari Ismaili Zaidi.",
          recite: "India: Hanafi default for unspoken Sunni facts; mut‘a is the Shia distinction everyone is fishing for."
        },
        cases: [
          { name: "School as personal law (teaching rule)", citation: "Mulla / Indian practice", point: "Apply the parties’ school; Hanafi fills the silence for typical Sunni litigants. Do not cite a fake SCC for this methodological rule." },
          { name: "Mut‘a distinction", citation: "classical Ithna Ashari vs Sunni", point: "Temporary marriage: recognised in Ithna Ashari doctrine, not in Sunni law — the compare 10-marker." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Explain the schools of Muslim Law. Which school is predominantly applied in India?",
            outline: ["Sunni four + Shia three names.", "Hanafi as Indian Sunni default.", "One Shia distinction (mut‘a).", "Statutes still bind every school."]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Mut‘a marriage.",
            outline: ["Temporary marriage; Ithna Ashari yes, Sunni no. Not a Hanafi irregular marriage. Do not confuse with muta‘ as slang."]
          }
        ],
        check: [
          "Can name four Sunni and three Shia schools.",
          "Knows Hanafi is the usual Indian Sunni default.",
          "Can state the mut‘a distinction in two lines.",
          "Does not apply Hanafi void/irregular tables to pleaded Shia facts."
        ]
      },
      {
        id: "m-applicability",
        seq: 4,
        readAs: "Unit I · applicability",
        unit: 1,
        yield: "high",
        tags: ["applicability", "who is a muslim", "shariat act", "conversion"],
        title: "Applicability of Muslim Law",
        summary: "Who is a Muslim for personal-law purposes, when Muslim law is the rule of decision, and where the Indian Succession Act or special statutes step in. Miss applicability and a perfect talaq essay still fails on parties and forum.",
        explainer: `<p>Applicability is gatekeeping. Before nikah essentials, ask: is this person a Muslim for Indian personal law? Does the 1937 Act cover this matter? Has a later statute occupied it? Is there a conflict with the Indian Succession Act or with a special marriage statute?</p>
        <p><strong>Who is a Muslim?</strong> Teaching rule: a person who professes Islam — belief in the oneness of God and the prophetic mission of Muhammad is the usual judicial shorthand. Courts do not sit as inquisitors of sect orthodoxy. A convert to Islam generally takes Muslim personal law from conversion (with limits on using conversion as a fraud on a prior monogamous marriage — the <em>Sarla Mudgal</em> / <em>Lily Thomas</em> line is Hindu-marriage + IPC 494 neighbourhood, but it is the exam’s warning hypo: conversion is not a trick to dump a first wife without consequences). Apostasy’s classical effects on marriage have been heavily qualified by DMMA s. 4 (apostasy of the husband does not by itself dissolve the marriage — <em>read the section</em>; this was a point of the 1939 Act). Do not recite a pre-1939 automatic-dissolution rule as if it were current.</p>
        <p><strong>1937 Act as the switch.</strong> If both parties are Muslims and the matter is in the s. 2 list, Shariat is the rule of decision. If the matter is outside the list, other law (contract, TPA, CPC, specific relief, succession statutes as applicable) may govern. Gifts, wakfs, marriage, dower, dissolution, guardianship are in-family; a commercial partnership between two Muslims is not “Muslim law” just because of their faith.</p>
        <p><strong>Statutes that change the switch:</strong> DMMA (wife’s judicial divorce), MWA 1986 (divorced Muslim woman’s provision/maintenance architecture), 2019 Act (instant triple talaq), Waqf Acts (administration of wakf property), Family Courts Act (forum). <strong>Special Marriage Act, 1954:</strong> if the couple married under SMA, the SMA/succession consequences follow that statute — do not blindly apply nikah-talaq tables. <strong>Indian Succession Act:</strong> generally not the Muslim intestacy code; wills of Muslims are classically outside the ISA formalities scheme — that fight belongs on the wasiyat card, but flag it here as an applicability border.</p>
        <p><strong>Inter-se and territorial notes.</strong> Muslim law applies as personal law throughout India subject to the Act’s extent clause and local personal-law histories (e.g. some customary islands — do not invent; if the question is UP/CCS, 1937 + Central Acts are enough). Domicile is not the primary test; profession of Islam plus the subject-matter list is.</p>
        <p><strong>Close:</strong> write a four-line test in every problem: (1) Muslim? (2) subject on the 1937 list? (3) later statute? (4) SMA or other opt-out? Then and only then, apply Hanafi or pleaded school rules.</p>`,
        analogy: {
          title: "Auth middleware before business logic",
          body: "Applicability is the auth layer: is the caller in the ‘Muslim personal law’ tenant, and is this endpoint on the allow-list (s. 2)? DMMA/MWA/2019 are later route handlers that intercept. SMA is a different tenant. If you skip middleware and jump to talaq business logic, you 500 the answer."
        },
        diagram: {
          type: "vflow",
          title: "Applicability test (write it on the answer book)",
          steps: ["Does the person profess Islam?", "Is the matter on the 1937 s.2 list?", "Does a later Central Act occupy the point?", "Any SMA / other statutory opt-out?", "Apply the parties’ school (Hanafi default if silent)"]
        },
        mnemonic: {
          name: "WHO-WHAT-WHICH",
          hook: "Who is Muslim · What matter · Which statute overlays.",
          recite: "Profession of Islam + 1937 list + later Act/SMA check. Apostasy: read DMMA s. 4, not folklore."
        },
        cases: [
          { name: "Shariat Application Act, 1937 s. 2", citation: "India Code", point: "The statutory switch for listed matters." },
          { name: "Dissolution of Muslim Marriages Act, 1939 s. 4", citation: "apostasy clause — quote", point: "Husband’s apostasy does not by itself dissolve the marriage; VERIFY full section including provisos when writing the Project-adjacent answer." },
          { name: "Sarla Mudgal / Lily Thomas line", citation: "conversion + first marriage", point: "Conversion to Islam is not a device to evade a prior monogamous marriage. Neighbourhood hypo for applicability, not a Muslim-law holding on nikah essentials." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "To whom does Muslim Law apply in India? Discuss with statutory provisions.",
            outline: [
              "Profession of Islam; courts do not try sect orthodoxy.",
              "1937 Act s. 2 list as the subject-matter switch.",
              "Converts; DMMA s. 4 on apostasy (quote).",
              "SMA opt-out; later overlays.",
              "Close with the four-line problem test."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Effect of apostasy on a Muslim marriage after 1939.",
            outline: ["Not automatic dissolution on husband’s apostasy — DMMA s. 4. Quote; do not use pre-Act textbooks as current law."]
          }
        ],
        check: [
          "Can state the four-line applicability test.",
          "Knows 1937 is subject-matter specific.",
          "Can handle conversion/apostasy without folklore.",
          "Flags SMA marriages as a different code."
        ]
      },
      {
        id: "m-marriage",
        seq: 5,
        readAs: "Unit II · marriage",
        unit: 2,
        yield: "high",
        tags: ["marriage", "nikah", "capacity", "irregular", "muta"],
        title: "Marriage (Nikah)",
        summary: "Nikah is a civil contract with religious colour: proposal, acceptance, competent parties, and absence of prohibited relationships. Keep the Hanafi valid/void/irregular classification cold, and do not confuse mut‘a with a Sunni irregular marriage.",
        explainer: `<p>Definition for the first two lines: Muslim marriage (nikah) is a contract that legalises intercourse, founds consortium and status, and creates civil obligations (notably mahr and maintenance during marriage). <em>Abdul Kadir v. Salima</em> (1886) 8 All 149 is the antique but still-taught authority that it is essentially a civil contract. Religious ceremony is customary, not a Hanafi essential in the same way saptapadi is essential in a Hindu sacramental form.</p>
        <p><strong>Essentials (write as a numbered list):</strong></p>
        <ul>
          <li><strong>Proposal and acceptance (ijab-o-qabul)</strong> in one meeting, in the presence of the parties or their agents, with words showing present consent (not a mere promise to marry later).</li>
          <li><strong>Competent parties:</strong> Muslim (with rules on Kitabia spouses in classical Sunni law — a Muslim man may marry a Kitabia; a Muslim woman marrying a non-Muslim is classically void). Age/puberty and sound mind; guardian’s consent for those without capacity (see guardianship card). Forced consent is not consent.</li>
          <li><strong>Free from prohibited relationships:</strong> consanguinity, affinity, fosterage (rida‘a). Polyandry is prohibited. A Muslim man is classically limited to four wives at a time — Indian public-policy and later criminal-law overlays exist; do not write a moral essay, write the classical ceiling and flag that a fifth is not a valid Hanafi marriage.</li>
          <li><strong>Witnesses:</strong> two adult male Muslim witnesses, or one male and two female, is the usual Hanafi teaching. Shia Ithna Ashari teaching often treats witnesses as not essential to validity in the same way — school-sensitive.</li>
          <li><strong>Mahr:</strong> obligation arises from marriage; specification is not always essential to validity (proper dower fills the gap). See the mahr card.</li>
        </ul>
        <p><strong>Hanafi classification — the 10-marker everyone under-writes:</strong></p>
        <ul>
          <li><strong>Sahih (valid):</strong> all essentials present. Full civil effects: mahr, maintenance, legitimacy, inheritance rights, iddat on termination.</li>
          <li><strong>Batil (void):</strong> e.g. marriage with a woman in the prohibited degrees, or with a fifth wife, or polyandry. No legal effects; children not legitimate from that marriage (acknowledgement card is a different route).</li>
          <li><strong>Fasid (irregular):</strong> a middle category — e.g. marriage without required witnesses, or in some accounts marriage with a woman during her iddat, or unlawful conjunction of sisters. It is not a nullity from the start in the same way as batil; consummation has consequences (mahr, iddat, legitimacy of children in the teaching restatement). It can be regularised by removing the impediment. <em>This table is Hanafi. Do not paste it onto Ithna Ashari facts.</em></li>
        </ul>
        <p><strong>Mut‘a:</strong> temporary marriage for a fixed term and dower — Ithna Ashari yes, Sunni no. If Sunni parties attempt it, it is not a valid Sunni nikah (often taught as void). Do not call it “Hanafi irregular” without a source you trust.</p>
        <p><strong>Registration / Family Courts.</strong> Nikah is not a TPA conveyance; non-registration does not by itself undo a valid contract, though proof becomes harder. Relief (restitution, jactitation, status) is Indian civil process, often in a Family Court.</p>`,
        analogy: {
          title: "Contract deploy with schema validation",
          body: "Ijab-o-qabul is the signed deploy in one session. Capacity and prohibited degrees are schema constraints (void = schema fail). Missing witnesses in Hanafi is a warning that puts the marriage in ‘irregular’ — a degraded deploy that can be patched. Mut‘a is a lease-shaped contract that only the Shia compiler accepts."
        },
        diagram: {
          type: "tree",
          title: "Hanafi marriage outcomes",
          root: "Nikah attempt",
          branches: ["Sahih — full effects", "Fasid — irregular, often curable", "Batil — void, no status"]
        },
        mnemonic: {
          name: "I-C-P-W-M",
          hook: "Ijab-qabul · Capacity · Prohibitions · Witnesses · Mahr obligation.",
          recite: "Valid / void / irregular is a Hanafi exam gift. Mut‘a is Shia-only. Abdul Kadir: civil contract."
        },
        cases: [
          { name: "Abdul Kadir v. Salima", citation: "(1886) 8 All 149", point: "Nikah as civil contract — still the introduction citation." },
          { name: "Hanafi valid/void/irregular restatement", citation: "Mulla digest (doctrine, not a case)", point: "Use as a table, not as a fake SCC cite. Tie facts to one box." },
          { name: "Capacity / Kitabia rule", citation: "classical Sunni teaching", point: "Muslim man–Kitabia woman classically permitted; Muslim woman–non-Muslim man classically void. Flag as classical if the question is Indian public policy." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define Muslim marriage. Discuss its essentials and the distinction between void and irregular marriages.",
            outline: [
              "Civil contract + Abdul Kadir.",
              "I-C-P-W-M essentials.",
              "Sahih / batil / fasid table with one example each.",
              "Effects on mahr, legitimacy, iddat.",
              "One line mut‘a so a compare question does not ambush you."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Mut‘a marriage.",
            outline: ["Definition; Ithna Ashari recognition; Sunni non-recognition; not SMA; not Hanafi fasid unless you have a source."]
          }
        ],
        check: [
          "Can list nikah essentials in exam order.",
          "Can fill a valid/void/irregular table with effects.",
          "Knows mut‘a is school-specific.",
          "Cites Abdul Kadir without turning the whole answer into contract law."
        ]
      },
      {
        id: "m-mahr",
        seq: 6,
        readAs: "Unit II · mahr",
        unit: 2,
        yield: "high",
        tags: ["mahr", "dower", "prompt", "deferred"],
        title: "Mahr (Dower)",
        summary: "Mahr is the wife’s proprietary right arising from marriage — specified or proper (mahr-ul-misl), prompt or deferred. Treat it as a debt-like claim, not a gift, and know the widow’s lien teaching.",
        explainer: `<p>Definition: mahr (dower) is a sum of money or other property which the wife is entitled to receive from the husband in consideration of the marriage. It is not bride-price paid to the father, and it is not a gift the husband may revoke at will. It is her right. Fyzee’s conceptual point, which CCS rewards, is that mahr is an integral incident of nikah, not an optional present.</p>
        <p><strong>Kinds — two axes, always:</strong></p>
        <ul>
          <li><strong>Specified (mahr-i-musamma) vs proper (mahr-ul-misl):</strong> if the contract fixes an amount, that is specified (subject to not being illusory in a way your book treats as unenforceable). If unspecified or invalidly specified, proper dower is fixed by reference to the dower of similarly placed women of her family — age, beauty, fortune, status, and the custom of her father’s family are the usual teaching factors. There is also a classical floor in Hanafi texts (ten dirhams) that Indian answers mention as history; do not pretend a 2026 Family Court awards dirhams.</li>
          <li><strong>Prompt (mu‘ajjal) vs deferred (mu’wajjal):</strong> prompt is payable on demand (including immediately after marriage). Deferred is payable on dissolution of marriage by death or divorce, or as agreed. If the contract is silent, the usual teaching is to treat a portion as prompt — follow your primary book’s split rather than inventing 50–50.</li>
        </ul>
        <p><strong>When it becomes due / enforceable.</strong> Prompt: on demand. Consummation (actual or valid retirement, as taught) confirms the claim to full specified dower in the standard restatement; non-consummation on divorce may halve specified dower in classical Hanafi teaching — this is a favourite distinction, so keep it. On the husband’s death, dower is an unsecured debt of the estate with a commonly taught <strong>widow’s lien</strong> on the husband’s property in her possession until dower is paid — a powerful short-note. She is not a mortgagee under TPA s. 58 unless the facts create one; she is a Muslim-law widow enforcing mahr.</p>
        <p><strong>Remission.</strong> An adult wife may remit dower wholly or partly; the teaching controversy is whether remission during marriage requires consideration and whether it can be retracted. Write the controversy in two lines rather than picking a fake majority.</p>
        <p><strong>Enforcement forum.</strong> Family Court / civil court; limitation as applicable to the claim as a debt. Do not mix mahr with post-divorce <em>maintenance</em> under CrPC 125 or MWA 1986 — mahr is a contractual/proprietary incident of nikah; maintenance is support. They can be claimed in the same life-story but they are different heads. <em>Shah Bano</em> is a maintenance case; mention it here only to distinguish.</p>`,
        analogy: {
          title: "Invoice generated at contract creation",
          body: "Nikah emits an invoice (mahr) in the wife’s name. Specified = line-item amount; proper = market rate for comparables. Prompt = due on invoice; deferred = due on termination event. Widow’s lien is a possessory hold on goods until the estate clears the invoice. Maintenance is a separate payroll, not this invoice."
        },
        diagram: {
          type: "compare",
          title: "Mahr axes",
          headers: ["Axis", "Pole A", "Pole B"],
          rows: [
            ["Quantum", "Specified (agreed)", "Proper / mahr-ul-misl (comparable women)"],
            ["Timing", "Prompt — on demand", "Deferred — death/divorce/as agreed"],
            ["Not to confuse", "Mahr = wife’s property right", "Maintenance = support (125 / MWA)"]
          ]
        },
        mnemonic: {
          name: "SP-PD-L",
          hook: "Specified/Proper · Prompt/Deferred · Lien of the widow.",
          recite: "Mahr is her debt-like right from nikah. Silence on amount → proper dower. Silence on time → don’t invent; follow the book’s prompt portion."
        },
        cases: [
          { name: "Widow’s lien teaching", citation: "Indian Mahomedan-law restatement (Mulla)", point: "Widow in possession may hold until dower is satisfied — short-note gold. Do not relabel it a TPA mortgage without facts." },
          { name: "Abdul Kadir v. Salima", citation: "(1886) 8 All 149", point: "Marriage as contract is the conceptual parent of mahr as consideration-like obligation." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "What is mahr? Explain its kinds and the widow’s right to dower.",
            outline: [
              "Definition: wife’s proprietary right, not a gift to the bride’s father.",
              "Specified vs proper; prompt vs deferred.",
              "When payable; half on non-consummation if that is in your restatement.",
              "Widow’s lien.",
              "Distinguish maintenance (Shah Bano neighbourhood) in four lines."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Mahr-ul-misl.",
            outline: ["Proper dower when unspecified. Comparables: family, status, custom. Not the husband’s whim."]
          }
        ],
        check: [
          "Can define mahr without calling it a gift.",
          "Can draw the two-axis table.",
          "Can explain widow’s lien in five lines.",
          "Does not merge mahr with CrPC 125."
        ]
      },
      {
        id: "m-divorce",
        seq: 7,
        readAs: "Unit II · divorce / talaq",
        unit: 2,
        yield: "high",
        tags: ["divorce", "talaq", "khula", "mubarat", "shayara bano"],
        title: "Divorce and Talaq",
        summary: "Modes: husband’s talaq (ahsan, hasan, biddat — the last now unconstitutional and separately criminalised), khula, mubarat, ila, zihar, lian, and judicial divorce under DMMA. Map who initiates, what form still works after Shayara Bano, and how iddat follows.",
        explainer: `<p>Dissolution of a Muslim marriage is a menu, not a single button. Write the menu first, then spend the marks on talaq forms and the 2017/2019 overlay. Judicial grounds live partly on the next card (DMMA) but belong in the menu here so a “modes of divorce” 20-marker is complete.</p>
        <p><strong>Husband’s talaq (Sunni teaching forms):</strong></p>
        <ul>
          <li><strong>Talaq ahsan:</strong> single pronouncement in a tuhr (period of purity), no intercourse in iddat, iddat follows. Revocable during iddat (raja‘at) in the usual restatement. Often called the most approved form.</li>
          <li><strong>Talaq hasan:</strong> three pronouncements in three successive tuhrs, with specified restraints. Becomes final after the third. Still a recognised classical form.</li>
          <li><strong>Talaq-e-biddat / instant triple talaq:</strong> three pronouncements in one tuhr (including one sentence “I talaq you thrice”). This was the social-evil form. <em>Shayara Bano v. Union of India</em> (2017) 9 SCC 1: the majority treated instant triple talaq as unconstitutional / not essential religious practice in the way the petitioners needed — <strong>write the holding as you understand it from the judgment, not from a WhatsApp forward; VERIFY the majority/minority split if you name judges.</strong> Parliament then passed the <strong>Muslim Women (Protection of Rights on Marriage) Act, 2019</strong>: instant triple talaq is void and illegal, and the Act creates a criminal offence and related protections (subsistence allowance, custody — <em>quote sections from India Code</em>). Exam close: biddat is not a tool you can still use in 2026.</li>
        </ul>
        <p><strong>Other extra-judicial modes:</strong> <strong>Khula</strong> — wife-initiated, typically with release of mahr/consideration, husband’s consent in classical Sunni teaching (the precise need for his consent is a commentary fight; say so). <strong>Mubarat</strong> — mutual aversion, both wish to separate. <strong>Ila</strong> — vow of abstinence for a period, with dissolution consequences if not resumed. <strong>Zihar</strong> — injurious assimilation of the wife to a prohibited female, requiring expiation; rarely a live Indian hypo. <strong>Lian</strong> — mutual imprecation after accusation of adultery; judicial flavour.</p>
        <p><strong>Talaq-e-tafwid:</strong> delegated talaq — husband confers on the wife (or another) a power to pronounce talaq under stipulated conditions. High-yield short note: it is not khula; she uses <em>his</em> power.</p>
        <p><strong>Formalities after Shamim Ara.</strong> <em>Shamim Ara v. State of U.P.</em> (2002) 7 SCC 518 is taught as requiring that talaq be clearly pronounced, communicated, and not a secret afterthought to defeat maintenance — a “bare statement in a written statement is not talaq.” Pair this with <em>Shayara Bano</em> so your talaq essay is post-2017 Indian law, not a 1920 digest.</p>
        <p><strong>Iddat and remarriage.</strong> Waiting period after death or divorce; maintenance during iddat classically; remarriage with the same husband after a triple (final) talaq classically required an intervening marriage (halala) — a practice now under intense constitutional and criminal-law scrutiny. Do not recommend halala as a planning device; if asked, describe the classical rule and flag contemporary illegality/constitutional doubt rather than drafting a workaround.</p>
        <p><strong>Judicial:</strong> DMMA s. 2 grounds (next card). Family Court is the usual forum.</p>`,
        analogy: {
          title: "Terminate the contract — approved APIs only",
          body: "Ahsan/hasan are documented, rate-limited terminate APIs with a cooling-off (iddat / tuhr). Triple talaq in one breath was an undocumented force-kill; Shayara Bano + 2019 Act removed that endpoint and added a criminal alarm. Khula/mubarat are mutual or wife-side terminate flows. DMMA is the court-ordered terminate. Shamim Ara: you cannot pretend a comment in a pleading was a successful API call."
        },
        diagram: {
          type: "tree",
          title: "Modes of dissolution (menu)",
          root: "End the nikah",
          branches: ["Talaq (ahsan/hasan; biddat dead)", "Khula / mubarat", "Ila / zihar / lian", "DMMA judicial divorce"]
        },
        mnemonic: {
          name: "AHB-KML-D",
          hook: "Ahsan Hasan Biddat(dead) · Khula Mubarat Lian · DMMA.",
          recite: "Shayara Bano + 2019 Act kill instant triple talaq. Shamim Ara: prove a real pronouncement, not a WS sentence."
        },
        cases: [
          { name: "Shayara Bano v. Union of India", citation: "(2017) 9 SCC 1", point: "Instant triple talaq (talaq-e-biddat) failed constitutional scrutiny; not available as a living form. VERIFY judge-wise split if you name it." },
          { name: "Muslim Women (Protection of Rights on Marriage) Act, 2019", citation: "India Code", point: "Statutory voidness + offence + protective orders. Quote sections; do not rely on news paraphrases." },
          { name: "Shamim Ara v. State of U.P.", citation: "(2002) 7 SCC 518", point: "Talaq must be proved as a real act communicated in accordance with law; a bare written-statement claim is insufficient." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the different modes of divorce under Muslim Law. Is triple talaq valid in India today?",
            outline: [
              "Menu of modes.",
              "Ahsan vs hasan vs biddat.",
              "Shayara Bano holding + 2019 Act (quote).",
              "Khula, mubarat, tafwid.",
              "Shamim Ara proof. Close: biddat is not Indian law in 2026."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Khula and mubarat.",
            outline: ["Khula: wife-initiated, typically against consideration. Mubarat: mutual. Both extra-judicial. Distinguish delegated talaq."]
          }
        ],
        check: [
          "Can list extra-judicial and judicial modes.",
          "Can define ahsan vs hasan vs biddat.",
          "Can state Shayara Bano + 2019 Act in four lines.",
          "Knows Shamim Ara’s proof point."
        ]
      },
      {
        id: "m-shahbano",
        seq: 8,
        readAs: "Unit II · statutory overlay",
        unit: 2,
        yield: "high",
        tags: ["shah bano", "dmma", "mwa", "crpc 125", "danial latifi"],
        title: "DMMA, MWA, CrPC 125 & Shah Bano theme",
        summary: "Three statutes and one constitutional story: DMMA 1939 (wife’s judicial divorce), CrPC 125 (quick maintenance — now BNSS neighbourhood), and the 1985 Shah Bano → 1986 MWA → 2001 Danial Latifi loop on divorced Muslim women’s provision. Keep this card separate from classical talaq forms.",
        explainer: `<p>Examiners often want <em>both</em> classical talaq and this overlay. Do not bury DMMA grounds inside a talaq-forms dump. This card is statute + constitutional maintenance.</p>
        <p><strong>Dissolution of Muslim Marriages Act, 1939.</strong> Gave a Muslim wife a statutory right to judicial divorce on listed grounds in <strong>s. 2</strong> — typically taught as: whereabouts of husband unknown for a prescribed period; failure to provide maintenance; imprisonment; failure to perform marital obligations; impotence; insanity/disease; cruelty (including unequal treatment among co-wives); and residual grounds recognised as valid under Muslim law (e.g. lian / option of puberty in the section’s scheme). <em>Quote the current s. 2 clauses from India Code; do not number from memory if you are shaky.</em> <strong>s. 4</strong> on apostasy (husband’s apostasy not by itself dissolving marriage) is the applicability hitch. Effect of a DMMA decree: marriage dissolved; mahr and iddat consequences follow as on divorce; it is not triple talaq.</p>
        <p><strong>CrPC s. 125 (teaching name) / BNSS successor.</strong> A secular, speedy, need-based maintenance remedy for wives (including divorced wives in the 125 jurisprudence), children, and parents. <em>Mohd. Ahmed Khan v. Shah Bano Begum</em> (1985) 2 SCC 556: a divorced Muslim woman unable to maintain herself could claim under s. 125; the Court refused to read Muslim personal law as ousting that secular remedy; mahr was not a complete substitute for maintenance. For December 2026, the Criminal Procedure Code has been replaced in force by the Bharatiya Nagarik Suraksha Sanhita, 2023 — the comparable maintenance section is commonly taught as <strong>BNSS s. 144</strong>. <strong>VERIFY</strong> the number and wording before the hall; in the answer, say “CrPC 125 as continued in BNSS” if you are unsure of the digit, rather than inventing it. CCS question papers may still print “125.”</p>
        <p><strong>The political-statutory sequel.</strong> Parliament enacted the <strong>Muslim Women (Protection of Rights on Divorce) Act, 1986</strong> (MWPRDA / MWA). Structure to remember: <strong>s. 3</strong> — a divorced Muslim woman is entitled, at the time of divorce, to a <em>reasonable and fair provision and maintenance</em> to be made and paid to her within the iddat period by her former husband; mahr; and other properties. After iddat, if she cannot maintain herself, liability can shift toward specified relatives and, ultimately, the State Wakf Board under the Act’s scheme (<strong>s. 4</strong> — quote). The political reading was “125 ousted.” The constitutional reading came in <em>Danial Latifi v. Union of India</em> (2001) 7 SCC 740: “reasonable and fair provision” is not confined to iddat subsistence; the husband must make a provision <em>within</em> iddat that contemplates her future needs — a reading that saved the Act by interpreting it consistently with Arts. 14/15/21. Later cases in the <em>Shabana Bano</em> / <em>Shamima Farooqui</em> neighbourhood continue 125-style relief in various postures — <strong>VERIFY</strong> the exact case you name for “125 still available.”</p>
        <p><strong>2019 Act</strong> (instant triple talaq) is the other overlay: void talaq, offence, subsistence allowance, custody — cross-cite the divorce card; do not retry Shayara Bano here except as one sentence.</p>
        <p><strong>Family Courts Act, 1984:</strong> maintenance and marital status suits go here where the Act applies. Procedure is less lawyer-theatrical; the doctrine does not change.</p>
        <p><strong>Answer architecture:</strong> (1) DMMA as wife’s exit; (2) 125/BNSS as quick support; (3) Shah Bano holding; (4) 1986 Act skeleton; (5) Danial Latifi construction; (6) close: personal law is not a ceiling on destitution remedies.</p>`,
        analogy: {
          title: "Classic library, then three patches",
          body: "Classical talaq/maintenance is v1. DMMA is a wife-initiated terminate() in court. CrPC 125/BNSS 144 is an emergency payroll API that does not care which family code you compiled. 1986 Act tried to fork Muslim wives off that API; Danial Latifi recompiled the fork so the husband still funds a future-looking provision. 2019 patched the force-kill talaq endpoint."
        },
        diagram: {
          type: "flow",
          title: "Maintenance story — years to recite",
          steps: ["Classical iddat maintenance", "Shah Bano 1985 (s.125 applies)", "MWA 1986 s.3 provision", "Danial Latifi 2001 (fair provision ≠ iddat-only)", "BNSS successor of 125 — VERIFY"]
        },
        mnemonic: {
          name: "D-125-SB-86-DL",
          hook: "DMMA · 125 · Shah Bano · 1986 Act · Danial Latifi.",
          recite: "Wife can exit by statute. Destitution remedy is constitutionalised. ‘Within iddat’ times the payment, not the horizon of the provision."
        },
        cases: [
          { name: "Mohd. Ahmed Khan v. Shah Bano Begum", citation: "(1985) 2 SCC 556", point: "Divorced Muslim woman can claim s. 125 maintenance; personal law does not oust the secular provision for the destitute." },
          { name: "Danial Latifi v. Union of India", citation: "(2001) 7 SCC 740", point: "MWA s. 3 ‘reasonable and fair provision and maintenance’ must cover future needs; payment arranged within iddat. Act upheld by interpretation." },
          { name: "DMMA, 1939 s. 2", citation: "India Code", point: "Statutory grounds for the wife’s suit for dissolution — list from the Act, not from Unique." },
          { name: "Shabana Bano / Shamima Farooqui line", citation: "VERIFY before naming a holding", point: "Later 125-availability cases — use only if you have the citation straight." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the rights of a divorced Muslim woman to maintenance after Shah Bano, the 1986 Act, and Danial Latifi.",
            outline: [
              "Shah Bano + s. 125 holding.",
              "MWA ss. 3–4 skeleton.",
              "Danial Latifi construction of ‘provision’.",
              "BNSS successor — VERIFY number.",
              "Distinguish mahr. Close: destitution is not a personal-law privilege of the husband."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Grounds of divorce available to a Muslim wife under the 1939 Act.",
            outline: ["s. 2 list from the Act. s. 4 apostasy. Decree ≠ triple talaq. Family Court forum."]
          }
        ],
        check: [
          "Can list DMMA s. 2 grounds from a remembered map (and knows to verify wording).",
          "Can tell the Shah Bano → 1986 → Latifi story in under two minutes.",
          "Knows ‘within iddat’ is timing of payment, not the cap of need (Latifi).",
          "Flags BNSS section number as VERIFY."
        ]
      },
      {
        id: "m-wills",
        seq: 9,
        readAs: "Unit III · wills",
        unit: 3,
        yield: "standard",
        tags: ["wills", "wasiyat", "bequest", "one-third"],
        title: "Wills (Wasiyat)",
        summary: "A Muslim may generally bequeath up to one-third of the net estate to a non-heir without the heirs’ consent; bequests to heirs or beyond one-third need consent. Formalities are simpler than the Indian Succession Act template — that contrast is the short-note.",
        explainer: `<p>Wasiyat is a testamentary disposition effective on death. It is not hiba (which needs delivery in life) and not a TPA gift. The policy of Muslim law is to protect the Quranic heirs: freedom to will is real but capped.</p>
        <p><strong>Essentials:</strong> a competent testator (major, of sound mind — death-illness/marz-ul-maut has special rules that pull a death-bed gift toward the will ceiling); intention to bequeath; a valid object (not for a sinful purpose in classical teaching); a bequeathable subject. Writing is not classically essential; oral wills are known to the doctrine, though proof is the practical killer. The Indian Succession Act’s privileged/unprivileged will formalities generally do <em>not</em> govern Muslims — that is the applicability border from Unit I. Still, if a Muslim executes a formal ISA-style will, it can operate as evidence of wasiyat; the <em>ceiling</em> still comes from Muslim law.</p>
        <p><strong>The one-third rule (write this cold):</strong> a bequest to a <em>non-heir</em> is valid up to <strong>one-third</strong> of the net estate (after funeral expenses and debts, including unpaid mahr). Beyond one-third, the excess requires consent of the heirs, typically after the testator’s death (they cannot be bound by a consent given in the air before they are heirs in possession of the right). A bequest to an <em>heir</em> classically requires the other heirs’ consent, even within one-third — this is the Sunni teaching CCS expects. Shia teaching is often stated as more liberal on bequests to heirs within the third — school-sensitive; if the problem is silent, write the Sunni rule and flag the Shia variant in one clause.</p>
        <p><strong>Who is an “heir” for this purpose?</strong> A person who would actually take on intestacy. A bequest to someone who is not in the residuary/sharer picture is a non-heir bequest and only hits the one-third cap.</p>
        <p><strong>Revocation:</strong> a later will, alienation of the subject, or destruction with intent. Abatement: if several bequests exceed the third and heirs do not consent, they abate rateably in the usual restatement.</p>
        <p><strong>Marz-ul-maut:</strong> gifts made in death-illness are treated, for the ceiling, akin to bequests — they cannot be used to defeat heirs beyond the third. That sentence earns marks in mixed hiba/wasiyat problems.</p>`,
        analogy: {
          title: "Estate budget: 2/3 locked to heirs",
          body: "Intestate shares are the reserved budget (two-thirds plus whatever is not validly willed). Wasiyat is a post-dated transfer that can spend at most one-third on outsiders without a board (heirs) resolution. Hiba is a live wire transfer that must clear in the donor’s lifetime. Death-bed hiba is reclassified as a wasiyat spend so you cannot drain the reserved budget at the last minute."
        },
        diagram: {
          type: "decision",
          title: "Is this wasiyat good without heir consent?",
          q: "Non-heir AND ≤ 1/3 of net estate?",
          yes: "Valid (Sunni teaching).",
          no: "Needs heirs’ consent (to heir, or over the third)."
        },
        mnemonic: {
          name: "1/3-NON-HEIR",
          hook: "One-third to a stranger, free. Heir, or more than a third: consent.",
          recite: "Net of debts and funeral. Marz-ul-maut gifts count against the third. Not ISA formalities."
        },
        cases: [
          { name: "One-third rule", citation: "classical Sunni restatement (Mulla/Fyzee)", point: "The rule is doctrine, not a named SCC in most teaching. Do not invent a case name for it." },
          { name: "Marz-ul-maut doctrine", citation: "death-illness gifts as bequests", point: "Stops last-minute heir-defeat via ‘gift’." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "A Muslim’s power of testamentary disposition.",
            outline: ["Define wasiyat.", "One-third + non-heir.", "Consent for heirs / excess.", "Marz-ul-maut.", "ISA contrast."]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Bequest to an heir.",
            outline: ["Sunni: other heirs must consent. Shia variant in one clause if you have it. Not a hiba."]
          }
        ],
        check: [
          "Can state the one-third rule with the heir/non-heir split.",
          "Knows consent is generally post-death.",
          "Can distinguish wasiyat from hiba in three lines.",
          "Flags marz-ul-maut."
        ]
      },
      {
        id: "m-gifts",
        seq: 10,
        readAs: "Unit III · gifts",
        unit: 3,
        yield: "high",
        tags: ["gifts", "hiba", "possession", "mushaa"],
        title: "Gifts (Hiba)",
        summary: "Hiba needs declaration, acceptance, and delivery of possession — with classic exceptions where donor and donee already share the property. Distinguish hiba from wasiyat and from TPA s. 122 gifts; mushaa and conditional gifts are the usual traps.",
        explainer: `<p>Hiba is an immediate, unconditional transfer of property without consideration from one living person to another. Three essentials, always, in this order:</p>
        <ul>
          <li><strong>Declaration (ijab)</strong> by the donor of an immediate gift.</li>
          <li><strong>Acceptance (qabul)</strong> by the donee (or guardian for a minor).</li>
          <li><strong>Delivery of possession (qabza)</strong> — actual or constructive, as the nature of the property allows. This is the Indian-case battleground.</li>
        </ul>
        <p><strong>Possession exceptions (write as a list, not a vibe):</strong> where donor and donee reside together and the donor visibly relinquishes control; gift by a father/guardian to a minor ward (possession is already with the guardian — a further delivery can be notional); gift of an equity or of property already with the donee. Registration under the Registration Act may be evidence but does not, in the classical teaching, replace qabza for a Muslim hiba of immovable property — contrast TPA s. 123 (registered instrument for immovable gifts <em>under TPA</em>). <em>If the parties are Muslims making a hiba, Muslim law on hiba applies (1937 Act list includes gifts). Do not “save” a failed qabza by saying “but we registered it” unless your authority says registration amounted to constructive delivery on those facts.</em></p>
        <p><strong>Who can give.</strong> Major, of sound mind, owner. Gift in marz-ul-maut is pulled toward the one-third will ceiling (wills card). A gift of the entire property leaving the donor destitute is still conceptually a hiba if essentials are met — policy critiques exist but CCS wants essentials first.</p>
        <p><strong>Mushaa (undivided share).</strong> Gift of an undivided share in indivisible property is generally valid; in divisible property, classical Hanafi teaching treats an undelivered mushaa gift as irregular/invalid until possession is sorted. This is a favourite 10-marker. After partition/delivery, it can be perfected.</p>
        <p><strong>Conditional / future / contingent gifts.</strong> A hiba must be immediate. A gift “from next year” or “if you marry” is not a completed hiba (it may be nothing, or a will-like attempt, or a contract — sort the facts). Conditions that restrain alienation may be void while the gift stands, in the usual restatement — analogous in spirit to TPA condition problems but do not cite TPA ss. 10–11 as if they were hiba sections.</p>
        <p><strong>Hiba-bil-iwaz / hiba-ba-shart-ul-iwaz:</strong> gift with return. Teaching: the first, once iwaz is paid, has sale-like incidents; the second is a gift with a stipulation for return. Use them as short notes; do not drown the three essentials.</p>
        <p><strong>Revocation.</strong> Generally possible before delivery; after delivery, revocation is restricted (and often needs a court decree in the teaching), with exceptions (gifts to spouses, close kindred — follow Mulla’s list). A completed hiba to a spouse is commonly taught as irrevocable.</p>`,
        analogy: {
          title: "Three-way handshake, then the bytes move",
          body: "Declaration SYN, acceptance SYN-ACK, possession ACK — connection up. Registration is a log entry; without the bytes (qabza) the socket is not open. Mushaa is gifting a slice of an unpartitioned disk: fine if the volume is indivisible; messy if you could have carved extents and did not. A future gift is a cron job, not a transfer. TPA s. 122 is a different protocol."
        },
        diagram: {
          type: "flow",
          title: "Hiba essentials",
          steps: ["Declaration (immediate)", "Acceptance", "Delivery of possession", "Exceptions if cohabiting / guardian-ward", "Done — not a will, not TPA s.123"]
        },
        mnemonic: {
          name: "DAP",
          hook: "Declare · Accept · Possess.",
          recite: "No qabza, no hiba. Mushaa trap on divisible property. Marz-ul-maut → one-third. TPA gift rules are the other paper."
        },
        cases: [
          { name: "Three essentials restatement", citation: "Mulla on Hiba; Indian HC line", point: "Declaration, acceptance, possession. Cite a named possession case from your book if you have one; do not invent." },
          { name: "TPA contrast", citation: "TPA ss. 122–123", point: "Muslim hiba of immovable property is not saved merely by TPA registration logic. Cross-paper distinction." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "What are the essentials of a valid hiba? When is delivery of possession dispensed with?",
            outline: [
              "DAP.",
              "How possession is given in houses vs bank balances vs land.",
              "Cohabitation and guardian-ward exceptions.",
              "Mushaa.",
              "Distinguish wasiyat and TPA gift."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Hiba of mushaa.",
            outline: ["Undivided share. Indivisible vs divisible property teaching. Perfect by partition/delivery."]
          }
        ],
        check: [
          "Can recite DAP without thinking.",
          "Can list two possession exceptions.",
          "Can explain mushaa in five lines.",
          "Can distinguish hiba from wasiyat and from TPA gift."
        ]
      },
      {
        id: "m-wakf",
        seq: 11,
        readAs: "Unit III · wakf",
        unit: 3,
        yield: "high",
        tags: ["wakf", "waqf", "mutawalli", "dedication"],
        title: "Wakf",
        summary: "Wakf is a permanent dedication of property by a Muslim for purposes recognised by Muslim law as religious, pious or charitable. Once validly dedicated, the corpus is tied; the mutawalli administers but does not own. Indian administration is statutory (Waqf Act framework — verify the in-force title after later amendments).",
        explainer: `<p>Definition (exam sentence): wakf is the permanent dedication by a Muslim of any movable or immovable property for any purpose recognised by Muslim law as religious, pious or charitable. Ownership, in the conceptual teaching, is detained for God; beneficiaries take usufruct. This is not a TPA trust in form, though Indian courts have used trust vocabulary as an analogy. The 1937 Act includes wakfs in the Shariat list; administration is overlaid by the Waqf Act, 1995 as amended (including later amendment legislation — <strong>VERIFY</strong> the current short title and survey/Board provisions before quoting section numbers in 2026).</p>
        <p><strong>Essentials of creation:</strong></p>
        <ul>
          <li><strong>Competency of wakif:</strong> Muslim, major, of sound mind, owner of the property. A non-Muslim’s dedication for a Muslim charitable object is a commentary edge-case — do not lead with it.</li>
          <li><strong>Permanent dedication:</strong> not a temporary loan of use. Contingent or future wakfs fail the immediacy idea in the usual restatement.</li>
          <li><strong>Lawful object:</strong> mosque, graveyard, education, relief of the poor, family wakf (wakf-alal-aulad) subject to an ultimate charitable remainder in the teaching of many Indian cases. A wakf for an object unknown to Muslim law as pious/charitable fails.</li>
          <li><strong>Subject:</strong> property capable of being used perpetually in that way. Mushaa issues can arise analogously to hiba.</li>
        </ul>
        <p><strong>Form.</strong> Writing is not classically essential; a mosque built and thrown open is a dedication by conduct. Registration and Waqf-Board listing are now the practical Indian proof and supervision layer — statutory, not classical.</p>
        <p><strong>Mutawalli.</strong> Manager, not owner. Cannot alienate wakf property except as the law (and Board/court) allows. Appointment: by the wakif, by the deed, by the outgoing mutawalli if empowered, by the Board/court. Removal for breach of trust, unfitness, or statutory grounds. A woman may be mutawalli in the general Indian teaching unless the office is religious in a way that requires a male (e.g. some imam functions) — a short-note distinction.</p>
        <p><strong>Family wakf.</strong> Indian courts historically struggled with dedications that were really private settlements in perpetuity. The doctrine that eventually taught: a family wakf is valid if there is a substantial ultimate dedication to charity, not a cloak. Do not cite a random case name; use your book’s leading authority and mark <strong>VERIFY</strong> if unsure.</p>
        <p><strong>Compare:</strong> wakf vs trust (English) vs hiba vs sadaqah. Hiba transfers to a donee; wakf does not create a human owner of the corpus. Sadaqah is often a completed charity gift, not a perpetual institution.</p>`,
        analogy: {
          title: "Immutable endowment contract",
          body: "The wakif deploys property into an immutable contract: corpus locked, yield routed to named purposes. Mutawalli is the operator with a restricted key, not the token holder. The Waqf Board is the regulator/explorer node. A family wakf that never routes to charity is a private token lock dressed as a public contract — courts look for the charitable remainder."
        },
        diagram: {
          type: "vflow",
          title: "Wakf life-cycle",
          steps: ["Competent wakif + owned property", "Permanent dedication to a lawful object", "Corpus tied (no ordinary sale)", "Mutawalli administers", "Waqf Board / statutory overlay"]
        },
        mnemonic: {
          name: "P-D-O-M",
          hook: "Permanent · Dedication · Object (pious/charitable) · Mutawalli (manager not owner).",
          recite: "1937 applies the doctrine; Waqf Act administers it. VERIFY 1995/later amendment section numbers."
        },
        cases: [
          { name: "Waqf Act, 1995 (as amended)", citation: "VERIFY in-force text / later amending Act", point: "Board, survey, listing, alienation controls. Do not quote repealed section numbers." },
          { name: "Mutawalli as manager", citation: "Indian restatement", point: "No ownership; limited power of alienation. Leading named case from your Mulla chapter — do not invent." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define wakf. What are the essentials of a valid wakf? What is the position of a mutawalli?",
            outline: [
              "Permanent dedication definition.",
              "Essentials list.",
              "Family wakf / ultimate charity.",
              "Mutawalli: appointment, powers, removal, gender short note.",
              "Statutory Board overlay with VERIFY on sections."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Mutawalli.",
            outline: ["Manager not owner. Cannot treat corpus as personal estate. Removal for breach."]
          }
        ],
        check: [
          "Can define wakf in one exam sentence.",
          "Can list creation essentials.",
          "Can explain mutawalli vs owner.",
          "Flags Waqf Act section numbers as VERIFY after amendments."
        ]
      },
      {
        id: "m-preemption",
        seq: 12,
        readAs: "Unit III · pre-emption",
        unit: 3,
        yield: "standard",
        tags: ["pre-emption", "shufa", "constitutional"],
        title: "Pre-emption (Shufa)",
        summary: "Shufa is the preferential right to step into a purchaser’s shoes when certain property is sold — classically to a co-sharer or neighbour. Constitutional scrutiny has narrowed neighbour-based claims; know who can still claim, when the right arises, and the formal demands (talabs).",
        explainer: `<p>Definition: pre-emption (shufa) is a right to acquire, in preference, immovable property which has been sold to another, on matching the price and terms. It is not a right that exists before a sale in the air; it is a right of substitution that arises on a completed sale to a stranger (in the classical scheme).</p>
        <p><strong>Who could claim (classical Hanafi classes of shafi):</strong></p>
        <ul>
          <li><strong>Shafi-i-sharik:</strong> co-owner of the property sold (the strongest and still the most defensible class).</li>
          <li><strong>Shafi-i-khalit:</strong> a participator in immunities and appendages (e.g. a common right of way or water) — teaching category; facts-sensitive.</li>
          <li><strong>Shafi-i-jar:</strong> neighbour (owner of adjoining immovable property). This is the constitutionally wounded class.</li>
        </ul>
        <p><strong>Constitutional overlay — do not skip.</strong> Pre-emption on the sole ground of vicinage has been struck down / narrowed as a restriction on property and as smacking of exclusion. Teaching citations: <em>Bhau Ram v. Baij Nath Singh</em> AIR 1962 SC 1476 and <em>Atam Prakash v. State of Haryana</em> (1986) 2 SCC 249 (statutory pre-emption on vicinage). <strong>VERIFY</strong> which proposition you pin on which case: one is often used for statutory vicinage, the other in the general constitutional story. Co-sharer pre-emption has fared better because it is about keeping strangers out of a joint property, not about refusing a neighbour of a particular community. Do not write “pre-emption is unconstitutional” as a blanket — that over-kills a still-living co-owner right in many personal-law and statute settings.</p>
        <p><strong>When it arises / how it is claimed.</strong> On a valid, completed sale to a person who is a stranger vis-à-vis the pre-emptor. The classical ritual of demands — <strong>talab-i-mowasibat</strong> (immediate demand) and <strong>talab-i-ishhad</strong> (demand with witnesses, invoking the first) — is still taught as essential in Muslim-law shufa; delay and mixed signals kill the right. Then a suit. The pre-emptor must take the property at the sale price (and cannot usually pick a slice unless the law of the case allows). Bonafide improvements and the seller–buyer structure are problem-question flavour.</p>
        <p><strong>Extinction:</strong> waiver, acquiescence, death of the pre-emptor in some accounts (the right is personal), loss of the qualifying status (ceasing to be co-sharer), and constitutional/statutory abolition of that class of claim.</p>
        <p><strong>Close:</strong> define, classes, talabs, constitutional trim, co-sharer survival. That is a complete 10/20-marker.</p>`,
        analogy: {
          title: "Right of first refusal, post-sale, with a shot clock",
          body: "Shufa is not a pre-listing ROFR. It is a statutory/personal-law right to hijack a closed deal at the same price because you are already on the cap table (co-sharer) or, classically, next door. Vicinage ROFR failed constitutional code-review. The talabs are a two-step shot clock: miss them and the PR is closed."
        },
        diagram: {
          type: "compare",
          title: "Classes of shafi after constitutional trim",
          headers: ["Class", "Basis", "Exam status"],
          rows: [
            ["Sharik (co-owner)", "Undivided property", "Strongest; still teach as living"],
            ["Khalit (appendages)", "Shared easement-like rights", "Facts-sensitive teaching category"],
            ["Jar (neighbour)", "Vicinage", "Constitutionally narrowed/struck in key holdings — VERIFY cites"]
          ]
        },
        mnemonic: {
          name: "S-K-J + 2 TALABS",
          hook: "Sharik · Khalit · Jar. Immediate demand, then witnessed demand.",
          recite: "Right arises on sale to a stranger. Vicinage is the constitutional weak spot. Co-sharer is the safe example."
        },
        cases: [
          { name: "Bhau Ram v. Baij Nath Singh", citation: "AIR 1962 SC 1476 — VERIFY proposition", point: "Often taught in the constitutional story of pre-emption. Confirm the exact statutory context before quoting." },
          { name: "Atam Prakash v. State of Haryana", citation: "(1986) 2 SCC 249 — VERIFY", point: "Vicinage-based statutory pre-emption and Art. 19/14 analysis. Do not flatten into ‘all shufa is dead’." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "What is pre-emption? Who may claim it, and is the neighbour’s right still valid?",
            outline: [
              "Definition: substitution on sale.",
              "Three classes.",
              "Talabs.",
              "Constitutional trim of vicinage (named cases with VERIFY).",
              "Co-sharer as the surviving illustration."
            ]
          }
        ],
        check: [
          "Can define shufa without calling it a pre-sale option.",
          "Can name three classes and two talabs.",
          "Can state the vicinage constitutional problem without over-killing co-sharer rights.",
          "Flags Bhau Ram / Atam Prakash mapping as VERIFY."
        ]
      },
      {
        id: "m-ack-guard",
        seq: 13,
        readAs: "Unit III · acknowledgement & guardianship",
        unit: 3,
        yield: "standard",
        tags: ["acknowledgement", "guardianship", "legitimacy", "imambandi"],
        title: "Acknowledgement & Guardianship",
        summary: "Acknowledgement of paternity can confer legitimacy where the child is of unknown descent — with strict conditions (age gap, no contrary proof, capacity to marry the mother). Guardianship splits person and property; the father is the natural guardian of a minor’s property in the leading Indian holding (Imambandi).",
        explainer: `<p>These are linked status topics. Acknowledgement (iqrar) is about <em>who the child is</em>. Guardianship (hizanat / wilayat) is about <em>who decides and who holds property</em>. Classical Muslim law does not know Hindu-style adoption; you cannot “adopt” a known child of another and rewrite lineage. That one sentence is a 5-mark gift.</p>
        <p><strong>Acknowledgement of legitimacy — conditions commonly taught:</strong></p>
        <ul>
          <li>The acknowledger is a Muslim of sound mind, capable of being the father (an age gap that makes paternity possible — often taught as not less than 12½ years or similar; <em>use your book’s figure</em>).</li>
          <li>The child is of unknown descent (not a known child of another man).</li>
          <li>The acknowledgement is of a relationship that is possible (the acknowledger could have been lawfully married to the mother at the relevant time).</li>
          <li>The child (if of age) does not repudiate.</li>
          <li>It is not contradicted by a prior decisive status.</li>
        </ul>
        <p>Effects: status of legitimacy, mutual inheritance rights, and the acknowledger cannot later retract at will in the usual restatement. <em>Muhammad Allahdad Khan v. Muhammad Ismail Khan</em> (1888) 10 All 289 is the classic teaching citation for the doctrine’s limits — <strong>VERIFY</strong> the proposition you pin on it (often: acknowledgement cannot succeed where paternity of another is established / conditions fail).</p>
        <p><strong>Guardianship of the person (custody / hizanat).</strong> Mother has a preferential right to custody of a young child (ages differ for boys and girls in Hanafi teaching — commonly until 7 for boys and puberty for girls, with variation; <em>do not treat the numbers as statute</em>). The right is for the child’s welfare and can be lost by unfitness, remarriage in some accounts, or living a life that harms the child. Father’s right of supervision and later custody is the other pole. Indian courts overlay the <em>welfare of the minor</em> as paramount — the same constitutional/family-court gravity you have seen in Hindu custody, even though the Guardians and Wards Act, 1890 is a secular procedural/appointment statute that Muslim parties also meet in court. <em>Githa Hariharan</em> is a Hindu/Hindu Minority Act case; do not paste it as a Muslim-law holding. You may cite it only as welfare-of-the-child atmosphere, clearly labelled.</p>
        <p><strong>Guardianship of property.</strong> <em>Imambandi v. Mutsaddi</em> (1918) 45 IA 73; AIR 1918 PC 11: the father is the natural guardian and legal custodian of the minor’s property; the mother is not the natural guardian of property in that classical holding, though she may be appointed and is the de facto carer. Alienation of a minor’s immovable property by a de facto guardian is the famous invalidity problem that still appears in property-adjacent hypos. A legal guardian’s powers are confined (necessity, benefit) — analogous in spirit to other personal-law minor-property rules.</p>
        <p><strong>Appointment / removal:</strong> court under the Guardians and Wards Act, guided by personal law and welfare. Testamentary guardianship exists in the doctrine with limits.</p>
        <p><strong>Close:</strong> no adoption; acknowledgement is a narrow legitimacy tool; custody is welfare-conditioned hizanat; property is Imambandi’s father-as-natural-guardian unless a court says otherwise.</p>`,
        analogy: {
          title: "Identity claim vs admin roles",
          body: "Acknowledgement is a verified identity claim that can mint a parent-child edge if the node was unparented and the ages make the edge possible. It is not an adoption API. Hizanat is the childcare admin role (often mother first). Property guardianship is the treasury admin role (Imambandi: father holds the root keys). The Family Court is the IAM reviewer: welfare can override a stale role assignment."
        },
        diagram: {
          type: "compare",
          title: "Do not mix these three",
          headers: ["Device", "What it does", "What it is not"],
          rows: [
            ["Acknowledgement", "May confer legitimacy on a child of unknown descent", "Not Hindu-style adoption"],
            ["Hizanat (person)", "Custody/care; mother often first for young children", "Not ownership of the child’s property"],
            ["Wilayat (property)", "Father as natural guardian (Imambandi)", "Not a licence for a de facto guardian to sell land"]
          ]
        },
        mnemonic: {
          name: "NO-ADOPT / ACK-COND / IMAM",
          hook: "No adoption. Acknowledgement is conditional. Imambandi: father guards property.",
          recite: "Unknown descent + possible paternity. Custody: welfare + hizanat ages from the book. De facto guardian cannot sell the minor’s immovable property."
        },
        cases: [
          { name: "Imambandi v. Mutsaddi", citation: "(1918) 45 IA 73; AIR 1918 PC 11", point: "Father is the natural guardian of the minor’s property; mother’s de facto care does not make her legal property guardian. De facto-guardian alienations are the famous casualty." },
          { name: "Muhammad Allahdad Khan v. Muhammad Ismail Khan", citation: "(1888) 10 All 289 — VERIFY pin-point", point: "Classic acknowledgement-of-legitimacy authority; use for conditions/limits, not as a general custody case." },
          { name: "Guardians and Wards Act, 1890", citation: "forum / appointment statute", point: "Secular court machinery; personal law + welfare supply the content." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain acknowledgement of paternity and distinguish it from adoption. Who is the natural guardian of a Muslim minor’s person and property?",
            outline: [
              "No adoption in classical Muslim law.",
              "Acknowledgement conditions + Allahdad (VERIFY).",
              "Hizanat: mother first, welfare overlay, ages from the book.",
              "Property: Imambandi.",
              "GWA 1890 as the court path."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Powers of a de facto guardian of a Muslim minor.",
            outline: ["Imambandi: cannot deal with immovable property as a legal guardian could. Need court/legal guardian. Welfare."]
          }
        ],
        check: [
          "Can state that classical Muslim law does not recognise Hindu-style adoption.",
          "Can list acknowledgement conditions.",
          "Can recite Imambandi in two sentences.",
          "Does not cite Githa Hariharan as a Muslim-law ratio."
        ]
      }
    ]
  };
})(window);
