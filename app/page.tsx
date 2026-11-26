"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, ShieldCheck, Bug, Database, Terminal, Layers } from "lucide-react";

const projects = [
  ["01","Vireon Studio","Creative technology","A landing page concept for an AI-powered video editing platform.","Next.js · React · Tailwind"],
  ["02","AI Finance Manager","Personal productivity","A finance workspace concept for understanding spending habits.","React · JavaScript · UI"],
  ["03","Product Compare","Web application","A product discovery concept focused on clear, useful comparisons.","Web · APIs · Responsive UI"]
];
const skills = [
  [Code2,"Development",["JavaScript","React","Next.js","HTML & CSS"]],
  [Terminal,"Programming",["Java","C / C++","Python","SQL"]],
  [Bug,"Quality & Testing",["Manual testing","Test cases","Bug reporting","API testing"]],
  [ShieldCheck,"Cybersecurity",["Linux","Network security","Nmap","OWASP basics"]],
  [Database,"Data & Backend",["DBMS","MySQL","REST APIs","Node.js basics"]],
  [Layers,"Core foundations",["DSA","OOP","Operating systems","Computer networks"]]
] as const;
const nav = ["About","Projects","Skills","Journey","Contact"];

export default function Home() {
  const [open,setOpen] = useState(false);
  const [active,setActive] = useState("home");
  const {scrollYProgress} = useScroll();
  const width = useTransform(scrollYProgress,[0,1],["0%","100%"]);
  useEffect(()=>{
    const ids=["home","about","projects","skills","journey","contact"];
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:"-35% 0px -55% 0px"});
    ids.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});
    return ()=>obs.disconnect();
  },[]);
  return <main>
    <motion.div className="progress" style={{width}} />
    <header className="topbar">
      <a className="brand" href="#home">PIYUSH RAJ<span>.</span></a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
      <nav className={open?"nav open":"nav"}>{nav.map(n=><a key={n} className={active===n.toLowerCase()?"active":""} href={"#"+n.toLowerCase()} onClick={()=>setOpen(false)}>{n}</a>)}<a className="nav-cta" href="#contact">Contact ↗</a></nav>
    </header>

    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow"><i/> Software developer in progress</p>
        <h1>Building reliable<br/><em>digital products.</em></h1>
        <p className="intro">I&apos;m <strong>Piyush Raj</strong>, a CSE student focused on web development, software quality, and cybersecurity. I turn ideas into clear, useful, and dependable experiences.</p>
        <div className="actions"><a className="btn" href="#projects">View my work <ArrowUpRight size={17}/></a><a className="plain" href="#contact">Get in touch <ArrowDown size={15}/></a></div>
        <p className="meta">India <b/> Development · QA · Cybersecurity</p>
      </div>
      <a className="scroll" href="#about">↓ &nbsp; Explore profile</a>
    </section>

    <section id="about" className="section wrap">
      <p className="index">01 <span>— About</span></p>
      <div className="two"><div><p className="eyebrow">Profile overview</p><h2>Curious by default.<br/><em>Practical by design.</em></h2></div>
      <div className="bodycopy"><p>I enjoy turning ideas into useful interfaces, understanding how systems work, and finding the details that make software dependable. My interests sit at the intersection of <strong>web development, software quality, and cybersecurity.</strong></p><p>I&apos;m continuously improving my technical foundations while building projects that demonstrate thoughtful decisions, clean implementation, and measurable progress.</p><div className="principles">01 / Curiosity　 02 / Consistency　 03 / Craft</div></div></div>
    </section>

    <section id="projects" className="section wrap">
      <p className="index">02 <span>— Selected work</span></p>
      <div className="heading"><div><p className="eyebrow">Portfolio</p><h2>Projects with <em>purpose.</em></h2></div><p className="note">A selection of concept projects. Replace these with completed work and live repository links.</p></div>
      <div className="project-list">{projects.map(([num,title,type,desc,stack])=><article className="project" key={num}><span className="num">{num}</span><div><small>{type}</small><h3>{title}</h3><p>{desc}</p><label>{stack}</label></div><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label={"Open "+title}><ArrowUpRight/></a></article>)}</div>
    </section>

    <section id="skills" className="section wrap">
      <p className="index">03 <span>— Skills</span></p>
      <div className="heading"><div><p className="eyebrow">Technical toolkit</p><h2>Skills built through <em>practice.</em></h2></div><p className="note">Tools and fundamentals I use to plan, build, test, and improve software.</p></div>
      <div className="skills">{skills.map(([Icon,title,items],i)=><motion.article className="skill" key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><Icon className="skill-icon"/><h3>{title}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></motion.article>)}</div>
    </section>

    <section id="journey" className="section wrap">
      <p className="index">04 <span>— Growth</span></p>
      <div className="two"><div><p className="eyebrow">Current direction</p><h2>Learn with purpose.<br/><em>Grow through work.</em></h2></div><div className="timeline">
        <article><b>NOW</b><div><h3>Building strong foundations</h3><p>Strengthening programming, core computer science concepts, development, testing, and security fundamentals.</p></div></article>
        <article><b>NEXT</b><div><h3>Shipping practical projects</h3><p>Turning learning into complete applications, documenting decisions, and improving through feedback.</p></div></article>
        <article><b>GOAL</b><div><h3>Growing as an engineer</h3><p>Contributing to a collaborative engineering team while expanding ownership and technical depth.</p></div></article>
      </div></div>
    </section>

    <section id="contact" className="contact wrap">
      <p className="index">05 <span>— Contact</span></p><p className="eyebrow">Open to opportunities</p>
      <h2>Let&apos;s build<br/><em>something useful.</em></h2>
      <a className="btn" href="mailto:your.email@example.com">Start a conversation <Mail size={17}/></a>
      <div className="social"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="mailto:your.email@example.com"><Mail/> Email</a></div>
      <footer><span>© 2026 Piyush Raj</span><span>Designed for clarity</span><a href="#home">Back to top ↑</a></footer>
    </section>
  </main>;
}
