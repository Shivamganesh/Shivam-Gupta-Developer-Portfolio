export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How I Designed My Portfolio",
    tag: "Design",
    image: "https://images.unsplash.com/photo-1619209629065-e9a2b225b24b",
    description:
      "A deep dive into design decisions, animations, and interactive elements I used.",
    content: `
Designing my portfolio was more than just picking colors.

✨ **Main Focus Areas**
1. Design consistency
2. Subtle interactive animations
3. Fast load times

🧠 **Tools Used**
- Figma
- Tailwind CSS
- GSAP for animations

🎯 Outcome:
- Visitors stayed longer.
- Recruiters mentioned how interactive it felt.

Always remember — portfolio = personality.
    `.trim()
  },
  {
    id: 2,
    title: "React Performance Tips",
    tag: "React",
    image: "https://thewriting.dev/content/images/2021/12/4.png",
    description:
      "Learn how to optimize rendering, avoid re-renders and boost React app speed.",
    content: `
React performance is crucial when scaling your app.

🧪 **Key Practices**
- UseMemo for expensive calculations
- Memoize components with React.memo
- Avoid inline functions in JSX
- Use dynamic imports + lazy loading

🔧 Example:
\`\`\`js
const memoizedValue = useMemo(() => computeExpensive(), [input]);
\`\`\`

🔥 Bonus:
Use React Profiler to track bottlenecks visually.
    `.trim()
  },
  {
    id: 3,
    title: "Tailwind CSS Magic",
    description: "Exploring custom themes, utilities, and responsive layouts in Tailwind.",
    image: "https://evilmartians.com/social-cards/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic.jpg",
    tag: "Tailwind",
    content: `
Tailwind CSS empowers developers to create responsive designs rapidly without writing custom CSS.

### 🔮 Why It Feels Like Magic:
- Utility-first classes keep styles inline and organized
- Breakpoints are built-in: \`sm:\`, \`md:\`, \`lg:\`, etc.
- Easily customizable through \`tailwind.config.js\`

### 🎨 Custom Themes:
You can extend Tailwind with your own colors, spacing, and more:
\`\`\`js
theme: {
  extend: {
    colors: {
      brand: '#1da1f2',
    },
  }
}
\`\`\`

### 📱 Responsive Layouts:
Use Tailwind’s responsive modifiers like:
\`flex flex-col md:flex-row justify-center items-center\`

No need to context switch between HTML and CSS — it's all in one place.

Tailwind feels like writing CSS at the speed of thought ✨.
  `.trim()
  },
  {
    id: 4,
    title: "React Native Animations",
    description: "Implementing smooth animations with Reanimated and Moti in mobile apps.",
    image: "https://i.pinimg.com/originals/a7/23/70/a723709c6b56fb0a43a0b55cd81de633.gif",
    tag: "React Native",
    content: `
React Native animations can make your app feel polished and responsive.

### 🚀 Libraries Used:
- **Reanimated 2**: Powerful gesture-based animations
- **Moti**: Simplifies Reanimated with props-based API

### 🧩 Example with Moti:
\`\`\`js
<MotiView
  from={{ opacity: 0, translateY: 50 }}
  animate={{ opacity: 1, translateY: 0 }}
  transition={{ type: 'spring' }}
>
  <Text>Hello Animation</Text>
</MotiView>
\`\`\`

### ✨ Tips:
- Keep animations under 300ms for responsiveness
- Use \`useAnimatedScrollHandler\` for scroll-based effects
- Combine Moti + Reanimated for complex flows

Animations aren't just visual — they guide the user's journey.
  `.trim()
  },
  {
    id: 5,
    title: "Building with Expo",
    description: "How Expo simplified our mobile development for iOS and Android.",
    image: "https://cdn.prod.website-files.com/63894f0e251e567f6e443bfa/6686dd1dbad818000c1efcd2_663ce96923145793f00faa73_lautaro-andreani-UYsBCu9RP3Y-unsplash.webp",
    tag: "React Native",
    content: `
Expo accelerates mobile app development by removing native complexity.

### 🧰 Why Use Expo:
- No need for Xcode/Android Studio during development
- Easy deployment with \`eas build\`
- Built-in libraries for camera, notifications, sensors

### 🔧 Getting Started:
\`\`\`bash
npx create-expo-app myApp
cd myApp
npm start
\`\`\`

### 🚢 Bonus: OTA Updates
You can push updates without going through App Store review using Expo Updates.

Expo helps you focus on features instead of native configs — especially for MVPs.
  `.trim()
  },
  {
    id: 6,
    title: "Advanced React Patterns",
    description: "Render props, compound components, and custom hooks explained.",
    image: "https://www.mediusware.com/_next/image?url=https%3A%2F%2Fmw-hr.sgp1.digitaloceanspaces.com%2Fmedia%2Fblog_images%2Fhoc.webp&w=1920&q=75",
    tag: "React",
    content: `
Once you're comfortable with React basics, mastering patterns can improve reusability and code clarity.

### ⚙️ Render Props
Let child components decide rendering:
\`\`\`js
<DataProvider render={(data) => <Chart data={data} />} />
\`\`\`

### 🧱 Compound Components
Components that work together:
\`\`\`js
<Tabs>
  <Tabs.List />
  <Tabs.Panel />
</Tabs>
\`\`\`

### 🪝 Custom Hooks
Extract reusable logic:
\`\`\`js
function useDarkMode() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => { ... }, [enabled]);
  return [enabled, toggle];
}
\`\`\`

These patterns reduce duplication and increase scalability in large React projects.
  `.trim()
  },
  {
  id: 7,
  title: "How I Optimized My Portfolio for Performance",
  description: "Tips on Lighthouse, lazy loading, and third-party optimization techniques.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpPAq5TlelJeLhDr2Vlesfh7ObYbu7_DhuQ&s",
  tag: "Performance",
  content: `
Improving performance means faster loading, better UX, and higher SEO scores.

## 🔧 Key Changes I Made
- Compressed all images (WebP format)
- Used \`React.lazy\` for route-based code splitting
- Removed unused libraries
- Added \`loading="lazy"\` to all images

## 🚀 Results
- Performance score: 98+
- Reduced bundle size by 40%
- Increased user retention

💡 Always test with Lighthouse + WebPageTest to monitor improvements.
  `.trim()
},
{
  id: 8,
  title: "Next.js vs React: What to Choose in 2025?",
  description: "A developer’s take on whether to stick with CRA or migrate to Next.js.",
  image: "https://graffersid.com/wp-content/uploads/2024/07/React.JS-VS-Vue.JS.jpg",
  tag: "Next.js",
  content: `
With Next.js becoming the go-to React framework, here's a breakdown.

### 🧩 Why Choose Next.js?
- SSR (Server-Side Rendering)
- Built-in API routes
- SEO optimization
- File-based routing

### 🤔 When React (CRA) Still Works?
- Internal dashboards
- SPA with limited SEO needs
- Custom routing logic

✨ Verdict: For most modern apps, Next.js is the default choice in 2025.
  `.trim()
},
{
  id: 9,
  title: "Using Zustand for Global State Management",
  description: "Forget Redux — Zustand is simpler and powerful for managing state.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREzn-KpgFYuUvpGwQKbt_y13273HkqX5WpA&s",
  tag: "React",
  content: `
Zustand is a small, fast, and scalable global state management solution.

### ⚡ Features
- No boilerplate
- Built on hooks
- Persistent storage support
- React Server Component friendly

### Example
\`\`\`js
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

Use Zustand when Redux feels overkill. Lightweight and powerful.
  `.trim()
},
{
  id: 10,
  title: "How I Use Framer Motion in My Projects",
  description: "Bringing UI to life with motion and meaningful transitions.",
  image: "https://i.ytimg.com/vi/h4rHWeubF9c/maxresdefault.jpg",
  tag: "Animation",
  content: `
Framer Motion makes animations intuitive in React.

## ✨ What I Animate
- Page transitions
- Card hover effects
- Scroll reveals

## 🧪 Useful APIs
- \`motion.div\`
- \`variants\`
- \`layoutId\` for shared layout transitions

Animations should support UX — not distract from it. Start small and scale!
  `.trim()
},
{
  id: 11,
  title: "Dark Mode in Tailwind CSS",
  description: "A guide to setting up and toggling dark mode with Tailwind.",
  image: "https://coderflex.com/storage/01HFBKGK59FGTK51R9XV6059BW.webp",
  tag: "Tailwind",
  content: `
Tailwind supports dark mode out of the box.

### ✅ Setup
In \`tailwind.config.js\`:
\`\`\`js
darkMode: 'class',
\`\`\`

Then use utilities like:
- \`bg-white dark:bg-black\`
- \`text-black dark:text-white\`

### 💡 Toggle with JS
\`\`\`js
document.documentElement.classList.toggle('dark');
\`\`\`

Works beautifully with localStorage too.
  `.trim()
},
{
  id: 12,
  title: "Creating Animated SVGs for Hero Sections",
  description: "Use SVG paths and stroke animations to create interactive landing pages.",
  image: "https://i.ytimg.com/vi/UTHgr6NLeEw/maxresdefault.jpg",
  tag: "SVG",
  content: `
SVGs can elevate your hero sections and storytelling.

### 🧠 Tips
- Animate using CSS or GSAP
- Use \`stroke-dasharray\` + \`stroke-dashoffset\` for draw effects
- Combine with scroll triggers

### Tooling
- SVGOMG for optimization
- SVGator or Figma for initial design

Smooth vector animations work great on all screen sizes and retina displays.
  `.trim()
}

];
