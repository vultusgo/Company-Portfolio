import { Link } from "react-router-dom";
import { FiArrowRight, FiBell, FiShield, FiWifiOff, FiZap } from "react-icons/fi";
import VideoFrame from "./VideoFrame";
import { productRoute, productVideos, pricing, formatINR } from "../data/attendanceProduct";

const bullets = [
  { icon: FiZap, text: "Real-time face recognition marks attendance in an instant" },
  { icon: FiShield, text: "Liveness / anti-spoofing blocks photos and screen replays" },
  { icon: FiBell, text: "SMS / WhatsApp alerts to parents or HR, automatically" },
  { icon: FiWifiOff, text: "Offline-capable, with low hardware requirements" },
];

/** Home: flagship product block with compact promo video. */
const FeaturedProduct = () => (
  <section
    id="featured-product"
    aria-labelledby="featured-product-heading"
    className="section-y bg-surface-950"
  >
    <div className="container-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="badge-mono !bg-brand-500/10 !border-brand-500/30 !text-brand-400">Flagship product</span>
          <h2
            id="featured-product-heading"
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white"
          >
            AI Facial Recognition <span className="text-brand-400">Attendance System</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-surface-400">
            Replace registers, cards and fingerprints with contactless attendance for
            schools, colleges, offices and factories, at {formatINR(pricing.perUserPerYear)} per person per year.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-surface-300">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Icon size={14} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request Live Demo
              <FiArrowRight size={18} className="btn-arrow" aria-hidden="true" />
            </Link>
            <Link to={productRoute} className="btn btn-ghost-dark btn-lg">
              View product details
            </Link>
          </div>
        </div>

        <VideoFrame
          url={productVideos.promo.url}
          title={productVideos.promo.title}
          poster={productVideos.promo.poster}
          caption="Quick overview of the system in action."
        />
      </div>
    </div>
  </section>
);

export default FeaturedProduct;
