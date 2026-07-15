export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  language: {
    label: string;
    switchTo: string;
    options: Record<"ru" | "uz" | "en", string>;
    names: Record<"ru" | "uz" | "en", string>;
  };
  brand: {
    name: string;
    home: string;
  };
  nav: {
    primary: string;
    footer: string;
    open: string;
    close: string;
    items: Record<"about" | "sectors" | "projects" | "news" | "careers" | "contact", string>;
  };
  buttons: {
    inquire: string;
    exploreProjects: string;
    about: string;
    exploreProject: string;
    esgApproach: string;
    viewAll: string;
    readMore: string;
    joinTeam: string;
    submitInquiry: string;
  };
  media: {
    heroAlt: string;
    sustainabilityAlt: string;
    careersAlt: string;
    aboutAlt: string;
    sectorAltSuffix: string;
    mapLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    scroll: string;
  };
  stats: {
    aria: string;
    items: Record<"years" | "projects" | "countries" | "experts", { label: string; detail: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    copy: string;
    principles: string[];
    mission: { title: string; copy: string };
    vision: { title: string; copy: string };
  };
  sectors: {
    eyebrow: string;
    title: string;
    copy: string;
    items: Record<
      | "infrastructureDevelopment"
      | "energy"
      | "transportation"
      | "industrial"
      | "waterSystems"
      | "digitalInfrastructure",
      { title: string; description: string }
    >;
  };
  projects: {
    eyebrow: string;
    title: string;
    copy: string;
    items: Record<
      "tashkentMobility" | "zarafshanEnergy" | "logisticsGateway",
      { name: string; location: string; sector: string; summary: string }
    >;
  };
  why: {
    eyebrow: string;
    title: string;
    copy: string;
    items: Record<"engineering" | "innovation" | "partnerships", { title: string; description: string }>;
  };
  sustainability: {
    eyebrow: string;
    title: string;
    copy: string;
    pillars: string[];
  };
  news: {
    eyebrow: string;
    title: string;
    items: Record<
      "capitalPlatform" | "esgFramework" | "technicalOffice",
      { category: string; date: string; dateTime: string; headline: string }
    >;
  };
  careers: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
    details: string[];
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      organization: string;
      organizationPlaceholder: string;
      inquiry: string;
      inquiryPlaceholder: string;
      errors: {
        required: string;
        email: string;
      };
    };
  };
  footer: {
    copy: string;
    connect: string;
    rights: string;
    standard: string;
    linkedin: string;
    x: string;
  };
};
