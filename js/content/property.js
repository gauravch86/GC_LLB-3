(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k3004 = {
    id: "k3004",
    code: "K-3004",
    title: "Law of Property and Easement",
    short: "Property",
    blurb: "TPA preliminaries through actionable claims, plus the Indian Easements Act — original section-ladder cards on Mulla TPA plus the college commentary (Shukla / Tripathi class of books).",
    shelf: {
      primary: "Mulla, Transfer of Property Act + S.N. Shukla / G.P. Tripathi college TPA text. Bare: Transfer of Property Act, 1882; Indian Easements Act, 1882"
    },
    youtube: [
      { title: "TPA transfer and 53A", search: "Transfer of Property Act section 53A part performance" },
      { title: "Types of mortgage", search: "Types of mortgage TPA simple English usufructuary" },
      { title: "Easements essentials", search: "Indian Easements Act prescription easement" }
    ],
    topics: [
      {
        id: "pr-prelim",
        seq: 1,
        readAs: "Ss. 1–4",
        unit: 1,
        yield: "standard",
        tags: ["tpa", "preliminary", "definitions", "immovable"],
        title: "Preliminary — TPA Ss. 1–4",
        summary: "Commencement, territorial extent, and the definition/interpretation kit that every later answer quietly uses. Immovable property, instrument, attested, registered, and the s. 4 stitching to the Registration, Contract, and Evidence Acts are problem-question vocabulary.",
        explainer: `<p>The Transfer of Property Act, 1882 is not a complete code of all property. It mainly regulates <em>transfer of property by act of parties</em> (not by operation of law such as inheritance, insolvency, or execution sale — those have other statutes). Open a prelim essay with that negative. Ss. 1–4 look humble; they decide whether the Act applies and what the later sections’ words mean.</p>
        <p><strong>s. 1.</strong> Short title, commencement, extent. The Act extends to the whole of India except as notified historically (the “except the territories” story is now mostly academic after extension; <em>do not recite a 19th-century map from memory</em>). It is prospective in the usual way; a transfer is tested by the law in force when it is made.</p>
        <p><strong>s. 2 saving.</strong> The Act does not affect certain transfers (e.g. by operation of law, or as otherwise saved — quote the clauses you need). Muslim personal-law gifts and wakfs often live on their own card in K-3001; TPA still matters when the transfer is a TPA species (sale, mortgage, lease) between Muslims. Do not flatten hiba into s. 122 without the Family Law distinction.</p>
        <p><strong>s. 3 definitions — the ones that earn marks:</strong></p>
        <ul>
          <li><strong>Immovable property:</strong> the Act does not define it exhaustively; it says it does <em>not</em> include standing timber, growing crops, or grass. The General Clauses Act / Registration Act neighbourhood supplies the positive (land, benefits to arise out of land, things attached to the earth). The standing-timber vs tree-as-immovable fight is a classic short note: timber intended to be cut soon is movable for this purpose; a tree enjoying the soil as land is not.</li>
          <li><strong>Instrument:</strong> a non-testamentary document. Wills are outside TPA’s “instrument” for many purposes — they are wasiyat / ISA, not s. 5 transfers inter vivos.</li>
          <li><strong>Attested:</strong> two or more witnesses have seen the executant sign (or received a personal acknowledgement) and have signed in the executant’s presence — the statutory idea. Mortgage and gift of immovable property care about this.</li>
          <li><strong>Registered:</strong> registered under the Registration Act, 1908 (s. 3’s meaning). Compulsory registration of non-testamentary instruments relating to immovable property of value ≥ ₹100 is Registration Act s. 17 — TPA sale/mortgage/lease/gift sections hook into that.</li>
          <li><strong>Actionable claim:</strong> defined here, taught with ss. 130–137. A claim to an unsecured debt or to a beneficial interest in movable property not in possession. Not a mere right to sue for damages in the tort sense as taught — be precise from the section.</li>
        </ul>
        <p><strong>s. 4.</strong> The chapters and sections of TPA that relate to contracts are to be taken as part of the Indian Contract Act; the Registration Act and TPA are to be read together. This is why a sale is both a transfer (s. 54) and a contract (price, consent). Evidence Act presumptions on registered documents sit in the same toolkit.</p>
        <p><strong>Exam use:</strong> before you write s. 53A or s. 58, spend 30 seconds asking: is this immovable? is there an instrument? must it be attested/registered? If you skip prelim vocabulary, the problem facts were wasted.</p>`,
        analogy: {
          title: "Header file for the rest of the Act",
          body: "Ss. 1–4 are the includes and typedefs. Immovable property is the core type (with standing timber carved out). Instrument / attested / registered are the serialization flags later sections require. s. 4 #includes the Contract Act and Registration Act so sale is not a floating verb. Inheritance is a different binary — TPA does not link it."
        },
        diagram: {
          type: "tree",
          title: "Prelim toolkit",
          root: "TPA ss. 1–4",
          branches: ["Extent & savings", "Immovable (minus timber/crops/grass)", "Attested / registered", "s.4 stitches Contract + Registration"]
        },
        mnemonic: {
          name: "E-D-S",
          hook: "Extent · Definitions (immovable, attest, register) · Stitch to other Acts (s. 4).",
          recite: "TPA = transfers by act of parties. Standing timber is the definition trap. Wills are not s. 5 transfers."
        },
        cases: [
          { name: "TPA s. 3 — immovable property", citation: "Act text + GCA/Registration neighbourhood", point: "Negative definition; standing timber/growing crops/grass excluded. Do not invent a complete positive list from folklore." },
          { name: "Registration Act s. 17", citation: "compulsory registration hook", point: "Value ≥ ₹100 non-testamentary immovable instruments — the practical twin of TPA formality sections." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "What is immovable property for the purposes of the TPA? Why do ss. 3–4 matter?",
            outline: [
              "Negative definition + GCA positive flavour.",
              "Standing timber short note.",
              "Attested/registered as later hooks.",
              "s. 4: Contract Act + Registration Act.",
              "TPA does not govern inheritance."
            ]
          }
        ],
        check: [
          "Can state what TPA does not govern (operation of law / wills as such).",
          "Can handle standing timber.",
          "Knows attested vs registered.",
          "Can explain s. 4 in one sentence."
        ]
      },
      {
        id: "pr-transfer",
        seq: 2,
        readAs: "Ss. 5–53A",
        unit: 1,
        yield: "high",
        tags: ["transfer", "53a", "lis pendens", "election", "s.6"],
        title: "Transfer of property — Ss. 5–37 & immovable Ss. 38–53A",
        summary: "What a transfer is (s. 5), what cannot be transferred (s. 6), who can transfer (s. 7), conditions and election, then the immovable-property special rules through lis pendens (s. 52), fraudulent transfer (s. 53), and part-performance (s. 53A). This is the conceptual engine of the paper.",
        explainer: `<p>This is too many sections for one dump. In the hall, write a <em>ladder</em> and expand the rungs the question names. The ladder: s. 5 definition → s. 6 non-transferables → s. 7 competency → ss. 10–17 conditions/restraints → ss. 35–37 election/apportionment → ss. 38–53A immovable specials (including 41 ostensible owner, 52 lis pendens, 53 fraud, 53A part-performance).</p>
        <p><strong>s. 5.</strong> Transfer of property is an act by which a living person conveys property, in present or in future, to one or more other living persons, or to himself and those persons. Living person includes a company, association, or body of individuals. Conveyance inter vivos — not a will. “In future” allows a transfer of property that will exist (spes vs true future property is a commentary fight; s. 6(a) blocks a mere chance of succession).</p>
        <p><strong>s. 6 — cannot transfer (high-yield list):</strong> (a) mere chance of an heir apparent (spes successionis); (c) mere right of re-entry (except with the land); (d) mere right of easement apart from the dominant heritage; (e) mere right to sue; (h) public office / salary of a public officer as specified; (i) stipends/pensions as specified. Others: unlawfully restricted interests, occupancy rights as saved. If the problem is “A expects to inherit from B, assigns that hope,” s. 6(a) is the answer, not a moral essay.</p>
        <p><strong>s. 7.</strong> Persons competent to contract (Contract Act) may transfer, so far as they are entitled to transferable property. A minor cannot transfer (void); a charge created by a guardian needs the personal-law/GWA frame. s. 8: unless a different intention, the transfer passes all the interest the transferor is then capable of passing, with legal incidents (rents, easements attached, etc.).</p>
        <p><strong>Conditions (ss. 10–34 flavour — pick what the question asks):</strong> s. 10 restraints on alienation (absolute restraint void, partial often good); s. 11 restrictions repugnant to the interest created; s. 13–14 transfer for the benefit of an unborn person and the rule against perpetuity (18 years after life in being + gestation in the Indian formulation — <em>quote s. 14</em>); s. 19–21 vested vs contingent; s. 35 election (take under the instrument or against it, not both).</p>
        <p><strong>Immovable specials you must be able to fire:</strong></p>
        <ul>
          <li><strong>s. 41 ostensible owner:</strong> transfer by a person who appears to be owner, with the real owner’s consent, for value, with the transferee taking reasonable care to verify title — protected. Benami overlay is a later statute; do not mix blindly.</li>
          <li><strong>s. 52 lis pendens:</strong> during a pending suit in which any right to immovable property is directly and specifically in question, the property cannot be transferred or otherwise dealt with by any party so as to affect the rights of any other party, except under authority of the court. The transferee pendente lite is bound. It is not a freeze that makes the deed void; it makes it <em>subservient</em> to the result of the litigation.</li>
          <li><strong>s. 53 fraudulent transfer:</strong> transfer with intent to defeat or delay creditors is voidable at the creditors’ option; subsequent transferee in good faith and for consideration is protected as the section provides. (2) transfer without consideration with intent to defraud a subsequent transferee is voidable at the subsequent transferee’s option.</li>
          <li><strong>s. 53A part-performance:</strong> where a transferor contracts in writing to transfer immovable property for consideration, the writing is signed, the transferee has performed or is willing to perform his part, and has taken possession (or continued in possession and done some act in furtherance), then the transferor or anyone claiming under him is debarred from enforcing any right in respect of the property other than a right expressly provided by the contract — even if the contract is not registered / the transfer is not completed in the form the Act requires. It is a <em>shield</em>, not a sword: the transferee cannot sue for title on 53A alone (post-2001 Registration Act / TPA amendments made the writing compulsorily registrable in the teaching — <strong>VERIFY</strong> the current “registered instrument” requirement in s. 53A’s text before the hall). <em>Nathulal v. Phoolchand</em> and <em>Shrimant Shamrao Suryavanshi</em> are often taught — pin the proposition you actually need.</li>
        </ul>
        <p><strong>Close:</strong> s. 5 is the engine; s. 6 is the negative list; 52 and 53A are the two problem-question kings. If the question is “doctrine of election” or “perpetuity,” do those rungs and do not narrate 53A for comfort.</p>`,
        analogy: {
          title: "Assigning an object in a live system",
          body: "s. 5 is a live assignment of an object from one process to another (not a will cron). s. 6 is the type system: you cannot assign a spes, a bare right to sue, or a public office. s. 52 is a lockfile while a title lawsuit is open — you may copy the file but the court’s merge wins. s. 53A is equitable estoppel: if you let the buyer into the repo and took the consideration under a written contract, you cannot evict just because the final registered commit never landed (shield, not a title-issuing sword)."
        },
        diagram: {
          type: "flow",
          title: "Transfer ladder (expand the asked rungs)",
          steps: ["s.5 what is a transfer", "s.6 what cannot pass", "s.7 who may transfer", "ss.10–35 conditions/election", "ss.41–53A ostensible, lis pendens, fraud, 53A"]
        },
        mnemonic: {
          name: "5-6-7-52-53A",
          hook: "Define · Cannot · Competency · Lis pendens · Part-performance.",
          recite: "53A is a defence, not a conveyance. 52 binds the pendente-lite purchaser. 6(a) kills heir-apparent assignments."
        },
        cases: [
          { name: "TPA ss. 5, 6, 52, 53A", citation: "India Code — quote", point: "Primary authorities are the sections. Cases illustrate; they do not replace the text." },
          { name: "Nathulal v. Phoolchand / Shamrao line on 53A", citation: "VERIFY the citation you use", point: "Part-performance as a shield; willingness to perform; possession. Check the post-amendment registration requirement in the current s. 53A." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define transfer of property. What may and may not be transferred? Explain lis pendens or part-performance (as asked).",
            outline: [
              "s. 5 + living person + not a will.",
              "s. 6 list with one hypo (spes).",
              "s. 7 competency.",
              "Either s. 52 (subservient, not void) or s. 53A (shield; writing; possession; VERIFY registration).",
              "Close answering the exact doctrine named."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Section 53A TPA.",
            outline: ["Ingredients from the section. Shield not sword. Current registration requirement — VERIFY. One case."]
          }
        ],
        check: [
          "Can write s. 5 in substance from memory.",
          "Can list five s. 6 bars.",
          "Can explain lis pendens without saying the sale is void.",
          "Can recite 53A ingredients and the shield/sword distinction."
        ]
      },
      {
        id: "pr-sale",
        seq: 3,
        readAs: "Ss. 54–57",
        unit: 2,
        yield: "high",
        tags: ["sale", "section 54", "contract for sale"],
        title: "Sale of immovable property — Ss. 54–57",
        summary: "Sale is a transfer of ownership in exchange for a price. How it is made (registered instrument where required), contract for sale vs sale, and the s. 55 rights/liabilities of buyer and seller. Marshalling (s. 56) is the usual extra.",
        explainer: `<p><strong>s. 54 definition.</strong> Sale is a transfer of ownership in exchange for a price paid or promised or part-paid and part-promised. That is the whole of the first sentence — ownership + price (money). If the consideration is another thing, you are in exchange (s. 118), not sale.</p>
        <p><strong>How a sale is made (the exam distinction):</strong> for <em>tangible immovable property of value ₹100 or more</em>, sale can be made <strong>only by a registered instrument</strong>. For lesser value, sale may be by a registered instrument <em>or</em> by delivery of possession. Reversion or other intangible immovable property: only by a registered instrument, regardless of value. A “contract for sale” is a contract that a sale shall take place on terms settled; it <strong>does not, of itself, create any interest in or charge on</strong> the property. This is the Indian rejection of English equitable estate from a mere contract. The buyer under an unregistered agreement may have 53A (if ingredients met) and a personal contract, not TPA ownership.</p>
        <p><strong>s. 55 rights and liabilities — write as two columns (seller / buyer) and pick four that fit the facts:</strong> seller must disclose material defects in title/property that the buyer could not discover with ordinary care; produce title documents; answer questions; execute a proper conveyance; take care of the property between contract and delivery; give possession; pay public charges/rent up to the date of sale as provided. After conveyance, the seller’s remaining duties include holding out as to title in the way the section states. Buyer must disclose facts that materially increase the value of the seller’s interest (the rare “buyer’s disclosure”); pay the price; bear loss after ownership passes; pay public charges after that point. Ownership/risk timing follows the section and the contract — do not import Sale of Goods Act blindly onto land.</p>
        <p><strong>s. 56 marshalling.</strong> If the owner of two properties sells one which is subject to a common mortgage, the buyer can, in the absence of a contract to the contrary, insist that the mortgagee satisfy himself out of the other property so far as it will go — marshalling as between buyer and mortgagee, subject to not prejudicing the mortgagee or other persons. s. 57: provision by court for incumbrances, and discharge out of sale proceeds — a quieter 5-mark.</p>
        <p><strong>Registration / fraud hypos.</strong> Two registered sales: priority is generally the first registered (Registration Act s. 47/49 neighbourhood + TPA), not the first signed in a drawer. Part-performance and lis pendens leak in from the previous card when the sale is incomplete or mid-suit.</p>`,
        analogy: {
          title: "Ownership commit vs a ticket that a commit will happen",
          body: "s. 54 sale is the git commit that moves ownership for a price. The contract for sale is a ticket in the issue tracker: it does not, by itself, change who owns the repo (no English equitable estate). Registration is the signed tag required when the land is worth ≥ ₹100. s. 55 is the seller/buyer SLA (disclose defects, deliver possession, pay the price). 53A is a lock that can stop eviction even if the commit never got the tag — still not a title commit."
        },
        diagram: {
          type: "compare",
          title: "Sale vs contract for sale (s. 54)",
          headers: ["", "Sale", "Contract for sale"],
          rows: [
            ["What passes", "Ownership (if formality met)", "No interest or charge by itself"],
            ["Form (≥ ₹100 tangible immovable)", "Registered instrument only", "Contract Act writing/registration as applicable; not a conveyance"],
            ["Buyer’s land right", "Owner (plus s. 55)", "Personal + maybe 53A shield"]
          ]
        },
        mnemonic: {
          name: "OWN-PRICE-REG",
          hook: "Ownership · Price · Registered deed if ≥ ₹100 tangible immovable.",
          recite: "Contract for sale creates no interest. s. 55 is a disclosure-and-duties table. Marshalling is s. 56."
        },
        cases: [
          { name: "TPA s. 54", citation: "India Code", point: "The distinction between sale and contract for sale is in the section — quote it." },
          { name: "s. 55 illustration cases in Mulla", citation: "use your commentary’s named case", point: "Non-disclosure of a material defect is the usual hypo. Do not invent a citation." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define sale. How is a sale of immovable property made? Distinguish a contract for sale. Discuss rights and liabilities of seller and buyer.",
            outline: [
              "s. 54 definition (ownership + price).",
              "Formality by value/type.",
              "Contract for sale creates no interest.",
              "s. 55 table (4–5 duties each).",
              "s. 56 marshalling if time; 53A leak if facts are incomplete conveyance."
            ]
          }
        ],
        check: [
          "Can quote the ‘no interest or charge’ sentence in substance.",
          "Knows the ₹100 registered-instrument rule.",
          "Can list three seller and three buyer s. 55 duties.",
          "Does not treat an agreement to sell as a sale."
        ]
      },
      {
        id: "pr-mortgage",
        seq: 4,
        readAs: "Ss. 58–104",
        unit: 2,
        yield: "high",
        tags: ["mortgage", "charge", "redemption", "s.58"],
        title: "Mortgages and charges — Ss. 58–104",
        summary: "s. 58 defines mortgage and names six forms. Rights of mortgagor (including redemption — once a mortgage, always a mortgage) and of mortgagee (sale, foreclosure, possession) follow. A charge (s. 100) is not a mortgage. Diagram the six forms every time.",
        explainer: `<p><strong>s. 58(a).</strong> A mortgage is the transfer of an interest in specific immovable property for the purpose of securing the payment of money advanced or to be advanced by way of loan, an existing or future debt, or the performance of an engagement which may give rise to a pecuniary liability. Transfer of an <em>interest</em> (not necessarily ownership), in <em>specific immovable property</em>, for <em>security</em>. If there is no transfer of interest, you may have a charge (s. 100) or a mere contract.</p>
        <p><strong>Six forms — s. 58(b)–(g). Draw this table in the first five minutes:</strong></p>
        <ul>
          <li><strong>Simple mortgage (b):</strong> no possession; mortgagor binds himself personally and agrees that the mortgagee may cause the property to be sold. No foreclosure. Sale through court in the usual path.</li>
          <li><strong>Mortgage by conditional sale (c):</strong> ostensible sale with a condition that on default the sale becomes absolute, or on payment the buyer will retransfer, or that the sale is void on payment. Must be in one document (proviso) — two documents tend to be a sale plus a contract to reconvey. Remedy flavour: foreclosure, not sale, in the statutory scheme.</li>
          <li><strong>Usufructuary mortgage (d):</strong> possession to the mortgagee, who takes rents/profits in lieu of interest, or of principal, or both, until repayment. Typically no personal covenant and no sale/foreclosure in the pure form — the security pays itself down. Possession is the soul of this form.</li>
          <li><strong>English mortgage (e):</strong> mortgagor binds himself to repay on a certain date and transfers the property absolutely to the mortgagee, subject to a proviso that the mortgagee will retransfer upon payment. Personal covenant + absolute transfer with reconveyance. Remedy: sale.</li>
          <li><strong>Mortgage by deposit of title deeds (f) / equitable mortgage in English talk:</strong> in specified towns (s. 58(f) list — <em>quote current towns from the Act</em>), a person delivers documents of title with intent to create a security. No registered deed required for creation (the deposit is the act); later Central/State registration overlays exist for some records — <strong>VERIFY</strong> current formality if the problem is in 2026 practice.</li>
          <li><strong>Anomalous mortgage (g):</strong> anything else — a combination, or a local form. Rights are as the deed and the Act’s analogical provisions say.</li>
        </ul>
        <p><strong>Mortgagor’s rights (ss. 60–66 flavour):</strong> <strong>s. 60 redemption</strong> — after the principal money has become due, the mortgagor may redeem by paying, and is entitled to the mortgage-deed and the property. Clog on the equity of redemption is void (once a mortgage, always a mortgage). Partial redemption is restricted as the section provides. Accession, improvements, inspection of documents — the rest of the mortgagor cluster.</p>
        <p><strong>Mortgagee’s rights (ss. 67–77 flavour):</strong> foreclosure or sale as the form allows; possession in some forms; appointment of receiver; accession. s. 69 private sale under a power of sale in the deed (English/simple in specified cases) is a statutory exceptional path — read the conditions. Marshalling and contribution among multiple properties/mortgagees (ss. 81–82) are 10-mark magnets.</p>
        <p><strong>s. 100 charge:</strong> where immovable property is made security for the payment of money, and the transaction is <em>not</em> a mortgage, a charge is created. No transfer of interest in the s. 58 sense. Enforceable against the property in the hands of a transferee with notice, as the section states. Tacking and priority follow the chapter’s rules. A charge is not a licence to skip s. 58’s six boxes.</p>`,
        analogy: {
          title: "Six security plugins on the same land object",
          body: "A mortgage is a security interest plugin: you do not always transfer the whole object (simple), sometimes you hand over the running yield (usufructuary), sometimes you fake a sale (conditional sale), sometimes you do a full transfer with a reconveyance promise (English), sometimes you just lodge the title USB stick in a notified town (deposit). Redemption is the owner’s right to uninstall the plugin by paying — you cannot contract to throw that uninstaller away (clog). A charge is a lighter lien flag without a s. 58 transfer of interest."
        },
        diagram: {
          type: "compare",
          title: "Six mortgages (s. 58)",
          headers: ["Form", "Possession?", "Typical remedy"],
          rows: [
            ["Simple", "No", "Sale (not foreclosure)"],
            ["Conditional sale", "Usually no", "Foreclosure (one-document rule)"],
            ["Usufructuary", "Yes — essential", "Rents till repaid; no sale/foreclosure in pure form"],
            ["English", "Often", "Sale; personal covenant + reconveyance"],
            ["Deposit of title deeds", "No (deeds deposited)", "Sale; specified towns"],
            ["Anomalous", "As deed", "As deed + Act"]
          ]
        },
        mnemonic: {
          name: "SCUE-DA",
          hook: "Simple · Conditional sale · Usufructuary · English · Deposit · Anomalous.",
          recite: "s. 60 redemption cannot be clogged. Charge (s. 100) ≠ mortgage. One document for conditional sale."
        },
        cases: [
          { name: "TPA s. 58", citation: "six definitions — quote", point: "The forms are statutory. Match facts to a letter (b)–(g) before you narrate Mulla’s stories." },
          { name: "Clog on redemption", citation: "s. 60 + classic equity", point: "Once a mortgage, always a mortgage. A term that makes redemption impossible or illusory is bad." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define mortgage. Explain the different kinds of mortgage. Distinguish a charge.",
            outline: [
              "s. 58(a) definition.",
              "Six forms table with possession and remedy.",
              "s. 60 redemption / clog.",
              "s. 100 charge.",
              "One priority/marshalling sentence if time."
            ]
          },
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Usufructuary mortgage and mortgage by conditional sale.",
            outline: ["Possession vs ostensible sale. Remedies. One-document rule for (c)."]
          }
        ],
        check: [
          "Can write s. 58(a) in substance.",
          "Can fill a six-row table (possession + remedy).",
          "Can explain clog on redemption.",
          "Can distinguish charge from mortgage."
        ]
      },
      {
        id: "pr-lease",
        seq: 5,
        readAs: "Ss. 105–117",
        unit: 2,
        yield: "high",
        tags: ["lease", "licence", "forfeiture", "s.105"],
        title: "Leases — Ss. 105–117",
        summary: "A lease is a transfer of a right to enjoy immovable property for a term, in consideration of rent or premium. Duration, lessor/lessee duties, determination (including forfeiture and notice), and holding over. Contrast lease with licence (Associated Hotels).",
        explainer: `<p><strong>s. 105.</strong> A lease of immovable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised (premium) or of money, a share of crops, service or any other thing of value, to be rendered periodically or on specified occasions (rent), to the transferor by the transferee (who accepts). Lessor, lessee, premium, rent are defined in the same section. The thing transferred is a <em>right to enjoy</em>, not ownership (contrast sale) and not a mere personal permission (contrast licence).</p>
        <p><strong>s. 106 duration in the absence of a contract:</strong> lease for agricultural/manufacturing purposes — year to year, terminable by six months’ notice; other purposes — month to month, fifteen days’ notice. Notice must expire with the end of a year or month of the tenancy as the section requires. State amendments exist — CCS/UP students should <strong>VERIFY</strong> any U.P. tweak to notice periods before treating 15 days as universal in a local problem.</p>
        <p><strong>s. 107 how made:</strong> lease of immovable property from year to year, or for a term exceeding one year, or reserving a yearly rent, can be made only by a registered instrument. Other leases: registered instrument or oral agreement plus possession. Delivery of a counterpart, execution by both — the section’s formalities. An unregistered lease that needed registration may still operate as a month-to-month relationship in some case-law; do not over-claim — use 53A/possession facts carefully.</p>
        <p><strong>Rights/liabilities (ss. 108–109).</strong> s. 108 is a default code if the lease is silent: lessor’s duty to disclose material defects, to give possession, and a covenant for quiet enjoyment; lessee’s duties to disclose facts increasing the lessor’s interest, to pay rent, to keep the property reasonably habitable, not to use for a purpose other than that for which it was leased, not to attach a permanent structure without consent, to restore on expiry. s. 108(j) assignment: lessee may transfer absolutely or by sub-lease unless the contract restricts — a favourite hypo. s. 109: transferee of the lessor’s interest steps into rent/reversion.</p>
        <p><strong>Determination — s. 111 list (write it):</strong> by efflux of time; by happening of a specified event; merger; notice of termination as provided; express surrender; implied surrender; forfeiture (breach of a condition and the lessor doing some act showing an intention to determine — plus the s. 114 relief against forfeiture of tenancy for non-payment of rent); notice to quit after holding over, etc. <strong>s. 116 holding over:</strong> if the lessee remains in possession and the lessor accepts rent or otherwise assents, the lease is renewed from year to year or month to month as in s. 106, in the absence of an agreement to the contrary.</p>
        <p><strong>Lease vs licence.</strong> Licence (Easements Act s. 52) is a permission to do something on the licensor’s land which would otherwise be unlawful; it is personal, generally revocable, creates no interest. Lease creates an interest and a right to enjoy to the exclusion of the lessor as provided. <em>Associated Hotels of India v. R.N. Kapoor</em> AIR 1959 SC 1262 is the teaching case: look at the substance (exclusive possession, rent, intention) not the label. A “licence deed” that gives exclusive possession at a rent is often a lease.</p>`,
        analogy: {
          title: "Time-boxed exclusive handle vs a guest token",
          body: "A lease hands the tenant an exclusive handle to enjoy the machine for a term, billed as rent/premium. s. 107 is when that handle must be a registered instrument. A licence is a guest token: you may be on the premises, you do not own a slot in the process table, and the admin can usually revoke. Associated Hotels: we inspect exclusive possession and rent, not the filename of the deed. Holding over (s. 116) is the cron that renews the handle when the landlord accepts another rent packet."
        },
        diagram: {
          type: "decision",
          title: "Lease or licence?",
          q: "Exclusive possession + rent + intention to create an interest?",
          yes: "Lease (s. 105) — even if the paper says ‘licence’.",
          no: "Licence (Easements Act s. 52) — personal permission, generally revocable."
        },
        mnemonic: {
          name: "105-106-107-111-116",
          hook: "Define · Default duration/notice · Formality · Determination list · Holding over.",
          recite: "Right to enjoy, not ownership. Associated Hotels: substance over label. s. 114: relief against forfeiture for rent."
        },
        cases: [
          { name: "Associated Hotels of India Ltd. v. R.N. Kapoor", citation: "AIR 1959 SC 1262", point: "Exclusive possession is the strongest indicator of a lease; the document’s label is not conclusive." },
          { name: "TPA ss. 105–107, 111, 116", citation: "India Code", point: "Definition, notice, form, death-of-the-lease list, holding over." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define lease. How is it different from licence? How is a lease determined?",
            outline: [
              "s. 105.",
              "s. 107 formality + s. 106 default notice.",
              "Associated Hotels test.",
              "s. 111 list + forfeiture + s. 114.",
              "s. 116 holding over."
            ]
          }
        ],
        check: [
          "Can write s. 105 without calling a lease a sale.",
          "Knows year-to-year vs month-to-month default notices.",
          "Can apply Associated Hotels.",
          "Can list five modes of determination."
        ]
      },
      {
        id: "pr-exchange",
        seq: 6,
        readAs: "Ss. 118–121",
        unit: 3,
        yield: "standard",
        tags: ["exchange", "s.118"],
        title: "Exchange — Ss. 118–121",
        summary: "Exchange is a mutual transfer of the ownership of one thing for the ownership of another — sale rules apply with modifications. Short but clean: definition, money as part-price, parties’ duties, and the difference from sale.",
        explainer: `<p><strong>s. 118.</strong> When two persons mutually transfer the ownership of one thing for the ownership of another, neither thing or both things being money only, the transaction is called an exchange. A transfer of property in completion of an exchange can be made only in the manner provided for the transfer of such property by sale. That last sentence is the formality hook: if you exchange plots worth more than ₹100, you need the registered-instrument discipline of s. 54, on both sides as required.</p>
        <p><strong>Not a sale.</strong> Sale is ownership for a <em>price</em> (money). Exchange is ownership for ownership. If A conveys land to B for B’s land plus ₹50,000 boot, it is still taught as exchange with a money difference, not as two independent sales, so long as the substance is a mutual swap of things — follow s. 118’s “neither thing or both things being money only.” A pure money-for-money is not this section (that is currency, not TPA exchange of property).</p>
        <p><strong>s. 119.</strong> Each party has the rights and is subject to the liabilities of a seller as to what he gives and of a buyer as to what he takes. That is why you import s. 55 duties (disclosure, title, possession) rather than inventing an exchange code. If the title to one thing fails, the other party’s remedies follow the section (return / compensation as provided) — quote rather than guess the exact restoration rule in the hall.</p>
        <p><strong>s. 120.</strong> The money difference, if any, is a price as to which the party paying it has a seller’s/buyer’s position as the section states — do not ignore boot money; it can carry a charge-like flavour in commentary. <strong>s. 121</strong> exchange of money is excluded from some warranty rules as specified (a quiet clause).</p>
        <p><strong>Problem flavour:</strong> one deed swapping two houses; one title is defective; is it exchange or two sales; what formality; what remedy. Keep the answer under two pages — this is a 10-marker pretending to be a 20.</p>`,
        analogy: {
          title: "Pointer swap, not a purchase order",
          body: "Sale is paying currency to move a pointer. Exchange is swapping two pointers in one transaction. Formality: each pointer-move of land still needs the sale-shaped registered commit. s. 119 says each side wears the seller hat for the object leaving and the buyer hat for the object arriving — so s. 55 disclosure still applies. Boot money is a small invoice attached to the swap."
        },
        diagram: {
          type: "compare",
          title: "Sale vs exchange",
          headers: ["", "Sale s. 54", "Exchange s. 118"],
          rows: [
            ["Consideration", "Price (money)", "Another thing’s ownership (boot money allowed)"],
            ["Formality", "s. 54", "As for sale of that property"],
            ["Duties", "s. 55", "s. 119 imports seller/buyer liabilities"]
          ]
        },
        mnemonic: {
          name: "SWAP-AS-SALE",
          hook: "Mutual ownership swap. Complete it as you would a sale. Import s. 55 via s. 119.",
          recite: "Not money-for-money. Defective title: s. 119 remedy, not a guess."
        },
        cases: [
          { name: "TPA ss. 118–119", citation: "India Code", point: "Definition + sale-manner completion + imported seller/buyer liabilities." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Exchange of property.",
            outline: ["s. 118 definition.", "Formality as for sale.", "s. 119 duties.", "Distinguish sale (price)."]
          }
        ],
        check: [
          "Can define exchange without calling it a sale.",
          "Knows formality follows sale rules.",
          "Knows s. 119 imports s. 55-type duties.",
          "Can handle a boot-money hypo in one sentence."
        ]
      },
      {
        id: "pr-gift",
        seq: 7,
        readAs: "Ss. 122–129",
        unit: 3,
        yield: "high",
        tags: ["gift", "tpa gift", "s.122", "s.123"],
        title: "Gifts — Ss. 122–129",
        summary: "TPA gift is a transfer without consideration, accepted by or on behalf of the donee. Immovable property: registered instrument signed and attested. Distinguish TPA gift from Muslim hiba when Family Law–II cross-fires.",
        explainer: `<p><strong>s. 122.</strong> Gift is the transfer of certain existing movable or immovable property made voluntarily and without consideration, by one person, called the donor, to another, called the donee, and accepted by or on behalf of the donee. Acceptance must be during the donor’s lifetime and while he is still capable of giving. If the donee dies before acceptance, the gift is void. Existing property — a gift of future property is void (s. 124). This is inter vivos; a will is not a s. 122 gift.</p>
        <p><strong>s. 123 how made.</strong> Immovable property: gift only by a registered instrument signed by or on behalf of the donor and attested by at least two witnesses. Movable property: registered instrument or delivery. Contrast hiba: Muslim law of gifts (K-3001) insists on declaration, acceptance, <em>and delivery of possession</em>, and the 1937 Act can keep hiba off s. 123’s registration-as-essence track. If the problem is two Muslims and a house, do not automatically “save” a failed hiba by citing a registered TPA deed, or kill a valid hiba for want of TPA attestation, without walking the applicability card. s. 129 saves Muslim-law donations from this chapter to the extent provided — <em>read s. 129</em>; it is the statutory flag for the cross-paper question.</p>
        <p><strong>s. 126 suspension or revocation.</strong> A gift may be revoked if the donor and donee agree that it shall be suspended or revoked on the happening of a specified event which does not depend on the donor’s will (a condition subsequent of a permitted kind). A gift cannot be revoked at the donor’s mere whim once complete (unlike some incomplete hiba stages). Failure of consideration is not a revocation ground because there is no consideration. Fraud, undue influence, coercion: Contract Act rescission neighbourhood, not s. 126’s special clause.</p>
        <p><strong>s. 125 onerous gift.</strong> If a gift is in one package of several things, some onerous, the donee cannot take the beneficial and refuse the onerous unless the gift is separable as the section provides. s. 127: onerous gift to a disqualified person. s. 128: universal donee’s liability for the donor’s debts to the extent of the property. These are 5-mark extras that look like 20-mark traps.</p>
        <p><strong>Void gifts:</strong> future property (s. 124); gift to the public for an uncertain non-charitable purpose may fail for uncertainty (compare wakf’s object rules — different paper). Conditional gifts that restrain alienation absolutely will fight s. 10.</p>`,
        analogy: {
          title: "Zero-price transfer with a signed tag",
          body: "s. 122 is an inter-vivos copy of an existing object at price 0, with an accept() during the donor’s lifetime. Immovable: the copy is not valid unless a registered, attested instrument (s. 123). Hiba is a different protocol (possession handshake) saved in part by s. 129. s. 126: you may program a condition subsequent; you may not keep a revoke-at-pleasure button after the copy completed. Onerous gift: you cannot cherry-pick the good files in one tarball."
        },
        diagram: {
          type: "compare",
          title: "TPA gift vs Muslim hiba",
          headers: ["", "TPA ss. 122–123", "Hiba (K-3001)"],
          rows: [
            ["Consideration", "None", "None"],
            ["Immovable formality", "Registered attested instrument", "Declaration, acceptance, possession (s. 129 save)"],
            ["Revocation", "Limited (s. 126)", "Wider before possession; restricted after"],
            ["Future property", "Void (s. 124)", "Not a completed hiba"]
          ]
        },
        mnemonic: {
          name: "V-A-R / 123 / 129",
          hook: "Voluntarily, without consideration, Accepted. Immovable: s. 123. Muslims: read s. 129.",
          recite: "Acceptance in donor’s lifetime. No gift of future property. Onerous gift is one package."
        },
        cases: [
          { name: "TPA ss. 122, 123, 129", citation: "India Code", point: "Definition, immovable formality, saving of Muhammadan law. The cross-paper question lives in s. 129." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Essentials of a valid gift under the TPA. How does it differ from hiba?",
            outline: [
              "s. 122 ingredients.",
              "s. 123 formality.",
              "s. 126 revocation limits.",
              "s. 129 / DAP contrast.",
              "s. 124 future property."
            ]
          }
        ],
        check: [
          "Can recite s. 122 without missing acceptance.",
          "Knows s. 123 attestation + registration for immovable property.",
          "Can use s. 129 instead of blending the two systems.",
          "Knows a completed TPA gift is not revocable at pleasure."
        ]
      },
      {
        id: "pr-actionable",
        seq: 8,
        readAs: "Ss. 130–137",
        unit: 3,
        yield: "standard",
        tags: ["actionable claim", "assignment", "s.130"],
        title: "Actionable claims — Ss. 130–137",
        summary: "An actionable claim is a claim to an unsecured debt or to a beneficial interest in movable property not in possession. Assignment is by instrument in writing; notice to the debtor completes the transferee’s position against the debtor. Nail the definition and the mode.",
        explainer: `<p>The definition lives in <strong>s. 3</strong> (prelim card) and the machinery in <strong>ss. 130–137</strong>. Actionable claim: a claim to any debt, other than a debt secured by mortgage of immovable property or by hypothecation or pledge of movable property, or to any beneficial interest in movable property not in the possession, either actual or constructive, of the claimant, which the civil courts recognise as affording grounds for relief, whether such debt or beneficial interest be existent, accruing, conditional or contingent. Unsecured debt and beneficial interest not in possession — that is the heart. A tort claim for unliquidated damages is generally <em>not</em> an actionable claim in the teaching (mere right to sue — also s. 6(e)). A decreed debt may have crossed into a different species — be careful.</p>
        <p><strong>s. 130 mode of transfer.</strong> The transfer of an actionable claim (with the exceptions in the section, such as marine/fire policies as dealt with) shall be effected only by the execution of an instrument in writing, signed by the transferor or his duly authorised agent. It is complete and effectual upon the execution of such instrument, and the transferee then takes the remedies and the power, subject to the liabilities in the chapter. <strong>Notice</strong> to the debtor is not, in the section’s scheme, a condition of the assignment’s validity between assignor and assignee, but without notice the debtor may still pay the original creditor in good faith — so notice is practically essential against the debtor and competing claimants. s. 131: notice in writing signed, etc.</p>
        <p><strong>s. 132.</strong> The transferee takes subject to all the liabilities and equities to which the transferor was subject in respect of the claim at the date of transfer — you cannot wash a tainted debt by assigning it. s. 134: assignment of a debt for the purpose of securing an existing or future debt is, in the specified situation, a form of security. s. 135–137 deal with warranties, capacity, and saving of certain negotiable-instrument / mercantile rules — do not crush the Negotiable Instruments Act into s. 130.</p>
        <p><strong>Why it is in TPA.</strong> Because a chose in action is property that can be transferred by act of parties, but it is not immovable and not a chattel in hand. Sale, gift, or security of such a claim follows this chapter, not s. 54.</p>
        <p><strong>Problem:</strong> A assigns to C a debt owed by B; B, without notice, pays A. Who wins? Notice/s. 130–131. If the “assignment” was oral, it fails s. 130.</p>`,
        analogy: {
          title: "Transferring an IOU, not the cash drawer",
          body: "An actionable claim is a ticket in the receivables queue, not the cash already in your wallet (possession) and not a mortgage on land. s. 130 is a signed assignment file. The assignment can bind assignor and assignee on signature; the debtor’s payment module still pays the old account until it receives notice. Equities travel with the ticket (s. 132): you inherit the bugs."
        },
        diagram: {
          type: "vflow",
          title: "Assigning an actionable claim",
          steps: ["Is it an unsecured debt / beneficial interest not in possession?", "Written signed instrument (s. 130)", "Notice the debtor (practical completeness)", "Transferee takes subject to equities (s. 132)"]
        },
        mnemonic: {
          name: "UNSEC-WRITE-NOTICE",
          hook: "Unsecured (or beneficial interest not in possession) · Writing · Notice the debtor.",
          recite: "Not a mere right to sue for tort damages. Not a mortgage debt. Equities travel."
        },
        cases: [
          { name: "TPA ss. 3, 130–132", citation: "India Code", point: "Definition in s. 3; mode and notice in 130–131; equities in 132." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "What is an actionable claim? How is it transferred?",
            outline: [
              "s. 3 definition in your own words.",
              "Exclusions: secured debt, mere right to sue.",
              "s. 130 writing.",
              "Notice vis-à-vis debtor.",
              "s. 132 equities."
            ]
          }
        ],
        check: [
          "Can define actionable claim without saying ‘any lawsuit’.",
          "Knows s. 130 requires writing.",
          "Can explain why notice matters even if assignment is complete between the parties.",
          "Knows equities travel with the claim."
        ]
      },
      {
        id: "pr-easement",
        seq: 9,
        readAs: "Easements Act overview",
        unit: 3,
        yield: "high",
        tags: ["easement", "prescription", "s.4", "indian easements act"],
        title: "Indian Easements Act — overview",
        summary: "An easement is a right to use another’s land for the beneficial enjoyment of one’s own: continuous/discontinuous, apparent/non-apparent. Acquisition by grant, prescription, necessity, and lost grant; extinction by release, unity, abandonment, cessation of necessity. Keep a definition + modes + extinction triad.",
        explainer: `<p>The Indian Easements Act, 1882 is a separate statute, not a TPA chapter. TPA s. 6(c)–(d) already told you a mere easement cannot be transferred apart from the dominant heritage. This card is the easement itself.</p>
        <p><strong>s. 4 definition.</strong> An easement is a right which the owner or occupier of certain land possesses, as such, for the beneficial enjoyment of that land, to do and continue to do something, or to prevent and continue to prevent something being done, in or upon, or in respect of, certain other land not his own. Dominant heritage/owner; servient heritage/owner. It is a right <em>in another’s land</em> for the benefit of <em>your land</em> (appurtenant). A profit-à-prendre (take something from the soil) is treated in the Act’s scheme; a public highway right is not a private easement. A licence (s. 52 of the same Act) is not an easement: no interest, generally revocable, not annexed to land in the same way.</p>
        <p><strong>Classifications (s. 5 flavour):</strong> continuous (no human act for each enjoyment — e.g. a drain, light through an aperture in some accounts) vs discontinuous (needs a human act — a right of way). Apparent (visible/permanent sign) vs non-apparent. The classification matters for implied grant on severance and for prescription evidence.</p>
        <p><strong>Acquisition (the triad plus extras):</strong></p>
        <ul>
          <li><strong>Grant:</strong> express (instrument) or implied on severance of a heritage (ss. 13–19 neighbourhood — easements of necessity, quasi-easements that were apparent and continuous and necessary for enjoying the part granted/retained). An easement of necessity lasts as long as the necessity lasts (s. 41 extinction when necessity ends).</li>
          <li><strong>Prescription (s. 15):</strong> peaceable, open, as of right, without interruption, for 20 years (30 against the government in the section’s scheme — <em>quote</em>). The enjoyment must be as an easement, not as owner or by secret/forcible user. English lost modern grant is a cousin fiction; Indian students should lead with s. 15.</li>
          <li><strong>Custom / local custom</strong> as the Act allows; <strong>statute</strong>.</li>
        </ul>
        <p><strong>Incidents (ss. 20–31 flavour):</strong> the dominant owner may do what is necessary to secure enjoyment, with as little damage as possible; cannot increase the burden (no turning a footway into a carriageway if that is a substantial increase). Servient owner may use the land in any way that does not interfere.</p>
        <p><strong>Extinction (ss. 37–47 — list 5):</strong> dissolution of the right of the grantor in some cases; expiration of time; release; termination of necessity; unity of ownership (dominant and servient in the same owner in the same right); destruction of either heritage; revocation as provided; suspension vs extinction distinction. Abandonment needs a clear intention, not a mere pause.</p>
        <p><strong>Natural rights</strong> (support, flow of natural stream, light/air in the limited Indian statutory sense) sit beside easements; do not call every neighbour-duty an easement. Light and air in India are less generous than the English ancient-lights folklore — read the Act, do not import English building myths.</p>`,
        analogy: {
          title: "A limited syscall on someone else’s land object",
          body: "Your plot is the dominant process; the neighbour’s plot is the servient object. An easement is a signed syscall (way, drain, light) you may keep calling because it benefits your process. A licence is a temporary sudo the neighbour can usually revoke. Prescription is acquiring the syscall by 20 years of open, as-of-right calls. Necessity is a syscall the partition created because otherwise your process cannot run; it dies when you get another route. Unity of ownership is merging both objects so the syscall is nonsense (you cannot have an easement on yourself)."
        },
        diagram: {
          type: "tree",
          title: "Easement triad",
          root: "Easement (s. 4)",
          branches: ["Grant / implied on severance", "Prescription s. 15 (20 years)", "Necessity (ends with need)", "Extinction: release, unity, abandonment…"]
        },
        mnemonic: {
          name: "DOM-SERV / G-P-N / RUNE",
          hook: "Dominant & servient. Grant · Prescription · Necessity. Release · Unity · Necessity-end · Extinction list.",
          recite: "s. 4: right on another’s land for beneficial enjoyment of your land. Licence is s. 52, not an interest. 20 years as of right."
        },
        cases: [
          { name: "Indian Easements Act ss. 4, 15, 52", citation: "India Code", point: "Definition, prescription, licence contrast. Quote 20/30-year periods from s. 15." },
          { name: "Associated Hotels (licence vs lease)", citation: "AIR 1959 SC 1262", point: "Different from easement, but the substance-over-label habit is the same when a ‘licence’ is really a lease. Easement vs licence is s. 4 vs s. 52 of the 1882 Act." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Define easement. How is it acquired and how is it extinguished? Distinguish licence.",
            outline: [
              "s. 4 with dominant/servient.",
              "Continuous/apparent in four lines.",
              "Grant, necessity, s. 15 prescription.",
              "Extinction list (five).",
              "s. 52 licence: no interest, revocable."
            ]
          },
          {
            year: "theme",
            section: "A",
            marks: "4–5",
            q: "Easement of necessity.",
            outline: ["Implied on severance when no other way. Lasts only as long as the necessity. Not a 20-year prescription story."]
          }
        ],
        check: [
          "Can write s. 4 in substance.",
          "Can list three modes of acquisition.",
          "Knows s. 15 periods and ‘as of right’.",
          "Can distinguish easement, licence, and lease."
        ]
      }
    ]
  };
})(window);
