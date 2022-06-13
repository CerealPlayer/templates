import { useEffect, useRef } from "react";

export function useDimensions(ref: React.RefObject<HTMLDivElement>) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}
