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

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'experience', label: 'Experience', icon: 'work_history' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'skills', label: 'Skills', icon: 'neurology' },
  { id: 'projects', label: 'Projects', icon: 'terminal' },
  { id: 'interests', label: 'Interests', icon: 'interests' },
  { id: 'coming', label: 'Coming Soon', icon: 'pending' }
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', icon: 'work', href: 'https://www.linkedin.com/in/carlos-washington-mercado/', title: 'My LinkedIn profile' },
  { label: 'GitHub', icon: 'code', href: 'https://github.com/carloswm85', title: 'My GitHub profile and repositories' },
  { label: 'Stack Overflow', icon: 'forum', href: 'https://stackoverflow.com/users/7389293/carloswm85', title: 'My StackOverflow profile' },
  { label: 'English resume', icon: 'picture_as_pdf', href: '/documents/resumes/resume-v3/carlos_mercado-ENG_v3_hf.pdf', title: 'My resume in English' },
  { label: 'Spanish resume', icon: 'picture_as_pdf', href: '/documents/resumes/resume-v3/carlos_mercado-SPA_v3_ats.pdf', title: 'My résumé in Spanish (ESPAÑOL)' },
  { label: 'Email', icon: 'mail', href: 'mailto:carloswashingtonmercado@gmail.com', title: 'My personal email' },
  { label: 'WhatsApp', icon: 'call', href: 'https://api.whatsapp.com/send/?phone=5492942415110', title: 'My WhatsApp number' }
];
