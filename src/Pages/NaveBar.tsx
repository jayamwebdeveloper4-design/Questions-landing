import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../Components/UI/Button';
import { APP_LOGIN_URL, APP_SIGNUP_URL } from '../config';

const navMenus = [
    { title: "Home", href: "#home" },
    { title: "How It Works", href: "#howItWorks" },
    { title: "Features", href: "#features" },
    { title: "Who It's For", href: "#whoItsFor" },
    { title: "Pricing", href: "#pricing" },
    { title: "FAQ", href: "#faq" },
];

export const NaveBar = () => {
    const [activeHref, setActiveHref] = useState("#home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const isMenuOpenRef = useRef(false);

    useEffect(() => {
        const sections = navMenus
            .map(({ href }) => document.querySelector<HTMLElement>(href))
            .filter((section): section is HTMLElement => section !== null);
        const initialSection = navMenus.find(({ href }) => href === window.location.hash);
        if (initialSection) setActiveHref(initialSection.href);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) =>
                        first.boundingClientRect.top - second.boundingClientRect.top,
                    );
                const currentId = visibleSections[0]?.target.id;
                if (currentId) setActiveHref(`#${currentId}`);
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Escape" || !isMenuOpenRef.current) return;
            isMenuOpenRef.current = false;
            setIsMenuOpen(false);
            menuButtonRef.current?.focus();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const closeMenu = () => {
        isMenuOpenRef.current = false;
        setIsMenuOpen(false);
    };

    const selectMenu = (href: string) => {
        setActiveHref(href);
        closeMenu();
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface-container-lowest/90 backdrop-blur-md border-b border-surface-container/40">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Product branding */}
                <a href="#home" className="flex shrink-0 items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="" className="h-9 w-9 object-contain" />
                    <span className="font-display text-sm font-bold tracking-tight text-primary-container sm:text-lg">
                        Quotation Generator
                    </span>
                </a>

                {/* Navigation Links */}
                <nav aria-label="Primary navigation" className="relative hidden h-full md:flex">
                    <ul className="flex h-full items-center gap-6">
                        {navMenus.map((menu, index) => (
                            <li key={index} className="relative flex h-full items-center">
                                <a
                                    href={menu.href}
                                    aria-current={activeHref === menu.href ? "location" : undefined}
                                    onClick={() => selectMenu(menu.href)}
                                    className={`flex h-full items-center text-sm font-medium transition-colors hover:text-primary-container ${
                                        activeHref === menu.href
                                            ? "text-primary-container"
                                            : "text-on-surface-variant"
                                    }`}
                                >
                                    {menu.title}
                                </a>
                                <span
                                    aria-hidden="true"
                                    className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left rounded-full bg-primary-container transition-transform duration-300 ease-out motion-reduce:transition-none ${
                                        activeHref === menu.href ? "scale-x-100" : "scale-x-0"
                                    }`}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden items-center gap-4 md:flex">
                    <a
                        href={APP_LOGIN_URL}
                        className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary-container"
                    >
                        Login
                    </a>
                    <Button
                        variant="primary"
                        size="md"
                        onClick={() => window.location.assign(APP_SIGNUP_URL)}
                    >
                        Get Started
                    </Button>
                </div>

                <button
                    ref={menuButtonRef}
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-container md:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => {
                        const open = !isMenuOpenRef.current;
                        isMenuOpenRef.current = open;
                        setIsMenuOpen(open);
                    }}
                >
                    {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                </button>
            </div>
            <div
                id="mobile-navigation"
                className={`${isMenuOpen ? "block" : "hidden"} border-t border-surface-container/60 bg-surface-container-lowest px-4 pb-4 pt-2 shadow-lg md:hidden`}
            >
                <nav aria-label="Mobile primary navigation">
                    <ul className="flex flex-col">
                        {navMenus.map((menu) => (
                            <li key={menu.href}>
                                <a
                                    href={menu.href}
                                    aria-current={activeHref === menu.href ? "location" : undefined}
                                    onClick={() => selectMenu(menu.href)}
                                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-surface-container-low hover:text-primary-container ${
                                        activeHref === menu.href
                                            ? "text-primary-container"
                                            : "text-on-surface-variant"
                                    }`}
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-2 flex items-center gap-3 border-t border-surface-container pt-3">
                        <a
                            href={APP_LOGIN_URL}
                            onClick={closeMenu}
                            className="flex-1 rounded-md px-3 py-2 text-center text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary-container"
                        >
                            Login
                        </a>
                        <Button
                            variant="primary"
                            size="md"
                            className="flex-1"
                            onClick={() => window.location.assign(APP_SIGNUP_URL)}
                        >
                            Get Started Free
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NaveBar;
