export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  benefits: { title: string; desc: string }[];
}

export const services: Service[] = [
  {
    slug: "comprehensive-eye-exams",
    title: "Comprehensive Eye Exams",
    shortDesc: "Full vision check, refraction, and early detection of eye diseases.",
    description:
      "Our comprehensive eye exams provide a thorough evaluation of your vision and eye health. Using state-of-the-art diagnostic tools, our experienced optometrists assess your visual acuity, check for refractive errors, and screen for early signs of eye diseases.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    benefits: [
      { title: "Latest Technology", desc: "We use advanced diagnostic tools and treatments to deliver accurate results and safer procedures." },
      { title: "Personalized Care", desc: "Every treatment plan is customized based on your vision goals and lifestyle needs." },
      { title: "Experienced Specialists", desc: "Our team of eye doctors and surgeons have years of expertise in vision correction." },
      { title: "Safe Procedures", desc: "We follow strict medical standards to ensure safety and comfort during every treatment." },
      { title: "Comprehensive Support", desc: "From consultation to post-treatment care, we provide continuous support for long-term eye health." },
      { title: "Improved Quality of Life", desc: "Clearer vision helps you enjoy daily activities, work, and leisure with confidence and ease." },
    ],
  },
  {
    slug: "glasses-contact-lenses",
    title: "Glasses & Contact Lenses",
    shortDesc: "Prescription glasses, contact lens fitting, and digital eye strain solutions.",
    description:
      "Find the perfect eyewear solution from our extensive collection. Whether you need prescription glasses, contact lenses, or specialty eyewear for digital eye strain, our optical experts will help you find the best fit for your vision and lifestyle.",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80",
    benefits: [
      { title: "Wide Selection", desc: "Hundreds of frames from top designers and affordable options for every budget." },
      { title: "Expert Fitting", desc: "Proper fitting ensures comfort and optimal visual clarity." },
      { title: "Digital Protection", desc: "Blue light blocking lenses to reduce digital eye strain." },
      { title: "Contact Lens Trial", desc: "Try before you commit with our contact lens trial program." },
      { title: "Quick Turnaround", desc: "Most prescriptions are ready within 24-48 hours." },
      { title: "Ongoing Adjustments", desc: "Free adjustments and follow-up fittings included." },
    ],
  },
  {
    slug: "pediatric-eye-care",
    title: "Pediatric Eye Care",
    shortDesc: "Myopia control, lazy eye treatment, and strabismus correction for children.",
    description:
      "Children's eyes are constantly developing, making early eye care essential. Our pediatric specialists are trained to work with children of all ages, providing comfortable, child-friendly exams and effective treatments for common childhood vision problems.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80",
    benefits: [
      { title: "Child-Friendly Environment", desc: "Our clinic is designed to make children feel comfortable and at ease." },
      { title: "Early Detection", desc: "Identifying vision problems early prevents long-term issues." },
      { title: "Myopia Control", desc: "Specialized treatments to slow the progression of nearsightedness." },
      { title: "Lazy Eye Treatment", desc: "Effective therapies for amblyopia and strabismus." },
      { title: "School Vision Screenings", desc: "Partner with local schools for comprehensive vision screenings." },
      { title: "Parent Education", desc: "We help parents understand their child's vision needs." },
    ],
  },
  {
    slug: "cataract-surgery",
    title: "Cataract Surgery",
    shortDesc: "Standard removal, premium intraocular lens, and laser-assisted surgery.",
    description:
      "Cataracts don't have to dim your world. Our skilled surgeons use the latest techniques including laser-assisted cataract surgery to safely and effectively restore your clear vision. We offer a range of intraocular lens options to meet your visual goals.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    benefits: [
      { title: "Laser-Assisted Precision", desc: "Advanced laser technology for more precise and predictable outcomes." },
      { title: "Premium IOL Options", desc: "Choose from monofocal, multifocal, and toric lenses." },
      { title: "Rapid Recovery", desc: "Most patients return to normal activities within days." },
      { title: "Experienced Surgeons", desc: "Our surgeons have performed thousands of successful procedures." },
      { title: "Comprehensive Pre-Op Care", desc: "Thorough evaluation and planning for optimal results." },
      { title: "Post-Op Support", desc: "Close monitoring and support throughout your recovery." },
    ],
  },
  {
    slug: "refractive-surgery",
    title: "Refractive Surgery",
    shortDesc: "LASIK, PRK, and SMILE for permanent correction of vision problems.",
    description:
      "Achieve freedom from glasses and contact lenses with our advanced refractive surgery options. Our experienced surgeons offer LASIK, PRK, and SMILE procedures, carefully selecting the best approach based on your unique corneal anatomy and vision needs.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80",
    benefits: [
      { title: "LASIK Available", desc: "Quick procedure with rapid visual recovery for most patients." },
      { title: "PRK for Thin Corneas", desc: "Excellent option for patients not suitable for LASIK." },
      { title: "SMILE Procedure", desc: "Minimally invasive flapless procedure with excellent outcomes." },
      { title: "Customized Treatment", desc: "Wavefront-guided procedures for personalized correction." },
      { title: "Long-Term Results", desc: "Most patients enjoy decades of clear vision after surgery." },
      { title: "Financing Available", desc: "Flexible payment plans to make surgery accessible." },
    ],
  },
  {
    slug: "glaucoma-care",
    title: "Glaucoma Care",
    shortDesc: "Screening, monitoring eye pressure, laser therapy, and surgery.",
    description:
      "Glaucoma is a leading cause of preventable blindness. Our comprehensive glaucoma program includes advanced diagnostic testing, careful monitoring, and a full range of treatments from eye drops and laser therapy to minimally invasive glaucoma surgery.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
    benefits: [
      { title: "Advanced Diagnostics", desc: "OCT imaging and visual field testing for early detection." },
      { title: "Pressure Monitoring", desc: "Regular monitoring to track disease progression." },
      { title: "Laser Therapy", desc: "SLT and other laser treatments to lower eye pressure." },
      { title: "MIGS Procedures", desc: "Minimally invasive surgical options with faster recovery." },
      { title: "Medication Management", desc: "Expert guidance on glaucoma eye drops and medications." },
      { title: "Ongoing Monitoring", desc: "Lifelong monitoring and adjustment of treatment plans." },
    ],
  },
];

export const servicesSidebar = [
  { label: "Comprehensive Eye Exams", slug: "comprehensive-eye-exams" },
  { label: "Pediatric Eye Care", slug: "pediatric-eye-care" },
  { label: "Vision Correction", slug: "refractive-surgery" },
  { label: "Cataract Treatment", slug: "cataract-surgery" },
  { label: "Glaucoma Management", slug: "glaucoma-care" },
  { label: "Contact Lenses", slug: "glasses-contact-lenses" },
  { label: "Dry Eye Therapy", slug: "dry-eye-therapy" },
  { label: "Laser Eye Surgery", slug: "refractive-surgery" },
];

export const expertise = [
  { label: "Comprehensive Eye Exams", percent: 95 },
  { label: "Vision Correction & Glasses", percent: 90 },
  { label: "Contact Lens Fitting", percent: 85 },
  { label: "Pediatric Eye Care", percent: 80 },
  { label: "Dry Eye Treatment", percent: 75 },
  { label: "Advanced Diagnostic Technology", percent: 92 },
];
