export interface Project {
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
}

// Docs-engineering work at Veeam. Ordered most-prominent first.
export const projects: Project[] = [
  {
    title: 'Custom TypeScript documentation editor',
    summary:
      'Maintain and extend a bespoke TypeScript editor that the writing team uses day to day, adding features and keeping it reliable as the docs toolchain evolves.',
    tags: ['TypeScript', 'Tooling', 'DocOps'],
    featured: true,
  },
  {
    title: 'Documentation autotest suite',
    summary:
      'Autotests that validate the documentation build and content, catching regressions before they reach published output.',
    tags: ['Testing', 'Automation', 'CI/CD'],
    featured: true,
  },
  {
    title: 'Vale style-guide automation',
    summary:
      'Rolled out Vale across the documentation set for automated spellchecking, linting, and enforcement of the house style guide.',
    tags: ['Vale', 'Linting', 'Style guide'],
    featured: true,
  },
  {
    title: 'hunspell bulk spellchecker',
    summary:
      'An R script built on the hunspell library that bulk-spellchecks large volumes of documentation in one pass.',
    tags: ['R', 'hunspell', 'Automation'],
    featured: false,
  },
  {
    title: 'PowerShell & REST API reference tooling',
    summary:
      'Python tooling that improves the accuracy and consistency of the PowerShell and REST API references for Veeam Backup & Replication.',
    tags: ['Python', 'REST API', 'PowerShell'],
    featured: false,
  },
];
