"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-slide-in">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-slide-in stagger-1">
            Get in touch for manufacturing partnerships, product inquiries, or general support.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" placeholder="john@company.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-white">
                      <option>3rd Party Manufacturing</option>
                      <option>Product Inquiry (Dermatology)</option>
                      <option>Product Inquiry (Neuropsychiatric)</option>
                      <option>Distributorship / Franchise</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full btn-beam py-4 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:shadow-lg transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-gray-50 p-8 rounded-3xl h-full border border-gray-200">
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)] mb-1">Corporate Office</h4>
                      <p className="text-gray-600">Galcare Pharmaceuticals Pvt. Ltd.<br />123 Pharma Estate, Industrial Area,<br />New Delhi, India - 110001</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)] mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210<br />+91 11 2345 6789</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)] mb-1">Email</h4>
                      <p className="text-gray-600">info@galcare.com<br />sales@galcare.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-white h-48 rounded-2xl flex items-center justify-center border border-gray-200">
                  <span className="text-gray-400">Map Placeholder</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
