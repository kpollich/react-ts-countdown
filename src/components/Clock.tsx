import React, { useEffect, useState } from "react";
import parseMs from "parse-ms";
import { padParsedMsValues } from "../utils/pad-parsed-ms-values";
import { Container } from "semantic-ui-react";

/**
 * Custom hook that kicks off a side effect to count down for the given duration
 *
 * @param duration Millisecond value for the duration of the countdown
 * @param tickRate Millisecond value for how often the countdown should update. Default 100ms
 * @param onComplete Callback function executed when the countdown finishes
 *
 * @returns Milliseconds value representing the remaining time in the countdown
 */
function useCountdown(
  duration: number,
  tickRate: number = 100,
  onComplete: () => void
): number {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (remaining <= 0) {
        clearInterval(tickInterval);
        onComplete();

        return;
      }

      setRemaining(remaining - tickRate);
    }, tickRate);

    return () => clearInterval(tickInterval);
  });

  return remaining;
}

interface ClockProps {
  duration: number;
  onComplete: () => void;
}

export const Clock: React.FC<ClockProps> = ({ duration, onComplete }) => {
  const remaining = useCountdown(duration, 100, onComplete);

  const parsed = parseMs(remaining);
  const padded = padParsedMsValues(parsed);

  return (
    <Container>
      {padded.hours}:{padded.minutes}:{padded.seconds}:{padded.milliseconds}
    </Container>
  );
};
