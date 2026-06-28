import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Dermatology() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-slide-in">Dermatology</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-slide-in stagger-1">
            Advanced Skin Care Formulations for a Healthier You
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Our Dermatological Excellence</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                As our core specialty, we take immense pride in our dermatology division. Galcare offers a comprehensive portfolio of skin care products designed to treat a wide spectrum of dermatological conditions, backed by scientific research and clinical efficacy.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Range Cards */}
            {[
              { title: "Anti-Acne", desc: "Targeted treatments to combat acne, reduce inflammation, and prevent future breakouts." },
              { title: "Anti-Fungal", desc: "Potent formulations to effectively treat various fungal infections of the skin." },
              { title: "Emollients & Moisturizers", desc: "Deeply hydrating formulas that restore the skin's natural barrier." },
              { title: "Corticosteroids", desc: "Safe and effective relief from eczema, psoriasis, and severe dermatitis." },
              { title: "Sunscreens", desc: "Broad-spectrum protection against harmful UVA and UVB rays." },
              { title: "Anti-Aging & Serums", desc: "Premium, cosmetologically advanced formulations for youthful skin." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                    {/* Placeholder Icon */}
                    <div className="w-4 h-4 bg-[var(--color-primary)] rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
