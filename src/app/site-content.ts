export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
  title: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  description: string;
  date: string;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  details: string;
  date: string;
  document: string | null;
}

export interface ProjectItem {
  title: string;
  category: string;
  icon: string;
  description: string;
  links: { label: string; href: string }[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'experience', label: 'Experience', icon: 'work_history' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'skills', label: 'Skills', icon: 'neurology' },
  { id: 'projects', label: 'Projects', icon: 'terminal' },
  { id: 'interests', label: 'Interests', icon: 'interests' },
  { id: 'coming', label: 'Coming Soon', icon: 'pending' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    icon: 'work',
    href: 'https://www.linkedin.com/in/carlos-washington-mercado/',
    title: 'My LinkedIn profile',
  },
  {
    label: 'GitHub',
    icon: 'code',
    href: 'https://github.com/carloswm85',
    title: 'My GitHub profile and repositories',
  },
  {
    label: 'Stack Overflow',
    icon: 'forum',
    href: 'https://stackoverflow.com/users/7389293/carloswm85',
    title: 'My StackOverflow profile',
  },
  {
    label: 'Email',
    icon: 'mail',
    href: 'mailto:carloswashingtonmercado@gmail.com',
    title: 'My personal email',
  },
  {
    label: 'WhatsApp',
    icon: 'call',
    href: 'https://api.whatsapp.com/send/?phone=5492942415110',
    title: 'My WhatsApp number',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: 'Web Developer: ASP.NET Core technologies, Flutter Android',
    organization: 'Dirección Provincial de Minería · Neuquén Province Government, Argentina',
    description:
      'Full-stack developer for an MVC application following Clean Architecture. Database design with SQL Server and Oracle DB, Docker, and complete Flutter Android implementation.',
    date: 'June 2021 – Present',
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: 'Brigham Young University, Idaho, USA',
    qualification: 'Bachelor of Science in Software Development',
    details: 'Department of Computer Information Technology · GPA: 3.910 · Career credits: 121/120',
    date: 'Jan 2020 – Apr 2026',
    document: null,
  },
  {
    institution: 'University of Cambridge, UK',
    qualification: 'FCE, First Certificate in English',
    details: 'Level B2 · Score: 175',
    date: 'Nov 2017',
    document: 'FCE-StatementOfResult.pdf',
  },
  {
    institution: 'Universidad Nacional del Comahue, Argentina',
    qualification: 'Mining Technician',
    details: 'Faculty of Engineering · GPA: 3.00',
    date: 'Jan 2011 – Oct 2016',
    document: null,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages and data',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'C#', 'SQL', 'Python', 'Java', 'PHP', 'Markdown'],
  },
  {
    title: 'Frameworks and platforms',
    skills: ['ASP.NET Core', 'Angular', 'Entity Framework Core', 'Flutter', 'Docker', 'Bootstrap'],
  },
  {
    title: 'Tools and practices',
    skills: [
      'Git',
      'GitHub Actions',
      'GitLab CI/CD',
      'Azure',
      'AWS',
      'Clean Architecture',
      'SQL Server',
      'Oracle DB',
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: '.NET Template Kit',
    category: 'Open source',
    icon: 'account_tree',
    description:
      'A customizable ASP.NET project template following Clean Architecture practices, with a foundation for web apps, APIs, libraries, testing, logging, and deployment.',
    links: [
      { label: 'View repository', href: 'https://github.com/carloswm85/dotnet-template-kit' },
    ],
  },
  {
    title: 'ng-template-one',
    category: 'Open source',
    icon: 'computer',
    description:
      'An Angular single‑page application template that demonstrates an opinionated project architecture (core, shared, auth, admin, articles), uses the standalone bootstrapApplication pattern, and includes standard Angular CLI scripts for building, serving, and testing.',
    links: [{ label: 'View repository', href: 'https://github.com/carloswm85/ng-template-one' }],
  },
];
