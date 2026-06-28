import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-slide-in">About Galcare</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-slide-in stagger-1">
            Innovation in Skin Care & Excellence in Manufacturing Since 2008
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Our Journey</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Galcare Pharmaceuticals Pvt. Ltd. was incorporated in 2008 with a vision to deliver high-quality, prescription-oriented therapeutic formulations. Over the years, we have established ourselves as a widely recognized name in the Indian pharmaceutical industry.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                While we specialize heavily in dermatology and skin care products, our expertise spans across multiple therapeutic segments including neuropsychiatry and general medicine.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center border border-gray-200">
                <span className="text-gray-400">Placeholder Image: Company HQ / History</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center text-xl font-bold mb-6">1</div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Mission</h3>
              <p className="text-gray-600">To enhance the quality of life by providing innovative, safe, and effective pharmaceutical solutions at accessible prices.</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center text-xl font-bold mb-6">2</div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Vision</h3>
              <p className="text-gray-600">To be a globally respected pharmaceutical organization known for its commitment to quality, research, and customer satisfaction.</p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center text-xl font-bold mb-6">3</div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Core Values</h3>
              <p className="text-gray-600">Quality, Integrity, Innovation, and a relentless focus on patient care drive everything we do at Galcare.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
