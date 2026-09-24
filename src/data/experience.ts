export interface Role {
  title: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  /** featured roles get the full timeline treatment; others are condensed */
  featured?: boolean;
}

// Career timeline, newest first. Sourced from the industry CV; all writing/engineering
// roles are at Veeam (Prague).
export const roles: Role[] = [
  {
    title: 'Configuration Engineer',
    org: 'Veeam',
    location: 'Prague, Czechia',
    period: 'May 2026 — Present',
    current: true,
    featured: true,
    highlights: [
      'Automating documentation workflows to remove manual toil across the docs pipeline.',
      'Building autotests that validate documentation and catch regressions before publish.',
      'Maintaining and extending a custom TypeScript editor used by the writing team.',
    ],
  },
  {
    title: 'Senior Technical Writer',
    org: 'Veeam',
    location: 'Prague, Czechia',
    period: 'Apr 2026 — May 2026',
    featured: true,
    highlights: [
      'Built an R script for bulk spellchecking on top of the hunspell library.',
      'Drove Vale adoption for automated spellchecking, linting, and style-guide enforcement.',
    ],
  },
  {
    title: 'Experienced Technical Writer',
    org: 'Veeam',
    location: 'Prague, Czechia',
    period: 'Oct 2024 — Apr 2026',
    featured: true,
    highlights: [
      'Wrote Python tooling to improve the accuracy and consistency of PowerShell and REST API references.',
      'Maintained the REST API reference for Veeam Backup & Replication.',
    ],
  },
  {
    title: 'Technical Writer',
    org: 'Veeam',
    location: 'Prague, Czechia',
    period: 'Nov 2023 — Oct 2024',
    featured: true,
    highlights: [
      'Built and documented a VMware vSphere lab covering all Veeam Explorers workloads.',
      'Took on a larger role in planning documentation structure.',
    ],
  },
  {
    title: 'Junior Technical Writer',
    org: 'Veeam',
    location: 'Prague, Czechia',
    period: 'Jan 2023 — Nov 2023',
    featured: true,
    highlights: [
      'Maintained the user guide and PowerShell reference for Veeam Explorers.',
      'Partnered with SMEs to gather technical detail and kept style, tone, and terminology consistent.',
      'Triaged documentation feedback from internal and external reporters.',
    ],
  },
  {
    title: 'Freelance Writer & Translator',
    org: 'Self-employed',
    location: 'Remote',
    period: '2012 — 2022',
    featured: false,
    highlights: [
      'English⇄Macedonian translation, proofreading, subtitling, and web content for a range of clients.',
    ],
  },
  {
    title: 'Doctoral Candidate',
    org: 'Masaryk University',
    location: 'Brno, Czechia',
    period: '2017 — 2022',
    featured: false,
    highlights: [
      'Published peer-reviewed research, taught, and supervised BA theses in the digital humanities (see Research).',
    ],
  },
];
