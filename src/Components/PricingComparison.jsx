import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import PricingCalculator from "./PricingCalculator";
import PricingTable from "./PricingTable";
import { pricing, marketPerYear, savingsPercent, formatINR } from "../data/attendanceProduct";

/** Pricing & value comparison. showTable adds the per-size table (product page). */
const PricingComparison = ({ showTable = false, id = "pricing" }) => (
  <section id={id} aria-labelledby={`${id}-heading`} className="section-y bg-white">
    <div className="container-x">
      <SectionHeader
        badge="Pricing"
        title={
          <span id={`${id}-heading`}>
            {formatINR(pricing.perUserPerYear)} per person, <span className="text-brand-700">per year.</span>
          </span>
        }
        subtitle={`Simple, predictable pricing: total annual cost = students or employees × ${formatINR(pricing.perUserPerYear)}. The market typically charges ${formatINR(pricing.market.perUserPerMonthMin)}–${formatINR(pricing.market.perUserPerMonthMax)} per person per month.`}
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        {/* Comparison */}
        <div className="grid gap-4">
          <div className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <p className="font-mono text-xs font-medium tracking-wider uppercase text-surface-600">
              Competitors / traditional market
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-surface-700">
              {formatINR(pricing.market.perUserPerMonthMin)}–{formatINR(pricing.market.perUserPerMonthMax)}
              <span className="text-base font-normal text-surface-600"> / person / month</span>
            </p>
            <p className="mt-1 text-surface-600">
              = {formatINR(marketPerYear.min)} – {formatINR(marketPerYear.max)} per person per year
            </p>
          </div>

          <div className="rounded-2xl border border-surface-800 bg-surface-950 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs font-medium tracking-wider uppercase text-brand-400">Vultus Go</p>
              <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-mono text-xs tracking-wider uppercase text-brand-400">
                Over 90% savings · {savingsPercent.min}–{savingsPercent.max}%
              </span>
            </div>
            <p className="mt-3 text-4xl font-bold tracking-tight text-white">
              {formatINR(pricing.perUserPerYear)}
              <span className="text-base font-normal text-surface-400"> / person / year</span>
            </p>
            <ul className="mt-5 space-y-2 text-sm text-surface-300">
              {["No per-month billing", "One transparent formula: people × ₹70", "Instant logging, liveness checks and automated alerts included"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <FiCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-400" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary btn-lg mt-6 w-full sm:w-auto">
              Request Live Demo
              <FiArrowRight size={18} className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <PricingCalculator />
      </div>

      {showTable && (
        <div className="mt-10">
          <PricingTable />
        </div>
      )}
      <p className="mt-6 text-center text-sm text-surface-600">
        Market range shown is indicative of typical per-user monthly pricing and varies by vendor.
      </p>
    </div>
  </section>
);

export default PricingComparison;
