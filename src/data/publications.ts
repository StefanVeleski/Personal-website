export interface PubLink {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  year: number;
  type: 'Journal article' | 'Conference paper' | 'Review article' | 'Review' | 'Thesis';
  venue: string;
  summary?: string;
  links: PubLink[];
  cite: string; // BibTeX
}

// Academic output from Stefan's digital-humanities research (kept as a credibility
// archive). Links, DOIs, and citations carried over verbatim from the original site.
// Newest first.
export const publications: Publication[] = [
  {
    title: 'Review of Cultural Evolution in the Digital Age, by Alberto Acerbi',
    year: 2021,
    type: 'Review',
    venue: 'Evolutionary Studies in Imaginative Culture, vol. 4, no. 2, pp. 135–140',
    summary:
      "A review of Acerbi's book that summarizes its main arguments and weighs its potential to impact media and cultural studies.",
    links: [
      { label: 'DOI', href: 'https://doi.org/10.26613/esic.4.2.195' },
      { label: 'JSTOR', href: 'https://www.jstor.org/stable/10.26613/esic.4.2.195' },
    ],
    cite: `@article{veleski2021review,
  author  = {Veleski, Stefan},
  title   = {Review of {Cultural Evolution in the Digital Age}, by Alberto Acerbi},
  journal = {Evolutionary Studies in Imaginative Culture},
  volume  = {4},
  number  = {2},
  pages   = {135--140},
  doi     = {10.26613/esic.4.2.195},
  year    = {2021}
}`,
  },
  {
    title:
      'Weak Negative Correlation between the Present Day Popularity and the Mean Emotional Valence of Late Victorian Novels',
    year: 2020,
    type: 'Conference paper',
    venue: 'Computational Humanities Research 2020, pp. 32–43 (CEUR-WS 2723)',
    summary:
      'A conference paper testing the hypothesis that negativity bias has given late Victorian novels with lower mean emotional valence higher cultural longevity. The effect is confirmed but weak (R=-0.087, p=0.038).',
    links: [
      { label: 'PDF', href: 'http://ceur-ws.org/Vol-2723/long44.pdf' },
      { label: 'Proceedings', href: 'http://ceur-ws.org/Vol-2723/' },
      { label: 'Code', href: 'https://github.com/StefanVeleski/CHR2020-project' },
    ],
    cite: `@inproceedings{veleski2020weak,
  author    = {Veleski, Stefan},
  title     = {Weak Negative Correlation between the Present Day Popularity and the Mean Emotional Valence of Late Victorian Novels},
  booktitle = {Proceedings of the Workshop on Computational Humanities Research (CHR 2020)},
  series    = {CEUR Workshop Proceedings},
  volume    = {2723},
  pages     = {32--43},
  address   = {Amsterdam},
  year      = {2020}
}`,
  },
  {
    title:
      'Crisis and Transformation: The Aftermath of First Contact in Three Mid-20th Century Science Fiction Novels',
    year: 2020,
    type: 'Journal article',
    venue: 'Aigne, vol. 8, pp. 84–106',
    summary:
      'An article exploring the trope of post-first-contact transformation in mid-20th-century science fiction, using close reading and sentiment analysis (syuzhet) informed by cultural evolution and biocultural criticism.',
    links: [
      { label: 'PDF', href: 'http://aigne.ucc.ie/index.php/aigne/article/download/1552/1518' },
      { label: 'Journal', href: 'http://aigne.ucc.ie/index.php/aigne/article/view/1552' },
      { label: 'DOI', href: 'https://doi.org/10.6084/m9.figshare.13026431' },
    ],
    cite: `@article{veleski2020crisis,
  author  = {Veleski, Stefan},
  title   = {Crisis and Transformation: The Aftermath of First Contact in Three Mid-20th Century Science Fiction Novels},
  journal = {Aigne},
  volume  = {8},
  pages   = {84--106},
  year    = {2020}
}`,
  },
  {
    title: 'A Scientific Turn in the Genre of How-to Fiction Writing Manuals?',
    year: 2020,
    type: 'Review article',
    venue: 'Evolutionary Studies in Imaginative Culture, vol. 4, no. 1, pp. 91–104',
    summary:
      'A review article of The Science of Storytelling (Will Storr) and The Science of Screenwriting (Gulino & Shears), arguing that these science-heavy how-to manuals may signal a scientific turn in the genre.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.26613/esic.4.1.173' },
      { label: 'JSTOR', href: 'https://www.jstor.org/stable/10.26613/esic.4.1.173' },
    ],
    cite: `@article{veleski2020scientific,
  author  = {Veleski, Stefan},
  title   = {A Scientific Turn in the Genre of How-to Fiction Writing Manuals?},
  journal = {Evolutionary Studies in Imaginative Culture},
  volume  = {4},
  number  = {1},
  pages   = {91--104},
  doi     = {10.26613/esic.4.1.173},
  year    = {2020}
}`,
  },
  {
    title:
      'A Structural Approach to the Monomyth in Contemporary Action Cinema: Dredd, John Wick, and Mad Max: Fury Road',
    year: 2017,
    type: 'Thesis',
    venue: "Master's Thesis, Department of English and American Studies, Masaryk University",
    summary:
      'My MA thesis, arguing that the structure of the monomyth is predominantly shaped by biological imperatives that make it inherently attractive and widespread in cultural production — here, contemporary action cinema.',
    links: [
      { label: 'PDF', href: 'https://is.muni.cz/th/ldvqx/MA_Thesis__Stefan_Veleski__448328.pdf' },
      {
        label: 'ResearchGate',
        href: 'https://www.researchgate.net/publication/319210859_A_Structural_Approach_to_the_Monomyth_in_Contemporary_Action_Cinema_Dredd_John_Wick_and_Mad_Max_Fury_Road',
      },
    ],
    cite: `@mastersthesis{veleski2017structural,
  author = {Veleski, Stefan},
  title  = {A Structural Approach to the Monomyth in Contemporary Action Cinema: Dredd, John Wick, and Mad Max: Fury Road},
  school = {Masaryk University},
  type   = {Master's Thesis},
  year   = {2017}
}`,
  },
];
