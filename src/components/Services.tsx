import { motion } from 'motion/react';
import { Layout, Home, Compass, PenTool, Wallet, MapPin } from 'lucide-react';

const services = [
  {
    title: "2D/3D Plans",
    description: "Architectural layouts and photorealistic 3D elevations for a perfect visualization of your future home.",
    icon: Layout,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Turnkey Construction",
    description: "From foundation to finishing, we handle everything under one roof. Sit back while we build your dream.",
    icon: Home,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Vastu Consultancy",
    description: "Ensure positive energy and prosperity with our expert Vastu planning for every corner of your home.",
    icon: Compass,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Interior Design",
    description: "Modern interior and exterior aesthetics tailored to your lifestyle and functional needs.",
    icon: PenTool,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Low Budget Premium",
    description: "We optimize materials and design to deliver high-end looks on a pocket-friendly budget.",
    icon: Wallet,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "On-Site Visit",
    description: "Professional site assessment in Deoria and surrounding areas to provide accurate project estimates.",
    icon: MapPin,
    color: "bg-red-50 text-red-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-pipro-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Home Solutions</h2>
          <div className="w-24 h-1.5 bg-pipro-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
