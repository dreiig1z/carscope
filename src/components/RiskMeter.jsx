function RiskMeter({ risk }) {
  return (
    <div className="risk-meter">
      <p className="risk-label">INSPECTION ASSESSMENT</p>

      <h2>{risk.level}</h2>

      <p className="risk-score">
        Attention Score: {risk.score}
      </p>

      <p className="risk-description">
        {risk.description}
      </p>
    </div>
  );
}

export default RiskMeter;