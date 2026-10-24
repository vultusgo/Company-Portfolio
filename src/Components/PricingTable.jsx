import { exampleSizes, calculateCosts, formatINR } from "../data/attendanceProduct";

/** Static, transparent pricing table for common organisation sizes. */
const PricingTable = () => (
  <div className="card-glow overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">Annual cost by organisation size: Vultus Go versus typical market pricing</caption>
        <thead className="bg-surface-50 text-surface-700">
          <tr>
            <th scope="col" className="px-5 py-4 font-semibold">Organisation</th>
            <th scope="col" className="px-5 py-4 font-semibold">People</th>
            <th scope="col" className="px-5 py-4 font-semibold text-brand-700">Vultus Go / year</th>
            <th scope="col" className="px-5 py-4 font-semibold">Typical market / year</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-200">
          {exampleSizes.map(({ label, people }) => {
            const c = calculateCosts(people);
            return (
              <tr key={label}>
                <th scope="row" className="px-5 py-4 font-medium text-surface-900">{label}</th>
                <td className="px-5 py-4 text-surface-700">{people.toLocaleString("en-IN")}</td>
                <td className="px-5 py-4 font-bold text-brand-700">{formatINR(c.ours)}</td>
                <td className="px-5 py-4 text-surface-600">{formatINR(c.marketMin)} – {formatINR(c.marketMax)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default PricingTable;
