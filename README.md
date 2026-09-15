# Polymath Product Exploration & Prototype

An independent look at the first-use experience of Polymath, an unreleased app
by Andrew Codesmith. This includes a short written product exploration and a
small working prototype of one possible first-session flow.

## What this is

This is an independent exploration based on publicly available information
about Polymath, its landing page, and its public social presence. It is not
official Polymath research, and it is not built from any internal knowledge
of the product. The prototype is a small original piece of software inspired
by the idea, not a copy of the real app.

## Product question

The question behind this project: can Polymath reduce the number of
decisions a new user has to make before they learn something?

Polymath covers a wide range of subjects, from astronomy to chess to
investing. That breadth is part of the appeal, but it can also make the
first "what do I actually do right now" moment harder. The prototype
explores one way to narrow that decision down instead of presenting the
full catalog right away.

The full reasoning, including what I think looks strong about the idea and
what I would want to test, is written up at `/audit`.

## Prototype

A six-screen first-session flow, built around one fully worked example
(an astronomy lesson on orbital motion):

1. **Discovery**: pick a broad direction (Science, Technology, Mind, People, Skills)
2. **Subject Picker**: choose from a short list within that direction
3. **Recommendation**: one specific suggested lesson, not another list
4. **Lesson**: a three-step visual explanation
5. **Quick Check**: one question to check understanding
6. **Completion**: a summary and a clear next action

Only the Science category, and only Astronomy within it, is fully built out.
Other categories show an honest "not built yet" state rather than fake
content.

## Technical approach

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Original SVG and CSS visuals (no external images or icon libraries)
- Plain React state for the screen flow, no router or global state library
- No backend, no database, no authentication, no external APIs

## Project structure

```
app/
  page.tsx           the prototype entry point
  audit/page.tsx      the written product exploration
components/
  screens/            the six prototype screens
  ui/                  shared UI primitives (buttons, cards, icons, illustrations)
  audit/               components used only by the /audit page
lib/
  types.ts             content model
  content.ts           the actual lesson content (typed, no backend)
```

## Run locally

```
npm install
npm run dev
```

Then open `http://localhost:3000` for the prototype and
`http://localhost:3000/audit` for the written exploration.

## Validation

Typecheck (`tsc --noEmit`), lint (`eslint`), and a production build
(`next build`) were run after each stage of this project and again after
adding the audit page.

## Disclaimer

This project is an independent exploration and is not affiliated with or
endorsed by Polymath or Andrew Codesmith.
