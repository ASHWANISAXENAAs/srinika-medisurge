const EQUIPMENT = [
  {
    id: "bipap-machine",
    title: "BIPAP Machine Support",
    category: "Non-Invasive Ventilation",
    icon: "fa-lungs",
    iconColor: "text-rose-600 bg-rose-50",
    badge: "ICU Respiratory Support",
    description: "Advanced dual-pressure ventilatory support for respiratory distress, COPD exacerbations, and severe sleep apnea with professional mask calibration.",
    specs: [
      "IPAP / EPAP pressure titration",
      "Full face / nasal mask sizing",
      "Humidifier chamber maintenance",
      "Continuous SpO2 and airway monitoring"
    ],
    pricing: "Charges as per requirement / ₹1,200 setup",
    dispatchTime: "Under 60 mins in Lucknow"
  },
  {
    id: "oxygen-concentrator",
    title: "Oxygen Concentrator",
    category: "Continuous Flow Support",
    icon: "fa-wind",
    iconColor: "text-sky-600 bg-sky-50",
    badge: "Medical-Grade 93% ± 3%",
    description: "Continuous medical-grade 5L & 10L oxygen concentrators providing uninterrupted oxygen therapy at home with high purity output (93% ± 3%).",
    specs: [
      "5 Litre & 10 Litre high flow models",
      "Nasal cannula & tubing included",
      "Immediate home delivery in Lucknow",
      "Zero cylinder refill dependency"
    ],
    pricing: "Daily / Monthly rental plans available",
    dispatchTime: "Immediate delivery in Lucknow"
  },
  {
    id: "infusion-pump",
    title: "Infusion Pump / Syringe Pump",
    category: "Precision Drug Administration",
    icon: "fa-syringe",
    iconColor: "text-cyan-600 bg-cyan-50",
    badge: "Micro-Dose Precision",
    description: "Micro-controlled volumetric infusion and syringe pumps for accurate, micro-dosed IV medications, inotropes, chemo supportive fluids, and electrolytes.",
    specs: [
      "Precise flow-rate titration (ml/hr)",
      "Occlusion & air-in-line safety alarms",
      "Monitored by certified nursing staff",
      "Battery backup for power safety"
    ],
    pricing: "Charges as per requirement",
    dispatchTime: "Rapid dispatch across Lucknow"
  },
  {
    id: "oxygen-cylinder",
    title: "Oxygen Cylinder & Regulator",
    category: "Emergency High Pressure Support",
    icon: "fa-flask-round-potion",
    iconColor: "text-emerald-600 bg-emerald-50",
    badge: "Emergency Backup",
    description: "Portable and jumbo medical oxygen cylinders with double-gauge regulators, flow meters, and sterile humidifiers for emergency and backup care.",
    specs: [
      "B-Type (Portable) & D-Type (Jumbo) cylinders",
      "Key-wrench & click flow regulator attached",
      "Rapid refill & home replacement in Lucknow",
      "Tested for leak-proof safety"
    ],
    pricing: "Immediate emergency rates",
    dispatchTime: "Under 30-45 mins delivery"
  },
  {
    id: "multipara-monitor",
    title: "Multi-Para Monitor & Vital Instruments",
    category: "ICU Vital Signs Tracking",
    icon: "fa-heart-pulse",
    iconColor: "text-purple-600 bg-purple-50",
    badge: "Real-time Bedside Display",
    description: "Hospital-grade 5-Para patient monitor displaying real-time ECG leads, Pulse Rate, NIBP (Blood Pressure), SpO2 Oxygen, and Body Temperature.",
    specs: [
      "Continuous bedside cardiac waveform",
      "Digital BP apparatus & Glucometer kits",
      "Suction apparatus & sterile consumables",
      "Configurable audio-visual alert limits"
    ],
    pricing: "From ₹799 / visit setup",
    dispatchTime: "Available 24x7"
  },
  {
    id: "physiotherapy-equipment",
    title: "Physiotherapy All Medical System",
    category: "Complete Rehab Technology",
    icon: "fa-bolt-lightning",
    iconColor: "text-amber-600 bg-amber-50",
    badge: "Advanced Electrotherapy",
    description: "Comprehensive therapeutic electrotherapy and muscle stimulation systems: TENS, IFT (Interferential Therapy), Ultrasound Therapy (UST), and Muscle Stimulators.",
    specs: [
      "TENS & IFT multi-channel machines",
      "Therapeutic Ultrasound (UST 1MHz / 3MHz)",
      "Paralysis muscle stimulator & traction kit",
      "Operated by certified MPT/BPT therapist"
    ],
    pricing: "Included in ₹600 / session",
    dispatchTime: "Scheduled home appointments"
  }
];

module.exports = EQUIPMENT;
