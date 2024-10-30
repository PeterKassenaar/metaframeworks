export interface Framework {
  title: string;
  href: string;
  body: string;
  logo: string;
}

export const frameworks: Framework[] = [
  {
    title: "Astro",
    href: "https://astro.build",
    body: "The all-in-one web framework designed for speed. Pull content from anywhere and deploy everywhere.",
    logo: "https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png"
  },
  {
    title: "Next.js",
    href: "https://nextjs.org",
    body: "The React framework for production. Enabling hybrid static & server rendering, TypeScript support, and more.",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/favicon.png"
  },
  {
    title: "Nuxt",
    href: "https://nuxt.com",
    body: "The intuitive Vue framework. Create performant and production-grade full-stack web apps and websites.",
    logo: "https://nuxt.com/icon.png"
  },
  {
    title: "Gatsby",
    href: "https://www.gatsbyjs.com",
    body: "The fastest frontend for the headless web. Build modern websites with React and the most powerful frameworks.",
    logo: "https://www.gatsbyjs.com/favicon-32x32.png"
  },
  {
    title: "VitePress",
    href: "https://vitepress.dev",
    body: "Simple, powerful, and fast. Meet the modern SSG framework you've always wanted. Powered by Vite & Vue.",
    logo: "https://vitepress.dev/vitepress-logo-mini.svg"
  },
  {
    title: "Analog.js",
    href: "https://analogjs.org",
    body: "The fullstack meta-framework for Angular. Build blogs, websites, and apps with Angular's best tools.",
    logo: "https://analogjs.org/img/favicon.png"
  },
  {
    title: "Remix",
    href: "https://remix.run",
    body: "Full stack web framework focusing on web standards and modern web app UX. Built on React Router.",
    logo: "https://remix.run/favicon-192.png"
  },
  {
    title: "SvelteKit",
    href: "https://svelte.dev/kit",
    body: "Web development, streamlined. The fastest way to build Svelte apps of all sizes, with a wonderful development experience.",
    logo: "https://kit.svelte.dev/favicon.png"
  },
  {
    title: "Qwik",
    href: "https://qwik.builder.io",
    body: "New kind of web framework that can deliver instant loading web applications at any size or complexity.",
    logo: "https://qwik.builder.io/favicon.svg"
  },
  {
    title: "SolidStart",
    href: "https://solidstart.com",
    body: "The meta-framework for Solid. Everything you need to build your next solid project.",
    logo: "https://www.solidjs.com/favicon.ico"
  },
  {
    title: "Fresh",
    href: "https://fresh.deno.dev",
    body: "The next-gen web framework for Deno. Just-in-time rendering on the edge with no build step.",
    logo: "https://fresh.deno.dev/favicon.ico"
  }
];