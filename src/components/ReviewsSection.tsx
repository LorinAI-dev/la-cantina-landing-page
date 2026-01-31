import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const ReviewsSection = () => {
  const { t } = useTranslation();

  const reviews = [
    { text: t("vibes.reviews.0"), author: "Sophie M.", rating: 5 },
    { text: t("vibes.reviews.1"), author: "Marco V.", rating: 5 },
    { text: t("vibes.reviews.2"), author: "Lisa K.", rating: 5 },
    { text: t("vibes.reviews.3"), author: "Thomas B.", rating: 5 },
    { text: t("vibes.reviews.4"), author: "Anna R.", rating: 5 },
    { text: t("vibes.reviews.5"), author: "David L.", rating: 5 },
  ];

  return (
    <section id="vibes" className="py-20 md:py-32 bg-gradient-to-b from-chili to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-mango/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-turquoise/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-mango font-semibold uppercase tracking-widest text-sm mb-4">
            {t("vibes.kicker")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            {t("vibes.title")}
          </h2>
          <p className="text-lg text-primary-foreground/80">
            {t("vibes.body")}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-mango mb-4 opacity-60" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mango text-mango" />
                ))}
              </div>

              <p className="text-primary-foreground/90 mb-4 leading-relaxed">"{review.text}"</p>

              <p className="text-mango font-semibold">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
