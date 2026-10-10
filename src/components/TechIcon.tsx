import React from 'react';
import {
  FaJava,
  FaDatabase,
  FaDesktop,
  FaMicrochip,
  FaServer,
} from 'react-icons/fa6';
import {
  SiKotlin,
  SiAndroid,
  SiAndroidstudio,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiMysql,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiEclipseide,
} from 'react-icons/si';
import {
  TbBinaryTree,
  TbCube,
  TbShieldCheck,
  TbCpu,
  TbPuzzle,
  TbNetwork,
  TbStack2,
  TbCode,
  TbBrandVscode,
} from 'react-icons/tb';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number | string }>> = {
  // Languages
  Java: FaJava,
  'Core Java': FaJava,
  'Java for Android': FaJava,
  Kotlin: SiKotlin,
  'Kotlin Ecosystem': SiKotlin,
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,

  // Android
  Android: SiAndroid,
  'Android Development': SiAndroid,
  'Android Studio': SiAndroidstudio,
  'Jetpack Compose': SiAndroid,
  'XML Layouts': TbCode,

  // Java Technologies
  JDBC: FaDatabase,
  'Java Swing': FaDesktop,
  'Java AWT': FaDesktop,
  'Collections Framework': TbStack2,

  // Web & Frontend
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  HTML5: SiHtml5,
  'Framer Motion': SiFramer,

  // Backend & Databases
  MySQL: SiMysql,
  SQL: FaDatabase,
  'MySQL Workbench': SiMysql,
  'Backend Development': FaServer,

  // Tools & IDEs
  Git: SiGit,
  GitHub: SiGithub,
  'IntelliJ IDEA': SiIntellijidea,
  'Visual Studio Code': TbBrandVscode,
  Eclipse: SiEclipseide,

  // Core Concepts
  DSA: TbBinaryTree,
  OOP: TbCube,
  'Exception Handling': TbShieldCheck,
  'Logic Building': TbCpu,
  'Problem Solving': TbPuzzle,
  Microprocessors: FaMicrochip,
  'System Design': TbNetwork,
};

export default function TechIcon({ name, className = 'w-6 h-6', size }: TechIconProps) {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    // Graceful fallback for any unspecified skill
    return (
      <span className="font-mono text-xs font-bold uppercase tracking-wider">
        {name.slice(0, 2)}
      </span>
    );
  }

  return <IconComponent className={className} size={size} />;
}
