const steps = [
  { name: "Market agent", does: "Collects prices and indicators" },
  { name: "Sentiment agent", does: "Reads the news and scores the mood" },
  { name: "Forecast agent", does: "Merges both into a prediction" },
  { name: "Report agent", does: "Writes it up for the dashboard" },
];

export default function AgentPipeline() {
  return (
    <div className="pipe" role="group" aria-label="How TradeFlux agents hand work to each other">
      <p className="pipe-title">Inside TradeFlux: one question, four agents</p>
      <ol className="pipe-row">
        {steps.map((s, i) => (
          <li key={s.name} className="node" style={{ animationDelay: `${i * 1.2}s` }}>
            <b>{s.name}</b>
            <span>{s.does}</span>
          </li>
        ))}
        <span className="pulse" aria-hidden="true" />
      </ol>
      <p className="pipe-end">Backtesting and admin roles sit on top, so every forecast can be checked against history.</p>
    </div>
  );
}
