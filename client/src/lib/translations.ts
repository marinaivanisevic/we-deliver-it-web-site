/* We Deliver IT — EN/SR prevodi za ceo sajt */
export type Lang = "en" | "sr";

const en = {
  nav: {
    services: "Services",
    solutions: "Solutions",
    industries: "Industries",
    caseStudies: "Case Studies",
    company: "Company",
    resources: "Resources",
    bookCall: "Book a call",
    contact: "Contact us"
  },
  hero: {
    titleLine1: "We build",
    titleLine2: "software solutions",
    titleLine3: "that drive",
    titleAccent: "real impact.",
    subtitle:
      "End-to-end software engineering and consulting services that help businesses innovate, scale and lead in the digital era.",
    bookCall: "Book a call",
    exploreWork: "Explore our work",
  },
  trusted: {
    label: "Trusted by innovative companies",
  },
  stats: {
    years: "Years of experience",
    projects: "Successful projects",
    offices: "Offices (EU & USA)",
    experts: "Experts worldwide",
  },
  whatWeDo: {
    label: "What we do",
    title: "Digital solutions built around your goals",
    description:
      "From strategy and design to development and support, we build digital solutions that drive growth and create exceptional experiences.",
    services: [
      {
        slug: "it-consulting",
        title: "Custom Software Development",
        description:
          "Scalable, secure and high-performance applications built exactly for your business needs.",
        longDescription: [
          "Every strong product starts with a clear plan, then gets built by engineers who own the outcome, not just the ticket.",
          "We design and build custom web applications, internal tools and platforms from the ground up — architecture, database design and integrations included — so the system fits how your business actually works, not the other way around.",
          "Projects move in short, visible iterations. You see working software early and often, which means direction can be corrected before it becomes expensive to change.",
          "Once live, we stay close through monitoring, maintenance and iterative improvements, so the software keeps pace with the business instead of becoming legacy on day one.",
        ],
        features: [
          "Custom web application development",
          "System architecture and database design",
          "Third-party and internal system integrations",
          "Iterative, sprint-based delivery",
          "Automated testing and code quality",
          "Post-launch maintenance and support",
        ],
      },
      {
        slug: "software-development",
        title: "Mobile App Development",
        description:
          "Cross-platform mobile apps that deliver seamless experiences and real value.",
        longDescription: [
          "One codebase, native feel on both iOS and Android — that's the standard we hold cross-platform apps to.",
          "We build with frameworks that ship a single codebase to both app stores while still feeling native on each platform, so you're not maintaining two separate teams and two separate release cycles.",
          "Offline support, push notifications, in-app payments and device integrations are handled from day one of the architecture, not bolted on after the first submission gets rejected.",
          "We also support outsourced development capacity when you already have a mobile team but need extra hands or specialist skills for a release.",
        ],
        features: [
          "Cross-platform apps (iOS & Android)",
          "Native device integrations and push notifications",
          "Offline-first architecture",
          "In-app payments",
          "App Store and Play Store release management",
          "Outsourced development capacity",
        ],
      },
      {
        slug: "online-store",
        title: "Cloud & DevOps Engineering",
        description:
          "Modern cloud solutions and DevOps practices to accelerate delivery and ensure reliability.",
        longDescription: [
          "Downtime and slow deploys are usually infrastructure problems wearing a developer costume.",
          "We design cloud infrastructure on AWS, Azure or GCP that scales with real traffic instead of guesswork, and set up CI/CD pipelines so releases go out in minutes, not release-day rituals.",
          "Containerization, infrastructure-as-code and automated monitoring mean environments are reproducible and incidents get caught before your customers notice them.",
          "Whether you're migrating a legacy system to the cloud or hardening an existing setup, we work alongside your team rather than around it.",
        ],
        features: [
          "Cloud architecture (AWS, Azure, GCP)",
          "CI/CD pipeline setup",
          "Infrastructure as code",
          "Containerization and orchestration",
          "Monitoring and alerting",
          "Cloud migration",
        ],
      },
      {
        slug: "elearning-platform",
        title: "AI & Emerging Technologies",
        description:
          "Leverage AI, Machine Learning and Blockchain to unlock new opportunities and innovate faster.",
        longDescription: [
          "The gap between an interesting AI demo and a feature customers actually rely on is usually where projects stall — that's the gap we close.",
          "We help you identify where AI and Machine Learning can realistically move a metric — not just where they sound impressive — then build and integrate the models into your existing product.",
          "For businesses exploring blockchain, we bring hands-on experience with smart contracts, tokenization and secure token design, so adoption is deliberate rather than speculative.",
          "IoT and serverless architectures round out the toolkit for teams that need to connect devices or scale event-driven workloads without managing servers directly.",
        ],
        features: [
          "AI and Machine Learning integration",
          "Smart contract development",
          "Tokenization and blockchain strategy",
          "IoT solutions",
          "Serverless architecture",
          "Feasibility and technology assessment",
        ],
      },
      {
        slug: "ai-blockchain",
        title: "Product Design & UX/UI",
        description:
          "User-centered design that combines beautiful interfaces with intuitive experiences.",
        longDescription: [
          "Good design isn't decoration — it's the difference between a product people tolerate and one they recommend.",
          "We start with real user research and wireframes before a single pixel is finalized, so the interface is solving an actual problem instead of following a trend.",
          "Visual design stays consistent with your brand while following accessibility and usability standards, and every screen is validated with interactive prototypes before development begins.",
          "Design doesn't stop at handoff — we stay involved through implementation to make sure what ships matches what was designed.",
        ],
        features: [
          "UX research and discovery",
          "Wireframing and information architecture",
          "UI design and design systems",
          "Interactive prototyping",
          "Accessibility and usability review",
          "Design-to-development handoff",
        ],
      },
      {
        slug: "design-qa",
        title: "QA & Software Testing",
        description:
          "Ensure quality, security and performance with automated and manual testing strategies.",
        longDescription: [
          "Bugs found by your users are the most expensive bugs there are — we're built to catch them first.",
          "We combine automated test suites with manual, exploratory testing so regressions get caught immediately while edge cases a script would miss still get human eyes.",
          "Performance and security testing are part of the standard process, not an afterthought added before a big client demo.",
          "Every release goes through a documented QA process, so quality is consistent across sprints and across team members, not dependent on who happened to test that week.",
        ],
        features: [
          "Automated test suite development",
          "Manual and exploratory testing",
          "Performance testing",
          "Security testing",
          "Regression testing",
          "QA process documentation",
        ],
      },
    ],
  },
  work: {
    label: "Our work",
    title: "Solutions we're proud of",
    viewAll: "View all case studies",
    viewCase: "View case study",
    cases: [
      {
        category: "EdTech & Analytics",
        title: "UpStrive System",
        description: "App for measuring and improving student and employee engagement through evidence-based tools.",
        url: "https://upstrive.de",
      },
      {
        category: "Blockchain & Web3",
        title: "Intersect",
        description: "Cardano Proposal Discussion Forum, a Web3 platform enabling public governance discussions within the Cardano ecosystem.",
        url: "https://intersectmbo.org/",
      },
      {
        category: "Home Improvement & Retail",
        title: "Lemit",
        description: "E-commerce web shop for a bathroom fixtures and ceramic tiles retailer, with a full product catalog and ERP integration.",
        url: "https://www.lemit.rs",
      },
      {
        category: "Coaching & Personal Growth",
        title: "MindMotions",
        description: "Platform for online courses, coaching and workshops focused on personal development.",
        url: "https://mindmotions.com/",
      },
      {
        category: "Academic Conference",
        title: "EMAN Conference",
        description: "Website for an international scientific conference on economics and management, with paper submission and registration.",
        url: "https://www.udekom.org.rs/",
      },
      {
        category: "Hospitality",
        title: "Cafe Confetti Dubai",
        description: "Website for a family café in Dubai, featuring the menu, gallery and venue information.",
        url: "https://cafeconfettidubai.com/",
      },
      {
        category: "Culture & Events",
        title: "SYNERGY Theatre Festival",
        description: "Website for an international theatre festival, featuring the program, archive and visitor information.",
        url: "https://synergytheaterfest.com/",
      },
      {
        category: "Cosmetics",
        title: "GORSEN Kozmetika",
        description: "Online store for natural cosmetics, featuring product lines and online purchasing.",
        url: "https://gorsen.rs/",
      },
      {
        category: "Tourism & Hospitality",
        title: "Xenonas Liogerma",
        description:
          "A vacation rental website for apartments in Ierissos, Chalkidiki, featuring eight units, a photo gallery and online booking.",
        url: "https://xenonas-liogerma.gr",
      },
      {
        category: "Fencing & Garden Products",
        title: "Ograde Veštačka Trava",
        description:
          "Website for a fencing company selling and installing artificial grass, wire fencing, farm mesh and 3D panel fences, with a product catalog, price calculator and client references.",
        url: "https://ogradevestackatrava.com/",
      },
      {
        category: "Academic Conference",
        title: "ITEMA Conference",
        description:
          "Website for an international scientific conference on IT, tourism, economics, management and agriculture, with paper submission, registration and program details.",
        url: "https://www.itema-conference.com/",
      },
      {
        category: "Academic Conference",
        title: "LIMEN Conference",
        description:
          "Website for an international scientific and business conference on leadership, innovation, management and economics, with paper submission, registration and access to past proceedings.",
        url: "https://limen-conference.com/",
      },
    ],
  },
  testimonials: {
    label: "Clients",
    title: "What our clients say",
    items: [
      {
        quote:
          "I recommend WE DELIVER IT for virtually any project or ongoing requirement that any potential client may have. Their founder has a keen intellect that allows him to break down very complex requirements and simplify them to provide complete, clean and concise results for any project he takes on.",
        name: "Steven J. Husak",
        role: "CEO",
        company: "Continents Apart LLC, Sarasota FL, USA",
        companyUrl: "https://www.continentsbrands.com/",
      },
      {
        quote:
          "WE DELIVER IT is my ongoing partner for SaaS and mobile app development. They are reliable, flexible, and fast and I can highly recommend them.",
        name: "Sven Maikranz",
        role: "CEO",
        company: "UPSTRIVE GmbH, Salzburg, Austria",
        companyUrl: "https://upstrive.de/",
      },
      {
        quote:
          "WE DELIVER IT provide our association with reliable solutions as well as reliable support and innovative approaches for the improvement of our business model. Their team is amazingly fast and they constantly create great solutions.",
        name: "Nikolina Vrcelj",
        role: "Manager",
        company: "Udekom Balkans, Serbia",
        companyUrl: "https://www.udekom.org.rs/",
      },
    ],
  },
  tech: {
    label: "Technologies we work with",
  },
  serviceDetail: {
    back: "All services",
    featuresTitle: "What's included",
    ctaTitle: "Interested in this service?",
    ctaButton: "Book a call",
    notFound: "Service not found.",
  },
  aboutPage: {
    back: "Back to home",
    title: "About Us",
    intro:
      "WE DELIVER IT brings together a team of consultants and developers with more than 15 years of experience in the IT industry. We specialize in IT consulting, web and mobile application development, and custom software solutions for clients across Europe and the US. We work in an agile way — fast delivery, high quality, and long-term value for every client we work with.",
    whyTitle: "Why clients choose us",
    whyText:
      "Companies across Europe and the US trust us because we combine technical expertise with a human approach. We don't just build software — we build partnerships that last. Our focus is on transparency, accountability, and results that make a real difference.",
    closingStatement: "We dream big, work hard, and deliver results that make a difference.",
    closingText:
      "We don't make up statistics or dress up numbers — every project we complete reflects real work, real experience and real trust. We're proud of the quality we deliver and the long-term relationships we build with our clients.",
  },
  careersPage: {
    back: "Back to home",
    title: "Careers",
    messageBefore:
      "We currently have no open positions, but we'd be happy to keep your CV on file for future opportunities — reach out to us at ",
    messageAfter: ".",
  },
  projectsPage: {
    back: "Back to home",
    title: "All our work",
    subtitle: "A closer look at the products, platforms and businesses we've helped build.",
  },
  privacyPage: {
    back: "Back to home",
    label: "Privacy Policy",
    updated: "Last updated: July 30, 2026",
    intro:
      "Your privacy matters to us. This policy explains what data we collect when you visit our site or get in touch with us, why we collect it, and how we protect it.",
    sections: [
      {
        heading: "What data we collect",
        text: "Like most websites, we automatically collect basic technical information about your visit — browser type, language settings and pages viewed — to better understand how the site is used. We collect personal data, such as your name and email address, only when you provide it yourself, for example through our contact form or a job application.",
      },
      {
        heading: "How we use your data",
        text: "We use the information you send us solely to respond to your inquiry, prepare a proposal, or review your job application. We never sell or rent your personal data to third parties.",
      },
      {
        heading: "Cookies and local storage",
        text: "The site uses your browser's local storage (localStorage) to remember your language and theme preferences — this data stays on your device and is never sent to us. See our Cookie Policy for more details.",
      },
      {
        heading: "Data security",
        text: "We take reasonable technical and organizational measures to protect your data, but no method of transmission over the internet is completely secure, so we can't guarantee absolute security.",
      },
      {
        heading: "Links to other websites",
        text: "Our site may contain links to third-party websites. We have no control over their content or privacy practices, so we recommend reviewing them independently before sharing any personal data.",
      },
      {
        heading: "Your rights",
        text: "You can request access to, correction of, or deletion of any personal data we hold about you at any time. To exercise these rights, or for any question about this policy, contact us at the email address below.",
      },
    ],
    contactTitle: "Contact",
    contactText:
      "For any questions about this privacy policy, email us at office@we-deliver.io or write to WE DELIVER IT DOO, Dinka Šimunovića 60A, 21132 Petrovaradin, Serbia.",
  },
  termsPage: {
    back: "Back to home",
    label: "Terms & Conditions",
    updated: "Last updated: July 30, 2026",
    intro:
      "By using the we-deliver.io website, you accept the terms set out below. If you don't agree with them, please don't use this site.",
    sections: [
      {
        heading: "Intellectual property",
        text: "Unless otherwise stated, WE DELIVER IT and/or its licensors own the intellectual property rights to all content on this site — text, design, graphics and the logo. You may view this content for personal, non-commercial use, but may not copy, resell, reproduce or redistribute it without our prior written consent.",
      },
      {
        heading: "Linking to our content",
        text: "Organizations and individuals may link to our homepage, provided the link is not misleading, does not falsely imply we sponsor or endorse their content, and does not damage our reputation.",
      },
      {
        heading: "Limitation of liability",
        text: "Content on this site is provided \"as is\", without any warranty of accuracy or completeness. We are not liable for any loss arising from the use of information on this site, to the extent permitted by applicable law.",
      },
      {
        heading: "Changes to these terms",
        text: "We may update these terms of use from time to time. Changes take effect as soon as they're published on the site, so we recommend checking this page periodically.",
      },
      {
        heading: "Governing law",
        text: "These terms of use are governed by the laws of the Republic of Serbia.",
      },
    ],
    contactTitle: "Contact",
    contactText:
      "For any questions about these terms, email us at office@we-deliver.io or write to WE DELIVER IT DOO, Dinka Šimunovića 60A, 21132 Petrovaradin, Serbia.",
  },
  cookiePage: {
    back: "Back to home",
    label: "Cookie Policy",
    updated: "Last updated: July 30, 2026",
    intro:
      "This policy explains what cookies are, how (and whether) we use them on our site, and how you can manage them in your browser.",
    sections: [
      {
        heading: "What are cookies",
        text: "Cookies are small text files a website stores on your device through your browser, used to remember your settings and improve your browsing experience.",
      },
      {
        heading: "How we currently use cookies",
        text: "Our site currently doesn't use cookies for tracking or advertising. Your language (English/Serbian) and theme preferences are stored locally in your browser (localStorage), not through cookies — this data stays only on your device.",
      },
      {
        heading: "Third-party cookies",
        text: "If we introduce tools such as Google Analytics in the future to measure site traffic, this policy will be updated accordingly, and such tools may set their own cookies in line with their own privacy policies.",
      },
      {
        heading: "Managing cookies",
        text: "Most browsers let you manage and delete cookies through their settings. Keep in mind that disabling cookies can affect how some websites function, though it currently has no effect on the core functionality of our site.",
      },
    ],
    contactTitle: "Contact",
    contactText:
      "For any questions about cookies, email us at office@we-deliver.io or write to WE DELIVER IT DOO, Dinka Šimunovića 60A, 21132 Petrovaradin, Serbia.",
  },
  contactPage: {
    back: "Back to home",
    title: "Get in touch",
    subtitle: "Have a project in mind or just want to say hello? Fill out the form and we'll get back to you.",
    companyName: "WE DELIVER IT DOO",
    companyDescription:
      "An IT company based in Petrovaradin providing custom software development, IT consulting and web & mobile application development. Founded on November 22, 2022.",
    addressLabel: "Address",
    address: "Dinka Šimunovića 60A, 21132 Petrovaradin, Serbia",
    regNumberLabel: "Registration number",
    regNumber: "21858501",
    taxIdLabel: "Tax ID (PIB)",
    taxId: "113390609",
    emailLabel: "Email",
    formTitle: "Send us a message",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailFieldLabel: "Email address",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    submit: "Send message",
  },
  softwareDevPage: {
    back: "All services",
    label: "Software & Mobile App Development",
    intro:
      "Need a website, custom software, or a mobile app you can easily extend and maintain? We build solutions your team can update on its own, while we handle everything that doesn't make you money directly — hosting, maintenance and updates.",
    pillars: [
      {
        title: "Websites",
        description:
          "Custom websites built on WordPress or a tailored solution — with responsive design, a contact form, Google Maps, newsletter signup, live chat and social media integration. Every site ships with SEO optimization, a GDPR notice, and a free domain and hosting for the first year.",
      },
      {
        title: "Custom software",
        description:
          "Custom software and internal tools, from simple portals to complex business systems — we design the architecture and database so the solution grows with your business, with integrations into existing systems (ERP, CRM, payments) whenever you need them.",
      },
      {
        title: "Mobile apps",
        description:
          "Cross-platform mobile apps for iOS and Android from a single codebase, with a native feel on both platforms — including offline support, push notifications, in-app payments, and App Store / Play Store publishing.",
      },
    ],
    processTitle: "How we work",
    processText:
      "Through staff augmentation we reinforce your existing development teams when you're short on capacity or specific expertise, and we work in short, visible iterations — from initial architecture to weekly builds you can test yourself — with automated testing, so the code stays clean well past the first release.",
    pricing: {
      title: "Website packages",
      subtitle: "Ballpark pricing for website projects — reach out for a quote tailored to your project.",
      customNote:
        "Alongside our ready-made packages, we also build custom solutions in React and other modern technologies, tailored to your project's specific needs. Pricing is determined individually, based on scope and functionality — contact us for a personalized quote.",
      pagesLabel: "Pages",
      featureRows: [
        "Responsive design",
        "Gallery",
        "Contact form",
        "Google Maps",
        "Custom scripts",
        "Newsletter",
        "Live chat",
        "Slider",
        "Social media integration",
        "GDPR notice",
        "Free domain & hosting",
      ],
      packages: [
        {
          name: "Basic",
          price: "800",
          type: "WordPress CMS",
          pages: "Up to 5 pages",
          included: [true, true, true, true, false, false, false, false, false, false, false],
        },
        {
          name: "Standard",
          price: "1,200",
          type: "WordPress CMS",
          pages: "Up to 15 pages",
          included: [true, true, true, true, false, true, false, true, true, false, false],
        },
        {
          name: "Plus",
          price: "2,200",
          type: "CMS + store or e-learning",
          pages: "Up to 15 pages & 10 products",
          included: [true, true, true, true, false, true, true, true, true, true, false],
        },
        {
          name: "Premium",
          price: "3,500",
          type: "CMS + store or e-learning",
          pages: "Up to 30 pages & 20 products",
          included: [true, true, true, true, true, true, true, true, true, true, true],
        },
      ],
      ctaButton: "Request a quote",
    },
    featuresTitle: "What's included",
    features: [
      "Custom websites (WordPress or a custom build)",
      "Custom software and internal tools",
      "Cross-platform mobile apps (iOS & Android)",
      "Staff augmentation and team reinforcement",
      "Contact forms, Google Maps and newsletter integration",
      "SEO optimization and GDPR compliance",
      "Free domain and hosting for the first year",
      "Integration with existing systems (ERP, CRM, payments)",
    ],
    portfolioTitle: "Some of the sites we've built",
    ctaTitle: "Interested in this kind of project?",
    ctaButton: "Book a call",
  },
  onlineStorePage: {
    back: "All services",
    label: "Online Store Development",
    intro:
      "Need an online store with card and PayPal payments, support for multiple languages and currencies, or a shipping calculator based on package weight and destination? We build complete e-commerce solutions on WordPress and WooCommerce — the most widely used e-commerce platform in the world, powering more than 10 million stores — giving you full control over your own store, from products and categories to orders and payments.",
    featuresGridTitle: "What your store includes",
    featureCards: [
      {
        title: "Demo products",
        description:
          "Every store ships with ten pre-configured demo products, so you can see how your catalog and checkout work from day one. You add your own products afterwards through a simple admin panel.",
      },
      {
        title: "Inventory management",
        description:
          "Track stock levels for every product and variant in real time, with automatic alerts when inventory drops below a set threshold.",
      },
      {
        title: "E-invoices",
        description:
          "Every order automatically generates an invoice emailed to the customer, while you get a clean overview of all issued invoices in one place.",
      },
      {
        title: "Shipping calculator",
        description:
          "Shipping costs are calculated automatically based on package weight and the customer's destination, so there are no surprises for you or your buyers.",
      },
      {
        title: "PayPal integration",
        description:
          "Let customers pay with PayPal, one of the most trusted payment systems in the world, with fast and secure processing.",
      },
      {
        title: "Product categories",
        description:
          "Organize your catalog into categories and subcategories, with filters that make it easy for customers to find what they're looking for.",
      },
      {
        title: "Order tracking",
        description:
          "Customers can track their order status from confirmation to delivery, while you get a full overview of every order from the admin panel.",
      },
      {
        title: "Card payments",
        description:
          "We integrate secure card payments (Visa, Mastercard and more) directly into your store, with support for the banks and payment processors you choose.",
      },
      {
        title: "SSL certificate",
        description:
          "Every store ships with an SSL certificate that encrypts customer data and builds the trust online shoppers expect.",
      },
      {
        title: "Customer accounts",
        description:
          "Customers create their own accounts, save addresses and view order history, which speeds up every future purchase.",
      },
      {
        title: "Flexible products & bookings",
        description:
          "We support simple, grouped and variable products (by color, size and more), plus a booking feature for services and appointments.",
      },
      {
        title: "Multi-language & multi-currency",
        description:
          "We adapt your store for markets beyond your own — with support for multiple languages and currencies, so you can sell to customers abroad too.",
      },
    ],
    processTitle: "Full control over your store",
    processText:
      "We believe in building long-term relationships with our clients, so we go the extra mile to give you full control over your own website. Through the CMS you manage content, images, menus, descriptions and categories yourself, and thanks to WordPress's huge ecosystem of free and paid plugins, new features can be added to your store quickly and easily whenever you need them.",
    servicesTitle: "Our e-commerce services include",
    servicesList: [
      "Professional e-commerce website design on WordPress",
      "Online store development with WooCommerce",
      "Custom e-commerce development for specific needs",
      "Payment method integration",
      "Custom plugin development on request",
    ],
    pricing: {
      title: "Online store packages",
      subtitle: "Ballpark pricing for e-commerce projects — reach out for a quote tailored to your store.",
      customNote:
        "Alongside our ready-made packages, we also build fully custom e-commerce solutions, including integrations with ERP/CRM systems and specific business requirements. Pricing is determined individually, based on the number of products and required functionality — contact us for a personalized quote.",
      featureRows: [
        "Responsive design",
        "Product categories & filters",
        "Simple products",
        "Variable products (color, size...)",
        "Card & PayPal payments",
        "Shipping calculator by weight",
        "E-invoices",
        "Bookings for services/appointments",
        "Multi-language & multi-currency",
        "ERP/CRM integration",
        "Free domain & hosting (year 1)",
      ],
      packages: [
        {
          name: "Start",
          price: "2,200",
          type: "WooCommerce store",
          pages: "Up to 30 products",
          included: [true, true, true, false, true, false, false, false, false, false, true],
        },
        {
          name: "Standard",
          price: "3,200",
          type: "WooCommerce store",
          pages: "Up to 100 products",
          included: [true, true, true, true, true, true, true, false, false, false, true],
        },
        {
          name: "Business",
          price: "4,800",
          type: "WooCommerce store",
          pages: "Up to 300 products",
          included: [true, true, true, true, true, true, true, true, true, false, true],
        },
        {
          name: "Premium",
          price: "7,500",
          type: "WooCommerce store",
          pages: "Unlimited products",
          included: [true, true, true, true, true, true, true, true, true, true, true],
        },
      ],
      ctaButton: "Request a quote",
    },
    portfolioTitle: "Some of the stores we've built",
    ctaTitle: "Interested in your own online store?",
    ctaButton: "Book a call",
  },
  elearningPage: {
    back: "All services",
    label: "E-Learning Platform Development",
    intro:
      "Want to create and sell your own online courses, or train employees through an internal learning platform? We build LMS platforms on WordPress that give you full control over your courses — from building lessons and quizzes to tracking learner progress and issuing certificates — with an interface tailored to your brand, so learners feel like they're learning on your platform, not someone else's generic tool.",
    featuresGridTitle: "What your platform includes",
    featureCards: [
      {
        title: "Text, image & video content",
        description:
          "Combine text, images and video within the same course, so every lesson fits the content you're teaching and the pace your learners need.",
      },
      {
        title: "Student & instructor management",
        description:
          "Assign instructors to courses, see who's enrolled, and communicate directly through the platform — all from a single admin panel.",
      },
      {
        title: "Quizzes & knowledge tests",
        description:
          "Check what learners have retained with quizzes and tests after each lesson, with automatic grading and instant feedback.",
      },
      {
        title: "Progress tracking",
        description:
          "See how far each learner has progressed through a course, which lessons they've completed, and where they're getting stuck, so you can step in early.",
      },
      {
        title: "Reusable, modular lessons",
        description:
          "Build lessons as standalone modules you can easily recycle and combine into new courses, without recreating content from scratch.",
      },
      {
        title: "Certificate issuing & tracking",
        description:
          "Learners automatically receive a certificate on course completion, while you keep track of every certificate issued in one place.",
      },
    ],
    processTitle: "A platform built around your brand and audience",
    processText:
      "The platform works equally well for internal employee training and for selling your own courses to a wider audience — you decide access, pricing and course categories. We tailor the interface to your brand, and thanks to the WordPress plugin ecosystem, new features can be added quickly whenever you need them.",
    servicesTitle: "Our e-learning services include",
    servicesList: [
      "Professional e-learning platform design on WordPress",
      "LMS platform development with courses and lessons",
      "Custom development for your organization's specific needs",
      "Payment integration for selling courses",
      "Custom plugin development on request",
    ],
    portfolioTitle: "Some of the platforms we've built",
    ctaTitle: "Interested in your own e-learning platform?",
    ctaButton: "Book a call",
  },
  aiBlockchainPage: {
    back: "All services",
    label: "AI, Blockchain & Emerging Technologies",
    intro:
      "Blockchain technology clearly represents the future and can help your business make a real leap forward — but you need consulting you can trust. Blockchain has been one of the most searched technology topics of the past several years, and understanding it properly brings a real competitive advantage, whether you're an individual or a company just entering the space. Beyond blockchain, we also help you assess where artificial intelligence, machine learning, IoT and serverless architectures can realistically add value to your business.",
    experienceTitle: "Our blockchain track record",
    experienceCards: [
      {
        title: "Security token",
        description:
          "We took part in developing one of the first security tokens (tokenized shares) in Europe, handling both the legal and technical requirements such a project carries.",
      },
      {
        title: "Crypto exchange",
        description:
          "We were part of the team that built a crypto exchange, from platform architecture to integrating its trading mechanisms.",
      },
      {
        title: "Blockchain academy",
        description:
          "We created a blockchain academy for students at the Faculty of Economics in Niš, passing our knowledge on to the next generation of experts.",
      },
      {
        title: "Smart city platform",
        description:
          "We're currently working on a blockchain platform for a smart city, connecting public services and data in a transparent way.",
      },
      {
        title: "Trading & mining",
        description:
          "We have hands-on experience in crypto trading and mining, which gives us insight into the practical side of the blockchain ecosystem, not just the theory.",
      },
    ],
    aiTitle: "AI & emerging technologies",
    aiSubtitle:
      "We identify where artificial intelligence and other emerging technologies can bring real value to your business, and turn that into a working solution.",
    aiCards: [
      {
        title: "AI & Machine Learning",
        description:
          "We identify where AI and machine learning can realistically improve your product or process, then build and integrate the models into your existing system.",
      },
      {
        title: "AI assistants & automation",
        description:
          "We build chatbots and AI assistants that automate customer support, data processing and repetitive business workflows.",
      },
      {
        title: "IoT solutions",
        description:
          "We connect devices and sensors into IoT solutions that collect and process data in real time.",
      },
      {
        title: "Serverless architecture",
        description:
          "We build serverless architectures for teams that want to scale event-driven workloads without managing servers.",
      },
    ],
    processTitle: "Feasibility assessment before implementation",
    processText:
      "Before we recommend a specific technology, we assess feasibility and risk together with you, so the decision to adopt something new is grounded in your business reality, not just a passing trend.",
    featuresTitle: "What's included",
    features: [
      "Blockchain consulting and strategy",
      "Smart contract development",
      "Tokenization and crypto solutions",
      "AI and Machine Learning integration",
      "IoT and serverless architectures",
      "Business process analysis and modernization",
    ],
    portfolioTitle: "Some of the projects we've built",
    ctaTitle: "Interested in exploring AI or blockchain for your business?",
    ctaButton: "Book a call",
  },
  designQaPage: {
    back: "All services",
    label: "Product Design, UX/UI & QA Testing",
    intro:
      "A good product is built around real users, not the other way around. We combine UX research and UI design with consistent quality control, so what we ship is both intuitive and reliable — from the first wireframe and interactive prototype to automated and manual testing before every release.",
    designTitle: "User-centered design",
    designSubtitle:
      "The process moves from user research, through wireframes and interactive prototypes, to a final design aligned with your brand — each step gets validated before moving to the next.",
    designCards: [
      {
        title: "UX research",
        description:
          "We talk to your users and study their behavior, so we understand the real problem before we sketch the first screen.",
      },
      {
        title: "Wireframing & information architecture",
        description:
          "We map out structure and flow before visual design begins, so every screen has a clear purpose and a logical layout.",
      },
      {
        title: "UI design & design systems",
        description:
          "We craft a visual identity aligned with your brand, backed by a consistent design system that speeds up development down the line.",
      },
      {
        title: "Interactive prototyping",
        description:
          "We test the user flow through clickable prototypes before a single line of code is written, so issues surface early, while they're still cheap to fix.",
      },
    ],
    qaTitle: "Quality checked before every release",
    qaSubtitle:
      "We combine automated and manual testing across devices and browsers, including performance and security checks before every release.",
    qaCards: [
      {
        title: "Automated testing",
        description:
          "We build test suites that check core functionality on every code change, so regressions get caught immediately, not after launch.",
      },
      {
        title: "Manual & exploratory testing",
        description:
          "We manually test edge cases and real-world usage scenarios that automated scripts often miss.",
      },
      {
        title: "Performance testing",
        description:
          "We check load times and system behavior under stress, before problems ever reach production.",
      },
      {
        title: "Security testing",
        description:
          "We check the application against common security vulnerabilities, so user trust is never put at risk.",
      },
    ],
    processTitle: "From idea to a stable release",
    processText:
      "Design doesn't stop at handoff — we stay involved through implementation to make sure what ships matches what was designed. The same principle applies to quality: every release goes through a documented QA process, so quality stays consistent across sprints and team members, not dependent on who happened to test that week.",
    featuresTitle: "What's included",
    features: [
      "UX research and wireframing",
      "UI design aligned with your brand",
      "Interactive prototyping",
      "Automated and manual testing",
      "Performance and security testing",
      "Continuous quality improvement",
    ],
    portfolioTitle: "Some of the designs we've shipped",
    ctaTitle: "Interested in design or QA for your product?",
    ctaButton: "Book a call",
  },
  cta: {
    title: "Let's create digital solutions that drive results.",
    button: "Let's talk",
    euOffice: "EU Office",
    euCity: "Novi Sad, Serbia",
    usOffice: "US Office",
    usCity: "Wilmington, DE, USA",
    followUs: "Follow us",
  },
  footer: {
    tagline: "We build software solutions that drive real impact.",
    services: "Services",
    solutions: "Solutions",
    solutionsLinks: ["Education", "Blockchain & Web3", "Retail", "Hospitality", "Culture & Events", "Cosmetics"],
    company: "Company",
    companyLinks: ["About Us", "Careers", "Blog", "Contact Us"],
    resources: "Resources",
    resourcesLinks: ["Case Studies", "Blog", "Whitepapers", "Technologies"],
    letsTalk: "Let's talk",
    bookCall: "Book a call",
    copyright: "© 2026 We Deliver IT. All rights reserved.",
    legal: "Legal",
    legalLinks: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
  },
};

const sr: typeof en = {
  nav: {
    services: "Usluge",
    solutions: "Rešenja",
    industries: "Industrije",
    caseStudies: "Studije slučaja",
    company: "Kompanija",
    resources: "Resursi",
    bookCall: "Zakažite poziv",
    contact: "Kontakt"
  },
  hero: {
    titleLine1: "Gradimo",
    titleLine2: "softverska rešenja",
    titleLine3: "koja donose",
    titleAccent: "pravi rezultat.",
    subtitle:
      "Kompletne usluge softverskog inženjeringa i konsaltinga koje pomažu kompanijama da inoviraju, rastu i predvode u digitalnoj eri.",
    bookCall: "Zakažite poziv",
    exploreWork: "Pogledajte naše projekte",
  },
  trusted: {
    label: "Veruju nam inovativne kompanije",
  },
  stats: {
    years: "Godina iskustva",
    projects: "Uspešnih projekata",
    offices: "Zadovoljnih klijenata",
    experts: "Članova tima",
  },
 whatWeDo: {
  label: "Čime se bavimo",
  title: "Digitalna rešenja građena oko vaših ciljeva",
  description:
    "Od strategije i dizajna do razvoja i podrške, gradimo digitalna rešenja koja podstiču rast, unapređuju poslovne procese i stvaraju izuzetna iskustva za vaše korisnike.",
  services: [
    {
      slug: "it-consulting",
      title: "IT Konsalting i Tehnička Specifikacija",
      description:
        "Pomažemo kompanijama da definišu digitalnu strategiju, optimizuju procese i uvedu savremene tehnologije. Pripremamo preciznu tehničku dokumentaciju koja ideju pretvara u jasan plan projekta, smanjuje rizik i štedi vreme u procesu razvoja.",
      longDescription: [
        "Niste sigurni da li ste pravilno definisali zahteve za IT projekat ili kako da rešite postojeće izazove u poslovanju?",
        "Novac uložen u IT konsalting nije trošak, već investicija koja se višestruko vraća kroz efikasniji razvoj, stabilniji rad i dugoročno smanjenje troškova.",
        "Dobra ideja sama po sebi nije dovoljna — potreban je tehnički pismen stručnjak koji će je pretočiti u jasnu specifikaciju. Baš kao što se građevinski projekti ne rade bez nezavisnog inženjera, ni IT projekat ne bi trebalo da krene bez precizne tehničke dokumentacije koja štedi vreme razvoja i novac, i obezbeđuje da razvojni tim tačno razume šta se gradi.",
        "Ostajemo uz vas i tokom realizacije — kroz tehnički nadzor, pomoć pri nabavci opreme i stručno vođenje projekta, tako da rezultat bude modularno i robustno rešenje, a ne skup improvizacija.",
        "Naš tim poseduje međunarodno priznata iskustva i sertifikate, stečene kroz rad sa razvojnim agencijama, državnim institucijama i međunarodnim finansijskim organizacijama — što specifikacije koje pišemo čini otpornim na stvarne zahteve revizije i usklađenosti.",
      ],
      features: [
        "IT savetovanje i strateško planiranje",
        "Tehnička specifikacija IT projekata",
        "Nadzor i upravljanje IT projektima",
        "Nabavka i praćenje IT opreme",
        "Integracija informacionih sistema",
        "Optimizacija troškova",
        "Operativna i tehnička podrška",
        "Digitalna transformacija poslovanja",
      ],
    },
    {
      slug: "software-development",
      title: "Razvoj softvera i mobilnih aplikacija",
      description:
        "Projektujemo i razvijamo web sajtove, softverska rešenja po meri i cross-platform mobilne aplikacije za iOS i Android — svaki projekat spaja snažne tehničke temelje sa vrhunskim korisničkim iskustvom.",
      longDescription: [
        "Treba vam web sajt, softversko rešenje ili mobilna aplikacija koju možete lako da proširujete i održavate? Gradimo rešenja koja klijenti samostalno ažuriraju i unapređuju, dok mi vodimo računa o svemu što im ne donosi direktnu zaradu — hostingu, održavanju i ažuriranjima.",
        "Web sajtovi po meri, izrađeni na WordPress-u ili prilagođenom rešenju — sa responzivnim dizajnom, kontakt formom, Google mapom, newsletter prijavom, live chat-om i povezivanjem sa društvenim mrežama.",
        "Softverska rešenja i interni alati po meri, od jednostavnih portala do kompleksnih poslovnih sistema — projektujemo arhitekturu i bazu podataka tako da rešenje raste sa vašim poslovanjem, uz integraciju sa postojećim sistemima (ERP, CRM, plaćanja) kad god vam zatreba.",
        "Cross-platform mobilne aplikacije za iOS i Android iz jedne baze koda, sa nativnim osećajem na oba operativna sistema — uključujući offline rad, push notifikacije, plaćanja u aplikaciji i objavljivanje na App Store i Play Store.",
        "Kroz uslužno programiranje pojačavamo i postojeće razvojne timove kada vam nedostaje kapacitet ili specifično znanje, a radimo u kratkim, vidljivim iteracijama — od početne arhitekture do nedeljnih verzija koje možete sami testirati — uz automatizovano testiranje, tako da kod ostane pregledan i nakon prvog izdanja.",
      ],
      features: [
        "Izrada web sajtova po meri (WordPress ili custom rešenje)",
        "Softverska rešenja i interni alati po meri",
        "Cross-platform mobilne aplikacije (iOS i Android)",
        "Uslužno programiranje i pojačanje razvojnih timova",
        "Kontakt forme, Google mapa i newsletter integracija",
        "SEO optimizacija i GDPR usklađenost",
        "Besplatan domen i hosting u prvoj godini",
        "Integracija sa postojećim sistemima (ERP, CRM, plaćanja)",
      ],
    },
    {
      slug: "online-store",
      title: "Izrada online prodavnice",
      description:
        "Razvijamo e-commerce platforme koje povećavaju prodaju i lojalnost kupaca. Od upravljanja proizvodima i plaćanja do SEO optimizacije — isporučujemo kompletna rešenja za online prodaju.",
      longDescription: [
        "Potrebna vam je internet prodavnica sa plaćanjem karticom, više jezika i valuta, ili kalkulatorom poštarine na osnovu težine pošiljke? Gradimo kompletna e-commerce rešenja koja vam daju punu kontrolu nad sopstvenom prodavnicom — od proizvoda i kategorija do porudžbina i plaćanja.",
        "Sistem je zamišljen da raste s vama: jednostavni, grupni i varijabilni proizvodi, rezervacije, praćenje zaliha i porudžbina, uz podršku za dodatne integracije kad god vam zatrebaju.",
        "Kupcima obezbeđujemo bezbedno i jednostavno iskustvo kupovine na svim uređajima, dok vama dajemo pregled nad porudžbinama, prihodima i zalihama na jednom mestu.",
        "Nakon lansiranja ostajemo dostupni za dalji razvoj — nove funkcionalnosti, dodatne integracije plaćanja ili proširenje na nova tržišta.",
      ],
      features: [
        "Upravljanje zalihama i porudžbinama",
        "Integracija plaćanja karticom i PayPal-om",
        "Kalkulacija poštarine po težini i destinaciji",
        "Elektronske fakture",
        "Višejezičnost i viševalutnost",
        "SSL sertifikat i bezbedno plaćanje",
      ],
    },
    {
      slug: "elearning-platform",
      title: "Izrada platforme za daljinsko učenje",
      description:
        "Gradimo prilagođene LMS sisteme sa interaktivnim funkcijama, praćenjem napretka i responzivnim dizajnom — pomažemo organizacijama da pruže moderno online obrazovanje.",
      longDescription: [
        "Obrazovanje je jedan od najosnovnijih načina da se stvori vrednost — zato gradimo platforme za e-učenje koje olakšavaju kreiranje, upravljanje i isporuku kurseva, bilo da educirate zaposlene ili prodajete sopstvene kurseve.",
        "Sadržaj može biti tekstualni, slikovni ili video, uz kvizove i praćenje napretka polaznika, a lekcije su modularne tako da se lako recikliraju i proširuju za nove kurseve.",
        "Platforma je jednako pogodna za internu obuku zaposlenih koliko i za prodaju sopstvenih kurseva široj publici — pristupe, cene i kategorije definišete sami.",
        "Dizajn interfejsa prilagođavamo vašem brendu, tako da polaznici imaju utisak da uče na vašoj platformi, a ne na tuđem generičkom alatu.",
      ],
      features: [
        "Kreiranje tekstualnog, slikovnog i video sadržaja",
        "Upravljanje učenicima i predavačima",
        "Kvizovi i testovi znanja",
        "Praćenje napretka polaznika",
        "Modularne lekcije za ponovnu upotrebu",
        "Izdavanje i praćenje sertifikata",
      ],
    },
    {
      slug: "ai-blockchain",
      title: "AI, Blokčejn i nove tehnologije",
      description:
        "Iskoristite veštačku inteligenciju, mašinsko učenje i blockchain tehnologije za nove poslovne prilike. Od tokenizacije do pametnih ugovora — vodimo vas kroz integraciju naprednih tehnologija, bezbedno i efikasno.",
      longDescription: [
        "Jasno vam je da blokčejn tehnologije predstavljaju budućnost i da vam mogu pomoći da proširite biznis, ali vam treba pouzdan konsalting? Naš tim ima iskustvo u razvoju sigurnosnih tokena, kripto berzi i blokčejn platformi, i to znanje prenosi direktno na vaš projekat.",
        "Razumevanje i pravilna primena ovih tehnologija donose konkurentsku prednost — bez obzira da li ste fizičko ili pravno lice koje tek ulazi u ovu oblast. Pored blokčejna, pomažemo i u proceni gde AI, mašinsko učenje, IoT i serverless arhitekture realno mogu doneti vrednost vašem poslovanju.",
        "Iza nas stoji konkretno iskustvo — od razvoja sigurnosnih tokena i kripto berzi, do blokčejn platforme za pametni grad — znanje koje prenosimo direktno na vaš projekat.",
        "Pre nego što predložimo primenu, zajedno procenjujemo izvodljivost i rizik, kako bi odluka o uvođenju nove tehnologije bila utemeljena, a ne samo modni trend.",
      ],
      features: [
        "Blokčejn konsalting i strategija",
        "Razvoj pametnih ugovora",
        "Tokenizacija i kripto rešenja",
        "Integracija veštačke inteligencije i mašinskog učenja",
        "IoT i serverless arhitekture",
        "Analiza i modernizacija poslovnih procesa",
      ],
    },
    {
      slug: "design-qa",
      title: "Dizajn proizvoda, UX/UI i QA testiranje",
      description:
        "Stvaramo dizajn usmeren na korisnika koji spaja lep interfejs sa intuitivnim iskustvom, a zatim obezbeđujemo kvalitet, bezbednost i performanse kroz automatizovane i manuelne strategije testiranja.",
      longDescription: [
        "Dobar proizvod se gradi oko stvarnih korisnika, ne obrnuto. Kombinujemo UX istraživanje i UI dizajn sa doslednom kontrolom kvaliteta, tako da ono što isporučimo bude i intuitivno i pouzdano.",
        "Od wireframe-ova i interaktivnih prototipova, do automatizovanih test paketa i manuelnog testiranja — pokrivamo ceo put od ideje do stabilnog izdanja.",
        "Proces ide od istraživanja korisnika i wireframe-ova, preko interaktivnih prototipova, do finalnog dizajna usklađenog sa vašim brendom — svaki korak se validira pre prelaska na sledeći.",
        "Kvalitet proveravamo kroz kombinaciju automatizovanog i manuelnog testiranja na različitim uređajima i pregledačima, uključujući proveru performansi i bezbednosti pre svakog izdanja.",
      ],
      features: [
        "UX istraživanje i wireframing",
        "UI dizajn usklađen sa vašim brendom",
        "Interaktivni prototipovi",
        "Automatizovano i manuelno testiranje",
        "Testiranje performansi i bezbednosti",
        "Kontinuirano unapređenje kvaliteta",
      ],
    },
  ],
},
  work: {
    label: "Naš rad",
    title: "Projekti na koja smo ponosni",
    viewAll: "Naši projekti",
    viewCase: "Pogledaj projekat",
    cases: [
      {
        category: "Edukacija i analitika",
        title: "UpStrive System",
        description:
          "Aplikacija za merenje i unapređenje angažovanja učenika i zaposlenih pomoću alata zasnovanih na podacima.",
        url: "https://upstrive.de",
      },
      {
        category: "Blokčein i Web3",
        title: "Intersect",
        description: "Cardano Proposal Discussion Forum, Web3 platforma koja omogućava javne rasprave o upravljačkim predlozima unutar Cardano ekosistema.",
        url: "https://intersectmbo.org/",
      },
      {
        category: "Kućni proizvodi i trgovina",
        title: "Lemit",
        description: "Onlajn prodavnica za trgovca sanitarijama i keramičkim pločicama, sa kompletnim katalogom proizvoda i ERP integracijom.",
        url: "https://www.lemit.rs",
      },
      {
        category: "Koučing i lični razvoj",
        title: "MindMotions",
        description: "Platforma za onlajn kurseve, koučing i radionice, sa fokusom na lični razvoj korisnika.",
        url: "https://mindmotions.com/",
      },
      {
        category: "Naučna konferencija",
        title: "EMAN Conference",
        description:
          "Sajt za međunarodnu naučnu konferenciju iz oblasti ekonomije i menadžmenta, sa prijavom radova i registracijom.",
        url: "https://www.udekom.org.rs/",
      },
      {
        category: "Ugostiteljstvo",
        title: "Cafe Confetti Dubai",
        description: "Sajt za porodični kafe u Dubaiju, sa menijem, galerijom i informacijama o lokalu.",
        url: "https://cafeconfettidubai.com/",
      },
      {
        category: "Kultura i događaji",
        title: "SYNERGY Theatre Festival",
        description: "Sajt za međunarodni pozorišni festival, sa programom, arhivom i informacijama za posetioce.",
        url: "https://synergytheaterfest.com/",
      },
      {
        category: "Kozmetika",
        title: "GORSEN Kozmetika",
        description: "Onlajn prodavnica prirodne kozmetike, sa linijama proizvoda i mogućnošću kupovine.",
        url: "https://gorsen.rs/",
      },
      {
        category: "Turizam i smeštaj",
        title: "Xenonas Liogerma",
        description:
          "Sajt za apartmane za odmor u Jerisosu na Halkidikiju, sa prikazom osam apartmana, galerijom i mogućnošću online rezervacije.",
        url: "https://xenonas-liogerma.gr",
      },
      {
        category: "Ograde i baštenski proizvodi",
        title: "Ograde Veštačka Trava",
        description:
          "Sajt za firmu koja prodaje i ugrađuje ograde — veštačku travu, žičane ograde, farmer pletivo i 3D panelne ograde — sa katalogom proizvoda, kalkulatorom cene i referencama klijenata.",
        url: "https://ogradevestackatrava.com/",
      },
      {
        category: "Naučna konferencija",
        title: "ITEMA Conference",
        description:
          "Sajt za međunarodnu naučnu konferenciju o IT-u, turizmu, ekonomiji, menadžmentu i poljoprivredi, sa prijavom radova, registracijom i informacijama o programu.",
        url: "https://www.itema-conference.com/",
      },
      {
        category: "Naučna konferencija",
        title: "LIMEN Conference",
        description:
          "Sajt za međunarodnu naučno-poslovnu konferenciju o liderstvu, inovaciji, menadžmentu i ekonomiji, sa prijavom radova, registracijom i pristupom zbornicima ranijih izdanja.",
        url: "https://limen-conference.com/",
      },
    ],
  },
  testimonials: {
    label: "Klijenti",
    title: "Šta kažu naši klijenti",
    items: [
      {
        quote:
          "Preporučujem WE DELIVER IT za gotovo svaki projekat ili tekuću potrebu koju bilo koji potencijalni klijent može imati. Njihov osnivač poseduje oštar intelekt koji mu omogućava da razloži i najsloženije zahteve i pojednostavi ih kako bi isporučio kompletan, jasan i koncizan rezultat za svaki projekat kojeg se prihvati.",
        name: "Steven J. Husak",
        role: "CEO",
        company: "Continents Apart LLC, Sarasota FL, SAD",
        companyUrl: "https://www.continentsbrands.com/",
      },
      {
        quote:
          "WE DELIVER IT je moj stalni partner za razvoj SaaS i mobilnih aplikacija. Pouzdani su, fleksibilni i brzi, i rado ih preporučujem.",
        name: "Sven Maikranz",
        role: "CEO",
        company: "UPSTRIVE GmbH, Salzburg, Austrija",
        companyUrl: "https://upstrive.de/",
      },
      {
        quote:
          "WE DELIVER IT našoj asocijaciji pruža pouzdana rešenja, kao i pouzdanu podršku i inovativne pristupe za unapređenje našeg poslovnog modela. Njihov tim je neverovatno brz i konstantno stvara odlična rešenja.",
        name: "Nikolina Vrcelj",
        role: "Menadžerka",
        company: "Udekom Balkans, Srbija",
        companyUrl: "https://www.udekom.org.rs/",
      },
    ],
  },
  tech: {
    label: "Tehnologije sa kojima radimo",
  },
  serviceDetail: {
    back: "Sve usluge",
    featuresTitle: "Šta uključuje",
    ctaTitle: "Zainteresovani ste za ovu uslugu?",
    ctaButton: "Zakažite poziv",
    notFound: "Usluga nije pronađena.",
  },
  aboutPage: {
    back: "Nazad na početnu",
    title: "O nama",
    intro:
      "WE DELIVER IT okuplja tim konsultanata i programera sa više od 15 godina iskustva u IT industriji. Specijalizovani smo za IT konsalting, razvoj web i mobilnih aplikacija i prilagođena softverska rešenja za klijente širom Evrope i SAD-a. Radimo agilno — brza isporuka, visok kvalitet i dugoročna vrednost za svakog klijenta s kojim sarađujemo.",
    whyTitle: "Zašto nas klijenti biraju",
    whyText:
      "Kompanije širom Evrope i SAD-a nam veruju jer spajamo tehničku stručnost sa ljudskim pristupom. Ne razvijamo samo softver — gradimo partnerstva koja traju. Fokus nam je na transparentnosti, odgovornosti i rezultatima koji prave stvarnu razliku.",
    closingStatement: "Sanjamo veliko, naporno radimo i isporučujemo rezultate koji donose promene.",
    closingText:
      "Ne izmišljamo statistike niti ulepšavamo brojke — svaki projekat koji završimo je odraz pravog rada, iskustva i poverenja. Ponosni smo na kvalitet koji isporučujemo i dugoročne odnose koje gradimo sa klijentima.",
  },
  careersPage: {
    back: "Nazad na početnu",
    title: "Karijera",
    messageBefore:
      "Trenutno nemamo otvorenih pozicija, ali rado čuvamo vaš CV za buduće prilike — javite nam se na ",
    messageAfter: ".",
  },
  projectsPage: {
    back: "Nazad na početnu",
    title: "Svi naši projekti",
    subtitle: "Pregled proizvoda, platformi i biznisa čiji smo deo bili.",
  },
  privacyPage: {
    back: "Nazad na početnu",
    label: "Politika privatnosti",
    updated: "Poslednja izmena: 30. jul 2026.",
    intro:
      "Vaša privatnost nam je važna. Ova politika objašnjava koje podatke prikupljamo kada posetite naš sajt ili nas kontaktirate, zašto ih prikupljamo i kako ih štitimo.",
    sections: [
      {
        heading: "Koje podatke prikupljamo",
        text: "Kao i većina sajtova, automatski prikupljamo osnovne tehničke podatke o poseti — tip pregledača, jezičko podešavanje i stranice koje posećujete — kako bismo bolje razumeli kako se sajt koristi. Lične podatke, poput imena i email adrese, prikupljamo samo kada nam ih sami dostavite, na primer kroz kontakt formu ili prijavu za posao.",
      },
      {
        heading: "Kako koristimo vaše podatke",
        text: "Podatke koje nam pošaljete koristimo isključivo da bismo odgovorili na vaš upit, pripremili ponudu ili razmotrili vašu prijavu za posao. Ne prodajemo niti iznajmljujemo vaše lične podatke trećim licima.",
      },
      {
        heading: "Kolačići i lokalno skladištenje",
        text: "Sajt koristi lokalno skladištenje pregledača (localStorage) da zapamti vaš izbor jezika i teme prikaza — ovi podaci ostaju samo na vašem uređaju i ne šalju se nama. Detaljnije informacije potražite u našoj Politici kolačića.",
      },
      {
        heading: "Bezbednost podataka",
        text: "Trudimo se da zaštitimo vaše podatke odgovarajućim tehničkim i organizacionim merama, ali imajte u vidu da nijedan prenos podataka preko interneta nije apsolutno bezbedan, pa ne možemo garantovati potpunu sigurnost.",
      },
      {
        heading: "Linkovi ka drugim sajtovima",
        text: "Naš sajt može sadržati linkove ka sajtovima trećih strana. Nemamo kontrolu nad njihovim sadržajem niti politikama privatnosti, pa vam preporučujemo da ih posebno proverite pre nego što im poverite svoje podatke.",
      },
      {
        heading: "Vaša prava",
        text: "U svakom trenutku možete zatražiti uvid, ispravku ili brisanje ličnih podataka koje smo prikupili o vama. Za ostvarivanje ovih prava, ili bilo kakvo pitanje u vezi sa ovom politikom, obratite nam se putem email adrese navedene ispod.",
      },
    ],
    contactTitle: "Kontakt",
    contactText:
      "Za sva pitanja u vezi sa ovom politikom privatnosti, pišite nam na office@we-deliver.io ili nam se obratite na adresu WE DELIVER IT DOO, Dinka Šimunovića 60A, 21132 Petrovaradin, Srbija.",
  },
  termsPage: {
    back: "Nazad na početnu",
    label: "Uslovi korišćenja",
    updated: "Poslednja izmena: 30. jul 2026.",
    intro:
      "Korišćenjem sajta we-deliver.io prihvatate uslove navedene u nastavku. Ako se sa njima ne slažete, molimo vas da ne koristite ovaj sajt.",
    sections: [
      {
        heading: "Intelektualna svojina",
        text: "Ako nije drugačije navedeno, WE DELIVER IT i/ili njeni davaoci licence poseduju prava intelektualne svojine nad celokupnim sadržajem sajta — tekstovima, dizajnom, grafikom i logotipom. Sadržaj možete pregledati u lične, nekomercijalne svrhe, ali ga ne smete kopirati, preprodavati, umnožavati ili distribuirati bez naše prethodne pisane saglasnosti.",
      },
      {
        heading: "Povezivanje na naš sadržaj (linkovanje)",
        text: "Organizacije i pojedinci mogu postaviti link ka našoj početnoj stranici, pod uslovom da to ne čine na način koji je obmanjujući, koji nas lažno prikazuje kao sponzora ili odobravaoca njihovog sadržaja, ili koji šteti našem ugledu.",
      },
      {
        heading: "Ograničenje odgovornosti",
        text: "Sadržaj sajta se pruža „takav kakav jeste”, bez ikakvih garancija tačnosti ili potpunosti. Ne odgovaramo za štetu koja može nastati usled korišćenja informacija sa ovog sajta, u meri u kojoj to dozvoljava važeći zakon.",
      },
      {
        heading: "Izmene uslova",
        text: "Zadržavamo pravo da povremeno izmenimo ove uslove korišćenja. Izmene stupaju na snagu od trenutka objavljivanja na sajtu, pa vas savetujemo da povremeno proverite ovu stranicu.",
      },
      {
        heading: "Merodavno pravo",
        text: "Ovi uslovi korišćenja tumače se u skladu sa zakonima Republike Srbije.",
      },
    ],
    contactTitle: "Kontakt",
    contactText:
      "Za sva pitanja u vezi sa uslovima korišćenja, pišite nam na office@we-deliver.io ili nam se obratite na adresu WE DELIVER IT DOO, Dinka Šimunovića 60A, 21132 Petrovaradin, Srbija.",
  },
  cookiePage: {
    back: "Nazad na početnu",
    label: "Politika kolačića",
    updated: "Poslednja izmena: 30. jul 2026.",
    intro:
      "Ova politika objašnjava šta su kolačići, kako ih (ne) koristimo na našem sajtu i kako možete upravljati njima u svom pregledaču.",
    sections: [
      {
        heading: "Šta su kolačići",
        text: "Kolačići su male tekstualne datoteke koje sajt čuva na vašem uređaju putem pregledača, radi pamćenja vaših podešavanja i unapređenja korisničkog iskustva.",
      },
      {
        heading: "Kako trenutno koristimo kolačiće",
        text: "Naš sajt trenutno ne koristi kolačiće za praćenje ili oglašavanje. Vaš izbor jezika (srpski/engleski) i teme prikaza čuvamo lokalno u pregledaču (localStorage), a ne putem kolačića — ovi podaci ostaju isključivo na vašem uređaju.",
      },
      {
        heading: "Kolačići trećih strana",
        text: "Ukoliko u budućnosti uvedemo alate poput Google Analytics-a radi praćenja posećenosti sajta, ova politika će biti ažurirana, a takvi alati mogu postaviti sopstvene kolačiće u skladu sa njihovim politikama privatnosti.",
      },
      {
        heading: "Upravljanje kolačićima",
        text: "Većina pregledača omogućava upravljanje i brisanje kolačića kroz podešavanja. Imajte u vidu da onemogućavanje kolačića može uticati na funkcionalnost pojedinih sajtova, iako trenutno ne utiče na osnovno korišćenje našeg sajta.",
      },
    ],
    contactTitle: "Kontakt",
    contactText:
      "Za sva pitanja u vezi sa kolačićima, pišite nam na office@we-deliver.io ili nam se obratite na adresu WE DELIVER IT DOO, Dinka Šimunovića 60A, 21132 Petrovaradin, Srbija.",
  },
  contactPage: {
    back: "Nazad na početnu",
    title: "Stupite u kontakt",
    subtitle: "Imate projekat na umu ili samo želite da se javite? Popunite formu i javićemo vam se.",
    companyName: "WE DELIVER IT DOO",
    companyDescription:
      "IT kompanija iz Petrovaradina koja pruža usluge razvoja softvera po meri, IT konsaltinga i izrade web i mobilnih aplikacija. Osnovana 22. novembra 2022. godine.",
    addressLabel: "Adresa",
    address: "Dinka Šimunovića 60A, 21132 Petrovaradin, Srbija",
    regNumberLabel: "Matični broj",
    regNumber: "21858501",
    taxIdLabel: "PIB",
    taxId: "113390609",
    emailLabel: "Email",
    formTitle: "Pošaljite nam poruku",
    nameLabel: "Ime i prezime",
    namePlaceholder: "Vaše ime",
    emailFieldLabel: "Email adresa",
    emailPlaceholder: "vas@primer.com",
    messageLabel: "Poruka",
    messagePlaceholder: "Recite nam nešto o vašem projektu...",
    submit: "Pošaljite poruku",
  },
  softwareDevPage: {
    back: "Sve usluge",
    label: "Razvoj softvera i mobilnih aplikacija",
    intro:
      "Treba vam web sajt, softversko rešenje ili mobilna aplikacija koju možete lako da proširujete i održavate? Gradimo rešenja koja vaš tim samostalno ažurira i unapređuje, dok mi vodimo računa o tehničkoj strani — hostingu, održavanju i sigurnosnim ažuriranjima.",
    pillars: [
      {
        title: "Web sajtovi",
        description:
          "Web sajtovi po meri, izrađeni na WordPress-u ili prilagođenom rešenju — sa responzivnim dizajnom, kontakt formom, Google mapom, newsletter prijavom, live chat-om i povezivanjem sa društvenim mrežama. Svaki sajt dolazi sa SEO optimizacijom, GDPR obaveštenjem i besplatnim domenom i hostingom u prvoj godini.",
      },
      {
        title: "Softverska rešenja",
        description:
          "Softverska rešenja i interni alati po meri, od jednostavnih portala do kompleksnih poslovnih sistema — projektujemo arhitekturu i bazu podataka tako da rešenje raste sa vašim poslovanjem, uz integraciju sa postojećim sistemima (ERP, CRM, plaćanja) kad god vam zatreba.",
      },
      {
        title: "Mobilne aplikacije",
        description:
          "Cross-platform mobilne aplikacije za iOS i Android iz jedne baze koda, sa nativnim osećajem na oba operativna sistema — uključujući offline rad, push notifikacije, plaćanja u aplikaciji i objavljivanje na App Store i Play Store.",
      },
    ],
    processTitle: "Kako radimo",
    processText:
      "Kroz uslužno programiranje pojačavamo i postojeće razvojne timove kada vam nedostaje kapacitet ili specifično znanje, a radimo u kratkim, vidljivim iteracijama — od početne arhitekture do nedeljnih verzija koje možete sami testirati — uz automatizovano testiranje, tako da kod ostane pregledan i nakon prvog izdanja.",
    pricing: {
      title: "Paketi za izradu web sajta",
      subtitle: "Orijentacione cene za izradu sajta — javite nam se za ponudu prilagođenu vašem projektu.",
      customNote:
        "Pored gotovih paketa, razvijamo i custom rešenja u React-u i drugim savremenim tehnologijama, prilagođena specifičnim potrebama vašeg projekta. Cena se formira individualno, na osnovu obima i funkcionalnosti — kontaktirajte nas za personalizovanu ponudu.",
      pagesLabel: "Broj strana",
      featureRows: [
        "Responzivan dizajn",
        "Galerija",
        "Kontakt forma",
        "Google mapa",
        "Skripte",
        "Bilten / newsletter",
        "Live chat",
        "Slajder",
        "Integracija sa društvenim mrežama",
        "GDPR obaveštenje",
        "Besplatan domen i hosting",
      ],
      packages: [
        {
          name: "Osnovni",
          price: "800",
          type: "WordPress CMS",
          pages: "Do 5 strana",
          included: [true, true, true, true, false, false, false, false, false, false, false],
        },
        {
          name: "Standard",
          price: "1.200",
          type: "WordPress CMS",
          pages: "Do 15 strana",
          included: [true, true, true, true, false, true, false, true, true, false, false],
        },
        {
          name: "Plus",
          price: "2.200",
          type: "CMS + prodavnica ili e-učenje",
          pages: "Do 15 strana i 10 proizvoda",
          included: [true, true, true, true, false, true, true, true, true, true, false],
        },
        {
          name: "Premijum",
          price: "3.500",
          type: "CMS + prodavnica ili e-učenje",
          pages: "Do 30 strana i 20 proizvoda",
          included: [true, true, true, true, true, true, true, true, true, true, true],
        },
      ],
      ctaButton: "Zatražite ponudu",
    },
    featuresTitle: "Šta uključuje",
    features: [
      "Izrada web sajtova po meri (WordPress ili custom rešenje)",
      "Softverska rešenja i interni alati po meri",
      "Cross-platform mobilne aplikacije (iOS i Android)",
      "Uslužno programiranje i pojačanje razvojnih timova",
      "Kontakt forme, Google mapa i newsletter integracija",
      "SEO optimizacija i GDPR usklađenost",
      "Besplatan domen i hosting u prvoj godini",
      "Integracija sa postojećim sistemima (ERP, CRM, plaćanja)",
    ],
    portfolioTitle: "Neki od sajtova koje smo napravili",
    ctaTitle: "Zainteresovani ste za ovakav projekat?",
    ctaButton: "Zakažite poziv",
  },
  onlineStorePage: {
    back: "Sve usluge",
    label: "Izrada online prodavnice",
    intro:
      "Potrebna vam je internet prodavnica sa plaćanjem karticom i PayPal-om, podrškom za više jezika i valuta, ili kalkulatorom poštarine na osnovu težine i destinacije pošiljke? Gradimo kompletna e-commerce rešenja na WordPress-u i WooCommerce-u — najrasprostranjenijoj platformi za online prodaju na svetu, koja pokreće preko 10 miliona prodavnica — i dajemo vam punu kontrolu nad sopstvenom prodavnicom, od proizvoda i kategorija do porudžbina i plaćanja.",
    featuresGridTitle: "Šta dobijate uz prodavnicu",
    featureCards: [
      {
        title: "Pokazni proizvodi",
        description:
          "Prodavnica dolazi sa deset unapred podešenih pokaznih proizvoda, tako da odmah vidite kako funkcioniše katalog i proces kupovine. Dodatne proizvode potom samostalno unosite kroz jednostavan administratorski panel.",
      },
      {
        title: "Upravljanje zalihama",
        description:
          "Pratite stanje na skladištu za svaki proizvod i varijantu u realnom vremenu, uz automatska upozorenja kada zalihe padnu ispod definisanog nivoa.",
      },
      {
        title: "Elektronske fakture",
        description:
          "Svaka porudžbina automatski generiše fakturu koju kupac dobija na email, a vi imate uredan pregled svih izdatih računa na jednom mestu.",
      },
      {
        title: "Kalkulacija poštarine",
        description:
          "Cena dostave se automatski obračunava na osnovu težine pošiljke i destinacije kupca, tako da nema iznenađenja ni za vas ni za kupce.",
      },
      {
        title: "PayPal integracija",
        description:
          "Omogućite kupcima plaćanje putem PayPal-a, jednog od najpouzdanijih platnih sistema na svetu, uz brz i bezbedan obračun.",
      },
      {
        title: "Kategorije proizvoda",
        description:
          "Organizujte katalog u kategorije i podkategorije, sa filterima koji kupcima olakšavaju pronalaženje traženog proizvoda.",
      },
      {
        title: "Praćenje porudžbina",
        description:
          "Kupci prate status svoje porudžbine od potvrde do isporuke, a vi imate pregled svih porudžbina iz administracije prodavnice.",
      },
      {
        title: "Plaćanje karticom",
        description:
          "Integrišemo bezbedno plaćanje platnim karticama (Visa, MasterCard i druge) direktno kroz prodavnicu, uz podršku banaka i platnih procesora po vašem izboru.",
      },
      {
        title: "SSL sertifikat",
        description:
          "Svaka prodavnica dobija SSL sertifikat koji šifruje podatke kupaca i gradi poverenje neophodno za online kupovinu.",
      },
      {
        title: "Vođenje kupaca",
        description:
          "Kupci kreiraju sopstvene naloge, čuvaju adrese i prate istoriju porudžbina, što ubrzava svaku sledeću kupovinu.",
      },
      {
        title: "Fleksibilni proizvodi i rezervacije",
        description:
          "Podržavamo jednostavne, grupne i varijabilne proizvode (npr. po boji ili veličini), kao i funkcionalnost rezervacija za usluge i termine.",
      },
      {
        title: "Višejezičnost i viševalutnost",
        description:
          "Prilagođavamo prodavnicu tržištima van Srbije — sa podrškom za više jezika i valuta, tako da lako prodajete i kupcima u inostranstvu.",
      },
    ],
    processTitle: "Puna kontrola nad vašom prodavnicom",
    processText:
      "Verujemo u izgradnju dugoročnih poslovnih odnosa sa klijentima, zato idemo korak dalje kako bismo vam obezbedili potpunu kontrolu nad sopstvenom veb lokacijom. Kroz CMS samostalno upravljate sadržajem, slikama, menijima, opisima i kategorijama, a zahvaljujući ogromnoj WordPress zajednici i hiljadama besplatnih i plaćenih dodataka, nove funkcionalnosti u prodavnicu možete integrisati brzo i jednostavno kad god vam zatrebaju.",
    servicesTitle: "Naše usluge uključuju",
    servicesList: [
      "Profesionalni dizajn e-commerce sajta u WordPress-u",
      "Razvoj online prodavnice putem WooCommerce-a",
      "Prilagođeni razvoj e-prodavnice po specifičnim zahtevima",
      "Integraciju načina plaćanja",
      "Razvoj dodataka po zahtevu",
    ],
    pricing: {
      title: "Paketi za izradu online prodavnice",
      subtitle: "Orijentacione cene za izradu e-commerce prodavnice — javite nam se za ponudu prilagođenu vašem projektu.",
      customNote:
        "Pored gotovih paketa, razvijamo i potpuno prilagođena e-commerce rešenja, uključujući integraciju sa ERP/CRM sistemima i specifične poslovne zahteve. Cena se formira individualno, na osnovu broja proizvoda i potrebnih funkcionalnosti — kontaktirajte nas za personalizovanu ponudu.",
      featureRows: [
        "Responzivan dizajn",
        "Kategorije i filteri proizvoda",
        "Jednostavni proizvodi",
        "Varijabilni proizvodi (boja, veličina...)",
        "Plaćanje karticom i PayPal-om",
        "Kalkulacija poštarine po težini",
        "Elektronske fakture",
        "Rezervacije usluga/termina",
        "Višejezičnost i viševalutnost",
        "Integracija sa ERP/CRM sistemom",
        "Besplatan domen i hosting (1. godina)",
      ],
      packages: [
        {
          name: "Start",
          price: "2.200",
          type: "WooCommerce prodavnica",
          pages: "Do 30 proizvoda",
          included: [true, true, true, false, true, false, false, false, false, false, true],
        },
        {
          name: "Standard",
          price: "3.200",
          type: "WooCommerce prodavnica",
          pages: "Do 100 proizvoda",
          included: [true, true, true, true, true, true, true, false, false, false, true],
        },
        {
          name: "Biznis",
          price: "4.800",
          type: "WooCommerce prodavnica",
          pages: "Do 300 proizvoda",
          included: [true, true, true, true, true, true, true, true, true, false, true],
        },
        {
          name: "Premijum",
          price: "7.500",
          type: "WooCommerce prodavnica",
          pages: "Neograničen broj proizvoda",
          included: [true, true, true, true, true, true, true, true, true, true, true],
        },
      ],
      ctaButton: "Zatražite ponudu",
    },
    portfolioTitle: "Neke od prodavnica koje smo napravili",
    ctaTitle: "Zainteresovani ste za sopstvenu online prodavnicu?",
    ctaButton: "Zakažite poziv",
  },
  elearningPage: {
    back: "Sve usluge",
    label: "Izrada platforme za daljinsko učenje",
    intro:
      "Želite da kreirate i prodajete sopstvene online kurseve, ili da obučavate zaposlene kroz internu platformu za učenje? Gradimo LMS platforme na WordPress-u koje vam daju punu kontrolu nad kursevima — od kreiranja lekcija i kvizova do praćenja napretka polaznika i izdavanja sertifikata — uz dizajn prilagođen vašem brendu, tako da polaznici uče na vašoj platformi, a ne na tuđem generičkom alatu.",
    featuresGridTitle: "Šta dobijate uz platformu",
    featureCards: [
      {
        title: "Tekstualni, slikovni i video sadržaj",
        description:
          "Kombinujte tekst, slike i video u okviru istog kursa, tako da svaka lekcija bude prilagođena sadržaju koji predajete i tempu učenja polaznika.",
      },
      {
        title: "Upravljanje učenicima i predavačima",
        description:
          "Dodeljujte predavače kursevima, pratite ko je upisan i komunicirajte direktno kroz platformu, sve iz jednog administratorskog panela.",
      },
      {
        title: "Kvizovi i testovi znanja",
        description:
          "Proveravajte usvojeno znanje kroz kvizove i testove nakon svake lekcije, uz automatsko ocenjivanje i trenutnu povratnu informaciju polaznicima.",
      },
      {
        title: "Praćenje napretka polaznika",
        description:
          "Vidite koliko je svaki polaznik napredovao kroz kurs, koje lekcije je završio i gde zastaje, kako biste na vreme reagovali.",
      },
      {
        title: "Modularne lekcije za ponovnu upotrebu",
        description:
          "Gradite lekcije kao samostalne module koje lako recikliramo i kombinujemo u nove kurseve, bez ponovnog kreiranja sadržaja od nule.",
      },
      {
        title: "Izdavanje i praćenje sertifikata",
        description:
          "Nakon uspešno završenog kursa polaznici automatski dobijaju sertifikat, a vi imate uvid u sve izdate sertifikate na jednom mestu.",
      },
    ],
    processTitle: "Platforma prilagođena vašem brendu i publici",
    processText:
      "Platforma je podjednako pogodna za internu obuku zaposlenih koliko i za prodaju sopstvenih kurseva široj publici — pristupe, cene i kategorije kurseva definišete sami. Dizajn interfejsa prilagođavamo vašem brendu, a zahvaljujući WordPress ekosistemu dodataka, nove funkcionalnosti možete integrisati brzo i jednostavno kad god vam zatrebaju.",
    servicesTitle: "Naše usluge uključuju",
    servicesList: [
      "Profesionalni dizajn platforme za e-učenje u WordPress-u",
      "Razvoj LMS platforme sa kursevima i lekcijama",
      "Prilagođeni razvoj po specifičnim zahtevima organizacije",
      "Integraciju plaćanja za prodaju kurseva",
      "Razvoj dodataka po zahtevu",
    ],
    portfolioTitle: "Neke od platformi koje smo napravili",
    ctaTitle: "Zainteresovani ste za sopstvenu platformu za e-učenje?",
    ctaButton: "Zakažite poziv",
  },
  aiBlockchainPage: {
    back: "Sve usluge",
    label: "AI, Blokčejn i nove tehnologije",
    intro:
      "Jasno vam je da blokčejn tehnologije predstavljaju budućnost i da mogu pomoći vašem biznisu da napravi iskorak, ali vam je potreban pouzdan konsalting? Blokčejn je poslednjih godina jedna od najtraženijih tema u tehnološkom svetu, a pravilno razumevanje i primena ovih tehnologija donose realnu konkurentsku prednost — bez obzira da li ste fizičko ili pravno lice koje tek ulazi u ovu oblast. Pored blokčejna, pomažemo i u proceni gde veštačka inteligencija, mašinsko učenje, IoT i serverless arhitekture realno mogu doneti vrednost vašem poslovanju.",
    experienceTitle: "Naše iskustvo u blokčejnu",
    experienceCards: [
      {
        title: "Sigurnosni token",
        description:
          "Učestvovali smo u razvoju jednog od prvih sigurnosnih tokena (security token) u Evropi, uz sve pravne i tehničke zahteve koje takav projekat nosi.",
      },
      {
        title: "Kripto berza",
        description:
          "Bili smo deo tima koji je razvijao kripto berzu, od arhitekture platforme do integracije trgovinskih mehanizama.",
      },
      {
        title: "Blokčejn akademija",
        description:
          "Kreirali smo blokčejn akademiju za studente Ekonomskog fakulteta u Nišu, prenoseći znanje novoj generaciji stručnjaka.",
      },
      {
        title: "Pametni grad",
        description:
          "Trenutno učestvujemo u razvoju blokčejn platforme za pametni grad, koja povezuje javne servise i podatke na transparentan način.",
      },
      {
        title: "Trgovina i rudarenje",
        description:
          "Imamo iskustvo u trgovini kriptovalutama i rudarenju, što nam daje uvid u praktičnu, a ne samo teorijsku stranu blokčejn ekosistema.",
      },
    ],
    aiTitle: "AI i nove tehnologije",
    aiSubtitle:
      "Prepoznajemo gde veštačka inteligencija i druge nastupajuće tehnologije mogu doneti stvarnu vrednost vašem poslovanju, i tu vrednost pretvaramo u konkretno rešenje.",
    aiCards: [
      {
        title: "Veštačka inteligencija i mašinsko učenje",
        description:
          "Prepoznajemo gde AI i mašinsko učenje realno mogu unaprediti vaš proizvod ili proces, a zatim gradimo i integrišemo modele u postojeći sistem.",
      },
      {
        title: "AI asistenti i automatizacija",
        description:
          "Razvijamo chatbotove i AI asistente koji automatizuju podršku korisnicima, obradu podataka i ponavljajuće poslovne procese.",
      },
      {
        title: "IoT rešenja",
        description:
          "Povezujemo uređaje i senzore u IoT rešenja koja prikupljaju i obrađuju podatke u realnom vremenu.",
      },
      {
        title: "Serverless arhitektura",
        description:
          "Gradimo serverless arhitekture za timove koji žele da skaliraju event-driven procese bez upravljanja serverima.",
      },
    ],
    processTitle: "Procena izvodljivosti pre primene",
    processText:
      "Pre nego što predložimo primenu određene tehnologije, zajedno procenjujemo izvodljivost i rizik, kako bi odluka o uvođenju nečeg novog bila utemeljena na stvarnim potrebama vašeg poslovanja, a ne samo modni trend.",
    featuresTitle: "Šta uključuje",
    features: [
      "Blokčejn konsalting i strategija",
      "Razvoj pametnih ugovora",
      "Tokenizacija i kripto rešenja",
      "Integracija veštačke inteligencije i mašinskog učenja",
      "IoT i serverless arhitekture",
      "Analiza i modernizacija poslovnih procesa",
    ],
    portfolioTitle: "Neki od projekata koje smo napravili",
    ctaTitle: "Zainteresovani ste za AI ili blokčejn rešenje za vaš biznis?",
    ctaButton: "Zakažite poziv",
  },
  designQaPage: {
    back: "Sve usluge",
    label: "Dizajn proizvoda, UX/UI i QA testiranje",
    intro:
      "Dobar proizvod se gradi oko stvarnih korisnika, ne obrnuto. Kombinujemo UX istraživanje i UI dizajn sa doslednom kontrolom kvaliteta, tako da ono što isporučimo bude i intuitivno i pouzdano — od prvog wireframe-a i interaktivnog prototipa, do automatizovanog i manuelnog testiranja pre svakog izdanja.",
    designTitle: "Dizajn usmeren na korisnika",
    designSubtitle:
      "Proces ide od istraživanja korisnika, preko wireframe-ova i interaktivnih prototipova, do finalnog dizajna usklađenog sa vašim brendom — svaki korak se validira pre prelaska na sledeći.",
    designCards: [
      {
        title: "UX istraživanje",
        description:
          "Razgovaramo sa vašim korisnicima i analiziramo njihovo ponašanje, kako bismo razumeli stvaran problem pre nego što nacrtamo prvi ekran.",
      },
      {
        title: "Wireframing i arhitektura informacija",
        description:
          "Definišemo strukturu i tok kroz aplikaciju pre vizuelnog dizajna, tako da svaki ekran ima jasnu svrhu i logičan raspored sadržaja.",
      },
      {
        title: "UI dizajn i design sistemi",
        description:
          "Kreiramo vizuelni identitet interfejsa usklađen sa vašim brendom, uz konzistentan design sistem koji ubrzava dalji razvoj.",
      },
      {
        title: "Interaktivni prototipovi",
        description:
          "Testiramo tok korišćenja kroz klikabilne prototipove pre nego što se napiše prva linija koda, tako da se greške otkrivaju rano, dok su još jeftine za ispravku.",
      },
    ],
    qaTitle: "Kvalitet proveren pre svakog izdanja",
    qaSubtitle:
      "Kombinujemo automatizovano i manuelno testiranje na različitim uređajima i pregledačima, uključujući proveru performansi i bezbednosti pre svakog izdanja.",
    qaCards: [
      {
        title: "Automatizovano testiranje",
        description:
          "Gradimo test pakete koji automatski proveravaju ključne funkcionalnosti pri svakoj izmeni koda, tako da se regresije uhvate odmah, a ne posle objavljivanja.",
      },
      {
        title: "Manuelno i eksploratorno testiranje",
        description:
          "Ručno testiramo ivične slučajeve i realne scenarije korišćenja koje automatski skriptovi često propuste.",
      },
      {
        title: "Testiranje performansi",
        description:
          "Proveravamo brzinu učitavanja i ponašanje sistema pod opterećenjem, pre nego što se problemi osete na produkciji.",
      },
      {
        title: "Testiranje bezbednosti",
        description:
          "Proveravamo aplikaciju na uobičajene bezbednosne propuste, tako da poverenje korisnika ne bude ugroženo.",
      },
    ],
    processTitle: "Od ideje do stabilnog izdanja",
    processText:
      "Dizajn ne staje na predaji fajlova — ostajemo uključeni tokom celog razvoja kako bismo bili sigurni da ono što se isporučuje zaista odgovara onome što je dizajnirano. Isti princip važi i za kvalitet: svako izdanje prolazi kroz dokumentovan QA proces, tako da kvalitet ostane dosledan kroz sve sprintove i članove tima, a ne zavisi od toga ko je te nedelje testirao.",
    featuresTitle: "Šta uključuje",
    features: [
      "UX istraživanje i wireframing",
      "UI dizajn usklađen sa vašim brendom",
      "Interaktivni prototipovi",
      "Automatizovano i manuelno testiranje",
      "Testiranje performansi i bezbednosti",
      "Kontinuirano unapređenje kvaliteta",
    ],
    portfolioTitle: "Neki od dizajna koje smo isporučili",
    ctaTitle: "Zainteresovani ste za dizajn ili QA za vaš proizvod?",
    ctaButton: "Zakažite poziv",
  },
  cta: {
    title: "Hajde da napravimo digitalna rešenja koja donose rezultate.",
    button: "Razgovarajmo",
    euOffice: "Lokacija",
    euCity: "Novi Sad, Srbija",
    usOffice: "Adresa",
    usCity: "Dinka Šimunovića 60a",
    followUs: "Zapratite nas",
  },
  footer: {
    tagline: "Gradimo softverska rešenja koja donose pravi rezultat.",
    services: "Usluge",
    solutions: "Rešenja",
    solutionsLinks: ["Edukacija", "Blockchain i Web3", "Maloprodaja", "Ugostiteljstvo", "Kultura i događaji", "Kozmetika"],
    company: "Kompanija",
    companyLinks: ["O nama", "Karijera", "Blog", "Kontakt"],
    resources: "Resursi",
    resourcesLinks: ["Studije slučaja", "Blog", "Beli papiri", "Tehnologije"],
    letsTalk: "Razgovarajmo",
    bookCall: "Zakažite poziv",
    copyright: "© 2026 We Deliver IT. Sva prava zadržana.",
    legal: "Pravna pitanja",
    legalLinks: ["Politika privatnosti", "Uslovi korišćenja", "Politika kolačića"],
  },
};

export const translations = { en, sr };
export type TranslationKeys = typeof en;

