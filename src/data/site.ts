export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'orcid' | 'scholar';
}

export const site = {
  name: 'Stefan Veleski',
  role: 'Configuration Engineer',
  roleLong: 'Configuration Engineer & Technical Writer',
  tagline:
    'I build the tooling, automation, and tests behind great technical documentation.',
  intro:
    'Configuration Engineer at Veeam in Prague. I climbed the technical-writing ladder from junior to senior, then moved into docs engineering — automating documentation workflows, writing autotests, and maintaining a custom TypeScript editor for the writing team.',
  location: 'Prague, Czechia',
  email: 'stefan_veleski@outlook.com',
  url: 'https://stefanveleski.com',
  cv: '/cv.pdf',
} as const;

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/StefanVeleski', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stefan-veleski', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:stefan_veleski@outlook.com', icon: 'email' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-6097-0864', icon: 'orcid' },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=Jxie_8gAAAAJ',
    icon: 'scholar',
  },
];

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Research', href: '/research' },
];
