# Portfolio Website — Tasks

---

## Phase 1: Project Setup & Foundation

- [X] Initialize Next.js project with App Router
- [X] Install dependencies (Tailwind CSS, Framer Motion, React Icons, React Toastify)
- [x] Configure Tailwind CSS (colors, fonts, spacing, custom config)
- [x] Define semantic color tokens in Tailwind config (primary, secondary, accent, white, black, border, success, error, warning)
- [x] Define typography scale in Tailwind config (hero, section, card, body, small, caption, button sizes + weights)
- [x] Set up folder structure (`src/app/`, `src/components/`, `src/hooks/`, `src/lib/`, `src/services/`, `src/utils/`, `src/constants/`, `src/data/`, `src/types/`, `public/`)
- [x] Create global styles (`globals.css`)
- [x] Set up metadata, SEO base (OG, Twitter cards)
- [x] Add custom fonts (modern sans-serif, single font family)
- [x] Create JSON data files for all static content (projects, experience, skills, testimonials, personal info)
- [x] Define shared constants (navigation links, social links, site config)

---

## Phase 2: Layout & Navigation

- [x] Build root layout (`app/layout.js`)
- [ ] Build Navbar component (sticky, responsive, mobile menu, active section indicator)
- [ ] Build Footer component (copyright, simple layout)
- [ ] Implement smooth scroll behavior
- [ ] Implement active section tracking on scroll (Intersection Observer)

---

## Phase 3: Core Sections

- [ ] Build Section Header shared component
- [ ] Build Button component (primary, secondary, variants)
- [ ] Build Badge / Skill Badge component
- [ ] Build Social Button component
- [ ] Build Hero section (intro, CTA buttons, resume download, social links)
- [ ] Build About section (profile summary, image, personal info)
- [ ] Build Experience section (timeline, company info, view details)
- [ ] Build Skills section (categorized skills, skill badges, certifications)

---

## Phase 4: Projects

- [ ] Build Project Card component
- [ ] Build Projects section (category filtering, 3-column grid, responsive)
- [ ] Build Project Details page (`app/projects/[id]/page.js`)
- [ ] Add back navigation on Project Details page
- [ ] Build Project Details content (preview, tech stack, contributions, challenges, future improvements, live/GitHub buttons)

---

## Phase 5: Testimonials, Contact & Footer

- [ ] Build Testimonials section (responsive cards, optional carousel)
- [ ] Build Contact section (info, form, social links)
- [ ] Build Form Input component
- [ ] Implement form validation
- [ ] Implement form submission with toast notification
- [ ] Build Contact Card component
- [ ] Build Toast component / integrate React Toastify

---

## Phase 6: Animations & Interactions

- [ ] Define shared Framer Motion variants (entrance, scroll, hover)
- [ ] Add entrance animations to all sections
- [ ] Add scroll-triggered reveal animations
- [ ] Add hover interactions to cards, buttons, badges
- [ ] Add smooth page transitions

---

## Phase 7: Responsive & Polish

- [ ] Audit and fix responsive behavior for all sections (desktop, tablet, mobile)
- [ ] Ensure no content overflows on any screen size
- [ ] Lazy load images and optimize assets
- [ ] Add missing alt text and semantic HTML
- [ ] Verify keyboard navigation and focus indicators
- [ ] Test Lighthouse performance (target: 90+)
- [ ] Generate sitemap and robots.txt

---

## Phase 8: Deployment & Final Checks

- [ ] Build production bundle and test locally
- [ ] Deploy to Vercel
- [ ] Verify live site (all sections, links, forms, animations)
- [ ] Final Lighthouse audit
- [ ] Push to GitHub
