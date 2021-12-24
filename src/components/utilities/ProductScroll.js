import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProductScroll() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 400);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}
