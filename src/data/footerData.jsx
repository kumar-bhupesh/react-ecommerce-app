import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

export const footerData = [
  {
    id: 1,
    title: "Customer Support",
    links: [
      { id: "help-center", name: "Help Center" },
      { id: "order-tracking", name: "Order Tracking" },
      { id: "returns-refunds", name: "Returns & Refunds" },
      { id: "contact-us", name: "Contact Us" },
      { id: "privacy-policy", name: "Privacy Policy" },
      { id: "faq", name: "FAQ" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      { id: "our-story", name: "Our Story" },
      { id: "careers", name: "Careers" },
      { id: "terms-of-service", name: "Terms of Service" },
    ],
  },
  {
    id: 3,
    title: "Shop",
    links: [
      { id: "new-arrivals", name: "New Arrivals" },
      { id: "best-sellers", name: "Best Sellers" },
      { id: "gift-cards", name: "Gift Cards" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    links: [
      { id: "blog", name: "Blog" },
      { id: "community-guidelines", name: "Community Guidelines" },
      { id: "help-articles", name: "Help Articles" },
    ],
  },
];

export const footerSocialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: <FaSquareFacebook /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaXTwitter /> },
  { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
];
