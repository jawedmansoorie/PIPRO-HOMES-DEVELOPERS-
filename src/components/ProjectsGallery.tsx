import { motion } from 'motion/react';

const projects = [
  {
    title: "Modern Villa",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Luxury Interior",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Deoria Heights",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Green Residency",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Smart Home",
    category: "Turnkey",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Vastu Palace",
    category: "Consultancy",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-pipro-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold">Recently Completed Projects</h2>
          <div className="w-24 h-1.5 bg-pipro-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-pipro-orange font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="w-10 h-1 bg-pipro-green mt-4 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-white/20 hover:border-pipro-orange hover:text-pipro-orange px-10 py-4 rounded-full font-bold transition-all">
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
