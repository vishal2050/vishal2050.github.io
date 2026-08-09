export type Industry = {
  id: string;
  name: string;
  href: string;
  summary: string;
  solutions: string[];
  outcome: string;
};

export const industries: Industry[] = [
  {
    id: "construction",
    name: "Construction",
    href: "/services/construction",
    summary:
      "Detect scope changes, material variance, and unbilled work across drawings, BOQs, and site operations.",
    solutions: [
      "Scope change detection",
      "Rebar/project tracking",
      "Material tracking",
      "Subcontractor billing audit",
      "Drawing intelligence",
      "Site reporting",
      "Document automation",
    ],
    outcome: "Detect potential scope changes before they become missed claims.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    href: "/services/manufacturing",
    summary:
      "Find scrap patterns, downtime drivers, and inventory inefficiencies across machines and shifts.",
    solutions: [
      "Machine downtime intelligence",
      "Scrap analysis",
      "Production planning",
      "Maintenance intelligence",
      "Quality analytics",
      "Inventory optimization",
    ],
    outcome: "Identify recurring scrap patterns across machines and shifts.",
  },
  {
    id: "logistics",
    name: "Logistics",
    href: "/services/logistics",
    summary:
      "Surface empty-load opportunities, POD bottlenecks, and delivery anomalies in real operations.",
    solutions: [
      "Empty-load detection",
      "Route intelligence",
      "POD processing",
      "Fuel anomaly detection",
      "Driver workflows",
      "Delivery analytics",
    ],
    outcome: "Find empty-return opportunities and delivery bottlenecks.",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    href: "/services/real-estate",
    summary:
      "Recover cold leads, automate enquiry follow-ups, and keep sales pipelines moving.",
    solutions: [
      "Lead recovery",
      "Property enquiry automation",
      "Document processing",
      "Follow-up automation",
      "Sales pipeline intelligence",
    ],
    outcome: "Recover leads that would otherwise go cold.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    href: "/services/healthcare",
    summary:
      "Streamline administrative workflows — referrals, appointments, documents, and patient communication.",
    solutions: [
      "Referral tracking",
      "Appointment automation",
      "Document collection",
      "Patient communication",
      "Administrative workflow optimization",
    ],
    outcome: "Reduce administrative friction without claiming clinical diagnosis.",
  },
  {
    id: "education",
    name: "Education",
    href: "/services/education",
    summary:
      "Automate attendance, engagement, parent communication, and administrative operations.",
    solutions: [
      "Attendance intelligence",
      "Student engagement",
      "Parent communication",
      "Administrative automation",
      "Career intelligence",
    ],
    outcome: "Give staff time back by removing repetitive admin loops.",
  },
  {
    id: "restaurants",
    name: "Restaurants",
    href: "/services/restaurants",
    summary:
      "Improve prep planning, menu profitability, waste visibility, and complaint recovery.",
    solutions: [
      "Food waste intelligence",
      "Prep prediction",
      "Menu profitability",
      "Complaint recovery",
      "Delivery analytics",
    ],
    outcome: "See where margin disappears across kitchen and delivery operations.",
  },
  {
    id: "sme",
    name: "SMEs",
    href: "/solutions#sme",
    summary:
      "Practical automation for payment reconciliation, CRM, invoices, and business dashboards.",
    solutions: [
      "Payment reconciliation",
      "CRM automation",
      "Invoice processing",
      "Lead recovery",
      "Business dashboards",
    ],
    outcome: "Recover leads that would otherwise go cold.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your workflows and identify expensive bottlenecks.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "AI analyzes your operational data to find leakage and inefficiencies.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "We build systems that eliminate repetitive manual work.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Measure the results and continuously optimize.",
  },
] as const;

export const problemScenarios = [
  { label: "Missed Follow-ups", unit: "₹", hint: "Example scenario" },
  { label: "Unbilled Work", unit: "₹", hint: "Example scenario" },
  { label: "Material Leakage", unit: "₹", hint: "Example scenario" },
  { label: "Manual Processing", unit: "Hours", hint: "Example scenario" },
  { label: "Lost Opportunities", unit: "%", hint: "Example scenario" },
] as const;

export const beforeItems = [
  "WhatsApp",
  "Excel",
  "Email",
  "PDF",
  "Manual calls",
  "Manual reports",
  "Human errors",
] as const;

export const afterItems = [
  "Connected systems",
  "AI workflows",
  "Automatic follow-ups",
  "Structured data",
  "Real-time dashboard",
  "Automated reports",
  "Fewer errors",
] as const;

export const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/solutions#industries" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
] as const;
