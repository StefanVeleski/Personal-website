export interface ResearchTheme {
  title: string;
  question: string;
  body: string;
  link?: { label: string; href: string };
}

// The overarching themes of Stefan's digital-humanities research, carried over from the
// original site's "projects" section. The old "Follow on ResearchGate" links were dropped:
// ResearchGate retired its Projects feature, so those /project/ URLs no longer resolve.
export const researchThemes: ResearchTheme[] = [
  {
    title: 'Cultural longevity and success',
    question: 'Why do some cultural products linger in our collective memory longer than others?',
    body: 'The core of my dissertation research: the factors behind the different rates of decay of the collective memory of cultural products. Informed by cultural evolution and biocultural criticism, it leans heavily on computational-humanities methods — operationalizing, measuring, and visualizing cultural data — mostly on late Victorian novels, though the insight is not medium-specific.',
  },
  {
    title: 'Cultural anxieties in cultural production',
    question:
      'What do cultural evolution and biocultural criticism say about how cultural phenomena shape cultural production?',
    body: 'Rather than the cyclical, non-empirical debates rooted in post-structuralist philosophy, I fit cultural anxieties into the framework of cultural evolution and biocultural criticism — better able to model how the content and context biases of cultural transmission shape what creators make. See the Aigne article on Cold War anxieties in mid-20th-century science fiction.',
  },
  {
    title: 'Cognition and the reception of cultural products',
    question: 'How do cultural and biological factors influence our consumption of cultural products?',
    body: 'Reception depends on a complex mixture of schematized cultural information and stimuli processed by older, more bias-prone parts of the brain — not the “blank slate” many literary critics assume. Awareness of this interplay reveals much about the “whys” and “hows” of our fascination with fiction and other cultural products.',
  },
];
