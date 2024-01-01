export const useGoToMenu = () => {
  const handleGoTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    const sectionTopPosition = section?.getBoundingClientRect().top as number;

    window.scrollTo({
      top: window.scrollY + sectionTopPosition,
      behavior: "smooth",
    });
  };
  return { handleGoTo };
};
