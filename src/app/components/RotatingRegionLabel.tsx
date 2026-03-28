"use client";

import { useEffect, useRef, useState } from "react";

export const PLYNIUM_REGIONS = [
  "Europe",
  "Global",
  "North America",
  "Latin America",
  "Africa",
  "Asia",
  "China",
  "Oceania",
] as const;

const INTERVAL_MS = 3500;
const DELETE_MS = 40;
const TYPE_MS = 55;

type RotatingRegionLabelProps = {
  className?: string;
};

export function RotatingRegionLabel({ className }: RotatingRegionLabelProps) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const lastCompletedRef = useRef("");

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PLYNIUM_REGIONS.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const target = PLYNIUM_REGIONS[index];
    let buf = lastCompletedRef.current;
    let disposed = false;
    const timeouts: number[] = [];

    const after = (ms: number, fn: () => void) => {
      timeouts.push(
        window.setTimeout(() => {
          if (!disposed) fn();
        }, ms)
      );
    };

    const complete = () => {
      lastCompletedRef.current = target;
    };

    const stepDelete = () => {
      if (disposed) return;
      if (buf.length === 0) {
        stepType();
        return;
      }
      buf = buf.slice(0, -1);
      setDisplayedText(buf);
      after(DELETE_MS, stepDelete);
    };

    const stepType = () => {
      if (disposed) return;
      if (buf.length >= target.length) {
        complete();
        return;
      }
      buf = target.slice(0, buf.length + 1);
      setDisplayedText(buf);
      if (buf.length < target.length) {
        after(TYPE_MS, stepType);
      } else {
        complete();
      }
    };

    if (buf === target) {
      return () => {
        disposed = true;
        timeouts.forEach(clearTimeout);
      };
    }

    stepDelete();

    return () => {
      disposed = true;
      timeouts.forEach(clearTimeout);
    };
  }, [index]);

  return (
    <p className={className} aria-live="polite">
      {displayedText}
      <span className="ml-px inline-block w-[0.08em] animate-pulse font-light opacity-90" aria-hidden>
        |
      </span>
    </p>
  );
}
