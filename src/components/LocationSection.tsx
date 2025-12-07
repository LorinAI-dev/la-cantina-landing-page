import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const openingHours = [
    { day: "Sunday", hours: "Closed", isOpen: false },
    { day: "Monday", hours: "17:00 – 23:00", isOpen: true },
    { day: "Tuesday", hours: "Closed", isOpen: false },
    { day: "Wednesday", hours: "Closed", isOpen: false },
    { day: "Thursday", hours: "16:20 – 23:00", isOpen: true },
    { day: "Friday", hours: "16:20 – 23:00", isOpen: true },
    { day: "Saturday", hours: "16:00 – 23:00", isOpen: true },
  ];

  // Get today's day name
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayInfo = openingHours.find((h) => h.day === today);

  return (
    <section id="location" className="py-20 md:py-32 bg-gradient-warm pattern-dots relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-cactus font-semibold uppercase tracking-widest text-sm mb-4">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            FIND YOUR WAY TO <span className="text-chili">LA CANTINA</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're located right in the heart of Eindhoven — easy to find, hard to leave.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7461453024383!2d5.476089677082899!3d51.43659277179799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d911c386d54f%3A0x5a6e6e3e3e3e3e3e!2sVestdijk%2039%2C%205611%20CA%20Eindhoven%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[1.1]"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-chili/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-chili" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">Vestdijk 39</p>
                  <p className="text-muted-foreground">5611 CA Eindhoven, Netherlands</p>
                  <a
                    href="https://www.google.com/maps/dir//Vestdijk+39,+5611+CA+Eindhoven,+Netherlands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-chili font-medium mt-2 hover:underline"
                  >
                    Get directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-turquoise/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-turquoise" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+31064822477"
                    className="text-muted-foreground hover:text-turquoise transition-colors"
                  >
                    +31 06 4282 2477
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mango/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-warm-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                  {todayInfo && (
                    <p className={`text-sm ${todayInfo.isOpen ? "text-cactus" : "text-chili"}`}>
                      {todayInfo.isOpen ? `Open today: ${todayInfo.hours}` : "Closed today"}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2 ml-16">
                {openingHours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between text-sm py-1 px-2 rounded ${
                      item.day === today ? "bg-mango/20 font-medium" : ""
                    }`}
                  >
                    <span className={item.isOpen ? "text-foreground" : "text-muted-foreground"}>
                      {item.day}
                    </span>
                    <span className={item.isOpen ? "text-cactus" : "text-muted-foreground"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
