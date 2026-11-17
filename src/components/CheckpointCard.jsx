function CheckpointCard({
  checkpoint,
  completed,
  finding,
  note,
  photo,
  inspectionMode,
  onToggle,
  onFindingChange,
  onNoteChange,
  onPhotoChange,
}) {
  const isBeginner = inspectionMode === "beginner";

  return (
    <div
      className={`checkpoint-card ${
        completed ? "completed" : ""
      }`}
    >
      <div className="checkpoint-number">
        {completed ? "✓" : "•"}
      </div>

      <div className="checkpoint-content">
        <h3>{checkpoint.title}</h3>

        <p>{checkpoint.description}</p>

        {!isBeginner && checkpoint.technical && (
          <div className="technical-guidance">
            <strong>Technical Check</strong>
            <p>{checkpoint.technical}</p>
          </div>
        )}

        {isBeginner && checkpoint.beginner && (
          <div className="beginner-guidance">
            <div className="guidance-section">
              <h4> What to look for</h4>
              <p>{checkpoint.beginner.whatToLookFor}</p>
            </div>

            {checkpoint.beginner.tip && (
              <div className="guidance-tip">
                <strong> Beginner tip</strong>
                <p>{checkpoint.beginner.tip}</p>
              </div>
            )}

            {checkpoint.beginner.warning && (
              <div className="guidance-warning">
                <strong> Keep in mind</strong>
                <p>{checkpoint.beginner.warning}</p>
              </div>
            )}
          </div>
        )}

        <div className="finding-options">
          <button
            type="button"
            className={`finding-button good ${
              finding === "good" ? "selected" : ""
            }`}
            onClick={() => onFindingChange(checkpoint.id, "good")}
          >
            Good
          </button>

          <button
            type="button"
            className={`finding-button attention ${
              finding === "attention" ? "selected" : ""
            }`}
            onClick={() =>
              onFindingChange(checkpoint.id, "attention")
            }
          >
            Needs Attention
          </button>

          <button
            type="button"
            className={`finding-button red-flag ${
              finding === "red-flag" ? "selected" : ""
            }`}
            onClick={() =>
              onFindingChange(checkpoint.id, "red-flag")
            }
          >
            Immediate Attention
          </button>
        </div>

        {isBeginner && finding && (
          <div className="finding-explanation">
            {finding === "good" && (
              <>
                <strong>Good</strong>
                <p>
                  Nothing unusual was noticed during this checkpoint.
                  You can continue to the next area.
                </p>
              </>
            )}

            {finding === "attention" && (
              <>
                <strong>Needs Attention</strong>
                <p>
                  You noticed something that may need a closer look.
                  Record what you observed and consider asking the seller
                  or a qualified mechanic about it.
                </p>
              </>
            )}

            {finding === "red-flag" && (
              <>
                <strong>Immediate Attention</strong>
                <p>
                  You noticed something potentially serious. Record the
                  details and consider having the vehicle checked by a
                  qualified mechanic before making a decision.
                </p>
              </>
            )}
          </div>
        )}

        {isBeginner && (
          <p className="finding-help">
            Not sure? Choose the option that best matches what you
            observed. You can add more details below.
          </p>
        )}

        <div className="checkpoint-notes">
          <label htmlFor={`note-${checkpoint.id}`}>
            Notes
          </label>

          <textarea
            id={`note-${checkpoint.id}`}
            value={note || ""}
            onChange={(event) =>
              onNoteChange(checkpoint.id, event.target.value)
            }
            placeholder={
              isBeginner
                ? "Example: I noticed a small stain near the engine area..."
                : "Add an observation or note..."
            }
            rows="3"
          />
        </div>

        <div className="checkpoint-photo">
          <label htmlFor={`photo-${checkpoint.id}`}>
            Photo Evidence
          </label>

          {isBeginner && (
            <p className="photo-guidance">
              Take a photo if you notice something unusual. This gives you
              a record that you can review later or show to a qualified
              mechanic.
            </p>
          )}

          <input
            id={`photo-${checkpoint.id}`}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(event) =>
              onPhotoChange(checkpoint.id, event)
            }
          />

          {photo && (
            <img
              src={photo}
              alt={`Evidence for ${checkpoint.title}`}
              className="checkpoint-photo-preview"
            />
          )}
        </div>

        {isBeginner && !completed && (
          <p className="completion-guidance">
            Mark this checkpoint as checked after you have finished
            observing this area and recorded anything you noticed.
          </p>
        )}

        <button
          type="button"
          className="checkpoint-button"
          onClick={() => onToggle(checkpoint.id)}
        >
          {completed ? "Completed" : "Mark as Checked"}
        </button>

        {completed && (
          <>
            <p className="checkpoint-complete-message">
              Checkpoint recorded successfully.
            </p>

            {isBeginner &&
              (finding === "attention" || finding === "red-flag") && (
                <div className="professional-check">
                  <strong>Consider a professional inspection</strong>

                  <p>
                    Since you marked this checkpoint as{" "}
                    {finding === "attention"
                      ? "Needs Attention"
                      : "Immediate Attention"}
                    , consider asking a qualified mechanic to take a
                    closer look before making a purchase decision.
                  </p>
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
}

export default CheckpointCard;