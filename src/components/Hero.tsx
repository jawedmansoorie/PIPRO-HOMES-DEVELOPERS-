import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern House" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-pipro-orange/20 text-pipro-orange rounded-full text-sm font-bold mb-6 border border-pipro-orange/30">
              #1 Construction Company in Deoria
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              अपना सपनों का घर बनाएँ <br />
              <span className="text-pipro-orange">PIPRO HOMES DEVELOPERS</span> के साथ
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              2D/3D Plans • Full Construction • Vastu Expert • Deoria & Pan India. 
              We turn your vision into a masterpiece with precision and Vastu compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Free Consultation WhatsApp करें
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Get Free House Plan
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-pipro-orange">8+</div>
                <div className="text-slate-300 text-sm uppercase tracking-wider">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pipro-orange">100+</div>
                <div className="text-slate-300 text-sm uppercase tracking-wider">Homes Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pipro-orange">4.8</div>
                <div className="flex text-yellow-400 mt-1">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-pipro-green">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Vastu Compliant</h4>
              <p className="text-xs text-slate-500">Every plan is vetted by experts</p>
            </div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-pipro-green w-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
