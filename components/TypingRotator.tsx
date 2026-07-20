"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypingRotatorProps {
  phrases: readonly string[];
  prefix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

type Phase = "typing" | "deleting";

// Terminal-style typing effect: types a phrase, pauses, deletes it,
// then moves on to the next one in an infinite loop.
export default function TypingRotator({
  phrases,
  prefix = ">",
  typingSpeed = 75,
  deletingSpeed = 38,
  pauseMs = 1700,
}: TypingRotatorProps) {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) {
      return;
    }

    const current = phrases[index % phrases.length];
    let delay = typingSpeed;
    let next: () => void = () => setText(current.slice(0, text.length + 1));

    if (phase === "typing" && text.length === current.length) {
      delay = pauseMs;
      next = () => setPhase("deleting");
    } else if (phase === "deleting") {
      delay = deletingSpeed;
      if (text.length > 0) {
        next = () => setText(current.slice(0, text.length - 1));
      } else {
        next = () => {
          setIndex((previous) => (previous + 1) % phrases.length);
          setPhase("typing");
        };
      }
    }

    const timeout = window.setTimeout(next, delay);
    return () => window.clearTimeout(timeout);
  }, [text, phase, index, phrases, reduceMotion, typingSpeed, deletingSpeed, pauseMs]);

  const visibleText = reduceMotion ? (phrases[0] ?? "") : text;

  return (
    <p
      className="font-mono-tech text-base text-accent-green sm:text-lg"
      aria-label={`${prefix} ${phrases.join(", ")}`}
    >
      <span className="mr-2 text-text-muted">{prefix}</span>
      <span aria-hidden="true">{visibleText}</span>
      <span aria-hidden="true" className="animate-cursor-blink text-accent-cyan">
        ▊
      </span>
    </p>
  );
}
