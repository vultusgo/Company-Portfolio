import { useState } from "react";
import { pricing, calculateCosts, formatINR } from "../data/attendanceProduct";

/** Interactive: Total Annual Cost = people × ₹70, compared with the market range. */
const PricingCalculator = () => {
  const [people, setPeople] = useState(500);
  const costs = calculateCosts(people);

  const onNumber = (e) => {
    const v = parseInt(e.target.value.replace(/\D/g, ""), 10);
    setPeople(Number.isNaN(v) ? 0 : Math.min(v, 1_000_000));
  };

  return (
    <div className="card-glow p-6 sm:p-8">
      <h3 className="text-xl font-bold tracking-tight text-surface-950">Calculate your annual cost</h3>
      <p className="mt-1 text-sm text-surface-600">
        Total annual cost = total students / employees × {formatINR(pricing.perUserPerYear)} per year.
      </p>

      <div className="mt-6">
        <label htmlFor="people-count" className="block text-sm font-medium text-surface-800">
          Number of students / employees
        </label>
        <input
          id="people-count"
          type="text"
          inputMode="numeric"
          value={people === 0 ? "" : people.toLocaleString("en-IN")}
          onChange={onNumber}
          className="mt-2 w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-lg font-semibold text-surface-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        />
        <input
          type="range"
          min={50}
          max={10000}
          step={50}
          value={Math.min(Math.max(people, 50), 10000)}
          onChange={(e) => setPeople(Number(e.target.value))}
          aria-label="Adjust number of students or employees"
          className="mt-4 w-full accent-brand-600"
        />
        <div className="flex justify-between font-mono text-xs text-surface-600">
          <span>50</span>
          <span>10,000+</span>
        </div>
      </div>

      <dl className="mt-6 space-y-3" aria-live="polite">
        <div className="flex items-baseline justify-between rounded-xl bg-surface-950 px-4 py-3">
          <dt className="text-sm text-surface-300">Vultus Go / year</dt>
          <dd className="text-2xl font-bold text-white">{formatINR(costs.ours)}</dd>
        </div>
        <div className="flex items-baseline justify-between rounded-xl border border-surface-200 bg-surface-50 px-4 py-3">
          <dt className="text-sm text-surface-700">Typical market / year</dt>
          <dd className="font-semibold text-surface-700">
            {formatINR(costs.marketMin)} – {formatINR(costs.marketMax)}
          </dd>
        </div>
        <div className="flex items-baseline justify-between rounded-xl border border-brand-200 bg-brand-50 px-4 py-3">
          <dt className="text-sm font-medium text-brand-800">You save</dt>
          <dd className="font-bold text-brand-700">
            {formatINR(costs.saveMin)} – {formatINR(costs.saveMax)}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default PricingCalculator;
