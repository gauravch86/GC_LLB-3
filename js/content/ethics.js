(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k3005 = {
    id: "k3005",
    code: "K-3005",
    title: "Professional Ethics, Accountability of Lawyers and Bar–Bench Relation",
    short: "Prof. Ethics",
    blurb: "History of the Bar, enrolment and Bar Councils, nature of ethics, contempt, lawyers’ strike, misconduct and social role — original doctrine cards. The college Project File / viva pack is a separate print product.",
    shelf: {
      primary: "Kailash Rai / S.P. Gupta / Sirohi (structure only) + Advocates Act 1961 + BCI Rules Pts VI–VII + Contempt of Courts Act 1971"
    },
    youtube: [
      { title: "Advocates Act and Bar Councils", search: "Advocates Act Bar Council of India enrolment" },
      { title: "Contempt of court civil vs criminal", search: "Contempt of Courts Act civil criminal contempt" },
      { title: "Professional misconduct advocates", search: "Professional misconduct advocates Bar Council" }
    ],
    topics: [
      {
        id: "e-history",
        seq: 1,
        readAs: "Unit I · history & regulation",
        unit: 1,
        yield: "standard",
        tags: ["history", "advocates act", "regulation", "bar councils act 1926"],
        title: "History and regulation of the legal profession",
        summary: "Indian legal practice moved from fragmented colonial grades (vakil, advocate, mukhtar) to a unified All-India Bar under the Advocates Act, 1961. Self-regulation through State Bar Councils and the Bar Council of India is the spine of every later ethics essay.",
        explainer: `<p>K-3005 is a <em>practical-training</em> paper (theory 50 + project/viva 50), but the first theory card is historical: how India got a single class of “advocate” and a statutory self-regulator. Open any “trace the regulation of the legal profession” 20-marker with this arc, then land on 1961. Do not spend the whole answer in Mayor’s Courts.</p>
        <p><strong>Colonial layering (keep short):</strong> Presidency Supreme Courts and Company’s adalat system produced different practitioner grades and court-by-court enrolment. The <strong>Legal Practitioners Act, 1879</strong> collected those grades (advocates, vakils, mukhtars and allied classes) and empowered High Courts to make enrolment rules. The profession was still court-attached rather than nationally integrated: a vakil of one High Court did not automatically enjoy an All-India right of audience.</p>
        <p><strong>Indian Bar Councils Act, 1926:</strong> created Bar Councils attached to High Courts and gave the profession a first taste of self-government, but it did <em>not</em> create a full national Bar, a common roll, or uniform disciplinary machinery. Dual traditions (barrister/counsel vs vakil) and uneven standards survived. That gap is the policy problem the 1950s reports were written to solve.</p>
        <p><strong>All-India Bar Committee, 1953</strong> (and Law Commission inputs that surface in the Advocates Act Statement of Objects) recommended a unified Bar, a Bar Council of India, common enrolment, and a statutory right to practise. The <strong>Advocates Act, 1961</strong> (Act 25 of 1961) is the consolidating statute: it constitutes State Bar Councils and the BCI, creates the enrolment–roll–certificate machinery, vests the right to practise in advocates alone (ss. 29–33), and backs ethics with Chapter V misconduct procedure.</p>
        <p><strong>Regulatory model to name in the close:</strong> this is <em>self-regulation with statutory backing</em>. The profession admits and disciplines its members; courts retain a separate power to punish contempt (Arts. 129 / 215 + Contempt of Courts Act, 1971) to protect the administration of justice. Those two tracks must not be collapsed — a point the Supreme Court later made express in <em>Supreme Court Bar Assn. v. Union of India</em> (licence is Bar Council business; contempt is court business).</p>
        <p><strong>Exam landing:</strong> history is not colour. It explains why enrolment is a public gateway, why advertising/solicitation is treated as misconduct rather than “marketing,” and why a strike that orphans clients is treated as a betrayal of a public trust. End by pointing forward to enrolment (next card) and accountability (last card).</p>
        <p class="note">Cite 1879 / 1926 / 1953 / 1961 as <em>statute and policy history</em>. Do not treat the 1879 or 1926 Acts as the current code of advocates.</p>`,
        analogy: {
          title: "From vendor plugins to one SDK",
          body: "Pre-1961 practice was a set of incompatible plugins (vakil, mukhtar, High Court advocate) each talking to a different court runtime. The Advocates Act is a single SDK: one class of caller (advocate), one package manager (State roll + BCI), one licence, and a separate kernel panic button (contempt) that the runtime — the court — still owns."
        },
        diagram: {
          type: "flow",
          title: "Regulation arc — write this cold",
          steps: ["1879 Legal Practitioners Act", "1926 Bar Councils (HC-tied)", "1953 All-India Bar Committee", "1961 Advocates Act", "Self-regulation + contempt track"]
        },
        mnemonic: {
          name: "L-B-C-A",
          hook: "Legal Practitioners 1879 → Bar Councils 1926 → Committee 1953 → Advocates Act 1961.",
          recite: "Fragmented grades → limited self-rule → policy for a national Bar → unified advocates + State Councils + BCI."
        },
        cases: [
          { name: "Advocates Act — Statement of Objects", citation: "Act 25 of 1961 (policy recitals)", point: "Use as the official ‘why 1961’ paragraph: All-India Bar Committee + need to consolidate legal-practitioners law." },
          { name: "Bar Council of Maharashtra v. M.V. Dabholkar", citation: "(1975) 2 SCC 702; AIR 1976 SC 242", point: "Later architecture in action: Bar Council as guardian of standards, with locus as ‘person aggrieved’ on appeal." },
          { name: "Supreme Court Bar Assn. v. Union of India", citation: "(1998) 4 SCC 409", point: "Shows the two-track model: contempt power ≠ power to cancel a practising licence." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Trace the historical development and statutory regulation of the legal profession in India.",
            outline: [
              "Hook: from court-tied colonial grades to a unified All-India Bar.",
              "1879 Act — consolidation of practitioner classes; High Court rules.",
              "1926 Act — Bar Councils, but no full national integration.",
              "1953 Committee → Advocates Act 1961 (Councils, enrolment, ss. 29–33, Ch. V).",
              "Close: self-regulation + separate contempt jurisdiction; ethics is enforceable."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Short note: All-India Bar Committee, 1953.",
            outline: ["Policy parent of 1961: unified Bar, BCI, common right to practise. Two sentences + why 1926 was not enough."]
          }
        ],
        check: [
          "Can recite L-B-C-A with years without notes.",
          "Can name two defects of the 1926 settlement.",
          "Can explain self-regulation vs contempt in one paragraph.",
          "Does not cite 1879/1926 as current practising law."
        ]
      },
      {
        id: "e-bar",
        seq: 2,
        readAs: "Unit I · enrolment & Bar Councils",
        unit: 1,
        yield: "high",
        tags: ["enrolment", "bar council", "bci", "s.24", "s.30"],
        title: "Admission, enrolment, rights of advocates & Bar Councils",
        summary: "State Bar Councils admit and maintain the roll (ss. 3–6, 17–28); BCI sets standards and supervises (ss. 4, 7). Eligibility is s. 24; disqualification s. 24A; the practising monopoly is ss. 29–33. Draw the process map before you write prose.",
        explainer: `<p>This is a <em>process</em> card. CCS rewards a labelled pipeline: who constitutes the Councils, who may apply, who enrols, what the certificate buys, and where discipline sits. Vague “Bar Council looks after advocates” essays lose the section ticks.</p>
        <p><strong>State Bar Councils — ss. 3–6.</strong> Each State Council is a body corporate. Functions under <strong>s. 6</strong> that you must be able to list: admit persons as advocates on its roll; prepare and maintain the roll; entertain and determine misconduct cases against advocates on that roll; safeguard rights, privileges and interests of advocates; promote and support law reform; manage funds and conduct elections; organise legal aid / seminars as provided; and perform other functions conferred by the Act or rules. Do not memorise seat arithmetic unless the question is on composition (ss. 3–5).</p>
        <p><strong>Bar Council of India — ss. 4, 7.</strong> BCI’s exam-critical functions under <strong>s. 7</strong>: lay down standards of professional conduct and etiquette; lay down disciplinary procedure; safeguard advocates’ rights; promote law reform; dispose of matters referred by State Councils; general supervision and control over State Councils; promote legal education and inspect universities; recognise law degrees for enrolment; organise legal aid; manage funds. Ethics rules (Part VI) and disciplinary rules (Part VII) are s. 49 machinery, not free-floating etiquette.</p>
        <p><strong>Classes of advocates — s. 16.</strong> Two classes only: senior advocates and other advocates. Senior designation is by the Supreme Court or a High Court, with consent, on ability, standing and special knowledge. Practice of seniors may be restricted by BCI rules in the interest of the profession (typically no drafting/chamber work of a kind reserved to juniors — <em>verify current BCI restriction text before quoting a rule number</em>).</p>
        <p><strong>Rolls and enrolment — ss. 17–28.</strong> Every State Council prepares a roll (s. 17). Certificate of enrolment is s. 22. <strong>s. 24</strong> eligibility (write as a list): citizen of India; completed 21 years; law degree from a recognised university or as prescribed; other conditions in the Act/rules; payment of stamp/fees. <strong>s. 24A</strong> disqualifications include conviction for an offence involving moral turpitude (with statutory provisos/time bars — quote the clause, do not paraphrase from memory in the hall) and dismissal/removal from government or similar service on a moral-turpitude charge. Application goes under <strong>s. 25</strong> to the State Council where the applicant proposes to practise; disposal is by the enrolment committee (<strong>s. 26</strong>), with refusal/reference pathways. Removal and restoration sit in <strong>s. 26A</strong> and allied provisions.</p>
        <p><strong>Right to practise — ss. 29–33, 45.</strong> <strong>s. 29:</strong> from the appointed day, only one class entitled to practise the profession of law — advocates. <strong>s. 30:</strong> an advocate on a State roll is entitled as of right to practise throughout the territories to which the Act extends — all courts including the Supreme Court, tribunals/persons legally authorised to take evidence, and other authorities before whom advocates are entitled to appear. <em>VERIFY current in-force text / commencement history of s. 30 if you footnote it.</em> <strong>s. 32</strong> lets a court or authority permit a non-advocate in a particular case. <strong>s. 33</strong> is the negative: no practice unless enrolled, except as otherwise provided. <strong>s. 45</strong> penalises illegal practice.</p>
        <p><strong>Ethics hitch:</strong> enrolment is entry into a <em>public profession</em>. The certificate is coupled with Chapter V (ss. 35–44) and BCI Part VI duties. <em>SCBA v. UOI</em> is the authority that the practising licence is withdrawn only through that statutory disciplinary path, not by a contempt sentence dressed as a suspension.</p>`,
        analogy: {
          title: "Registry, licence, namespace",
          body: "State roll = package registry. s. 24 = publish checks. Certificate (s. 22) = licence key. s. 30 = the key works in every court namespace in India. s. 35 = the registry can yank the key. Contempt is a runtime exception in a particular court process — it does not uninstall the package (SCBA)."
        },
        diagram: {
          type: "vflow",
          title: "Enrolment pipeline",
          steps: ["s.24 eligibility / s.24A disqualification", "s.25 application to State Bar Council", "s.26 enrolment committee", "s.22 certificate; State roll ss.17–21", "s.29–33 right to practise", "Ch. V discipline if needed"]
        },
        mnemonic: {
          name: "6-7-24-30-35",
          hook: "s.6 State functions · s.7 BCI functions · s.24 who · s.30 where · s.35 if you misbehave.",
          recite: "State admits and rolls; BCI sets standards; citizen+21+recognised LL.B.; practise throughout India; reprimand / suspend / remove."
        },
        cases: [
          { name: "Supreme Court Bar Assn. v. Union of India", citation: "(1998) 4 SCC 409", point: "Disciplinary control over the licence is Advocates Act / Bar Council domain, not an incident of Art. 129 contempt power." },
          { name: "Bar Council of Maharashtra v. M.V. Dabholkar", citation: "(1975) 2 SCC 702", point: "State Bar Council as person aggrieved can appeal; Councils are not passive clerks of the roll." },
          { name: "Advocates Act ss. 29–33, 45", citation: "India Code — verify in-force text", point: "Statutory monopoly of advocates, with s. 32 safety valve and s. 45 penalty." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the constitution and functions of State Bar Councils and the Bar Council of India. Who may be admitted as an advocate?",
            outline: [
              "ss. 3–6 State Councils; list s. 6 functions.",
              "ss. 4, 7 BCI; list s. 7 functions including legal education and conduct standards.",
              "s. 16 two classes; ss. 17–22 roll and certificate.",
              "s. 24 eligibility + s. 24A disqualification (moral turpitude).",
              "Close with ss. 29–33 practising rights and Ch. V hitch."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Explain the right of an advocate to practise under the Advocates Act, 1961.",
            outline: ["s.29 one class; s.30 territorial/court reach; s.32 permission to non-advocates; s.33 prohibition; s.45 penalty. One line on SCBA (licence ≠ contempt)."]
          }
        ],
        check: [
          "Can list at least five s. 6 functions and five s. 7 functions.",
          "Can recite s. 24 ingredients and one s. 24A disqualification.",
          "Can distinguish s. 30 right from s. 32 permission.",
          "Can say why SCBA matters to enrolment essays."
        ]
      },
      {
        id: "e-nature",
        seq: 3,
        readAs: "Unit I · nature of ethics",
        unit: 1,
        yield: "high",
        tags: ["ethics", "profession", "fiduciary", "officer of the court"],
        title: "Nature of ethics and the legal profession",
        summary: "The Bar is a learned, organised, public-service profession with a statutory monopoly — not a trade. Ethics is the honour code that is stricter than mere legality: what is lawful for others may still be improper for an advocate. Dual loyalty: fearless for the client, never misleading the court.",
        explainer: `<p>Syllabus item (3) splits (a) ethics of the legal profession and (b) the legal profession itself. Write both. Examiners tick “profession not business” and then want the <em>sources</em> of the ethical standard.</p>
        <p><strong>(b) Characteristics of the legal profession — list these:</strong></p>
        <ul>
          <li><strong>Learned:</strong> specialised education (recognised LL.B. / as prescribed) and skill in applying law to facts.</li>
          <li><strong>Organised:</strong> Bar Councils and Bar Associations; a common identity and common roll.</li>
          <li><strong>Public-service orientation:</strong> administration of justice is the point; profit is incidental, not the measure of success.</li>
          <li><strong>Statutory monopoly of representation</strong> (ss. 29–33, with s. 32 exceptions): the privilege is the reason regulation is intense.</li>
          <li><strong>Autonomy + accountability:</strong> self-governance under the Advocates Act; answerable to clients, courts, and society.</li>
          <li><strong>Officer of the court:</strong> dual loyalty — fearless advocacy for the client <em>within</em> the law and the dignity of the court.</li>
        </ul>
        <p><strong>(a) Nature of professional ethics.</strong> Ethics here means standards of honour, integrity, fairness, competence, confidentiality, and conflict-avoidance. It is broader than the IPC and broader than civil liability. The BCI Part VI Chapter II preamble idea is the line to steal (paraphrase, do not paste a commentary): conduct befitting an officer of the court; what is lawful for others may still be improper for an advocate; uphold the client’s interest fearlessly <em>within the rules</em>.</p>
        <p><strong>Sources of the ethic</strong> (write as a four-item list): (1) BCI Rules Part VI Chapter II (duty to court, client, opponent, colleagues, training, legal aid, restriction on other employment); (2) Advocates Act Chapter V jurisprudence on “professional or other misconduct”; (3) judicial decisions on contempt and on misconduct; (4) conventions of the Bar and Bar–Bench courtesy. Kailash Rai / Gupta / Sirohi are useful for <em>structure</em>; they are not authorities. Bare rules + cases are.</p>
        <p><strong>Standing tensions</strong> (use as 5-mark illustrations): duty to client vs duty not to mislead the court; confidentiality vs court orders / crime-prevention limits; zealous advocacy vs courtesy to opponent and witnesses; a living vs prohibition on solicitation, touting, and undercutting (<em>Dabholkar</em>); collective Bar protest vs duty to the brief (<em>Harish Uppal</em>). <em>P.D. Gupta v. Ram Murti</em> is the exploitation hypo: buying the subject-matter from the client is not “business acumen,” it is misconduct.</p>
        <p><strong>Close:</strong> ethics is examinable as <em>principle with sanctions</em>, not as etiquette. When duties collide, duty to the court and to the administration of justice wins. That ranking is what makes the next two cards (contempt; strike) possible.</p>`,
        analogy: {
          title: "Privilege bit and checksum",
          body: "The practising certificate is a privileged syscall: you may speak into the court’s address space. Ethics is the checksum on every packet. A payload that is ‘legal’ on the public internet (advertising, hard bargain with a client, walking out of a process) can still fail the Bar’s checksum and get the process killed (discipline) or the runtime halted (contempt)."
        },
        diagram: {
          type: "tree",
          title: "Ethics sits on four legs",
          root: "Professional ethics",
          branches: ["BCI Part VI Ch. II", "Advocates Act Ch. V", "Contempt + SC holdings", "Bar–Bench convention"]
        },
        mnemonic: {
          name: "LOPS-OA",
          hook: "Learned · Organised · Public service · Statutory monopoly · Officer of the court · Accountable.",
          recite: "Profession ≠ trade. Lawful ≠ proper. Client, but never against the court."
        },
        cases: [
          { name: "Bar Council of Maharashtra v. M.V. Dabholkar", citation: "(1975) 2 SCC 702", point: "Solicitation, snatching briefs, advertising scramble, fee undercutting = professional misconduct — ethics with teeth." },
          { name: "P.D. Gupta v. Ram Murti", citation: "(1997) 7 SCC 147; AIR 1998 SC 283", point: "Exploiting the professional position / buying litigation property from the client is misconduct." },
          { name: "Ex-Capt. Harish Uppal v. Union of India", citation: "(2003) 2 SCC 45", point: "Collective action cannot override the duty to court and client — nature of profession, not a trade union right to halt justice." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the nature and characteristics of the legal profession and of its ethics.",
            outline: [
              "Profession vs business: LOPS-OA list.",
              "Ethics broader than legality; Part VI preamble idea.",
              "Four sources of norms.",
              "Tensions with Dabholkar / P.D. Gupta / Uppal as illustrations.",
              "Close: duty to court prevails; ethics is enforceable."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "‘An advocate is an officer of the court.’ Comment.",
            outline: ["Dual loyalty in two sentences; one BCI duty-to-court example (no private communication with the judge); one case."]
          }
        ],
        check: [
          "Can list six characteristics of the profession.",
          "Can name four sources of ethics norms.",
          "Can explain lawful ≠ proper with one example.",
          "Can rank duties when client and court collide."
        ]
      },
      {
        id: "e-contempt",
        seq: 4,
        readAs: "Unit II · contempt",
        unit: 2,
        yield: "high",
        tags: ["contempt", "civil contempt", "criminal contempt", "art 129", "s.12"],
        title: "Contempt of court — civil/criminal, punishment, defences, validity; lawyers, judges, State, corporates",
        summary: "Arts. 129/215 make SC and High Courts courts of record with power to punish contempt of themselves. The 1971 Act defines civil and criminal contempt, caps punishment, and builds defences (fair report, fair criticism, truth in public interest). Licence suspension is not a contempt sentence (SCBA).",
        explainer: `<p>This is the longest K-3005 theory card. Follow the syllabus sub-heads in order: (a) civil (b) criminal (c) punishment (d) defences (e) constitutional validity (f) contempt by lawyers, judges, State, and corporate bodies. Add a short procedure coda (ss. 14–20).</p>
        <p><strong>Constitutional frame.</strong> <strong>Art. 129:</strong> Supreme Court is a court of record and shall have power to punish for contempt of itself. <strong>Art. 215:</strong> the same for every High Court. <strong>Art. 142</strong> (complete justice) is used in contempt practice but <em>cannot</em> be used to cancel an advocate’s licence — that is Advocates Act exclusive (<em>SCBA v. UOI</em>, which curtailed <em>In re Vinay Chandra Mishra</em> on that point). The <strong>Contempt of Courts Act, 1971</strong> defines, limits, and procedurally channels the power; it does not erase the constitutional power of courts of record, but it is the statute you cite for definitions, punishments, and defences. High Court power vis-à-vis subordinate courts is <strong>s. 10</strong>.</p>
        <p><strong>(a) Civil contempt — s. 2(b).</strong> Wilful disobedience to a judgment, decree, direction, order, writ or other process of a court, <em>or</em> wilful breach of an undertaking given to the court. The word that carries the case is <strong>wilful</strong> — bona fide inability or a genuine misunderstanding is not enough. Flavour is often coercive/remedial (get compliance) rather than purely punitive. Classic picture: ignoring an injunction; breaking a consent-order undertaking.</p>
        <p><strong>(b) Criminal contempt — s. 2(c).</strong> Publication (spoken or written words, signs, visible representations) or any other act which (i) scandalises or tends to scandalise, or lowers or tends to lower, the authority of any court; or (ii) prejudices or interferes or tends to interfere with the due course of any judicial proceeding; or (iii) interferes or tends to interfere with, or obstructs or tends to obstruct, the administration of justice in any other manner. This is the scandalising / trial-by-media / in-court insult box.</p>
        <p><strong>(c) Punishment — s. 12.</strong> Simple imprisonment up to <strong>six months</strong>, or fine up to <strong>two thousand rupees</strong>, or both — <em>cite the Act as in force; VERIFY whether any later amendment has changed the fine before you treat ₹2,000 as gospel in a 2026 hall.</em> Proviso: court may discharge or remit on an apology to its satisfaction. Explanation: a qualified/conditional apology is not rejected merely for that reason if it is bona fide. For civil contempt, if fine is inadequate, detention in civil prison up to six months (s. 12(3)).</p>
        <p><strong>(d) Defences / non-contempt.</strong> <strong>s. 3</strong> innocent publication and distribution (no reasonable grounds to believe a proceeding was pending — paraphrase from the Act, do not invent the knowledge test). <strong>s. 4</strong> fair and accurate report of a judicial proceeding (unless prohibited). <strong>s. 5</strong> fair criticism of a judicial act after disposal. <strong>s. 6</strong> complaint against a subordinate court’s presiding officer made to a superior. <strong>s. 7</strong> limits on publishing chamber / in-camera matter. <strong>s. 8</strong> other defences under any other law survive. <strong>s. 13</strong> (as amended): no sentence unless the contempt substantially interferes, or tends substantially to interfere, with the due course of justice; the court <em>may</em> permit <strong>truth</strong> as a defence if it is in the public interest and the request is bona fide. <strong>s. 20:</strong> one-year limitation from the date the contempt is alleged to have been committed.</p>
        <p><strong>(e) Constitutional validity.</strong> Contempt is an express reasonable restriction on speech under <strong>Art. 19(2)</strong>. Teaching anchors: <em>Brahma Prakash Sharma v. State of U.P.</em> AIR 1954 SC 10 (scandalising vs fair criticism / personal defamation); <em>E.M.S. Namboodiripad v. T. Narayanan Nambiar</em> (1970) 2 SCC 325 (attacks that tend to undermine judicial authority are not Art. 19(1)(a) protected); <em>C.K. Daphtary v. O.P. Gupta</em> (1971) 1 SCC 626 (contempt law as a reasonable restriction — <strong>VERIFY</strong> the precise ratio paragraph before quoting). Academic Art. 21 fair-procedure arguments exist; do not assert a Supreme Court holding that the 1971 Act is void under Art. 21 unless you have the judgment in hand.</p>
        <p><strong>(f) Status-specific illustrations.</strong> <em>Lawyers:</em> insult, threat, or assault in the face of the court is criminal contempt — <em>In re Vinay Chandra Mishra</em> (1995) 2 SCC 584; <em>R.K. Garg, Advocate v. State of H.P.</em> (1981) 3 SCC 166 (shoe-throwing; conviction stood, sentence details <strong>VERIFY</strong> if you quote numbers). Parallel track: professional misconduct before the Bar Council; <em>SCBA</em> forbids using contempt to suspend the licence. <em>Judges / judicial officers:</em> <strong>s. 16</strong> — a judge, magistrate or other person acting judicially may be liable for contempt of his own court or of a court of co-ordinate or superior jurisdiction, subject to the section’s wording and exceptions (quote, do not guess). <em>State / officials:</em> wilful disobedience of court orders by the State is civil contempt — the State is not above the process. Pick a clean SC illustration when polishing footnotes (<strong>VERIFY</strong> the name you choose; do not invent). <em>Companies:</em> a company acts through officers; an undertaking to the court binds; disobedience can visit the company and responsible officers as the facts warrant (<strong>VERIFY</strong> a specific citation if you name one).</p>
        <p><strong>Procedure coda (short):</strong> contempt in the face of SC/HC — <strong>s. 14</strong>. Criminal contempt cognizance otherwise — <strong>s. 15</strong> (suo motu; Advocate-General motion; or with written consent, etc.). Benches — <strong>s. 18</strong>. Appeals — <strong>s. 19</strong>. Limitation — <strong>s. 20</strong>.</p>`,
        analogy: {
          title: "Kernel panic vs package uninstall",
          body: "Civil contempt is a blocked syscall: the process (your order) did not return, so the kernel retries with coercion. Criminal contempt is poisoning the kernel’s reputation or interrupting other processes. s. 12 is the max nice level the statute allows. SCBA: the kernel can punish the caller; it cannot uninstall the caller’s Bar licence — that is the package manager’s job (s. 35)."
        },
        diagram: {
          type: "compare",
          title: "Civil vs criminal contempt (s. 2)",
          headers: ["", "Civil s. 2(b)", "Criminal s. 2(c)"],
          rows: [
            ["Core", "Wilful disobedience / breach of undertaking", "Scandalise, prejudice a proceeding, or obstruct justice"],
            ["Typical aim", "Secure compliance", "Punish / deter attack on administration of justice"],
            ["Hall hypo", "Ignored injunction", "Insulting the judge; scandalising publication"],
            ["Defence flavour", "Not wilful; impossibility", "ss. 3–8, 13 truth / substantial interference"]
          ]
        },
        mnemonic: {
          name: "W-S-P-6-2-1",
          hook: "Wilful civil · Scandalise criminal · Punishment 6 months / ₹2,000 · Limitation 1 year.",
          recite: "Arts. 129/215 own the power; 1971 Act defines it; s. 13 needs substantial interference; SCBA keeps licences on the Bar Council track."
        },
        cases: [
          { name: "In re Vinay Chandra Mishra", citation: "(1995) 2 SCC 584", point: "Advocate’s insult/overbearing behaviour toward a judge = criminal contempt. Original licence-suspension via Arts. 129/142 later curtailed by SCBA." },
          { name: "Supreme Court Bar Assn. v. Union of India", citation: "(1998) 4 SCC 409", point: "SC cannot suspend/cancel an advocate’s licence while punishing contempt; that power is Advocates Act ss. 35–36." },
          { name: "Brahma Prakash Sharma v. State of U.P.", citation: "AIR 1954 SC 10", point: "Scandalising that lowers public confidence may be contempt; fair criticism and personal defamation are distinct." },
          { name: "E.M.S. Namboodiripad v. T. Narayanan Nambiar", citation: "(1970) 2 SCC 325; AIR 1970 SC 2015", point: "Speech attacking the judiciary so as to undermine authority is not saved by Art. 19(1)(a)." },
          { name: "C.K. Daphtary v. O.P. Gupta", citation: "(1971) 1 SCC 626; AIR 1971 SC 1132", point: "Contempt jurisdiction as a reasonable restriction under Art. 19(2) — VERIFY paragraphs before quoting." },
          { name: "R.K. Garg, Advocate v. State of H.P.", citation: "(1981) 3 SCC 166; AIR 1981 SC 1382", point: "Physical insult to a judge is contempt and unbecoming of an advocate." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define civil and criminal contempt. Discuss punishment, defences, and constitutional validity of contempt law.",
            outline: [
              "Arts. 129/215 + 1971 Act frame.",
              "s. 2(b) vs s. 2(c) with one hypo each.",
              "s. 12 punishment + apology; flag fine amount VERIFY.",
              "ss. 3–8, 13, 20 defences/limitation.",
              "19(2) + Brahma Prakash / EMS / Daphtary (VERIFY Daphtary).",
              "One line SCBA so you do not give the court a licence-cancelling power."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Contempt by lawyers, judges, the State and corporate bodies.",
            outline: ["Lawyers: Vinay Chandra Mishra + Garg + SCBA split. Judges: s. 16. State: wilful disobedience. Company: officers + undertakings. VERIFY named State/company cites."]
          }
        ],
        check: [
          "Can write s. 2(b) and s. 2(c) from memory.",
          "Can list ss. 3–8 and 13 defences.",
          "Knows s. 12 maxima and s. 20 one-year bar.",
          "Can explain SCBA in two sentences.",
          "Flags uncertain corporate/State illustrations as VERIFY."
        ]
      },
      {
        id: "e-strike",
        seq: 5,
        readAs: "Unit II · lawyers’ strike",
        unit: 2,
        yield: "high",
        tags: ["strike", "boycott", "harish uppal"],
        title: "Lawyers’ strike",
        summary: "Ex-Capt. Harish Uppal v. Union of India: lawyers have no right to strike or boycott courts — not even a token strike. Courts must proceed. Abstention on a vakalat risks costs and misconduct. Only a rarest-of-rare dignity exception, at most one day, after consulting the Chief Justice / District Judge.",
        explainer: `<p>The CCS duplicate “(4)” in the syllabus is <em>Strike by the Lawyers</em>. This card is a case-law essay. About 60% of the answer is <em>Uppal</em>; the rest is ethics (duty to client and court) and the contempt neighbourhood (obstruction of justice). Do not write a labour-law strike essay.</p>
        <p><strong>Holding to write as a numbered list — <em>Ex-Capt. Harish Uppal v. Union of India</em> (2003) 2 SCC 45; AIR 2003 SC 739:</strong></p>
        <ul>
          <li>Advocates have <strong>no right</strong> to go on strike or to call for a boycott of courts. Not even a token strike.</li>
          <li>Protest that does <em>not</em> stop court work is another matter: press statements, interviews, banners/placards <em>outside</em> court premises, armbands, peaceful marches away from courts, dharnas / relay fasts, and similar forms.</li>
          <li>An advocate who holds a vakalat <strong>must attend</strong>. Refusal because of a strike call can attract personal costs, possible damages to the client, and disciplinary exposure.</li>
          <li>Bar Councils and Associations must not facilitate strike meetings; coercion or expulsion threats against members who want to work are impermissible.</li>
          <li><strong>Rarest of rare</strong> situations touching the dignity, integrity or independence of the Bar or the Bench: the court may ignore abstention of <strong>not more than one day</strong>, after the Bar President consults the Chief Justice / District Judge; that decision is final.</li>
          <li>Courts are under a <strong>duty to proceed</strong> with the board. There is no obligation to adjourn merely because the Bar has called a strike.</li>
        </ul>
        <p><strong>Why the holding is not a surprise.</strong> A strike by counsel is not an industrial dispute between employer and workmen. It is a refusal by officers of the court to perform the function that justifies their monopoly. It collides with BCI Part VI duties to the client (diligence, not withdrawing without cause and notice) and to the court (punctuality, no adjournment culture). It also <em>tends to obstruct</em> the administration of justice — the criminal-contempt idea in s. 2(c) — though <em>Uppal</em> is primarily a constitutional / professional-obligation ruling, not a contempt sentencing exercise.</p>
        <p><strong>Earlier atmosphere:</strong> interim Supreme Court guidance in the <em>Common Cause</em> line (often cited as (1995) 1 Scale 6 in teaching notes) already discouraged boycotts; <em>Uppal</em> crystallised the rule. If you cite <em>Common Cause</em> as free-standing ratio, mark <strong>VERIFY</strong>.</p>
        <p><strong>Close:</strong> permissible protest is speech <em>around</em> the court, not the shutdown <em>of</em> the court. Name costs + s. 35 misconduct as the personal consequence, and the one-day rarest exception so the answer is complete rather than absolutist in a way the judgment is not.</p>`,
        analogy: {
          title: "On-call SRE does not take the API down",
          body: "Counsel on vakalat is on-call for that litigant’s process. A Bar-wide strike is paging the on-call roster to go dark so the court’s API returns 503. Uppal: you may blog, march off-site, wear an armband — you may not take the API down. The incident commander (CJ/DJ) may tolerate a one-day freeze only if the Bar’s or Bench’s own integrity is the incident."
        },
        diagram: {
          type: "decision",
          title: "Is this protest lawful for an enrolled advocate?",
          q: "Does the form stop court work or abandon a vakalat?",
          yes: "No right. Costs + possible s.35 + court proceeds.",
          no: "Outside protest (press, armband, off-site march) may be permissible."
        },
        mnemonic: {
          name: "NO-TOKEN / 1-DAY",
          hook: "No strike, not even token. Courts proceed. Rare dignity exception ≤ 1 day after CJ/DJ consult.",
          recite: "Uppal 2003: attend on vakalat; protest outside; Bar must not coerce; costs if you don’t show."
        },
        cases: [
          { name: "Ex-Capt. Harish Uppal v. Union of India", citation: "(2003) 2 SCC 45; AIR 2003 SC 739", point: "No right to strike or boycott — including token strike. Duty to proceed. Rare ≤1 day dignity exception." },
          { name: "Common Cause v. Union of India (strike line)", citation: "often taught as (1995) 1 Scale 6 — VERIFY", point: "Early interim discouragement of lawyer boycotts; later crystallised in Uppal. Do not over-cite as standalone ratio." },
          { name: "BCI Part VI duties (as applied)", citation: "Duty to court and client", point: "Non-attendance on strike call is a duty breach even before you reach contempt vocabulary." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Do lawyers have a right to go on strike? Discuss with case law.",
            outline: [
              "Hook: no, not even token — Uppal.",
              "Numbered holdings (attend; outside protest; no coercion; courts proceed; ≤1 day rare exception).",
              "Why: profession not trade union; duties to client/court; obstruction of justice neighbourhood.",
              "Common Cause as background (VERIFY).",
              "Close: costs + s. 35 + Bar Council must not facilitate."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Token strike by advocates.",
            outline: ["Uppal forbids it. One sentence on vakalat attendance. One sentence on the rare 1-day exception so you are accurate."]
          }
        ],
        check: [
          "Can recite Uppal’s no-token-strike rule without notes.",
          "Can list three permissible outside-protest forms.",
          "Knows the ≤1 day rarest exception and who must be consulted.",
          "Can name personal consequences (costs, damages, s. 35)."
        ]
      },
      {
        id: "e-pro",
        seq: 6,
        readAs: "Unit III · professionalization",
        unit: 3,
        yield: "high",
        tags: ["misconduct", "bar bench", "accountability", "code", "s.35"],
        title: "Professionalization — code, misconduct control, bar–bench, accountability, social transformation",
        summary: "Professionalization means entry control, a written ethics code, discipline, public accountability, and a social role — not mere livelihood. Walk the syllabus (a)–(e): BCI code; s. 35 control; Bar–Bench relations; duties to court/client/society; law as an instrument of constitutional change.",
        explainer: `<p>This is the integrative 20-marker. “Extent of professionalization” is not a sociology waffle. It is organised standards + enforceable duties. Use Kailash Rai / Gupta / Sirohi only as a chapter map; write from BCI Part VI, Advocates Act Chapter V, and the cases already on this paper.</p>
        <p><strong>(a) Code of ethics — BCI Rules Part VI Chapter II</strong> (rules under s. 49(1)(c)). Preamble ideas: officer of the court; lawful for others may be improper for an advocate; fearless for the client within the rules. Walk the sections as lists:</p>
        <ul>
          <li><strong>I Duty to the Court:</strong> dignity without servility; complain against a judicial officer only through the proper channel; no illegal influence; <strong>no private communication</strong> with the judge on a pending matter; restrain the client from unfair practice; prescribed dress; punctuality; do not plead facts you know to be false.</li>
          <li><strong>II Duty to the Client:</strong> fearless advocacy; confidentiality; full conflict disclosure; no abuse of process; fee rules as applicable; no abrupt withdrawal without just cause and notice; <strong>account for moneys</strong> — client funds are not a float.</li>
          <li><strong>III Duty to Opponent:</strong> fairness; no sharp practice; communicate with the opposite party through counsel.</li>
          <li><strong>IV Duty to Colleagues:</strong> courtesy; no unethical solicitation or undercutting; seniority conventions where consistent with the rules.</li>
          <li><strong>V–VII:</strong> responsible training of juniors; duty to render legal aid; restrictions on other employment / business incompatible with the profession’s dignity.</li>
        </ul>
        <p><strong>Advertising / solicitation.</strong> Traditional prohibition on touting, advertising, and snatching work is the <em>Dabholkar</em> holding. Modern websites and media are a live BCI-rule question — commonly discussed around Rule 36 and allied restrictions. <strong>VERIFY</strong> the current BCI Rules PDF before you assert an absolute ban on any online presence in the hall.</p>
        <p><strong>(b) Professional misconduct and its control.</strong> “Professional or other misconduct” in <strong>s. 35</strong> is not exhaustively defined — case law fills it. Pipeline: State Bar Council, if it has reason to believe, refers to its <strong>Disciplinary Committee</strong>. <strong>s. 35(3)</strong> orders: dismiss / file; reprimand; suspend from practice for a period; remove the name from the State roll. Suspension bars practice anywhere in India for that period (s. 35(4)). BCI’s own disciplinary lane is <strong>s. 36</strong> (including transfer/withdrawal). Appeals: <strong>s. 37</strong> to BCI, <strong>s. 38</strong> to the Supreme Court. Disciplinary Committee powers: <strong>s. 42</strong> (civil-court-like for inquiry). Part VII of the BCI Rules supplies complaint, fee, notice, evidence, and the principle that a complaint is not dropped solely because the parties compromised. Illustrations: <em>Dabholkar</em> (solicitation/undercutting); <em>P.D. Gupta</em> (client exploitation); strike non-attendance (<em>Uppal</em>). <em>SCBA</em>: contempt court cannot choose suspension of licence as its sentence — that is this pipeline’s exclusive work.</p>
        <p><strong>(c) Bar–Bench relations.</strong> Mutual respect, independence of both, neither hostility nor familiarity that undermines justice. Bar: candour, courtesy, readiness. Bench: patience, fairness, respect for the advocacy function. Breakdowns produce contempt (Vinay Chandra Mishra, R.K. Garg) or administrative measures; healthy relations produce a functioning board. <em>Uppal</em> is also a Bar–Bench case: the collective Bar cannot hold the Bench’s docket hostage.</p>
        <p><strong>(d) Accountability towards court, client, society — write as a three-column answer:</strong> <em>Court</em> — honest submissions, respect, no obstruction, compliance, dress. <em>Client</em> — competence, diligence, confidentiality, loyalty within law, accounting, informed advice (<em>Himalayan Cooperative Group Housing Society v. Balwan Singh</em> (2015) 7 SCC 373 is sometimes used for not exceeding instructions / compromising without authority — <strong>VERIFY</strong> before heavy reliance). <em>Society</em> — access to justice, legal aid, no abuse of process, public confidence. Mechanisms: Bar Council discipline; contempt; negligence/civil claims; criminal law for fraud; peer norms.</p>
        <p><strong>(e) Role of law and the legal profession in social transformation.</strong> Law as an instrument of constitutional values (equality, liberty, dignity). The profession’s job is representation of the vulnerable, legal-aid culture (Art. 39A spirit), and honest lawyering that makes reforms (gender justice, environment, consumer, criminal-process fairness) real rather than rhetorical. Keep this high-level — this is not the K-3003 PIL card. Warning close: strikes, concealment, and delay tactics <em>retard</em> social justice delivery; professionalization is what makes transformation legitimate.</p>
        <p><strong>Viva takeaway:</strong> Advocates Act + BCI ethics + contempt + no-strike jurisprudence = one accountability system. Privilege of practice demands reciprocal duties. Ethics is enforceable, not ornamental. The Project File must still be written in your own English from bare acts — this card is doctrine, not the print pack.</p>`,
        analogy: {
          title: "CI pipeline for a privileged API",
          body: "Part VI is the style linter (conduct). s. 35 is CI that can fail the build (reprimand / suspend / remove). Contempt is production incident response. Bar–Bench is SRE + product talking without paging each other in public. Social transformation is the feature the API exists to ship — access to justice — and a strike is taking production down during launch."
        },
        diagram: {
          type: "stack",
          title: "Professionalization stack (bottom = entry)",
          layers: [
            "Social role / Art. 39A spirit",
            "Accountability: court · client · society",
            "Bar–Bench convention",
            "s.35–38 + Part VII discipline",
            "BCI Part VI code",
            "Enrolment / s.24 gate"
          ]
        },
        mnemonic: {
          name: "C-M-B-A-S",
          hook: "Code · Misconduct control · Bar–Bench · Accountability · Social transformation.",
          recite: "Part VI duties; s.35 reprimand/suspend/remove; respect both sides of the bench; three accountabilities; law as change — without orphaning the docket."
        },
        cases: [
          { name: "Bar Council of Maharashtra v. M.V. Dabholkar", citation: "(1975) 2 SCC 702", point: "Solicitation / undercutting as misconduct; Council’s guardian role on appeal." },
          { name: "P.D. Gupta v. Ram Murti", citation: "(1997) 7 SCC 147", point: "Client-exploitation misconduct; suspension upheld." },
          { name: "Supreme Court Bar Assn. v. Union of India", citation: "(1998) 4 SCC 409", point: "Licence control stays on the s. 35–36 track." },
          { name: "Ex-Capt. Harish Uppal v. Union of India", citation: "(2003) 2 SCC 45", point: "Collective Bar conduct that stops courts is unprofessional; social-transformation claims cannot justify a boycott." },
          { name: "Himalayan Cooperative Group Housing Society v. Balwan Singh", citation: "(2015) 7 SCC 373 — VERIFY before heavy use", point: "Counsel’s authority / not exceeding the brief — accountability to client." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss professional misconduct and its control. How do Bar–Bench relations and accountability of lawyers towards court, client and society shape the profession?",
            outline: [
              "s. 35 pipeline + punishments + ss. 36–38, 42.",
              "Dabholkar, P.D. Gupta, SCBA split with contempt.",
              "Part VI as the code that misconduct violates.",
              "Bar–Bench: candour vs hostility; Mishra/Garg as negatives.",
              "Three-way accountability table + social-transformation close (Art. 39A spirit, no-strike)."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Code of ethics for lawyers (BCI Rules).",
            outline: ["Preamble idea; walk I–VII with two concrete rules each; Dabholkar on solicitation; VERIFY Rule 36/websites."]
          }
        ],
        check: [
          "Can walk BCI Part VI Ch. II sections I–VII.",
          "Can recite s. 35(3) four orders and appeal route 37→38.",
          "Can write the three-way accountability table.",
          "Can connect social transformation to Uppal (no shutdown).",
          "Knows this site is not the Project File."
        ]
      }
    ]
  };
})(window);
