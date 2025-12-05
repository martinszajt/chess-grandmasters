import React, { useState, useEffect } from "react";
import { formatElapsedHHMMSS, getElapsed } from "../../../utils/date";

interface OnlineClockProps {
  date: Date;
}

const OnlineClock = ({ date }: OnlineClockProps) => {
  const [elapsed, setElapsed] = useState<number>(getElapsed(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(getElapsed(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return <span>{formatElapsedHHMMSS(elapsed)}</span>;
};

export default OnlineClock;
