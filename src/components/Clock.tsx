import React, { useEffect, useState } from "react";
import parseMs from "parse-ms";

/**
 * Custom hook that kicks off a side effect to count down for the given duration
 *
 * @param duration Millisecond value for the duration of the countdown
 * @param tickRate Millisecond value for how often the countdown should update. Default 100ms
 *
 * @returns Milliseconds value representing the remaining time in the countdown
 */
function useCountdown(duration: number, tickRate: number = 100): number {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (remaining <= 0) {
        clearInterval(tickInterval);

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
}

export const Clock: React.FC<ClockProps> = ({ duration }) => {
  const remaining = useCountdown(duration);

  const parsed = parseMs(remaining);

  const padded = Object.entries(parsed).reduce(
    (acc, [key, value]) => {
      acc[key] = getPaddedStringFromNumber(value);

      return acc;
    },
    {} as any
  );

  return (
    <div>
      {padded.hours}:{padded.minutes}:{padded.seconds}:{padded.milliseconds}
    </div>
  );
};

function getPaddedStringFromNumber(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }

  return num.toString();
}
