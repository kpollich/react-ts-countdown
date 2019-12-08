import React, { useState } from "react";
import toMilliseconds from "@sindresorhus/to-milliseconds";
import { Form, Container, Header, Button } from "semantic-ui-react";

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
    <Container style={{ marginTop: 20 }}>
      <Header as="h1">Create a Countdown</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="hours">Hours</label>
          <Form.Input
            type="number"
            name="hours"
            value={hours}
            onChange={e => setHours(Number(e.target.value))}
          />
        </Form.Field>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <Form.Input
            type="number"
            name="minutes"
            value={minutes}
            onChange={e => setMinutes(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="seconds">Seconds</label>
          <Form.Input
            type="number"
            name="seconds"
            value={seconds}
            onChange={e => setSeconds(Number(e.target.value))}
          />
        </div>

        <Button type="submit" style={{ marginTop: 20 }}>
          Start Countdown
        </Button>
      </Form>

      {duration ? (
        <Container style={{ marginTop: 20 }}>
          <Clock
            duration={duration}
            onComplete={() => {
              alert("Countdown Complete");
              setDuration(null);
            }}
          />
          <Button onClick={() => setDuration(null)}>Cancel</Button>
        </Container>
      ) : null}
    </Container>
  );
};

export default App;
