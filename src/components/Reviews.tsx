import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Animesh Singh",
    role: "Home Owner",
    text: "Pipro Homes provided the best elevation design for my home in Deoria. Very professional team and timely delivery of 3D plans.",
    rating: 5
  },
  {
    name: "Vijay Kumar",
    role: "Property Developer",
    text: "Er. Rohit Yadav's Vastu advice changed our house's energy. Highly recommended for turnkey construction in East UP.",
    rating: 5
  },
  {
    name: "Rahul Prajapati",
    role: "Business Owner",
    text: "Quality of material used in turnkey construction is premium. On-time delivery of project and transparent pricing.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Google Business Customer Reviews</h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl font-bold text-slate-900">4.8/5</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>
        <p className="text-slate-500 font-medium">Based on 62+ Verified Reviews</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
          >
            <Quote className="absolute top-6 right-8 text-slate-100" size={48} />
            <div className="flex text-yellow-400 mb-6">
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-600 italic mb-8 leading-relaxed">
              "{review.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pipro-green/10 rounded-full flex items-center justify-center text-pipro-green font-bold">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{review.role}</span>
                  <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] text-green-600 font-bold uppercase">Verified Purchase</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-pipro-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg">
          See All Reviews on Google
        </button>
      </div>
    </section>
  );
}
