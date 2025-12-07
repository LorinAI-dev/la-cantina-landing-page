import { Sparkles, Music, Users, Heart } from "lucide-react";
import friendsImage from "@/assets/friends-eating.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Colorful Décor",
      description: "Vibrant walls, papel picado, and warm lighting create the perfect fiesta atmosphere.",
    },
    {
      icon: Music,
      title: "Great Music",
      description: "From Latin beats to chill vibes, our soundtrack sets the mood for an unforgettable evening.",
    },
    {
      icon: Users,
      title: "Social Vibes",
      description: "Perfect for drinks with friends, date nights, or spontaneous hangouts in the city center.",
    },
    {
      icon: Heart,
      title: "Warm Welcome",
      description: "Our friendly staff makes everyone feel like part of the familia from the first moment.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background pattern-dots relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-mango/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-turquoise/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-fiesta rounded-3xl opacity-20 blur-2xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={friendsImage}
                alt="Friends enjoying LA CANTINA"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-chili text-primary-foreground px-6 py-3 rounded-xl shadow-vibrant animate-float">
              <p className="font-display text-2xl tracking-wider">GEZELLIG!</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-chili font-semibold uppercase tracking-widest text-sm mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              WHERE MEXICAN FLAVOR MEETS{" "}
              <span className="text-chili">EINDHOVEN ENERGY</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              LA CANTINA is more than a restaurant — it's a social hotspot where authentic Mexican cuisine meets Dutch gezelligheid. Known for our bright décor, friendly staff, and seriously good tacos, we've become Eindhoven's favorite spot for colorful evenings and memorable moments.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mango/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-chili" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
