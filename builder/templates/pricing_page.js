const CONFIG = require('../../site.config.js');

function renderPricingPage() {
  const priceCatalogList = [
    { name: "Online Doctor Video Consultation", price: "₹500 / consult", category: "Doctor Consultation", details: "Direct Video/Audio call with Dr. Piyush Saxena or Specialists; WhatsApp digital prescription." },
    { name: "Doctor Consultation At Door Step (Within 5km)", price: "₹2,000 / visit", category: "Doctor Consultation", details: "Comprehensive physical checkup, diagnosis, vital evaluation & prescription at home." },
    { name: "Physiotherapy At Door Step Session", price: "₹600 / session", category: "Physiotherapy", details: "Targeted 45-60 min neuro/ortho rehab by certified BPT/MPT therapist with electrotherapy." },
    { name: "12-Hour Patient Care / Attendant (Day or Night)", price: "₹999 / shift", category: "Nursing & Attendant", details: "Bedside assistance, mobility, feeding, hygiene, diaper change, and oral medicine support." },
    { name: "24-Hour Patient Care / Attendant (Live-in)", price: "₹1,799 / 24h", category: "Nursing & Attendant", details: "Continuous round-the-clock bedside attendant care for bedridden or elderly patients." },
    { name: "Basic Surgical Wound Dressing", price: "₹399 / session", category: "Surgical Dressing", details: "Hospital-grade sterile dressing, stitch care, and antiseptic cleaning with disposable kit." },
    { name: "Complex Diabetic Ulcer / Bed Sore Dressing", price: "₹699 / session", category: "Surgical Dressing", details: "Advanced collagen/foam dressing for Grade 1-4 pressure sores and non-healing ulcers." },
    { name: "Urinary Catheterization (Foley / Silicone)", price: "₹599 / procedure", category: "Catheter Care", details: "Painless aseptic insertion/change with 2% Lignocaine jelly, sterile tray, and urobag." },
    { name: "Ryle's Tube / NG Feeding Tube Insertion", price: "₹699 / procedure", category: "Catheter Care", details: "Sterile nasogastric tube insertion, stethoscope placement confirmation, and feeding demo." },
    { name: "IV Fluid Infusion / Drip Administration", price: "₹449 / infusion", category: "Injections & IV", details: "Aseptic IV cannulation with heparin lock, Normal Saline/RL infusion, and vital monitoring." },
    { name: "IM / SC Injection & Vitals Check", price: "₹299 / visit", category: "Injections & IV", details: "Sterile intramuscular or subcutaneous injection with disposable syringe and vitals check." },
    { name: "BiPAP Machine & Critical Respiratory Setup", price: "₹1,200 / setup", category: "Critical Care", details: "Dual-pressure titration, mask fitting, humidifier maintenance, and continuous SpO2 check." },
    { name: "Nebulization Therapy Session", price: "₹350 / session", category: "Critical Care", details: "High-power compressor nebulization with bronchodilator respules and chest clearance." },
    { name: "Full Vitals & Blood Sugar / Digital ECG Check", price: "₹499 / checkup", category: "Diagnostics", details: "12-lead digital ECG tracing, Blood Pressure, Pulse, SpO2, Temperature & Sugar profile." },
    { name: "Diagnostic Sample Collection at Home", price: "From ₹299 + test MRP", category: "Diagnostics", details: "Sterile blood/urine collection by trained phlebotomist; prompt digital reports on WhatsApp." }
  ];

  return `
    <div class="bg-gradient-to-b from-brand-50 to-white py-12 sm:py-16 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
          Transparent Healthcare Pricing
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mt-4 mb-4">
          Doorstep Healthcare & Nursing Pricing in Lucknow
        </h1>
        <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Zero hidden costs. 100% upfront transparency. Calculate your estimated visit cost below or browse our official fee catalog.
        </p>
      </div>
    </div>

    <div class="py-12 sm:py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- INTERACTIVE COST ESTIMATOR (Moved from homepage & Bug Fixed) -->
        <div id="calculator" class="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div class="text-center mb-8">
            <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Instant Price Calculator
            </span>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-2">
              Estimate Your Doorstep Care Cost
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Select your required service and Lucknow locality to see the exact estimated amount.
            </p>
          </div>

          <div class="space-y-5">
            <div>
              <label for="calc-service" class="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Select Medical Service *
              </label>
              <select id="calc-service" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none font-medium text-slate-800">
                <option value="wound-dressing-basic">Basic Surgical Wound Dressing (₹399)</option>
                <option value="wound-dressing-complex">Complex Diabetic / Bed Sore Dressing (₹699)</option>
                <option value="catheter-insertion">Urinary Catheterization (Foley/Silicone) (₹599)</option>
                <option value="ryles-tube">Ryle's Tube / NG Feeding Tube Insertion (₹699)</option>
                <option value="iv-infusion">IV Fluid Infusion / Drip Administration (₹449)</option>
                <option value="im-injection">IM / SC Injection & Vitals Check (₹299)</option>
                <option value="consultation-online">Online Doctor Video Consultation (₹500)</option>
                <option value="consultation-doorstep">Doctor Consultation At Door Step (Within 5km) (₹2,000)</option>
                <option value="physiotherapy-doorstep">Physiotherapy At Door Step Session (₹600)</option>
                <option value="patient-care-12h">12-Hour Patient Care / Attendant (₹999)</option>
                <option value="patient-care-24h">24-Hour Patient Care / Attendant (₹1,799)</option>
                <option value="bipap-setup">BiPAP Machine & Critical Respiratory Support (₹1,200)</option>
                <option value="nebulization">Nebulization Therapy Session (₹350)</option>
                <option value="vitals-ecg">Full Vitals & Sugar / ECG Checkup (₹499)</option>
              </select>
            </div>

            <div>
              <label for="calc-area" class="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Your Area in Lucknow *
              </label>
              <select id="calc-area" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none font-medium text-slate-800">
                <option value="Gomti Nagar">Gomti Nagar (Primary Hub • 15-25 Mins)</option>
                <option value="Gomti Nagar Extension">Gomti Nagar Extension (20-30 Mins)</option>
                <option value="Vibhuti Khand">Vibhuti Khand (15-25 Mins)</option>
                <option value="Indira Nagar">Indira Nagar (25-35 Mins)</option>
                <option value="Hazratganj">Hazratganj (30-40 Mins)</option>
                <option value="Mahanagar">Mahanagar (30-40 Mins)</option>
                <option value="Aliganj & Jankipuram">Aliganj & Jankipuram (35-45 Mins)</option>
                <option value="Shaheed Path / Sushant Golf City">Shaheed Path / Sushant Golf City (25-35 Mins)</option>
                <option value="Alambagh & Ashiyana">Alambagh & Ashiyana (35-50 Mins)</option>
                <option value="Chinhat & Kamta">Chinhat & Kamta (20-30 Mins)</option>
              </select>
            </div>

            <div class="flex items-center gap-2.5 p-3.5 bg-amber-50 rounded-xl border border-amber-200">
              <input type="checkbox" id="calc-urgent" class="w-4 h-4 text-sky-600 rounded focus:ring-sky-500">
              <label for="calc-urgent" class="text-xs font-bold text-amber-950 cursor-pointer">
                Urgent Priority Dispatch (+₹150 for fastest arrival within 20-30 minutes)
              </label>
            </div>

            <!-- Total Cost Display & WhatsApp CTA -->
            <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span class="text-xs text-slate-400 uppercase font-bold block">Estimated Amount</span>
                <span id="calc-total-display" class="text-3xl sm:text-4xl font-black text-brand-700">₹399</span>
                <span class="text-[11px] text-slate-500 block">Includes sterile disposable consumables</span>
              </div>

              <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <a id="calc-whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 text-center">
                  <i class="fa-brands fa-whatsapp text-lg"></i>
                  <span>Confirm on WhatsApp</span>
                </a>
                <a href="/book/" class="px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition text-center">
                  Book Online
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- COMPLETE PRICING CATALOG TABLE -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 font-heading">
                Complete Service Fee Catalog (Lucknow)
              </h2>
              <p class="text-xs sm:text-sm text-slate-500">
                Official rates active across Gomti Nagar, Indira Nagar, Hazratganj, and all Lucknow localities.
              </p>
            </div>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> Zero Hidden Charges
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm border-collapse">
              <thead>
                <tr class="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th class="p-3.5 font-bold border border-slate-200">Service Category</th>
                  <th class="p-3.5 font-bold border border-slate-200">Service Name</th>
                  <th class="p-3.5 font-bold border border-slate-200">Fee (INR)</th>
                  <th class="p-3.5 font-bold border border-slate-200">What's Included</th>
                  <th class="p-3.5 font-bold border border-slate-200">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-xs sm:text-sm">
                ${priceCatalogList.map(item => `
                  <tr class="hover:bg-slate-50/80 transition">
                    <td class="p-3.5 font-semibold text-slate-500 text-xs">${item.category}</td>
                    <td class="p-3.5 font-bold text-slate-900">${item.name}</td>
                    <td class="p-3.5 font-black text-brand-700 whitespace-nowrap">${item.price}</td>
                    <td class="p-3.5 text-slate-600 text-xs leading-relaxed max-w-xs">${item.details}</td>
                    <td class="p-3.5 whitespace-nowrap">
                      <a href="/book/?service=${encodeURIComponent(item.name)}" class="text-xs bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white font-bold py-1.5 px-3 rounded-lg border border-sky-200 transition">
                        Book
                      </a>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <strong class="text-slate-800 block">Accepted Payment Modes:</strong>
            <p>Cash on arrival for doorstep visits, and instant UPI (Google Pay, PhonePe, Paytm, BHIM), NetBanking, or Credit/Debit Cards via Razorpay Secure checkout.</p>
          </div>
        </div>

      </div>
    </div>
  `;
}

module.exports = {
  renderPricingPage
};
