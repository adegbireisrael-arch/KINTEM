export const siteConfig = {
  name: "KINTEMWORLD",
  tagline: "Designing Spaces That Inspire",
  description:
    "KINTEMWORLD is a modern architecture studio creating functional, timeless, and inspired residential, commercial, and luxury spaces.",
  url: "https://kintemworld.com",
  email: "ifeoluwaakintemi16@gmail.com",
  whatsapp: "+2348035289370",
  whatsappDisplay: "+234 803 528 9370",
};

const defaultWhatsAppMessage =
  "Hi KINTEMWORLD, I'd like to talk about a project. Could you tell me more?";

export function getWhatsAppLink(message: string = defaultWhatsAppMessage) {
  const digits = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
];

export const stats = [
  { value: 120, suffix: "+", label: "Completed Projects" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

export const services = [
  {
    number: "01",
    title: "Residential Architecture",
    description: "Modern and personalized home designs tailored to your lifestyle.",
    image: "https://images.unsplash.com/photo-1760067537293-6b30141d6a52?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Commercial Architecture",
    description: "Functional and visually striking spaces for offices, retail, and businesses.",
    image: "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Interior Design",
    description: "Thoughtfully designed interiors that blend comfort, style, and usability.",
    image: "https://images.unsplash.com/photo-1759238136854-a43787126db7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "3D Visualization",
    description: "Realistic architectural renders that help bring ideas to life before construction.",
    image: "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?q=80&w=1600&auto=format&fit=crop",
  },
];

export const whyClients = [
  { number: "01", text: "Innovative and modern architectural solutions" },
  { number: "02", text: "Attention to detail from concept to completion" },
  { number: "03", text: "Functional designs tailored to client needs" },
  { number: "04", text: "Experienced and professional project management" },
  { number: "05", text: "Commitment to quality, creativity, and sustainability" },
];

export const projects = [
  {
    title: "Ridgeline Residence",
    image: "https://images.unsplash.com/photo-1745761264415-6acbdb47a0c7?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Maple Court House",
    image: "https://images.unsplash.com/photo-1760067537293-6b30141d6a52?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Poolside Villa",
    image: "https://images.unsplash.com/photo-1635108200867-ccb3f64d0082?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Urban Block 12",
    image: "https://images.unsplash.com/photo-1757954697151-ac9c4fb20fe1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Cantilever House",
    image: "https://images.unsplash.com/photo-1758813240178-19ef760ded2c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "The Glass Pavilion",
    image: "https://images.unsplash.com/photo-1772760111916-c96107b14ab5?q=80&w=2000&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    quote:
      "Professional, creative, and highly detailed. The final design exceeded our expectations.",
    name: "Amaka Obi",
    role: "Homeowner",
  },
  {
    quote:
      "Their ability to combine beauty and functionality made our project stand out.",
    name: "David Chen",
    role: "Property Developer",
  },
  {
    quote:
      "From concept to completion, the team communicated clearly and delivered on time.",
    name: "Grace Nwosu",
    role: "Commercial Client",
  },
];
