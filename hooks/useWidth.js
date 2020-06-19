import { useState, useEffect } from "react";

const useWitdh = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(0);
  let [changing, setChanging] = useState(false);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      setChanging(true);
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
        setChanging(false);
      }, 50);
    };

    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width, setWidth, changing };
};

export default useWitdh;
