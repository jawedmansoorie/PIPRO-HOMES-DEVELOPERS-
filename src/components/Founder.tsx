import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Founder() {
  return (
    <section id="about" className="section-padding">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Er. Rohit Yadav" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-pipro-orange text-white p-8 rounded-2xl shadow-xl max-w-[240px]">
            <h4 className="font-bold text-xl mb-1">Founder & CEO</h4>
            <p className="text-orange-100 text-sm">Er. Rohit Yadav</p>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pipro-green/10 rounded-full -z-10 blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-pipro-green font-bold uppercase tracking-widest text-sm mb-4 block">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Experience Excellence with <br />
            <span className="text-pipro-green underline decoration-pipro-orange decoration-4 underline-offset-8">Er. Rohit Yadav</span>
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            With over 8 years of specialized experience in civil engineering and Vastu consultancy, Er. Rohit Yadav has transformed the landscape of Deoria and beyond. Starting from our Delhi-Noida branch, we have expanded to provide premium turnkey construction services nationwide.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our commitment is to deliver high-quality, sustainable, and Vastu-compliant homes that reflect your personality and lifestyle. We don't just build houses; we build legacies.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Civil Engineer & Vastu Expert",
              "Legacy of 100+ Successful Projects",
              "Presence in Deoria, Delhi, and Noida",
              "Transparent Pricing & Timely Delivery"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-pipro-green" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <button className="btn-secondary">Learn More About Us</button>
        </motion.div>
      </div>
    </section>
  );
}
