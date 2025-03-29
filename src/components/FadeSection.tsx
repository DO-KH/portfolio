import { useEffect, useRef, useState } from "react";

const FadeSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const height = window.innerHeight;

      // ➕ 스크롤 안했으면 무조건 opacity = 1
      if (rect.top >= 0) {
        setOpacity(1);
        return;
      }

      const progress = Math.min(Math.abs(rect.top) / height, 1); // 0 ~ 1
      const newOpacity = 1 - progress * 1.2;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ✅ 초기 렌더링에도 적용되게 호출
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className="transition-opacity duration-300 ease-in-out h-full w-full"
    >
      {children}
    </div>
  );
};

export default FadeSection;
