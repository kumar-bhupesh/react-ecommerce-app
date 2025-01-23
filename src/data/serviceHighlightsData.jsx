import { FaTruck, FaTags } from "react-icons/fa";

import { RiSecurePaymentFill, RiRefund2Fill } from "react-icons/ri";

export const serviceHighlightsData = [
  {
    id: 1,
    bgColor: "#FFE4B5", 
    icon: <FaTruck />,
    title: "Free Delivery",
    desc: "Enjoy free delivery on all orders.",
  },
  {
    id: 2,
    bgColor: "#D0E8FF", 
    icon: <FaTags />,
    title: "Exciting Deals",
    desc: "Discover exciting deals just for you.",
  },
  {
    id: 3,
    bgColor: "#FFCCCB", 
    icon: <RiRefund2Fill />,
    title: "Easy Returns",
    desc: "Hassle-free returns for your satisfaction.",
  },
  {
    id: 4,
    bgColor: "#C6F6D5", 
    icon: <RiSecurePaymentFill />,
    title: "Secure Payments",
    desc: "Your payments are always secure with us.",
  },
];
