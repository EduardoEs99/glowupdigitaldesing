import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { STATS } from '../constants';

type ParsedValue =
  | {
      animatable: true;
      target: number;
      prefix: string;
      suffix: string;
    }
  | {
      animatable: false;
      raw: string;
    };

const parseStatValue = (value: string): ParsedValue => {
  const trimmed = value.trim();

  const plusPercentMatch = trimmed.match(/^(\+)?(\d+)(%)?$/);
  if (plusPercentMatch) {
    const prefix = plusPercentMatch[1] ?? '';
    const target = Number(plusPercentMatch[2]);
    const suffix = plusPercentMatch[3] ?? '';
    return { animatable: true, target, prefix, suffix };
  }

  const slashMatch = trimmed.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (slashMatch) {
    const target = Number(slashMatch[1]);
    const suffix = `/${slashMatch[2]}`;
    return { animatable: true, target, prefix: '', suffix };
  }

  return { animatable: false, raw: trimmed };
};

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const [display, setDisplay] = useState(() =>
    parsed.animatable ? `${parsed.prefix}0${parsed.suffix}` : parsed.raw
  );
  const rafRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (!parsed.animatable) {
      return;
    }

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const start = performance.now();
    const durationMs = 800;

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const nextValue = Math.round(parsed.target * progress);
      setDisplay(`${parsed.prefix}${nextValue}${parsed.suffix}`);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    setDisplay(`${parsed.prefix}0${parsed.suffix}`);
    rafRef.current = requestAnimationFrame(step);
  }, [parsed]);

  useEffect(() => {
    if (!parsed.animatable) {
      return;
    }

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const start = performance.now();
    const durationMs = 900;

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const nextValue = Math.round(parsed.target * progress);
      setDisplay(`${parsed.prefix}${nextValue}${parsed.suffix}`);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [parsed]);

  return (
    <div
      className="text-center group cursor-default"
      onMouseEnter={startAnimation}
    >
      <div className="text-3xl md:text-5xl font-bold text-gradient mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
        {display}
      </div>
      <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-20 border-y border-white/5 bg-surface/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
