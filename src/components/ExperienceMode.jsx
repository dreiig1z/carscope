function ExperienceMode({ onSelect }) {
  return (
    <main className="experience-page">
      <div className="experience-content">

        <h1>
          How familiar are you
          <br />
          <span>with cars?</span>
        </h1>

        <p className="experience-description">
          Choose how you'd like CarScope to guide you through the
          inspection. You can always change your approach later.
        </p>

        <div className="experience-options">
          <button
            className="experience-card"
            onClick={() => onSelect("beginner")}
          >
            <div className="experience-icon"></div>

            <div>
              <h2>Beginner Mode</h2>

              <p>
                New to inspecting cars? We'll guide you step by step,
                explain what to look for, and help you understand what
                your findings mean.
              </p>

              <span className="experience-link">
                Guide me through it →
              </span>
            </div>
          </button>

          <button
            className="experience-card"
            onClick={() => onSelect("experienced")}
          >
            <div className="experience-icon"></div>

            <div>
              <h2>Experienced Mode</h2>

              <p>
                Already familiar with cars? Get a more concise
                inspection with technical checkpoints and less guidance.
              </p>

              <span className="experience-link">
                Keep it concise →
              </span>
            </div>
          </button>
        </div>

        <p className="experience-note">
          Not sure which to choose? Start with Beginner Mode.
        </p>
      </div>
    </main>
  );
}

export default ExperienceMode;