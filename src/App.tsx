import React, { useState } from "react";
import toMilliseconds from "@sindresorhus/to-milliseconds";

import { Clock } from "./components/Clock";

const App: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [duration, setDuration] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setDuration(toMilliseconds({ hours, minutes, seconds }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            name="hours"
            min="0"
            value={hours}
            onChange={e => setHours(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <input
            type="number"
            name="minutes"
            min="0"
            value={minutes}
            onChange={e => setMinutes(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="seconds">Seconds</label>
          <input
            type="number"
            name="seconds"
            min="0"
            value={seconds}
            onChange={e => setSeconds(Number(e.target.value))}
          />
        </div>

        <button type="submit">Start Countdown</button>
      </form>

      {duration ? (
        <>
          <Clock duration={duration} />
          <button onClick={() => setDuration(null)}>Cancel</button>
        </>
      ) : null}
    </div>
  );
};

export default App;
