import { Button } from "@/components/ui/button";
import { Flame, Leaf, Star } from "lucide-react";
import tacosImage from "@/assets/tacos.jpg";
import margaritasImage from "@/assets/margaritas.jpg";

const MenuSection = () => {
  const menuCategories = [
    {
      title: "Signature Tacos",
      description: "Our handcrafted tortillas filled with love",
      items: [
        { name: "Al Pastor", desc: "Marinated pork, pineapple, cilantro, onion", tag: "fan favorite" },
        { name: "Carnitas", desc: "Slow-cooked pulled pork, salsa verde, onion", tag: null },
        { name: "Pollo Asado", desc: "Grilled chicken, guacamole, pico de gallo", tag: null },
        { name: "Veggie Fiesta", desc: "Grilled vegetables, black beans, queso fresco", tag: "vegetarian" },
      ],
      image: tacosImage,
      icon: Flame,
    },
    {
      title: "Drinks & Cocktails",
      description: "Refresh, relax, repeat",
      items: [
        { name: "Classic Margarita", desc: "Tequila, lime, triple sec, salt rim", tag: "signature" },
        { name: "Paloma", desc: "Tequila, grapefruit, lime, soda", tag: null },
        { name: "Michelada", desc: "Mexican beer, lime, spices, tomato juice", tag: null },
        { name: "Agua Fresca", desc: "Fresh fruit waters — ask for today's flavor", tag: "non-alcoholic" },
      ],
      image: margaritasImage,
      icon: Star,
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-gradient-warm relative overflow-hidden">
      {/* Decorative zigzag pattern */}
      <div className="absolute inset-0 pattern-zigzag opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-cactus font-semibold uppercase tracking-widest text-sm mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            TASTE THE <span className="text-chili">AUTHENTIC</span> FLAVORS
          </h2>
          <p className="text-lg text-muted-foreground">
            From our legendary tacos to refreshing margaritas, every dish is crafted with authentic recipes and the freshest ingredients.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                catIndex % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${catIndex % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="absolute -inset-4 bg-gradient-tropical rounded-3xl opacity-20 blur-2xl" />
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Icon Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-chili rounded-2xl flex items-center justify-center shadow-vibrant">
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className={catIndex % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-8">{category.description}</p>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-chili/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          {item.tag && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              item.tag === "vegetarian" 
                                ? "bg-cactus/20 text-cactus" 
                                : item.tag === "fan favorite" || item.tag === "signature"
                                ? "bg-chili/20 text-chili"
                                : "bg-turquoise/20 text-turquoise"
                            }`}>
                              {item.tag === "vegetarian" && <Leaf className="w-3 h-3 inline mr-1" />}
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="fiesta" size="lg">
            Explore Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
