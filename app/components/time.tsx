'use client';

import {useEffect, useState} from 'react';

export default function Time() {
  const [time, setTime] = useState<string | null>(null); // Initialize time as null in order to prevent hydration mismatch between client and server
  
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
  
    if (!time) { //If time is null, display loading...
      return (
        <section>
          <h1 className="mb-8 tracking-tighter">Loading...</h1>
        </section>
      )
    }

    return (
      <section>
        <h1 className="mb-8 tracking-tighter">{time}</h1>
      </section>
    );
  }