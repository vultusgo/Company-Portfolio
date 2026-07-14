import React from "react";
import { FiArrowRight, FiClock, FiMapPin, FiWifi, FiUsers } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  { icon: FiUsers, text: "Face Recognition — detects and verifies faces with 99% accuracy" },
  { icon: FiMapPin, text: "Geo-fencing — location-based attendance tracking" },
  { icon: FiWifi, text: "Offline Sync — works without internet, syncs automatically" },
  { icon: FiClock, text: "Auto Payroll — integrates attendance with payroll systems" },
];

const FeaturedProduct = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="featured-product"
      ref={ref}
      aria-label="Featured Product — AI Attendance System"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-500/10 to-transparent blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-500/10 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-block px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-400 uppercase mb-6">
                Featured Product
              </span>
            </div>

            <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              AI-Powered Facial Recognition
              <br />
              <span className="text-brand-400">Attendance System</span>
            </h2>

            <p className={`text-lg text-surface-400 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Our flagship product combines computer vision, edge computing,
              and cloud intelligence to deliver a seamless, accurate, and
              fraud-proof attendance tracking experience for organizations of
              all sizes.
            </p>

            <div className={`space-y-4 mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <feature.icon size={14} className="text-brand-400" />
                  </div>
                  <span className="text-sm text-surface-300">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                Explore Product
                <FiArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}>
            <div className="relative bg-surface-900 border border-surface-700 rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 px-6 py-4 bg-surface-900 border-b border-surface-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-surface-600 rounded-full opacity-60" />
                  <div className="w-3 h-3 bg-surface-500 rounded-full opacity-60" />
                  <div className="w-3 h-3 bg-surface-400 rounded-full opacity-60" />
                </div>
                <span className="text-xs text-surface-500 ml-3">Vultus Attendance — Dashboard</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Present Today", value: "847" },
                    { label: "On Leave", value: "23" },
                    { label: "Late Arrivals", value: "12" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-black/50 rounded-xl border border-surface-700/50">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-surface-500 uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-black/50 rounded-xl border border-surface-700/50 flex items-center justify-center min-h-[160px]">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-brand-500/20 flex items-center justify-center">
                        <div className="space-y-1 text-center">
                          <div className="w-4 h-4 rounded-full bg-brand-500/40 mx-auto" />
                          <div className="flex gap-3 justify-center">
                            <div className="w-2 h-2 rounded-full bg-brand-500/40" />
                            <div className="w-2 h-2 rounded-full bg-brand-500/40" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-gradient-shift rounded-full" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-400 rounded-full animate-pulse" />
                    <p className="text-[10px] text-brand-400 mt-4 text-center font-medium">Face Verified ✓</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] text-surface-500 uppercase tracking-wider font-medium">Recent Activity</p>
                  {[
                    { name: "Sarah Johnson", time: "09:01 AM", status: "On Time" },
                    { name: "Michael Chen", time: "08:47 AM", status: "Early" },
                    { name: "Priya Sharma", time: "09:15 AM", status: "Late" },
                  ].map((entry, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-surface-700/50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-surface-700 rounded-full flex items-center justify-center">
                          <span className="text-[10px] font-bold text-surface-300">
                            {entry.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-surface-200">{entry.name}</p>
                          <p className="text-[10px] text-surface-500">{entry.time}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                        entry.status === "On Time" ? "bg-brand-500/10 text-brand-400" :
                        entry.status === "Early" ? "bg-brand-500/10 text-brand-400" :
                        "bg-brand-500/10 text-brand-400"
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-500/20 to-brand-500/10 blur-[40px] rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-tr from-brand-400/20 to-transparent blur-[30px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;