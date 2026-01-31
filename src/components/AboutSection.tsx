import { Sparkles, Music, Users, Heart } from "lucide-react";
import friendsImage from "@/assets/friends-eating.jpg";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sparkles,
      title: t("about.features.decor.title"),
      description: t("about.features.decor.desc"),
    },
    {
      icon: Music,
      title: t("about.features.music.title"),
      description: t("about.features.music.desc"),
    },
    {
      icon: Users,
      title: t("about.features.social.title"),
      description: t("about.features.social.desc"),
    },
    {
      icon: Heart,
      title: t("about.features.welcome.title"),
      description: t("about.features.welcome.desc"),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background pattern-dots relative overflow-hidden text-white"
    >
      {/* ✅ Add a subtle dark overlay so text always has contrast */}
      <div className="absolute inset-0 bg-foreground/25 pointer-events-none" />

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-mango/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-turquoise/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-fiesta rounded-3xl opacity-20 blur-2xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={friendsImage}
                alt={t("about.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-chili text-primary-foreground px-6 py-3 rounded-xl shadow-vibrant animate-float">
              <p className="font-display text-2xl tracking-wider">{t("about.badge")}</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-mango font-semibold uppercase tracking-widest text-sm mb-4">
              {t("about.kicker")}
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow">
              {t("about.titleA")}{" "}
              <span className="text-mango">{t("about.titleB")}</span>
            </h2>

            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              {t("about.body")}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-foreground/20 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-mango/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-mango" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/75">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;