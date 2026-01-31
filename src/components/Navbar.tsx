import { Instagram, Phone, Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true); // ✅ hero overlay mode
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      // tweak threshold if you want the switch later/earlier
      setIsTop(window.scrollY < 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = async () => {
    const next = i18n.language?.startsWith("nl") ? "en" : "nl";
    await i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const navLinks = useMemo(
    () => [
      { href: "#about", label: t("nav.about") },
      { href: "#menu", label: t("nav.menu") },
      { href: "#vibes", label: t("nav.vibes") },
      { href: "#gallery", label: t("nav.gallery") },
      { href: "#location", label: t("nav.visit") },
    ],
    [t]
  );

  const langLabel = i18n.language?.startsWith("nl") ? "NL" : "EN";

  // ✅ classes that change depending on top-of-hero or scrolled
  const navClass = isTop
    ? "bg-foreground/35 border-border/20 text-cream"
    : "bg-background/95 border-border text-foreground";

  const linkClass = isTop
    ? "text-cream/90 hover:text-cream"
    : "text-foreground/80 hover:text-primary";

  const iconClass = isTop
    ? "text-cream/85 hover:text-cream"
    : "text-foreground/70 hover:text-primary";

  const toggleBtnClass = isTop
    ? "border-cream/40 text-cream bg-foreground/40 hover:bg-foreground/55 hover:border-cream/60"
    : "border-border text-foreground/80 hover:text-primary hover:border-primary/40";

  const mobilePanelClass = isTop
    ? "border-border/20 bg-foreground/40"
    : "border-border bg-background/95";

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-md border-b transition-colors duration-300",
        navClass,
      ].join(" ")}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={[
              "font-display text-2xl md:text-3xl tracking-wider transition-colors",
              isTop ? "text-mango drop-shadow" : "text-primary",
            ].join(" ")}
          >
            LA CANTINA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "font-medium transition-colors duration-200",
                  linkClass,
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className={[
                "inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors",
                toggleBtnClass,
              ].join(" ")}
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{langLabel}</span>
            </button>

            <a
              href="https://www.instagram.com/lacantina_xehv/"
              target="_blank"
              rel="noopener noreferrer"
              className={["transition-colors", iconClass].join(" ")}
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="tel:+31064822477"
              className={["transition-colors", iconClass].join(" ")}
            >
              <Phone className="w-5 h-5" />
            </a>

            <Button variant="fiesta" size="sm">
              {t("actions.planVisit")}
            </Button>
          </div>

          <button
            className={["md:hidden p-2 transition-colors", isTop ? "text-cream" : "text-foreground"].join(" ")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div
            className={[
              "md:hidden py-4 border-t animate-fade-in-up backdrop-blur-md transition-colors duration-300",
              mobilePanelClass,
            ].join(" ")}
          >
            <div className="flex flex-col gap-4">
              {/* Language toggle (mobile) */}
              <button
                type="button"
                onClick={toggleLanguage}
                className={[
                  "inline-flex items-center justify-between px-3 py-2 rounded-lg border transition-colors",
                  toggleBtnClass,
                ].join(" ")}
              >
                <span className="inline-flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  {t("language.toggleLabel")}
                </span>
                <span className="text-sm font-semibold">{langLabel}</span>
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    "font-medium py-2 transition-colors",
                    linkClass,
                  ].join(" ")}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className={["flex items-center gap-4 pt-4 border-t", isTop ? "border-border/20" : "border-border"].join(" ")}>
                <a
                  href="https://www.instagram.com/lacantina_xehv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={["transition-colors", iconClass].join(" ")}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="tel:+31064822477"
                  className={["transition-colors", iconClass].join(" ")}
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>

              <Button variant="fiesta" className="mt-2">
                {t("actions.planVisit")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
