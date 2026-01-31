import { Button } from "@/components/ui/button";
import { MapPin, Music, Utensils, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cantina.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  const badges = [
    { icon: Utensils, text: t("hero.badges.tacos") },
    { icon: Music, text: t("hero.badges.music") },
    { icon: Sparkles, text: t("hero.badges.vibes") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-mango/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-chili/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-turquoise/30 rounded-full blur-2xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Tag */}
          <div className="inline-flex items-center gap-2 bg-cream/20 backdrop-blur-sm text-cream px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{t("hero.addressShort")}</span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-none mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("hero.headlineTop")}
            <br />
            <span className="text-mango">&</span> {t("hero.headlineBottom")}
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subheadline")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="fiesta" size="xl" asChild>
              <a href="#menu">{t("actions.viewMenu")}</a>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#location">{t("actions.planVisit")}</a>
            </Button>
          </div>

          {/* Badges */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-cream/15 backdrop-blur-sm text-cream px-4 py-2 rounded-full border border-cream/20"
              >
                <badge.icon className="w-4 h-4 text-mango" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
