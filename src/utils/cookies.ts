export const getCookie = (cookieName: string): string | null => {
  if (typeof window !== "undefined") {
    let cookies = document.cookie.split(";");
    // Loop through the cookies to find the one with the specified name
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim(); // Trim any leading/trailing spaces
      const cookieParts = cookie.split("=");

      // Check if the cookie name matches the input cookieName
      if (cookieParts[0] === cookieName) {
        // Return the cookie value
        return cookieParts[1];
      } else {
        continue;
      }
    }
  }

  return null;
};

export const deleteCookie = (cookieName: string): void => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
