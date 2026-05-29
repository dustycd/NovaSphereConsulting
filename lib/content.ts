import {
  BadgeCheck,
  BarChart3,
  Building2,
  ChartNoAxesCombined,
  ChefHat,
  CircleDollarSign,
  ClipboardCheck,
  Compass,
  Factory,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  PackageCheck,
  PieChart,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Utensils,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export type Solution = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export const serviceNavLinks = [
  { href: "/financial-advisory", label: "Financial Advisory" },
  { href: "/food-and-beverage-consulting", label: "Food & Beverage" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  ...serviceNavLinks,
  { href: "mailto:hello@novasphereconsulting.com", label: "Email" },
];

export const homepageStats: Stat[] = [
  { value: "Dubai", label: "Base", detail: "Regional access with international reach" },
  { value: "2", label: "Advisory practices", detail: "Finance and food & beverage" },
  { value: "50+", label: "F&B businesses", detail: "Restaurant, cafe, and hospitality work" },
  { value: "3", label: "Core regions", detail: "Europe, GCC, and the Middle East" },
];

export const homeServices: Solution[] = [
  {
    title: "Financial Advisory",
    description: "Planning, reporting, cash flow, KPIs, and long-term stability.",
    icon: LineChart,
  },
  {
    title: "Food & Beverage Consulting",
    description: "Concepts, menus, operations, supplier strategy, and growth support.",
    icon: ChefHat,
  },
  {
    title: "Market Entry",
    description: "Dubai, GCC, Middle East, and international expansion planning.",
    icon: Globe2,
  },
  {
    title: "Performance Management",
    description: "Clear operating metrics, cost control, and practical execution routines.",
    icon: Target,
  },
];

export const financialStats: Stat[] = [
  { value: "250+", label: "Clients served" },
  { value: "$30B+", label: "Capital advised" },
  { value: "25+", label: "Countries" },
  { value: "98%", label: "Client retention" },
];

export const financialSolutions: Solution[] = [
  { title: "Financial Planning & Forecasting", icon: LineChart },
  { title: "Accounting & Financial Reporting", icon: ReceiptText },
  { title: "Cash Flow & Profitability Management", icon: CircleDollarSign },
  { title: "Cost Reduction & Optimization", icon: TrendingDown },
  { title: "Business Setup & Operational Structuring", icon: Building2 },
  { title: "Market Entry & Expansion Strategy", icon: Compass },
  { title: "KPI Tracking & Performance Analysis", icon: BarChart3 },
  { title: "Investment & Growth Advisory", icon: TrendingUp },
  { title: "Long-Term Financial Stability Solutions", icon: ShieldCheck },
];

export const fnbStats: Stat[] = [
  { value: "20+", label: "Years experience", detail: "In food and beverage" },
  { value: "50+", label: "Restaurants", detail: "Worked with across formats" },
  { value: "Europe", label: "Region" },
  { value: "GCC", label: "Region" },
  { value: "Middle East", label: "Region" },
];

export const fnbSolutions: Solution[] = [
  { title: "Restaurant & Food Business Consulting", icon: Utensils },
  { title: "Concept Creation & Brand Development", icon: Sparkles },
  { title: "Menu Engineering & Pricing Strategy", icon: PieChart },
  { title: "Supplier Sourcing & Procurement", icon: PackageCheck },
  { title: "Kitchen Workflow & Operational Setup", icon: Layers3 },
  { title: "Cost Control & Waste Reduction", icon: TrendingDown },
  { title: "Inventory & Supply Chain Management", icon: Warehouse },
  { title: "Market Entry & Expansion Strategy", icon: Compass },
  { title: "End-to-End Launch & Growth Support", icon: BadgeCheck },
];

export const fnbClientSegments = [
  { label: "Restaurant Groups", icon: Utensils },
  { label: "Fine Dining Concepts", icon: ChefHat },
  { label: "Cafe & Bakery Brands", icon: BadgeCheck },
  { label: "Cloud Kitchens", icon: Factory },
  { label: "Hotel Operators", icon: Building2 },
  { label: "QSR & Franchise Teams", icon: Handshake },
];

export const financialFocus: Solution[] = [
  {
    title: "Sharper decisions",
    description: "Turn scattered financial data into focused planning and reporting.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Better controls",
    description: "Improve cash discipline, cost structure, and accountability.",
    icon: Scale,
  },
  {
    title: "Sustainable growth",
    description: "Structure expansion with KPIs, funding logic, and operating clarity.",
    icon: TrendingUp,
  },
];
