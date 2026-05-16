export interface Doctor {
  name: string;
  title: string;
  specialty: string;
  image: string;
  social: { facebook: string; twitter: string; instagram: string };
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Thomas Bennett",
    title: "Senior Optometrist",
    specialty: "Comprehensive Eye Care",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Barbara Charline",
    title: "Vision Correction Specialist",
    specialty: "LASIK & Refractive Surgery",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Peter Smith",
    title: "Pediatric Eye Care",
    specialty: "Children's Vision Health",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Joshua Henry",
    title: "Contact Lens Specialist",
    specialty: "Contact Lens Fitting",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Sophia Turner",
    title: "Retina & Diagnostics Expert",
    specialty: "Retinal Disease Management",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Michael Evans",
    title: "Glaucoma & Eye Disease Care",
    specialty: "Glaucoma Management",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
];
