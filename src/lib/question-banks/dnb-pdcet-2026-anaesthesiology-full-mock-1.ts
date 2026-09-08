import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. DNB-PDCET 2026 Anaesthesiology, 120 questions.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const DNB_PDCET_2026_ANAESTHESIOLOGY_FULL_MOCK_1: Question[] = [
  {
    "id": "dnb-pdcet-2026-anaesthesiology-001",
    "section": "Anaesthesiology",
    "topic": "Preoperative assessment",
    "difficulty": "medium",
    "question": "A patient can climb two flights of stairs without stopping or symptoms. This history most directly suggests which preoperative feature?",
    "options": [
      "Reasonable functional capacity",
      "Severe restrictive lung disease",
      "An obligatory difficult airway",
      "Poor hepatic synthetic function"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ability to perform moderate exertion without symptoms is a practical marker of functional capacity; it does not by itself diagnose airway, lung, or liver disease.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-002",
    "section": "Anaesthesiology",
    "topic": "Airway assessment",
    "difficulty": "medium",
    "question": "During airway examination, the patient opens the mouth and only the hard palate is visible. Which bedside classification is being described?",
    "options": [
      "Cormack-Lehane grade I",
      "Mallampati class IV",
      "ASA physical status IV",
      "Wilson score zero"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Mallampati class IV describes visualization of only the hard palate. Cormack-Lehane grading is a laryngoscopic, not bedside mouth-opening, view.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-003",
    "section": "Anaesthesiology",
    "topic": "Airway anatomy",
    "difficulty": "easy",
    "question": "Which structure is the sensory afferent limb of the gag reflex from the posterior pharynx?",
    "options": [
      "Glossopharyngeal nerve",
      "Facial nerve",
      "Hypoglossal nerve",
      "Accessory nerve"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Pharyngeal sensation for the gag reflex is carried mainly by cranial nerve IX; the motor efferent limb is mainly via the vagus nerve.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-004",
    "section": "Anaesthesiology",
    "topic": "Airway anatomy",
    "difficulty": "medium",
    "question": "A laryngoscope blade placed in the vallecula lifts the epiglottis indirectly by tension on which structure?",
    "options": [
      "Cricothyroid membrane",
      "Posterior cricoarytenoid muscle",
      "Thyrohyoid membrane",
      "Hyoepiglottic ligament"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A Macintosh-type blade in the vallecula tensions the hyoepiglottic ligament, indirectly elevating the epiglottis.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-005",
    "section": "Anaesthesiology",
    "topic": "Preoxygenation",
    "difficulty": "medium",
    "question": "The main purpose of effective preoxygenation before induction of general anaesthesia is to",
    "options": [
      "replace alveolar nitrogen with oxygen and increase the oxygen reservoir",
      "increase carbon dioxide production",
      "eliminate all physiologic shunt",
      "increase haemoglobin concentration"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Denitrogenation replaces alveolar nitrogen with oxygen, increasing stored oxygen and prolonging the time to desaturation during apnoea.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-006",
    "section": "Anaesthesiology",
    "topic": "Difficult airway",
    "difficulty": "hard",
    "question": "After induction, mask ventilation is difficult and the first direct-laryngoscopy attempt gives a poor view. Which principle best reduces harm while subsequent airway plans are considered?",
    "options": [
      "Persist with identical laryngoscopy until successful",
      "Administer more neuromuscular blocker solely to improve oxygen saturation",
      "Prioritize oxygenation and limit repeated traumatic attempts",
      "Immediately abandon all supraglottic airway options"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Difficult-airway management prioritizes oxygenation and avoids repeated identical attempts that cause trauma, bleeding, oedema, and worsening conditions.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-007",
    "section": "Anaesthesiology",
    "topic": "Aspiration risk",
    "difficulty": "medium",
    "question": "Which finding most directly increases the risk of pulmonary aspiration during induction?",
    "options": [
      "A healed forearm fracture",
      "Myopia corrected with spectacles",
      "A full stomach with delayed gastric emptying",
      "A normal fasting glucose"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Residual gastric contents and delayed emptying increase the chance of regurgitation and aspiration during loss of protective airway reflexes.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-008",
    "section": "Anaesthesiology",
    "topic": "Airway physiology",
    "difficulty": "hard",
    "question": "Why does severe obesity often shorten the safe apnoea time after induction?",
    "options": [
      "Closing capacity becomes zero",
      "Haemoglobin loses all affinity for oxygen",
      "Pulmonary blood flow stops during apnoea",
      "Functional residual capacity is reduced while oxygen consumption is increased"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Reduced FRC decreases the oxygen reservoir and higher metabolic oxygen consumption depletes it faster.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-009",
    "section": "Anaesthesiology",
    "topic": "Airway equipment",
    "difficulty": "easy",
    "question": "A bougie is primarily used during tracheal intubation to",
    "options": [
      "measure cuff pressure continuously",
      "deliver volatile anaesthetic",
      "serve as an introducer over which a tracheal tube can be advanced",
      "replace a breathing-system expiratory valve"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An introducer can be passed into the trachea when tube passage or glottic visualization is difficult, after which the tracheal tube is railroaded over it.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-010",
    "section": "Anaesthesiology",
    "topic": "Extubation",
    "difficulty": "hard",
    "question": "Before extubating a patient after a difficult intubation, the most important strategic consideration is",
    "options": [
      "whether the last volatile agent used was isoflurane",
      "whether reintubation would be feasible if airway obstruction occurs",
      "whether the patient prefers a nasal cannula",
      "whether the IV cannula is in the dominant hand"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Extubation is an airway procedure; difficult reintubation risk must be anticipated and a rescue/reintubation plan prepared.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-011",
    "section": "Anaesthesiology",
    "topic": "Inhalational anaesthesia",
    "difficulty": "easy",
    "question": "Minimum alveolar concentration (MAC) is the alveolar concentration of an inhaled anaesthetic that prevents movement to a standard surgical stimulus in",
    "options": [
      "10% of subjects",
      "90% of subjects",
      "50% of subjects",
      "100% of subjects"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MAC is defined at the ED50 for immobility in response to a standard noxious stimulus.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-012",
    "section": "Anaesthesiology",
    "topic": "Inhalational anaesthesia",
    "difficulty": "medium",
    "question": "Which property generally produces faster induction and recovery with an inhaled anaesthetic?",
    "options": [
      "Higher blood-gas partition coefficient",
      "Lower blood-gas partition coefficient",
      "Greater protein binding in plasma",
      "Higher molecular weight alone"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lower blood solubility allows alveolar and brain partial pressures to change more rapidly.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-013",
    "section": "Anaesthesiology",
    "topic": "Nitrous oxide",
    "difficulty": "medium",
    "question": "Nitrous oxide is avoided when a clinically important closed gas space is present because it can",
    "options": [
      "diffuse into the space faster than nitrogen leaves and enlarge it",
      "irreversibly bind haemoglobin",
      "precipitate sodium bicarbonate",
      "abolish hypoxic pulmonary vasoconstriction completely"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Nitrous oxide enters gas-filled spaces rapidly and can expand pneumothorax, bowel gas, middle-ear gas, or intracranial air.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-014",
    "section": "Anaesthesiology",
    "topic": "Desflurane",
    "difficulty": "medium",
    "question": "Which characteristic makes desflurane unsuitable for routine inhalational induction in an awake patient?",
    "options": [
      "It has very high blood solubility",
      "It is pungent and irritates the airway",
      "It is nonvolatile at room temperature",
      "It produces no vapour pressure"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Desflurane is pungent and can provoke coughing, breath-holding, and laryngospasm during inhalational induction.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-015",
    "section": "Anaesthesiology",
    "topic": "Sevoflurane",
    "difficulty": "easy",
    "question": "Which inhaled anaesthetic is commonly chosen for smooth inhalational induction because it is relatively non-pungent?",
    "options": [
      "Desflurane",
      "Ether",
      "Methoxyflurane",
      "Sevoflurane"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Sevoflurane is relatively pleasant/non-irritating and has low blood solubility, making it suitable for inhalational induction.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-016",
    "section": "Anaesthesiology",
    "topic": "Propofol",
    "difficulty": "medium",
    "question": "A common immediate haemodynamic effect of an induction dose of propofol is",
    "options": [
      "marked systemic hypertension",
      "fixed bradycardia with no change in vascular tone",
      "selective pulmonary vasoconstriction",
      "a fall in arterial blood pressure from vasodilation and reduced sympathetic tone"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Propofol commonly lowers blood pressure through vasodilation and some myocardial/sympathetic depression.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-017",
    "section": "Anaesthesiology",
    "topic": "Ketamine",
    "difficulty": "medium",
    "question": "Which feature is most characteristic of ketamine compared with propofol?",
    "options": [
      "It has bronchodilating and sympathomimetic effects",
      "It reliably suppresses sympathetic tone",
      "It is a potent neuromuscular blocker",
      "It has no analgesic effect"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ketamine provides analgesia, tends to preserve sympathetic activity, and can produce bronchodilation.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-018",
    "section": "Anaesthesiology",
    "topic": "Etomidate",
    "difficulty": "hard",
    "question": "Repeated or prolonged exposure to etomidate can suppress adrenal steroid synthesis mainly by inhibiting",
    "options": [
      "11-beta-hydroxylase",
      "acetylcholinesterase",
      "monoamine oxidase B",
      "carbonic anhydrase"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Etomidate inhibits adrenal 11-beta-hydroxylase, reducing cortisol synthesis.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-019",
    "section": "Anaesthesiology",
    "topic": "Barbiturates",
    "difficulty": "hard",
    "question": "Thiopentone is classically avoided in a patient with acute intermittent porphyria because it may",
    "options": [
      "cause malignant hyperthermia in all susceptible patients",
      "irreversibly inhibit plasma cholinesterase",
      "precipitate an acute porphyric attack",
      "produce methaemoglobinaemia in every patient"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Barbiturates can induce hepatic enzymes and precipitate attacks in acute porphyrias.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-020",
    "section": "Anaesthesiology",
    "topic": "Dexmedetomidine",
    "difficulty": "medium",
    "question": "Dexmedetomidine produces sedation primarily through agonism at",
    "options": [
      "beta-2 adrenergic receptors",
      "NMDA receptors",
      "dopamine D2 receptors",
      "alpha-2 adrenergic receptors"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Dexmedetomidine is a selective alpha-2 agonist that provides sedation and sympatholysis with relatively limited respiratory depression.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-021",
    "section": "Anaesthesiology",
    "topic": "Benzodiazepines",
    "difficulty": "easy",
    "question": "Which drug is a competitive antagonist at the benzodiazepine binding site on the GABA-A receptor?",
    "options": [
      "Naloxone",
      "Neostigmine",
      "Sugammadex",
      "Flumazenil"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Flumazenil reverses benzodiazepine effects by competitive antagonism at the benzodiazepine site of GABA-A receptors.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-022",
    "section": "Anaesthesiology",
    "topic": "Opioids",
    "difficulty": "medium",
    "question": "High-dose rapid intravenous fentanyl can cause difficulty with ventilation because of",
    "options": [
      "irreversible diaphragmatic paralysis from sodium-channel block",
      "chest-wall and truncal muscle rigidity",
      "acute methaemoglobinaemia",
      "selective blockade of the phrenic nerve"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Potent opioids, especially rapid/high-dose fentanyl, can produce chest-wall rigidity and make ventilation difficult.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-023",
    "section": "Anaesthesiology",
    "topic": "Opioids",
    "difficulty": "hard",
    "question": "Which opioid is rapidly metabolized by nonspecific blood and tissue esterases, making its context-sensitive half-time very short?",
    "options": [
      "Morphine",
      "Methadone",
      "Remifentanil",
      "Pethidine"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Remifentanil contains an ester linkage and is rapidly hydrolysed by nonspecific esterases independent of hepatic or renal clearance.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-024",
    "section": "Anaesthesiology",
    "topic": "Opioids",
    "difficulty": "hard",
    "question": "Why can morphine have prolonged effects in severe renal failure?",
    "options": [
      "Its active metabolite morphine-6-glucuronide can accumulate",
      "It is converted entirely to nitrous oxide",
      "Its elimination depends only on exhalation",
      "It irreversibly binds albumin"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Morphine-6-glucuronide is renally excreted and can accumulate, prolonging opioid effects.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-025",
    "section": "Anaesthesiology",
    "topic": "Opioid antagonists",
    "difficulty": "medium",
    "question": "After naloxone reverses opioid-induced respiratory depression, continued observation is important because",
    "options": [
      "naloxone may wear off before the opioid does",
      "naloxone permanently blocks all opioid receptors",
      "naloxone has no effect on ventilation",
      "naloxone is converted into morphine"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Naloxone is relatively short acting, so recurrent respiratory depression can occur when the causative opioid lasts longer.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-026",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular blockade",
    "difficulty": "easy",
    "question": "Succinylcholine produces paralysis primarily by",
    "options": [
      "competitive antagonism at muscarinic receptors",
      "persistent depolarization of the motor end plate",
      "inhibition of acetylcholinesterase",
      "blockade of voltage-gated calcium channels in muscle"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Succinylcholine is a depolarizing neuromuscular blocker that activates nicotinic receptors and maintains depolarization initially.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-027",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular blockade",
    "difficulty": "medium",
    "question": "Which neuromuscular blocker undergoes substantial Hofmann elimination?",
    "options": [
      "Atracurium",
      "Rocuronium",
      "Pancuronium",
      "Succinylcholine"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Atracurium undergoes organ-independent Hofmann degradation as well as ester hydrolysis.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-028",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular blockade",
    "difficulty": "medium",
    "question": "Rocuronium is best classified as a",
    "options": [
      "depolarizing ultrashort blocker",
      "benzylisoquinolinium local anaesthetic",
      "cholinesterase inhibitor",
      "nondepolarizing aminosteroid neuromuscular blocker"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rocuronium is an aminosteroid, nondepolarizing neuromuscular blocking drug.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-029",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular reversal",
    "difficulty": "medium",
    "question": "Sugammadex reverses rocuronium-induced block mainly by",
    "options": [
      "encapsulating free rocuronium molecules",
      "inhibiting acetylcholinesterase",
      "stimulating muscarinic receptors",
      "increasing acetylcholine release from motor nerves"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Sugammadex is a modified cyclodextrin that binds steroidal blockers, especially rocuronium and vecuronium, reducing free drug concentration.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-030",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular monitoring",
    "difficulty": "hard",
    "question": "A train-of-four ratio of at least 0.9 at the adductor pollicis is used as an objective target because it indicates",
    "options": [
      "adequate recovery from nondepolarizing neuromuscular block",
      "complete absence of neuromuscular transmission",
      "a phase-I succinylcholine block",
      "deep block requiring immediate intubation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Residual weakness is clinically important below a TOF ratio of about 0.9; objective recovery to at least 0.9 is a common extubation target.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-031",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular reversal",
    "difficulty": "medium",
    "question": "Neostigmine is commonly paired with an antimuscarinic drug during reversal to reduce",
    "options": [
      "nondepolarizing receptor occupancy",
      "local anaesthetic systemic toxicity",
      "muscarinic adverse effects such as bradycardia and secretions",
      "volatile anaesthetic uptake"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Neostigmine raises acetylcholine at both nicotinic and muscarinic synapses; atropine or glycopyrrolate blunts muscarinic effects.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-032",
    "section": "Anaesthesiology",
    "topic": "Succinylcholine",
    "difficulty": "hard",
    "question": "Markedly prolonged paralysis after a standard dose of succinylcholine in an otherwise stable patient should raise suspicion of",
    "options": [
      "glucose-6-phosphate dehydrogenase excess",
      "factor VIII deficiency",
      "hyperthyroidism alone",
      "plasma pseudocholinesterase deficiency or inhibition"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Succinylcholine is hydrolysed by plasma butyrylcholinesterase; reduced activity can markedly prolong its effect.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-033",
    "section": "Anaesthesiology",
    "topic": "Malignant hyperthermia",
    "difficulty": "medium",
    "question": "Which drug directly treats the skeletal-muscle hypermetabolism of malignant hyperthermia?",
    "options": [
      "Atropine",
      "Protamine",
      "Flumazenil",
      "Dantrolene"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Dantrolene reduces calcium release from the sarcoplasmic reticulum through the ryanodine receptor pathway.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-034",
    "section": "Anaesthesiology",
    "topic": "Malignant hyperthermia",
    "difficulty": "medium",
    "question": "Which combination contains two classic triggers of malignant hyperthermia?",
    "options": [
      "Propofol and nitrous oxide",
      "A volatile halogenated anaesthetic and succinylcholine",
      "Midazolam and fentanyl",
      "Local anaesthetic and dexmedetomidine"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Volatile halogenated anaesthetics and succinylcholine are established malignant-hyperthermia triggers; common IV agents are not.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-035",
    "section": "Anaesthesiology",
    "topic": "Local anaesthetics",
    "difficulty": "easy",
    "question": "Local anaesthetics prevent nerve impulse propagation primarily by blocking",
    "options": [
      "nicotinic acetylcholine receptors",
      "potassium leak channels exclusively",
      "voltage-gated sodium channels",
      "ryanodine receptors"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Local anaesthetics bind voltage-gated sodium channels from the intracellular side and prevent action-potential propagation.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-036",
    "section": "Anaesthesiology",
    "topic": "Local anaesthetics",
    "difficulty": "hard",
    "question": "Why is local anaesthetic often less effective in infected, acidic tissue?",
    "options": [
      "The sodium channel disappears from the axon",
      "More drug remains ionized outside the nerve and crosses the membrane poorly",
      "All local anaesthetic is immediately metabolized by bacteria",
      "Acidosis makes every local anaesthetic permanently unionized"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Acidic pH shifts weak-base local anaesthetics toward the ionized form, reducing membrane penetration.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-037",
    "section": "Anaesthesiology",
    "topic": "Local anaesthetic toxicity",
    "difficulty": "medium",
    "question": "Among commonly used long-acting amide local anaesthetics, which is particularly associated with severe cardiotoxicity after intravascular overdose?",
    "options": [
      "Bupivacaine",
      "Chloroprocaine",
      "Procaine",
      "Tetracaine eye drops only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Bupivacaine binds cardiac sodium channels avidly and is classically associated with difficult-to-treat ventricular arrhythmias and cardiovascular collapse in LAST.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-038",
    "section": "Anaesthesiology",
    "topic": "Local anaesthetic toxicity",
    "difficulty": "medium",
    "question": "Intravenous lipid emulsion is an important specific rescue therapy for severe",
    "options": [
      "benzodiazepine withdrawal",
      "local anaesthetic systemic toxicity",
      "carbon monoxide exposure",
      "organophosphate poisoning"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lipid emulsion is part of the resuscitation strategy for severe LAST, particularly cardiovascular toxicity from lipophilic local anaesthetics.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-039",
    "section": "Anaesthesiology",
    "topic": "Spinal anaesthesia",
    "difficulty": "medium",
    "question": "The most important mechanism of hypotension after a typical spinal anaesthetic is",
    "options": [
      "increased catecholamine release",
      "sympathetic blockade causing arterial and venous vasodilation",
      "isolated vagal denervation",
      "acute haemoconcentration"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Neuraxial sympathetic block reduces vascular tone and venous return, producing hypotension.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-040",
    "section": "Anaesthesiology",
    "topic": "Spinal anaesthesia",
    "difficulty": "hard",
    "question": "A hyperbaric intrathecal local-anaesthetic solution tends to move under gravity toward",
    "options": [
      "the highest nondependent region regardless of position",
      "the epidural space through intact dura",
      "the cerebral ventricles only",
      "dependent regions of the subarachnoid space"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hyperbaric solution is denser than CSF, so patient position and gravity influence its spread toward dependent regions.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-041",
    "section": "Anaesthesiology",
    "topic": "Post-dural puncture headache",
    "difficulty": "medium",
    "question": "Which feature is most characteristic of post-dural puncture headache?",
    "options": [
      "It worsens when upright and improves when supine",
      "It is always accompanied by focal paralysis",
      "It is unrelated to posture",
      "It occurs only after general anaesthesia"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CSF leakage after dural puncture produces a classically postural headache, worse sitting/standing and relieved by lying down.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-042",
    "section": "Anaesthesiology",
    "topic": "Epidural anaesthesia",
    "difficulty": "easy",
    "question": "Loss of resistance during lumbar epidural placement is used to identify entry into the",
    "options": [
      "subarachnoid space",
      "intervertebral disc",
      "epidural space",
      "pleural cavity"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The epidural needle is advanced through ligamentum flavum until loss of resistance indicates the epidural space.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-043",
    "section": "Anaesthesiology",
    "topic": "Neuraxial contraindications",
    "difficulty": "medium",
    "question": "Which finding is a major reason to avoid elective neuraxial needle placement until corrected or appropriately assessed?",
    "options": [
      "Controlled myopia",
      "Healed appendectomy scar",
      "A clinically significant coagulation abnormality",
      "Mild seasonal rhinitis"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Neuraxial bleeding in the setting of impaired coagulation can cause spinal/epidural haematoma with neurologic injury.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-044",
    "section": "Anaesthesiology",
    "topic": "High spinal block",
    "difficulty": "hard",
    "question": "Severe bradycardia and hypotension after a rapidly ascending spinal block are most consistent with",
    "options": [
      "isolated blockade of the recurrent laryngeal nerve",
      "acute hypercalcaemia",
      "selective stimulation of cardiac accelerator fibres",
      "extensive sympathetic blockade with reduced venous return"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A high neuraxial block can markedly reduce sympathetic tone and venous return, with blockade of cardioaccelerator fibres contributing to bradycardia.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-045",
    "section": "Anaesthesiology",
    "topic": "Caudal anaesthesia",
    "difficulty": "easy",
    "question": "For a caudal block, the needle is directed through the palpable midline defect between the sacral cornua. Which opening is being used?",
    "options": [
      "Obturator foramen",
      "Sacral hiatus",
      "Greater sciatic notch",
      "Foramen magnum"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sacral hiatus is the posterior distal sacral opening used to enter the caudal epidural space.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-046",
    "section": "Anaesthesiology",
    "topic": "Anaesthesia machine safety",
    "difficulty": "medium",
    "question": "The pin-index safety system on anaesthetic gas cylinders is designed primarily to",
    "options": [
      "measure inspired oxygen continuously",
      "prevent attachment of the wrong gas cylinder to a yoke",
      "prevent all pipeline cross-connections",
      "regulate vaporizer temperature"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Different pin positions mechanically key cylinder valves to the appropriate yoke, reducing wrong-cylinder attachment.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-047",
    "section": "Anaesthesiology",
    "topic": "Flowmeters",
    "difficulty": "hard",
    "question": "On a traditional anaesthesia machine with several flowmeters, the oxygen flowmeter is positioned downstream nearest the common gas outlet mainly to",
    "options": [
      "increase nitrous oxide solubility",
      "make oxygen the first gas to enter the machine",
      "reduce the chance that an upstream leak delivers a hypoxic mixture",
      "eliminate the need for an oxygen analyser"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Placing oxygen downstream means leaks in upstream flowmeter components are less likely to selectively lose oxygen before the common gas outlet.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-048",
    "section": "Anaesthesiology",
    "topic": "Vaporizers",
    "difficulty": "medium",
    "question": "A conventional variable-bypass vaporizer controls anaesthetic concentration mainly by",
    "options": [
      "injecting liquid anaesthetic directly into the trachea",
      "absorbing carbon dioxide chemically",
      "splitting fresh gas between a bypass chamber and a vaporizing chamber",
      "compressing oxygen to a liquid state"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Variable-bypass vaporizers divide gas flow; the fraction passing through the vaporizing chamber becomes saturated and is remixed with bypass gas.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-049",
    "section": "Anaesthesiology",
    "topic": "Desflurane vaporizer",
    "difficulty": "hard",
    "question": "Why does desflurane require a specialized heated, pressurized vaporizer?",
    "options": [
      "Its boiling point is near room temperature and its saturated vapour pressure is high",
      "It is a nonvolatile solid at room temperature",
      "It reacts explosively with oxygen in ordinary vaporizers",
      "It has no measurable vapour pressure"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Desflurane has unusual physical properties including a boiling point near room temperature, so conventional variable-bypass vaporization is unsuitable.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-050",
    "section": "Anaesthesiology",
    "topic": "Carbon dioxide absorption",
    "difficulty": "easy",
    "question": "In a circle breathing system, exhausted carbon dioxide absorbent is most directly suggested by",
    "options": [
      "a falling inspired oxygen concentration with zero CO2",
      "inspired carbon dioxide appearing on the capnogram",
      "loss of the ECG trace",
      "a higher pulse-oximeter plethysmographic amplitude"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ineffective CO2 absorption permits rebreathing, producing measurable inspired CO2.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-051",
    "section": "Anaesthesiology",
    "topic": "Circle breathing system",
    "difficulty": "medium",
    "question": "Unidirectional valves in a circle system primarily ensure that",
    "options": [
      "all exhaled gas is vented without recirculation",
      "oxygen bypasses the patient during inspiration",
      "the reservoir bag cannot fill",
      "gas flows around the circuit in one direction and limits rebreathing of CO2 after absorption"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Inspiratory and expiratory one-way valves direct flow through the absorber and prevent inappropriate reverse flow.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-052",
    "section": "Anaesthesiology",
    "topic": "Mapleson systems",
    "difficulty": "hard",
    "question": "Which Mapleson system is most efficient for spontaneous ventilation at an appropriate fresh-gas flow?",
    "options": [
      "Mapleson D",
      "Mapleson F only",
      "Bain circuit during all spontaneous ventilation",
      "Mapleson A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Mapleson A is the most efficient classic Mapleson arrangement for spontaneous ventilation; D/Bain is more efficient for controlled ventilation.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-053",
    "section": "Anaesthesiology",
    "topic": "Bain circuit",
    "difficulty": "medium",
    "question": "The Pethick test is used to assess the integrity of the",
    "options": [
      "inner fresh-gas tube of a Bain circuit",
      "tracheal tube cuff pilot balloon",
      "pulse-oximeter probe",
      "oxygen pipeline wall outlet"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A disconnected or damaged inner tube in a Bain circuit can cause dangerous rebreathing; the Pethick test checks its integrity.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-054",
    "section": "Anaesthesiology",
    "topic": "Capnography",
    "difficulty": "easy",
    "question": "Most operating-room capnometers measure carbon dioxide by",
    "options": [
      "ultraviolet fluorescence",
      "electrochemical oxygen reduction",
      "Doppler shift",
      "infrared absorption"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CO2 absorbs infrared radiation at characteristic wavelengths, which is the basis of mainstream and sidestream capnometry.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-055",
    "section": "Anaesthesiology",
    "topic": "Pulse oximetry",
    "difficulty": "medium",
    "question": "Pulse oximetry estimates arterial oxygen saturation primarily by comparing pulsatile light absorption at",
    "options": [
      "a single wavelength absorbed only by plasma",
      "gamma-ray wavelengths",
      "two wavelengths where oxyhaemoglobin and deoxyhaemoglobin absorb differently",
      "ultrasound frequencies"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Red and infrared light absorption differs between oxyhaemoglobin and deoxyhaemoglobin; isolating the pulsatile component estimates arterial saturation.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-056",
    "section": "Anaesthesiology",
    "topic": "Noninvasive blood pressure",
    "difficulty": "medium",
    "question": "Using a blood-pressure cuff that is too narrow for the patient’s arm most often causes the measured pressure to be",
    "options": [
      "falsely low in every case",
      "exactly equal to intra-arterial pressure",
      "unrecordable because oscillations disappear",
      "falsely high"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An undersized/narrow cuff requires greater pressure to occlude the artery and tends to overestimate blood pressure.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-057",
    "section": "Anaesthesiology",
    "topic": "Arterial pressure monitoring",
    "difficulty": "hard",
    "question": "For systemic arterial pressure monitoring in a supine patient, the pressure transducer is commonly zeroed at the level of the",
    "options": [
      "external auditory meatus for all operations",
      "right atrium",
      "umbilicus regardless of position",
      "radial artery insertion site height only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Zeroing at the right-atrial level establishes the hydrostatic reference for systemic arterial pressure; other reference levels may be chosen for specific cerebral targets.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-058",
    "section": "Anaesthesiology",
    "topic": "ECG monitoring",
    "difficulty": "medium",
    "question": "Which ECG lead is commonly useful for detecting atrial activity and many perioperative arrhythmias because P waves are prominent?",
    "options": [
      "Lead aVR only",
      "Lead II",
      "Lead V9 only",
      "Lead III only because P waves are absent"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lead II aligns well with the atrial depolarization vector and often shows P waves clearly.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-059",
    "section": "Anaesthesiology",
    "topic": "Central venous pressure",
    "difficulty": "hard",
    "question": "The “a” wave of a normal central venous pressure waveform corresponds to",
    "options": [
      "tricuspid valve opening during rapid filling",
      "ventricular ejection into the aorta",
      "right atrial contraction",
      "pulmonary valve closure"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The a wave is generated by atrial contraction and is absent when organized atrial contraction is absent, such as atrial fibrillation.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-060",
    "section": "Anaesthesiology",
    "topic": "Depth of anaesthesia monitoring",
    "difficulty": "medium",
    "question": "The bispectral index (BIS) is derived primarily from processed",
    "options": [
      "arterial pressure waveforms",
      "electroencephalographic signals",
      "neuromuscular electromyography alone",
      "capnogram morphology"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "BIS processes frontal EEG features to generate a dimensionless index associated with hypnotic depth.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-061",
    "section": "Anaesthesiology",
    "topic": "Neuromuscular monitoring",
    "difficulty": "medium",
    "question": "Fade during train-of-four stimulation is characteristic of",
    "options": [
      "nondepolarizing neuromuscular blockade",
      "normal full recovery",
      "pure phase-I succinylcholine block",
      "local infiltration anaesthesia"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Nondepolarizing block impairs presynaptic acetylcholine mobilization and produces progressive decrement (fade) across TOF responses.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-062",
    "section": "Anaesthesiology",
    "topic": "Oxygen transport",
    "difficulty": "medium",
    "question": "Which change shifts the oxyhaemoglobin dissociation curve to the right?",
    "options": [
      "Decreased PCO2",
      "Increased temperature",
      "Increased pH",
      "Reduced 2,3-DPG"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Higher temperature, CO2, H+ and 2,3-DPG reduce haemoglobin oxygen affinity and shift the curve right.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-063",
    "section": "Anaesthesiology",
    "topic": "Respiratory physiology",
    "difficulty": "easy",
    "question": "Functional residual capacity is the lung volume remaining after",
    "options": [
      "a maximal forced expiration",
      "a normal passive expiration",
      "a maximal inspiration",
      "closure of the glottis at total lung capacity"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "FRC is the equilibrium volume at the end of a normal tidal expiration.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-064",
    "section": "Anaesthesiology",
    "topic": "Pregnancy physiology",
    "difficulty": "medium",
    "question": "During late pregnancy, functional residual capacity is typically",
    "options": [
      "markedly increased",
      "unchanged in every patient",
      "equal to total lung capacity",
      "decreased"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The elevated diaphragm reduces FRC in pregnancy; increased oxygen consumption also accelerates desaturation during apnoea.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-065",
    "section": "Anaesthesiology",
    "topic": "Respiratory physiology",
    "difficulty": "medium",
    "question": "Closing capacity generally does what with increasing age?",
    "options": [
      "Increases",
      "Falls to zero",
      "Remains fixed from childhood",
      "Becomes identical to residual volume in every person"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Small-airway closure occurs at progressively higher lung volumes with age, so closing capacity increases.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-066",
    "section": "Anaesthesiology",
    "topic": "Capnography physiology",
    "difficulty": "medium",
    "question": "In a patient with normal lungs and circulation, end-tidal PCO2 is usually",
    "options": [
      "much higher than mixed-venous PCO2",
      "identical to inspired PCO2",
      "zero at the end of expiration",
      "slightly lower than arterial PCO2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Alveolar dead-space dilution makes ETCO2 normally a few mmHg lower than PaCO2.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-067",
    "section": "Anaesthesiology",
    "topic": "Ventilation",
    "difficulty": "easy",
    "question": "Respiratory-system compliance is defined as",
    "options": [
      "pressure divided by gas flow only",
      "airway resistance multiplied by respiratory rate",
      "change in volume divided by change in pressure",
      "oxygen consumption divided by cardiac output"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Compliance quantifies distensibility: C = ΔV/ΔP.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-068",
    "section": "Anaesthesiology",
    "topic": "Mechanical ventilation",
    "difficulty": "medium",
    "question": "Adding positive end-expiratory pressure (PEEP) can improve oxygenation mainly by",
    "options": [
      "eliminating carbon dioxide production",
      "increasing haemoglobin concentration",
      "abolishing all pulmonary shunt regardless of cause",
      "recruiting or stabilizing alveoli and increasing end-expiratory lung volume"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "PEEP helps prevent end-expiratory alveolar collapse, recruits susceptible units, and can improve V/Q matching and oxygenation.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-069",
    "section": "Anaesthesiology",
    "topic": "Mechanical ventilation",
    "difficulty": "hard",
    "question": "A potential haemodynamic consequence of excessive PEEP is",
    "options": [
      "obligatory severe hypertension",
      "increased preload in all patients",
      "complete loss of intrathoracic pressure transmission",
      "reduced venous return and cardiac output"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Higher intrathoracic pressure can reduce systemic venous return and right-heart filling, lowering cardiac output.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-070",
    "section": "Anaesthesiology",
    "topic": "One-lung ventilation",
    "difficulty": "hard",
    "question": "During one-lung ventilation, oxygen saturation suddenly falls after patient repositioning. What should be checked early because it is a common reversible cause?",
    "options": [
      "Serum amylase",
      "Position of the lung-isolation device or tracheal tube",
      "Pupillary size",
      "Urinary ketones"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Tube/bronchial-blocker displacement is common after positioning and can obstruct or ventilate the wrong lung; position should be reassessed, often with bronchoscopy.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-071",
    "section": "Anaesthesiology",
    "topic": "Acid-base",
    "difficulty": "medium",
    "question": "An arterial blood gas shows pH 7.25 with an elevated PaCO2 and no primary fall in bicarbonate. The primary disorder is",
    "options": [
      "respiratory alkalosis",
      "metabolic alkalosis",
      "respiratory acidosis",
      "high-anion-gap metabolic acidosis"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A low pH driven by increased PaCO2 indicates primary respiratory acidosis.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-072",
    "section": "Anaesthesiology",
    "topic": "Acid-base",
    "difficulty": "hard",
    "question": "The plasma anion gap is conventionally estimated as",
    "options": [
      "K+ + Cl− − Na+",
      "HCO3− − PaCO2",
      "Na+ − (Cl− + HCO3−)",
      "Na+ + Cl− + HCO3−"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The common potassium-free anion-gap formula is Na − (Cl + HCO3).",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-073",
    "section": "Anaesthesiology",
    "topic": "Acid-base",
    "difficulty": "hard",
    "question": "A patient with metabolic acidosis hyperventilates. This respiratory response primarily serves to",
    "options": [
      "lower PaCO2 and partially compensate the fall in pH",
      "raise PaCO2 to normalize bicarbonate",
      "increase fixed-acid production",
      "eliminate renal bicarbonate excretion"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hyperventilation lowers carbon dioxide, reducing carbonic acid and partially compensating metabolic acidaemia.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-074",
    "section": "Anaesthesiology",
    "topic": "Cardiovascular physiology",
    "difficulty": "medium",
    "question": "Left-ventricular myocardial blood flow occurs predominantly during",
    "options": [
      "peak systole",
      "diastole",
      "isovolumic contraction only",
      "atrial systole exclusively"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Intramyocardial compression during systole limits left-coronary flow, so perfusion is greatest in diastole.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-075",
    "section": "Anaesthesiology",
    "topic": "Cardiac output",
    "difficulty": "hard",
    "question": "The Fick principle calculates cardiac output using oxygen consumption divided by the",
    "options": [
      "systolic-to-diastolic pressure difference",
      "alveolar-to-arterial oxygen tension difference",
      "difference between inspired and expired nitrogen only",
      "arterial-to-mixed-venous oxygen content difference"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By conservation of mass, VO2 = CO × (CaO2 − CvO2), so CO = VO2/(CaO2−CvO2).",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-076",
    "section": "Anaesthesiology",
    "topic": "Ultrasound-guided regional anaesthesia",
    "difficulty": "hard",
    "question": "During an ultrasound-guided peripheral nerve block, injection produces visible swelling of the nerve together with unusually high resistance to injection. What is the safest immediate action?",
    "options": [
      "Increase injection pressure to complete the planned volume",
      "Continue slowly because nerve expansion confirms correct placement",
      "Add saline to reduce the local-anaesthetic concentration",
      "Stop injecting and reposition the needle before giving more local anaesthetic"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Nerve swelling with high injection resistance is a warning for intraneural or intrafascicular needle position and possible injection injury. Injection should be stopped and the needle repositioned before further local anaesthetic is administered.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-077",
    "section": "Anaesthesiology",
    "topic": "Cerebral physiology",
    "difficulty": "medium",
    "question": "Acute lowering of PaCO2 decreases intracranial pressure mainly by causing",
    "options": [
      "cerebral arteriolar vasoconstriction",
      "cerebral arteriolar vasodilation",
      "increased CSF production",
      "acute cerebral venous thrombosis"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hypocapnia constricts cerebral vessels, reducing cerebral blood volume and temporarily lowering ICP.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-078",
    "section": "Anaesthesiology",
    "topic": "Neuroanaesthesia",
    "difficulty": "hard",
    "question": "Cerebral perfusion pressure is approximated clinically as",
    "options": [
      "intracranial pressure minus mean arterial pressure",
      "systolic pressure plus intracranial pressure",
      "mean arterial pressure minus intracranial pressure",
      "central venous pressure minus PaCO2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CPP ≈ MAP − ICP when venous pressure is not the limiting downstream pressure.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-079",
    "section": "Anaesthesiology",
    "topic": "Raised intracranial pressure",
    "difficulty": "medium",
    "question": "The classic Cushing response to markedly raised intracranial pressure includes hypertension, bradycardia, and",
    "options": [
      "profound hypoglycaemia",
      "isolated tachypnoea with hypotension",
      "abnormal or irregular respiration",
      "generalized urticaria"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Cushing triad reflects brainstem effects of severe intracranial hypertension: hypertension, bradycardia, and altered respiration.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-080",
    "section": "Anaesthesiology",
    "topic": "Venous air embolism",
    "difficulty": "hard",
    "question": "In an anaesthetized patient in a position where venous air embolism is possible, a sudden unexplained fall in end-tidal CO2 can reflect",
    "options": [
      "increased CO2 production from fever only",
      "complete airway humidification",
      "acute increase in cardiac output",
      "an abrupt reduction in pulmonary perfusion from entrained air"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Venous air can obstruct pulmonary blood flow, increasing dead space and abruptly lowering ETCO2.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-081",
    "section": "Anaesthesiology",
    "topic": "Fluid therapy",
    "difficulty": "medium",
    "question": "Large volumes of 0.9% saline can contribute to which acid-base disturbance?",
    "options": [
      "Respiratory alkalosis from chloride loss",
      "High-anion-gap ketoacidosis directly",
      "Hyperchloremic metabolic acidosis",
      "Metabolic alkalosis from bicarbonate loading"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The high chloride content of normal saline can lower strong-ion difference and cause a non-anion-gap hyperchloremic metabolic acidosis.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-082",
    "section": "Anaesthesiology",
    "topic": "Fluid therapy",
    "difficulty": "easy",
    "question": "Crystalloid solutions distribute primarily within the",
    "options": [
      "intracellular compartment only",
      "extracellular fluid compartment",
      "red-cell mass",
      "bone mineral compartment"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Isotonic crystalloids remain in extracellular water and distribute between plasma and interstitial spaces.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-083",
    "section": "Anaesthesiology",
    "topic": "Blood transfusion",
    "difficulty": "medium",
    "question": "Citrate in rapidly transfused blood products can cause",
    "options": [
      "severe hypermagnesaemia in every patient",
      "metabolic alkalosis from potassium loss only",
      "ionized hypocalcaemia",
      "irreversible methaemoglobinaemia"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Citrate chelates ionized calcium; rapid or massive transfusion can exceed citrate metabolism and produce hypocalcaemia.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-084",
    "section": "Anaesthesiology",
    "topic": "Blood storage",
    "difficulty": "medium",
    "question": "As red-cell units age during storage, the extracellular potassium concentration in the unit generally",
    "options": [
      "increases",
      "falls to zero",
      "remains exactly unchanged",
      "is converted entirely to calcium"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Potassium leaks from stored erythrocytes over time, increasing supernatant potassium concentration.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-085",
    "section": "Anaesthesiology",
    "topic": "Transfusion reactions",
    "difficulty": "easy",
    "question": "An acute major ABO-incompatible red-cell transfusion most characteristically causes",
    "options": [
      "intravascular haemolysis",
      "isolated iron deficiency",
      "delayed vitamin K deficiency",
      "selective platelet activation without haemolysis"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Preformed anti-A or anti-B antibodies can cause complement-mediated intravascular haemolysis in major ABO incompatibility.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-086",
    "section": "Anaesthesiology",
    "topic": "TRALI",
    "difficulty": "hard",
    "question": "Acute hypoxaemia with bilateral pulmonary infiltrates soon after transfusion, without evidence of circulatory overload, most strongly suggests",
    "options": [
      "transfusion-associated circulatory overload (TACO)",
      "transfusion-related acute lung injury (TRALI)",
      "isolated febrile non-haemolytic reaction",
      "delayed haemolytic reaction weeks later"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "TRALI is an acute noncardiogenic lung injury temporally related to transfusion and lacks hydrostatic volume-overload features.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-087",
    "section": "Anaesthesiology",
    "topic": "TACO",
    "difficulty": "medium",
    "question": "Which finding favors transfusion-associated circulatory overload over TRALI?",
    "options": [
      "Normal filling pressures with hypotension",
      "Isolated urticaria without dyspnoea",
      "A positive direct antiglobulin test with haemoglobinuria",
      "Elevated jugular venous pressure with hypertension and volume overload"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "TACO is hydrostatic pulmonary oedema from volume overload and commonly has raised filling pressures, hypertension, and signs of fluid excess.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-088",
    "section": "Anaesthesiology",
    "topic": "Coagulation",
    "difficulty": "medium",
    "question": "Perioperative hypothermia can worsen surgical bleeding partly because it",
    "options": [
      "increases fibrinogen synthesis instantly",
      "eliminates fibrinolysis",
      "raises platelet count several-fold",
      "impairs platelet function and coagulation-enzyme activity"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hypothermia impairs platelet function and enzymatic coagulation reactions, contributing to coagulopathy.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-089",
    "section": "Anaesthesiology",
    "topic": "Coagulation monitoring",
    "difficulty": "hard",
    "question": "A major advantage of thromboelastography or rotational thromboelastometry in active bleeding is that it",
    "options": [
      "assesses the evolving viscoelastic properties of whole-blood clot formation and breakdown",
      "measures only the platelet count",
      "directly images coronary arteries",
      "replaces blood typing"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Viscoelastic tests provide dynamic information on clot initiation, strength, and lysis, which can guide targeted haemostatic therapy.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-090",
    "section": "Anaesthesiology",
    "topic": "Massive haemorrhage",
    "difficulty": "medium",
    "question": "Why is active warming important during major haemorrhage and transfusion?",
    "options": [
      "It helps prevent the hypothermia component of the trauma/coagulopathy cycle",
      "It prevents all transfusion reactions",
      "It converts citrate directly into fibrinogen",
      "It guarantees normocalcaemia"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hypothermia worsens coagulopathy and physiologic instability; warming fluids, blood, and the patient reduces this contributor.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-091",
    "section": "Anaesthesiology",
    "topic": "Obstetric anaesthesia",
    "difficulty": "medium",
    "question": "In late pregnancy, supine hypotension from aortocaval compression is reduced by",
    "options": [
      "Trendelenburg positioning with right tilt",
      "tight abdominal binding",
      "left uterine displacement",
      "hyperventilation to severe hypocapnia"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Displacing the gravid uterus to the left reduces compression of the inferior vena cava and aorta.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-092",
    "section": "Anaesthesiology",
    "topic": "Placental drug transfer",
    "difficulty": "hard",
    "question": "A weakly basic local anaesthetic has crossed the placenta. If fetal blood becomes more acidic than maternal blood, which mechanism can increase accumulation of the drug in the fetus?",
    "options": [
      "Greater conversion of the drug to its uncharged form in fetal blood",
      "Loss of maternal protein binding that prevents placental transfer",
      "Accelerated placental metabolism of the ionized drug",
      "Protonation in fetal blood, reducing back-diffusion of the ionized drug"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Weak bases become more protonated in an acidic compartment. The ionized form crosses lipid membranes poorly, so fetal acidosis can trap a greater fraction of a weakly basic drug in fetal blood by limiting diffusion back across the placenta.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-093",
    "section": "Anaesthesiology",
    "topic": "Obstetric anaesthesia",
    "difficulty": "hard",
    "question": "Uteroplacental perfusion is particularly vulnerable to maternal hypotension because uterine blood flow is",
    "options": [
      "independent of maternal arterial pressure",
      "maintained by a separate fetal heart pump",
      "strongly dependent on maternal perfusion pressure and has limited autoregulatory reserve",
      "determined only by maternal PaCO2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Uterine flow lacks robust autoregulation, so maternal hypotension can reduce placental perfusion.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-094",
    "section": "Anaesthesiology",
    "topic": "Magnesium therapy",
    "difficulty": "medium",
    "question": "An early clinical sign of significant magnesium toxicity in an obstetric patient is",
    "options": [
      "marked hyperreflexia",
      "loss of deep-tendon reflexes",
      "fixed mydriasis only",
      "isolated hyperglycaemia"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "As magnesium levels rise, neuromuscular transmission is depressed; loss of deep tendon reflexes is an important warning sign before severe respiratory/cardiac toxicity.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-095",
    "section": "Anaesthesiology",
    "topic": "Uterotonics",
    "difficulty": "hard",
    "question": "Rapid intravenous administration of oxytocin can produce",
    "options": [
      "profound sustained hypertension in every patient",
      "irreversible bronchial paralysis",
      "vasodilation with hypotension and reflex tachycardia",
      "complete neuromuscular blockade"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Oxytocin can cause vasodilation, hypotension, and tachycardia, especially when given rapidly.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-096",
    "section": "Anaesthesiology",
    "topic": "Pediatric physiology",
    "difficulty": "medium",
    "question": "Compared with adults, infants generally have",
    "options": [
      "lower oxygen consumption per kilogram",
      "the same functional residual capacity per kilogram in all states",
      "higher oxygen consumption per kilogram",
      "no risk of rapid desaturation"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Infants have high metabolic oxygen demand and limited oxygen reserve, contributing to rapid desaturation during apnoea.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-097",
    "section": "Anaesthesiology",
    "topic": "Pediatric cardiovascular physiology",
    "difficulty": "medium",
    "question": "Why can significant bradycardia rapidly reduce cardiac output in an infant?",
    "options": [
      "Stroke volume is relatively constrained, so cardiac output is strongly heart-rate dependent",
      "Infants have no sympathetic nervous system",
      "Systemic vascular resistance is always zero",
      "The ductus arteriosus must remain open for all cardiac output"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Infant myocardium has limited ability to increase stroke volume, making heart rate an important determinant of cardiac output.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-098",
    "section": "Anaesthesiology",
    "topic": "Pediatric cardiac anaesthesia",
    "difficulty": "hard",
    "question": "During induction of anaesthesia in a child with tetralogy of Fallot, a hypercyanotic spell develops with worsening right-to-left shunting. Which drug most directly helps by increasing systemic vascular resistance?",
    "options": [
      "Nitroglycerin",
      "Phenylephrine",
      "Dobutamine",
      "Furosemide"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Increasing systemic vascular resistance reduces the pressure advantage for right-to-left shunting across the ventricular septal defect and can improve pulmonary blood flow during a hypercyanotic spell. An alpha-agonist such as phenylephrine is therefore appropriate.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-099",
    "section": "Anaesthesiology",
    "topic": "Pediatric airway",
    "difficulty": "hard",
    "question": "During anaesthesia in a child, sudden bradycardia after a period of difficult ventilation should first raise concern for",
    "options": [
      "isolated hypercalcaemia",
      "hypoxaemia",
      "acute iron deficiency",
      "hyperthyroidism"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hypoxaemia is a common and important cause of perioperative bradycardia in children, particularly when ventilation has been inadequate.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-100",
    "section": "Anaesthesiology",
    "topic": "Pediatric fluids",
    "difficulty": "medium",
    "question": "Because infants have a larger extracellular-water fraction than adults, dehydration can produce clinically important",
    "options": [
      "permanent hypervolaemia",
      "inability to lose sodium",
      "zero change in perfusion",
      "intravascular volume depletion relatively quickly"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A larger extracellular fluid compartment and high turnover make infants susceptible to relatively rapid volume depletion with fluid losses.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-101",
    "section": "Anaesthesiology",
    "topic": "Geriatric anaesthesia",
    "difficulty": "medium",
    "question": "How does minimum alveolar concentration for volatile anaesthetics generally change with advancing age?",
    "options": [
      "It decreases",
      "It increases steadily",
      "It is completely age independent",
      "It doubles after age 65"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MAC decreases with age, so older patients generally require lower alveolar concentrations for an equivalent effect.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-102",
    "section": "Anaesthesiology",
    "topic": "Geriatric pharmacology",
    "difficulty": "medium",
    "question": "Compared with a healthy young adult, an elderly patient often requires a smaller induction dose of propofol because of",
    "options": [
      "increased pharmacodynamic sensitivity and altered distribution/clearance",
      "complete resistance to hypnotics",
      "obligatory enzyme induction",
      "increased lean body mass in every patient"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ageing increases sensitivity to many anaesthetics and changes central volume/distribution and clearance, so dose requirements often decrease.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-103",
    "section": "Anaesthesiology",
    "topic": "Neuroanaesthesia",
    "difficulty": "medium",
    "question": "Propofol generally has what effect on cerebral metabolic rate and cerebral blood flow?",
    "options": [
      "It increases both markedly",
      "It increases metabolism while abolishing blood flow",
      "It decreases both",
      "It has no cerebral effect"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Propofol reduces cerebral metabolic rate and, through flow-metabolism coupling and vascular effects, usually reduces cerebral blood flow and ICP.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-104",
    "section": "Anaesthesiology",
    "topic": "Positioning complications",
    "difficulty": "hard",
    "question": "During a long prone spinal procedure, preventing direct external pressure on the eyes is important because pressure can contribute to",
    "options": [
      "improved retinal perfusion",
      "mydriasis without injury",
      "increased tear production only",
      "ocular injury and postoperative visual loss"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Direct orbital pressure can injure the eye and compromise perfusion; careful positioning keeps the globes free of pressure.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-105",
    "section": "Anaesthesiology",
    "topic": "Tourniquet physiology",
    "difficulty": "hard",
    "question": "After release of a prolonged limb tourniquet, which transient systemic change can occur as metabolites wash out?",
    "options": [
      "Immediate severe hypokalaemia with alkalosis",
      "A rise in potassium and carbon dioxide with a fall in pH",
      "Complete cessation of venous return",
      "A sustained fall in carbon dioxide from the limb"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ischaemic metabolites accumulated in the limb enter the circulation after release, transiently increasing CO2, acid load, and potassium.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-106",
    "section": "Anaesthesiology",
    "topic": "Orthopaedic anaesthesia",
    "difficulty": "hard",
    "question": "During a cemented hemiarthroplasty, arterial pressure and oxygen saturation fall abruptly just after femoral cement and prosthesis insertion. Which syndrome best fits this timing and pattern?",
    "options": [
      "Transfusion-associated circulatory overload",
      "Bone cement implantation syndrome",
      "Serotonin syndrome",
      "Post-dural puncture headache"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Bone cement implantation syndrome can present around cementation or prosthesis insertion with acute hypoxaemia, hypotension, pulmonary hypertension, arrhythmia, or cardiovascular collapse.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-107",
    "section": "Anaesthesiology",
    "topic": "Urologic anaesthesia",
    "difficulty": "medium",
    "question": "Classic TURP syndrome during monopolar resection with absorption of hypotonic irrigation fluid is associated with",
    "options": [
      "hypernatraemia from water loss",
      "isolated hypercalcaemia",
      "dilutional hyponatraemia and neurologic symptoms",
      "metabolic alkalosis from gastric suction"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Systemic absorption of electrolyte-free hypotonic irrigant can cause acute dilutional hyponatraemia, cerebral symptoms, and volume disturbances.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-108",
    "section": "Anaesthesiology",
    "topic": "Endocrine anaesthesia",
    "difficulty": "hard",
    "question": "In preoperative preparation for pheochromocytoma, alpha-adrenergic blockade is established before beta-blockade primarily to avoid",
    "options": [
      "irreversible vagal blockade",
      "unopposed alpha vasoconstriction and hypertensive crisis",
      "acute local anaesthetic toxicity",
      "abolition of cortisol synthesis"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Giving beta blockade first can leave catecholamine-mediated alpha vasoconstriction unopposed, provoking severe hypertension.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-109",
    "section": "Anaesthesiology",
    "topic": "Laparoscopic anaesthesia",
    "difficulty": "medium",
    "question": "Carbon dioxide pneumoperitoneum commonly tends to",
    "options": [
      "increase PaCO2 unless minute ventilation is adjusted",
      "eliminate carbon dioxide absorption",
      "cause immediate respiratory alkalosis in every patient",
      "reduce intra-abdominal pressure to zero"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CO2 is absorbed from the peritoneal cavity, increasing CO2 load and PaCO2 unless ventilation is increased appropriately.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-110",
    "section": "Anaesthesiology",
    "topic": "Ophthalmic anaesthesia",
    "difficulty": "hard",
    "question": "The oculocardiac reflex has which afferent-efferent pathway?",
    "options": [
      "Vagal afferent and trigeminal efferent",
      "Trigeminal afferent and vagal efferent",
      "Phrenic afferent and sympathetic efferent",
      "Optic afferent and facial efferent"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Traction on extraocular structures sends afferent impulses mainly via the trigeminal nerve; the cardiac efferent limb is vagal and may cause bradycardia.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-111",
    "section": "Anaesthesiology",
    "topic": "Airway fire",
    "difficulty": "medium",
    "question": "The classic operating-room fire triad consists of an ignition source, fuel, and",
    "options": [
      "an oxidizer such as oxygen or nitrous oxide",
      "carbon dioxide absorber",
      "intravenous crystalloid",
      "neuromuscular monitor"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A fire requires fuel, ignition, and an oxidizer; oxygen-enriched environments make airway fires especially hazardous.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-112",
    "section": "Anaesthesiology",
    "topic": "Jet ventilation",
    "difficulty": "hard",
    "question": "During rigid bronchoscopy with jet ventilation, airway pressure rises while chest excursion becomes progressively limited. Which problem should be suspected first because it can rapidly cause barotrauma?",
    "options": [
      "Excessive nitrogen washout causing low inspired oxygen",
      "A tighter tracheal-tube cuff seal",
      "Venous air entrainment through the bronchoscope",
      "Obstructed expiratory egress causing air trapping"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Jet ventilation depends on an adequate pathway for passive exhalation. If expiratory egress is obstructed, delivered gas can accumulate, causing dynamic hyperinflation, rising intrathoracic pressure and barotrauma.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-113",
    "section": "Anaesthesiology",
    "topic": "PACU airway",
    "difficulty": "easy",
    "question": "In an obtunded patient immediately after general anaesthesia, a common cause of upper-airway obstruction is",
    "options": [
      "posterior displacement of relaxed tongue and pharyngeal soft tissue",
      "acute aortic dissection",
      "hyperthyroidism",
      "renal tubular acidosis"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Loss of pharyngeal muscle tone allows the tongue/soft tissues to obstruct the upper airway; positioning and airway maneuvers often relieve it.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-114",
    "section": "Anaesthesiology",
    "topic": "Postoperative respiratory care",
    "difficulty": "medium",
    "question": "Residual nondepolarizing neuromuscular block after extubation increases the risk of",
    "options": [
      "upper-airway weakness and postoperative pulmonary complications",
      "sustained hyperreflexia",
      "irreversible hypertension",
      "increased diaphragmatic strength"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Residual weakness impairs pharyngeal function, ventilation, and airway protection, increasing hypoxaemia and pulmonary complication risk.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-115",
    "section": "Anaesthesiology",
    "topic": "Postoperative shivering",
    "difficulty": "medium",
    "question": "A clinically important consequence of intense postoperative shivering is",
    "options": [
      "decreased metabolic rate",
      "complete analgesia",
      "increased oxygen consumption and carbon dioxide production",
      "reduced catecholamine release in all patients"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Shivering is metabolically expensive and can substantially increase oxygen demand and CO2 production.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-116",
    "section": "Anaesthesiology",
    "topic": "Postoperative nausea and vomiting",
    "difficulty": "medium",
    "question": "Which patient factor is a recognized independent risk factor for postoperative nausea and vomiting in adults?",
    "options": [
      "Chronic smoking",
      "Male sex",
      "Absence of any previous motion sickness",
      "Female sex"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Common PONV risk models include female sex, nonsmoking status, prior PONV/motion sickness, and postoperative opioid use.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-117",
    "section": "Anaesthesiology",
    "topic": "Acute pain",
    "difficulty": "easy",
    "question": "The main rationale for multimodal postoperative analgesia is to",
    "options": [
      "guarantee zero pain in every patient",
      "avoid all non-opioid analgesics",
      "replace monitoring of respiratory depression",
      "use drugs or techniques with different mechanisms to improve analgesia while reducing reliance on any single agent"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Combining complementary analgesic mechanisms can improve pain control and reduce opioid dose and opioid-related adverse effects.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-118",
    "section": "Anaesthesiology",
    "topic": "Neuraxial opioids",
    "difficulty": "hard",
    "question": "A neuraxial opioid can provide strong analgesia without local anaesthetic, but a clinically important delayed adverse effect is",
    "options": [
      "complete motor paralysis in every patient",
      "respiratory depression",
      "irreversible sympathetic denervation",
      "malignant hyperthermia"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Neuraxial opioids can cause pruritus, nausea, urinary retention, and early or delayed respiratory depression, particularly with hydrophilic agents.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-119",
    "section": "Anaesthesiology",
    "topic": "Cardiopulmonary resuscitation",
    "difficulty": "medium",
    "question": "During CPR in an intubated patient, a sudden sustained rise in end-tidal CO2 should raise suspicion of",
    "options": [
      "complete oesophageal intubation",
      "worsening pulmonary blood flow to zero",
      "return of spontaneous circulation",
      "exhausted carbon dioxide absorbent only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "ETCO2 reflects pulmonary blood flow during CPR; a sudden sustained increase can signal a marked rise in cardiac output from ROSC.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "dnb-pdcet-2026-anaesthesiology-120",
    "section": "Anaesthesiology",
    "topic": "Cardiac arrest rhythms",
    "difficulty": "easy",
    "question": "Which rhythm is treated as a shockable cardiac-arrest rhythm?",
    "options": [
      "Asystole",
      "Pulseless electrical activity",
      "Ventricular fibrillation",
      "Sinus bradycardia with a palpable pulse"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ventricular fibrillation and pulseless ventricular tachycardia are shockable; asystole and PEA are not.",
    "source": {
      "kind": "original",
      "reference": "DNB-PDCET 2026 Information Bulletin (NBEMS)",
      "url": "https://nbe.edu.in/IB/Information%20Bulletin%20PDCET%202026%2011.02.2026_v1_17.02.2026.pdf",
      "checkedOn": "2026-09-07"
    }
  },
];
