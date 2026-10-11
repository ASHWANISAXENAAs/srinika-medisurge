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
  whatsappNumber: "918931985484"
};

// Comprehensive Doorstep Services List
const SERVICES_DATA = [
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
    title: "Drug Administration & Infusions",
    badge: "100% Sterile",
    icon: "fa-syringe",
    iconColor: "text-sky-600 bg-sky-50",
    description: "Accurate, painless, and sterile administration of prescription medications, IV fluid bottles, and antibiotic regimens.",
    features: [
      "Intravenous (IV) Saline & Fluid Infusion (NS/RL/D5)",
      "Intramuscular (IM) & Subcutaneous (SC) Injections",
      "Prescribed Antibiotic / Painkiller Dosing",
      "Vitals Tracking Before & After Medication"
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
      "BiPAP & CPAP Machine Support",
      "Digital ECG at Home & Blood Glucose Profiling",
      "Nebulization & Chest Suctioning Assistance"
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
  "patient-care-12h": { label: "12-Hour Patient Care / Attendant", price: 999 },
  "patient-care-24h": { label: "24-Hour Patient Care / Attendant", price: 1799 },
  "wound-dressing-basic": { label: "Basic Surgical Wound Dressing", price: 399 },
  "wound-dressing-complex": { label: "Complex Diabetic / Bed Sore Dressing", price: 699 },
  "catheter-insertion": { label: "Urinary Catheterization (Foley/Silicone)", price: 599 },
  "ryles-tube": { label: "Ryle's Tube / NG Feeding Tube Insertion", price: 699 },
  "iv-infusion": { label: "IV Fluid Infusion / Drip Administration", price: 449 },
  "im-injection": { label: "IM / SC Injection & Vitals Check", price: 299 },
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
          <button onclick="openBookingModal('${service.id}')" 
            class="w-full py-2.5 px-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl transition duration-200 flex items-center justify-center gap-1.5 shadow-sm">
            <i class="fa-regular fa-calendar-check text-xs"></i>
            <span>Book Visit</span>
          </button>
          
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

  // Booking Form Submission
  const bookingForm = document.getElementById("doorstep-booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
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

// Modal handling
function openBookingModal(defaultServiceId = null) {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  if (defaultServiceId) {
    const select = document.getElementById("modal-service-select");
    if (select) {
      const mapping = {
        "patient-care": "All Types of Patient Care (Elderly/Post-Op)",
        "drug-admin": "Drug Administration & IV Infusions",
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

// Handle Direct Booking Form
function handleBookingSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("booking-name")?.value || "Patient";
  const phone = document.getElementById("booking-phone")?.value || "";
  const service = document.getElementById("modal-service-select")?.value || "Patient Care";
  const address = document.getElementById("modal-address-input")?.value || "Gomti Nagar, Lucknow";
  const date = document.getElementById("booking-date")?.value || "Earliest Available";
  const timeSlot = document.getElementById("booking-time")?.value || "Immediate / Morning";
  const notes = document.getElementById("booking-notes")?.value || "None";

  // Pre-formatted WhatsApp Message for Dr. Piyush Saxena
  const whatsappMsg = `*🏥 NEW DOORSTEP CARE BOOKING REQUEST*\n` +
    `*Business:* Srinika Medisurge\n` +
    `*Doctor:* Dr. Piyush Saxena\n` +
    `--------------------------------\n` +
    `👤 *Patient Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `🩺 *Service Required:* ${service}\n` +
    `📍 *Address:* ${address}\n` +
    `📅 *Preferred Date:* ${date}\n` +
    `⏰ *Preferred Time:* ${timeSlot}\n` +
    `📝 *Patient Condition / Notes:* ${notes}\n` +
    `--------------------------------\n` +
    `_Sent via Srinika Medisurge Web Portal_`;

  const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  // Show Success Screen inside modal or trigger redirect
  const formContainer = document.getElementById("modal-form-content");
  const successContainer = document.getElementById("modal-success-content");

  if (formContainer && successContainer) {
    formContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    
    const waLink = document.getElementById("success-whatsapp-link");
    if (waLink) {
      waLink.href = waUrl;
    }
  } else {
    window.open(waUrl, "_blank");
    closeBookingModal();
  }
}

// Reset booking modal back to form
function resetBookingModal() {
  const formContainer = document.getElementById("modal-form-content");
  const successContainer = document.getElementById("modal-success-content");
  const bookingForm = document.getElementById("doorstep-booking-form");

  if (formContainer && successContainer) {
    formContainer.classList.remove("hidden");
    successContainer.classList.add("hidden");
  }
  if (bookingForm) bookingForm.reset();
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
