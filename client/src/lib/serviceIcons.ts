/* We Deliver IT — Zajednička mapa ikonica i boja po uslugi (slug), da bi ikonica i boja
   na početnoj stranici (Services.tsx) i na svim pojedinačnim stranicama usluga bile iste. */
import { Code2, Smartphone, Cloud, Cpu, PenTool, ShieldCheck, type LucideIcon } from "lucide-react";

export const iconBySlug: Record<string, LucideIcon> = {
  "it-consulting": Code2,
  "software-development": Smartphone,
  "online-store": Cloud,
  "elearning-platform": Cpu,
  "ai-blockchain": PenTool,
  "design-qa": ShieldCheck,
};

/* Boja ikonice po uslugi — ista šahovska raspodela (royal/narandžasta/zelena) kao u Services.tsx,
   tako da se ni jedna ista boja ne ponavlja jedna do druge na 3-kolonskoj mreži. */
export const iconColorBySlug: Record<string, string> = {
  "it-consulting": "#1735e0",
  "software-development": "#f5820a",
  "online-store": "#2ee6d6",
  "elearning-platform": "#2ee6d6",
  "ai-blockchain": "#1735e0",
  "design-qa": "#f5820a",
};
