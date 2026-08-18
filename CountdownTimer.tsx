import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  variant?: 'badge' | 'card' | 'compact';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours = 0,
  initialMinutes = 53,
  initialSeconds = 14,
  variant = 'card'
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Total seconds calculation: 00h : 53m : 14s = 53 * 60 + 14 = 3194 seconds
    return initialHours * 3600 + initialMinutes * 60 + initialSeconds;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Keep a small psychological buffer of 12-15 minutes if it hits 0
          return 53 * 60 + 14;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (num: number) => String(num).padStart(2, '0');

  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-1 font-mono font-bold text-red-600 tracking-wider">
        <span>{pad(hours)}</span>:
        <span>{pad(minutes)}</span>:
        <span>{pad(seconds)}</span>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
        <span>Termina en:</span>
        <span className="font-mono font-black text-red-600">
          {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-3">
      {/* Hours */}
      <div className="flex flex-col items-center bg-gray-900 text-white rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 min-w-[70px] sm:min-w-[85px] shadow-xs border border-gray-800">
        <span className="font-mono text-2xl sm:text-3xl font-black text-amber-400 leading-tight">
          {pad(hours)}
        </span>
        <span className="text-[10px] sm:text-xs tracking-wider text-gray-400 font-bold uppercase">
          HORAS
        </span>
      </div>

      <span className="text-xl sm:text-2xl font-black text-gray-400 animate-pulse">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center bg-gray-900 text-white rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 min-w-[70px] sm:min-w-[85px] shadow-xs border border-gray-800">
        <span className="font-mono text-2xl sm:text-3xl font-black text-amber-400 leading-tight">
          {pad(minutes)}
        </span>
        <span className="text-[10px] sm:text-xs tracking-wider text-gray-400 font-bold uppercase">
          MINUTOS
        </span>
      </div>

      <span className="text-xl sm:text-2xl font-black text-gray-400 animate-pulse">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center bg-gray-900 text-white rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 min-w-[70px] sm:min-w-[85px] shadow-xs border border-gray-800">
        <span className="font-mono text-2xl sm:text-3xl font-black text-red-400 leading-tight">
          {pad(seconds)}
        </span>
        <span className="text-[10px] sm:text-xs tracking-wider text-gray-400 font-bold uppercase">
          SEGUNDOS
        </span>
      </div>
    </div>
  );
};
