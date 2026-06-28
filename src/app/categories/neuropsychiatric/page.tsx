import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Neuropsychiatric() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-slide-in">Neuropsychiatric</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-slide-in stagger-1">
            Empowering Minds with Comprehensive CNS Solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Supporting Mental Health</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Galcare is committed to improving patient outcomes in the field of mental health and neurology. Our specialized neuropsychiatric division offers a range of high-quality formulations designed to treat central nervous system disorders effectively.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Focus Areas */}
            {[
              "Anti-Depressants",
              "Anti-Anxiety",
              "Anti-Psychotics",
              "Mood Stabilizers",
              "Anti-Epileptics",
              "Sedatives & Hypnotics",
              "Cognitive Enhancers",
              "Neuropathic Pain"
            ].map((area, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">{area}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
