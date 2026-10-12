# TechStack

Pass icon names (used for accessible labels and hover tooltips) and image paths:

```tsx
import TechStack from "@/components/tech-stack/tech-stack";

const icons = [
  { name: "React", src: "/tech-stack-icons/react.svg" },
  { name: "TypeScript", src: "/tech-stack-icons/typescript.svg" },
];

// Continuous marquee; pauses on hover and respects reduced-motion preferences.
<TechStack icons={icons} />

// Static, centered icons that wrap onto additional rows when needed.
<TechStack icons={icons} scrolling={false} title="Built with" />
```

`scrolling` defaults to `true`; `title` defaults to `"My tech stack"`.
An optional `className` can customize the section's layout at each usage.
All instances use 35 × 35px icons, 30px gaps, 75% width, and 50px vertical
padding. Animated instances use a 45-second loop with faded edges.
Each instance generates a unique heading ID, so multiple instances can share a page.
