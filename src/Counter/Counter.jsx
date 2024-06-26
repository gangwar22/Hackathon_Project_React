import { useEffect } from 'react';
import './Counter.css';

function Counter() {
  useEffect(() => {
    function counter(id, start, end, duration) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));
      const obj = document.getElementById(id);
      const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 0, 4615, 3000);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 4491, 3000);
  }, []);

  return (
    <div className="Counter">
      <div className="counters">
        <div className="counter-box">
          <div id="count1" className="counter"></div>
          <div className="label">SAVINGS</div>
        </div>
        <div className="counter-box">
          <div id="count2" className="counter"></div>
          <div className="label">PHOTOS</div>
        </div>
        <div className="counter-box">
          <div id="count3" className="counter"></div>
          <div className="label">ROCKETS</div>
        </div>
        <div className="counter-box">
          <div id="count4" className="counter"></div>
          <div className="label">GLOBES</div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
