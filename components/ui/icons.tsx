import type { CategoryId } from "@/lib/types";

interface IconProps {
  className?: string;
}

// --- Category chip icons -----------------------------------------------
// One consistent line-art language across all five: currentColor stroke,
// ~1.4 weight, rounded caps. Abstract motifs, not literal emoji stand-ins.

function ScienceGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse
        cx="12"
        cy="12"
        rx="8.6"
        ry="4.4"
        transform="rotate(-15 12 12)"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeDasharray="1.6 2.6"
      />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <circle cx="19.3" cy="10.3" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TechnologyGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h4M15 12h4M12 5v4M12 15v4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="5" r="1" fill="currentColor" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}

function MindGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path
        d="M12 4.8v3M12 16.2v3M19.2 12h-3M7.8 12h-3M17.1 6.9l-2.1 2.1M9 15.1l-2.1 2.1M17.1 17.1l-2.1-2.1M9 8.9L6.9 6.9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeopleGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="7.2" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.8" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="16.6" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9 10.6L10.5 14.6M15 10.6L13.5 14.6M9.4 9H14.6"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function SkillsGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="6"
        y="15"
        width="12"
        height="3"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <rect
        x="7.4"
        y="10.5"
        width="9.2"
        height="3"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <rect
        x="8.8"
        y="6"
        width="6.4"
        height="3"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

const categoryGlyphs: Record<CategoryId, (props: IconProps) => React.JSX.Element> = {
  science: ScienceGlyph,
  technology: TechnologyGlyph,
  mind: MindGlyph,
  people: PeopleGlyph,
  skills: SkillsGlyph,
};

export function CategoryIcon({ id, className }: { id: CategoryId } & IconProps) {
  const Glyph = categoryGlyphs[id];
  return <Glyph className={className} />;
}

// --- Subject illustrations ----------------------------------------------
// Slightly larger and more detailed than the category chips, but the
// same restrained single-stroke language. Only the three prototype
// subjects have a bespoke illustration; anything else falls back to a
// plain dot rather than pretending to have content.

function AstronomyIllustration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse
        cx="32"
        cy="32"
        rx="23"
        ry="9.5"
        transform="rotate(-18 32 32)"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="2.5 4"
      />
      <circle cx="32" cy="32" r="4.6" fill="currentColor" />
      <circle cx="52.5" cy="21.5" r="2.4" fill="currentColor" />
    </svg>
  );
}

function QuantumIllustration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      <ellipse
        cx="32"
        cy="32"
        rx="21"
        ry="8.5"
        transform="rotate(22 32 32)"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="21"
        ry="8.5"
        transform="rotate(-38 32 32)"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="13.5" cy="26.5" r="1.8" fill="currentColor" />
      <circle cx="49" cy="39.5" r="1.8" fill="currentColor" />
    </svg>
  );
}

function EvolutionIllustration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 54V38M32 38L19 25M32 38L45 25M19 25V13M45 25V13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="54" r="2.1" fill="currentColor" />
      <circle cx="19" cy="13" r="2.1" fill="currentColor" />
      <circle cx="45" cy="13" r="2.1" fill="currentColor" />
    </svg>
  );
}

function GenericSubjectIllustration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

const subjectIllustrations: Record<string, (props: IconProps) => React.JSX.Element> = {
  astronomy: AstronomyIllustration,
  "quantum-physics": QuantumIllustration,
  evolution: EvolutionIllustration,
};

export function SubjectIllustration({ id, className }: { id: string } & IconProps) {
  const Illustration = subjectIllustrations[id] ?? GenericSubjectIllustration;
  return <Illustration className={className} />;
}

// --- Small UI glyphs ------------------------------------------------------

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.3 12.3l2.4 2.4 5-5.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.3 9.3l5.4 5.4M14.7 9.3l-5.4 5.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c.5 3.3 1.9 4.7 5.2 5.2-3.3.5-4.7 1.9-5.2 5.2-.5-3.3-1.9-4.7-5.2-5.2 3.3-.5 4.7-1.9 5.2-5.2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14.5c.25 1.5.9 2.15 2.4 2.4-1.5.25-2.15.9-2.4 2.4-.25-1.5-.9-2.15-2.4-2.4 1.5-.25 2.15-.9 2.4-2.4z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
