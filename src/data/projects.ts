export type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  summary: string;
  outcomes: string[];
  href?: string;
  industry: string;
};

export const projects: Project[] = [
  {
    id: "acumen-website",
    client: "Acumen Engineering Services",
    title: "Portfolio website for a rebar detailing company",
    category: "Web Platform",
    industry: "Construction / Rebar Detailing",
    summary:
      "A premium portfolio site that presents CIP/rebar detailing capabilities, project scopes, and delivery credentials for decision makers.",
    outcomes: [
      "Clear project showcase for detailing work",
      "Capability-focused presentation for civil & structural clients",
      "Fast, public-facing presence on GitHub Pages",
    ],
    href: "https://acumenengg.github.io/",
  },
  {
    id: "raadhe-website",
    client: "Raadhe Green Solutions",
    title: "Portfolio website for environmental & waste management",
    category: "Web Platform",
    industry: "Environmental Services",
    summary:
      "A brand and portfolio website communicating sustainable waste transformation, services, and value for an environmental operations company.",
    outcomes: [
      "Professional digital presence for sustainability services",
      "Clear messaging around waste-to-value positioning",
      "Public portfolio suitable for partners and clients",
    ],
    href: "https://raadhegreensolutions.github.io/",
  },
  {
    id: "erc-server-launcher",
    client: "ERC India",
    title: "Server Launcher software for rebar detailing operations",
    category: "Desktop / Operations Software",
    industry: "Construction / Rebar Detailing",
    summary:
      "Custom launcher software that helps civil rebar detailing teams start, manage, and standardize server-side detailing workflows.",
    outcomes: [
      "Faster, more consistent tooling startup for detailing teams",
      "Reduced manual setup friction in day-to-day operations",
      "Built around real rebar detailing process needs",
    ],
  },
  {
    id: "autocad-vba-save",
    client: "ERC India",
    title: "AutoCAD VBA automation for file save management",
    category: "CAD Automation",
    industry: "CAD / Engineering Workflows",
    summary:
      "VBA automation inside AutoCAD that standardizes file save management — reducing manual errors and keeping drawing deliverables organized.",
    outcomes: [
      "Automated save routines inside AutoCAD",
      "More consistent file naming and storage discipline",
      "Less repetitive manual work for drafting teams",
    ],
  },
];
