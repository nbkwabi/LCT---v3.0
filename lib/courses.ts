// Life Care Training — Course Data File
// All 32 courses from the course menu (cheat sheet v4.0, February 2026)
// Note: cheat sheet summary says 31, but its detailed listing contains 32
// (T1 has 13 courses, not 12 — Dementia Awareness L2 was added in v4.0)
// Source documents:
//   - sales/course-menu-design-cheat-sheet-v4.md (canonical course list)
//   - courses/cqc-quality-statement-course-mapping-v1_0.md (CQC mappings)
//   - website/courses-page-copy-v1.1.md (web descriptions)
//
// VERIFICATION NOTES:
//   - Distribution: T4=5, T3=9, T2=5, T1=13 (total 32 on website)
//   - Note: cheat sheet v4.0 summary table says T1=12/total=31 but its own
//     course listing has 13 T1 courses (items #20-#32 including Dementia
//     Awareness L2 as NEW v4.0). All 32 courses are individually described
//     in courses-page-copy-v1.1.md and mapped in the CQC mapping document.
//   - Oliver McGowan removed from website (pending Lead Trainer accreditation)
//   - Brand name: "Life Care Training" (two words) in all client-facing text
//   - Duration labels: "Half Day (approx. 3–4 hrs)" / "Full Day (approx. 6 hrs)" — never "HD"/"FD"
//   - Never say "CQC Approved" or "CQC Accredited" — always "CQC-aligned" or "mapped to CQC Quality Statements"
//   - UK English throughout (colour, organisation, programme)

// === Types ===

export interface CQCMapping {
  /** Quality Statement code, e.g. "S8", "C2", "W5" */
  code: string;
  /** Short statement name, e.g. "Medicines optimisation" */
  statement: string;
  /** The full CQC "We" statement text from the Single Assessment Framework */
  weStatement: string;
  /** true for primary mappings, false for secondary */
  isPrimary: boolean;
}

export interface Course {
  /** URL-safe slug, e.g. "medication-administration-foundation" */
  slug: string;
  /** Full course title from course-menu-design-cheat-sheet-v4.md */
  name: string;
  /** Tier number (1–4, where 4 is the highest/premium tier) */
  tier: 1 | 2 | 3 | 4;
  /** Human-readable tier label */
  tierLabel: string;
  /** Duration type */
  duration: "half-day" | "full-day";
  /** Client-facing duration label — never "HD" or "FD" */
  durationLabel: string;
  /** 2–4 sentence web description from courses-page-copy-v1.1.md */
  description: string;
  /** All CQC Quality Statement mappings (primary and secondary) */
  cqcMappings: CQCMapping[];
  /** Recommended course page copy from the CQC mapping document */
  cqcCopySnippet: string;
  /** Price in GBP for half day session (null if course is full day only) */
  priceHalfDay: number | null;
  /** Price in GBP for full day session (null if course is half day only) */
  priceFullDay: number | null;
  /** Qualification level, e.g. "Level 2", "Level 3", or null if no formal level */
  level: string | null;
  /** true if this course meets an HSE/legal statutory minimum */
  isStatutory: boolean;
  /** SEO keywords for search and filtering (3–5 per course) */
  keywords: string[];
}

// === Tier Metadata ===

export const TIERS = {
  4: {
    label: "Clinical / MPharm Premium",
    colour: "#1B5E20",
    halfDayPrice: 900,
    fullDayPrice: 1100,
    description:
      "Courses requiring MPharm clinical expertise. Medication management, emergency pharmacology, and specialist clinical skills.",
  },
  3: {
    label: "Specialist / Lead Level",
    colour: "#2b7925",
    halfDayPrice: 850,
    fullDayPrice: 1000,
    description:
      "Advanced courses for senior staff, leads, and designated safeguarding leads. Legal frameworks, complex care, and leadership competency.",
    badge: "Most Requested",
  },
  2: {
    label: "Core Care",
    colour: "#3A8B89",
    halfDayPrice: 750,
    fullDayPrice: 900,
    description:
      "Essential courses that form the core of your care home\u2019s training beyond mandatory basics. These cover practical emergency response skills, specialist awareness, and the communication competencies your staff need on every shift.",
  },
  1: {
    label: "Standard Mandatory",
    colour: "#111827",
    halfDayPrice: 650,
    fullDayPrice: 800,
    description:
      "The foundation courses every care home needs. These cover statutory and mandatory requirements \u2014 fire safety, manual handling, safeguarding, infection control, food safety, and health and safety. Delivered face-to-face with practical exercises, not just theory.",
  },
} as const;

// === Course Data ===

export const COURSES: Course[] = [
  // ──────────────────────────────────────────────────────────────────────
  // TIER 4 — Clinical / MPharm Premium (5 courses)
  // ──────────────────────────────────────────────────────────────────────

  {
    slug: "medication-administration-foundation",
    name: "Medication Administration: Foundation (MPharm-Led)",
    tier: 4,
    tierLabel: "Clinical / MPharm Premium",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "Medication errors are the most common clinical failure identified in CQC inspections. This pharmacist-led course covers the Six Rights of medication administration, controlled drugs, storage requirements, administration routes, and error management \u2014 with practical competency assessment built into the session.",
    cqcMappings: [
      {
        code: "S8",
        statement: "Medicines optimisation",
        weStatement:
          "We make sure that medicines and treatments are safe and meet people\u2019s needs.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: true,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Medicines Optimisation (S8) \u2014 pharmacist-led competency training covering the Six Rights, controlled drugs, storage, administration routes and error management.",
    priceHalfDay: null,
    priceFullDay: 1100,
    level: null,
    isStatutory: false,
    keywords: [
      "medication administration training",
      "care home medication course",
      "CQC medication compliance",
      "pharmacist-led training",
      "controlled drugs training",
    ],
  },

  {
    slug: "medication-administration-refresher",
    name: "Medication Administration: Annual Refresher",
    tier: 4,
    tierLabel: "Clinical / MPharm Premium",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Annual competency reassessment for staff already trained in medication administration. Covers updates to medication protocols, common error patterns, and practical skills refreshment \u2014 ensuring safe practice is maintained year-round, not just on the day of initial training.",
    cqcMappings: [
      {
        code: "S8",
        statement: "Medicines optimisation",
        weStatement:
          "We make sure that medicines and treatments are safe and meet people\u2019s needs.",
        isPrimary: true,
      },
      {
        code: "S1",
        statement: "Learning culture",
        weStatement:
          "We have a proactive and positive culture of safety based on openness and honesty.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Medicines Optimisation (S8) \u2014 annual competency reassessment ensuring safe medication practice is maintained year-round.",
    priceHalfDay: 900,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "medication refresher training",
      "annual medication competency",
      "care home medication update",
      "CQC medication evidence",
    ],
  },

  {
    slug: "anaphylaxis-emergency-medication",
    name: "Anaphylaxis & Emergency Medication (EpiPen Practical)",
    tier: 4,
    tierLabel: "Clinical / MPharm Premium",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Practical EpiPen training ensuring staff can recognise the signs of anaphylaxis and respond immediately. Includes hands-on practice with training devices, understanding of when and how to administer emergency medication, and post-incident protocols.",
    cqcMappings: [
      {
        code: "S8",
        statement: "Medicines optimisation",
        weStatement:
          "We make sure that medicines and treatments are safe and meet people\u2019s needs.",
        isPrimary: true,
      },
      {
        code: "C4",
        statement: "Responding to people\u2019s immediate needs",
        weStatement: "We respond to people\u2019s needs in the moment.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Medicines Optimisation (S8) \u2014 practical EpiPen training ensuring staff can recognise and respond to anaphylaxis immediately.",
    priceHalfDay: 900,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "anaphylaxis training care home",
      "EpiPen training",
      "emergency medication course",
      "allergic reaction training",
    ],
  },

  {
    slug: "understanding-diabetes-insulin-safety",
    name: "Understanding Diabetes: Insulin Safety & Management",
    tier: 4,
    tierLabel: "Clinical / MPharm Premium",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "With diabetes affecting around 25% of care home residents, staff need to understand blood glucose monitoring, insulin delegation, hypo- and hyperglycaemia recognition, and when to escalate. Delivered by a pharmacist-qualified trainer who understands the clinical detail behind insulin safety.",
    cqcMappings: [
      {
        code: "E5",
        statement: "Supporting people to live healthier lives",
        weStatement:
          "We support people to manage their health and wellbeing.",
        isPrimary: true,
      },
      {
        code: "S8",
        statement: "Medicines optimisation",
        weStatement:
          "We make sure that medicines and treatments are safe and meet people\u2019s needs.",
        isPrimary: true,
      },
      {
        code: "E1",
        statement: "Assessing needs",
        weStatement:
          "We maximise the effectiveness of people\u2019s care and treatment by assessing and reviewing their health, care, wellbeing and communication needs.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Healthier Lives (E5) and Medicines Optimisation (S8) \u2014 covering Type 1 and Type 2 diabetes, insulin safety, hypo/hyperglycaemia recognition and care planning.",
    priceHalfDay: 900,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "diabetes training care home",
      "insulin safety course",
      "blood glucose monitoring training",
      "diabetes management care staff",
    ],
  },

  {
    slug: "epilepsy-awareness-buccal-midazolam",
    name: "Epilepsy Awareness & Buccal Midazolam",
    tier: 4,
    tierLabel: "Clinical / MPharm Premium",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Covers seizure recognition, first response protocols, individual epilepsy care plans, and the safe administration of buccal midazolam \u2014 a rescue medication that care staff must be confident using in an emergency. Includes practical simulation with training equipment.",
    cqcMappings: [
      {
        code: "S8",
        statement: "Medicines optimisation",
        weStatement:
          "We make sure that medicines and treatments are safe and meet people\u2019s needs.",
        isPrimary: true,
      },
      {
        code: "C4",
        statement: "Responding to people\u2019s immediate needs",
        weStatement: "We respond to people\u2019s needs in the moment.",
        isPrimary: true,
      },
      {
        code: "E1",
        statement: "Assessing needs",
        weStatement:
          "We maximise the effectiveness of people\u2019s care and treatment by assessing and reviewing their health, care, wellbeing and communication needs.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Medicines Optimisation (S8) \u2014 training staff to recognise seizure types, administer buccal midazolam safely and implement individual epilepsy care plans.",
    priceHalfDay: 900,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "epilepsy training care home",
      "buccal midazolam training",
      "seizure management course",
      "rescue medication training",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // TIER 3 — Specialist / Lead Level (9 courses)
  // ──────────────────────────────────────────────────────────────────────

  {
    slug: "safeguarding-adults-level-3",
    name: "Safeguarding Adults Level 3 (DSL/Manager)",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "Safeguarding is the most frequently flagged area in CQC inspections. This Level 3 course goes beyond recognition and reporting \u2014 covering legal frameworks, multi-agency referral pathways, complex case analysis, and the designated safeguarding lead role. Includes scenario-based decision-making exercises.",
    cqcMappings: [
      {
        code: "S3",
        statement: "Safeguarding",
        weStatement:
          "We work with people and partners to understand what being safe means to them and the best way to achieve this.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: true,
      },
      {
        code: "W2",
        statement: "Capable, compassionate and inclusive leaders",
        weStatement:
          "We have inclusive leaders at all levels who understand the context in which we deliver.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safeguarding (S3) and Governance (W5) \u2014 equipping managers and designated leads to manage safeguarding investigations, referrals and multi-agency working.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "safeguarding level 3 training",
      "designated safeguarding lead course",
      "DSL training care home",
      "CQC safeguarding compliance",
    ],
  },

  {
    slug: "safeguarding-children-level-3",
    name: "Safeguarding Children Level 3 (DSL/Manager)",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "The Level 3 counterpart to our Safeguarding Adults course \u2014 designed for designated safeguarding leads and managers with responsibilities for children\u2019s welfare. Covers legal frameworks including the Children Act 2004, multi-agency referral pathways (MASH), serious case reviews, and the designated lead role in managing concerns. Scenario-based decision-making throughout.",
    cqcMappings: [
      {
        code: "S3",
        statement: "Safeguarding",
        weStatement:
          "We work with people and partners to understand what being safe means to them and the best way to achieve this.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: true,
      },
      {
        code: "W2",
        statement: "Capable, compassionate and inclusive leaders",
        weStatement:
          "We have inclusive leaders at all levels who understand the context in which we deliver.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safeguarding (S3) and Governance (W5) \u2014 equipping designated leads to manage children\u2019s safeguarding investigations, MASH referrals and multi-agency working.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "safeguarding children level 3 training",
      "children safeguarding lead course",
      "DSL children training care home",
      "Children Act 2004 training",
      "MASH referral training",
    ],
  },

  {
    slug: "positive-behaviour-support-level-3",
    name: "Positive Behaviour Support Level 3 (PBS Framework)",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "A framework-led course on understanding behaviour as communication, functional assessment, proactive strategies, and restrictive practice reduction. Essential for homes supporting residents with learning disabilities, autism, or complex behavioural needs. Aligned to the PBS Competence Framework.",
    cqcMappings: [
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: true,
      },
      {
        code: "C2",
        statement: "Treating people as individuals",
        weStatement:
          "We treat people as individuals and make sure their care and support meets their needs.",
        isPrimary: true,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Risk Management (S4) and Treating People as Individuals (C2) \u2014 using the PBS framework to understand behaviour, reduce restrictive practices and promote quality of life.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "positive behaviour support training",
      "PBS framework course",
      "restrictive practice reduction",
      "challenging behaviour care home",
      "learning disability behaviour training",
    ],
  },

  {
    slug: "dementia-care-level-3",
    name: "Dementia Care Level 3 (Lead/Champion)",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "For dementia leads and champions \u2014 going beyond awareness into advanced person-centred care planning, communication strategies for different stages of dementia, and how to evidence quality of life improvements for CQC. Includes case studies from real care settings.",
    cqcMappings: [
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: true,
      },
      {
        code: "W1",
        statement: "Shared direction and culture",
        weStatement:
          "We have a shared vision, strategy and culture.",
        isPrimary: true,
      },
      {
        code: "C2",
        statement: "Treating people as individuals",
        weStatement:
          "We treat people as individuals and make sure their care and support meets their needs.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Evidence-Based Care (E2) and Shared Direction (W1) \u2014 developing dementia champions who lead person-centred dementia care across your service.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "dementia champion training",
      "dementia care level 3",
      "person-centred dementia course",
      "dementia lead care home",
    ],
  },

  {
    slug: "infection-control-level-3",
    name: "Infection Control Level 3 (IPC Lead)",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "For IPC leads responsible for managing infection prevention across the home. Covers audit processes, outbreak management, cleaning protocols, antimicrobial stewardship, and how to evidence your IPC governance for CQC. Post-COVID, this role carries more scrutiny than ever.",
    cqcMappings: [
      {
        code: "S7",
        statement: "Infection prevention and control",
        weStatement: "We assess and manage the risk of infection.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: true,
      },
      {
        code: "W7",
        statement: "Learning, improvement and innovation",
        weStatement:
          "We focus on continuous learning, innovation and improvement.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for IPC (S7) and Governance (W5) \u2014 equipping IPC leads to audit, manage outbreaks and drive continuous improvement in infection control practice.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "IPC lead training",
      "infection control level 3",
      "outbreak management course",
      "IPC audit training care home",
    ],
  },

  {
    slug: "mca-dols-decision-makers-workshop",
    name: "MCA & DoLS (Decision-Maker\u2019s Workshop)",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "CQC frequently identifies failures in how care homes apply the Mental Capacity Act and manage Deprivation of Liberty Safeguards. This workshop trains managers and senior staff to conduct lawful capacity assessments, apply best interests decisions, and navigate DoLS applications \u2014 with real-world scenarios and decision-making exercises.",
    cqcMappings: [
      {
        code: "E7",
        statement: "Consent to care and treatment",
        weStatement:
          "We support people to make informed decisions about their care and treatment and respect their human rights if they lack capacity to make their own decisions.",
        isPrimary: true,
      },
      {
        code: "S3",
        statement: "Safeguarding",
        weStatement:
          "We work with people and partners to understand what being safe means to them and the best way to achieve this.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Consent (E7) and Safeguarding (S3) \u2014 training managers to conduct lawful capacity assessments, apply best interests decisions and navigate DoLS applications.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: null,
    isStatutory: false,
    keywords: [
      "MCA DoLS training",
      "mental capacity act course",
      "deprivation of liberty safeguards",
      "capacity assessment training care home",
    ],
  },

  {
    slug: "diabetes-awareness-level-3",
    name: "Diabetes Awareness Level 3",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "For senior carers, team leaders, and diabetes champions responsible for overseeing diabetes care across the home. Goes beyond awareness into care plan development, MDT liaison, dietary management oversight, and recognising when to escalate. Distinct from our Tier 4 Insulin Safety course \u2014 this focuses on service-level leadership rather than clinical medication tasks.",
    cqcMappings: [
      {
        code: "E5",
        statement: "Supporting people to live healthier lives",
        weStatement:
          "We support people to manage their health and wellbeing.",
        isPrimary: true,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: true,
      },
      {
        code: "E1",
        statement: "Assessing needs",
        weStatement:
          "We maximise the effectiveness of people\u2019s care and treatment by assessing and reviewing their health, care, wellbeing and communication needs.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Healthier Lives (E5) and Evidence-Based Care (E2) \u2014 developing diabetes champions who lead care planning, MDT liaison and dietary management across your service.",
    priceHalfDay: 850,
    priceFullDay: null,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "diabetes awareness level 3 training",
      "diabetes champion course care home",
      "diabetes care plan training",
      "diabetes lead training",
    ],
  },

  {
    slug: "mental-health-awareness-level-3",
    name: "Mental Health Awareness Level 3",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "For managers, seniors, and mental health leads who need more than awareness \u2014 covering legal frameworks, crisis planning, risk assessment, supervision models, and how to evidence mental health support for CQC. Builds on the Tier 2 awareness course with leadership-level responsibilities and decision-making scenarios.",
    cqcMappings: [
      {
        code: "E1",
        statement: "Assessing needs",
        weStatement:
          "We maximise the effectiveness of people\u2019s care and treatment by assessing and reviewing their health, care, wellbeing and communication needs.",
        isPrimary: true,
      },
      {
        code: "W2",
        statement: "Capable, compassionate and inclusive leaders",
        weStatement:
          "We have inclusive leaders at all levels who understand the context in which we deliver.",
        isPrimary: true,
      },
      {
        code: "C2",
        statement: "Treating people as individuals",
        weStatement:
          "We treat people as individuals and make sure their care and support meets their needs.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Assessing Needs (E1) and Capable Leaders (W2) \u2014 equipping mental health leads to manage crisis planning, risk assessment and supervision across your service.",
    priceHalfDay: 850,
    priceFullDay: null,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "mental health awareness level 3 training",
      "mental health lead course care home",
      "mental health crisis planning training",
      "mental health supervision course",
    ],
  },

  {
    slug: "understanding-personality-disorders-comprehensive",
    name: "Understanding Personality Disorders \u2014 Comprehensive",
    tier: 3,
    tierLabel: "Specialist / Lead Level",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "A specialist full-day course for staff working with residents who have personality disorder diagnoses. Covers diagnostic frameworks, understanding relational dynamics, managing boundaries, risk assessment, and trauma-informed approaches. Designed for services supporting complex mental health presentations where standard mental health awareness isn\u2019t sufficient.",
    cqcMappings: [
      {
        code: "C2",
        statement: "Treating people as individuals",
        weStatement:
          "We treat people as individuals and make sure their care and support meets their needs.",
        isPrimary: true,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: true,
      },
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Treating People as Individuals (C2) and Evidence-Based Care (E2) \u2014 training staff to understand personality disorder diagnoses, manage relational dynamics and apply trauma-informed approaches.",
    priceHalfDay: null,
    priceFullDay: 1000,
    level: null,
    isStatutory: false,
    keywords: [
      "personality disorders training care home",
      "trauma-informed care course",
      "complex mental health training",
      "BPD EUPD training care staff",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // TIER 2 — Core Care (5 courses)
  // ──────────────────────────────────────────────────────────────────────

  {
    slug: "aed-basic-life-support",
    name: "AED & Basic Life Support (CPR Practical)",
    tier: 2,
    tierLabel: "Core Care",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Hands-on CPR and AED training using manikins and training defibrillators. Your staff practise the actual techniques \u2014 chest compressions, rescue breaths, AED operation \u2014 not just watch a video. Two weeks after one of our sessions, a delegate used what he\u2019d learned to save a choking resident\u2019s life.",
    cqcMappings: [
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: true,
      },
      {
        code: "C4",
        statement: "Responding to people\u2019s immediate needs",
        weStatement: "We respond to people\u2019s needs in the moment.",
        isPrimary: true,
      },
      {
        code: "S2",
        statement: "Safe systems, pathways and transitions",
        weStatement:
          "We work with people and partners to establish and maintain safe systems of care.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safe and Effective Staffing (S6) \u2014 proving your staff can respond to cardiac emergencies with CPR and defibrillation.",
    priceHalfDay: 750,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "BLS training care home",
      "CPR course care staff",
      "AED defibrillator training",
      "basic life support course",
    ],
  },

  {
    slug: "emergency-first-aid-at-work",
    name: "Emergency First Aid at Work (HSE 6-Hour)",
    tier: 2,
    tierLabel: "Core Care",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "The HSE statutory minimum \u2014 6 hours of practical first aid training covering unconscious casualties, CPR, choking, bleeding, burns, and shock. No shortcuts. This course meets the legal requirement for designated first aiders in the workplace.",
    cqcMappings: [
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: true,
      },
      {
        code: "C4",
        statement: "Responding to people\u2019s immediate needs",
        weStatement: "We respond to people\u2019s needs in the moment.",
        isPrimary: true,
      },
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safe and Effective Staffing (S6) \u2014 HSE-compliant first aid certification demonstrating your staff can manage medical emergencies on site.",
    priceHalfDay: null,
    priceFullDay: 900,
    level: null,
    isStatutory: true,
    keywords: [
      "EFAW course care home",
      "emergency first aid at work",
      "HSE first aid training",
      "statutory first aid course",
      "first aider qualification",
    ],
  },

  {
    slug: "falls-prevention-post-fall-protocol",
    name: "Falls Prevention & Post-Fall Protocol",
    tier: 2,
    tierLabel: "Core Care",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Falls are increasingly flagged under CQC\u2019s \u201CSafe\u201D domain. This course covers risk assessment, environmental factors, medication-related fall risk, post-fall protocols, and how to document falls evidence in line with CQC expectations. Practical exercises using real care scenarios.",
    cqcMappings: [
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: true,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Risk Management (S4) \u2014 training staff to assess fall risks, implement prevention strategies and respond appropriately to falls.",
    priceHalfDay: 750,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "falls prevention training care home",
      "post-fall protocol course",
      "CQC falls evidence",
      "fall risk assessment training",
    ],
  },

  {
    slug: "end-of-life-care-communication",
    name: "End of Life Care & Communication",
    tier: 2,
    tierLabel: "Core Care",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "A sensitive, practical course covering advance care planning, recognising the signs of the last days of life, supporting families, and communicating with compassion during end-of-life care. Emphasises dignity, comfort, and the emotional wellbeing of staff who deliver this care.",
    cqcMappings: [
      {
        code: "R7",
        statement: "Planning for the future",
        weStatement:
          "We support people to plan for important life changes, so they can have enough time to make informed decisions.",
        isPrimary: true,
      },
      {
        code: "C1",
        statement: "Kindness, compassion and dignity",
        weStatement:
          "We always treat people with kindness and compassion.",
        isPrimary: true,
      },
      {
        code: "E7",
        statement: "Consent to care and treatment",
        weStatement:
          "We tell people about their rights around consent and respect these when we deliver care and treatment.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Planning for the Future (R7) \u2014 training staff to provide compassionate, dignified end-of-life care and support advance care planning.",
    priceHalfDay: 750,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "end of life care training",
      "palliative care course care home",
      "advance care planning training",
      "compassionate care training",
    ],
  },

  {
    slug: "mental-health-awareness-care-staff",
    name: "Mental Health Awareness for Care Staff",
    tier: 2,
    tierLabel: "Core Care",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "An awareness-level course helping care staff recognise common mental health conditions, understand the impact on residents\u2019 daily lives, and respond with empathy and appropriate support. Also covers staff wellbeing \u2014 because caring for people with mental health needs takes a toll.",
    cqcMappings: [
      {
        code: "E1",
        statement: "Assessing needs",
        weStatement:
          "We assess and review people\u2019s physical, mental health and social needs so that care, support and treatment is delivered in line with current legislation, standards and evidence-based guidance.",
        isPrimary: true,
      },
      {
        code: "C2",
        statement: "Treating people as individuals",
        weStatement:
          "We treat people as individuals and make sure their care, support and treatment meets their needs and preferences.",
        isPrimary: true,
      },
      {
        code: "C5",
        statement: "Workforce wellbeing and enablement",
        weStatement:
          "We support our staff\u2019s wellbeing and create an environment where they feel valued, respected and able to provide safe, high-quality care.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Assessing Needs (E1) and Treating People as Individuals (C2) \u2014 helping staff recognise mental health conditions, reduce stigma and provide person-centred support.",
    priceHalfDay: 750,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "mental health awareness training care home",
      "mental health course care staff",
      "recognising mental health conditions",
      "staff wellbeing training",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // TIER 1 — Standard Mandatory (12 courses)
  // ──────────────────────────────────────────────────────────────────────

  {
    slug: "fire-safety-emergency-evacuation",
    name: "Fire Safety & Emergency Evacuation (CSTF)",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Annual fire safety awareness covering fire prevention, emergency procedures, evacuation protocols, and the use of fire extinguishers. Aligned to CSTF standards. Includes practical evacuation exercises that your staff will actually remember \u2014 not just a PowerPoint about triangles.",
    cqcMappings: [
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: true,
      },
      {
        code: "S2",
        statement: "Safe systems, pathways and transitions",
        weStatement:
          "We work with people and partners to establish and maintain safe systems of care.",
        isPrimary: false,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safe Environments (S5) \u2014 demonstrating your staff can detect fire risks and follow safe evacuation procedures.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 2",
    isStatutory: true,
    keywords: [
      "fire safety training care home",
      "CSTF fire safety course",
      "evacuation training",
      "fire awareness care staff",
    ],
  },

  {
    slug: "fire-marshal-warden-duties",
    name: "Fire Marshal: Warden Duties & Extinguisher Practical",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "For designated fire marshals and wardens. Covers fire marshal responsibilities, extinguisher types and practical use, roll call procedures, and coordination with the fire service. Includes hands-on extinguisher training \u2014 not just theory.",
    cqcMappings: [
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: true,
      },
      {
        code: "S1",
        statement: "Learning culture",
        weStatement:
          "We have a proactive and positive culture of safety based on openness and honesty.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safe Environments (S5) and Governance (W5) \u2014 equipping designated staff to lead fire safety management and maintain compliance records.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 3",
    isStatutory: false,
    keywords: [
      "fire marshal training care home",
      "fire warden course",
      "extinguisher practical training",
      "fire marshal duties course",
    ],
  },

  {
    slug: "manual-handling-full-induction",
    name: "Manual Handling: Full Induction (HSE Aligned)",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "full-day",
    durationLabel: "Full Day (approx. 6 hrs)",
    description:
      "Full-day induction for new starters or staff who haven\u2019t received manual handling training before. Covers risk assessment, ergonomic principles, safe lifting techniques, and practical use of hoists, slide sheets, and transfer equipment. Hands-on practice throughout.",
    cqcMappings: [
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: false,
      },
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Risk Management (S4) \u2014 proving your staff can safely assess individual handling needs, select appropriate equipment and position residents while maintaining dignity.",
    priceHalfDay: null,
    priceFullDay: 800,
    level: null,
    isStatutory: true,
    keywords: [
      "manual handling training care home",
      "moving and handling induction",
      "HSE manual handling course",
      "safe lifting training",
    ],
  },

  {
    slug: "manual-handling-annual-refresher",
    name: "Manual Handling: Annual Refresher",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Annual refresher for staff who have completed the full induction. Updates on best practice, re-assessment of practical skills, and scenario-based exercises using the equipment your home actually uses.",
    cqcMappings: [
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Risk Management (S4) \u2014 annual reassessment of safe handling skills with practical scenario-based exercises.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: null,
    isStatutory: true,
    keywords: [
      "manual handling refresher training",
      "annual moving and handling",
      "manual handling update course",
      "care home handling refresher",
    ],
  },

  {
    slug: "safer-people-handling",
    name: "Safer People Handling",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Focused specifically on people handling \u2014 separate from objects and equipment. Covers equipment-assisted transfers using hoists, slides, stand aids, and transfer boards, tailored to individual residents\u2019 needs. Maintains dignity and comfort throughout every practical exercise.",
    cqcMappings: [
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: false,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Risk Management (S4) \u2014 demonstrating competency in equipment-assisted transfers using hoists, slides and stand aids tailored to individual needs.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "people handling training care home",
      "hoist training course",
      "patient moving and handling",
      "transfer equipment training",
    ],
  },

  {
    slug: "safeguarding-adults-level-2",
    name: "Safeguarding Adults Level 2 (Recognition & Reporting)",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Mandatory for all care staff. Covers the main categories of adult abuse, how to recognise indicators, the correct reporting procedure, and your legal responsibilities under the Care Act 2014. Interactive case studies and disclosure scenarios \u2014 not just a list of definitions.",
    cqcMappings: [
      {
        code: "S3",
        statement: "Safeguarding",
        weStatement:
          "We work with people and partners to understand what being safe means to them and the best way to achieve this.",
        isPrimary: true,
      },
      {
        code: "W3",
        statement: "Freedom to speak up",
        weStatement:
          "We foster a positive culture where people feel they can speak up.",
        isPrimary: false,
      },
      {
        code: "S1",
        statement: "Learning culture",
        weStatement:
          "We have a proactive and positive culture of safety based on openness and honesty.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safeguarding (S3) \u2014 equipping all staff to recognise abuse, understand reporting pathways and act to protect vulnerable adults.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 2",
    isStatutory: true,
    keywords: [
      "safeguarding adults training care home",
      "safeguarding level 2 course",
      "Care Act 2014 training",
      "recognising abuse training",
    ],
  },

  {
    slug: "safeguarding-children-level-2",
    name: "Safeguarding Children Level 2 (Recognition & Reporting)",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Even in adult care settings, staff may encounter children during visits or in settings serving younger adults. This course covers recognition of child abuse indicators, reporting responsibilities, and referral pathways \u2014 with practical scenario work.",
    cqcMappings: [
      {
        code: "S3",
        statement: "Safeguarding",
        weStatement:
          "We work with people and partners to understand what being safe means to them and the best way to achieve this.",
        isPrimary: true,
      },
      {
        code: "W3",
        statement: "Freedom to speak up",
        weStatement:
          "We foster a positive culture where people feel they can speak up.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safeguarding (S3) \u2014 ensuring staff can recognise indicators of child abuse and exploitation and follow appropriate referral pathways.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 2",
    isStatutory: true,
    keywords: [
      "safeguarding children training care home",
      "child protection course care staff",
      "safeguarding children level 2",
      "recognising child abuse training",
    ],
  },

  {
    slug: "risk-assessment-in-care",
    name: "Risk Assessment in Care (Dynamic & Formal)",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Covers both dynamic (on-the-spot) and formal (documented) risk assessment approaches. Staff learn to identify hazards, evaluate risk, implement controls, and document their decisions \u2014 a foundation skill that underpins everything from manual handling to infection control.",
    cqcMappings: [
      {
        code: "S4",
        statement: "Involving people to manage risks",
        weStatement:
          "We work with people to understand and manage risks by thinking holistically so that care meets their needs in a way that is safe and supportive.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: true,
      },
      {
        code: "S2",
        statement: "Safe systems, pathways and transitions",
        weStatement:
          "We work with people and partners to establish and maintain safe systems of care.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Risk Management (S4) and Governance (W5) \u2014 training staff to identify, assess and document risks using dynamic and formal approaches.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 2",
    isStatutory: false,
    keywords: [
      "risk assessment training care home",
      "dynamic risk assessment course",
      "care home risk management",
      "hazard identification training",
    ],
  },

  {
    slug: "health-safety-awareness-care-settings",
    name: "Health & Safety Awareness for Care Settings",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Covers your staff\u2019s responsibilities under the Health and Safety at Work Act 1974, RIDDOR reporting, COSHH basics, workplace hazard identification, and accident/incident procedures. Practical and applied to care settings \u2014 not a generic office health and safety course.",
    cqcMappings: [
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: true,
      },
      {
        code: "S6",
        statement: "Safe and effective staffing",
        weStatement:
          "We make sure there are enough qualified, skilled and experienced people.",
        isPrimary: true,
      },
      {
        code: "W5",
        statement: "Governance, management and sustainability",
        weStatement:
          "We have clear responsibilities, roles, systems of accountability and good governance.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Safe Environments (S5) \u2014 ensuring staff understand their responsibilities under health and safety legislation.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: null,
    isStatutory: true,
    keywords: [
      "health and safety training care home",
      "HASAWA 1974 training",
      "COSHH awareness course",
      "care home health safety course",
    ],
  },

  {
    slug: "infection-prevention-control-cstf",
    name: "Infection Prevention & Control (CSTF)",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Foundation IPC training aligned to CSTF standards. Covers the chain of infection, hand hygiene technique, correct PPE use, cleaning protocols, and outbreak awareness. Practical demonstrations and competency checks \u2014 because IPC is a skill, not just knowledge.",
    cqcMappings: [
      {
        code: "S7",
        statement: "Infection prevention and control",
        weStatement: "We assess and manage the risk of infection.",
        isPrimary: true,
      },
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: false,
      },
      {
        code: "E2",
        statement: "Delivering evidence-based care and treatment",
        weStatement:
          "We plan and deliver people\u2019s care and treatment with them.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Infection Prevention and Control (S7) \u2014 demonstrating staff competency in hand hygiene, PPE use, cleaning protocols and outbreak management.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 2",
    isStatutory: true,
    keywords: [
      "infection control training care home",
      "IPC CSTF course",
      "hand hygiene training",
      "PPE training care staff",
    ],
  },

  {
    slug: "food-safety-hygiene-care-settings",
    name: "Food Safety & Hygiene for Care Settings",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Covers food preparation, safe storage, temperature control, allergen management, and hygiene standards specific to care settings. Whether your staff prepare meals or assist residents with eating, they need to understand the risks and responsibilities involved.",
    cqcMappings: [
      {
        code: "E4",
        statement: "Supporting people to eat and drink enough",
        weStatement:
          "We support people to eat and drink enough to maintain a balanced diet.",
        isPrimary: true,
      },
      {
        code: "S5",
        statement: "Safe environments",
        weStatement:
          "We detect and control potential risks in the care environment.",
        isPrimary: true,
      },
      {
        code: "S7",
        statement: "Infection prevention and control",
        weStatement: "We assess and manage the risk of infection.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Supporting People to Eat and Drink (E4) and Safe Environments (S5) \u2014 covering food preparation, storage, allergen management and hygiene standards.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "food safety training care home",
      "food hygiene course care staff",
      "allergen management training",
      "care home kitchen hygiene",
    ],
  },

  {
    slug: "equality-diversity-inclusion",
    name: "Equality, Diversity & Inclusion",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "More than a tick-box exercise. This course explores unconscious bias, protected characteristics, culturally sensitive care, and how to create an inclusive environment for both residents and staff. Interactive discussion and real-world scenarios \u2014 not just definitions.",
    cqcMappings: [
      {
        code: "R6",
        statement: "Equity in experiences and outcomes",
        weStatement:
          "We actively seek out and listen to information about people who are most likely to experience inequality.",
        isPrimary: true,
      },
      {
        code: "C1",
        statement: "Kindness, compassion and dignity",
        weStatement:
          "We always treat people with kindness and compassion.",
        isPrimary: true,
      },
      {
        code: "W4",
        statement: "Workforce equality, diversity and inclusion",
        weStatement:
          "We actively support equality and diversity for our workforce.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Equity (R6) and Kindness, Compassion and Dignity (C1) \u2014 embedding equality and inclusion into everyday care practice.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: null,
    isStatutory: false,
    keywords: [
      "equality diversity inclusion training",
      "EDI course care home",
      "unconscious bias training care staff",
      "culturally sensitive care training",
    ],
  },

  {
    slug: "dementia-awareness-level-2",
    name: "Dementia Awareness Level 2",
    tier: 1,
    tierLabel: "Standard Mandatory",
    duration: "half-day",
    durationLabel: "Half Day (approx. 3\u20134 hrs)",
    description:
      "Foundation dementia awareness for all care staff working with residents who have dementia. Covers what dementia is, common types, communication strategies, person-centred care principles, and recognising changes in behaviour or needs. Practical and interactive \u2014 not just definitions. For staff ready to take on a champion role, our Dementia Care Level 3 (Tier 3) builds on this foundation.",
    cqcMappings: [
      {
        code: "C2",
        statement: "Treating people as individuals",
        weStatement:
          "We treat people as individuals and make sure their care and support meets their needs.",
        isPrimary: true,
      },
      {
        code: "E1",
        statement: "Assessing needs",
        weStatement:
          "We maximise the effectiveness of people\u2019s care and treatment by assessing and reviewing their health, care, wellbeing and communication needs.",
        isPrimary: true,
      },
      {
        code: "R1",
        statement: "Person-centred care",
        weStatement:
          "We make sure people are at the centre of their care and treatment choices.",
        isPrimary: false,
      },
    ],
    cqcCopySnippet:
      "Supports your CQC evidence for Treating People as Individuals (C2) and Assessing Needs (E1) \u2014 foundation dementia awareness with person-centred care principles and communication strategies.",
    priceHalfDay: 650,
    priceFullDay: null,
    level: "Level 2",
    isStatutory: false,
    keywords: [
      "dementia awareness level 2 training",
      "dementia awareness care home",
      "dementia foundation course",
      "person-centred dementia care",
    ],
  },
];

// === Helper Functions ===

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function getCoursesByTier(tier: 1 | 2 | 3 | 4): Course[] {
  return COURSES.filter((course) => course.tier === tier);
}

export function getAllSlugs(): string[] {
  return COURSES.map((course) => course.slug);
}

export function getCoursesGroupedByTier(): Record<number, Course[]> {
  return {
    4: getCoursesByTier(4),
    3: getCoursesByTier(3),
    2: getCoursesByTier(2),
    1: getCoursesByTier(1),
  };
}
