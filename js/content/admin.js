(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k3003 = {
    id: "k3003",
    code: "K-3003",
    title: "Administrative Law",
    short: "Admin Law",
    blurb: "Evolution and scope, Rule of Law, separation of powers, delegated legislation and its controls, natural justice, five writs, PIL, Lokpal/UP Lokayukta, tribunals/CAT — original cards on the Massey + Takwani spine.",
    shelf: {
      primary: "I.P. Massey, Administrative Law + C.K. Takwani, Lectures on Administrative Law. Constitution Arts. 14, 21, 32, 226, 136, 323A–B; CAT statute"
    },
    youtube: [
      { title: "Delegated legislation controls", search: "Delegated legislation judicial control India" },
      { title: "Natural justice principles", search: "Natural justice audi alteram partem bias" },
      { title: "Writs HMPCQ", search: "Five writs habeas mandamus certiorari" }
    ],
    topics: [
      {
        id: "a-intro",
        seq: 1,
        readAs: "Unit I · intro",
        unit: 1,
        yield: "high",
        tags: ["definition", "scope", "evolution", "droit administratif"],
        title: "Evolution, definition and scope of Administrative Law",
        summary: "Administrative law is the law that maps and polices the executive’s power: delegated legislation, discretion, procedure, natural justice, and judicial review. The welfare State bloated administration; Dicey’s discomfort with droit administratif still frames Indian essays — then we show how India built review rather than a separate administrative court caste.",
        explainer: `<p>Definition (working): administrative law is that branch of public law which deals with the organisation, powers, and duties of administrative authorities, the procedure they must follow, and the remedies against their excess. Massey/Takwani both insist it is not merely a list of departments; it is the law of <em>control</em> of those departments. CCS still asks definition, nature, scope, and reasons for growth in one 20-marker — treat them as four headings, not one paragraph of fog.</p>
        <p><strong>Evolution / reasons for growth (list):</strong> laissez-faire night-watchman State → industrialisation, wars, planning, welfare and regulatory State. Legislatures have neither time nor expertise for every tariff, environment standard, or service rule. The executive therefore legislates (delegated legislation), adjudicates (tribunals, inquiries), and administers. Administrative law is the price of that expansion: without it, discretion becomes a pocket-tyranny. India added a written Constitution with fundamental rights, so administrative law here is constitutional law in working clothes (Arts. 14, 21, 32, 226).</p>
        <p><strong>Nature:</strong> public law; uncodified in the English/Indian sense (no single Administrative Procedure Act of general application, though specific statutes have procedure codes); a mix of constitutional provisions, statutes, subordinate legislation, and judge-made doctrines (natural justice, proportionality, legitimate expectation). Contrast French <em>droit administratif</em> and the Conseil d’État: a specialised administrative jurisdiction. Dicey thought that model threatened the Rule of Law; modern comparative work is kinder to it. Indian landing: we did not copy the French court caste; we poured administrative control into the ordinary superior courts via writs, plus later tribunals under Arts. 323A/323B.</p>
        <p><strong>Scope (map):</strong> (1) delegated legislation; (2) administrative discretion and its abuse; (3) natural justice and procedure; (4) liability of the State (torts/contracts — lighter in this paper); (5) judicial review and writs; (6) public interest litigation as a review mode; (7) ombudsman (Lokpal/Lokayukta); (8) tribunals. What it is not: the whole of constitutional law, or every service rule in the CCS handbook.</p>
        <p><strong>Dicey problem, Indian answer:</strong> Dicey feared privileging officials. India’s answer is equality before law (Art. 14) plus review of every public function that affects rights, including bodies that are not “the State” in a narrow sense when they discharge public functions (Ajay Hasia / later instrumentalities cases — use as a scope footnote, not a separate paper).</p>
        <p><strong>Close:</strong> administrative law exists because administration exists at scale. The rest of K-3003 is the toolkit of control.</p>`,
        analogy: {
          title: "SRE for the executive process",
          body: "The welfare State is a huge production system. Departments are microservices that now write config (delegated legislation), run jobs (discretion), and decide tickets (adjudication). Administrative law is SRE: SLOs (Rule of Law, NJ), incident review (writs), on-call umpires (Lokpal), and specialised queues (CAT). Dicey wanted every process on the same kernel; France built a second kernel. India kept one superior-court kernel and added queues."
        },
        diagram: {
          type: "tree",
          title: "What this paper actually covers",
          root: "Administrative law",
          branches: ["Delegated legislation", "Discretion + NJ", "Writs / PIL / review", "Lokpal + tribunals"]
        },
        mnemonic: {
          name: "G-D-S-C",
          hook: "Growth of the welfare State · Definition as control of admin · Scope map · Contrast with droit administratif.",
          recite: "Not a French separate court caste in India — writs + tribunals. Arts. 14/21/32/226 are the constitutional sockets."
        },
        cases: [
          { name: "Constitutional sockets", citation: "Arts. 14, 21, 32, 226", point: "Indian administrative law is review of public power through rights and writs, not a code titled Administrative Law." },
          { name: "Ajay Hasia v. Khalid Mujib Sehravardi", citation: "(1981) 1 SCC 722", point: "Instrumentality/agency tests expand who is ‘State’ for Art. 12 — scope of public-law control. Use lightly in an intro essay." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define administrative law. Discuss its nature, scope, and the reasons for its growth.",
            outline: [
              "Working definition (organisation, power, procedure, remedies).",
              "Welfare-State growth list.",
              "Scope map of this paper’s topics.",
              "Dicey vs droit administratif; Indian writ model.",
              "Close: control of discretion is the point."
            ]
          }
        ],
        check: [
          "Can define without using the word ‘administration’ twice and nothing else.",
          "Can list four reasons for growth.",
          "Can contrast French model with Indian writs.",
          "Knows this paper’s scope map."
        ]
      },
      {
        id: "a-rol",
        seq: 2,
        readAs: "Unit I · rule of law",
        unit: 1,
        yield: "high",
        tags: ["rule of law", "dicey", "article 14"],
        title: "Rule of Law",
        summary: "Dicey’s trio — supremacy of law, equality before law, constitution as the result of ordinary law (rights from courts) — plus modern restatements (predictability, due process, no arbitrary power). Indian reception is Art. 14/21 judicial-review culture, including after the Emergency cases.",
        explainer: `<p>Rule of Law is the philosophical on-switch for administrative law. If the executive may do anything not forbidden in a secret file, you do not need this paper. If every public power needs a legal pedigree and a reviewable exercise, you do.</p>
        <p><strong>Dicey’s three meanings (write them numbered):</strong></p>
        <ul>
          <li><strong>Supremacy of law / absence of arbitrary power:</strong> no man can be punished except for a distinct breach of law established in the ordinary courts. Discretion, for Dicey, was a threat. Modern admin law keeps discretion but cages it (purpose, relevant considerations, reasonableness, NJ).</li>
          <li><strong>Equality before the law:</strong> every person, official or not, is subject to the ordinary law and the ordinary courts. This was Dicey’s shot at droit administratif. India writes it as Art. 14, with reasonable classification and the later anti-arbitrariness reading (<em>E.P. Royappa</em>, <em>Maneka Gandhi</em> neighbourhood).</li>
          <li><strong>Constitution as a result of ordinary law of the land:</strong> rights come from judicial decisions rather than a document. This third limb does <em>not</em> transplant; India has a written Constitution and judicial review of legislation. Say that out loud so you are not a Dicey photocopy.</li>
        </ul>
        <p><strong>Modern restatements.</strong> Davis, Wade, and later common-law work add: government under law; specified rules; fair procedure; independent courts; no punishment without law. International “thick” Rule of Law includes human rights; “thin” versions emphasise legality and prospectivity. CCS is happy with Dicey + Indian critique + one case.</p>
        <p><strong>Indian cases as working doctrine, not slogans:</strong> <em>Kesavananda Bharati</em> (1973) 4 SCC 225 — Rule of Law / limited amending power as part of the basic structure flavour. <em>Indira Nehru Gandhi v. Raj Narain</em> 1975 Supp SCC 1 — Rule of Law as basic feature in the election-clause hypo. <em>ADM Jabalpur v. Shivkant Shukla</em> (1976) 4 SCC 362 is the negative teaching case (liberty during Emergency); the later consensus and the 44th Amendment / <em>K.S. Puttaswamy</em> overrule-atmosphere is that Jabalpur is not the Rule of Law you should be proud of — <strong>VERIFY</strong> the exact later treatment you assert (Puttaswamy majority’s remarks on Jabalpur). <em>Maneka Gandhi v. Union of India</em> (1978) 1 SCC 248 — procedure must be fair, just, reasonable; Art. 21 as a due-process engine for administration.</p>
        <p><strong>Administrative-law landing:</strong> Rule of Law does not abolish discretion; it demands that discretion be authorised, purposeful, equal, and reviewable. Delegated legislation, NJ, and writs are the operationalisation. A 20-marker that never leaves 1885 Dicey fails the Indian paper.</p>`,
        analogy: {
          title: "No root without an audit log",
          body: "Dicey’s first limb: you cannot kill a process except by a published rule and a public kernel. Second: the same kernel for officials and users. Third (English): rights accrue from case law. India’s kernel is written (Constitution) and the SRE team (SC/HC) can even reject a kernel patch that wrecks the basic structure. Jabalpur was a production outage; Maneka is the postmortem that added due-process checks to every Art. 21 syscall."
        },
        diagram: {
          type: "compare",
          title: "Dicey in England vs India",
          headers: ["Limb", "Dicey", "India"],
          rows: [
            ["No arbitrary power", "Suspicion of discretion", "Discretion exists, must be caged and reviewed"],
            ["Equality", "Ordinary courts for officials", "Art. 14 + anti-arbitrariness; tribunals still under HC/SC"],
            ["Source of rights", "Judge-made, unwritten", "Written Constitution + review of even amendments (basic structure)"]
          ]
        },
        mnemonic: {
          name: "S-E-C → 14-21-32",
          hook: "Supremacy · Equality · Constitution-from-courts (critique). Then Arts. 14, 21, 32.",
          recite: "Third Dicey limb does not travel. Maneka operationalises due process for administration. Jabalpur is the cautionary tale."
        },
        cases: [
          { name: "Maneka Gandhi v. Union of India", citation: "(1978) 1 SCC 248", point: "Fair, just, reasonable procedure; Art. 21 as a control of administrative action (passport impoundment)." },
          { name: "Kesavananda Bharati v. State of Kerala", citation: "(1973) 4 SCC 225", point: "Limited government / basic structure — Rule of Law as more than a slogan." },
          { name: "ADM Jabalpur v. Shivkant Shukla", citation: "(1976) 4 SCC 362", point: "Negative illustration; later judicial culture rejects it as the meaning of liberty. VERIFY the later citation you use." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain Dicey’s concept of Rule of Law. How has it been adopted and modified in India?",
            outline: [
              "Three limbs, accurately.",
              "Critique: discretion is inevitable; French model misunderstood.",
              "Art. 14/21/32; third limb fails.",
              "Maneka + one basic-structure cite.",
              "Admin-law close: authorised, equal, reviewable discretion."
            ]
          }
        ],
        check: [
          "Can recite Dicey’s three limbs without mixing them.",
          "Can explain why limb three does not fit India.",
          "Can name Maneka as operational Rule of Law.",
          "Does not praise Jabalpur."
        ]
      },
      {
        id: "a-sop",
        seq: 3,
        readAs: "Unit I · separation of powers",
        unit: 1,
        yield: "high",
        tags: ["separation of powers", "montesquieu", "checks"],
        title: "Separation of Powers",
        summary: "Strict Montesquieu vs functional Indian separation: overlapping personnel, checks and balances, and why delegated legislation and tribunals stress the classical picture. Use SOP as a legitimacy test for administrative action, not as a US-style wall.",
        explainer: `<p>Montesquieu’s teaching picture: three functions (legislative, executive, judicial) in three organs, so that power may check power and liberty survive. The US Constitution is the hard-wall cousin; England is fusion (parliamentary executive). India is a <em>functional</em> separation with checks, not a Chinese wall. That sentence is the essay’s spine.</p>
        <p><strong>Constitutional map (quick):</strong> Articles 245–246 (legislatures), 53/154 (executive power), 32/226/136 and the independent judiciary. There is overlap: the executive sits in the legislature (parliamentary system); the executive makes subordinate legislation; tribunals adjudicate; the President has pardon and some legislative roles (ordinances, Art. 123). <em>In re Delhi Laws Act</em> 1951 SCR 747 is the bridge case into delegated legislation: some delegation is constitutionally inevitable; essential legislative function (policy/standard) cannot be abdicated.</p>
        <p><strong>Judicial statements to have on the page:</strong> Indian courts have said SOP is a basic feature in some opinions’ flavour (<em>Kesavananda</em> neighbourhood; <em>Indira Gandhi</em> on whether the legislature can sit as a court). <em>Ram Jawaya Kapur v. State of Punjab</em> AIR 1955 SC 549 is taught for the executive’s residual power to act without a prior statute in some administration, still subject to the Constitution and to legislation when rights require it — <strong>VERIFY</strong> the exact proposition you need. Do not cite SOP to argue that delegated legislation is <em>per se</em> void; that is a 1960s student error.</p>
        <p><strong>Administrative-law tension.</strong> The same department may draft the regulation, enforce it, and decide the first appeal. That fusion is why we insist on: (i) parent-Act standards; (ii) natural justice when the hat is adjudicatory; (iii) an independent second look (tribunal composition; L. Chandra Kumar restoring HC review). SOP in this paper is a <em>reason</em> for those controls, not a magic voiding wand.</p>
        <p><strong>Ordinance Raj, money bills, tribunal-stacking</strong> are advanced SOP hypos. For CCS, delegated legislation + tribunals are enough to show the strain.</p>`,
        analogy: {
          title: "Least-privilege roles, not three air-gapped companies",
          body: "Montesquieu wanted three air-gapped firms. India is one company with role-based access: Parliament writes the charter, the executive holds production credentials, courts have break-glass review. Delegated legislation is the executive committing config — allowed if the charter set the policy. Tribunals are extra queues that still cannot fire the court’s review job (L. Chandra Kumar)."
        },
        diagram: {
          type: "tree",
          title: "SOP as checks, not walls",
          root: "Indian separation (functional)",
          branches: ["Legislature sets policy", "Executive implements + DL", "Courts / tribunals adjudicate", "Each checks the others"]
        },
        mnemonic: {
          name: "L-E-J + NO WALL",
          hook: "Legislative · Executive · Judicial. India: checks, not a US wall.",
          recite: "Delegation is allowed; abdication of essential legislative function is not (Delhi Laws). SOP explains NJ and tribunal-review fights."
        },
        cases: [
          { name: "In re Delhi Laws Act", citation: "1951 SCR 747", point: "Delegation of legislative power is permissible; essential legislative function cannot be abdicated. SOP → DL card." },
          { name: "Ram Jawaya Kapur v. State of Punjab", citation: "AIR 1955 SC 549 — VERIFY pin", point: "Executive power is residual in a parliamentary system, still under the Constitution." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the doctrine of separation of powers. How far is it embodied in the Indian Constitution?",
            outline: [
              "Montesquieu vs checks-and-balances.",
              "Indian overlaps (parliamentary executive, ordinances, DL).",
              "Delhi Laws on non-abdication.",
              "Tribunals + judicial review as modern SOP.",
              "Close: functional, not rigid."
            ]
          }
        ],
        check: [
          "Can contrast US wall vs Indian functional SOP.",
          "Can name Delhi Laws as the delegation bridge.",
          "Does not argue that all DL is unconstitutional because of SOP.",
          "Can connect SOP to NJ and tribunal independence."
        ]
      },
      {
        id: "a-delegated",
        seq: 4,
        readAs: "Unit II · delegated legislation",
        unit: 2,
        yield: "high",
        tags: ["delegated legislation", "excessive delegation", "controls"],
        title: "Delegated Legislation — necessity, constitutionality, controls",
        summary: "Why legislatures delegate, the constitutional limit (no abdication of essential legislative function), and the three controls — parliamentary, procedural, and judicial. Outline necessity → limits → controls every time; this is a perennial 20-marker.",
        explainer: `<p>Delegated (subordinate) legislation is law made by the executive (or another delegate) under a parent Act. Forms: rules, regulations, bye-laws, notifications, schemes, sometimes orders of general application. It is not an individual administrative order; if the instrument is general, prospective, and norm-creating, treat it as DL.</p>
        <p><strong>Necessity (list):</strong> pressure on parliamentary time; technicality (environment, telecom, tax rates); need to experiment and update; emergency; local variation. The alternative is either a 2,000-page Act every session or a frozen statute.</p>
        <p><strong>Constitutionality.</strong> The legislature cannot abdicate its essential legislative function: it must set the <em>policy</em> and a <em>standard/intelligible principle</em> for the delegate. <em>In re Delhi Laws Act</em> 1951 is the fountain. Later cases (Raj Narain Singh, Gwalior Rayon, Hamdard Dawakhana as a limit example) fill the bookshelf — pick two you have actually read. Excessive delegation is void. Power to modify the Act (Henry VIII clauses) is suspect and must be tightly read. Taxing power and penal provisions have extra caution in the teaching (penal DL often needs clear parent authority).</p>
        <p><strong>Controls — always three boxes:</strong></p>
        <ul>
          <li><strong>Parliamentary:</strong> laying on the table (simple, negative, affirmative procedures); scrutiny committees; question hour; repeal of the parent or the rule. Laying is not always a condition of validity unless the parent Act says so — a favourite trick.</li>
          <li><strong>Procedural:</strong> prior publication, consultation, gazetting (General Clauses Act s. 23 flavour for previous publication where required). Failure of mandatory procedure can kill the rule; directory procedure may not. <em>Govindlal Chhaganlal Patel</em> and later cases on “shall be published” — <strong>VERIFY</strong> before you treat publication as always mandatory.</li>
          <li><strong>Judicial:</strong> ultra vires (parent Act, Constitution, mala fide, unreasonableness in the Kruse v. Johnson / Indian Art. 14 sense, sub-delegation if the parent forbids it — delegatus non potest delegare). Courts do not sit as a second legislature on policy wisdom, but they will strike a rule that goes beyond the Act or is arbitrary. <em>Indian Express / State of T.N. v. P. Krishnamurthy</em> neighbourhood on how to judge rules — use your Takwani illustrations.</li>
        </ul>
        <p><strong>Conditional legislation vs DL:</strong> legislature has done the law; the executive only pulls the trigger on a fact (extension of the Act to an area). Teaching distinction: less objectionable than true DL. Do not over-invest unless the question asks.</p>
        <p><strong>Close:</strong> necessity is not a blank cheque. The parent supplies policy; three controls supply legitimacy. Name one case per control if you can.</p>`,
        analogy: {
          title: "Config files under a charter",
          body: "The parent Act is the charter. Rules are config.yaml. Necessity: charters cannot hard-code every timeout. Constitution: the charter must still state the policy (no empty ‘executive may do whatever’). Parliamentary control is code review; publication is the changelog; judicial review is CI rejecting a config that exceeds the charter or fails Art. 14 lint."
        },
        diagram: {
          type: "vflow",
          title: "DL 20-marker spine",
          steps: ["Necessity (why delegate)", "Limit: essential legislative function (Delhi Laws)", "Parliamentary control (laying/committees)", "Procedural control (publish/consult)", "Judicial ultra vires"]
        },
        mnemonic: {
          name: "N-L-PPJ",
          hook: "Necessity · Limit · Parliamentary · Procedural · Judicial.",
          recite: "Policy stays with the legislature. Laying is not always a validity condition. Delegatus non potest delegare."
        },
        cases: [
          { name: "In re Delhi Laws Act", citation: "1951 SCR 747", point: "Delegation yes; abdication no. Essential legislative function remains with the legislature." },
          { name: "Hamdard Dawakhana v. Union of India", citation: "AIR 1960 SC 554", point: "Often taught as a case where delegation/standard failed — VERIFY the exact ground you attribute." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "What is delegated legislation? Discuss its constitutionality and the controls over it.",
            outline: [
              "Definition + forms vs individual orders.",
              "Necessity list.",
              "Delhi Laws / excessive delegation.",
              "Three controls with one illustration each.",
              "Close: laying ≠ always validity; ultra vires is the court’s tool."
            ]
          }
        ],
        check: [
          "Can define DL and distinguish it from an individual order.",
          "Can state the essential-legislative-function limit.",
          "Can fill the three-control table.",
          "Knows laying is not automatically a condition of validity."
        ]
      },
      {
        id: "a-nj",
        seq: 5,
        readAs: "Unit II · natural justice",
        unit: 2,
        yield: "high",
        tags: ["natural justice", "bias", "audi alteram", "legitimate expectation"],
        title: "Natural Justice — bias, audi alteram, reasoned decisions, legitimate expectation",
        summary: "Nemo judex, audi alteram partem, speaking orders, and legitimate expectation are the hearing-rights toolkit. Know exceptions (emergency, pure legislation, confidentiality) and how Indian courts calibrate flexibility without emptying the doctrine (Maneka, Kraipak, Ridge v. Baldwin).",
        explainer: `<p>Natural justice is implied procedural fairness. It is not a statutory form, but statutes are read in its light unless clearly excluded. Two classical maxims, plus two Indian upgrades.</p>
        <p><strong>1. Nemo judex in causa sua (rule against bias).</strong> Types: pecuniary (even a small interest — <em>Dimes</em> flavour; automatic disqualification teaching); personal/subject-matter; official/policy bias (harder — ministers may have policies). Test in modern common law: whether a fair-minded observer would think there is a real possibility of bias. <em>A.K. Kraipak v. Union of India</em> (1969) 2 SCC 262: a selection-board member who was also a candidate-in-interest — NJ applies even to administrative action if it affects rights; the administrative/quasi-judicial wall fell. Pecuniary vs official bias is a 10-mark compare.</p>
        <p><strong>2. Audi alteram partem (hear the other side).</strong> Notice of the case; opportunity to present a defence; in some settings, evidence and cross-examination, legal representation (not always a right — <em>N.K. Bajpai / J.K. Aggarwal</em> teaching). The hearing must be real, not a ritual. <em>Ridge v. Baldwin</em> [1964] AC 40 revived NJ in England for an office-holder’s dismissal; Indian courts had already been moving. <em>Maneka Gandhi</em>: even a passport impoundment needs fair procedure; post-decisional hearing is a poor substitute except where prior hearing would defeat the object (and even then, a later hearing must be prompt and real — <em>Maneka</em> / <em>Swadeshi Cotton</em> neighbourhood).</p>
        <p><strong>3. Reasoned decisions / speaking orders.</strong> Recording reasons is part of fair procedure and enables review. Not every noting needs a judgment; every order that visits civil consequences increasingly does (<em>S.N. Mukherjee</em> / later Art. 14 cases). Reasons also discipline the authority.</p>
        <p><strong>4. Legitimate expectation.</strong> Where a regular practice or a promise creates an expectation of a benefit or a procedure, the authority should not dash it without a hearing or a good reason. It is not a vested right. Indian reception is cautious (food-grain dealers, school affiliation, and later cases — pick one from Takwani). Do not treat LE as estoppel against a statute.</p>
        <p><strong>When NJ is excluded or reduced:</strong> legislative action of a general character; emergency (epidemic, imminent danger) subject to later review; confidentiality/national security (courts still peek); academic evaluation of a script; large-class policy decisions. Exclusion must be tightly construed. Failure of NJ usually vitiates the order (voidable/void debate — say the order is liable to be quashed).</p>
        <p><strong>Close:</strong> NJ is flexible in form, not optional in substance when civil consequences follow. Kraipak is the one-case landing if you are out of time.</p>`,
        analogy: {
          title: "You cannot be the CI, the submitter, and the silent judge",
          body: "Nemo judex: a reviewer who owns the PR cannot merge it. Audi: you cannot fail a build without showing the logs to the author. Speaking orders: CI must print why it failed, or nobody can debug or appeal. Legitimate expectation: if nightly tests have always run a suite, you do not delete the suite without a note. Emergency: you may hot-patch first, then hold the postmortem (post-decisional hearing) — but you still hold it."
        },
        diagram: {
          type: "tree",
          title: "NJ toolkit",
          root: "Natural justice",
          branches: ["No bias (nemo judex)", "Hear the other side (audi)", "Reasons / speaking order", "Legitimate expectation"]
        },
        mnemonic: {
          name: "B-H-R-L",
          hook: "Bias · Hearing · Reasons · Legitimate expectation.",
          recite: "Kraipak: NJ for administrative action with civil consequences. Maneka: fair procedure. Exceptions are narrow."
        },
        cases: [
          { name: "A.K. Kraipak v. Union of India", citation: "(1969) 2 SCC 262", point: "NJ applies to administrative action affecting rights; bias on a selection board vitiated the process." },
          { name: "Ridge v. Baldwin", citation: "[1964] AC 40", point: "Dismissal of a constable without hearing — NJ revival in England; comparative support." },
          { name: "Maneka Gandhi v. Union of India", citation: "(1978) 1 SCC 248", point: "Procedure under Art. 21 must be fair; hearing before civil consequences, with tight exceptions." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the principles of natural justice. Discuss the rule against bias and the right of hearing with cases.",
            outline: [
              "Two maxims + reasons + LE as upgrades.",
              "Bias types + Kraipak.",
              "Audi components + Maneka / Ridge.",
              "Exceptions list.",
              "Effect of breach: quashable order."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Legitimate expectation.",
            outline: ["Promise or regular practice. Hearing/reason before dash. Not a vested right. One illustration."]
          }
        ],
        check: [
          "Can define both classical maxims and the two upgrades.",
          "Can explain Kraipak in three lines.",
          "Can list four exceptions without swallowing the doctrine.",
          "Knows LE is not a property right."
        ]
      },
      {
        id: "a-writs",
        seq: 6,
        readAs: "Unit III · writs",
        unit: 3,
        yield: "high",
        tags: ["writs", "hmpcq", "judicial review", "article 226"],
        title: "Writs — the five (HMPCQ)",
        summary: "Habeas corpus, mandamus, prohibition, certiorari, quo warranto — when each lies against administrative action. Art. 32 (SC, FR) vs Art. 226 (HC, broader ‘for any other purpose’). Distinctions (certiorari vs prohibition; mandamus vs direction) are high-yield drills.",
        explainer: `<p>Judicial review of administrative action in India is writ-shaped. Art. 32 is itself a fundamental right to move the Supreme Court for FR enforcement. Art. 226 is wider: High Courts may issue writs for FRs <em>and</em> for any other purpose, against any person or authority, in appropriate cases including those outside the State’s territory if the cause of action is partly inside (Art. 226(2)). Art. 136 is special-leave, not a fifth-and-a-half writ, but it is the SC’s residual supervisory valve over tribunals.</p>
        <p><strong>The five — HMPCQ (write a table in the hall):</strong></p>
        <ul>
          <li><strong>Habeas corpus:</strong> produce the body; test the legality of detention. Fast, factual, may reach private detainees in some lines. Emergency / preventive detention statutes try to narrow it; ADM Jabalpur is the cautionary tale, not the current pride.</li>
          <li><strong>Mandamus:</strong> “we command” — to a public authority to perform a public duty which is ministerial / not a mere discretion to sit idle. No mandamus against a private body with no public duty, or to enforce a contract as such, or against the President/Governor in some traditional holdings. Demand and refusal is the classical English extra; Indian courts have relaxed it when futile.</li>
          <li><strong>Prohibition:</strong> to a body acting judicially/quasi-judicially, forbidding it from continuing a proceeding without or in excess of jurisdiction, or in violation of NJ. It is <em>prospective</em> (stop!). Inferior court or tribunal, not a purely ministerial officer.</li>
          <li><strong>Certiorari:</strong> to quash a decision already made by a judicial/quasi-judicial body (and, in Indian expansion, some administrative decisions) for want or excess of jurisdiction, error of law apparent on the face of the record, or NJ breach. It is <em>retrospective</em> (quash!). <em>Prohibition vs certiorari</em> is the 10-marker: timing and purpose; often both are prayed in the alternative.</li>
          <li><strong>Quo warranto:</strong> by what authority do you hold this public office? The office must be public, created by statute/Constitution; the holder must be ineligible or an usurper. Relator need not have a personal legal injury in the strict sense — a civic standing. Not for purely private company posts.</li>
        </ul>
        <p><strong>Grounds of review (cross-cut):</strong> illegality, irrationality/Wednesbury (and the later proportionality talk in rights cases), procedural impropriety, mala fide, relevant/irrelevant considerations. Indian law also uses Art. 14 anti-arbitrariness as a general clause. Do not write an English LL.M. on Anisminic unless the question is jurisdictional error; then say Indian courts have similarly refused to let tribunals immunise themselves by labelling errors “within jurisdiction.”</p>
        <p><strong>Laches, alternative remedy, disputed facts:</strong> Art. 226 is discretionary. Alternative statutory appeal is a usual self-restraint, not an ouster. Art. 32 is less polite when an FR is live.</p>`,
        analogy: {
          title: "Five kernel syscalls against public processes",
          body: "Habeas: show me the process you jailed and prove the handle is legal. Mandamus: you have a public duty function — execute it. Prohibition: stop that quasi-judicial job, you are out of namespace. Certiorari: delete the output file, the job ran without jurisdiction or NJ. Quo warranto: paste the credentials for this public role or get off the box. Art. 32 is SC-only for FR; Art. 226 is the HC’s broader admin toolkit."
        },
        diagram: {
          type: "compare",
          title: "HMPCQ cheat sheet",
          headers: ["Writ", "Against", "Does what"],
          rows: [
            ["Habeas corpus", "Detainer (State / sometimes private)", "Tests legality of detention"],
            ["Mandamus", "Public authority with a public duty", "Commands performance"],
            ["Prohibition", "Inferior judicial/q-j body, mid-stream", "Forbids continuing (stop)"],
            ["Certiorari", "Same, after decision", "Quashes the record (undo)"],
            ["Quo warranto", "Usurper of a public office", "Asks: by what authority?"]
          ]
        },
        mnemonic: {
          name: "HMPCQ",
          hook: "Habeas · Mandamus · Prohibition · Certiorari · Quo warranto.",
          recite: "32 = SC + FR. 226 = HC + FR + any other purpose. Prohibition stops; certiorari quashes."
        },
        cases: [
          { name: "Arts. 32 and 226", citation: "Constitution", point: "The jurisdictional sockets. 226 is wider." },
          { name: "Certiorari/prohibition teaching line", citation: "e.g. A.K. Kraipak as NJ+certiorari flavour", point: "NJ breach is a certiorari ground. Keep a named mandamus and quo warranto illustration from Takwani." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the writ jurisdiction of the High Courts. Distinguish certiorari and prohibition.",
            outline: [
              "Art. 226 vs 32.",
              "HMPCQ table.",
              "Certiorari vs prohibition: timing, purpose, overlapping prayers.",
              "Discretion: delay, alternative remedy.",
              "One ground-of-review paragraph."
            ]
          }
        ],
        check: [
          "Can write the HMPCQ table from memory.",
          "Can distinguish Art. 32 from Art. 226 in two lines.",
          "Can distinguish certiorari from prohibition.",
          "Knows mandamus needs a public duty, not a private wish."
        ]
      },
      {
        id: "a-pil",
        seq: 7,
        readAs: "Unit III · PIL",
        unit: 3,
        yield: "high",
        tags: ["pil", "locus standi", "epistolary"],
        title: "Public Interest Litigation",
        summary: "PIL loosened locus standi so that systemic administrative failure could reach the court — epistolary jurisdiction, continuing mandamus, and court-appointed committees. Know the promise (access, rights of the voiceless) and the misuse critique (publicity, collusion, policy-throttling). CCS often wants both.",
        explainer: `<p>Classical standing: only a person whose legal right is injured may sue. That model cannot see under-trial prisoners, bonded labour, or a poisoned river. PIL is the judicial technique that lets a public-spirited petitioner (or the court suo motu) agitate a public wrong, especially where the victims are poor, scattered, or otherwise unheard. It is administrative law because the respondent is almost always a public authority that failed to perform.</p>
        <p><strong>Doctrinal moves:</strong> liberal locus (<em>S.P. Gupta v. Union of India</em> 1981 Supp SCC 87 — the “any member of the public” flavour for public injury, with later tightening); epistolary jurisdiction (a letter as a petition); non-adversarial fact-finding (commissions, NCC, amicus); continuing mandamus (court keeps the case to monitor compliance — <em>Vineet Narain</em> flavour); guideline-making in a vacuum (<em>Vishaka</em>, already on the PIL/IL card). Arts. 32 and 226 are the sockets; Art. 21 is the favourite right.</p>
        <p><strong>Illustrations to name (pick two you can actually describe):</strong> Hussainara Khatoon (under-trials / speedy trial); Bandhua Mukti Morcha (bonded labour); M.C. Mehta lines (environment); Olga Tellis (livelihood as Art. 21 neighbourhood); later clean-air and police-reform monitoring. Do not recite a news ticker.</p>
        <p><strong>Limits / misuse (mandatory second half):</strong> the court is not a second government. PIL is not for private disputes in costume, service-promotion fights, or corporate wars. The SC has demanded bona fides, material facts, and costs for camouflaged petitions (<em>State of Uttaranchal v. Balwant Singh Chaufal</em> (2010) 3 SCC 402 is a teaching cite on guidelines to filter PILs — <strong>VERIFY</strong> the guideline list if you enumerate). Separation of powers: courts can order the State to do its legal duty; they should not design budgets and scientific policy as a first-choice legislature. Delay and unimplementable orders undermine the tool.</p>
        <p><strong>Close:</strong> PIL is a standing + procedure innovation to make administrative law usable by people who will never file a certified-copy writ. It is not a licence to skip the other topics of this paper (duty, NJ, statute).</p>`,
        analogy: {
          title: "Paging SRE on behalf of users who cannot open tickets",
          body: "Ordinary locus is ‘only the ticket owner may page.’ PIL lets a bystander page when the outage is public and the users are locked out. Epistolary jurisdiction is a tweet treated as a ticket. Continuing mandamus is a standing incident channel until SLOs recover. Misuse is paging production because you want a promotion or a headline — the court now asks for bona fides before it pages the whole government."
        },
        diagram: {
          type: "flow",
          title: "PIL as a review path",
          steps: ["Public injury + voiceless victims", "Liberal standing / letter petition", "Court fact-finding", "Orders against admin (often continuing)", "Watch for bona fides / SOP limits"]
        },
        mnemonic: {
          name: "L-E-C-M",
          hook: "Locus loosened · Epistolary · Continuing mandamus · Misuse filter.",
          recite: "S.P. Gupta flavour for standing. Art. 21 engine. Balwant Singh Chaufal-type guidelines — VERIFY if listing."
        },
        cases: [
          { name: "S.P. Gupta v. Union of India", citation: "1981 Supp SCC 87", point: "Liberal standing for public injury — the PIL-era locus statement. Also a judges-transfer case; use the standing slice here." },
          { name: "State of Uttaranchal v. Balwant Singh Chaufal", citation: "(2010) 3 SCC 402 — VERIFY guidelines", point: "Filtering frivolous PILs. Quote guidelines only from the judgment." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "What is public interest litigation? Discuss its contribution and the dangers of its misuse.",
            outline: [
              "From personal locus to public injury.",
              "Tools: letter, commission, continuing mandamus.",
              "Two illustrations.",
              "Misuse + bona fides + SOP.",
              "Close: admin-law remedy, not a fourth organ."
            ]
          }
        ],
        check: [
          "Can define PIL without saying ‘anyone can file anything’.",
          "Can name standing + epistolary + continuing mandamus.",
          "Can give two illustrations and one misuse control.",
          "Knows Art. 32/226 are the sockets."
        ]
      },
      {
        id: "a-lokpal",
        seq: 8,
        readAs: "Unit III · Lokpal & UP Lokayukta",
        unit: 3,
        yield: "standard",
        tags: ["lokpal", "lokayukta", "up", "ombudsman"],
        title: "Lokpal and UP Lokayukta",
        summary: "Ombudsman-style anti-corruption institutions: Lokpal at the Centre (2013 Act) and Lokayukta at State level (U.P. statute). Structure, complaint triggers, investigation vs prosecution, and limits relative to CBI/vigilance and criminal courts are the usual compare ask.",
        explainer: `<p>The ombudsman idea: an independent high official who receives grievances of maladministration/corruption against public functionaries, investigates, and recommends or, in the Indian statutory designs, triggers prosecution machinery. It is administrative law because it is a non-writ control of the executive — political cousin of the CAG and the vigilance commission, not a substitute High Court.</p>
        <p><strong>Lokpal and Lokayuktas Act, 2013 (Centre).</strong> Teaching skeleton (quote from the Act when polishing): a Lokpal of a Chairperson and members (judicial and non-judicial mix); appointment through a high-powered committee; jurisdiction over the PM with listed safeguards, ministers, MPs, Group A–D public servants as provided, and certain private actors who take public funds. Inquiry wing; prosecution wing; complaints of corruption under the Prevention of Corruption Act flavour. Superintendence over CBI in Lokpal-referred cases is a political-legal flashpoint — describe as the Act does, do not campaign. Time-frames and preliminary inquiry vs investigation are procedural marks. <strong>VERIFY</strong> current composition/appointment amendments before you memorise a number of members.</p>
        <p><strong>Uttar Pradesh Lokayukta.</strong> CCS is a Meerut paper: know that U.P. has a State Lokayukta statute (Uttar Pradesh Lokayukta and Up-Lokayuktas Act, 1975, as amended — <strong>VERIFY</strong> the in-force title and 2026 amendments). Typical State pattern: complaint against specified public servants (ministers, officials — often excluding the judiciary and sometimes the CM depending on the Act); inquiry; report to the Governor/competent authority; recommendation rather than a decree. It is not a criminal court. Compare: narrower or different jurisdiction than Lokpal; State cadre vs Union; political appointment controversies are a critique paragraph, not the definition.</p>
        <p><strong>Compare table (write this):</strong> constitutional status (neither is a Chapter-IV court); bindingness of findings (recommendatory vs prosecution-trigger); coverage of the head of government; relationship with police/CBI; who may complain (citizen, with affidavits and filters against mischief). vs writs: Lokpal is inquisitorial and specialised in corruption; a writ is adversarial and legality-focused. vs CAT: CAT is service-dispute adjudication, not an anti-corruption ombudsman.</p>
        <p><strong>Critique (short):</strong> delay in appointments, resource starvation, political capture of selection, overlap with existing vigilance, and the risk of becoming a press office. Still: an extra door for the citizen who will not file a 226 petition.</p>`,
        analogy: {
          title: "Independent integrity on-call, not a court thread",
          body: "Writs are public lawsuits in the court runtime. Lokpal/Lokayukta is a separate on-call rotation that takes corruption pages, runs an inquiry job, and can attach the CBI/prosecution plugin. It cannot replace the kernel (criminal court) or the SRE court (HC). UP Lokayukta is the State-region rotator; Lokpal is the national one. If the appointment pipeline is empty, the on-call rota is fiction — that is the critique."
        },
        diagram: {
          type: "compare",
          title: "Three controls, three jobs",
          headers: ["", "Writ (226/32)", "Lokpal / Lokayukta", "CAT"],
          rows: [
            ["Job", "Legality of admin action", "Corruption / maladministration inquiry", "Service disputes"],
            ["Output", "Binding order", "Inquiry + prosecution trigger / recommend", "Binding service order (subject to 226/32)"],
            ["Standing", "Person aggrieved / PIL", "Complaint under the Act", "Employee/jurisdiction as in Act"]
          ]
        },
        mnemonic: {
          name: "O-C-S",
          hook: "Ombudsman idea · Central Lokpal 2013 · State (UP) Lokayukta statute.",
          recite: "Not a court. PM/CM coverage is in the Act — quote, don’t guess. VERIFY 2026 amendments."
        },
        cases: [
          { name: "Lokpal and Lokayuktas Act, 2013", citation: "India Code — VERIFY amendments", point: "Central statute: composition, jurisdiction, inquiry/prosecution wings." },
          { name: "U.P. Lokayukta statute", citation: "1975 Act as amended — VERIFY", point: "State ombudsman for the CCS student. Do not recite another State’s Act as UP law." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Lokpal and Lokayukta as instruments of administrative control.",
            outline: [
              "Ombudsman idea.",
              "2013 Act skeleton.",
              "UP statute in four honest lines (VERIFY).",
              "Compare writs and CAT.",
              "One critique."
            ]
          }
        ],
        check: [
          "Can define ombudsman without calling it a High Court.",
          "Can sketch the 2013 Act (jurisdiction + inquiry).",
          "Can say UP has a State Lokayukta statute and flag VERIFY on sections.",
          "Can distinguish Lokpal from CAT and from writs."
        ]
      },
      {
        id: "a-tribunals",
        seq: 9,
        readAs: "Unit III · tribunals / CAT",
        unit: 3,
        yield: "high",
        tags: ["tribunals", "cat", "323a", "l chandra kumar"],
        title: "Administrative Tribunals and CAT",
        summary: "Tribunals as specialised justice under Arts. 323A/323B, CAT for Union services, and the independence / judicial-review debate after L. Chandra Kumar. Position tribunals between departments and ordinary civil courts — and never as ousters of High Court writ power.",
        explainer: `<p>A tribunal is a body other than an ordinary civil court that adjudicates disputes, usually in a specialised field, with a mix of judicial and expert members. Administrative tribunals exist because service, tax, environment, and armed-forces disputes drown the ordinary docket and need domain literacy. They are still “court substitutes,” so they must look and behave like independent adjudicators, not like the secretary’s other desk.</p>
        <p><strong>Constitutional sockets.</strong> <strong>Art. 323A</strong> (inserted by the 42nd Amendment): Parliament may provide for administrative tribunals for Union/State service matters; a law may exclude the jurisdiction of all courts except the Supreme Court. <strong>Art. 323B</strong>: legislatures may create tribunals for listed other fields (tax, foreign exchange, industrial, land, elections, etc.) with similar exclusion clauses. The Administrative Tribunals Act, 1985 created the <strong>Central Administrative Tribunal (CAT)</strong> and enabled State Administrative Tribunals. CAT’s principal bench is in New Delhi, with additional benches; jurisdiction is service matters of Union civil posts (and other notified services) — recruitment, conditions of service, disciplinary orders, as defined in the Act.</p>
        <p><strong>The independence / review fight — write in chronology:</strong> early years treated CAT as a substitute for High Courts in service matters, with appeal to the SC. <em>S.P. Sampath Kumar</em> (1987) upheld the scheme with conditions (effective alternative institutional mechanism). Then composition and appointment problems accumulated. <em>L. Chandra Kumar v. Union of India</em> (1997) 3 SCC 261 is the case you must know cold: the power of judicial review of the High Courts under Art. 226/227 and of the SC under Art. 32 is a <strong>basic feature</strong>; it cannot be ousted by a 323A/323B law. Tribunals are courts of first instance for the fields assigned; a party goes to the tribunal first, then may invoke High Court writ/supervisory jurisdiction, then SC. Direct jump to SC as a substitute for the HC was rejected. Later, <em>R. Gandhi / Madras Bar Association</em> lines on NCLT and tribunal appointments tighten independence (judicial majority, appointment process) — useful extras for a 20-marker on “tribunalisation.”</p>
        <p><strong>CAT procedure (short):</strong> application, limitation as in the Act, flexibility vis-à-vis CPC, power to review, contempt as provided. It can issue orders akin to declaring a service order illegal; it is not a criminal court and not Lokpal.</p>
        <p><strong>Why not just the department?</strong> Because the department is the respondent. Why not just the civil court? Because of volume and expertise. Why still the High Court? Chandra Kumar: because a statutory tribunal cannot be the last word on the Constitution.</p>`,
        analogy: {
          title: "Specialised queue, not a fork that kills the kernel",
          body: "CAT is a dedicated support queue for Union service tickets: faster, expert members, own SLA. Art. 323A tried to make that queue the only queue (oust 226). Chandra Kumar: you may require exhaustion of the specialised queue, but you cannot uninstall the High Court’s kernel debugger (226/227). If the queue’s operators are appointed by the respondent department, independence CI fails (MBA/R. Gandhi extras)."
        },
        diagram: {
          type: "vflow",
          title: "Service dispute path after Chandra Kumar",
          steps: ["Departmental order", "CAT (first instance for covered services)", "High Court Art. 226/227", "Supreme Court (136/32 as may lie)"]
        },
        mnemonic: {
          name: "323A-CAT-LCK",
          hook: "Art. 323A · CAT 1985 · L. Chandra Kumar restores 226.",
          recite: "Tribunal first, High Court always available as basic-feature review. Not Lokpal, not a civil court of general jurisdiction."
        },
        cases: [
          { name: "L. Chandra Kumar v. Union of India", citation: "(1997) 3 SCC 261", point: "Judicial review under Arts. 226/227 and 32 is a basic feature; tribunal laws cannot oust it. Tribunals are courts of first instance." },
          { name: "S.P. Sampath Kumar v. Union of India", citation: "(1987) 1 SCC 124", point: "Early upholding of CAT as a substitute mechanism — later recalibrated by Chandra Kumar on the ouster point." },
          { name: "Administrative Tribunals Act, 1985", citation: "CAT jurisdiction / benches", point: "Quote service-matter definitions from the Act." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the constitutional position of administrative tribunals with special reference to CAT and L. Chandra Kumar.",
            outline: [
              "Why tribunals.",
              "Arts. 323A/323B + 1985 Act / CAT.",
              "Sampath Kumar then Chandra Kumar (basic feature; no ouster of 226).",
              "Path: tribunal → HC → SC.",
              "Independence extras in four lines."
            ]
          }
        ],
        check: [
          "Can state what CAT hears.",
          "Can recite Chandra Kumar in four lines.",
          "Knows 323A exclusion clauses lost against 226 as a basic feature.",
          "Does not confuse CAT with Lokpal or with a civil court of general jurisdiction."
        ]
      }
    ]
  };
})(window);
