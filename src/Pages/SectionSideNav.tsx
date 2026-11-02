import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "howItWorks", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "whoItsFor", label: "Who it's for" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default function SectionSideNav() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;
    const nav = navRef.current;

    const hideWhenIdle = () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        if (!navRef.current?.matches(":hover, :focus-within")) {
          setIsVisible(false);
        }
      }, 1200);
    };

    const show = () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      setIsVisible(true);
    };

    const showWhileScrolling = () => {
      show();
      hideWhenIdle();
    };
    const hideAfterPointerLeaves = () => hideWhenIdle();
    const handleFocusOut = () => hideWhenIdle();

    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          );
        const currentSection = visibleSections[0]?.target;

        if (currentSection instanceof HTMLElement) {
          setActiveSection(currentSection.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", showWhileScrolling, { passive: true });
    nav?.addEventListener("pointerenter", show);
    nav?.addEventListener("pointerleave", hideAfterPointerLeaves);
    nav?.addEventListener("focusin", show);
    nav?.addEventListener("focusout", handleFocusOut);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", showWhileScrolling);
      nav?.removeEventListener("pointerenter", show);
      nav?.removeEventListener("pointerleave", hideAfterPointerLeaves);
      nav?.removeEventListener("focusin", show);
      nav?.removeEventListener("focusout", handleFocusOut);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Page sections"
      className={`fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-outline-variant/50 bg-white/90 p-2 shadow-[0_8px_24px_rgba(11,28,48,0.12)] backdrop-blur-md transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:block ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-3 opacity-0"
      }`}
    >
      <ul className="flex flex-col items-center gap-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-label={`Scroll to ${section.label}`}
                aria-current={isActive ? "location" : undefined}
                className="group relative flex h-7 w-7 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-5 w-1.5 bg-primary-container"
                      : "h-1.5 w-1.5 bg-outline-variant group-hover:h-3 group-hover:bg-secondary"
                  }`}
                  aria-hidden="true"
                />
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#062D25] px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
