export const cleanTikTokVideoURL = (inputUrl: string) => {
  try {
    const url = new URL(inputUrl);

    // Check if the hostname contains 'tiktok.com'
    if (!url.hostname.includes('tiktok.com')) {
        throw new Error("The URL does not contain 'tiktok.com' in its hostname.");
    }

    // Check if the pathname matches the pattern /@{username}/video/{id}
    const pathRegex = /^\/@[\w.]+\/video\/(\d+)$/;
    const pathname = url.pathname.split('?')[0]; // Remove query params if any

    const match = pathname.match(pathRegex);
    if (!match) {
        throw new Error("The URL does not match the pattern /@{username}/video/{id}.");
    }

    // Extract the ID from the regex match
    const id = match[1];

    // Construct and return the well-formed URL
    const wellFormedUrl = `https://www.tiktok.com${pathname}`;
    return { url: wellFormedUrl, id };
  } catch (error) {
    return "";
  }
};

export const checkTikTokUrl = async (url: string) => {
  try {
    const response = await fetch(`https://www.tiktok.com/oembed?url=${url}`);
    // Check if the status is 403 (Forbidden)
    if (response.status === 400) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const convertTo12HourFormat = (time: string) => {
  if (time === "") {
    return "N/A"
  }
  const [hourString, minute] = time.split(':');
  let hour = parseInt(hourString, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // Convert hour to 12-hour format
  const formattedHour = hour < 10 ? `0${hour}` : hour; // Ensure two digits
  return `${formattedHour}:${minute} ${ampm}`;
};
