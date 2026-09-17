(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k3002 = {
    id: "k3002",
    code: "K-3002",
    title: "Public International Law",
    short: "PIL",
    blurb: "Nature and sources, IL–municipal law, State personality (territory, recognition, intervention, nationality, diplomats, extradition, asylum), disputes and the special cluster, UNCLOS zones — original cards on the Starke / Kapoor / Aggarwal spine.",
    shelf: {
      primary: "Starke, Introduction to International Law / S.K. Kapoor / H.O. Aggarwal (student texts). Harris for case extracts. Instruments: UN Charter, ICJ Statute Art. 38, VCLT themes, UNCLOS zones"
    },
    youtube: [
      { title: "Sources of International Law Art. 38", search: "Article 38 ICJ sources of international law" },
      { title: "Law of the Sea UNCLOS zones", search: "UNCLOS territorial sea EEZ continental shelf" },
      { title: "Recognition and succession", search: "Recognition of states international law judiciary" }
    ],
    topics: [
      {
        id: "p-theory",
        seq: 1,
        readAs: "Unit I · theory",
        unit: 1,
        yield: "high",
        tags: ["theory", "nature", "austin", "sanctions"],
        title: "Theoretical foundation of International Law",
        summary: "Austin’s ‘not really law’ scepticism, consent and positivist replies, and modern institutional practice. CCS wants you to defend IL’s legal character with sanctions short of a world police: reciprocity, reputation, countermeasures, and UN/ICJ institutional costs.",
        explainer: `<p>Open the paper by answering the only question Austin left you: if law is a sovereign’s command backed by a sanction, how can a horizontal order among sovereigns be law? Write Austin fairly, then refuse his conclusion. Starke/Kapoor/Aggarwal all begin here because every later topic (treaty, custom, use of force) assumes IL is binding.</p>
        <p><strong>Austin’s objection.</strong> Positive law is the command of a political superior who is habitually obeyed and who does not habitually obey another. International rules look like morality or positive international morality: no common superior, no regular physical sanction. If you stop at that sentence you have written a 5-mark fail for a 20-mark question.</p>
        <p><strong>Replies (list them):</strong></p>
        <ul>
          <li><strong>Consent / auto-limitation:</strong> States bind themselves (treaties; custom as tacit consent). Bindingness is not a gift they may withdraw at will once the rule exists — pacta sunt servanda is the lock.</li>
          <li><strong>Sanctions without a world policeman:</strong> retorsion, reprisals/countermeasures (now tightly conditioned), self-defence (UN Charter Art. 51), collective measures under Chapter VII, expulsion from organisations, loss of access to finance and courts, reputational costs that alter future deals. Weak compared to a municipal police, real compared to etiquette.</li>
          <li><strong>Practice:</strong> foreign offices staff legal advisers; ICJ and other tribunals decide cases; UNCLOS tribunals draw maritime lines; domestic courts apply treaties and custom. Officials behave as if IL is law. Oppenheim’s line that IL is law because it is treated as such is the short-note closer.</li>
          <li><strong>Hart-flavoured upgrade (extra credit):</strong> IL has primary rules of obligation even if its secondary rules (change, adjudication) are thinner than a municipal system. Do not write a full Hart essay unless the question invites theory names.</li>
        </ul>
        <p><strong>Definitions to keep named:</strong> Oppenheim (rules of conduct of States in their intercourse, commonly treated as binding); Starke’s working student definition (body of law which is composed for its greater part of the principles and rules of conduct which States feel themselves bound to observe). Mention individuals and IOs as partial subjects in one clause so the definition is not stranded in 1905.</p>
        <p><strong>Public vs private IL; vs municipal law.</strong> This paper is public IL (inter-State, plus human-rights and international-criminal overlays). Conflict of laws is another course. Vs municipal: no single legislature, no compulsory jurisdiction as a default (ICJ consent is still the gateway), but still law.</p>
        <p><strong>Close:</strong> IL is a weak but legal order. Austin described a municipal command model, not the only possible legal system. Then point forward: sources (Art. 38) are how we prove a rule exists.</p>`,
        analogy: {
          title: "Distributed system with no root admin",
          body: "Municipal law is a datacenter with a root admin (sovereign) and kill -9 (police). IL is a peer-to-peer cluster: nodes (States) push protocol updates (treaties), converge on custom, and punish defection with isolation, rate-limits, and occasional UN Security Council incidents. Austin only recognised datacenters. The cluster still runs production traffic every day."
        },
        diagram: {
          type: "tree",
          title: "If not a sovereign command, what binds?",
          root: "International obligation",
          branches: ["Consent (treaty/custom)", "Reciprocity & countermeasures", "Institutional UN/ICJ costs", "Domestic incorporation"]
        },
        mnemonic: {
          name: "A-C-S-P",
          hook: "Austin’s doubt · Consent · Sanctions-without-police · Practice of States.",
          recite: "IL is law because States treat it as binding. Weak secondary rules ≠ no primary rules."
        },
        cases: [
          { name: "SS Lotus (France v. Turkey)", citation: "PCIJ 1927", point: "Residual liberty of States (Lotus principle) is a positivist artefact — restrictions on sovereignty must be proved. Use as theory+sources bridge." },
          { name: "UN Charter Arts. 2(4), 51, Ch. VII", citation: "institutional sanctions sketch", point: "The ‘no world police’ answer is incomplete without collective security and self-defence as legal institutions." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Is international law ‘true’ law? Discuss Austin’s criticism and the modern answers.",
            outline: [
              "Austin command+sanction model.",
              "Consent and pacta sunt servanda.",
              "Sanctions list (countermeasures, Art. 51, Ch. VII, reputation).",
              "Practice / Oppenheim.",
              "Close: weak system, still legal; lead into Art. 38."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Positive international morality.",
            outline: ["Austin’s label. Two-sentence rebuttal: officials and courts treat IL as obligatory."]
          }
        ],
        check: [
          "Can state Austin in three lines and refuse him in ten.",
          "Can list four non-police sanctions.",
          "Has a named definition (Oppenheim or Starke).",
          "Does not confuse PIL with private international law."
        ]
      },
      {
        id: "p-sources",
        seq: 2,
        readAs: "Unit I · sources",
        unit: 1,
        yield: "high",
        tags: ["sources", "article 38", "custom", "treaty", "jus cogens"],
        title: "Sources of International Law",
        summary: "Article 38(1) of the ICJ Statute is the non-negotiable map: treaties, custom, general principles, and subsidiary means (decisions and teachings). Jus cogens, erga omnes, and soft law are the usual upgrades on a basic sources essay.",
        explainer: `<p>If you remember one number in K-3002, remember <strong>Article 38(1) ICJ Statute</strong>. It is not a legislature’s list of all sources for all time, but it is the court’s applicable-law clause and the exam’s table of contents.</p>
        <p><strong>Art. 38(1) — write as numbered law:</strong></p>
        <ul>
          <li><strong>(a) Conventions</strong> (general or particular) establishing rules expressly recognised by the contesting States — treaties, including the UN Charter and UNCLOS. Formality: VCLT 1969 themes (conclusion, reservation, interpretation, pacta sunt servanda, material breach) — you need the themes, not a VCLT section dump, unless the question is on treaties.</li>
          <li><strong>(b) Custom:</strong> international custom, as evidence of a general practice accepted as law. Two elements: <em>State practice</em> (widespread, representative, consistent enough) + <em>opinio juris</em> (practice followed as law, not as courtesy). <em>North Sea Continental Shelf</em> (ICJ 1969) is the teaching case on opinio juris and on when a treaty rule has not yet become custom. <em>Lotus</em> reminds you that restrictions are not presumed.</li>
          <li><strong>(c) General principles of law</strong> recognised by civilised nations — gap-fillers: good faith, res judicata, estoppel, elementary due process. Not a back door to natural-law sermons unless the question asks theory.</li>
          <li><strong>(d) Subsidiary means:</strong> judicial decisions (ICJ, PCIJ, other tribunals; no strict stare decisis — Art. 59) and the teachings of the most highly qualified publicists. Harris’s casebook is a study tool, not a source you cite as if it were the ICJ.</li>
        </ul>
        <p><strong>Art. 38(2)</strong> ex aequo et bono — only if the parties agree. Do not confuse it with (c).</p>
        <p><strong>Upgrades for a 20-marker:</strong> <strong>Jus cogens</strong> (VCLT Arts. 53, 64 flavour): peremptory norms from which no derogation is permitted (prohibition of aggression, genocide, slavery, torture in the usual teaching list — <strong>VERIFY</strong> a norm before you put it on the list). A treaty conflicting with jus cogens is void. <strong>Erga omnes</strong> obligations are owed to the international community as a whole (<em>Barcelona Traction</em> dictum). <strong>Soft law:</strong> declarations, codes, ILC drafts — not formally binding, but they shape custom and later treaties. UNGA resolutions are not legislation; some (with practice) evidence opinio juris.</p>
        <p><strong>Hierarchy?</strong> No simple municipal pyramid. Jus cogens sits above treaties. UN Charter Art. 103 gives Charter obligations priority over other treaties. Otherwise, later/special rules and interpretation do the work. Do not write “custom always beats treaty” or the reverse as a slogan.</p>`,
        analogy: {
          title: "RFC 38 and the unwritten protocol",
          body: "Treaties are signed RFCs. Custom is a de facto protocol: packets everyone sends (practice) plus the belief that you must send them (opinio juris). General principles are standard library functions every domestic legal OS already has. Publicists and judgments are Stack Overflow — subsidiary. Jus cogens is a kernel invariant you cannot contract out of."
        },
        diagram: {
          type: "stack",
          title: "Art. 38 plus the two upgrades",
          layers: [
            "Jus cogens / Charter Art. 103 (priority overlay)",
            "Treaties (38(1)(a))",
            "Custom: practice + opinio juris (38(1)(b))",
            "General principles (38(1)(c))",
            "Subsidiary: cases + publicists (38(1)(d))"
          ]
        },
        mnemonic: {
          name: "T-C-G-S + JC",
          hook: "Treaties · Custom · General principles · Subsidiary · Jus cogens upgrade.",
          recite: "Custom = practice + opinio juris (North Sea). Soft law is not Art. 38(1)(a)."
        },
        cases: [
          { name: "North Sea Continental Shelf", citation: "ICJ 1969", point: "Custom needs opinio juris; a treaty rule is not automatically custom for non-parties." },
          { name: "SS Lotus", citation: "PCIJ 1927", point: "What is not prohibited is permitted — a source-of-obligation caution." },
          { name: "Barcelona Traction", citation: "ICJ 1970 (dictum)", point: "Erga omnes obligations owed to the international community as a whole." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the sources of international law with reference to Article 38 of the Statute of the ICJ.",
            outline: [
              "Walk 38(1)(a)–(d) with one example each.",
              "Custom’s two elements + North Sea.",
              "Jus cogens and Art. 103 as upgrades.",
              "Soft law in four honest lines.",
              "Close: 38 is the court’s clause, not a world constitution."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Opinio juris.",
            outline: ["Subjective element of custom. Practice followed as law. North Sea."]
          }
        ],
        check: [
          "Can write Art. 38(1) from memory.",
          "Can define custom in two elements.",
          "Can explain jus cogens without calling every important rule peremptory.",
          "Knows UNGA resolutions are not automatically law."
        ]
      },
      {
        id: "p-municipal",
        seq: 3,
        readAs: "Unit I · IL & municipal law",
        unit: 1,
        yield: "high",
        tags: ["municipal", "monism", "dualism", "article 51", "vishaka"],
        title: "International Law and Municipal Law",
        summary: "Monism vs dualism, incorporation vs transformation, and how Indian courts use Article 51 and treaty doctrine without making every treaty self-executing. Keep a clean table and one Indian illustration ready.",
        explainer: `<p>This is a compare essay with an Indian landing. International law binds the State on the international plane. Whether a litigant can plead a treaty in the Allahabad High Court is a <em>municipal</em> constitutional question.</p>
        <p><strong>Theories:</strong></p>
        <ul>
          <li><strong>Monism:</strong> one legal order. IL and municipal law are parts of the same system; IL may even rank above statute (strong monism). Individuals can be immediate subjects.</li>
          <li><strong>Dualism:</strong> two orders. IL binds States; municipal law binds persons inside the State. A treaty needs transformation (legislation) before it is law of the land. The UK’s traditional dualism is the teaching picture.</li>
        </ul>
        <p><strong>Incorporation vs transformation.</strong> Customary IL is often said to be <em>incorporated</em> if not inconsistent with statute (English common-law flavour). Treaties typically need <em>transformation</em> in dualist systems. Do not mix the two words.</p>
        <p><strong>India — write this as a mini-outline:</strong> India is closer to dualist on treaties. Treaty-making is executive (Art. 73 / union executive power); if a treaty affects rights or requires a change of municipal law, Parliament must legislate (the <em>Maganbhai Ishwarbhai Patel v. Union of India</em> AIR 1969 SC 783 teaching: a treaty may bind India internationally, but municipal courts apply it when implemented, except perhaps in limited situations). <strong>Art. 51(c)</strong> (Directive Principle) exhorts respect for IL and treaty obligations — not by itself a self-executing clause. <strong>Art. 253</strong> empowers Parliament to implement treaties even in State List fields.</p>
        <p><strong>Judicial practice (the marks):</strong> courts use IL to interpret statutes and fundamental rights when there is no conflict with express municipal law. <em>Vishaka v. State of Rajasthan</em> (1997) 6 SCC 241 used CEDAW to fill a vacuum on workplace sexual harassment until legislation. <em>Gramophone Co. of India v. Birendra Bahadur Pandey</em> (1984) 2 SCC 534 is taught for comity / IL as part of the law of the land unless in conflict with municipal law. Later human-rights cases continue the “interpretive incorporation” style. If Parliament has occupied the field with a contrary statute, the statute wins in a municipal court — the State may still be internationally responsible.</p>
        <p><strong>Close:</strong> dualist hardware, monist software in rights cases. Always split: (i) India’s international responsibility; (ii) what an Indian court can do today.</p>`,
        analogy: {
          title: "Cloud contract vs local kernel",
          body: "A treaty is a cloud SLA that binds the State-node. Dualism: the SLA is not local kernel law until Parliament ports it. Custom is often already in the kernel if the kernel has not overwritten it. Vishaka is the court writing a temporary driver from an international spec because the kernel had a hole. Art. 51 is a README, not a syscall."
        },
        diagram: {
          type: "compare",
          title: "Monism / dualism / India",
          headers: ["", "Monism", "Dualism", "India (exam picture)"],
          rows: [
            ["One order or two?", "One", "Two", "Two for treaties; rights cases leak"],
            ["Treaty in court?", "May be direct", "Needs transformation", "Legislation if rights/law must change (Maganbhai)"],
            ["Custom", "Part of law", "Incorporation if consistent", "Used if not contrary to statute"],
            ["Hook", "IL supreme versions", "UK teaching type", "Art. 51 + Vishaka interpretive use"]
          ]
        },
        mnemonic: {
          name: "M-D-I51-V",
          hook: "Monism · Dualism · Art. 51 · Vishaka gap-fill.",
          recite: "Treaties bind India outside; inside, look for an Act or an interpretive opening. Statute beats unimplemented treaty in a municipal court."
        },
        cases: [
          { name: "Maganbhai Ishwarbhai Patel v. Union of India", citation: "AIR 1969 SC 783", point: "Treaty may bind internationally; municipal implementation needed when it affects municipal law/rights." },
          { name: "Vishaka v. State of Rajasthan", citation: "(1997) 6 SCC 241", point: "International conventions used to fill a vacuum in the absence of domestic law, consistent with the Constitution." },
          { name: "Gramophone Co. of India v. Birendra Bahadur Pandey", citation: "(1984) 2 SCC 534", point: "IL as part of the law of the land unless in conflict — teaching cite; VERIFY the exact sentence you quote." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the relationship between international law and municipal law. How do Indian courts treat treaties?",
            outline: [
              "Monism vs dualism table.",
              "Incorporation vs transformation.",
              "Art. 51, 253, Maganbhai.",
              "Vishaka as gap-fill; statute wins if contrary.",
              "Split international responsibility vs municipal remedy."
            ]
          }
        ],
        check: [
          "Can draw the monism/dualism table.",
          "Can state India’s treaty-implementation picture.",
          "Can use Vishaka without claiming every treaty is self-executing.",
          "Knows Art. 51 is a DP, not a trump card."
        ]
      },
      {
        id: "p-state-sov",
        seq: 4,
        readAs: "Unit II · sovereignty & territory",
        unit: 2,
        yield: "high",
        tags: ["sovereignty", "territory", "cession", "occupation"],
        title: "State — sovereignty and territory",
        summary: "Statehood, sovereignty, and modes of acquiring and losing territory. Pair the Montevideo-style ingredients with the classical five modes, and note that conquest is no longer a lawful title after the UN Charter.",
        explainer: `<p>A State is the primary subject of IL. Teaching ingredients (Montevideo Convention 1933 flavour, even when you do not cite the treaty): permanent population, defined territory (not a surveyed cadastre — some border fuzz is tolerated), government, capacity to enter into relations with other States. Recognition is the next card; do not swallow statehood into recognition theory here.</p>
        <p><strong>Sovereignty.</strong> Internal: exclusive competence over the territory and population. External: independence from the authority of another State. It is not a licence to violate IL (Lotus is residual liberty <em>within</em> IL, not above it). Territorial sovereignty is the right to display the activities of a State to the exclusion of others (<em>Island of Palmas</em>, Huber, 1928 — the exam’s territory case).</p>
        <p><strong>Modes of acquiring territory (classical list):</strong></p>
        <ul>
          <li><strong>Occupation:</strong> of terra nullius, with effective display of authority and intention. Not occupation of someone else’s State. Palmas: continuous and peaceful display beats an older paper discovery.</li>
          <li><strong>Prescription:</strong> long, peaceful, public possession adverse to a prior sovereign, acquiesced in. Close cousin of occupation in evidence, different in that there was a prior title.</li>
          <li><strong>Cession:</strong> transfer by treaty (sale, gift, exchange, peace treaty). The transferee takes subject to the rule that you cannot cede what you do not have.</li>
          <li><strong>Accretion / avulsion:</strong> slow deposit (accretion) generally moves the boundary with the land; sudden avulsion often does not. River boundaries are a favourite sketch.</li>
          <li><strong>Conquest / annexation:</strong> historically a mode after effective occupation following war. Post-Charter, Art. 2(4) and the Stimson-type non-recognition policy make conquest an invalid title. Do not list conquest as a living lawful mode without that sentence.</li>
        </ul>
        <p><strong>Loss:</strong> the reverse operations, plus abandonment, and merger. Newly independent States and uti possidetis juris (colonial administrative lines) belong in a succession/boundaries close if the question is on African/Asian decolonisation maps.</p>
        <p><strong>Air and maritime belts</strong> are territorial incidents; dump UNCLOS detail on the sea card. Polar claims and outer space (not subject to national appropriation — Outer Space Treaty theme) are optional extras.</p>`,
        analogy: {
          title: "Root ownership of a subnet",
          body: "Territory is the IPv4 block the State-node is authorised to announce. Occupation is claiming an unannounced block with live BGP (effective control). Prescription is announcing a block so long that the old owner stops objecting. Cession is an authorised transfer of the prefix. Conquest is a hijack — the Charter now treats it as a hijack, not a transfer."
        },
        diagram: {
          type: "flow",
          title: "Title to territory — lawful toolkit today",
          steps: ["Occupation of terra nullius", "Prescription", "Cession", "Accretion", "Not: conquest after UN Charter"]
        },
        mnemonic: {
          name: "O-P-C-A-X",
          hook: "Occupation · Prescription · Cession · Accretion · X = conquest (dead as lawful title).",
          recite: "Palmas: effective display. Montevideo: people, territory, government, relations."
        },
        cases: [
          { name: "Island of Palmas (Netherlands v. USA)", citation: "PCA 1928 (Huber)", point: "Territorial sovereignty = exclusive right to display State activity; continuous peaceful display prevails over paper discovery." },
          { name: "UN Charter Art. 2(4)", citation: "use of force / territorial integrity", point: "Conquest cannot today be taught as a clean mode of title." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the modes of acquisition of territorial sovereignty. Is conquest a valid mode today?",
            outline: [
              "Statehood ingredients in four lines.",
              "OPCA with Palmas on occupation/effectiveness.",
              "Conquest + Art. 2(4).",
              "Loss/uti possidetis in a close if time."
            ]
          }
        ],
        check: [
          "Can list Montevideo-style ingredients.",
          "Can explain Palmas in two sentences.",
          "Can list five classical modes and kill conquest as lawful title.",
          "Does not dump UNCLOS here."
        ]
      },
      {
        id: "p-recognition",
        seq: 5,
        readAs: "Unit II · recognition & succession",
        unit: 2,
        yield: "high",
        tags: ["recognition", "succession", "declaratory", "constitutive"],
        title: "Recognition and State succession",
        summary: "Recognition of States and governments (declaratory vs constitutive; de facto/de jure) and succession to treaties, debts, and archives after break-up or merger. Problem facts usually hide a new regime and an unpaid loan.",
        explainer: `<p>Split the answer: (A) recognition (B) succession. They meet when a new entity wants the old State’s treaties and the old State’s creditors want their money.</p>
        <p><strong>A. Recognition of States.</strong> A political act with legal consequences: diplomatic relations, immunities, standing, treaty relations. <strong>Declaratory theory:</strong> recognition merely notices that the Montevideo facts exist; it does not create the State. <strong>Constitutive theory:</strong> membership in the legal club depends on recognition by existing members. Exam landing: practice is mixed but teaching prefers declaratory for statehood, while admitting that non-recognition has heavy practical costs (no UN seat, no banks, no courts). Stimson doctrine: do not recognise title got by aggression.</p>
        <p><strong>Governments:</strong> recognising a government is acknowledging who speaks for an already recognised State (Tobar, Estrada doctrines in the history box). Premature recognition of rebels can be unlawful intervention.</p>
        <p><strong>De facto vs de jure.</strong> De facto: effective control acknowledged in a limited, often provisional way. De jure: full formal recognition. The labels are fading in some chancelleries but still live in CCS short notes.</p>
        <p><strong>Modes:</strong> express (note, treaty, UN vote as evidence) or implied (exchange of ambassadors). Collective recognition via admission to the UN is powerful evidence, not magic.</p>
        <p><strong>B. State succession.</strong> Replacement of one State by another in the responsibility for the international relations of territory. Types: decolonisation, secession, dissolution (SFRY teaching example), unification (Germany), cession of a slice.</p>
        <ul>
          <li><strong>Treaties:</strong> no universal clean slate. The 1978 Vienna Convention on Succession of States in respect of Treaties is the teaching map (not universally in force for everyone — say so). Localised treaties (boundaries) tend to pass; political treaties may not; newly independent States claim a cleaner slate than merger States.</li>
          <li><strong>Debts and property:</strong> equitable division; odious debt debates (do not present as hard law). Archives and public property pass with the territory as a starting point.</li>
          <li><strong>Nationality:</strong> inhabitants’ nationality may change with the territory, subject to human-rights overlays (next nationality card).</li>
        </ul>
        <p><strong>Governments vs States:</strong> a new government (revolution) is not State succession. The State continues; the Tinoco arbitration (1923) is taught for de facto government and later recognition of its acts. <strong>VERIFY</strong> the sentence you pin on Tinoco.</p>`,
        analogy: {
          title: "DNS records and repo forks",
          body: "Recognition is the DNS A-record the other nodes publish for you. Declaratory theory: the server already exists; DNS just points. Constitutive: you are not on the internet until enough resolvers list you. Succession is a git fork/merge of the old State’s repos: boundary files usually come along; political treaties may not; creditors file issues on the new repo."
        },
        diagram: {
          type: "compare",
          title: "Recognition theories",
          headers: ["", "Declaratory", "Constitutive"],
          rows: [
            ["Statehood exists when?", "Facts (Montevideo)", "When recognised"],
            ["Recognition’s job", "Notice + politics", "Creates the legal person"],
            ["Exam landing", "Preferred for doctrine", "Explains the cost of non-recognition"]
          ]
        },
        mnemonic: {
          name: "D/C · DF/DJ · T-D-P",
          hook: "Declaratory/Constitutive · De facto/De jure · Treaties-Debts-Property on succession.",
          recite: "New government ≠ new State. Aggressive conquest: non-recognition (Stimson)."
        },
        cases: [
          { name: "Tinoco (Great Britain v. Costa Rica)", citation: "1923 arbitration — VERIFY pin", point: "De facto government may bind the State; later regimes and non-recognition arguments have limits." },
          { name: "Vienna Convention on Succession of States in respect of Treaties", citation: "1978 (teaching map)", point: "Use as structure, noting limited participation. Boundary regimes tend to continue." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the theories of recognition. What are the consequences of State succession on treaties and public debt?",
            outline: [
              "Declaratory vs constitutive + de facto/de jure.",
              "Premature recognition as intervention.",
              "Succession types.",
              "Treaties vs debts vs property.",
              "Revolution is not succession (Tinoco, VERIFY)."
            ]
          }
        ],
        check: [
          "Can explain both recognition theories and pick a landing.",
          "Can distinguish State recognition from government recognition.",
          "Can sketch succession to treaties vs debts.",
          "Does not treat a coup as the birth of a new State."
        ]
      },
      {
        id: "p-intervention",
        seq: 6,
        readAs: "Unit II · intervention",
        unit: 2,
        yield: "high",
        tags: ["intervention", "use of force", "nicaragua", "article 2(4)"],
        title: "Intervention",
        summary: "The rule is non-intervention and no use of force (UN Charter Arts. 2(4) and 2(7)). Write the rule first, then the closed list of controversies: self-defence, UNSC authorisation, invitation, and the shaky humanitarian claim.",
        explainer: `<p>Intervention is dictatorial interference by one State in the affairs of another. The exam fail mode is opening with NATO or a newspaper war. Open with the prohibition, then exceptions that are actually law, then claims that are not settled law.</p>
        <p><strong>The rule.</strong> <strong>Art. 2(4)</strong> UN Charter: refrain from the threat or use of force against the territorial integrity or political independence of any State, or in any other manner inconsistent with the Purposes of the UN. <strong>Art. 2(7)</strong> keeps the UN itself out of matters essentially within domestic jurisdiction, without prejudicing Chapter VII enforcement. Customary non-intervention is independently stated in <em>Nicaragua v. United States</em> (ICJ 1986): no coercion against a State’s choice of political, economic, or cultural system; arming rebels can be an unlawful use of force / intervention even without a full-scale invasion. The Declaration on Friendly Relations (UNGA 2625 (XXV)) is the soft-law restatement everyone quotes.</p>
        <p><strong>Lawful or at least legally framed uses of force:</strong></p>
        <ul>
          <li><strong>Self-defence, Art. 51:</strong> if an armed attack occurs, until the Security Council has taken measures. Necessity, proportionality, and (in the teaching fight) whether anticipatory defence survives — Caroline formula is history; keep it as a named controversy, not as Charter text.</li>
          <li><strong>Chapter VII:</strong> Security Council authorisation / enforcement. This is the collective-security hole in 2(4), not a unilateral hole.</li>
          <li><strong>Invitation / intervention by request:</strong> a government may request assistance against rebels. The identity of the inviting authority in a civil war is the factual trap (premature recognition of rebels cuts the other way).</li>
        </ul>
        <p><strong>Not settled as a unilateral right:</strong> humanitarian intervention without Council authority (Kosovo 1999 teaching hypo); “responsibility to protect” is a political-institutional agenda, not a new 2(4) exception you should assert as hard law. Protection of nationals abroad is another controversy. Counter-intervention is tightly fact-bound.</p>
        <p><strong>Economic and political pressure</strong> may be unlawful intervention if coercive, even without troops — Nicaragua’s point. Retorsion (unfriendly but lawful acts) remains available.</p>
        <p><strong>Close:</strong> rule → 51 → VII → invitation → label the rest as claims. That structure is the 20-marker.</p>`,
        analogy: {
          title: "No SSH into another node without a ticket",
          body: "Art. 2(4) is a ban on SSHing into another State’s kernel. Art. 51 is break-glass when you are already being paged with an armed attack. Chapter VII is the cluster orchestrator (UNSC) issuing a signed ticket. Invitation is the node’s own admin opening a port. Humanitarian intervention without a ticket is a grey-hat exploit — do not write it as an approved API."
        },
        diagram: {
          type: "decision",
          title: "Force against another State?",
          q: "Art. 51 armed attack, Ch. VII ticket, or genuine invitation?",
          yes: "Argues within the Charter system — then necessity/proportionality.",
          no: "Prima facie 2(4) / non-intervention breach. Humanitarian claims ≠ a third exception."
        },
        mnemonic: {
          name: "2(4)-51-VII-INV",
          hook: "Prohibition · Self-defence · Council · Invitation. Everything else is a claim.",
          recite: "Nicaragua: no coercive intervention; arming rebels counts. R2P is not a unilateral licence."
        },
        cases: [
          { name: "Nicaragua v. United States", citation: "ICJ 1986", point: "Customary bans on use of force and intervention; US support for contras as unlawful intervention/use of force on the facts found." },
          { name: "UN Charter Arts. 2(4), 2(7), 51, Ch. VII", citation: "primary text", point: "The only map you need for a first-class intervention essay." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "What is intervention? Discuss its legality under the UN Charter with decided cases.",
            outline: [
              "Definition + 2(4)/2(7).",
              "Nicaragua holdings.",
              "Art. 51 and Ch. VII.",
              "Invitation vs premature recognition.",
              "Humanitarian / R2P as unsettled — do not invent a third exception."
            ]
          }
        ],
        check: [
          "Opens with the prohibition, not with an exception.",
          "Can state Nicaragua in three lines.",
          "Can list the closed lawful boxes: 51, VII, invitation.",
          "Does not treat R2P as a Charter amendment."
        ]
      },
      {
        id: "p-nationality",
        seq: 7,
        readAs: "Unit II · nationality",
        unit: 2,
        yield: "standard",
        tags: ["nationality", "diplomatic protection", "nottebohm"],
        title: "Nationality",
        summary: "Nationality is the legal link between individual and State: acquisition, loss, dual nationality frictions, and diplomatic protection. Distinguish nationality from domicile and from refugee status. Nottebohm is the genuine-link case.",
        explainer: `<p>Nationality is a municipal status with international consequences. Each State sets its own nationality law (Hague Convention 1930 flavour: a State’s nationality is to be recognised by others so far as it is consistent with IL). International law cares when that status is used to claim diplomatic protection, to allocate jurisdiction, or to dump statelessness onto a neighbour.</p>
        <p><strong>Acquisition (list):</strong> jus soli (birth on soil), jus sanguinis (descent), naturalisation, registration, option on succession of territory, marriage (historically gendered — flag modern human-rights limits). <strong>Loss:</strong> release, deprivation on grounds allowed by IL (not arbitrarily — human-rights overlay), substitution on new nationality. Dual nationality is a fact of life; problems are military service, taxation, and which State may protect.</p>
        <p><strong>Diplomatic protection.</strong> The State of nationality may espouse a national’s claim against another State (after exhaustion of local remedies, in the usual rule). It is the State’s own right in classical doctrine, not a right of the individual against his State to force protection. <em>Nottebohm (Liechtenstein v. Guatemala)</em> ICJ 1955: nationality granted without a <strong>genuine link</strong> need not be opposable to another State for protection purposes. Do not read Nottebohm as globally voiding every passport; it is about opposability in protection.</p>
        <p><strong>Statelessness and refugees.</strong> Nationality ≠ refugee status. A refugee may still have a nationality and still need protection against return (asylum card). Statelessness conventions are a 5-mark extra.</p>
        <p><strong>India landing (optional but useful):</strong> Citizenship Act (as amended) is municipal; do not litigate CAA politics in a PIL answer unless the question is on municipal nationality. Mention that Indian courts still meet Nottebohm as IL, not as a substitute Citizenship Act.</p>
        <p><strong>Distinctions:</strong> domicile (private IL / tax), residence, race, religion. A corporation’s “nationality” for protection is a different <em>Barcelona Traction</em> problem (place of incorporation / siège) — one paragraph if the question says “persons.”</p>`,
        analogy: {
          title: "Passport as a signed token",
          body: "Municipal law mints the token (citizenship). Diplomatic protection is the issuing State opening a ticket against another node on that token. Nottebohm: if the token was minted with no genuine account activity, the defendant node may refuse the ticket. Domicile is a billing address; refugee status is a protection flag that can sit on a foreign token."
        },
        diagram: {
          type: "flow",
          title: "Diplomatic protection pipeline",
          steps: ["Municipal nationality", "Genuine link (Nottebohm)", "Wrongful act by another State", "Exhaust local remedies", "Espousal by the State of nationality"]
        },
        mnemonic: {
          name: "SOLI-SANG-NAT / GL",
          hook: "Soil · Blood · Naturalisation. Protection needs a genuine link.",
          recite: "Nationality is municipal; opposability can be international. Not a refugee synonym."
        },
        cases: [
          { name: "Nottebohm (Liechtenstein v. Guatemala)", citation: "ICJ 1955", point: "Nationality without a genuine link may not be opposable for diplomatic protection." },
          { name: "Barcelona Traction", citation: "ICJ 1970", point: "Corporate protection generally follows the company’s State of incorporation — separate from Nottebohm’s natural-person genuine link." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Nationality and diplomatic protection, with Nottebohm.",
            outline: ["Define nationality.", "Modes of acquisition.", "Protection pipeline.", "Genuine link.", "Not refugee / not domicile."]
          }
        ],
        check: [
          "Can list modes of acquisition.",
          "Can explain Nottebohm as opposability, not as a world citizenship code.",
          "Can distinguish nationality, domicile, refugee status.",
          "Knows diplomatic protection is classically the State’s right."
        ]
      },
      {
        id: "p-diplomats",
        seq: 8,
        readAs: "Unit II · diplomats",
        unit: 2,
        yield: "high",
        tags: ["diplomats", "immunity", "vienna", "persona non grata"],
        title: "Diplomatic agents",
        summary: "Vienna Convention on Diplomatic Relations, 1961: inviolability of the person and of the mission, immunity from jurisdiction, persona non grata, and the functional reason for the privileges. Short notes love lists — privileges with a purpose, not aristocratic folklore.",
        explainer: `<p>Diplomacy is official communication between States. The 1961 Vienna Convention (VCDR) is largely custom restated. India is a party; the Diplomatic Relations (Vienna Convention) Act, 1972 gives municipal effect. Write function first: privileges exist so the sending State can transact, not so the diplomat can shop tax-free as a lifestyle.</p>
        <p><strong>The mission.</strong> Premises of the mission are inviolable (Art. 22 flavour): receiving State agents do not enter without consent; the receiving State must protect them. Archives and documents are inviolable. This is why “diplomatic asylum” in an embassy is such a hard problem (asylum card): the premises are inviolable, not extra-territorial sovereign soil in the old cartoon sense. <em>United States Diplomatic and Consular Staff in Tehran</em> (ICJ 1980) is the holding that Iran failed to protect, then used, the hostages — a textbook breach.</p>
        <p><strong>The agent.</strong> Personal inviolability (not liable to arrest or detention). Immunity from criminal jurisdiction of the receiving State; civil/administrative immunity with listed exceptions (private immovable property, succession, private professional/commercial activity). Immunity is from jurisdiction, not from liability in the abstract; the sending State may waive. Family members forming part of the household take a similar cloak as provided.</p>
        <p><strong>Persona non grata (Art. 9 flavour):</strong> the receiving State may notify that a person is PNG at any time, without having to explain. The sending State must recall or terminate functions; failing that, the person may be refused recognition as a staff member. This is the political safety valve that makes absolute immunity tolerable.</p>
        <p><strong>Other list items for short notes:</strong> freedom of communication and the diplomatic bag (not to be opened or detained — abuse controversies exist); exemption from dues and taxes with exceptions; duty to respect the receiving State’s laws (Art. 41) even while immune from its courts. After functions end, residual immunity for official acts; unofficial acts can be sued once the person is gone.</p>
        <p><strong>Consuls</strong> (1963 Convention) have a thinner, more functional immunity. Do not mix the two if the question says diplomatic agents.</p>`,
        analogy: {
          title: "On-site contractor with a sealed room",
          body: "The mission is a locked cage in the receiving State’s datacenter: local ops (police) do not enter without the sending admin’s OK, and they must guard the cage. The diplomat is a contractor with sudo on the sending node and immunity from the local process scheduler. PNG is the local admin revoking the contractor badge. Waiver is the sending admin lifting the immunity flag. Tehran: the host first failed to guard the cage, then joined the raid."
        },
        diagram: {
          type: "tree",
          title: "VCDR toolkit",
          root: "Diplomatic law (VCDR 1961)",
          branches: ["Inviolability of premises", "Personal inviolability + immunity", "PNG + waiver", "Duty to respect local law"]
        },
        mnemonic: {
          name: "I-I-P-W",
          hook: "Inviolability of mission · Inviolability/immunity of person · PNG · Waiver.",
          recite: "Functional necessity, not nobility. Bag sealed. Consuls are a thinner statute."
        },
        cases: [
          { name: "United States Diplomatic and Consular Staff in Tehran", citation: "ICJ 1980", point: "Receiving State must protect the mission; condoning/holding hostages is a grave VCDR breach." },
          { name: "VCDR 1961 / Indian 1972 Act", citation: "treaty + transformation", point: "Cite the Convention articles by theme; quote numbers only if you have them." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the privileges and immunities of diplomatic agents. How can the receiving State respond to abuse?",
            outline: [
              "Functional necessity.",
              "Premises + person + bag.",
              "Criminal vs civil immunity + exceptions.",
              "PNG and waiver.",
              "Tehran. Duty to respect local law."
            ]
          }
        ],
        check: [
          "Can explain inviolability of premises without saying ‘the embassy is foreign soil’ as a slogan.",
          "Can list PNG and waiver as the two safety valves.",
          "Can name Tehran.",
          "Does not give consuls full diplomatic immunity by default."
        ]
      },
      {
        id: "p-extradition",
        seq: 9,
        readAs: "Unit II · extradition",
        unit: 2,
        yield: "high",
        tags: ["extradition", "double criminality", "political offence"],
        title: "Extradition",
        summary: "Extradition is treaty-and-statute driven: double criminality, specialty, political-offence exception, and Indian practice under the Extradition Act, 1962. Problem questions usually hide a political-offence or nationality twist.",
        explainer: `<p>Extradition is the surrender of an accused or convicted person by one State to another, at the latter’s request, so that the requesting State may prosecute or enforce a sentence. There is no general customary duty to extradite everyone; the duty is typically in a treaty, implemented by a statute. Comity and UN suppression conventions fill gaps.</p>
        <p><strong>Conditions / principles (write as a checklist):</strong></p>
        <ul>
          <li><strong>Treaty or statutory basis</strong> between the two States (India: Extradition Act, 1962, with notified treaty States and a residual scheme — <em>verify the Part you are in before quoting</em>).</li>
          <li><strong>Double criminality:</strong> the conduct is an offence in both States (not necessarily the same name — look at the facts).</li>
          <li><strong>Extraditable offence:</strong> usually a seriousness threshold / listed offences.</li>
          <li><strong>Specialty (or speciality):</strong> the requesting State may try only for the offence for which surrender was granted, unless later consent.</li>
          <li><strong>Political offence exception:</strong> pure political offences (treason, sedition-type) are classically not extraditable; “relative” political offences (violent crimes with a political motive) are the fight — courts look at the predominance of the common crime. Terrorism suppression treaties often exclude the exception (you cannot label a bombing “political” and walk).</li>
          <li><strong>Nationality:</strong> some States refuse to extradite their own nationals (and may prosecute at home instead — aut dedere aut judicare neighbourhood).</li>
          <li><strong>Human-rights bars:</strong> real risk of torture, unfair trial, or death penalty without assurances — modern overlay. Non-refoulement sits next door on the asylum card.</li>
        </ul>
        <p><strong>India.</strong> Executive + magisterial inquiry structure under the 1962 Act; courts police the statutory conditions; the Union decides surrender. Famous sagas (Abu Salem and others) are illustrations of specialty and subsequent consent — cite only if you have the holding, not the headline.</p>
        <p><strong>Distinguish:</strong> deportation (unilateral immigration control, not a criminal-assistance treaty), illicit rendition, and asylum (this is the reverse magnetic pole).</p>`,
        analogy: {
          title: "Cross-cluster process migration",
          body: "Extradition is a signed request to migrate a process to the requester’s runtime. Double criminality: both kernels treat the behaviour as a killable offence. Specialty: the destination may only run the declared job. Political-offence exception: political syscalls are not exported. Torture risk is an ethics/SRE hold on the migration."
        },
        diagram: {
          type: "vflow",
          title: "Extradition checklist",
          steps: ["Treaty/statute basis", "Double criminality + threshold", "Not a (pure) political offence", "Specialty will bind requester", "Human-rights bar? nationality bar?", "Surrender or refuse"]
        },
        mnemonic: {
          name: "T-DC-S-PO-N",
          hook: "Treaty · Double criminality · Specialty · Political offence · Nationality/human-rights bars.",
          recite: "No general customary duty. Deportation is not extradition. Terrorism treaties punch the political exception."
        },
        cases: [
          { name: "Extradition Act, 1962", citation: "India Code", point: "Municipal machinery. Quote the Part/section only from the Act." },
          { name: "Political offence / specialty (teaching)", citation: "treaty practice; VERIFY named Indian SC if used", point: "Use principles first. A named saga without a citation is a newspaper, not an authority." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the principles of extradition. What is the political offence exception?",
            outline: [
              "Definition + no general duty.",
              "Checklist of principles.",
              "Pure vs relative political offences; terrorism carve-outs.",
              "Indian Act in four lines.",
              "Distinguish deportation and asylum."
            ]
          }
        ],
        check: [
          "Can list five extradition principles.",
          "Can explain specialty in one sentence.",
          "Can handle a political-offence hypo without freeing a bomber by slogan.",
          "Knows deportation ≠ extradition."
        ]
      },
      {
        id: "p-asylum",
        seq: 10,
        readAs: "Unit II · asylum",
        unit: 2,
        yield: "high",
        tags: ["asylum", "refuge", "non-refoulement", "diplomatic asylum"],
        title: "Asylum",
        summary: "Territorial vs extraterritorial (diplomatic) asylum, the non-refoulement neighbourhood, and why an embassy is not an automatic safe room. Contrast asylum with extradition in one tight table.",
        explainer: `<p>Asylum is the protection a State gives on its territory, or in some claims in its extra-territorial spaces, to a person who seeks it against a pursuing State. It is primarily a right of the <em>State to grant</em>, not a free-standing individual right to choose a country in classical IL — modern refugee law (1951 Convention + 1967 Protocol) adds individual protection against return.</p>
        <p><strong>Territorial asylum.</strong> The territorial sovereign may admit and refuse to surrender (subject to extradition treaties and human-rights bars). Non-refoulement: do not return a refugee to a place of persecution (Art. 33 of the 1951 Convention flavour). India is not a party to the 1951 Convention but has a long administrative practice and constitutional Art. 21 overlay in some High Court/SC cases — <strong>VERIFY</strong> a named Indian holding before you assert that Art. 21 <em>is</em> non-refoulement. UNHCR’s role is practical, not a substitute municipal statute.</p>
        <p><strong>Diplomatic / extra-territorial asylum.</strong> Taking a fugitive into an embassy, warship, or military base and refusing the territorial sovereign. Latin-American treaty practice has a regional custom; it is <em>not</em> general IL. <em>Asylum Case (Colombia v. Peru)</em> ICJ 1950: Colombia had not shown a customary right to grant diplomatic asylum and to take the person out; qualification of the offence as political was also constrained. Teaching landing: inviolability of embassy premises (VCDR) may block a police raid, but it does not create a right to spirit the person abroad against the receiving State’s will.</p>
        <p><strong>Extradition contrast (write a table in the hall):</strong> extradition is cooperation to send a person <em>to</em> the requesting criminal process; asylum is protection <em>from</em> that process (or from persecution). A political-offence refusal to extradite is the hinge. The same facts can be an extradition request on Monday and an asylum claim on Tuesday.</p>
        <p><strong>Ships and aircraft:</strong> warships have a stronger extra-territorial flavour than merchant ships. Do not grant every Indian-registered tanker a right to harbour fugitives.</p>`,
        analogy: {
          title: "Two kinds of shelter",
          body: "Territorial asylum is taking the process onto your own cluster and refusing to migrate it back (non-refoulement is a do-not-return rule). Diplomatic asylum is hiding the process in your locked cage (embassy) inside someone else’s datacenter. VCDR keeps local ops out of the cage; the Asylum Case says you still do not get a general right to exfiltrate the process. Extradition is the opposite ticket: please migrate this process to us."
        },
        diagram: {
          type: "compare",
          title: "Asylum vs extradition",
          headers: ["", "Asylum", "Extradition"],
          rows: [
            ["Direction", "Protect from the pursuing State", "Deliver to the requesting State"],
            ["Legal basis", "Territorial sovereignty + refugee law", "Treaty + statute"],
            ["Political flavour", "Often granted because of political persecution", "Political offence may block surrender"],
            ["Embassy?", "Diplomatic asylum not general IL (Asylum Case)", "Not a substitute for a treaty request"]
          ]
        },
        mnemonic: {
          name: "T-vs-D / 33 / 1950",
          hook: "Territorial vs Diplomatic. Art. 33 non-refoulement flavour. Asylum Case 1950.",
          recite: "Embassy inviolability ≠ a right of diplomatic asylum as general law. India: practice + Art. 21 arguments, not a 1951 party — VERIFY Indian cites."
        },
        cases: [
          { name: "Asylum Case (Colombia v. Peru)", citation: "ICJ 1950", point: "No general customary right of diplomatic asylum as claimed; regional practice not proved as binding on Peru in that form." },
          { name: "1951 Refugee Convention Art. 33", citation: "non-refoulement", point: "Teaching core of modern territorial protection. Flag India’s non-party status honestly." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Distinguish territorial and diplomatic asylum. How does asylum differ from extradition?",
            outline: [
              "Definitions.",
              "Territorial + non-refoulement.",
              "Diplomatic + Asylum Case + VCDR inviolability limit.",
              "Table vs extradition.",
              "India one honest paragraph."
            ]
          }
        ],
        check: [
          "Can define both kinds of asylum.",
          "Can state the Asylum Case holding without over-reading it.",
          "Can draw the extradition contrast table.",
          "Does not claim India is a 1951 Convention party."
        ]
      },
      {
        id: "p-war",
        seq: 11,
        readAs: "Unit III · war & disputes",
        unit: 3,
        yield: "high",
        tags: ["war", "disputes", "icj", "peaceful settlement"],
        title: "War, disputes, and peaceful settlement",
        summary: "UN Charter outlaws aggressive war; IHL (Hague/Geneva) regulates how force is fought if it occurs. Peaceful settlement is a ladder: negotiation, enquiry, mediation, conciliation, arbitration, ICJ. Keep dispute-settlement methods as a memorisable list.",
        explainer: `<p>Two sub-topics are glued in the CCS heading: the legal character of war/armed conflict, and how disputes are settled without it. Write both.</p>
        <p><strong>War and the Charter.</strong> Classical IL knew a state of war with prize law, neutrality, and declarations. The Kellogg-Briand Pact and then <strong>UN Charter Art. 2(4)</strong> made aggressive force unlawful. “War” as a technical status is less important than <em>armed conflict</em> in modern IHL. Jus ad bellum (when force is allowed — intervention card) is distinct from jus in bello (how to fight — distinction, proportionality, necessity, humanity; Geneva Conventions 1949 + Additional Protocols). Neutrality still exists but is squeezed by collective security. Do not write a full IHL optional paper; give the distinction and two Geneva ideas (protected persons; common Art. 3 in non-international conflicts).</p>
        <p><strong>Peaceful settlement — Art. 2(3) and Art. 33 UN Charter ladder:</strong></p>
        <ul>
          <li><strong>Negotiation</strong> — direct talks.</li>
          <li><strong>Enquiry</strong> — fact-finding.</li>
          <li><strong>Mediation</strong> — third party proposes informally.</li>
          <li><strong>Conciliation</strong> — more formal commission, still non-binding in type.</li>
          <li><strong>Arbitration</strong> — binding award by a tribunal the parties choose (Hague PCA flavour; Palmas was arbitration).</li>
          <li><strong>Judicial settlement</strong> — ICJ (and other courts). ICJ jurisdiction is still consent-based: compromis, treaty clause, or optional clause Art. 36(2). Advisory opinions (Art. 65) are not binding in form but are heavy.</li>
          <li><strong>Regional agencies / UN organs</strong> — Security Council, General Assembly, regional organisations.</li>
        </ul>
        <p><strong>ICJ sketch (10-mark magnet):</strong> principal judicial organ; States only in contentious cases; applicable law Art. 38; Art. 59 no stare decisis; judgments binding between the parties and final (Art. 60) with limited interpretation/revision. Enforcement via Art. 94 and, in theory, the Security Council — politically leaky.</p>
        <p><strong>Close:</strong> the law prefers the ladder; force is the exceptional remainder. A 20-marker that only narrates a war fails; one that only lists Art. 33 without the Charter’s force prohibition also fails.</p>`,
        analogy: {
          title: "Incident response ladder before taking the other cluster down",
          body: "Art. 33 is escalating IR: talk, get logs (enquiry), bring a mediator, conciliate, then binding arbitration/ICJ. Chapter VII is paging the orchestrator. IHL is the rules of engagement if production combat still happens: do not target civilians, keep proportionality. Jus ad bellum is whether you may start the incident; jus in bello is how you fire once it has started."
        },
        diagram: {
          type: "flow",
          title: "Art. 33 ladder (write it)",
          steps: ["Negotiation", "Enquiry", "Mediation", "Conciliation", "Arbitration", "ICJ / regional / UN"]
        },
        mnemonic: {
          name: "NEMCAJ",
          hook: "Negotiate · Enquire · Mediate · Conciliate · Arbitrate · Judicial.",
          recite: "Jus ad bellum ≠ jus in bello. ICJ needs consent. Art. 2(4) is the war-side hook."
        },
        cases: [
          { name: "UN Charter Arts. 2(3), 2(4), 33, 94", citation: "primary text", point: "Settlement duty, force prohibition, methods ladder, ICJ enforcement sketch." },
          { name: "ICJ Statute Arts. 36, 38, 59, 65", citation: "jurisdiction, sources, no stare decisis, advisory", point: "The court-side short note." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the peaceful means of settlement of international disputes. What is the role of the ICJ?",
            outline: [
              "Art. 2(3)/33 list.",
              "Binding vs non-binding methods.",
              "ICJ: consent, Art. 38, Art. 59, advisory.",
              "One sentence on war/IHL so the heading’s first word is not ignored."
            ]
          }
        ],
        check: [
          "Can recite the Art. 33 methods in order.",
          "Can explain ICJ consent + Art. 59.",
          "Can distinguish jus ad bellum and jus in bello in two lines.",
          "Does not treat the ICJ as a world criminal court for individuals."
        ]
      },
      {
        id: "p-special",
        seq: 12,
        readAs: "Unit III · special topics",
        unit: 3,
        yield: "high",
        tags: ["hijacking", "narcotics", "aliens", "contraband", "blockade", "terrorism"],
        title: "Hijacking, narcotics, aliens, enemy character, contraband, blockade, terrorism",
        summary: "A cluster of short-note magnets: aerial hijacking conventions, narcotics traffic cooperation, treatment of aliens, enemy character in war, contraband and blockade, and terrorism as a transnational crime theme. One card, many 4–10 markers.",
        explainer: `<p>CCS parks several short notes in one heading. Do not write a 20-page mash. Write six labelled mini-essays, each with a definition, one instrument, and one exam line. If the question picks one, expand only that one.</p>
        <p><strong>1. Aerial hijacking.</strong> Unlawful seizure of aircraft. Tokyo 1963 (offences on board), Hague 1970 (unlawful seizure), Montreal 1971 (sabotage), later protocols and the Beijing 2010 update — <strong>VERIFY</strong> which convention the question’s year expects. Principle: aut dedere aut judicare (extradite or prosecute). Jurisdiction is engineered so the hijacker cannot shop a safe airport.</p>
        <p><strong>2. Narcotics traffic.</strong> Cooperation against illicit drugs: 1961 Single Convention, 1971 psychotropics, 1988 Vienna trafficking convention (the teaching trio). IL supplies criminalisation, jurisdiction, extradition, and mutual assistance; municipal police still arrest. Not a “war on drugs” essay.</p>
        <p><strong>3. Aliens.</strong> A State need not admit aliens, but once admitted, minimum standards of treatment (or national treatment, in the doctrinal fight) apply: no denial of justice, due process, compensation for expropriation in the foreign-investment neighbourhood. Diplomatic protection (nationality card) is the sending State’s tool. Expulsion must not be arbitrary; mass expulsion is suspect.</p>
        <p><strong>4. Enemy character.</strong> In war, enemy character of persons and goods matters for trading-with-the-enemy and prize. Tests taught: nationality, domicile, commercial domicile, control of companies. A neutral’s goods can take enemy character by how they are traded. Keep this inside IHL/neutrality; do not confuse with communal “enemy” rhetoric.</p>
        <p><strong>5. Contraband and blockade.</strong> <em>Contraband:</em> goods destined for the enemy which a belligerent may intercept (absolute vs conditional contraband in classical prize law; modern targeting and sanctions have overtaken some of the old lists). <em>Blockade:</em> a belligerent’s notification and effective prevention of access to enemy coasts — must be effective, non-discriminatory among neutrals, and declared. A paper blockade is not a blockade. UN Security Council sanctions are a different, Charter-based tool — say so.</p>
        <p><strong>6. Terrorism.</strong> No single universally agreed definition (the political-offence fight leaks in). Sectoral conventions (bombings, financing, nuclear, hijacking overlap) plus Security Council resolutions after 9/11 (e.g. 1373 flavour) impose criminalisation and cooperation duties. Distinction from lawful armed-conflict targeting is IHL. Do not write a security-studies rant; name “sectoral + cooperate or prosecute.”</p>`,
        analogy: {
          title: "Six microservices, one exam cluster",
          body: "Each short note is a microservice with its own schema (convention). Hijacking and narcotics are criminal-cooperation services (extradite-or-try). Aliens is an API-gateway treatment SLA. Enemy character / contraband / blockade are wartime packet-inspection rules. Terrorism is a mesh of sectoral firewalls because the cluster never agreed one definition file."
        },
        diagram: {
          type: "tree",
          title: "Special-topics rack",
          root: "Unit III cluster",
          branches: ["Hijacking conventions", "Narcotics trio", "Aliens min. standard", "Enemy character", "Contraband & blockade", "Terrorism sectoral treaties"]
        },
        mnemonic: {
          name: "H-N-A-E-C-T",
          hook: "Hijack · Narcotics · Aliens · Enemy character · Contraband/blockade · Terrorism.",
          recite: "Each: definition + one instrument + one principle. Aut dedere aut judicare repeats."
        },
        cases: [
          { name: "Hague Convention 1970 (hijacking)", citation: "plus Tokyo/Montreal — VERIFY set", point: "Unlawful seizure; extradite or prosecute." },
          { name: "1988 Vienna Narcotics Convention", citation: "with 1961/1971", point: "Cooperation architecture, not a municipal NDPS substitute." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Write short notes on any two: hijacking; blockade; treatment of aliens; terrorism.",
            outline: ["Pick two. Definition, instrument, one principle each. Do not mix blockade with UNSC sanctions without a sentence."]
          }
        ],
        check: [
          "Can deliver a 5-mark hijacking note with aut dedere aut judicare.",
          "Can define blockade as effective + declared, not a press release.",
          "Can state the aliens minimum-standard idea.",
          "Does not invent a single binding definition of terrorism."
        ]
      },
      {
        id: "p-sea",
        seq: 13,
        readAs: "Unit III · law of the sea",
        unit: 3,
        yield: "high",
        tags: ["unclos", "eez", "continental shelf", "territorial sea"],
        title: "Law of the Sea — belt, contiguous zone, EEZ, continental shelf",
        summary: "UNCLOS zones from the baseline out: internal waters, territorial sea (12 nm), contiguous zone (24 nm), EEZ (200 nm), continental shelf, high seas. Breadths, coastal-State rights, and innocent passage are the usual diagram-and-list ask.",
        explainer: `<p>Draw the belts first; then assign rights. UNCLOS 1982 is the constitution of the oceans for parties (India is a party). Custom still matters for non-parties on some rules. Measurements are from the <strong>baseline</strong> (normally the low-water line; straight baselines for deeply indented coasts — <em>Anglo-Norwegian Fisheries</em> 1951 is the teaching case).</p>
        <p><strong>Internal waters:</strong> landward of the baseline (ports, some bays). Full coastal sovereignty; no innocent passage as of right.</p>
        <p><strong>Territorial sea — 12 nautical miles</strong> (UNCLOS Art. 3 flavour). Coastal State sovereignty, subject to <strong>innocent passage</strong> of foreign ships (not prejudicial to peace, good order, or security — a list of non-innocent activities is in the Convention). Submarines must navigate on the surface and show the flag in the usual rule. Overflight is not innocent passage; that is air law / EEZ/high-seas overflight.</p>
        <p><strong>Contiguous zone — up to 24 nm</strong> from the baseline (Art. 33 flavour). Not extra sovereignty. Coastal State may prevent and punish infringement of customs, fiscal, immigration, or sanitary laws in its territory or territorial sea. Four-purpose police belt.</p>
        <p><strong>EEZ — up to 200 nm.</strong> Sovereign rights for exploring, exploiting, conserving, and managing living and non-living resources of the waters superjacent to the seabed and of the seabed and subsoil, plus jurisdiction over artificial islands, marine scientific research, and protection of the environment (Art. 56 flavour). Other States keep navigation, overflight, and cable/pipeline freedoms (Art. 58), compatible with the coastal State’s rights. EEZ is not high seas and not territorial sea — the exam’s favourite negative.</p>
        <p><strong>Continental shelf.</strong> Seabed and subsoil of the submarine areas beyond the territorial sea, throughout the natural prolongation of the land territory, to the outer edge of the continental margin, or to 200 nm where the margin is nearer (Art. 76 flavour — the geology/formula details are extra). Rights: explore and exploit mineral and sedentary species; they do <em>not</em> depend on occupation or express proclamation (<em>North Sea</em> + UNCLOS). Water column above a shelf beyond 200 nm is high seas if it is outside EEZs — do not stack EEZ water rights onto an extended shelf automatically.</p>
        <p><strong>High seas:</strong> residual area; freedoms of navigation, overflight, cables, fishing (subject to conservation), scientific research. Flag-State jurisdiction is the default. Deep seabed (the Area) beyond national jurisdiction is common heritage (Part XI) — a 5-mark extra.</p>
        <p><strong>India:</strong> Maritime Zones of India statutes implement belts; disputes (e.g. with neighbours) are fact-specific. Do not invent a boundary case unless you have it.</p>`,
        analogy: {
          title: "Firewall rings around the coast",
          body: "Baseline is the NIC. Internal waters: host-only. Territorial sea (12): sovereign LAN with a guest VLAN called innocent passage. Contiguous (24): customs IDS, not a second LAN. EEZ (200): you own the fisheries/minerals API, others still transit. Shelf: the disk under the sea, even if the water column further out is public internet (high seas). High seas: public internet with flag-State home ISPs."
        },
        diagram: {
          type: "stack",
          title: "UNCLOS belts from land seaward",
          layers: [
            "High seas / the Area (deep seabed)",
            "Continental shelf (seabed rights; may exceed 200 nm)",
            "EEZ — 200 nm (resources + limited jurisdiction)",
            "Contiguous zone — 24 nm (CFIS police)",
            "Territorial sea — 12 nm (sovereignty + innocent passage)",
            "Internal waters (landward of baseline)"
          ]
        },
        mnemonic: {
          name: "12-24-200",
          hook: "12 territorial · 24 contiguous · 200 EEZ. Shelf = seabed prolongation.",
          recite: "Innocent passage is a territorial-sea right. EEZ ≠ sovereignty. Contiguous is only CFIS (customs, fiscal, immigration, sanitary)."
        },
        cases: [
          { name: "Anglo-Norwegian Fisheries", citation: "ICJ 1951", point: "Straight baselines for a deeply indented coast; general direction of the coast." },
          { name: "North Sea Continental Shelf", citation: "ICJ 1969", point: "Shelf as natural prolongation; custom not automatically the treaty’s equidistance formula for all." },
          { name: "UNCLOS Arts. 3, 17–19, 33, 56–58, 76", citation: "verify numbers before the hall", point: "Breadths and rights. Quote from a printed extract if you can." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Explain the maritime zones under UNCLOS with reference to the territorial sea, contiguous zone, EEZ and continental shelf.",
            outline: [
              "Baseline + internal waters.",
              "12 nm + innocent passage.",
              "24 nm CFIS.",
              "200 nm EEZ rights vs freedoms of others.",
              "Shelf ≠ water column. High seas residual."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Innocent passage.",
            outline: ["Territorial sea. Not prejudicial to peace, good order, security. Not a right in internal waters. Not overflight."]
          }
        ],
        check: [
          "Can sketch 12 / 24 / 200 from memory.",
          "Can define innocent passage and where it does not apply.",
          "Can distinguish EEZ water rights from continental-shelf seabed rights.",
          "Knows contiguous zone is not extra territorial sea."
        ]
      }
    ]
  };
})(window);
