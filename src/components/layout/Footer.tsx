import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] text-gray-600 relative overflow-hidden pt-48 pb-12 border-t border-gray-100 z-[1200]">
      
      {/* Giant Faint Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center overflow-hidden">
        <h1 className="text-[15vw] font-black text-gray-900/[0.02] tracking-tighter leading-none m-0 p-0">
          GALCARE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20 mt-12">
          
          {/* Logo & Status */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <Image 
                src="/logo.png" 
                alt="Galcare Logo" 
                width={200} 
                height={60} 
                className="h-10 w-auto object-contain mb-6" 
              />
              <p className="text-gray-500 max-w-sm text-sm font-medium">
                Clinical-grade dermatological and neuropsychiatric formulations since 2008.
              </p>
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900">Galcare</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Our Story</Link></li>
              <li><Link href="/" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Manufacturing</Link></li>
              <li><Link href="/" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Contact</Link></li>
              <li><Link href="/" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900">Categories</h4>
            <ul className="space-y-4">
              <li><Link href="/categories/dermatology" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Dermatology</Link></li>
              <li><Link href="/categories/third-party-manufacturing" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">3rd Party Manufacturer</Link></li>
              <li><Link href="/categories/neuropsychiatric" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Neuropsychiatric</Link></li>
              <li><Link href="/" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">Support</Link></li>
            </ul>
          </div>
          
          {/* Links Column 3 */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900">Social</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">X (Twitter)</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">LinkedIn</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors font-medium">YouTube</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Galcare Pharmaceuticals Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
