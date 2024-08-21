'use client';

import {useEffect, useState} from 'react';

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 2, // Display milliseconds
    }));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          fractionalSecondDigits: 2, // Display milliseconds
        }));
      }, 1); // Update every millisecond
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section>
        <h1 className="mb-8 ml-1 tracking-tighter">{time}</h1>
      </section>
    );
  }