import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    return localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return [dark, setDark];
}

function Navbar() {
  const [dark, setDark] = useDarkMode();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-black dark:text-white">Alex Lee</div>
        <div className="flex items-center space-x-6">
          <a href="/" className="text-black dark:text-white hover:underline">Home</a>
          <a href="/about" className="text-black dark:text-white hover:underline">About</a>
          <a href="/projects" className="text-black dark:text-white hover:underline">Projects</a>
          <a href="/contact" className="text-black dark:text-white hover:underline">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-indigo-600">Hi, I'm Alex Lee 👋</h1>
      <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        I'm a Computer Science student passionate about creating useful, elegant, and efficient digital tools. Welcome to my portfolio.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-600">About Me</h2>
      <p className="text-lg text-gray-800 dark:text-gray-300">
        I'm currently pursuing a Bachelor's degree in Computer Science at Wilfrid Laurier University. My interests include frontend development, AWS cloud services, and game development. I enjoy building tools and interactive experiences that make everyday life more efficient and fun.
      </p>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'TabCycle Chrome Extension',
      description: 'A Chrome extension that automatically cycles tabs and schedules tabs to open and close at specific times.',
      tech: 'JavaScript, Chrome Extensions API, HTML/CSS'
    },
    {
      title: 'Rhythm Dungeon Crawler (WIP)',
      description: 'A 3D rhythm-based first-person game about timing movement and attacks to the beat.',
      tech: 'Unity, C#, Blender'
    }
  ];

  return (
    <section className="max-w-6xl w-full mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-indigo-600">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-indigo-500">{proj.title}</h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{proj.description}</p>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Tech: {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-3xl w-full mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Contact Me</h2>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-3">📧 Email: alexlee.dev@example.com</p>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-3">🔗 LinkedIn: linkedin.com/in/alexleedev</p>
      <p className="text-lg text-gray-800 dark:text-gray-300">🐙 GitHub: github.com/alexleedev</p>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}