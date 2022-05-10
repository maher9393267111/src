import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export const header = [
  {
    id: 1,
    icon: <MdOutlineLocalShipping size={"22px"} />,
    title: "Free Shipping",
    description: "Free shipping on all orders ",
  },
  {
    id: 2,
    icon: <BiSupport size={"22px"} />,
    title: "24/7 Support",
    description: "We are here to  24/7",
  },
  {
    id: 3,
    icon: <MdPayment size={"22px"} />,
    title: "Payment Methods",
    description: "We accept all major credit ",
  },
  {
    id: 4,
    icon: <MdOutlineDeliveryDining size={"22px"} />,
    title: "Fast Delivery",
    description: " deliver  less than 2 hours",
  },
];

export const stories = [
  "NewYork",

  "London",
  "Cockfosters",
  "LosAngeles",
  "Chicago",
];

export const useful = [" Returns", "Contact Us", "LatestNews", "Our Sitemap"];
