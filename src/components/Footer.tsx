import { Instagram, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-border/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-background mb-4">LA CANTINA</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Eindhoven's most colorful Mexican hangout. Authentic tacos, refreshing drinks, and the best vibes in town.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/dir//Vestdijk+39,+5611+CA+Eindhoven,+Netherlands"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/60 hover:text-mango transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Vestdijk 39, 5611 CA Eindhoven
              </a>
              <a
                href="tel:+31064822477"
                className="flex items-center gap-2 text-background/60 hover:text-mango transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +31 06 4282 2477
              </a>
              <a
                href="https://www.instagram.com/lacantina_xehv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/60 hover:text-mango transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @lacantina_xehv
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Menu", "Vibes", "Gallery", "Visit"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-background/60 hover:text-mango transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} LA CANTINA. All rights reserved.
          </p>
          <p className="text-background/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-chili fill-chili" /> in Eindhoven
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
