export interface TikTokVideoObject {
  url: string;
  id: string;
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