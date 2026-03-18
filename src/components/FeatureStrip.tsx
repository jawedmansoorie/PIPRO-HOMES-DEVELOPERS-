import { Clock, ShieldCheck, BadgePercent, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "On-Time Completion",
    desc: "We value your time. Guaranteed project delivery on scheduled dates."
  },
  {
    icon: ShieldCheck,
    title: "Vastu Expertise",
    desc: "Every design is vetted by our certified Vastu specialists."
  },
  {
    icon: BadgePercent,
    title: "Budget Friendly",
    desc: "Premium luxury construction at highly competitive Deoria prices."
  },
  {
    icon: TrendingUp,
    title: "Fastest Growing",
    desc: "Trusted by hundreds of families across Deoria and surrounding areas."
  }
];

export default function FeatureStrip() {
  return (
    <section className="bg-pipro-green py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed opacity-80">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
