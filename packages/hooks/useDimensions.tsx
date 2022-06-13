import { useEffect, useState } from "react";

export function useDimensions(ref: React.RefObject<HTMLDivElement>) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  return { height, width };
}
