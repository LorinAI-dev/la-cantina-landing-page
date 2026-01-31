import { Instagram, Phone, MapPin, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#menu", label: t("nav.menu") },
    { href: "#vibes", label: t("nav.vibes") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#location", label: t("nav.visit") },
  ];

  return (
    <footer className="bg-foreground border-t border-border/10 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-mango mb-4">LA CANTINA</h3>
            <p className="text-white/85 text-sm leading-relaxed">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.contactTitle")}
            </h4>

            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/dir//Vestdijk+39,+5611+CA+Eindhoven,+Netherlands"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-mango transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Vestdijk 39, 5611 CA Eindhoven
              </a>

              <a
                href="tel:+31064822477"
                className="flex items-center gap-2 text-white/80 hover:text-mango transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +31 06 4282 2477
              </a>

              <a
                href="https://www.instagram.com/lacantina_xehv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-mango transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @lacantina_xehv
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.quickLinksTitle")}
            </h4>

            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-mango transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/65 text-sm">
            © {new Date().getFullYear()} LA CANTINA. {t("footer.rights")}
          </p>

          <p className="text-white/65 text-sm flex items-center gap-1">
            {t("footer.madeWith")}{" "}
            <Heart className="w-4 h-4 text-chili fill-chili" />{" "}
            {t("footer.inCity")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
