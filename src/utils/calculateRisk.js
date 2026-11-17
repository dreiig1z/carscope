const findingWeights = {
  good: 0,
  attention: 2,
  "red-flag": 4,
};

const zoneWeights = {
  exterior: 1,
  engine: 1.5,
  interior: 1.2,
  underbody: 1.5,
  "test-drive": 1.5,
  documents: 1.5,
};

export function calculateRisk(findings, checkpoints) {
  let score = 0;

  Object.entries(findings).forEach(([checkpointId, finding]) => {
    const checkpoint = checkpoints.find(
      (item) => item.id === checkpointId
    );

    if (!checkpoint) {
      return;
    }

    const baseWeight = findingWeights[finding] || 0;

    const zoneWeight =
      zoneWeights[checkpoint.zone] || 1;

    score += baseWeight * zoneWeight;
  });

  score = Math.round(score);

  if (score >= 15) {
    return {
      level: "High Attention",
      score,
      description:
        "Several important concerns were recorded. Consider having the vehicle inspected by a qualified mechanic before making a purchase.",
    };
  }

  if (score >= 7) {
    return {
      level: "Medium Attention",
      score,
      description:
        "Some findings may require further inspection or clarification before making a purchase.",
    };
  }

  return {
    level: "Low Attention",
    score,
    description:
      "Few concerning findings were recorded. Continue reviewing the inspection details before making a decision.",
  };
}