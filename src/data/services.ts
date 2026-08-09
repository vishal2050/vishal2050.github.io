export type Service = {
  id: string;
  title: string;
  summary: string;
  href: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "automation",
    title: "AI Business Automation",
    summary:
      "Turn repetitive work into reliable autonomous workflows across sales, ops, and support.",
    href: "/services#automation",
    icon: "workflow",
  },
  {
    id: "leak-detection",
    title: "Money Leak Detection",
    summary:
      "Surface unbilled work, payment mismatches, material variance, and lost opportunities.",
    href: "/services#leak-detection",
    icon: "radar",
  },
  {
    id: "document-intelligence",
    title: "AI Document Intelligence",
    summary:
      "Extract, validate, and structure data from PDFs, invoices, drawings, and forms.",
    href: "/services#document-intelligence",
    icon: "file",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    summary:
      "Automate follow-ups, notifications, and customer workflows where your teams already work.",
    href: "/services#whatsapp",
    icon: "message",
  },
  {
    id: "sales-agents",
    title: "AI Sales Agents",
    summary:
      "Qualify leads, recover cold opportunities, and keep pipelines moving without extra headcount.",
    href: "/services#sales-agents",
    icon: "bot",
  },
  {
    id: "custom-saas",
    title: "Custom SaaS Development",
    summary:
      "Build the platform your process actually needs when off-the-shelf tools fall short.",
    href: "/services#custom-saas",
    icon: "layers",
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    summary:
      "Connect triggers, decisions, and actions across tools so work moves without chasing people.",
    href: "/services#workflow",
    icon: "git",
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence",
    summary:
      "Turn disconnected operational data into clear signals for managers and finance teams.",
    href: "/services#data-intelligence",
    icon: "chart",
  },
  {
    id: "dashboards",
    title: "Business Dashboards",
    summary:
      "Real-time views of leakage, throughput, pipeline health, and operational bottlenecks.",
    href: "/services#dashboards",
    icon: "layout",
  },
  {
    id: "integrations",
    title: "API & System Integration",
    summary:
      "Connect ERP, CRM, accounting, WhatsApp, and custom tools into one operating system.",
    href: "/services#integrations",
    icon: "plug",
  },
  {
    id: "industry",
    title: "Industry AI Solutions",
    summary:
      "Domain-specific systems for construction, manufacturing, logistics, and service businesses.",
    href: "/solutions",
    icon: "building",
  },
  {
    id: "consulting",
    title: "AI Consulting",
    summary:
      "Map expensive bottlenecks, prioritize ROI, and design a practical automation roadmap.",
    href: "/process",
    icon: "compass",
  },
];

export const leakDetectionItems = [
  {
    title: "Unbilled Work",
    description:
      "Identify completed work that may not have been invoiced.",
  },
  {
    title: "Scope Changes",
    description:
      "Compare original and revised requirements to find potential additional work.",
  },
  {
    title: "Material Leakage",
    description:
      "Track materials from purchase → warehouse → site → consumption.",
  },
  {
    title: "Payment Leakage",
    description:
      "Identify unpaid, delayed, duplicate, or mismatched transactions.",
  },
  {
    title: "Operational Waste",
    description:
      "Find repetitive processes consuming unnecessary employee time.",
  },
  {
    title: "Customer Leakage",
    description:
      "Identify lost leads, abandoned opportunities, and inactive customers.",
  },
] as const;

export const automationCapabilities = [
  "AI agents",
  "WhatsApp automation",
  "Email automation",
  "CRM automation",
  "Lead qualification",
  "Follow-up automation",
  "Document processing",
  "Report generation",
  "Customer support",
  "Appointment workflows",
  "Internal operations automation",
] as const;

export const documentTypes = [
  "Invoices",
  "Purchase orders",
  "Contracts",
  "Drawings",
  "Delivery challans",
  "Reports",
  "Forms",
  "Statements",
  "Quotations",
] as const;

export const customSoftwareItems = [
  "SaaS platforms",
  "Dashboards",
  "Internal tools",
  "Customer portals",
  "Workflow systems",
  "AI copilots",
  "APIs",
  "Integrations",
  "Mobile applications",
] as const;

export const techStack = [
  "Python",
  "FastAPI",
  "Django",
  "React",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Docker",
  "AI/LLMs",
  "APIs",
] as const;
