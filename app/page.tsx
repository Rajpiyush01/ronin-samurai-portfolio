"use client";
import Image from "next/image";
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
      <a className="brand" href="#home"><b>浪</b> RONIN<span>.</span></a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
      <nav className={open?"nav open":"nav"}>{nav.map(n=><a key={n} className={active===n.toLowerCase()?"active":""} href={"#"+n.toLowerCase()} onClick={()=>setOpen(false)}>{n}</a>)}<a className="nav-cta" href="#contact">LET&apos;S TALK ↗</a></nav>
    </header>

    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow"><i/> THE PATH OF A CREATOR</p>
        <h1>Quiet mind.<br/><em>Sharp</em> execution.</h1>
        <p className="intro">I&apos;m <strong>Piyush Raj</strong> — a CSE student building thoughtful digital experiences and sharpening my craft one commit at a time.</p>
        <div className="actions"><a className="btn" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="plain" href="#contact">Get in touch <ArrowDown size={15}/></a></div>
        <p className="meta">INDIA <b/> DEVELOPMENT · QA · CYBERSECURITY</p>
      </div>
      <div className="art-wrap">
        <div className="art-frame">
          <Image src="/samurai-hero.jpg" alt="A lone samurai silhouetted against a glowing red moon" fill priority sizes="(max-width: 850px) 100vw, 58vw" className="art"/>
          <div className="shade"/><div className="kanji">浪人</div>
          <div className="art-foot"><span>01 / THE RONIN</span><span>DISCIPLINE OVER NOISE</span></div>
        </div><div className="seal">無<small>LIMITLESS</small></div>
      </div>
      <a className="scroll" href="#about">↓ &nbsp; SCROLL TO BEGIN</a>
    </section>

    <section id="about" className="section wrap">
      <p className="index">01 <span>— ABOUT THE RONIN</span></p>
      <div className="two"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Still learning.<br/><em>Always moving.</em></h2></div>
      <div className="bodycopy"><p>I enjoy turning ideas into useful interfaces, understanding how systems work, and finding the details that make software dependable. My interests sit at the intersection of <strong>web development, software quality, and cybersecurity.</strong></p><p>This portfolio is my evolving dojo: a place to document what I build, what I learn, and where I&apos;m heading next.</p><div className="principles">01 / CURIOSITY　 02 / CONSISTENCY　 03 / CRAFT</div></div></div>
    </section>

    <section id="projects" className="section wrap">
      <p className="index">02 <span>— SELECTED WORK</span></p>
      <div className="heading"><div><p className="eyebrow">THE WORK SPEAKS</p><h2>Projects in the <em>forge.</em></h2></div><p className="note">Starter entries only. Replace these with your real project details and repository links before publishing.</p></div>
      <div className="project-list">{projects.map(([num,title,type,desc,stack])=><article className="project" key={num}><span className="num">{num}</span><div><small>{type}</small><h3>{title}</h3><p>{desc}</p><label>{stack}</label></div><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label={"Open "+title}><ArrowUpRight/></a></article>)}</div>
    </section>

    <section id="skills" className="section wrap">
      <p className="index">03 <span>— THE TOOLKIT</span></p>
      <div className="heading"><div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Sharpening the <em>edge.</em></h2></div><p className="note">Keep only the skills and tools you can confidently explain in an interview.</p></div>
      <div className="skills">{skills.map(([Icon,title,items],i)=><motion.article className="skill" key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><Icon className="skill-icon"/><h3>{title}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></motion.article>)}</div>
    </section>

    <section id="journey" className="section wrap">
      <p className="index">04 <span>— THE JOURNEY</span></p>
      <div className="two"><div><p className="eyebrow">ONE STEP AT A TIME</p><h2>The path is<br/><em>the point.</em></h2></div><div className="timeline">
        <article><b>NOW</b><div><h3>Building the foundation</h3><p>Strengthening programming, core CS concepts, development, testing, and security fundamentals.</p></div></article>
        <article><b>NEXT</b><div><h3>Shipping real projects</h3><p>Turning learning into practical applications, documenting decisions, and improving through feedback.</p></div></article>
        <article><b>AHEAD</b><div><h3>Growing as an engineer</h3><p>Looking for opportunities to contribute, collaborate, and keep learning in a real engineering team.</p></div></article>
      </div></div>
    </section>

    <section id="contact" className="contact wrap">
      <p className="index">05 <span>— THE NEXT CHAPTER</span></p><p className="eyebrow">HAVE A GOOD CHALLENGE?</p>
      <h2>Let&apos;s make<br/><em>something matter.</em></h2>
      <a className="btn" href="mailto:your.email@example.com">Start a conversation <Mail size={17}/></a>
      <div className="social"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="mailto:your.email@example.com"><Mail/> Email</a></div>
      <footer><span>© 2026 PIYUSH RAJ</span><span>BUILT WITH DISCIPLINE ✳</span><a href="#home">BACK TO TOP ↑</a></footer>
    </section>
  </main>;
}
