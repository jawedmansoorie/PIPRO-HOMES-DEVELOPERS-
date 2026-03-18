import { motion } from 'motion/react';
import { Compass, Sun, Wind, Droplets } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: "Entrance Direction",
    text: "Main entrance should ideally face North, East, or North-East for maximum positive energy flow."
  },
  {
    icon: Wind,
    title: "Kitchen Placement",
    text: "The South-East corner (Agni Kon) is perfect for the kitchen to ensure health and prosperity."
  },
  {
    icon: Droplets,
    title: "Water Elements",
    text: "Underground water tanks or borewells should be in the North-East to attract wealth."
  },
  {
    icon: Compass,
    title: "Master Bedroom",
    text: "South-West is the best direction for the master bedroom to ensure stability and peace."
  }
];

export default function VastuTips() {
  return (
    <section className="section-padding bg-emerald-50/50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-pipro-orange font-bold uppercase tracking-widest text-sm mb-4 block">Ancient Wisdom, Modern Living</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Expert Vastu Tips for Your <br />
            <span className="text-pipro-green">Dream Home</span>
          </h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            In modern architecture, Vastu Shastra is more than just tradition—it's the science of spatial arrangement that balances natural elements. Our designs ensure that your living space resonates with positive energy, health, and prosperity by aligning with cosmic flows.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-pipro-orange/10 text-pipro-orange rounded-lg flex items-center justify-center mb-4">
                  <tip.icon size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{tip.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-full border-[20px] border-white shadow-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?auto=format&fit=crop&q=80&w=800" 
              alt="Vastu Compass" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-pipro-green/20 mix-blend-overlay"></div>
          </div>
          {/* Floating badge */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-pipro-orange text-white p-6 rounded-3xl shadow-2xl max-w-[200px] hidden md:block">
            <Compass size={40} className="mb-4 animate-spin-slow" />
            <p className="font-bold text-lg">100% Vastu Compliant Designs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
