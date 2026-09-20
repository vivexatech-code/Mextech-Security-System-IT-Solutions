import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export function FloatingActions() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <aside
      id="floating-contact-actions"
      aria-label="Quick Contact Actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Call Floating Action */}
      <div className="relative flex items-center">
        {hoveredBtn === "phone" && (
          <span className="hidden sm:inline-block absolute right-14 bg-slate-900 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl whitespace-nowrap animate-in fade-in duration-200">
            Call: {COMPANY_INFO.phone}
          </span>
        )}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          id="floating-call-button"
          onMouseEnter={() => setHoveredBtn("phone")}
          onMouseLeave={() => setHoveredBtn(null)}
          aria-label="Call Mextech Security directly"
          className="w-13 h-13 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-950/60 border border-sky-400/40 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* WhatsApp Floating Action */}
      <div className="relative flex items-center">
        {hoveredBtn === "whatsapp" && (
          <span className="hidden sm:inline-block absolute right-14 bg-slate-900 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl whitespace-nowrap animate-in fade-in duration-200">
            Chat on WhatsApp
          </span>
        )}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-button"
          onMouseEnter={() => setHoveredBtn("whatsapp")}
          onMouseLeave={() => setHoveredBtn(null)}
          aria-label="Chat with Mextech on WhatsApp"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/60 border border-emerald-400/40 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <MessageSquare className="w-6 h-6 text-white fill-current" />
        </a>
      </div>
    </aside>
  );
}
