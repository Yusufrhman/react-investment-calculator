export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name=""
            id=""
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput(event.target.value, "initialInvestment")
            }
          />
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              name=""
              id=""
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChangeInput(event.target.value, "annualInvestment")
              }
            />
          </p>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name=""
            id=""
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput(event.target.value, "expectedReturn")
            }
          />
          <p>
            <label>Duration</label>
            <input
              type="number"
              name=""
              id=""
              required
              value={userInput.duration}
              onChange={(event) =>
                onChangeInput(event.target.value, "duration")
              }
            />
          </p>
        </p>
      </div>
    </section>
  );
}
