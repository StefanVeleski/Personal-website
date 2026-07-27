export interface Talk {
  title: string;
  date: string; // ISO
  event: string;
  location: string;
}

// Conference presentations (2018–2020), newest first.
export const talks: Talk[] = [
  {
    title: 'Sentiment Analysis of Late Victorian Novels: Opportunities and Challenges',
    date: '2020-11-26',
    event: 'Agency and Emotion in the Nineteenth Century',
    location: 'Durham, UK',
  },
  {
    title:
      'Weak Negative Correlation between the Present Day Popularity and the Mean Emotional Valence of Late Victorian Novels',
    date: '2020-11-18',
    event: 'Computational Humanities Research 2020',
    location: 'Amsterdam, Netherlands',
  },
  {
    title:
      'Navigating “Extremistan”: Tracing the Factors behind the Divergent Cultural Longevity of Dracula and The Beetle',
    date: '2020-11-05',
    event: 'In/Outside the Frame',
    location: 'Pardubice, Czechia',
  },
  {
    title:
      '“Doomed” from the Start: The Role of “Cultural Pollutants” in the “Cultural Death” of Late Victorian Bestsellers',
    date: '2019-08-14',
    event: 'Research Data and the Humanities 2019',
    location: 'Oulu, Finland',
  },
  {
    title:
      'Mimicking the Other: The Aftermath of First Contact in Mid-20th Century Science Fiction Novels',
    date: '2018-10-25',
    event: 'Aftermath: The Fall and the Rise After the Event',
    location: 'Kraków, Poland',
  },
  {
    title: 'Ostracism on Film: Visualizing “Social Death”',
    date: '2018-06-22',
    event: 'Nature and Narrative: Literature and Pedagogy in the Anthropocene',
    location: 'Madrid, Spain',
  },
];
