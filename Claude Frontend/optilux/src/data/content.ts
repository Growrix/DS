export interface Testimonial {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
  platform: "google";
}

export const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    date: "15 July 2025",
    rating: 5,
    text: "The doctors were so attentive during my eye exam. They explained everything clearly and made me feel at ease. Highly recommended clinic!",
    avatar: "https://i.pravatar.cc/60?img=47",
    platform: "google",
  },
  {
    name: "Michael Lee",
    date: "3 August 2025",
    rating: 5,
    text: "I had cataract surgery here, and the whole process was smooth and stress-free. My vision has improved so much — thank you!",
    avatar: "https://i.pravatar.cc/60?img=11",
    platform: "google",
  },
  {
    name: "Sophia Martinez",
    date: "22 September 2025",
    rating: 5,
    text: "My son had his first pediatric eye checkup here, and the staff made him feel so comfortable. Excellent care for kids.",
    avatar: "https://i.pravatar.cc/60?img=23",
    platform: "google",
  },
  {
    name: "David Kim",
    date: "10 June 2025",
    rating: 5,
    text: "I got new glasses and contact lenses from here. The opticians were patient and helped me find the perfect fit.",
    avatar: "https://i.pravatar.cc/60?img=7",
    platform: "google",
  },
  {
    name: "Hannah Brown",
    date: "28 May 2025",
    rating: 5,
    text: "The glaucoma treatment plan was explained in detail, and I feel much more confident managing my condition now.",
    avatar: "https://i.pravatar.cc/60?img=44",
    platform: "google",
  },
  {
    name: "Daniel Wilson",
    date: "5 April 2025",
    rating: 5,
    text: "Professional staff and excellent facilities. From the waiting area to the consultation, everything was smooth and pleasant.",
    avatar: "https://i.pravatar.cc/60?img=15",
    platform: "google",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  label: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    label: "Appointments & Exams",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment online through our website by clicking the 'Book Your Visit' button, by calling our clinic at +1 232 343 9296, or by visiting us in person at 100 S Main St, New York, NY.",
      },
      {
        question: "Do I need a referral to see an optometrist?",
        answer:
          "No referral is needed to see an optometrist for a routine eye exam. However, some specialist consultations or surgical procedures may require a referral from your primary care provider or general optometrist.",
      },
      {
        question: "How often should I have my eyes checked?",
        answer:
          "Adults aged 18–60 should have a comprehensive eye exam every 1–2 years. Children should have their first exam at 6 months, again at 3 years, and before starting school. Adults over 60 should be examined annually. Those with existing eye conditions may need more frequent visits.",
      },
      {
        question: "How long does an eye exam take?",
        answer:
          "A comprehensive eye exam typically takes between 45 minutes and 1 hour. This includes pre-testing, the main examination with the optometrist, and time to discuss results and any treatment options.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring your current glasses or contact lenses, a list of any medications you are taking, your insurance information and ID, and any previous eye exam records if available.",
      },
    ],
  },
  {
    label: "Treatments & Procedures",
    items: [
      {
        question: "Is LASIK surgery safe?",
        answer:
          "LASIK is one of the most commonly performed elective procedures in the world with an excellent safety record. Over 95% of patients achieve their desired vision correction. Our surgeons will conduct a thorough pre-operative evaluation to determine if you are a good candidate.",
      },
      {
        question: "How long is recovery after cataract surgery?",
        answer:
          "Most patients experience significant improvement in their vision within 24–48 hours after cataract surgery. Full recovery typically takes 4–6 weeks, during which you should avoid strenuous activities, swimming, and rubbing your eyes.",
      },
      {
        question: "Can glaucoma be cured?",
        answer:
          "Glaucoma cannot currently be cured, but it can be effectively managed to prevent vision loss. With proper treatment including eye drops, laser therapy, or surgery, most patients are able to maintain their vision throughout their lifetime.",
      },
      {
        question: "At what age can children get contact lenses?",
        answer:
          "There is no specific minimum age for contact lenses. The decision depends on the child's maturity, responsibility, and motivation. Many children successfully wear contacts from age 10–12, though our optometrists evaluate each child individually.",
      },
      {
        question: "What is dry eye treatment?",
        answer:
          "Dry eye treatment varies depending on the severity. Options include artificial tears, prescription eye drops, punctal plugs, intense pulsed light (IPL) therapy, and lifestyle changes. Our specialists will recommend the most appropriate treatment after a thorough evaluation.",
      },
    ],
  },
  {
    label: "Insurance & Payments",
    items: [
      {
        question: "Do you accept insurance?",
        answer:
          "Yes, we accept most major vision and medical insurance plans. Please contact our office or check with your insurance provider to confirm coverage before your appointment.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, cash, and checks. We also offer flexible financing plans through CareCredit for qualifying procedures.",
      },
      {
        question: "Is LASIK covered by insurance?",
        answer:
          "LASIK is typically considered an elective procedure and is not covered by most standard vision insurance plans. However, some plans offer discounts on refractive surgery. We offer financing options to make LASIK more affordable.",
      },
      {
        question: "How much does a comprehensive eye exam cost?",
        answer:
          "Our comprehensive eye exam starts at $49 for a basic exam. The cost varies depending on the tests required and your insurance coverage. Please see our Pricing page for detailed information or call us for a personalized quote.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment plans through CareCredit and other financing partners. Our team can help you find a plan that works within your budget for any procedure or treatment.",
      },
    ],
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────

export interface PricingPlan {
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  period: string;
  features: { highlight: string; rest: string }[];
  cta: string;
  featured: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Eye Exam",
    subtitle: "Routine check-up",
    price: 49,
    originalPrice: 69,
    period: "/visit",
    features: [
      { highlight: "Vision", rest: " Test" },
      { highlight: "Refraction", rest: " Analysis" },
      { highlight: "Glasses", rest: " Prescription" },
      { highlight: "Basic", rest: " Eye Health Screening" },
    ],
    cta: "Book Appointment",
    featured: false,
  },
  {
    name: "Comprehensive Exam",
    subtitle: "Full diagnostic care",
    price: 89,
    originalPrice: 120,
    period: "/visit",
    features: [
      { highlight: "Basic Exam", rest: " Included" },
      { highlight: "Ocular Health", rest: " Imaging" },
      { highlight: "Glaucoma", rest: " Screening" },
      { highlight: "Contact Lens", rest: " Fitting" },
    ],
    cta: "Book Appointment",
    featured: true,
  },
  {
    name: "Premium Care",
    subtitle: "Advanced treatments",
    price: 149,
    originalPrice: 199,
    period: "/visit",
    features: [
      { highlight: "Comprehensive Exam", rest: " Included" },
      { highlight: "Retinal", rest: " Imaging" },
      { highlight: "Dry Eye", rest: " Treatment" },
      { highlight: "Custom", rest: " Vision Therapy" },
    ],
    cta: "Book Appointment",
    featured: false,
  },
];
