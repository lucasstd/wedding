import React from 'react';
import Countdown, { zeroPad, CountdownRenderProps } from 'react-countdown';

interface CountdownProps {
  targetDate: string;
}

const CountdownComponent: React.FC<CountdownProps> = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <h2>Time's up!</h2>;
    } else {
      return (
        <div className="countdown">
          <div className="countdown-element">
            <span>{zeroPad(days)}</span> Days
          </div>
          <div className="countdown-element">
            <span>{zeroPad(hours)}</span> Hours
          </div>
          <div className="countdown-element">
            <span>{zeroPad(minutes)}</span> Minutes
          </div>
          <div className="countdown-element">
            <span>{zeroPad(seconds)}</span> Seconds
          </div>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={new Date(targetDate)}
      renderer={renderer}
    />
  );
};

export default CountdownComponent;
