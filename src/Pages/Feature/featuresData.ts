import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CreditCard,
  FileDown,
  FileText,
  LayoutTemplate,
  Package,
  UserRoundCog,
  UsersRound,
} from "lucide-react";

export type FeatureId =
  | "quotations"
  | "products"
  | "customers"
  | "pdf"
  | "templates"
  | "analytics"
  | "team"
  | "subscription";

export interface FeatureDefinition {
  id: FeatureId;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const features: FeatureDefinition[] = [
  {
    id: "quotations",
    title: "Professional Quotations",
    description:
      "Create accurate, professional quotations with products, pricing, discounts, taxes, and customer information.",
    Icon: FileText,
  },
  {
    id: "products",
    title: "Product Management",
    description:
      "Manage your complete product catalog with pricing, descriptions, units, images, and organized product information.",
    Icon: Package,
  },
  {
    id: "customers",
    title: "Customer Management",
    description:
      "Store and manage customer information in one centralized place with quick search and easy access.",
    Icon: UsersRound,
  },
  {
    id: "pdf",
    title: "Professional PDF Generation",
    description:
      "Generate polished quotation PDFs that are ready to download, share, or send to customers.",
    Icon: FileDown,
  },
  {
    id: "templates",
    title: "Custom Templates",
    description:
      "Choose professional quotation layouts that match your business identity and presentation style.",
    Icon: LayoutTemplate,
  },
  {
    id: "analytics",
    title: "Dashboard & Analytics",
    description:
      "Get a clear overview of quotation activity, customers, products, and important business information.",
    Icon: BarChart3,
  },
  {
    id: "team",
    title: "Team Management",
    description:
      "Manage users and control access with appropriate roles and permissions.",
    Icon: UserRoundCog,
  },
  {
    id: "subscription",
    title: "Subscription Management",
    description:
      "Manage plans, feature access, usage limits, and subscription information from one system.",
    Icon: CreditCard,
  },
];
