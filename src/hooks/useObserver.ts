import { useEffect, useState } from "react";

export const useObserver = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (section: string) => {
    document.querySelector(section)?.scrollIntoView();
  };

  return {
    currentSection,
    scrollToSection,
  };
};
