const projects = [
  {
    title: 'GrocyGo',
    description: 'Cross-platform grocery delivery app with modern React Native UI, customer & delivery portals with live tracking and admin panel.',
    image: 'video',
    video: '/Projectimage/GrocyGo.mp4',
    tags: ['mobile', 'fullstack'],
    technologies: ['React Native CLI', 'Zustand', 'Fastify', 'JWT', 'WebSockets', 'Google Maps', 'MongoDB'],
    highlight: 'Latest Project',
    github: 'https://github.com/Shivamganesh/GrocyGo',
    date: 'Sep 2024',
    features: [
      'JWT-based authentication',
      'Real-time updates via WebSockets',
      'Google Maps integration',
    ]
  },
  {
    title: 'ShareIt',
    description: 'Cross-platform file sharing app with offline transfer via Wi-Fi hotspot, QR code pairing and TLS-encrypted transfers.',
    image: 'video',
    video: '/Projectimage/shv.mp4',
    tags: ['mobile'],
    technologies: ['React Native', 'Zustand', 'TCP/UDP', 'TLS', 'QR Code', 'Animated API'],
    highlight: 'TLS Encryption',
    github: 'https://github.com/Shivamganesh/ShareIt',
    date: 'Dec 2024',
    features: [
      'Chunked file handling',
      'SSL certification',
      'Sleek UI with animations',
    ]
  },
  {
    title: 'Apple Vision',
    description: 'Fully responsive Product Showcase animated website with smooth scrolling and interactive UI elements.',
    image: 'video',
    video: '/Projectimage/3.mp4',
    tags: ['web'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Shery.js', 'GSAP', 'Canvas', 'Locomotive.js'],
    highlight: 'Animation Showcase',
    github: 'https://github.com/Shivamganesh/Apple-Vision-Clone-Canvas-3D-Website',
    date: 'Apr 2023',
    features: [
      'Interactive UI elements',
      'GSAP animations',
      'Smooth scrolling',
    ]
  },
  {
    title: 'Elegant Booking',
    description: 'Responsive venue booking app with admin and super admin panels, RESTful APIs and MongoDB database.',
    image: 'video',
    video: '/Projectimage/5.mp4',
    tags: ['web', 'fullstack'],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    highlight: 'Full Stack Solution',
    live: 'https://elegantbooking.onrender.com',
    date: 'May 2024',
    features: [
      'Admin and super admin panels',
      'RESTful APIs with Express.js',
      'MongoDB data management',
    ]
  },
  {
    title: 'Sundown Studio Clone',
    description: 'Animated studio showcase site built with advanced GSAP animations, interactive sections, and responsive design techniques inspired by real-world production studios.',
    image: 'video',
    video: '/Projectimage/6..webm',
    tags: ['web'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll', 'Responsive Design'],
    highlight: 'GSAP Animation Showcase',
    github: 'https://github.com/Shivamganesh/Sundown-Studio-Clone',
    live:' https://shivamganesh.github.io/Sundown-Studio-Clone/',
    date: 'Apr 2025',
    features: [
      'Comprehensive animation techniques using GSAP',
      'Responsive design implementation with media queries',
      'Interactive website elements with smooth transitions',
      'Real-world UI/UX inspired layout',
      'Emphasis on user engagement strategies',
    ]
  },
  {
    title: 'Magma Clone',
    description: 'A dynamic clone of the award-winning MAGMA website, built to showcase modern web design and animation techniques.',
    image: 'video',
    video: '/Projectimage/7..webm',
    tags: ['web', 'frontend'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll', 'ScrollTrigger', 'HTML5 Canvas'],
    highlight: 'Advanced Animation Techniques',
    github: 'https://github.com/Shivamganesh/Magma-Clone',
    live: 'https://shivamganesh.github.io/Magma-Clone/',
    date: 'April 2025',
    features: [
      'Smooth animations using GSAP',
      'Scroll-based interactions with ScrollTrigger',
      'Seamless page navigation via Locomotive Scroll',
      'Dynamic visuals with HTML5 Canvas',
      'Responsive design across devices',
    ]
  },
  {
    title: 'RayBan Clone',
    description: 'Immersive RayBan-style landing page featuring advanced hover and click animations using Shery.js and Three.js.',
    image: 'video',
    video: '/Projectimage/8..webm',
    tags: ['web'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Shery.js', 'Three.js', 'Locomotive Scroll', 'ScrollTrigger'],
    highlight: 'Hover Wave Effects',
    github: 'https://github.com/Shivamganesh/Ray.Ban-Website',
    live: 'https://shivamganesh.github.io/Ray.Ban-Website/',
    date: 'Apr 2025',
    features: [
      'Interactive wave hover effect with image transitions on click',
      'Smooth animation experience using ScrollTrigger and Locomotive Scroll',
      'Enhanced visuals and interactivity powered by Three.js and Shery.js'
    ]
  },
  {
    title: 'Ochi Clone',
    description: 'A visually engaging clone of the Ochi website, featuring smooth scrolling, dynamic animations, and interactive UI effects.',
    image: 'video',
    video: '/Projectimage/12..webm',
    tags: ['web', 'frontend'],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Locomotive Scroll'],
    highlight: 'Eye-Following Cursor & Smooth UX',
    github: 'https://github.com/Shivamganesh/OCHI-CLONE-React-APP',
    live: 'https://ochi-website-clone.vercel.app/',
    date: 'April 2025',
    features: [
      'Unique eye-following cursor interaction mimicking user attention',
      'Smooth and fluid scroll effects using Locomotive Scroll and GSAP',
      'Modern UI with Framer Motion transitions and Tailwind responsive layout'
    ]
  },
  {
    title: 'Cyberfiction Clone',
    description: 'An immersive clone of the Cyberfiction website, featuring advanced animations and interactive storytelling elements.',
    image: 'video',
    video: '/Projectimage/10..webm',
    tags: ['web', 'frontend'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger', 'Locomotive Scroll', 'HTML5 Canvas'],
    highlight: 'Immersive Storytelling & Animations',
    github: 'https://github.com/Shivamganesh/Cyberfiction-Clone1',
    live: 'https://shivamganesh.github.io/Cyberfiction-Clone1/',
    date: 'April 2025',
    features: [
      'Immersive storytelling with interactive user choices',
      'Stunning visuals and dynamic animations using GSAP and ScrollTrigger',
      'Smooth scrolling experience powered by Locomotive Scroll'
    ]
  },
  {
    title: 'EcoBrands',
    description: 'A visually engaging landing page featuring a GSAP-powered animated loader and smooth scroll-triggered transitions.',
    image: 'video',
    video: '/Projectimage/13..webm',
    tags: ['web', 'frontend'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    highlight: 'GSAP Loader Animation',
    github: 'https://github.com/Shivamganesh/EcoBrands',
    live: 'https://shivamganesh.github.io/EcoBrands/',
    date: 'April 2025',
    features: [
      'Animated preloader using GSAP timelines',
      'Scroll-triggered section animations for dynamic content reveal',
      'Responsive design ensuring compatibility across devices'
    ]
  },
  {
    title: 'Travel ',
    description: 'A highly interactive travel booking website frontend with immersive visuals, animated sections, and engaging UI components.',
    image: 'video',
    video: '/Projectimage/14..webm',
    tags: ['web', 'frontend'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    highlight: 'Interactive UI with video',
    github: 'https://github.com/Shivamganesh/Travelling-Landing-Page',
    live: 'https:///',
    date: 'April 2025',
    features: [
      'Engaging video background on the hero section with smooth fade-ins',
      'Dynamic package cards with hover zoom effects and staggered reveal animations',
      'Interactive booking form with glowing input borders and animated submit button',
    ]
  },
   {
  title: 'Unigine Squad',
  description: 'A stylish esports gaming website built with HTML, CSS, and JavaScript, featuring news, tournaments, match updates, animated UI, and interactive cursor effects.',
  image: 'video',
  video: '/Projectimage/uniginevid.webm', 
  tags: ['web', 'frontend'],
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
  ],
  highlight: 'Animated esports news & matches',
  github: 'https://github.com/Shivamganesh/Unigine-Squad', 
    live: '  https://shivamganesh.github.io/Unigine-Squad/',
  date: 'Aug 2023',
  features: [
    'Interactive esports website with tournament listings and live match previews.',
    'Gaming-style animated buttons, custom cursors, and hover effects for immersive UX.',
    'Smooth scroll animations and responsive layout optimized for all screens.'
  ]
},

  {
      title: 'Smoov Clone',
      description: 'An award-winning, natural smoothie brand website with sleek animations and a minimalist, wellness-focused aesthetic.',
      image: 'video',
      video: '/Projectimage/16..webm',
      tags: ['web', 'frontend'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll', 'ScrollTrigger'],
      highlight: 'Smoothie showcasing',
      github: 'https://github.com/codewithsadee/unigine',
      live: 'https://smoovco.com/en/',
      date: 'April 2025',
      features: [
        'Smooth interactive transitions and animated sections',
        'Modern wellness brand layout with informative product sections',
        'Fully responsive design with mobile-first approach'
      ]
    },
    {
      title: 'RideOn',
      description: 'Cross-platform ride booking app with real-time location sharing for customers and drivers, powered by Expo and Node.js with live tracking, token-based authentication, and optimized UI components.',
      image: 'video',
      video: '/Projectimage/ride.mp4',
      tags: ['mobile', 'fullstack'],
      technologies: [
        'React Native (Expo)',
        'Zustand',
        'Node.js',
        'JWT',
        'WebSockets (Socket.IO)',
        'Google Maps API',
        'AsyncStorage',
      ],
      highlight: 'Latest Project',
      github: 'https://github.com/Shivamganesh/RideOn',
      date: 'May 2025',
      features: [
        'Real-time location sharing and live tracking using WebSockets and Google Maps API.',
        'JWT-based authentication system with access/refresh token handling and secure API interceptors.',
        'Custom reusable UI components with dynamic height adjustments for smooth cross-platform performance.'
      ]
    },
  {
    title: 'Ekart',
    description: 'Cross-platform e-commerce app with Razorpay payments, AR product previews, and a dynamic admin dashboard.',
    image: 'video',
    video: '/Projectimage/ekartv.mp4',
    tags: ['mobile', 'fullstack'],
    technologies: [
      'React Native',
      'Next.js',
      'Razorpay',
      'MongoDB',
      'Three.js',
      'MVC Architecture',
      'Atomic Design'
    ],
    highlight: 'Latest Project',
    github: 'https://github.com/Shivamganesh/EKART',
    date: 'May 2025',
    features: [
      'Seamless e-commerce experience with Razorpay integration and secure backend using MVC pattern.',
      'AR support for 3D product visualization and dynamic dashboards for real-time product/content management.',
      'Reusable UI components following Atomic Design principles, built for scalability and modularity.'
    ]
  },
  {
    title: 'GTA 6',
    description: 'Interactive GTA 6-themed animation site using AI-generated assets, SVG masking, and scroll-based parallax effects.',
    image: 'video',
    video: '/Projectimage/gta.webm',
    tags: ['web', 'frontend'],
    technologies: [
      'React JS',
      'Tailwind CSS',
      'GSAP',
      'Vite',
      'SVG Masking',
      'ChatGPT',
      'SORA AI'
    ],
    highlight: 'Creative Showcase',
    github: 'https://github.com/Shivamganesh/GTA-6-Website',
    live: 'https://shivamganesh.github.io/GTA-6-Website/',
    date: 'May 2025',
    features: [
      'AI-generated visuals using ChatGPT and SORA AI.',
      'Animated SVG mask intro with GSAP.',
      'Scroll-based parallax effect with layered assets.'
    ]
  },
  {
  title: 'Flow Party',
  description: 'A safe, inclusive, and fun interactive site for web designers & developers, featuring animations, mouse interactions, slider UI, anchor navigation, and vibrant scroll effects.',
  image: 'video',
  video: '/Projectimage/flowvideo.webm',
  tags: ['web', 'frontend'],
  technologies: [
    'HTML', 'CSS', 'Javascript',
    'GSAP',
    'Lottie',
    'jQuery',
    'TypeScript',
    'SVG',
    'Parallax',
  ],
  highlight: 'Community Showcase',
  github: 'https://github.com/Shivamganesh/Flow-Party-Clone',
  live: ' https://shivamganesh.github.io/Flow-Party-Clone/',
  date: 'jul 2024',
  features: [
    'Mouse‑movement interactive hero',
    'Animated slider UI components',
    'Anchor‑link smooth navigation',
    'Scroll‑based parallax & Lottie animations',
  ]
},
{
  title: 'Miranda – Paper Portfolio Clone' ,
  description: 'An editorial-style portfolio with torn-paper transitions, horizontal drag-to-navigate layouts, and elegant typography—bringing a digital newspaper to life.',
  image: 'video',
  video: '/Projectimage/mirandavideo.webm',
  tags: ['frontend','web'],
  technologies: [
    'React.js',
    'Locomotive Scroll',
    'HTML5',
    'Custom Fonts (TTF)',
    'CSS Animations',
    'JavaScript'
  ],
  highlight: 'Digital Newspaper Experience',
  github: 'https://github.com/Shivamganesh/Miranda-Clone-React',
  live: 'https://shivamganesh.github.io/Miranda-Clone-React/',
  date: 'jun 2024',
  features: [
    
    'Horizontal and draggable magazine-style navigation',
    'Book-shelf effect rotating UI for Work page',
    'Hover-triggered image zoom effects and overflow control',
    'Procedural typography and editorial sidebar components'
  ]
},
{
  title: 'Kothik',
  description: 'Award-winning food and hotel service platform clone with smooth animations, advanced UI/UX, canvas effects, and scroll-based interactions.',
  image: 'video',
  video: '/Projectimage/kothikvid2.webm',
  tags: ['web', 'frontend'],
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'Canvas',
    'GSAP',
    'ScrollTrigger',
    'SwiperJS',
    'jQuery'
  ],
  highlight: 'Award-Winning Clone',
  github: 'https://github.com/Shivamganesh/Kothik', 
  live: ' https://shivamganesh.github.io/Kothik/',   
  date: 'Nov 2023',
  features: [
    'Smooth scroll-triggered animations with GSAP and ScrollTrigger.',
    'Interactive booking system for food orders, tables, and hotels with elegant UI.',
    'Canvas-based dynamic visual elements and SwiperJS-powered animated sliders.'
  ]
},
{
  title: 'Zentry Clone',
  description: 'Award-winning gaming-inspired site built solo with React, Tailwind CSS, and GSAP—featuring immersive video backgrounds, interactive 3D UI, and scroll-triggered animations.',
  image: 'video',
  video: '/Projectimage/zentryvid.webm',
  tags: ['web', 'frontend'],
  technologies: [
    'React JS',
    'Tailwind CSS',
    'GSAP',
    'ScrollTrigger',
    'Shery.js',
    'Vite',
    'React Icons',
    'Locomotive Scroll'
  ],
  highlight: 'Animated Gaming Website ',
  github: 'https://github.com/Shivamganesh/Zentry-Clone',
    live: ' https://zentry-clone-main.vercel.app/',
  date: 'Dec 2024',
  features: [
    'Floating navbar, audio toggle, fullscreen video hero section with smooth GSAP transitions.',
    'Bento-style grid layout with interactive 3D card tilt, button style, animated titles, and modular design.',
    'Multi-video synchronization using React states and refs, plus responsive mobile-first styling.'
  ]
},
{
  title: 'Gentlerain.ai Clone',
  description: 'Pixel-perfect clone of the award-winning Gentlerain.ai website featuring smooth animations, canvas elements, and responsive design.',
  image: 'video',
  video: '/Projectimage/gentlerainvid.webm', 
  tags: [ 'web', 'frontend'],
  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'GSAP',
    'Lenis',
    'ScrollTrigger',
    'HTML5 Canvas',
    'Webpack',
    'Babel',
    'Git'
  ],
  highlight: 'Water Effect',
  github: 'https://github.com/Shivamganesh/Gentle.ai-Clone',
  live: ' https://gentle-ai-clone.vercel.app/',
  date: 'May 2025',
  features: [
    'Smooth GSAP + Lenis animations and scroll effects mimicking Gentlerain.ai’s feel.',
    'Interactive visuals using HTML5 Canvas and responsive layouts with advanced CSS.',
    'Modular, scalable codebase with performance-optimized transitions and water wave effects.'
  ]
},
 {
  title: 'Gamics',
  description: 'Static gaming website with live match previews, game shop, news, and gamic-style animated design using only HTML, CSS, and JavaScript.',
  image: 'video',
  video: '/Projectimage/gamicsvid.webm', 
  tags: ['web', 'frontend'],
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    
  ],
  highlight: 'Stylized Gamic Design',
  github: 'https://github.com/Shivamganesh/Gamics-', 
   live: ' https://shivamganesh.github.io/Gamics-/',

  date: 'feb 2023',
  features: [
    'Static pages for live matches, competitions, and upcoming events.',
    'Gaming product shop with pricing, sale badges, and buy buttons (UI only).',
    'Attractive gamic-style animations and transitions.'
  ]
},
 {
  title: 'Two Good Co. Clone',
  description: 'A pixel-perfect frontend-only clone of the award-winning Toogood.com.au website, built with HTML, CSS, and JavaScript, featuring smooth animations, cursor effects, and responsive layout.',
  image: 'video',
  video: '/Projectimage/twogoodvid.webm', 
  tags: ['web', 'frontend'],
  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'GSAP',
    'Locomotive Scroll',
    'Scrolltrigger',
  ],
highlight: 'Smooth scroll and parallax animations',

  github: 'https://github.com/Shivamganesh/Two-Good-Co-Clone',
   live: ' https://shivamganesh.github.io/Two-Good-Co-Clone/',
  date: 'Oct 2023',
 features: [
  "Seamless scroll-triggered animations using GSAP and Locomotive Scroll to replicate award-winning motion design.",
  "Fully responsive and mobile-friendly layout built with HTML, CSS, and JavaScript — no frameworks or backend.",
  "Integrated autoplaying video backgrounds and animated cursor effects for a high-end interactive experience."
]

},
{
  title: 'EJ Studio Clone',
  description: 'A visually striking static photography site clone built with HTML, CSS, and JavaScript, inspired by the award-winning EJ Studio. Includes smooth scroll animations, custom cursor, and interactive UI.',
  image: 'video',
  video: '/Projectimage/ejstudvid.webm',
  tags: ['web', 'frontend'],
  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'GSAP',
    'ScrollTrigger',
    'Locomotive Scroll'
  ],
  highlight: 'Smooth scroll animations',
  github: 'https://github.com/Shivamganesh/EJ-Studio-Clone', 
   live: ' https://shivamganesh.github.io/EJ-Studio-Clone/',
  date: 'Nov 2023',
  features: [
    'Scroll-triggered animations and parallax effects using GSAP and Locomotive.',
    'Custom cursor with hover interactions for a dynamic experience.',
    'Responsive design with a clean, modern layout ideal for showcasing visuals.'
  ]
},
 {
  title: 'Anna Utiķina Clone',
  description: 'A clean, minimal photography portfolio clone featuring award-recognized scroll effects, parallax, and interactive UI built with HTML, CSS, and JavaScript.',
  image: 'video',
  video: '/Projectimage/annautikinavid.webm', 
  tags: ['web', 'frontend'],
  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'GSAP',
    'ScrollTrigger',
    'Locomotive Scroll'
  ],
  highlight: 'Stylish parallax photo portfolio',
  github: 'https://github.com/Shivamganesh/ANNA-UTIKINA-CLONE/', 
  live: ' https://shivamganesh.github.io/ANNA-UTIKINA-CLONE/',
  date: 'August 2023',
  features: [
    'Minimalist photography design with smooth scroll and parallax effects using Locomotive Scroll.',
    'Scroll-triggered micro‑animations powered by GSAP for immersive storytelling.',
    'Responsive, clean UI focused on visual content and interactive cursor behavior.'
  ]
},
{
  title: 'Velvet Pour',
  description: 'A scroll-driven animated cocktail website built with React, Tailwind CSS, and GSAP, featuring cinematic video playback and bold text reveals.',
  image: 'video',
  video: '/Projectimage/mojitovid.webm',
  tags: ['web', 'frontend'],
  technologies: [
    'React',
    'GSAP',
    'ScrollTrigger',
    'Tailwind CSS',
    'Vite'
  ],
  highlight: 'Coctail Animation',
  github: '',
  live: ' ',
  date: 'May 2025',
  features: [
    'Scroll-triggered SplitText animations, parallax effects, and pinned sections for fluid storytelling.',
    'Scroll-synced video playback and animated image masking for cinematic transitions.',
    'Custom carousel, seamless GSAP timelines, and responsive design with Tailwind CSS.'
  ]
}
//  {
//   title: 'Unigine Squad',
//   description: 'A stylish esports gaming website built with HTML, CSS, and JavaScript, featuring news, tournaments, match updates, animated UI, and interactive cursor effects.',
//   image: 'video',
//   video: '/Projectimage/uniginevid.webm', 
//   tags: ['web', 'frontend'],
//   technologies: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//   ],
//   highlight: 'Animated esports news & matches',
//   github: 'https://github.com/Shivamganesh/Unigine-Squad', 
//     live: '  https://shivamganesh.github.io/Unigine-Squad/',
//   date: 'Aug 2023',
//   features: [
//     'Interactive esports website with tournament listings and live match previews.',
//     'Gaming-style animated buttons, custom cursors, and hover effects for immersive UX.',
//     'Smooth scroll animations and responsive layout optimized for all screens.'
//   ]
// }




];

export default projects;
