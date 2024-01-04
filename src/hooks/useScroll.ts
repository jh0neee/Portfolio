import { useEffect } from "react";
import { debounce } from "lodash";
import { sections } from "@/components/constant/data";

export const useScroll = (
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>,
) => {
  // 이벤트 간의 타이밍 문제로 debounce 함수 적용
  const handleScroll = debounce(() => {
    let currentSection = "";

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop) {
          currentSection = sectionId;
        }
      }
    }

    setActiveMenu(currentSection);
  }, 100);

  useEffect(() => {
    // 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};
