import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex flex-col mb-4 bg-white p-4 rounded-lg inline-block w-fit">
              <span className="text-2xl font-bold text-[var(--color-primary)]">Galcare</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Specializing heavily in dermatology, skincare, and leading third-party manufacturing solutions since 2008.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">Categories</h4>
            <ul className="space-y-3">
              <li><Link href="/categories/dermatology" className="text-blue-100 hover:text-white transition-colors">Dermatology</Link></li>
              <li><Link href="/categories/third-party-manufacturing" className="text-blue-100 hover:text-white transition-colors">3rd Party Manufacturer</Link></li>
              <li><Link href="/categories/neuropsychiatric" className="text-blue-100 hover:text-white transition-colors">Neuropsychiatric</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">Contact</h4>
            <ul className="space-y-3 text-blue-100">
              <li>Galcare Pharmaceuticals Pvt. Ltd.</li>
              <li>Email: info@galcare.com</li>
              <li>Phone: +91 XXXXXXXXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Galcare Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
