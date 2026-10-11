/**
 * Central portfolio data — generated from Ritesh's resume (11cv-ritesh.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ritesh Kumar',
  displayName: 'Ritesh Kumar',
  firstName: 'RITESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RITESH ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Core Java', 'Android Development'],
  intro:
    'An MCA student at IIT Patna and software developer with a strong foundation in Core Java, Data Structures & Algorithms, OOP, JDBC, MySQL, and mobile application development with Android, Kotlin, and Java.',
  location: 'New Delhi, India',
  email: 'ritesh.iitpatna@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ritesh-iitpatna/',
    github: 'https://github.com/ritesh-iitpatna',
  },
  formspreeEndpoint:
    import.meta.env.VITE_FORMSPREE_ENDPOINT ||
    (import.meta.env.VITE_FORMSPREE_KEY
      ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_KEY}`
      : ''),
  resumePdf: '/assets/Ritesh_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ritesh Kumar',
  },
  interests: ['Backend Development', 'System Design', 'Algorithms & DSA', 'Kotlin'],
};

export const education = [
  {
    school: 'IIT Patna',
    place: 'Patna, India',
    degree: 'Master of Computer Applications (MCA)',
    period: '2025 – Present',
    score: 'MCA Scholar',
  },
  {
    school: 'University of Delhi',
    place: 'Delhi, India',
    degree: 'B.Sc. in Physical Science with Electronics',
    period: 'Aug 2022 – Aug 2025',
    score: 'CGPA > 8.0 (3 Semesters)',
  },
];

export const experience = [
  {
    company: 'IIT Patna',
    role: 'MCA Scholar & Developer',
    place: 'Patna, India',
    period: '2025 – Present',
    points: [
      'Pursuing Master of Computer Applications with intensive focus on Core Java, Data Structures & Algorithms, and OOP concepts.',
      'Developing desktop and web software systems utilizing JDBC, MySQL, Next.js, React, TypeScript, and modern UI engineering.',
      'Applying Git and GitHub version control, code optimization, clean architectural patterns, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'bank-management-system',
    title: 'Bank Management System',
    year: '2026',
    genre: 'Java • JDBC • MySQL • Desktop',
    logline: 'A comprehensive desktop ATM simulation supporting deposits, withdrawals, fast cash, and PIN changes.',
    stack: ['Java Swing', 'Java AWT', 'JDBC', 'MySQL', 'Git'],
    build: [
      'Developed a desktop banking application using Java Swing, AWT, JDBC, and MySQL, supporting secure login, deposits, withdrawals, fast cash, balance enquiry, PIN change, and mini statements.',
      'Implemented robust input validation, custom exception handling, and relational database operations to manage customer account records and transaction histories.',
      'Integrated Git and GitHub for source-code management, branching workflows, and version control.',
    ],
    features: [
      'Interactive ATM user interface built with Java Swing & AWT',
      'Account authentication & secure PIN management',
      'Transaction processing: deposits, withdrawals, and fast cash',
      'Live balance enquiry and mini statement generation',
      'Relational database integration via JDBC and MySQL',
    ],
    metrics: [
      { value: '7+', label: 'banking operations supported' },
      { value: '100%', label: 'transaction persistence' },
      { value: 'JDBC', label: 'relational database backend' },
      { value: 'Desktop', label: 'custom Swing & AWT UI' },
    ],
    github: 'https://github.com/ritesh-iitpatna',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'developer-portfolio',
    title: 'Personal Developer Portfolio',
    year: '2026',
    genre: 'React • Next.js • TypeScript • UI/UX',
    logline: 'An interactive streaming-inspired cinematic developer portfolio built with React, Next.js, and Framer Motion.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    build: [
      'Built a responsive personal portfolio using Next.js, React, TypeScript, and Tailwind CSS showcasing projects, technical skills, and academic background.',
      'Created an interactive cinematic intro sequence and physics-driven animations using Framer Motion with glassmorphism UI, audio cues, and responsive layouts.',
      'Leveraged AI-assisted development tools throughout the project for implementation, debugging, UI/UX refinement, and asset pipelines.',
    ],
    features: [
      'Cinematic streaming-platform interface & navigation',
      'Framer Motion smooth scroll and entrance choreography',
      'Interactive project inspect modals and PDF resume viewer',
      'Full dark-mode glassmorphic design system with Tailwind CSS',
      'Responsive WebP asset processing and fast static generation',
    ],
    metrics: [
      { value: '60 FPS', label: 'fluid physics animations' },
      { value: '100%', label: 'responsive across devices' },
      { value: '0-lag', label: 'smooth Lenis scrolling' },
      { value: 'WebP', label: 'optimized asset loading' },
    ],
    github: 'https://github.com/ritesh-iitpatna/portfolio',
    live: 'https://portfolio-one-phi-bh3n1xdisv.vercel.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'core-java-dsa-suite',
    title: 'Core Java & Data Structures Suite',
    year: '2026',
    genre: 'Core Java • OOP • Algorithms • Collections',
    logline: 'Modular implementations of fundamental data structures, algorithms, and OOP patterns in Java.',
    stack: ['Java', 'DSA', 'OOP', 'Collections Framework', 'MySQL'],
    build: [
      'Implemented clean, modular data structures and algorithmic solutions covering lists, trees, graphs, sorting, and searching algorithms.',
      'Architected object-oriented systems demonstrating abstraction, polymorphism, encapsulation, inheritance, and custom exception handling.',
      'Utilized the Java Collections Framework (ArrayList, HashMap, LinkedList, HashSet) for efficient memory management and optimal time complexity.',
    ],
    features: [
      'Extensive implementations of classic Data Structures & Algorithms',
      'Deep exploration of the Java Collections Framework',
      'Robust custom exception handling and input validation patterns',
      'Object-Oriented Design principles & design patterns',
      'Comprehensive unit testing and clean code practices',
    ],
    metrics: [
      { value: 'Core Java', label: 'primary programming language' },
      { value: 'O(log n)', label: 'optimized algorithms' },
      { value: 'OOP', label: 'modular architecture' },
      { value: 'Collections', label: 'standard Java framework' },
    ],
    github: 'https://github.com/ritesh-iitpatna',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'gold-medal',
    title: 'Gold Medal & Student of the Year',
    org: 'School Merit Award',
    detail: 'Secured First Rank in Class XI and was awarded the Gold Medal along with the Student of the Year Award.',
    laurel: 'First Rank',
  },
  {
    id: 'mental-math',
    title: 'Mental Mathematics Quiz',
    org: 'Inter-School Competition',
    detail: 'Secured 2nd Position in a competitive school-level mental mathematics competition involving students from multiple schools.',
    laurel: '2nd Position',
  },
  {
    id: 'iit-patna-admission',
    title: 'MCA at IIT Patna',
    org: 'Indian Institute of Technology Patna',
    detail: 'Admitted to the Master of Computer Applications (MCA) program at IIT Patna for advanced postgraduate computing.',
    laurel: 'IIT Patna',
  },
  {
    id: 'du-merit',
    title: 'Consistent Academic Merit',
    org: 'University of Delhi',
    detail: 'Maintained a CGPA above 8.0 in three consecutive semesters during undergraduate studies in Physical Science with Electronics.',
    laurel: 'CGPA > 8.0',
  },
  {
    id: 'core-competency',
    title: 'Core Java & Logic Building',
    org: 'Software Development',
    detail: 'Strong foundation in Core Java, OOP, Exception Handling, Collections Framework, JDBC, and relational database operations.',
    laurel: 'Core Java',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'IIT Patna', name: 'Master of Computer Applications (MCA)', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'University of Delhi', name: 'B.Sc. in Physical Science with Electronics', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Academic Honors', name: 'Gold Medal & Student of the Year Award', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Competitions', name: 'Mental Mathematics Quiz – 2nd Position', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Java Technologies', name: 'Core Java & Java Collections Framework', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Java Desktop', name: 'Desktop Applications (Swing, AWT & JDBC)', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Database Systems', name: 'Relational Database Management with MySQL', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Web Technologies', name: 'Frontend Engineering with React & Next.js', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Languages & Tools', name: 'TypeScript & Modern Tailwind CSS', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Version Control', name: 'Git & GitHub Collaboration Workflows', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'University of Delhi', name: 'Electronics & Microprocessor Systems', link: 'https://github.com/ritesh-iitpatna' },
  { issuer: 'Continuous Learning', name: 'Modern Backend & Kotlin Development', link: 'https://github.com/ritesh-iitpatna' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'Basics' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Kotlin', mono: 'Kt', note: 'Learning' },
    ],
  },
  {
    id: 'java-tech',
    title: 'Java Technologies',
    subtitle: 'Core & Enterprise Foundations',
    skills: [
      { name: 'Core Java', mono: 'Cj', note: 'Primary' },
      { name: 'JDBC', mono: 'Jd' },
      { name: 'Java Swing', mono: 'Sw' },
      { name: 'Java AWT', mono: 'Aw' },
      { name: 'Collections Framework', mono: 'Cf' },
    ],
  },
  {
    id: 'android',
    title: 'Android Development',
    subtitle: 'Native mobile architecture & UI',
    skills: [
      { name: 'Android', mono: 'An', note: 'Primary' },
      { name: 'Kotlin', mono: 'Kt', note: 'Native' },
      { name: 'Android Studio', mono: 'As' },
      { name: 'Jetpack Compose', mono: 'Jc' },
      { name: 'XML Layouts', mono: 'Xm' },
      { name: 'Java for Android', mono: 'Ja' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & DB',
    subtitle: 'Relational databases & logic',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'JDBC', mono: 'Jd' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'MySQL Workbench', mono: 'Mw' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & IDEs',
    subtitle: 'Developer workflow & environments',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'IntelliJ IDEA', mono: 'Ij' },
      { name: 'Visual Studio Code', mono: 'Vs' },
      { name: 'Eclipse', mono: 'Ec' },
      { name: 'Android Studio', mono: 'As' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core Concepts',
    subtitle: 'Foundations & problem solving',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'Exception Handling', mono: 'Eh' },
      { name: 'Logic Building', mono: 'Lb' },
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Microprocessors', mono: 'Mp' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Backend Development', mono: 'Bd' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Kotlin Ecosystem', mono: 'Kt' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Bank Management System', 'Core Java Suite', 'IIT Patna MCA'],
  'Core Java': ['Bank Management System', 'OOP & Exception Handling', 'IIT Patna MCA'],
  Python: ['Basic scripting & automation'],
  TypeScript: ['Personal Developer Portfolio'],
  JavaScript: ['Personal Developer Portfolio', 'Interactive UI animations'],
  Kotlin: ['Modern Android & backend mobile applications'],
  Android: ['Native Android architecture & app development', 'IIT Patna projects'],
  'Android Development': ['Mobile app engineering with Kotlin & Java'],
  'Jetpack Compose': ['Declarative modern UI layouts & state management'],
  'XML Layouts': ['Classic Android view hierarchies, themes & animations'],
  'Java for Android': ['Object-oriented mobile components & services'],
  JDBC: ['Bank Management System', 'Relational database connectivity'],
  'Java Swing': ['Bank Management System (Desktop ATM UI)'],
  'Java AWT': ['Bank Management System'],
  'Collections Framework': ['Data Structures & Algorithms', 'ArrayList, HashMap, HashSet'],
  React: ['Personal Developer Portfolio'],
  'Next.js': ['Personal Developer Portfolio', 'Server & Client rendering'],
  'Tailwind CSS': ['Personal Developer Portfolio'],
  HTML5: ['Personal Developer Portfolio'],
  'Framer Motion': ['Personal Developer Portfolio (Cinematic animations)'],
  MySQL: ['Bank Management System', 'Database design & queries'],
  SQL: ['Bank Management System', 'Data manipulation & transactions'],
  'MySQL Workbench': ['Bank Management System database administration'],
  Git: ['Bank Management System', 'Personal Developer Portfolio'],
  GitHub: ['Source code management & repositories'],
  'IntelliJ IDEA': ['Core Java & Desktop development environment'],
  'Visual Studio Code': ['Web & Next.js frontend development environment'],
  Eclipse: ['Java development & debugging'],
  'Android Studio': ['Mobile & Kotlin development setup'],
  DSA: ['Data Structures & Algorithms implementations at IIT Patna'],
  OOP: ['Object-Oriented Design in Bank Management System'],
  'Exception Handling': ['Input validation & robust error handling in Java'],
  'Logic Building': ['Mental Mathematics Quiz 2nd Position'],
  'Problem Solving': ['Algorithmic problem solving & software architecture'],
  Microprocessors: ['B.Sc. in Physical Science with Electronics at DU'],
  'Backend Development': ['Interested in scalable backend services & architectures'],
  'System Design': ['Clean architecture, modularity, and database design'],
  'Kotlin Ecosystem': ['Currently learning modern Android and backend Kotlin'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2016 – 2019',
    synopsis: 'School days marked by keen mathematical aptitude, multi-school quizzes, and graduating as Student of the Year.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Math Mind',
        description: 'Mental Mathematics Quiz — secured 2nd Position in an inter-school competition involving students across multiple schools.',
        tags: ['Mental Math', 'Inter-School', '2nd Position'],
        runtime: 'Oct 2016',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Student of the Year',
        description: 'Secured First Rank in Class XI and received the prestigious Gold Medal & Student of the Year Award.',
        tags: ['First Rank', 'Gold Medal', 'Student of the Year'],
        runtime: 'May 2019',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Sciences & Systems',
    period: '2022 – 2025',
    synopsis: 'Undergraduate journey at University of Delhi — studying Physical Science with Electronics, microprocessors, and mathematics.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Undergrad',
        description: 'B.Sc. in Physical Science with Electronics at the University of Delhi — building fundamentals in mathematics, modern physics, and electronics.',
        tags: ['University of Delhi', 'Electronics', 'Physics'],
        runtime: 'Aug 2022 – Aug 2025',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Consistent Merit',
        description: 'Maintained a CGPA above 8.0 across three consecutive semesters during undergraduate studies.',
        tags: ['CGPA > 8.0', 'Academic Merit'],
        runtime: 'Three Semesters',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'Hardware & Microprocessors',
        description: 'Hands-on study of electronic circuits, hardware logic, microprocessor architectures, and computational systems.',
        tags: ['Microprocessors', 'Digital Logic', 'Circuits'],
        runtime: 'DU Labs',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The IIT Patna Chapter',
    period: '2025 – Present',
    synopsis: 'Master of Computer Applications (MCA) at Indian Institute of Technology Patna — advanced algorithms, Java, and software systems.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Entering IIT Patna',
        description: 'Admitted to the Master of Computer Applications (MCA) at IIT Patna to pursue deep computer science and software development.',
        tags: ['IIT Patna', 'MCA', 'Computer Science'],
        runtime: '2025 – Present',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Core Java Mastery',
        description: 'Deepening foundations in Core Java, OOP, Exception Handling, Collections Framework, and database programming.',
        tags: ['Java', 'OOP', 'Collections', 'JDBC'],
        runtime: 'IIT Patna',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Software',
    period: '2026',
    synopsis: 'Engineering real-world desktop and modern web applications with Java Swing, MySQL, React, Next.js, and TypeScript.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Banking System',
        description: 'Bank Management System (ATM Simulation) — developed in Java Swing, AWT, JDBC, and MySQL supporting comprehensive banking workflows.',
        tags: ['Java Swing', 'JDBC', 'MySQL'],
        runtime: 'Mar 2026 – May 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Cinematic Portfolio',
        description: 'Built a responsive personal portfolio using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion with glassmorphic visuals.',
        tags: ['Next.js', 'React', 'Framer Motion', 'TypeScript'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Expanding horizons towards scalable backend engineering, system design, and mastering Kotlin.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring backend architectures, clean design principles, and currently learning Kotlin for modern development.',
        tags: ['Backend', 'Kotlin', 'System Design'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Core Java', detail: 'OOP, Collections Framework, Exception Handling & JDBC', palette: amber },
  { label: 'The Desktop Original', title: 'Bank Management', detail: 'ATM simulation • Java Swing, JDBC & MySQL', palette: crimson },
  { label: 'Academic Peak', title: 'IIT Patna', detail: 'Master of Computer Applications (MCA)', palette: ocean },
  { label: 'Undergraduate', title: 'Univ of Delhi', detail: 'B.Sc. Physical Science with Electronics', palette: violet },
  { label: 'Academic High', title: 'CGPA > 8.0', detail: '3 consecutive semesters at Delhi University', palette: jade },
  { label: 'School Honor', title: 'Gold Medalist', detail: 'Student of the Year Award & 1st Rank Class XI', palette: amber },
  { label: 'Problem Solving', title: 'Mental Math', detail: '2nd Position in inter-school competition', palette: crimson },
  { label: 'Mobile Platform', title: 'Android Development', detail: 'Kotlin, Java, Android Studio & Jetpack UI', palette: jade },
  { label: 'Database Backend', title: 'MySQL', detail: 'Relational database schema & JDBC integration', palette: ocean },
  { label: 'Native Language', title: 'Kotlin', detail: 'Modern native Android development & Coroutines', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'MCA · IIT Patna',
    lines: ['Indian Institute of Technology Patna', 'B.Sc. in Physical Science with Electronics, University of Delhi'],
    chips: ['IIT Patna', 'Univ of Delhi'],
  },
  {
    kicker: 'Skills',
    title: 'Core Java & Android',
    lines: ['OOP, Collections Framework, Exception Handling, JDBC, MySQL', 'Android Development, Kotlin, Android Studio · Git, GitHub'],
    chips: ['Java', 'Android', 'Kotlin', 'JDBC', 'MySQL', 'Android Studio'],
  },
  {
    kicker: 'Projects',
    title: 'Desktop & Web Productions',
    lines: ['Bank Management System — Java Swing, AWT, JDBC & MySQL ATM simulation', 'Personal Developer Portfolio — Next.js, React, TypeScript & Framer Motion'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Gold Medal & Student of the Year Award (First Rank Class XI)', 'Mental Mathematics Quiz — 2nd Position in inter-school competition', 'CGPA > 8.0 in three consecutive semesters at University of Delhi'],
  },
  {
    kicker: 'Credentials',
    title: 'Key Milestones',
    lines: ['MCA at IIT Patna · B.Sc. from University of Delhi', 'Core Java · Relational Database Systems · Modern Web Engineering'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Backend Architecture · System Design · Kotlin Development'],
  },
];

export type ProfileId = 'ritesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ritesh',
    name: 'Ritesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • Key Milestones`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
