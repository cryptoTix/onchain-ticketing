import React, { useState } from "react";

interface TimerInputPorps {
  endTimeUTC : number;
} 

export const TimerCard : React.FC<TimerInputPorps> = ({endTimeUTC}) => {
  const [mins, setMins] = useState<string>()
  const [secs, setSecs] = useState<string>()
  setInterval(() => {
    let now = Date.now();
    now -= now%1000;
    now/=1000;
    if (now >= endTimeUTC) {
      setMins("00")
      setSecs("00")
    } else {
      const leftDuration = endTimeUTC - now;
      const leftMins = (leftDuration - leftDuration % 60) / 60;
      const leftSecs = leftDuration % 60;
      setMins(leftMins < 10 ? "0" + leftMins.toString() : leftMins.toString())
      setSecs(leftSecs < 10? "0" + leftSecs.toString() : leftSecs.toString())
    }
  }, 1000)
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm">Time Left</div>
      <div className="text-sm font-semibold">{mins}:{secs}</div>
    </div>
  )
}