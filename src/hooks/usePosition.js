import { useState, useEffect } from "react";

function usePosition(id) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    function updatePosition() {
      const element = window.document.getElementById(id);
      if (window.pageYOffset > element.offsetTop + 200) {
        setRun(true);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return run;
}

export default usePosition;
