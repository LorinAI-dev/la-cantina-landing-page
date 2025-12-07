import { Button } from "@/components/ui/button";
import { Instagram, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-chili/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-mango/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Emoji decoration */}
        <div className="flex justify-center gap-4 mb-8 text-4xl">
          <span className="animate-float">🌮</span>
          <span className="animate-float-delayed">🍹</span>
          <span className="animate-float">🎉</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-background leading-tight mb-6">
          READY FOR COLOR,
          <br />
          <span className="text-mango">FLAVOR & VIBES?</span>
        </h2>

        <p className="text-xl text-background/80 max-w-2xl mx-auto mb-10">
          LA CANTINA awaits. Join the fiesta — see you at Eindhoven's most colorful Mexican hangout!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="fiesta" size="xl" asChild>
            <a href="#location">
              <Sparkles className="w-5 h-5 mr-2" />
              Plan Your Visit
            </a>
          </Button>
          <Button variant="outline-light" size="xl" asChild>
            <a
              href="https://www.instagram.com/lacantina_xehv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
