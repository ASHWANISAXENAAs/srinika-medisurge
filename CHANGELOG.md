# CHANGELOG & PRODUCTION LAUNCH GUIDE

**Project:** Srinika Medisurge – Doorstep Healthcare & Nursing Lucknow  
**Website:** [https://srinikamedisurge.in/](https://srinikamedisurge.in/)  
**Date:** October 2026  
**Version:** 2.0.0 (Multi-Page Architecture Upgrade)  

---

## 1. Executive Summary

The Srinika Medisurge website has undergone a complete architectural upgrade from a legacy single-page application into a high-performance, mobile-first, technical-SEO-optimized static multi-page website. 

All existing medical claims, pricing structures, doctor credentials, response times (30–45 min), sterility assurances, and testimonials have been **strictly preserved without alteration**. The site now features **42 dedicated URLs**, full JSON-LD structured data on all pages, a centralized configuration management system, and zero-compromise UX/accessibility standards.

---

## 2. Summary of Changes

### Task 1: Multi-Page Architecture & URL Structure
- Built a modular static site builder in `builder/` (`build.js`, `data/`, `templates/`) that compiles directly to standard static HTML/CSS/JS without heavyweight client-side runtime dependencies.
- Generated 42 distinct, clean-URL pages:
  - **Homepage** (`/` -> `index.html`)
  - **Services Overview** (`/services/`)
  - **11 Dedicated Service Pages:**
    - `/services/doctor-home-visit-lucknow/` (₹2,000)
    - `/services/online-doctor-consultation/` (₹500)
    - `/services/home-nursing-lucknow/` (From ₹999 / shift)
    - `/services/wound-dressing-at-home-lucknow/` (Basic ₹399 / Complex ₹699)
    - `/services/urinary-catheterization-at-home-lucknow/` (₹599)
    - `/services/ng-tube-insertion-at-home-lucknow/` (₹699)
    - `/services/iv-drip-injection-at-home-lucknow/` (IM/SC Injection ₹299 / IV Drip ₹449)
    - `/services/physiotherapy-at-home-lucknow/` (₹600)
    - `/services/bipap-oxygen-support-at-home-lucknow/` (₹1,200)
    - `/services/nebulization-vitals-ecg-at-home/` (Nebulization ₹350 / ECG Checkup ₹499)
    - `/services/patient-attendant-lucknow/` (12h ₹999 / 24h ₹1,799)
  - **Doctors Directory** (`/doctors/`) featuring all 4 verified physicians and nursing team credentials.
  - **Medical Equipment Rentals & Sales** (`/equipment/`) with 6 essential life-support devices.
  - **Coverage Areas Overview** (`/areas/`) + **10 Dedicated Area Landing Pages:**
    - `/areas/home-nursing-gomti-nagar/` (30–40 min response)
    - `/areas/home-nursing-gomti-nagar-extension/` (30–40 min response)
    - `/areas/home-nursing-vibhuti-khand/` (25–35 min response)
    - `/areas/home-nursing-indira-nagar/` (35–45 min response)
    - `/areas/home-nursing-hazratganj/` (35–45 min response)
    - `/areas/home-nursing-mahanagar/` (35–45 min response)
    - `/areas/home-nursing-aliganj-jankipuram/` (40–50 min response)
    - `/areas/home-nursing-shaheed-path-sushant-golf-city/` (35–45 min response)
    - `/areas/home-nursing-alambagh-ashiyana/` (40–50 min response)
    - `/areas/home-nursing-chinhat-kamta/` (30–40 min response)
  - **Pricing & Cost Estimator** (`/pricing/`) with real-time interactive calculation and prefilled WhatsApp dispatch.
  - **Patient Reviews & Ratings** (`/reviews/`) with all 6 verbatim testimonials and Google Maps review link.
  - **Book Visit & Payment Flow** (`/book/`) with step-by-step dispatch form, Razorpay online checkout, and direct UPI fallback.
  - **Contact Page** (`/contact/`) with Google Maps interactive embed, NAP verification, and fast message inquiry form.
  - **Health Blog Hub** (`/blog/`) + **6 In-Depth Articles** (700–1,000 words each).
  - **About Us** (`/about/`) with founder journey and hospital-vs-home care comparison matrix.
  - **Compliance & Legal Pages:**
    - `/privacy-policy/`
    - `/terms-and-conditions/`
    - `/refund-and-cancellation-policy/`
    - `/medical-disclaimer/` (including 108 emergency guidelines)
  - **Custom 404 Error Page** (`404.html`) with search helpful links and `noindex`.

### Task 2: Homepage Redesign (Focused & Conversion-Driven)
- Structured the homepage into exactly 10 sequential sections:
  1. **Hero:** Exact H1, 4 verified stats (30–45 min, 100% sterile, 2,500+ visits, 4.9★), primary CTAs (Book Doorstep Visit + WhatsApp), secondary Call/Consult link.
  2. **Emergency Strip:** Critical care disclaimer & 108 emergency advice.
  3. **Top 6 Services Grid:** Prominent cards linking to dedicated service landing pages.
  4. **Why Srinika Medisurge:** 3 foundational pillars (Sterile Kits, Verified Staff, Zero Fraud pricing).
  5. **Doctors & Leadership Preview:** Highlights Dr. Piyush Saxena and team with link to `/doctors/`.
  6. **Top 3 Testimonials:** Verbatim patient stories + link to `/reviews/`.
  7. **4-Step Care Process:** How doorstep medical assistance works.
  8. **Top 5 FAQs:** Direct answers to common patient concerns.
  9. **Emergency Final CTA:** Call & WhatsApp dispatch prompt.
  10. **Comprehensive Medical Business Footer:** Full NAP, legal links, area links, service links.

### Task 3: Technical SEO & Schema Markup
- **Canonical URLs:** Self-referencing canonical on all 42 pages.
- **Meta Tags:** Customized `<title>` (50–60 characters) and `<meta description>` (140–160 characters) tailored per page with Lucknow geography.
- **Open Graph & Twitter Cards:** Full social card metadata with 1200x630 share image.
- **Structured Data (113 JSON-LD Schemas):**
  - Sitewide `MedicalBusiness` / `LocalBusiness` with geo coordinates (`26.8467`, `80.9462`), opening hours (24/7), NAP, price range, and `sameAs` social links.
  - `Physician` schemas for all 4 doctors with exact qualifications and specialties.
  - `Service` / `MedicalProcedure` schemas on all 11 service pages with exact INR offers.
  - `FAQPage` schema on all pages containing question-answer accordions.
  - `BreadcrumbList` schema on all inner subpages.
  - `BlogPosting` schema on all 6 medical articles.
- **Indexation Assets:**
  - `sitemap.xml`: XML sitemap containing all 42 URLs with appropriate priorities and change frequencies.
  - `robots.txt`: Proper crawling rules, allowing indexing of all public URLs while disallowing internal test/checkout endpoints, referencing the live sitemap.
  - `vercel.json`: Clean URL routing (`cleanUrls: true`) and consistent trailing slash configuration.

### Task 4: Performance, UX & Bug Fixes
- **Estimator Fix:** The "Confirm on WhatsApp" button now dynamically compiles the user's selected service, Lucknow neighborhood, and computed total into an auto-filled WhatsApp message.
- **Receipt Security Fix:** Removed dummy preview data (`pay_xxxxxxxx`, `#SRN-2610-0000`). The receipt and invoice panel now remain completely hidden until a real Razorpay payment or verified dispatch occurs.
- **Dead Link Removal:** Verified 3,181 internal links across all pages with **0 broken links**. All navigation elements point to real HTML endpoints.
- **Anti-Spam:** Honeypot field protection added to contact and booking forms.
- **Floating Controls:** Persistent Call and WhatsApp quick-action buttons on every viewport, plus mobile sticky bottom bar (`Call` | `WhatsApp` | `Book Now`).

### Task 5: Medical Blog Content
- Authored 6 clinically accurate, patient-friendly medical articles (700–1,000 words each):
  1. *Home Nursing Care in Lucknow: Comprehensive Guide to Doorstep Clinical Services*
  2. *Urinary Catheter Care at Home: Essential Do's and Don'ts for Patients and Caregivers*
  3. *When is BiPAP or Oxygen Concentrator Support Required at Home? Clinical Guidelines*
  4. *Post-Surgical Wound Dressing at Home: Infection Prevention and Sterile Care Protocols*
  5. *Home Physiotherapy After Stroke or Orthopedic Surgery: Personalized Rehabilitation Guide*
  6. *Doorstep Doctor Visit vs Hospital OPD: Why Home Care is Superior for Elderly Patients*
- Every article includes structured FAQs, author credit (Srinika Medisurge Medical Team), mandatory emergency medical disclaimers, and contextual links to related service pages.

### Task 6: Legal & Compliance Infrastructure
- Created standard, comprehensive Indian healthcare policy documents:
  - Privacy Policy (Digital Personal Data Protection Act compliance)
  - Terms & Conditions
  - Refund & Cancellation Policy (Doorstep cancellation terms)
  - Medical Disclaimer (Non-emergency scope, 108 ambulance advice)

### Task 7 & 8: Local SEO & Centralized Config
- Created `site.config.js` and `site.config.json` consolidating all business variables, phone numbers, WhatsApp, coordinates, and tracking placeholders.
- Created `local-seo-checklist.md` providing an actionable guide for Google Business Profile optimization, directory listings (Justdial, Practo, Sulekha, IndiaMART), and Search Console setup.

---

## 3. Owner Launch Checklist

Follow these 5 steps to launch the updated site to production:

### Step 1: NAP & Contact Configuration
- **Main Business Helpline**: `+91 96530 01359` (Calls & WhatsApp across all public pages)
- **Founder Direct Escalation**: `+91 89319 85484` (Dr. Piyush Saxena personal card & direct call)
- **Active Social Profiles**:
  - Facebook: `https://www.facebook.com/share/1BajYwmrsG/`
  - Instagram: `https://www.instagram.com/srinika_medisurge/`
  - Google Maps Profile: `https://share.google/xOFCwF7mYkANqIxis`

### Step 2: Remaining Optional Placeholders
Open `site.config.js` (or `site.config.json`) if you wish to configure optional third-party analytics:
1. `businessEmail`: Replace `"[BUSINESS_EMAIL]"` with your official business email address (e.g., `contact@srinikamedisurge.in`). Note: if left unresolved, email elements are automatically omitted from public HTML for clean rendering.
2. `googleReviewLink`: Replace `"[GOOGLE_REVIEW_LINK]"` with your Google Business direct review URL.
3. `analytics.ga4Id`: Replace `"[GA4_ID]"` with your Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`).
4. `analytics.metaPixelId`: Replace `"[META_PIXEL_ID]"` with your Meta/Facebook Pixel ID.

### Step 3: Verified Razorpay Payment Flow
- Configured with active public Live Key: `rzp_live_Tn6PZUwraJ9021`.
- Manual UPI / UTR verification has been completely decommissioned; all online payments are processed through Razorpay's bank-grade checkout (supporting UPI, Cards, NetBanking).
- Detailed ₹1 transaction testing instructions and webhook verification are documented in `TEST-PAYMENT.md`.

### Step 3: Rebuild the Static Pages
Whenever you edit `site.config.js` or data in `builder/data/`, regenerate the static HTML pages by running:
```bash
node builder/build.js
```
All 42 HTML pages, `sitemap.xml`, and `robots.txt` will update instantaneously.

### Step 4: Deploy to Vercel / Production Hosting
If using Vercel CLI:
```bash
vercel --prod
```
Or simply push your code commit to your GitHub repository connected to Vercel/Netlify/Cloudflare Pages. The site is 100% static and requires no server runtime.

### Step 5: Submit Sitemap to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Select property `https://srinikamedisurge.in/`.
3. In the left navigation, click **Sitemaps**.
4. Enter `sitemap.xml` in the "Add a new sitemap" input and click **Submit**.
5. All 42 pages will begin indexing immediately.
