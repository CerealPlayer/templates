import { useEffect, useState } from "react";

interface includesOffset extends HTMLDivElement {
  offsetWidth: number;
  offsetHeight: number;
}

export function useDimensions(ref: React.RefObject<includesOffset>) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  return { height, width };
}
