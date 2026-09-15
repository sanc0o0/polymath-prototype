import type { Metadata } from "next";
import Link from "next/link";
import AuditHeader from "@/components/audit/AuditHeader";
import AuditSection from "@/components/audit/AuditSection";
import ObservationCard from "@/components/audit/ObservationCard";
import QuestionCard from "@/components/audit/QuestionCard";
import UserJourney from "@/components/audit/UserJourney";
import ExperimentCard from "@/components/audit/ExperimentCard";
import PrototypeShowcase from "@/components/audit/PrototypeShowcase";
import AuditFooter from "@/components/audit/AuditFooter";

export const metadata: Metadata = {
  title: "Polymath Product Exploration | Sana Ansari",
  description:
    "An independent product exploration of Polymath, including first-session UX questions and a small interactive prototype.",
};

const observations = [
  {
    title: "Clear reason to exist",
    text: "Polymath has a simple idea behind it: use curiosity as an alternative to mindless scrolling. I understood the product without needing a long explanation.",
  },
  {
    title: "Breadth creates curiosity",
    text: "Moving between subjects such as astronomy, chess, backgammon and quantum physics gives the product a different feel from a conventional course platform.",
  },
  {
    title: "Visual learning fits the problem",
    text: "If the goal is to compete with highly visual entertainment, text-heavy lessons alone would be a weak fit. Visual explanations make more sense for the behavior Polymath is trying to encourage.",
  },
  {
    title: "Sessions can be small",
    text: "The idea does not require someone to decide that they are going to study for an hour. A useful learning session can start with one question and a few minutes.",
  },
];

const questions = [
  {
    question: "How quickly does a new user reach their first useful piece of learning?",
    explanation:
      "The first session probably has a limited attention budget. Every extra decision between opening the app and learning something is another opportunity to leave.",
  },
  {
    question: "Does a large range of subjects help discovery, or make the first choice harder?",
    explanation:
      "Breadth is part of the appeal. The question is whether a new user needs to see the whole range immediately.",
  },
  {
    question: "What gives someone a reason to open Polymath tomorrow?",
    explanation:
      "Learning something interesting can create a good first session. Retention may require another reason to return, such as continuing a topic, discovering something new, or having a small learning goal.",
  },
  {
    question: "How active should the learning experience be?",
    explanation:
      "Visual explanations can be consumed passively. A small interaction, question, prediction, or recall step might make the session more memorable. The right amount is something I would test rather than assume.",
  },
];

const journeySteps = [
  { label: "Open", note: "Give me a reason to start." },
  { label: "Discover", note: "Let me choose a direction." },
  { label: "Narrow", note: "Do some of the decision-making for me." },
  { label: "Learn", note: "Give me one useful idea." },
  { label: "Check", note: "Make me recall what I just learned." },
  { label: "Continue", note: "Give me an obvious next step." },
];

const lessonSteps = [
  { label: "Why don't planets just fly off into space?" },
  { label: "Gravity keeps redirecting it." },
  { label: "A constantly bending path becomes an orbit." },
];

const experiments = [
  {
    title: "Recommendation",
    question: "Does suggesting one topic increase the number of users who actually start a lesson?",
  },
  {
    title: "Surprise me",
    question: "Can removing the choice altogether make discovery easier?",
  },
  {
    title: "Continue learning",
    question: "After one lesson, does continuing the same subject feel more natural than starting from zero?",
  },
  {
    title: "Topic connections",
    question: "Would showing why two unrelated subjects connect make exploration more interesting?",
  },
  {
    title: "Return behavior",
    question: "What actually makes someone open the app again the next day?",
  },
  {
    title: "Lesson interaction",
    question: "Does a small recall question improve understanding compared with passive reading?",
  },
];

const whatILearned = [
  "Building the prototype forced me to think about the product before writing components.",
  "I had to decide what information belongs on each screen and what could be removed.",
  "I deliberately kept the implementation small: typed content, a simple screen state machine, reusable UI components, and no backend.",
  "The interesting part was not making six screens. It was deciding what should happen between them.",
  "I also chose to build the experiment as a mobile-first web prototype because it let me focus on the product behavior without introducing a new mobile stack.",
];

const limitations = [
  "This prototype has not been tested with real Polymath users.",
  "It does not tell us whether the proposed flow improves retention.",
  "It does not validate the content strategy.",
  "It does not test personalization.",
  "It does not measure whether the lesson format is actually more engaging.",
  "The questions above need user testing and product data.",
];

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-paper">
      <main className="mx-auto flex max-w-[680px] flex-col gap-16 px-6 py-14 sm:py-20">
        <AuditHeader />

        <AuditSection>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Polymath is trying to make learning feel like something you can reach for
            instead of scrolling.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            The interesting part is not simply that it teaches things. The product can
            move between very different subjects, from chess and astronomy to
            backgammon, investing, LLMs, art history and quantum physics. That breadth
            creates curiosity.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            The other important part is the format. The public positioning focuses on
            visual learning and short sessions rather than asking someone to commit to
            a traditional course.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            The product therefore seems to sit between two behaviors: passive scrolling
            for stimulation, and structured learning that usually requires more
            intention. The product opportunity I see is making the second behavior feel
            as easy to start as the first. This is my interpretation of the product,
            not an official description of it.
          </p>
        </AuditSection>

        <AuditSection heading="What happens after curiosity?">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            The landing page makes the broad idea easy to understand: replace scrolling
            with visual learning. But once someone opens the product, there is an
            interesting product question. A person can be curious about almost
            anything. That is a strength, but it can also create a decision problem.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            If I open an app because I want to learn something, I may not actually know
            what I want to learn. I might want something interesting, something
            useful, something surprising, something I can finish quickly, or something
            completely unrelated to what I was doing five minutes ago.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            One hypothesis I wanted to explore is whether the breadth of Polymath could
            create choice overload during the first session. The question I built the
            prototype around was: can Polymath reduce the number of decisions a new
            user has to make before they learn something?
          </p>
        </AuditSection>

        <AuditSection heading="What looks strong">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {observations.map((o) => (
              <ObservationCard key={o.title} title={o.title} text={o.text} />
            ))}
          </div>
        </AuditSection>

        <AuditSection heading="Questions worth testing">
          <div className="flex flex-col gap-7">
            {questions.map((q) => (
              <QuestionCard key={q.question} question={q.question} explanation={q.explanation} />
            ))}
          </div>
        </AuditSection>

        <AuditSection heading="The user journey I explored">
          <UserJourney steps={journeySteps} />
          <p className="text-[14px] leading-relaxed text-ink-soft">
            The prototype explores this as one possible first-session flow. It is not
            meant to represent the final Polymath product.
          </p>
        </AuditSection>

        <AuditSection heading="From hypothesis to prototype">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            I did not try to recreate Polymath. I wanted to build the smallest version
            of the idea I was testing.
          </p>
          <PrototypeShowcase />
        </AuditSection>

        <AuditSection heading="Why this example?">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            I chose astronomy because it demonstrates the kind of visual explanation I
            think fits the product well.
          </p>
          <UserJourney steps={lessonSteps} />
          <p className="text-[15px] leading-relaxed text-ink-soft">
            The goal was not to reproduce a textbook explanation. The goal was to take
            one question and make the explanation understandable in a few steps.
          </p>
        </AuditSection>

        <AuditSection heading="What I would test next">
          <p className="text-[14px] leading-relaxed text-ink-soft">
            These are experiments, not features Polymath needs to build.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {experiments.map((e) => (
              <ExperimentCard key={e.title} title={e.title} question={e.question} />
            ))}
          </div>
        </AuditSection>

        <AuditSection heading="What I learned from building it">
          <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-ink-soft">
            {whatILearned.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </AuditSection>

        <AuditSection heading="Technical notes">
          <p className="text-[14px] leading-relaxed text-ink-soft">
            Next.js, React, TypeScript, Tailwind CSS, and original SVG/CSS visuals.
            Vercel is the intended deployment target. No backend was needed for this
            experiment.
          </p>
          <ul className="flex flex-col gap-1.5 text-[14px] leading-relaxed text-ink-soft">
            <li>Static typed content</li>
            <li>Simple screen-based state</li>
            <li>Reusable UI components</li>
            <li>No backend required for this experiment</li>
          </ul>
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-signal underline decoration-signal/30 underline-offset-4 transition-colors hover:decoration-signal"
          >
            View prototype
          </Link>
        </AuditSection>

        <AuditSection heading="What this does not answer">
          <ul className="flex flex-col gap-2 rounded-2xl bg-ink/[0.03] p-5 text-[14px] leading-relaxed text-ink-soft">
            {limitations.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </AuditSection>

        <AuditFooter />
      </main>
    </div>
  );
}
