import { useState, useEffect } from "react";

function usePosition(id) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    function updatePosition() {
      const element = window.document.getElementById(id);
      if (element.getBoundingClientRect().top < window.innerHeight * 0.7) {
        setRun(true);
      } else {
        setRun(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return run;
}

export default usePosition;
