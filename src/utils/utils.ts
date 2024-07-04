export const extractHostnameAndPath = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    const pathname = parsedUrl.pathname;
    console.log(hostname);
    console.log(pathname);
    return { hostname, pathname };
  } catch (error) {
    console.error('Invalid URL:', error);
    return null;
  }
};