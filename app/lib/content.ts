export const siteConfig = {
  brand: 'BrightClean',
  descriptor: 'SPACE CARE',
  tagline: 'Spaces that feel ready.',
  description: 'A considered cleaning service for homes, teams, and property partners who want a calm, visible reset.',
  draftNotice: true,
  phone: '00 0000 0000',
  email: 'hello@brightclean.example',
  whatsappNumber: '00000000000',
  formEndpoint: 'https://formspree.io/f/your-form-id',
  siteUrl: '',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/', submenu: [
      { label: 'All services', href: '/services/' },
      { label: 'Homes & shared spaces', href: '/services/#service-01' },
      { label: 'Office & commercial', href: '/services/#service-02' },
      { label: 'End of tenancy', href: '/services/#service-03' },
      { label: 'Deep cleaning', href: '/services/#service-08' },
    ] },
    { label: 'About', href: '/about/', submenu: [
      { label: 'Our approach', href: '/about/#approach' },
      { label: 'Principles', href: '/about/#principles' },
      { label: 'Service areas', href: '/about/#areas' },
    ] },
    { label: 'Contact', href: '/contact/' },
  ],
};

export const images = {
  cleaningTeam: '/manus-storage/cleaning-team_31fe1150.jpg',
  upholstery: '/manus-storage/upholstery-care_b52772b1.jpg',
  office: '/manus-storage/bright-office_aaadcca7.jpg',
  home: '/manus-storage/home-cleaning_aa488262.jpg',
  commercial: '/manus-storage/commercial-floor_46d8be18.jpg',
};

export const heroTrustPoints = [
  { eyebrow: '01', title: 'Clear communication', text: 'A simple handover from first hello to final check.', icon: 'MessageCircle' },
  { eyebrow: '02', title: 'Thoughtful detail', text: 'A practical clean built around how your space works.', icon: 'Sparkles' },
  { eyebrow: '03', title: 'Flexible rhythm', text: 'One-off, recurring, or ready-for-what-is-next.', icon: 'CalendarCheck2' },
];

export const services = [
  { number: '01', title: 'Home & shared spaces', short: 'A considered reset for the rooms you use every day.', detail: 'Sample scope: kitchens, living areas, bedrooms, high-touch surfaces, and those easy-to-miss finishing details.', tone: 'aqua', image: images.home, icon: 'Home' },
  { number: '02', title: 'Office & commercial', short: 'A brighter baseline for teams, visitors, and working days.', detail: 'Sample scope: work areas, kitchens, washrooms, meeting rooms, touchpoints, and end-of-day presentation.', tone: 'lime', image: images.office, icon: 'Building2' },
  { number: '03', title: 'End of tenancy', short: 'A clear, calm handover when a chapter closes.', detail: 'Sample scope: move-out resets, fixtures, floors, kitchens, bathrooms, and handover-ready details.', tone: 'blue', image: images.home, icon: 'KeyRound' },
  { number: '04', title: 'Carpet & upholstery', short: 'A deeper refresh for the soft surfaces that carry the day.', detail: 'Sample scope: sample fabric care, spot treatment, refreshed seating, and a more presentable finish.', tone: 'sand', image: images.upholstery, icon: 'Armchair' },
  { number: '05', title: 'Short-let turnovers', short: 'A reliable reset between one stay and the next.', detail: 'Sample scope: room-by-room reset, amenity check, linen handover notes, and presentation-ready details.', tone: 'teal', image: images.home, icon: 'RefreshCw' },
  { number: '06', title: 'Post-construction', short: 'From dust-heavy to ready for people again.', detail: 'Sample scope: first-fix dust, labels and residue, floor care, surfaces, and practical final checks.', tone: 'ink', image: images.commercial, icon: 'HardHat' },
  { number: '07', title: 'Kitchen care', short: 'The hard-working heart of a space, made easier to use.', detail: 'Sample scope: degreasing, touchpoints, cupboards, splashbacks, appliances, and high-use surfaces.', tone: 'coral', image: images.home, icon: 'Utensils' },
  { number: '08', title: 'Deep & spring cleaning', short: 'A deliberate reset when ordinary cleaning is not enough.', detail: 'Sample scope: detail-led room resets, corners, edges, hidden surfaces, and a fresh-start feeling.', tone: 'mint', image: images.cleaningTeam, icon: 'Sparkles' },
];

export const whyChooseUs = [
  { number: '01', title: 'Easy to brief', text: 'Tell us what matters most and we will shape the next step around it.', icon: 'ClipboardCheck' },
  { number: '02', title: 'Consistent cadence', text: 'Keep a recurring clean feeling considered, not automatic.', icon: 'Repeat2' },
  { number: '03', title: 'Fully focused', text: 'A clear scope helps the work feel calm, visible, and complete.', icon: 'Focus' },
  { number: '04', title: 'People-first', text: 'Good service should feel like a thoughtful handover, not a transaction.', icon: 'HeartHandshake' },
];

export const reviews = [
  { rating: '5.0', quote: 'Sample review: the booking felt simple, the handover was clear, and the space looked ready for the week.', name: 'Customer A', role: 'Sample review · [City]' },
  { rating: '5.0', quote: 'Sample review: a calm, detail-minded team who understood the difference between tidy and truly ready.', name: 'Customer B', role: 'Sample review · [Area]' },
  { rating: '5.0', quote: 'Sample review: the useful part was the communication. We always knew what was happening next.', name: 'Customer C', role: 'Sample review · [City]' },
  { rating: '5.0', quote: 'Sample review: the reset made the whole apartment feel lighter without making the process feel heavy.', name: 'Customer D', role: 'Sample review · [Area]' },
];

export const areas = ['[City]', '[Area]', '[Neighbourhood]', '[District]', '[Nearby town]', '[Postcode area]'];
export const metrics = [{ value: '00+', label: 'sample spaces refreshed' }, { value: '00%', label: 'sample repeat bookings' }];
export const accreditations = ['ACCREDITATION', 'MEMBERSHIP', 'INSURANCE', 'TRAINING'];

export const processSteps = [
  { number: '01', title: 'Share the space', text: 'Tell us what kind of place it is, what needs attention, and when you need it ready.' },
  { number: '02', title: 'Shape the scope', text: 'We turn the first conversation into a clear, practical outline with no fog around the detail.' },
  { number: '03', title: 'Set the rhythm', text: 'Choose a one-off reset, a recurring cadence, or a handover moment between uses.' },
  { number: '04', title: 'Enjoy the reset', text: 'The final handover should feel visible: a space that is easier to use and simpler to return to.' },
];

export const aboutHighlights = [
  { title: 'A clear brief', text: 'The best work starts with listening carefully to how a space is used.' },
  { title: 'A visible standard', text: 'We make the scope and the handover easy to understand.' },
  { title: 'A human rhythm', text: 'Good service should fit into real routines, not create more work.' },
];

export const clientChecklist = [
  'Final company name and approved wordmark/logo',
  'Real service list, scope notes, and any starting prices',
  'Original team, process, and space photography',
  'Real service areas and contact details',
  'Real customer reviews with permission to publish',
  'Verified numbers, insurance, accreditations, and memberships',
  'The IONOS hosting plan details and chosen Formspree endpoint',
];
