interface LessonIllustrationProps {
  visualKey: string;
  className?: string;
  animated?: boolean;
}

// Three visual keys map to the three lesson steps. "orbit-loop" is also
// reused in static form as the Recommendation screen's preview, so the
// same visual "pays off" with motion once the user reaches the lesson's
// final step rather than being shown twice.
export default function LessonIllustration({
  visualKey,
  className,
  animated = true,
}: LessonIllustrationProps) {
  switch (visualKey) {
    case "straight-line-drift":
      return <StraightLineDrift className={className} />;
    case "gravity-bend":
      return <GravityBend className={className} />;
    case "orbit-loop":
      return <OrbitLoop className={className} animated={animated} />;
    default:
      return null;
  }
}

// STEP 1 — an object moving in a straight line, nothing bending it yet.
function StraightLineDrift({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" fill="none" className={className} aria-hidden="true">
      <line
        x1="28"
        y1="80"
        x2="248"
        y2="80"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="4 6"
        className="text-ink/25"
      />
      <path
        d="M248 80L236 73M248 80L236 87"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-ink/25"
      />
      <circle cx="108" cy="80" r="9" fill="currentColor" className="text-ink" />
      <path
        d="M122 80L146 80M146 80L138 74M146 80L138 86"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-signal"
      />
    </svg>
  );
}

// STEP 2 — forward motion (ink arrow) and the Sun's pull (signal arrow)
// acting on the planet at once; a short dashed arc hints at the bend
// this combination produces.
function GravityBend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M170 60Q228 92 203 152"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="3 5"
        className="text-ink/25"
        fill="none"
      />
      <circle cx="78" cy="122" r="19" fill="#FBE7C6" stroke="currentColor" strokeWidth="1" className="text-ink/20" />
      <circle cx="170" cy="60" r="8" fill="currentColor" className="text-ink" />
      <path
        d="M179 55L208 44M208 44L197 42M208 44L202 52"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink"
      />
      <path
        d="M162 68L104 108M104 108L115 105M104 108L109 118"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-signal"
      />
    </svg>
  );
}

// STEP 3 — the full orbit: dashed ellipse track, Sun at the focus, and
// (when animated) the planet continuously travelling the path via a
// CSS motion-path animation defined in globals.css. Respects
// prefers-reduced-motion there, not here — this component doesn't
// branch on it, so server/client markup always matches.
const ORBIT_PATH = "M 40 100 A 110 45 0 1 0 260 100 A 110 45 0 1 0 40 100";

function OrbitLoop({ className, animated }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 300 200" fill="none" className={className} aria-hidden="true">
      <ellipse
        cx="150"
        cy="100"
        rx="110"
        ry="45"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="3 5"
        className="text-ink/35"
      />
      <circle cx="150" cy="100" r="15" fill="#FBE7C6" stroke="currentColor" strokeWidth="1" className="text-ink/20" />
      {animated ? (
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="currentColor"
          className="text-ink animate-orbit-travel"
          style={{ offsetPath: `path('${ORBIT_PATH}')` }}
        />
      ) : (
        <circle cx="256" cy="96" r="7" fill="currentColor" className="text-ink" />
      )}
    </svg>
  );
}
