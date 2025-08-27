import React, { useState } from "react";

interface TimerInputPorps {
  endTimeUTC : number;
} 

export const TimerCard : React.FC<TimerInputPorps> = ({endTimeUTC}) => {
  const [mins, setMins] = useState<number>()
  const [secs, setSecs] = useState<number>()
  setInterval(() => {
    let now = Date.now();
    now -= now%1000;
    now/=1000;
    if (now >= endTimeUTC) {
      setMins(0)
      setSecs(0)
    } else {
      const leftDuration = endTimeUTC - now;
      const leftMins = (leftDuration - leftDuration % 60) / 60;
      const leftSecs = leftDuration % 60;
      setMins(leftMins)
      setSecs(leftSecs)
    }
  }, 1000)
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm">Time Left</span>
      <span className="text-sm font-semibold">{mins}:{secs}</span>
    </div>
  )
}