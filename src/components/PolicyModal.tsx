import { X, Shield } from "lucide-react";

interface PolicyModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export function PolicyModal({ type, onClose }: PolicyModalProps) {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-sky-400" />
            <h3 className="font-heading font-bold text-lg text-white">
              {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto text-sm text-slate-300 space-y-4 leading-relaxed">
          {type === "privacy" ? (
            <>
              <p>
                <strong>Last Updated:</strong> January 2025
              </p>
              <p>
                At <strong>MEXTECH SECURITY SYSTEM &amp; IT SOLUTIONS</strong>, we respect your privacy and are committed to safeguarding the personal information you share with us through our website and service channels.
              </p>
              <h4 className="font-bold text-white text-base pt-2">1. Information We Collect</h4>
              <p>
                We collect information you explicitly provide when submitting an inquiry form, requesting a site survey, or contacting us via phone or WhatsApp. This includes your name, phone number, email address, physical location, and service requirements.
              </p>
              <h4 className="font-bold text-white text-base pt-2">2. How We Use Your Information</h4>
              <p>
                Your information is used strictly to provide quotations, schedule on-site installation and service appointments, communicate project updates, and deliver technical support. We never sell, rent, or trade your contact details with external marketing third parties.
              </p>
              <h4 className="font-bold text-white text-base pt-2">3. Video &amp; Surveillance Security</h4>
              <p>
                During CCTV setup and mobile viewing configuration, our engineers configure your personal credentials directly on your own mobile devices. Mextech does not retain your surveillance passwords or stream credentials after installation handover.
              </p>
              <h4 className="font-bold text-white text-base pt-2">4. Contact Us</h4>
              <p>
                If you have questions regarding this privacy policy, you may contact us at: <br />
                Email: <strong>mextech.ncr@gmail.com</strong> | Phone: <strong>+91 85109 29404</strong>
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated:</strong> January 2025
              </p>
              <p>
                Welcome to <strong>MEXTECH SECURITY SYSTEM &amp; IT SOLUTIONS</strong>. By browsing our website or engaging our security and IT installation services, you agree to the following terms and conditions.
              </p>
              <h4 className="font-bold text-white text-base pt-2">1. Scope of Services</h4>
              <p>
                Mextech provides security systems consultation, supply of genuine electronic equipment, professional on-site installation, cabling, system configuration, repair, and annual maintenance contracts (AMC) across Gurugram and Delhi NCR.
              </p>
              <h4 className="font-bold text-white text-base pt-2">2. Quotations and Pricing</h4>
              <p>
                All estimates and quotations are provided based on initial site surveys or stated requirements. Any structural modifications, additional conduit requirements, or extended cable lengths exceeding initial estimates will be discussed and agreed upon with the client beforehand.
              </p>
              <h4 className="font-bold text-white text-base pt-2">3. Equipment Warranty</h4>
              <p>
                Hardware equipment (CCTV cameras, NVR/DVR units, biometric scanners, video door phones, and PoE switches) carries manufacturer warranties ranging from 1 to 3 years as specified on the product invoice. Warranty covers hardware defects under normal operating conditions.
              </p>
              <h4 className="font-bold text-white text-base pt-2">4. Client Responsibilities</h4>
              <p>
                The client is responsible for providing necessary site access, stable power points, and internet connection where remote mobile viewing or cloud attendance synchronization is required.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
