"use client";

import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    title: "WHO-GMP Certified",
    description: "Our manufacturing processes adhere to the highest global standards for quality and safety.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Advanced Formulations",
    description: "Pioneering clinical-grade dermatological and neuropsychiatric solutions with cutting-edge research.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  },
  {
    title: "Pan-India Network",
    description: "A robust distribution network ensuring our products reach every corner of the country reliably.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  {
    title: "Patient-Centric Care",
    description: "Every product is developed with the ultimate goal of improving patient outcomes and well-being.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  }
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-[var(--color-primary)] tracking-tight">
              Why <span className="font-semibold text-[var(--color-accent)]">Galcare?</span>
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We blend scientific rigor with a passion for healing, delivering pharmaceutical solutions you can trust.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 150}>
              <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
