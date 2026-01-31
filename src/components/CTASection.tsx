import { Button } from "@/components/ui/button";
import { Instagram, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden text-white">
      {/* ✅ Stronger overlay to guarantee contrast */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-chili/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-mango/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center gap-4 mb-8 text-4xl">
          <span className="animate-float">🌮</span>
          <span className="animate-float-delayed">🍹</span>
          <span className="animate-float">🎉</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 drop-shadow">
          {/* (your CTA title is built from hero strings) */}
          <span className="text-white/90">{t("hero.headlineTop")},</span>
          <br />
          <span className="text-mango drop-shadow-lg">{t("hero.headlineBottom")}?</span>
        </h2>

        {/* ✅ This is the text you can’t read in the screenshot */}
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("about.body")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="fiesta" size="xl" asChild>
            <a href="#location">
              <Sparkles className="w-5 h-5 mr-2" />
              {t("actions.planVisit")}
            </a>
          </Button>

          <Button variant="outline-light" size="xl" asChild>
            <a
              href="https://www.instagram.com/lacantina_xehv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              {t("actions.followUs")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
