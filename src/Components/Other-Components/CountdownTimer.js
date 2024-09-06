import React, { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "../../ThemeComponent/ThemeContext";

const CountdownTimer = ({ createdAt }) => {
  // const { theme } = useContext(ThemeContext);
  const calculateTimeLeft = () => {
    const now = new Date();
    const endTime = new Date(
      new Date(createdAt).getTime() + 48 * 60 * 60 * 1000
    );
    const difference = endTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        <>
          <p
            className="text-center text-dark"
          >
            <strong className="text-success">Auction ends in :</strong>
          </p>
          <table className="text-center table table-bordered">
            <tbody
              className="text-center text-dark"
            >
              <tr>
                {timerComponents.map((row) => (
                  <td>{row}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p
          className="text-center text-dark"
        >
          <strong className="text-danger">Auction Closed</strong>
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;