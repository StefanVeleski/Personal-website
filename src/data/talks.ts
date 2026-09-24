export interface TalkLink {
  label: string;
  href: string;
}

export interface Talk {
  title: string;
  date: string; // ISO
  event: string;
  eventUrl?: string;
  location: string;
  summary?: string;
  links: TalkLink[];
}

// Conference presentations (2018–2020), newest first. Links (video, code, slides,
// event pages) carried over from the original site.
export const talks: Talk[] = [
  {
    title: 'Sentiment Analysis of Late Victorian Novels: Opportunities and Challenges',
    date: '2020-11-26',
    event: 'Agency and Emotion: New and Emerging Work in Nineteenth Century Studies',
    eventUrl:
      'https://www.academia.edu/44614785/Agency_and_Emotion_New_and_Emerging_Work_in_Nineteenth_Century_Studies',
    location: 'Durham, United Kingdom',
    summary:
      'A range of ways sentiment analysis can enrich the study of emotion in late Victorian fiction — arguing for the strengths of empirical, quantitative methods at scale while conceding that close reading of emotion is better served by a mixed approach.',
    links: [],
  },
  {
    title:
      'Weak Negative Correlation between the Present Day Popularity and the Mean Emotional Valence of Late Victorian Novels',
    date: '2020-11-18',
    event: 'Computational Humanities Research 2020',
    eventUrl: 'https://2020.computational-humanities-research.org',
    location: 'Amsterdam, The Netherlands',
    summary:
      'Testing the hypothesis that negativity bias has given late Victorian novels with lower mean emotional valence higher cultural longevity. The effect is confirmed but weak (R=-0.087, p=0.038).',
    links: [
      { label: 'Video', href: 'https://www.youtube.com/watch?v=n9fmLdhZbR8' },
      { label: 'PDF', href: 'https://ceur-ws.org/Vol-2723/long44.pdf' },
      { label: 'Code', href: 'https://github.com/StefanVeleski/CHR2020-project' },
    ],
  },
  {
    title:
      "Navigating “Extremistan”: Tracing the Factors behind the Divergent Cultural Longevity of Dracula and The Beetle",
    date: '2020-11-05',
    event: 'In/Outside the Frame',
    eventUrl: 'https://ff.upce.cz/ff/literature-and-cultural-studies-conference',
    location: 'Pardubice, Czechia',
    summary:
      'Argues that the divergent present-day popularity of Dracula and The Beetle stems from small differences in literary quality amplified by market dynamics, investigating both intratextual and extratextual factors (early-cinema adaptations, publishers’ advertising).',
    links: [
      { label: 'Slides (PDF)', href: '/navigating-extremistan.pdf' },
      { label: 'Code', href: 'https://github.com/StefanVeleski/In-Outside-the-Frame-project' },
    ],
  },
  {
    title:
      '“Doomed” from the Start: The Role of “Cultural Pollutants” in the “Cultural Death” of Late Victorian Bestsellers',
    date: '2019-08-14',
    event: 'Research Data and the Humanities 2019',
    eventUrl: 'https://www.kielipankki.fi/rdhum-2019',
    location: 'Oulu, Finland',
    summary:
      'Tests whether some late Victorian bestsellers faded because of “cultural pollutants” — text elements steeped in contemporary context (linguistic complexity, named-entity saturation, dialogic liveliness) that block cultural transmission across time.',
    links: [],
  },
  {
    title:
      'Mimicking the Other: The Aftermath of First Contact in Mid-20th Century Science Fiction Novels',
    date: '2018-10-25',
    event: 'Aftermath: The Fall and the Rise After the Event',
    eventUrl: 'https://aftermathconference.wordpress.com/',
    location: 'Kraków, Poland',
    summary:
      'First-contact narratives in mid-20th-century science fiction were commonplace and strikingly similar; argues that the interplay of Cold War cultural anxieties and cognitive biases shaped a unique variation of the trope. Later expanded into the Aigne journal article.',
    links: [],
  },
  {
    title: 'Ostracism on Film: Visualizing “Social Death”',
    date: '2018-06-22',
    event: 'Nature and Narrative Conference',
    eventUrl: 'https://www.slu.edu/madrid/news/2018/nature-and-narrative-conference.php',
    location: 'Madrid, Spain',
    summary:
      'Offers a biocultural explanation for the striking similarities among films depicting ostracism — filmmakers craft these moments to pander to both the cultural background and biological imperatives of the audience.',
    links: [],
  },
];
