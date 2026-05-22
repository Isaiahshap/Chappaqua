export interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  status: "on sale" | "free" | "tickets soon" | "sold out";
  imageAlt: string;
  imageUrl: string;
  slug: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "jazz night at cpac",
    date: "fri, jun 6 · 8pm",
    category: "music",
    status: "on sale",
    imageAlt: "Jazz musician performing on stage under warm amber lights",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    slug: "jazz-night",
  },
  {
    id: "2",
    title: "family film afternoon",
    date: "sat, jun 14 · 2pm",
    category: "film",
    status: "free",
    imageAlt: "Rows of red cinema seats in a darkened movie theater",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    slug: "family-film",
  },
  {
    id: "3",
    title: "visiting artist showcase",
    date: "thu, jun 19 · 7:30pm",
    category: "visual arts",
    status: "tickets soon",
    imageAlt: "Dramatic stage lighting illuminating an empty performance stage",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    slug: "artist-showcase",
  },
  {
    id: "4",
    title: "community speaker series",
    date: "wed, jun 25 · 6pm",
    category: "talks",
    status: "free",
    imageAlt: "Speaker presenting on stage to a seated audience",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    slug: "speaker-series",
  },
  {
    id: "5",
    title: "student recital evening",
    date: "fri, jul 11 · 7pm",
    category: "education",
    status: "free",
    imageAlt: "Young pianist performing at a grand piano on stage",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
    slug: "student-recital",
  },
  {
    id: "6",
    title: "classical chamber night",
    date: "sat, jul 19 · 7:30pm",
    category: "music",
    status: "on sale",
    imageAlt: "Orchestra musicians performing together in a concert hall",
    imageUrl: "https://images.unsplash.com/photo-1580809361436-42a7ec204889?auto=format&fit=crop&w=800&q=80",
    slug: "chamber-night",
  },
  {
    id: "7",
    title: "local dance festival",
    date: "fri–sun, aug 1–3",
    category: "dance",
    status: "on sale",
    imageAlt: "Ballet dancer mid-leap on a theatrical stage with dramatic lighting",
    imageUrl: "https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&w=800&q=80",
    slug: "dance-festival",
  },
  {
    id: "8",
    title: "author talk: stories on stage",
    date: "thu, aug 7 · 6:30pm",
    category: "literary",
    status: "tickets soon",
    imageAlt: "Open books stacked on a wooden surface with warm reading light",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    slug: "author-talk",
  },
];
