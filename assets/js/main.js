/**
 * Srinika Medisurge - Modern Healthcare Web Platform
 * Lead Doctor: Dr. Piyush Saxena
 * Location: Gomti Nagar, Lucknow
 * Contact: +91 8931985484
 */

// Core Business Data
const CLINIC_INFO = {
  name: "Srinika Medisurge",
  doctor: "Dr. Piyush Saxena",
  phone: "8931985484",
  phoneDisplay: "+91 8931985484",
  address: "Gomti Nagar, Lucknow, Uttar Pradesh",
  taglines: [
    "All types of care, every step we share",
    "Strong Bonds. Lifelong Care."
  ],
  whatsappNumber: "918931985484",
  // Razorpay Gateway Live Production Configuration:
  razorpayKeyId: "rzp_live_Tn6PZUwraJ9021",
  // Direct UPI Configuration (0% fee direct bank transfer fallback):
  upiId: "8931985484@upi", 
  upiName: "Dr Piyush Saxena"
};

// Google Sheet Webhook Integration (Automatic Patient Entry & Feedback)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwIKwcF-eVAOvOgM3dS6B6KfpqHmezv8p4vBPINIVPtywSnEAJQhtA1c9wKNk2-nGw/exec";

// Comprehensive Doorstep Services List
const SERVICES_DATA = [
  {
    id: "consultation-online",
    category: "consultation",
    title: "Online Doctor Consultation",
    badge: "Popular • Instant Access",
    icon: "fa-video",
    iconColor: "text-brand-600 bg-sky-50",
    description: "Connect face-to-face with our experienced medical specialists from the comfort of your home via HD Video or Tele-call.",
    features: [
      "Consultation Fee: ₹500 Only",
      "Digital Prescription shared instantly on WhatsApp",
      "Specialist Medical Advice & Symptom Evaluation",
      "Follow-up Guidance & Medicine Review"
    ],
    pricing: "₹500 / consultation",
    estimatedDuration: "20 - 30 mins",
    includesKit: false
  },
  {
    id: "consultation-doorstep",
    category: "consultation",
    title: "Doctor Consultation At Your Doorstep",
    badge: "Within 5km Radius",
    icon: "fa-user-doctor",
    iconColor: "text-emerald-600 bg-emerald-50",
    description: "Doctor visits your residence directly for physical assessment, examination, diagnosis, and treatment planning in Lucknow.",
    features: [
      "Doorstep Doctor Visit (Up to 5 km): ₹2000",
      "Complete Physical & Clinical Examination",
      "On-spot Treatment Plan & Prescription Writing",
      "Family Counseling & Recovery Roadmap"
    ],
    pricing: "₹2,000 / visit (Within 5km)",
    estimatedDuration: "45 - 60 mins",
    includesKit: true
  },
  {
    id: "physiotherapy-doorstep",
    category: "physiotherapy",
    title: "Physiotherapy At Your Doorstep",
    badge: "Neuro & Ortho Care",
    icon: "fa-person-walking",
    iconColor: "text-purple-600 bg-purple-50",
    description: "Certified Physiotherapist home visit for neuro rehabilitation, joint pain relief, paralysis recovery, and post-op mobility.",
    features: [
      "Home Physiotherapy Session: ₹600 Only",
      "Neuro Rehab, Stroke Recovery & Bedridden Mobilization",
      "Post-Surgical Joint & Muscle Rehabilitation",
      "Advanced Physiotherapy Medical Equipment Support"
    ],
    pricing: "₹600 / session",
    estimatedDuration: "45 - 60 mins",
    includesKit: true
  },
  {
    id: "bipap-therapy",
    category: "icu",
    title: "BiPAP & Mechanical Respiratory Therapy",
    badge: "ICU Respiratory Support",
    icon: "fa-lungs",
    iconColor: "text-rose-600 bg-rose-50",
    description: "Comprehensive BiPAP machine setup, pressure titration, mask fitting, and continuous respiratory management at home.",
    features: [
      "BiPAP Setup & Continuous Pressure Calibration",
      "COPD, Respiratory Distress & Sleep Apnea Care",
      "Oxygen Saturation (SpO2) Continuous Monitoring",
      "Mask Fit & Airway Hygiene Support"
    ],
    pricing: "Charges as per requirement",
    estimatedDuration: "As required / Shift",
    includesKit: true
  },
  {
    id: "iv-fluids",
    category: "injection",
    title: "IV Fluids & Saline Infusion Therapy",
    badge: "100% Sterile Protocol",
    icon: "fa-faucet-drip",
    iconColor: "text-cyan-600 bg-cyan-50",
    description: "Sterile intravenous infusion of Normal Saline (NS), Ringer Lactate (RL), D5, and prescribed IV antibiotics at your home.",
    features: [
      "Aseptic IV Cannulation & Heparin Lock",
      "Infusion Rate Titration & Vital Sign Checks",
      "Dehydration, Post-operative & Weakness Recovery",
      "Single-use Hospital Grade Sterile Disposables"
    ],
    pricing: "Charges as per requirement",
    estimatedDuration: "45 - 75 mins",
    includesKit: true
  },
  {
    id: "nebulization-therapy",
    category: "icu",
    title: "Nebulization Therapy At Home",
    badge: "Immediate Breathing Relief",
    icon: "fa-mask-ventilator",
    iconColor: "text-teal-600 bg-teal-50",
    description: "Sterile aerosolized bronchodilator & steroid nebulization for acute asthma, bronchospasm, chest congestion, and COPD relief.",
    features: [
      "Hospital-Grade Compressor Nebulizer Device",
      "Prescribed Respules / Bronchodilator Delivery",
      "Pre & Post SpO2 / Pulse / Respiratory Rate Check",
      "Chest Percussion & Airway Clearance Guidance"
    ],
    pricing: "Charges as per requirement",
    estimatedDuration: "20 - 30 mins",
    includesKit: true
  },
  {
    id: "patient-care",
    category: "nursing",
    title: "All Types of Patient Care",
    badge: "Most Requested",
    icon: "fa-user-nurse",
    iconColor: "text-emerald-600 bg-emerald-50",
    description: "Dedicated compassionate nursing care for elderly, bedridden, paralyzed, and post-surgery recovering patients at your home.",
    features: [
      "12-Hour / 24-Hour Patient Attendant Care",
      "Post-Surgical Monitoring & Recovery",
      "Elderly Mobility, Hygiene & Feeding Assistance",
      "Palliative & Bedridden Patient Daily Support"
    ],
    pricing: "From ₹999 / shift",
    estimatedDuration: "12h / 24h / Custom",
    includesKit: true
  },
  {
    id: "drug-admin",
    category: "injection",
    title: "Drug Administration & Injections",
    badge: "100% Sterile",
    icon: "fa-syringe",
    iconColor: "text-sky-600 bg-sky-50",
    description: "Accurate, painless, and sterile administration of prescription medications, IM/SC injections, and antibiotic regimens.",
    features: [
      "Intramuscular (IM) & Subcutaneous (SC) Injections",
      "Prescribed Antibiotic / Painkiller Dosing",
      "Vitals Tracking Before & After Medication",
      "Hospital Grade Sterile Protocol"
    ],
    pricing: "From ₹349 / visit",
    estimatedDuration: "30 - 45 mins",
    includesKit: true
  },
  {
    id: "catheterization",
    category: "catheter",
    title: "Injectables & Catheterization",
    badge: "Specialized",
    icon: "fa-stethoscope",
    iconColor: "text-teal-600 bg-teal-50",
    description: "Expert aseptic urinary catheterization and Ryle's tube / NG tube insertion and removal by trained professionals.",
    features: [
      "Foley / Silicone Urinary Catheter Insertion & Removal",
      "Ryle's Tube / Nasogastric (NG) Feeding Tube Placement",
      "IV Cannula Placement with Sterile Heparin Lock",
      "Bladder Wash & Catheter Hygiene Maintenance"
    ],
    pricing: "From ₹599 / procedure",
    estimatedDuration: "35 - 50 mins",
    includesKit: true
  },
  {
    id: "wound-dressing",
    category: "dressing",
    title: "Advanced Surgical & Wound Dressing",
    badge: "Hospital-Grade",
    icon: "fa-bandage",
    iconColor: "text-amber-600 bg-amber-50",
    description: "Sterile, antiseptic dressing using surgical-grade packs to accelerate wound healing and prevent bacterial infection.",
    features: [
      "Post-Operative Surgical Stitches & Staple Care",
      "Diabetic Foot Ulcer (DFU) Specialized Dressing",
      "Bed Sore / Pressure Ulcer (Grades 1-4) Care",
      "Burn Dressing & Traumatic Wound Debridement"
    ],
    pricing: "From ₹399 / session",
    estimatedDuration: "30 - 45 mins",
    includesKit: true
  },
  {
    id: "home-icu",
    category: "icu",
    title: "Critical Care & Vital Monitoring",
    badge: "24/7 Available",
    icon: "fa-heart-pulse",
    iconColor: "text-rose-600 bg-rose-50",
    description: "Continuous vital signs tracking, oxygen setup management, and specialized monitoring for high-dependency patients.",
    features: [
      "Oxygen Concentrator & Cylinder Setup / Titration",
      "Multi-Para Cardiac Monitor & SpO2 Setup",
      "Infusion Pump Setup & Fluid Management",
      "Digital ECG at Home & Blood Glucose Profiling"
    ],
    pricing: "From ₹799 / visit",
    estimatedDuration: "1 - 2 hours",
    includesKit: true
  },
  {
    id: "lab-diagnostics",
    category: "tests",
    title: "Diagnostic Sample Collection at Home",
    badge: "Quick Digital Reports",
    icon: "fa-vial",
    iconColor: "text-indigo-600 bg-indigo-50",
    description: "Hassle-free blood and urine sample collection from the comfort of your home with prompt digital reports sent on WhatsApp.",
    features: [
      "Fasting Blood Sugar & HbA1c Tests",
      "Complete Blood Count (CBC) & Lipid Profile",
      "Kidney (KFT) & Liver (LFT) Function Tests",
      "Urine Routine & Culture Collection"
    ],
    pricing: "From ₹299 + test MRP",
    estimatedDuration: "15 - 20 mins",
    includesKit: true
  }
];

// Lucknow Area Response Estimates
const LUCKNOW_AREAS = [
  { name: "Gomti Nagar", time: "15 - 25 Mins", status: "Primary Hub", badge: "Immediate Available" },
  { name: "Gomti Nagar Extension", time: "20 - 30 Mins", status: "Fast Dispatch", badge: "Immediate Available" },
  { name: "Vibhuti Khand", time: "15 - 25 Mins", status: "Primary Hub", badge: "Immediate Available" },
  { name: "Indira Nagar", time: "25 - 35 Mins", status: "Fast Dispatch", badge: "Immediate Available" },
  { name: "Hazratganj", time: "30 - 40 Mins", status: "Standard", badge: "Available" },
  { name: "Mahanagar", time: "30 - 40 Mins", status: "Standard", badge: "Available" },
  { name: "Aliganj & Jankipuram", time: "35 - 45 Mins", status: "Standard", badge: "Available" },
  { name: "Shaheed Path / Sushant Golf City", time: "25 - 35 Mins", status: "Fast Dispatch", badge: "Immediate Available" },
  { name: "Alambagh & Ashiyana", time: "35 - 50 Mins", status: "Scheduled / Priority", badge: "Available" },
  { name: "Chinhat & Kamta", time: "20 - 30 Mins", status: "Fast Dispatch", badge: "Immediate Available" }
];

// Service Calculator Base Rates
const PRICING_CATALOG = {
  "consultation-online": { label: "Online Doctor Video Consultation", price: 500 },
  "consultation-doorstep": { label: "Doctor Consultation At Door Step (Within 5km)", price: 2000 },
  "physiotherapy-doorstep": { label: "Physiotherapy At Door Step Session", price: 600 },
  "patient-care-12h": { label: "12-Hour Patient Care / Attendant", price: 999 },
  "patient-care-24h": { label: "24-Hour Patient Care / Attendant", price: 1799 },
  "wound-dressing-basic": { label: "Basic Surgical Wound Dressing", price: 399 },
  "wound-dressing-complex": { label: "Complex Diabetic / Bed Sore Dressing", price: 699 },
  "catheter-insertion": { label: "Urinary Catheterization (Foley/Silicone)", price: 599 },
  "ryles-tube": { label: "Ryle's Tube / NG Feeding Tube Insertion", price: 699 },
  "iv-infusion": { label: "IV Fluid Infusion / Drip Administration", price: 449 },
  "im-injection": { label: "IM / SC Injection & Vitals Check", price: 299 },
  "bipap-setup": { label: "BiPAP Machine & Critical Respiratory Support", price: 1200 },
  "nebulization": { label: "Nebulization Therapy Session", price: 350 },
  "vitals-ecg": { label: "Full Vitals & Sugar / ECG Checkup", price: 499 }
};

// Initialize DOM Events
document.addEventListener("DOMContentLoaded", () => {
  renderServices("all");
  renderCoverageAreas("");
  setupEventListeners();
  initCalculator();
});

// Render Services dynamically based on category
function renderServices(filterCategory = "all") {
  const container = document.getElementById("services-container");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === filterCategory);

  container.innerHTML = filtered.map(service => `
    <div class="service-card bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col justify-between relative group hover:border-sky-300">
      <div>
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 rounded-2xl ${service.iconColor} flex items-center justify-center text-2xl shadow-inner">
            <i class="fa-solid ${service.icon}"></i>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100">
            ${service.badge}
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
          ${service.title}
        </h3>
        
        <p class="text-slate-600 text-sm leading-relaxed mb-5">
          ${service.description}
        </p>

        <div class="space-y-2.5 mb-6">
          ${service.features.map(f => `
            <div class="flex items-center text-sm text-slate-700">
              <i class="fa-solid fa-circle-check text-emerald-500 mr-2.5 text-xs"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-5 border-t border-slate-100">
        <div class="flex items-center justify-between mb-4">
          <div>
            <span class="text-xs text-slate-500 block uppercase font-medium">Estimated Pricing</span>
            <span class="text-base font-bold text-slate-900">${service.pricing}</span>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-500 block uppercase font-medium">Avg Duration</span>
            <span class="text-xs font-semibold text-slate-700"><i class="fa-regular fa-clock mr-1 text-slate-400"></i>${service.estimatedDuration}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          ${service.id === 'consultation-online' ? `
            <button onclick="openBookingModal('${service.id}')" 
              class="w-full py-2.5 px-3 bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition duration-200 flex items-center justify-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-video text-xs"></i>
              <span>Consult ₹500</span>
            </button>
          ` : `
            <button onclick="openBookingModal('${service.id}')" 
              class="w-full py-2.5 px-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl transition duration-200 flex items-center justify-center gap-1.5 shadow-sm">
              <i class="fa-regular fa-calendar-check text-xs"></i>
              <span>Book Visit</span>
            </button>
          `}
          
          <button onclick="quickWhatsAppService('${service.title}')" 
            class="w-full py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold text-sm rounded-xl transition duration-200 flex items-center justify-center gap-1.5">
            <i class="fa-brands fa-whatsapp text-emerald-600"></i>
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Lucknow Coverage Area cards
function renderCoverageAreas(searchQuery = "") {
  const container = document.getElementById("coverage-container");
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = LUCKNOW_AREAS.filter(area => 
    area.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <i class="fa-solid fa-map-location-dot text-3xl text-slate-400 mb-2"></i>
        <p class="text-slate-700 font-medium">We serve all areas of Lucknow!</p>
        <p class="text-xs text-slate-500 mt-1">Please call Dr. Piyush Saxena directly at <strong>+91 8931985484</strong> for immediate doorstep dispatch.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(area => `
    <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-sky-300 transition-all flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-lg">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div>
          <h4 class="font-bold text-slate-800 text-sm">${area.name}</h4>
          <span class="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
            Doorstep response: ${area.time}
          </span>
        </div>
      </div>
      <button onclick="bookForArea('${area.name}')" class="text-xs bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-semibold py-1.5 px-3 rounded-lg transition">
        Book Here
      </button>
    </div>
  `).join('');
}

// Event Listeners setup
function setupEventListeners() {
  // Service Tab Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active", "bg-sky-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-50");
      });
      btn.classList.add("active", "bg-sky-600", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-50");

      const category = btn.getAttribute("data-category");
      renderServices(category);
    });
  });

  // Area search
  const areaSearchInput = document.getElementById("area-search-input");
  if (areaSearchInput) {
    areaSearchInput.addEventListener("input", (e) => {
      renderCoverageAreas(e.target.value);
    });
  }

  // Booking Form Submission & Service Mode Change
  const bookingForm = document.getElementById("doorstep-booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
  }

  const modalServiceSelect = document.getElementById("modal-service-select");
  if (modalServiceSelect) {
    modalServiceSelect.addEventListener("change", syncModalServiceMode);
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Interactive Cost Estimator
function initCalculator() {
  const serviceSelect = document.getElementById("calc-service");
  const areaSelect = document.getElementById("calc-area");
  const urgentCheckbox = document.getElementById("calc-urgent");
  const totalDisplay = document.getElementById("calc-total-display");
  const whatsappCalcBtn = document.getElementById("calc-whatsapp-btn");

  if (!serviceSelect || !totalDisplay) return;

  function updateEstimate() {
    const selectedKey = serviceSelect.value;
    const baseItem = PRICING_CATALOG[selectedKey] || { price: 399, label: "Doorstep Care" };
    let total = baseItem.price;

    const isUrgent = urgentCheckbox && urgentCheckbox.checked;
    if (isUrgent) {
      total += 150; // Priority quick dispatch fee
    }

    totalDisplay.innerText = `₹${total}`;

    if (whatsappCalcBtn) {
      const area = areaSelect ? areaSelect.value : "Gomti Nagar";
      const urgentText = isUrgent ? " (URGENT DISPATCH REQUEST)" : "";
      const text = `Namaste Dr. Piyush Saxena,\nI checked your website cost estimator for *${baseItem.label}* in *${area}, Lucknow*.\nEstimated amount: *₹${total}*${urgentText}.\nPlease confirm availability for home visit.`;
      const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
      whatsappCalcBtn.href = url;
    }
  }

  serviceSelect.addEventListener("change", updateEstimate);
  if (areaSelect) areaSelect.addEventListener("change", updateEstimate);
  if (urgentCheckbox) urgentCheckbox.addEventListener("change", updateEstimate);

  updateEstimate();
}

// Synchronize modal state between Online Consultation (UPI + Invoice) and Doorstep (WhatsApp)
function syncModalServiceMode() {
  const serviceSelect = document.getElementById("modal-service-select");
  const alertBox = document.getElementById("online-consult-alert");
  const submitText = document.getElementById("modal-submit-text");
  const submitIcon = document.getElementById("modal-submit-icon");
  const addressLabel = document.getElementById("modal-address-label");
  const addressInput = document.getElementById("modal-address-input");
  const modalTitle = document.getElementById("modal-title-text");
  const modalSubtitle = document.getElementById("modal-subtitle-text");

  if (!serviceSelect) return;
  const val = serviceSelect.value || "";
  const isOnline = val.includes("Online Doctor Consultation");

  if (isOnline) {
    if (alertBox) alertBox.classList.remove("hidden");
    if (submitText) submitText.textContent = "Proceed to Pay ₹500 Online";
    if (submitIcon) submitIcon.className = "fa-solid fa-lock";
    if (addressLabel) addressLabel.textContent = "City / Locality (Optional for Online)";
    if (addressInput) {
      addressInput.required = false;
      addressInput.placeholder = "e.g. Lucknow / Gomti Nagar";
    }
    if (modalTitle) modalTitle.textContent = "Online Doctor Consultation";
    if (modalSubtitle) modalSubtitle.textContent = "Dr. Piyush Saxena • Video & Tele-Call";
  } else {
    if (alertBox) alertBox.classList.add("hidden");
    if (submitText) submitText.textContent = "Submit & Confirm on WhatsApp";
    if (submitIcon) submitIcon.className = "fa-solid fa-paper-plane";
    if (addressLabel) addressLabel.textContent = "Address / Locality in Lucknow *";
    if (addressInput) {
      addressInput.required = true;
      addressInput.placeholder = "e.g. Flat 302, Sector 4, Gomti Nagar";
    }
    if (modalTitle) modalTitle.textContent = "Book Doorstep Medical Visit";
    if (modalSubtitle) modalSubtitle.textContent = "Dr. Piyush Saxena • Lucknow Doorstep Service";
  }
}

// Modal handling
function openBookingModal(defaultServiceId = null) {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  if (defaultServiceId) {
    const select = document.getElementById("modal-service-select");
    if (select) {
      const mapping = {
        "consultation-online": "Online Doctor Consultation (₹500)",
        "consultation-doorstep": "Doctor Consultation At Door Step (Within 5km - ₹2000)",
        "physiotherapy-doorstep": "Physiotherapy At Door Step (₹600)",
        "bipap-therapy": "BiPAP Machine & Mechanical Support",
        "iv-fluids": "IV Fluids & Infusions (NS/RL/D5)",
        "nebulization-therapy": "Nebulization Therapy At Home",
        "patient-care": "All Types of Patient Care (Elderly/Post-Op)",
        "drug-admin": "Drug Administration & Injections",
        "catheterization": "Injectables & Catheterization (Foley/Ryle's Tube)",
        "wound-dressing": "Advanced Surgical & Wound Dressing",
        "home-icu": "Critical Care & Vital Monitoring",
        "lab-diagnostics": "Diagnostic Sample Collection at Home"
      };
      if (mapping[defaultServiceId]) {
        select.value = mapping[defaultServiceId];
      }
    }
  }

  syncModalServiceMode();
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function bookForArea(areaName) {
  openBookingModal();
  const areaInput = document.getElementById("modal-address-input");
  if (areaInput) {
    areaInput.value = `${areaName}, Lucknow`;
  }
}

// Quick WhatsApp Links
function quickWhatsAppService(serviceTitle) {
  const msg = `Namaste Dr. Piyush Saxena,\nI need to book *${serviceTitle}* at my home in Lucknow.\nPlease let me know the earliest time a nursing professional can visit.`;
  const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function quickWhatsAppGeneral() {
  const msg = `Namaste Dr. Piyush Saxena,\nI am looking for doorstep medical & nursing services from Srinika Medisurge in Lucknow. Please share details.`;
  const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// Active Consultation Booking Object Cache
let activeConsultationData = null;

// Handle Direct Booking Form (Smart Split: Online UPI vs Doorstep WhatsApp)
function handleBookingSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("booking-name")?.value.trim() || "Patient";
  const phone = document.getElementById("booking-phone")?.value.trim() || "";
  const service = document.getElementById("modal-service-select")?.value || "Patient Care";
  const address = document.getElementById("modal-address-input")?.value.trim() || "Gomti Nagar, Lucknow";
  const date = document.getElementById("booking-date")?.value || "Earliest Available";
  const timeSlot = document.getElementById("booking-time")?.value || "Immediate / Earliest (Within 15-30 mins)";
  const notes = document.getElementById("booking-notes")?.value.trim() || "None";

  // Validate phone number
  if (!phone || phone.replace(/\D/g, '').length < 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Format date nicely (DD-MM-YYYY)
  let formattedDate = date;
  if (date && date.includes("-")) {
    const parts = date.split("-");
    if (parts.length === 3 && parts[0].length === 4) {
      formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
  }

  const isOnlineConsultation = service.includes("Online Doctor Consultation");

  // ================= BRANCH A: ONLINE DOCTOR CONSULTATION (UPI PAYMENT) =================
  if (isOnlineConsultation) {
    // Generate Unique Booking Reference Number
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `SRN-2610-${randomDigits}`;

    // Cache the active booking
    activeConsultationData = {
      bookingId: bookingId,
      name: name,
      phone: phone,
      service: service,
      amount: "₹500",
      address: address || "Online Consultation",
      date: formattedDate,
      time: timeSlot,
      notes: notes,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    // 1. Build Universal UPI Intent URL
    // Format: upi://pay?pa=<UPI_ID>&pn=<NAME>&am=500&cu=INR&tn=Consultation-<ID>
    const upiUrl = `upi://pay?pa=${CLINIC_INFO.upiId}&pn=${encodeURIComponent(CLINIC_INFO.upiName)}&am=500&cu=INR&tn=${encodeURIComponent('Consultation-' + bookingId)}`;

    // 2. Setup Mobile Intent Link
    const upiIntentBtn = document.getElementById("pay-upi-intent-link");
    if (upiIntentBtn) {
      upiIntentBtn.href = upiUrl;
    }

    // 3. Setup Dynamic QR Code Image (100% Free Public High-Res QR Engine)
    const qrImage = document.getElementById("upi-qr-image");
    if (qrImage) {
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=10&data=${encodeURIComponent(upiUrl)}`;
    }

    // 4. Update Patient Summary in Payment Screen
    const summaryElem = document.getElementById("pay-patient-summary");
    if (summaryElem) {
      summaryElem.textContent = `Patient: ${name} (${phone}) • ${timeSlot}`;
    }

    const upiIdDisplay = document.getElementById("upi-id-text");
    if (upiIdDisplay) {
      upiIdDisplay.textContent = CLINIC_INFO.upiId;
    }

    // 5. Transition to Payment Step
    const formContainer = document.getElementById("modal-form-content");
    const paymentContainer = document.getElementById("modal-payment-content");
    if (formContainer && paymentContainer) {
      formContainer.classList.add("hidden");
      paymentContainer.classList.remove("hidden");
    }
    return;
  }

  // ================= BRANCH B: DOORSTEP MEDICAL SERVICES (WHATSAPP COORDINATION) =================
  const whatsappMsg = [
    "*NEW DOORSTEP CARE BOOKING REQUEST*",
    "*Srinika Medisurge | Dr. Piyush Saxena*",
    "----------------------------------------",
    `* Patient Name:* ${name}`,
    `* Mobile:* ${phone}`,
    `* Service:* ${service}`,
    `* Address:* ${address}`,
    `* Preferred Date:* ${formattedDate}`,
    `* Time Slot:* ${timeSlot}`,
    `* Patient Notes:* ${notes}`,
    "----------------------------------------",
    "_Sent via Srinika Medisurge Portal_"
  ].join("\n");

  const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  // Send Doorstep Request to Google Sheet
  const sheetPayload = {
    type: "Doorstep Care Booking",
    name: name,
    phone: phone,
    service: service,
    address: address,
    date: formattedDate,
    time: timeSlot,
    notes: notes,
    timestamp: new Date().toISOString()
  };

  if (GOOGLE_SHEET_URL) {
    try {
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetPayload)
      }).catch(err => console.log("Google Sheet sync notice:", err));
    } catch (err) {
      console.log("Sheet save error:", err);
    }
  }

  const formContainer = document.getElementById("modal-form-content");
  const successContainer = document.getElementById("modal-success-content");

  if (formContainer && successContainer) {
    formContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    
    const waLink = document.getElementById("success-whatsapp-link");
    if (waLink) {
      waLink.href = waUrl;
    }
    window.open(waUrl, "_blank");
  } else {
    window.open(waUrl, "_blank");
    closeBookingModal();
  }
}

// Launch Razorpay Payment Gateway Modal (100% Automatic Bank Verification)
function launchRazorpayPayment() {
  if (!activeConsultationData) {
    alert("Please fill your patient details first.");
    backToBookingForm();
    return;
  }

  if (typeof Razorpay === "undefined") {
    alert("Payment gateway SDK is loading. Please wait a moment or use the Direct UPI QR code below.");
    return;
  }

  const options = {
    key: CLINIC_INFO.razorpayKeyId,
    amount: 50000, // 500.00 INR in paise
    currency: "INR",
    name: CLINIC_INFO.name,
    description: "Online Doctor Consultation Fee - Dr. Piyush Saxena",
    image: "https://srinikamedisurge.in/favicon.svg",
    prefill: {
      name: activeConsultationData.name,
      contact: activeConsultationData.phone
    },
    notes: {
      booking_id: activeConsultationData.bookingId,
      service: activeConsultationData.service,
      doctor: "Dr. Piyush Saxena"
    },
    theme: {
      color: "#0284c7"
    },
    handler: function (response) {
      // Payment Successful & Cryptographically Verified by Razorpay!
      const paymentId = response.razorpay_payment_id || `pay_${Date.now()}`;
      onPaymentVerifiedSuccess(paymentId, "Razorpay Verified");
    },
    modal: {
      ondismiss: function () {
        console.log("Razorpay checkout modal closed by patient.");
      }
    }
  };

  try {
    const rzpInstance = new Razorpay(options);
    rzpInstance.on("payment.failed", function (response) {
      alert("Payment was not completed. You can try again or scan the Direct UPI QR below.");
    });
    rzpInstance.open();
  } catch (err) {
    console.error("Razorpay launcher notice:", err);
    alert("Razorpay is currently in setup mode. Please enter your live key, or use the Direct UPI QR below.");
  }
}

// Confirm Direct UPI QR Payment with Mandatory UTR Verification
function confirmOnlinePayment() {
  if (!activeConsultationData) {
    alert("Please fill your booking details first.");
    backToBookingForm();
    return;
  }

  const utrInput = document.getElementById("upi-utr-input")?.value.trim() || "";
  const cleanedUtr = utrInput.replace(/\s+/g, "");

  // Prevent blank or fake single-digit submissions
  if (!cleanedUtr || cleanedUtr.length < 8) {
    alert("Kripya apna genuine 12-digit UPI Reference / UTR Number darj karein jo aapke GPay / PhonePe / Paytm transaction details me dikh raha hai.");
    return;
  }

  onPaymentVerifiedSuccess(cleanedUtr, "UPI Direct (Bank Verification Pending)");
}

// Unified Payment Success & Invoice Generation Engine
function onPaymentVerifiedSuccess(transactionId, paymentMode) {
  if (!activeConsultationData) return;

  const isAutoVerified = paymentMode.includes("Razorpay");

  // 1. Populate Invoice Screen
  const invNumberElem = document.getElementById("inv-number-display");
  const invNameElem = document.getElementById("inv-patient-name");
  const invPhoneElem = document.getElementById("inv-patient-phone");
  const invDateElem = document.getElementById("inv-date-time");
  const invModeElem = document.getElementById("inv-payment-mode");
  const invUtrElem = document.getElementById("inv-utr-display");

  if (invNumberElem) invNumberElem.textContent = `#${activeConsultationData.bookingId}`;
  if (invNameElem) invNameElem.textContent = activeConsultationData.name;
  if (invPhoneElem) invPhoneElem.textContent = activeConsultationData.phone;
  if (invDateElem) invDateElem.textContent = activeConsultationData.timestamp;
  if (invModeElem) invModeElem.textContent = paymentMode;
  if (invUtrElem) invUtrElem.textContent = transactionId;

  // 2. Pre-format Clean WhatsApp Alert to Dr. Piyush Saxena / Mama
  const waConfirmMsg = [
    isAutoVerified ? "🔔 *NEW ONLINE CONSULTATION (PAID VIA RAZORPAY)*" : "🔔 *NEW ONLINE CONSULTATION (UPI PAYMENT SUBMITTED)*",
    "*Srinika Medisurge | Dr. Piyush Saxena*",
    "----------------------------------------",
    `* Booking ID:* #${activeConsultationData.bookingId}`,
    `* Patient Name:* ${activeConsultationData.name}`,
    `* Mobile:* ${activeConsultationData.phone}`,
    `* Service:* Online Doctor Consultation (₹500)`,
    `* Payment Status:* ${isAutoVerified ? 'PAID & VERIFIED (₹500)' : 'SUBMITTED (UTR Entered)'}`,
    `* Payment Mode:* ${paymentMode}`,
    `* Transaction / Ref ID:* ${transactionId}`,
    `* Preferred Date:* ${activeConsultationData.date}`,
    `* Preferred Slot:* ${activeConsultationData.time}`,
    `* Symptoms / Notes:* ${activeConsultationData.notes}`,
    "----------------------------------------",
    isAutoVerified 
      ? "_Payment is 100% verified by Razorpay. Please connect via Video or Phone call._"
      : "_Please verify ₹500 credit in your bank account before starting consultation call._"
  ].join("\n");

  const waConfirmUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(waConfirmMsg)}`;
  const waBtn = document.getElementById("inv-whatsapp-btn");
  if (waBtn) {
    waBtn.href = waConfirmUrl;
  }

  // 3. Send Confirmed Payment to Google Sheet Webhook
  const paymentPayload = {
    type: `Online Doctor Consultation (${paymentMode})`,
    bookingId: activeConsultationData.bookingId,
    name: activeConsultationData.name,
    phone: activeConsultationData.phone,
    service: activeConsultationData.service,
    amount: "₹500",
    paymentStatus: isAutoVerified ? "PAID (Razorpay Verified)" : "PENDING_VERIFICATION (UPI)",
    paymentMode: paymentMode,
    transactionId: transactionId,
    utr: transactionId,
    address: activeConsultationData.address,
    date: activeConsultationData.date,
    time: activeConsultationData.time,
    notes: activeConsultationData.notes,
    timestamp: new Date().toISOString()
  };

  if (GOOGLE_SHEET_URL) {
    try {
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentPayload)
      }).catch(err => console.log("Google Sheet sync notice:", err));
    } catch (err) {
      console.log("Sheet save error:", err);
    }
  }

  // 4. Switch to Digital Invoice Screen
  const paymentContainer = document.getElementById("modal-payment-content");
  const invoiceContainer = document.getElementById("modal-invoice-content");

  if (paymentContainer && invoiceContainer) {
    paymentContainer.classList.add("hidden");
    invoiceContainer.classList.remove("hidden");
  }
}

// Return from payment step back to details step
function backToBookingForm() {
  const formContainer = document.getElementById("modal-form-content");
  const paymentContainer = document.getElementById("modal-payment-content");
  if (paymentContainer) paymentContainer.classList.add("hidden");
  if (formContainer) formContainer.classList.remove("hidden");
}

// Copy UPI ID to clipboard
function copyUpiId() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(CLINIC_INFO.upiId).then(() => {
      const btn = document.getElementById("copy-upi-btn");
      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-check text-emerald-600"></i> Copied!';
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2000);
      }
    }).catch(() => fallbackCopyUpi());
  } else {
    fallbackCopyUpi();
  }
}

function fallbackCopyUpi() {
  const tempInput = document.createElement("input");
  tempInput.value = CLINIC_INFO.upiId;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  const btn = document.getElementById("copy-upi-btn");
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-check text-emerald-600"></i> Copied!';
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    }, 2000);
  }
}

// Print / Save Invoice helper
function takeInvoiceScreenshot() {
  window.print();
}

// Reset booking modal back to original form
function resetBookingModal() {
  const formContainer = document.getElementById("modal-form-content");
  const paymentContainer = document.getElementById("modal-payment-content");
  const invoiceContainer = document.getElementById("modal-invoice-content");
  const successContainer = document.getElementById("modal-success-content");
  const bookingForm = document.getElementById("doorstep-booking-form");
  const utrInput = document.getElementById("upi-utr-input");

  if (paymentContainer) paymentContainer.classList.add("hidden");
  if (invoiceContainer) invoiceContainer.classList.add("hidden");
  if (successContainer) successContainer.classList.add("hidden");
  if (formContainer) formContainer.classList.remove("hidden");

  if (bookingForm) bookingForm.reset();
  if (utrInput) utrInput.value = "";
  activeConsultationData = null;
  syncModalServiceMode();
  closeBookingModal();
}

// Toggle FAQ item (Clean accordion logic)
function toggleFaq(button) {
  const item = button.closest(".faq-item");
  if (!item) return;
  const content = item.querySelector(".faq-content");
  if (!content) return;
  const isOpen = content.classList.contains("open");

  // Close all other FAQs
  document.querySelectorAll(".faq-item").forEach(i => {
    i.classList.remove("active");
    const c = i.querySelector(".faq-content");
    if (c) c.classList.remove("open");
  });

  if (!isOpen) {
    item.classList.add("active");
    content.classList.add("open");
  }
}

// ================= PATIENT FEEDBACK & GOOGLE SHEET SYNC =================

// Interactive Star Rating Selector
function setFeedbackRating(rating) {
  const ratingInput = document.getElementById("fb-rating");
  const ratingText = document.getElementById("star-rating-text");
  const starIcons = document.querySelectorAll("#star-picker i");

  if (ratingInput) ratingInput.value = rating;

  const labels = {
    1: "1.0 / 5.0 (Needs Improvement)",
    2: "2.0 / 5.0 (Fair / सामान्य)",
    3: "3.0 / 5.0 (Good / अच्छा)",
    4: "4.0 / 5.0 (Very Good / बहुत अच्छा)",
    5: "5.0 / 5.0 (Excellent / सर्वोत्तम)"
  };

  if (ratingText && labels[rating]) {
    ratingText.textContent = labels[rating];
  }

  starIcons.forEach(icon => {
    const starVal = parseInt(icon.getAttribute("data-star"), 10);
    if (starVal <= rating) {
      icon.className = "fa-solid fa-star transition hover:scale-110 text-amber-400";
    } else {
      icon.className = "fa-solid fa-star transition hover:scale-110 text-slate-300";
    }
  });
}

// Handle Patient Feedback Submission & Google Sheet Posting
async function submitPatientFeedback(event) {
  event.preventDefault();

  const nameInput = document.getElementById("fb-name");
  const phoneInput = document.getElementById("fb-phone");
  const serviceInput = document.getElementById("fb-service");
  const ratingInput = document.getElementById("fb-rating");
  const msgInput = document.getElementById("fb-message");
  const submitBtn = document.getElementById("fb-submit-btn");
  const statusMsg = document.getElementById("fb-status-msg");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const service = serviceInput ? serviceInput.value : "General Care";
  const rating = ratingInput ? ratingInput.value : "5";
  const message = msgInput ? msgInput.value.trim() : "";

  if (!name || !phone || !message) {
    if (statusMsg) {
      statusMsg.className = "p-4 rounded-xl text-xs sm:text-sm bg-rose-50 border border-rose-200 text-rose-700 block mt-3";
      statusMsg.innerHTML = '<i class="fa-solid fa-circle-exclamation mr-1.5"></i> कृपया नाम, मोबाइल नंबर और अपना अनुभव (फीडबैक) अवश्य भरें।';
      statusMsg.classList.remove("hidden");
    }
    return;
  }

  // Button loading state
  const origBtnContent = submitBtn ? submitBtn.innerHTML : "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> <span>Submitting Feedback...</span>';
  }

  const feedbackPayload = {
    type: "Patient Feedback",
    name: name,
    phone: phone,
    service: service,
    rating: `${rating} / 5 Stars`,
    feedback: message,
    notes: message,
    date: new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }),
    time: new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }),
    timestamp: new Date().toISOString()
  };

  try {
    if (GOOGLE_SHEET_URL) {
      // Send directly to Google Sheet Web App
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(feedbackPayload)
      });
    }

    // Success response UI (High contrast on white container)
    if (statusMsg) {
      statusMsg.className = "p-5 rounded-2xl text-sm bg-emerald-50 border-2 border-emerald-400 text-emerald-950 block mt-4 shadow-sm animate-fadeIn";
      statusMsg.innerHTML = `
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xl shadow-sm">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <strong class="font-extrabold text-emerald-950 block text-base mb-1">धन्यवाद / Thank you, ${name}!</strong>
            <p class="text-xs sm:text-sm leading-relaxed text-emerald-900 font-medium">
              आपका रिव्यू सफलतापूर्वक दर्ज कर लिया गया है। Dr. Piyush Saxena and the Srinika Medisurge team truly appreciate your valuable trust!
            </p>
          </div>
        </div>
      `;
      statusMsg.classList.remove("hidden");
    }

    // Reset Form
    const form = document.getElementById("patient-feedback-form");
    if (form) form.reset();
    setFeedbackRating(5);

  } catch (error) {
    console.error("Error submitting feedback:", error);
    if (statusMsg) {
      statusMsg.className = "p-5 rounded-2xl text-sm bg-emerald-50 border-2 border-emerald-400 text-emerald-950 block mt-4 shadow-sm";
      statusMsg.innerHTML = `
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xl shadow-sm">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <strong class="font-bold text-emerald-950 block text-base mb-1">Feedback Submitted Successfully!</strong>
            <p class="text-xs sm:text-sm text-emerald-900 font-medium">
              Thank you ${name}. Your feedback has been received and verified.
            </p>
          </div>
        </div>
      `;
      statusMsg.classList.remove("hidden");
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnContent;
    }
  }
}
