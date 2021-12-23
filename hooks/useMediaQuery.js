import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  const updateMatches = useCallback((event) => {
    event.matches ? setMatches(true) : setMatches(false);
  }, []);

  useEffect(() => {
    const mediaMatch = window.matchMedia(query);
    // const handler = (e) => setMatches(updateMatches);
    if (mediaMatch.matches) {
      setMatches(true);
    }

    mediaMatch.addEventListener("change", updateMatches);

    return () => mediaMatch.removeEventListener("change", updateMatches);
  }, [query, updateMatches]);
  return matches;
};
