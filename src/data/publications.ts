export interface Publication {
  title: string;
  year: number;
  type: 'Journal article' | 'Conference paper' | 'Review article' | 'Review';
  venue: string;
  detail?: string;
  doi?: string;
  url?: string;
}

// Academic output from Stefan's digital-humanities research (kept as a credibility archive).
export const publications: Publication[] = [
  {
    title:
      'Crisis and Transformation: The Aftermath of First Contact in Three Mid-20th Century Science Fiction Novels',
    year: 2020,
    type: 'Journal article',
    venue: 'Aigne',
    detail: 'Vol. 8, pp. 84–106',
  },
  {
    title:
      'Weak Negative Correlation between the Present Day Popularity and the Mean Emotional Valence of Late Victorian Novels',
    year: 2020,
    type: 'Conference paper',
    venue: 'Computational Humanities Research 2020 (CEUR-WS 2723)',
    detail: 'pp. 32–43',
  },
  {
    title: 'A Scientific Turn in the Genre of How-to Fiction Writing Manuals?',
    year: 2020,
    type: 'Review article',
    venue: 'Evolutionary Studies in Imaginative Culture',
    detail: 'Vol. 4, no. 1, pp. 91–104',
  },
  {
    title: 'Review of Cultural Evolution in the Digital Age, by Alberto Acerbi',
    year: 2021,
    type: 'Review',
    venue: 'Evolutionary Studies in Imaginative Culture',
    detail: 'Vol. 4, no. 2, pp. 135–140',
    doi: '10.26613/esic.4.2.195',
  },
];
