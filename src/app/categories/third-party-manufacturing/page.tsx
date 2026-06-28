import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

export default function ThirdPartyManufacturing() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-slide-in">3rd Party Manufacturing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-slide-in stagger-1">
            Premium Contract Manufacturing Services for Your Pharmaceutical Brand
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Why Partner With Galcare?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We offer end-to-end third-party manufacturing solutions for pharmaceutical companies looking to scale their product portfolios without the overhead of maintaining manufacturing facilities. Our GMP-certified plants ensure uncompromised quality.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <ScrollReveal delay={100} className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">State-of-the-Art Facilities</h3>
                <p className="text-gray-600">Our manufacturing units are equipped with modern machinery and adhere to strict WHO-GMP guidelines to ensure the highest standards of production.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">Stringent Quality Control</h3>
                <p className="text-gray-600">Every batch undergoes rigorous quality testing in our advanced laboratories to ensure efficacy, safety, and stability.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">Timely Delivery</h3>
                <p className="text-gray-600">We understand the importance of supply chain efficiency. Our robust logistics ensure on-time delivery of your products.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">Wide Range of Formulations</h3>
                <p className="text-gray-600">From tablets and capsules to ointments, creams, and syrups, we can manufacture a diverse array of therapeutic categories.</p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-200">
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Ready to start manufacturing?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact our business development team today to discuss your contract manufacturing requirements and get a customized proposal.</p>
              <Link href="/contact" className="btn-beam px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all inline-block">
                Get a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
