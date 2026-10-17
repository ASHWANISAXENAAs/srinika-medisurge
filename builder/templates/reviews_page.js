const CONFIG = require('../../site.config.js');
const TESTIMONIALS = require('../data/testimonials.js');

function renderReviewsPage() {
  return `
    <div class="bg-gradient-to-b from-brand-50 to-white py-12 sm:py-16 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
          Verified Patient Experiences
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mt-4 mb-4">
          Patient Reviews & Real Recovery Stories
        </h1>
        <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Read genuine feedback from families across Gomti Nagar, Indira Nagar, Vibhuti Khand, and Lucknow whose loved ones received doorstep care from <strong>${CONFIG.founderName}</strong> and the Srinika Medisurge team.
        </p>

        <!-- 4.9★ Patient Satisfaction & Stats Header Banner -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 p-4 max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm text-xs sm:text-sm">
          <div class="flex items-center gap-2">
            <span class="text-2xl font-black text-amber-500 font-heading">4.9 ★</span>
            <span class="text-slate-600 font-medium">Patient Satisfaction</span>
          </div>
          <div class="h-6 w-px bg-slate-200"></div>
          <div class="flex items-center gap-2">
            <span class="text-2xl font-black text-slate-900 font-heading">2,500+</span>
            <span class="text-slate-600 font-medium">Home Visits Done</span>
          </div>
          <div class="h-6 w-px bg-slate-200 hidden sm:block"></div>
          <a href="${(CONFIG.googleReviewLink && CONFIG.googleReviewLink.startsWith('http')) ? CONFIG.googleReviewLink : CONFIG.socialLinks.googleMaps}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-sm transition flex items-center gap-2 text-xs">
            <i class="fa-brands fa-google text-amber-400"></i>
            <span>Review us on Google</span>
          </a>
        </div>
      </div>
    </div>

    <!-- All 6 Testimonials Grid -->
    <div class="py-12 sm:py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${TESTIMONIALS.map(t => `
            <div class="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex text-amber-400 text-sm gap-1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span class="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    ${t.category}
                  </span>
                </div>

                <blockquote class="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;${t.quote}&rdquo;
                </blockquote>
              </div>

              <div class="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-full bg-sky-100 text-sky-800 font-extrabold flex items-center justify-center text-sm shadow-inner shrink-0">
                  ${t.initials}
                </div>
                <div>
                  <strong class="text-sm font-bold text-slate-900 block">${t.name}</strong>
                  <span class="text-xs text-slate-500 block">${t.location}</span>
                  <span class="text-[10px] text-emerald-600 font-semibold block mt-0.5">${t.badge}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Google Review WhatsApp Request Template Box -->
        <div class="p-8 bg-sky-50 rounded-3xl border border-sky-200 max-w-3xl mx-auto text-center space-y-4">
          <h2 class="text-2xl font-bold font-heading text-slate-900">
            Have You Received Care From Srinika Medisurge?
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Your honest review helps other families in Lucknow find trusted, gentle medical care for their loved ones. Tap below to share your experience on Google.
          </p>
          <div class="pt-2">
            <a href="${(CONFIG.googleReviewLink && CONFIG.googleReviewLink.startsWith('http')) ? CONFIG.googleReviewLink : CONFIG.socialLinks.googleMaps}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm rounded-xl shadow-md transition">
              <i class="fa-brands fa-google text-base"></i>
              <span>Write a Review on Google</span>
            </a>
          </div>
        </div>

        <!-- PATIENT FEEDBACK FORM (Moved from homepage) -->
        <div class="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div class="text-center">
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Direct Feedback
            </span>
            <h2 class="text-2xl font-bold text-slate-900 font-heading mt-2">
              Share Your Patient Feedback
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Your feedback is directly submitted to Dr. Piyush Saxena for continuous quality improvement.
            </p>
          </div>

          <form id="patient-feedback-form" onsubmit="submitPatientFeedback(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="fb-name" class="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                <input type="text" id="fb-name" required placeholder="Full Name" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none">
              </div>
              <div>
                <label for="fb-phone" class="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                <input type="tel" id="fb-phone" required placeholder="10-digit Mobile" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none">
              </div>
            </div>

            <div>
              <label for="fb-service" class="block text-xs font-bold text-slate-700 uppercase mb-1">Service Availed</label>
              <select id="fb-service" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none">
                <option value="Doctor Home Visit">Doctor Home Visit</option>
                <option value="Online Doctor Consultation">Online Doctor Consultation</option>
                <option value="Urinary Catheterization">Urinary Catheterization</option>
                <option value="Surgical Wound Dressing">Surgical Wound Dressing</option>
                <option value="IV Drip & Injections">IV Drip & Injections</option>
                <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                <option value="BiPAP & Oxygen Support">BiPAP & Oxygen Support</option>
                <option value="Patient Attendant Care">Patient Attendant Care</option>
                <option value="Other Service">Other Care</option>
              </select>
            </div>

            <!-- Star Rating Picker -->
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Rating *</label>
              <input type="hidden" id="fb-rating" value="5">
              <div id="star-picker" class="flex items-center gap-2 text-2xl text-amber-400 cursor-pointer pt-1">
                <i class="fa-solid fa-star" data-star="1" onclick="setFeedbackRating(1)"></i>
                <i class="fa-solid fa-star" data-star="2" onclick="setFeedbackRating(2)"></i>
                <i class="fa-solid fa-star" data-star="3" onclick="setFeedbackRating(3)"></i>
                <i class="fa-solid fa-star" data-star="4" onclick="setFeedbackRating(4)"></i>
                <i class="fa-solid fa-star" data-star="5" onclick="setFeedbackRating(5)"></i>
                <span id="star-rating-text" class="text-xs font-bold text-slate-600 ml-2">5.0 / 5.0 (Excellent)</span>
              </div>
            </div>

            <div>
              <label for="fb-message" class="block text-xs font-bold text-slate-700 uppercase mb-1">Your Feedback & Experience *</label>
              <textarea id="fb-message" rows="3" required placeholder="Describe your experience with Dr. Piyush Saxena and the nursing team..." class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"></textarea>
            </div>

            <button type="submit" id="fb-submit-btn" class="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-paper-plane text-xs"></i>
              <span>Submit Feedback</span>
            </button>

            <div id="fb-status-msg" class="hidden"></div>
          </form>
        </div>

      </div>
    </div>
  `;
}

module.exports = {
  renderReviewsPage
};
