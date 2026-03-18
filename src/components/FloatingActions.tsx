import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      <a 
        href="https://wa.me/910000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
      <a 
        href="tel:+910000000000" 
        className="w-14 h-14 bg-pipro-orange text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
}
