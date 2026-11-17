const guideSections = [
  {
    title: "Before the Inspection",
    tips: [
      "Research the vehicle's typical market price before meeting the seller.",
      "Ask for the vehicle's basic documents and service history.",
      "Avoid making a purchase decision based only on appearance.",
    ],
  },

  {
    title: "Flood Damage Warning Signs",
    tips: [
      "Look for unusual dampness, stains, or musty smells inside the vehicle.",
      "Check accessible areas for unusual rust or corrosion.",
      "Look for signs of water exposure around carpets and other visible interior areas.",
      "Compare the condition of the interior with the vehicle's claimed age and mileage.",
    ],
  },

  {
    title: "Mileage and Wear",
    tips: [
      "Compare the claimed mileage with the visible wear of the steering wheel, pedals, seats, and other frequently used areas.",
      "Ask to see available maintenance or service records.",
      "Be cautious when the vehicle's condition does not seem consistent with the reported mileage.",
    ],
  },

  {
    title: "Documents to Review",
    tips: [
      "Review the available OR/CR information.",
      "Check whether the vehicle identification information matches the documents.",
      "Review the deed of sale and ownership information.",
      "Ask about any existing encumbrance or financing arrangement.",
      "Verify important vehicle information through the appropriate official channels.",
    ],
  },

  {
    title: "Before You Decide",
    tips: [
      "Review all red flags and attention findings from your inspection.",
      "Ask the seller about anything you could not verify.",
      "Consider having a qualified mechanic perform a professional inspection.",
      "Do not rush into a purchase just because the seller is offering a limited-time deal.",
    ],
  },
];

function BuyersGuide() {
  return (
    <main className="guide-page">
      <div className="guide-container">
        <p className="hero-label">BUYER'S GUIDE</p>

        <h1>Know what to look for.</h1>

        <p className="page-description">
          A quick reference for first-time used-car buyers
          before, during, and after an inspection.
        </p>

        <div className="guide-list">
          {guideSections.map((section) => (
            <section
              className="guide-section"
              key={section.title}
            >
              <h2>{section.title}</h2>

              <ul>
                {section.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="guide-disclaimer">
          <strong>Remember:</strong>

          <p>
            CarScope is an inspection aid. It does not replace
            professional mechanical inspection, official
            document verification, or legal advice.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BuyersGuide;