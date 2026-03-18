import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';

const plans = [
  {
    title: "1000 sq ft 2BHK",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    specs: "NORTH-FACING • VASTU COMPLIANT",
    price: "Premium Design"
  },
  {
    title: "1200 sq ft 3BHK",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
    specs: "EAST-FACING • MODERN ELEVATION",
    price: "Luxury Living"
  },
  {
    title: "1500 sq ft Duplex",
    image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=800",
    specs: "PREMIUM LUXURY • 4BHK",
    price: "Elite Choice"
  }
];

export default function HousePlans() {
  return (
    <section id="plans" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-pipro-green font-bold uppercase tracking-widest text-sm mb-4 block">House Designs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured 3D House Plans</h2>
        </div>
        <button className="text-pipro-green font-bold flex items-center gap-2 hover:gap-3 transition-all group">
          View All Plans <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <img 
                src={plan.image} 
                alt={plan.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pipro-orange shadow-xl">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-pipro-green text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                  {plan.price}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
            <p className="text-slate-500 text-sm font-semibold tracking-wider mb-4">{plan.specs}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button className="text-slate-900 font-bold text-sm hover:text-pipro-orange transition-colors">View Details</button>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <Play size={14} fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
