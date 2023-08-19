import { useState, useMemo, useEffect } from "react";

const UseInViewPort = (curr) => {
  const [isInteracting, setInteracting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setInteracting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(curr.current);
    return () => {
      observer.disconnect();
    };
  }, [curr, observer]);

  return isInteracting;
};
export default UseInViewPort;
