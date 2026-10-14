"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link href="#home" className="logo">
        Areeba Gull
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link href="#home" onClick={closeMenu}>Home</Link>
        <Link href="#about" onClick={closeMenu}>About</Link>
        <Link href="#skills" onClick={closeMenu}>Skills</Link>
        <Link href="#projects" onClick={closeMenu}>Projects</Link>
        <Link href="#contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}