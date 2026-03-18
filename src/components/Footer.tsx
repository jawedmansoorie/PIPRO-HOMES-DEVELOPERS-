import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-pipro-green rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
              <div className="leading-tight">
                <span className="text-white font-bold text-xl block">PIPRO HOMES</span>
                <span className="text-pipro-orange font-semibold text-xs tracking-widest uppercase">Developers</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Leading construction and real estate company in Deoria, UP. We specialize in Vastu-compliant 2D/3D house plans and premium turnkey construction.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pipro-orange transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'House Plans', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-pipro-orange transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pipro-green rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Our Services</h4>
            <ul className="space-y-4">
              {['2D/3D House Plans', 'Turnkey Construction', 'Vastu Consultancy', 'Interior Design', 'Low Budget Homes', 'Renovation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-pipro-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-pipro-green/20 rounded-lg flex items-center justify-center text-pipro-green shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-slate-400 text-sm">
                  Main Road, Near Civil Lines, Deoria, Uttar Pradesh - 274001
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-pipro-green/20 rounded-lg flex items-center justify-center text-pipro-green shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-bold">+91 00000 00000</p>
                  <p className="text-slate-500 text-xs">Mon - Sat: 9am - 7pm</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-pipro-green/20 rounded-lg flex items-center justify-center text-pipro-green shrink-0">
                  <Mail size={20} />
                </div>
                <p className="text-slate-400 text-sm">info@piprohomes.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2024 Pipro Homes Developers. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
