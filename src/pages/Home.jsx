import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">USED-CAR INSPECTION COMPANION</p>

            <h1>
              Know what you're
              <br />
              <span>buying.</span>
            </h1>

            <p className="hero-description">
              CarScope helps you inspect a used car step by step,
              record what you notice, and organize important findings
              before you make a decision.
            </p>

            <button
              className="primary-button"
              onClick={() => {
                window.location.href = "/experience";
              }}
            >
              Start an Inspection
            </button>

            <p className="hero-note">
              A simple inspection companion for smarter used-car decisions.
            </p>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <p className="hero-label">INSPECT WITH CONFIDENCE</p>

            <h2>
              Don't just look at the car.
              <br />
              Know what to look for.
            </h2>

            <p>
              CarScope breaks the inspection into simple checkpoints,
              helping you notice details that are easy to overlook.
            </p>
          </div>

          <div className="feature-grid">
            <FeatureCard
              icon="✓"
              title="Follow a Clear Checklist"
              description="Move through the vehicle zone by zone, so you know what to inspect without feeling overwhelmed."
            />

            <FeatureCard
              icon="📷"
              title="Keep Your Findings"
              description="Save notes and photo evidence as you go, giving you a record of what you actually observed."
            />

            <FeatureCard
              icon="⚠"
              title="Know What Needs Attention"
              description="Organize your findings and see which areas deserve a closer look before you make a decision."
            />
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <p className="hero-label">WHY CARSCOPE?</p>

            <h2>
              A better way to
              <br />
              inspect a used car.
            </h2>

            <p>
              Buying a used car is more than checking how it looks or finding
              a price you like. CarScope gives you a structured way to go
              through the important areas, record what you notice, and review
              your findings before making a decision.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;