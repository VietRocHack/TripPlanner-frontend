export interface TikTokVideoObject {
  url: string;
  id: string;
}

export enum ActivityTag {
  Sightseeing = "Sightseeing",
  Beach = "Beach",
  Hiking = "Hiking",
  Shopping = "Shopping",
  Dining = "Dining",
  Museum = "Museum",
  Adventure = "Adventure",
  Relaxation = "Relaxation",
  Nightlife = "Nightlife",
  Wildlife = "Wildlife",
  CulturalExperience = "CulturalExperience",
  Sports = "Sports",
  Festival = "Festival",
  RoadTrip = "RoadTrip",
  Camping = "Camping",
  Cruise = "Cruise",
  Spa = "Spa",
  Photography = "Photography",
  Entertainment = "Entertainment",
  History = "History",
  FamilyFun = "FamilyFun",
  ThemePark = "ThemePark",
  WaterSports = "WaterSports",
  WinterSports = "WinterSports"
}

export interface TripInfo {
  location: string;
  startOfDay: number;
  endOfDay: number;
  tags: ActivityTag[];
  comments: string;
}

interface Inspiration {
  explanation: string;
  video_url: string;
}
export interface Activity {
  id?: number
  startTime: string;
  endTime: string;
  activity: string;
  location: string;
  inspiredBy: Inspiration | null;
}

export interface Itinerary{
  activities: Activity[]
}