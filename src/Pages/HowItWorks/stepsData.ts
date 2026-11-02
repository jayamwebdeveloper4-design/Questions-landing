import { UserRound, Package, Palette, Send } from "lucide-react";
import type { Step } from "./types";

export const steps: Step[] = [
  {
    number: "01",
    icon: UserRound,
    title: "Add your customer",
    description:
      "Choose an existing customer or add their contact, GST, and address details.",
    points: ["Contact details", "GSTIN", "Billing address"],
  },
  {
    number: "02",
    icon: Package,
    title: "Build your quotation",
    description:
      "Add products and prices, then apply taxes, discounts, and terms.",
    points: ["Products & pricing", "Taxes & discounts", "Terms & conditions"],
  },
  {
    number: "03",
    icon: Palette,
    title: "Make it your own",
    description:
      "Choose a template and add your company branding and business details.",
    points: ["Professional templates", "Logo & signature", "Business details"],
  },
  {
    number: "04",
    icon: Send,
    title: "Preview and send",
    description:
      "Review your quotation, create a PDF, and email it to your customer.",
    points: ["Live preview", "PDF download", "Email delivery"],
  },
];

// Step 4 animation ~3.5s edukkum, so 5s+ vechukonga
export const AUTOPLAY_MS = 6000;