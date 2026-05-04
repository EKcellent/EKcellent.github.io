import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Esha Kapoor",
  handle: "EKcellent",
  tagline: "Software Engineer Passionate About AI and Backend.",
  location: "San Francisco, CA",
  github: "https://github.com/EKcellent",
  linkedin: "https://www.linkedin.com/in/kapooresha/",
  status: "Building something :)",
};

const highlights = [
  { label: "Customers supported", value: "40M+", detail: "Tier-1 Uber membership service" },
  { label: "Data analyzed", value: "10B+", detail: "Rows for Uber Eats ML ranking" },
  { label: "Tests written", value: "70+", detail: "GenAI service at Amazon" },
  { label: "Duke GPA", value: "3.8", detail: "CS, AI/ML concentration" },
];

const experience = [
  {
    company: "Uber",
    role: "Software Engineer · Uber One Membership",
    dates: "Jun 2025 — Mar 2026",
    bullets: [
      "Backend engineer on a Tier-1 service supporting 40M+ customers across 5+ production codebases.",
      "Implemented a migration for a critical fares endpoint, unblocking multiple teams and projects.",
      "Built 32 server-driven UI screen variations and resolved international production issues, including one tied to a $10M strategic partnership.",
    ],
    tech: ["Go", "gRPC", "Java", "Kafka", "Redis", "SQL", "Grafana", "Bazel"],
  },
  {
    company: "Uber",
    role: "Machine Learning Engineering Intern · Discovery Intelligence",
    dates: "Sep 2024 — Nov 2024",
    bullets: [
      "Optimized Uber Eats product bundling ranking recommendations, improving AUC by 3%, recall by 2%, and precision by 2%.",
      "Worked with 10B+ row datasets, found three key issues, and built pipelines for relevant-item impressions and brand diversity.",
    ],
    tech: ["PrestoSQL", "Spark", "Airflow", "ML Platforms", "YAML"],
  },
  {
    company: "Amazon",
    role: "Software Engineering Intern · Data Governance Services",
    dates: "May 2024 — Aug 2024",
    bullets: [
      "Designed and built a Generative AI service that became core infrastructure for department GenAI tools.",
      "Deployed an 87%-accuracy beta chatbot to answer data-platform questions and reduce on-call load.",
      "Architected four APIs, built a database, configured 10 packages, created 15+ cloud resources, and wrote 70+ tests.",
    ],
    tech: ["Python", "Java", "TypeScript", "LLMs", "LangChain", "AWS Bedrock", "Kendra"],
  },
  {
    company: "Amazon",
    role: "Software Engineering Intern · Data Governance Services",
    dates: "May 2023 — Aug 2023",
    bullets: [
      "Enhanced a notification system for a data management platform used by 5,000 monthly customers.",
      "Expanded seven APIs, created 25+ React components, and shipped hierarchical notifications plus fine-grained receiver selection.",
    ],
    tech: ["TypeScript", "React", "Java", "AWS Lambda", "DynamoDB", "CloudFormation"],
  },
];

const projects = [
  {
    title: "Movie Betting Application",
    tag: "Audience Choice Award",
    description: "A MERN + OAuth application for social movie predictions and betting-style gameplay.",
    tech: ["MongoDB", "Express", "React", "Node", "OAuth"],
  },
  {
    title: "ViTA-DXF CAD Autograder",
    tag: "Research + Publication",
    description: "A web app that autogrades CAD assignments independent of CAD tooling, built with Flask and React.",
    tech: ["Flask", "React", "JavaScript", "Figma"],
  },
  {
    title: "Quantum Image Encryption",
    tag: "Qiskit",
    description: "Explored image encryption and decryption workflows using quantum computing primitives.",
    tech: ["IBM Qiskit", "Python", "Quantum Computing"],
  },
  {
    title: "Campus Issue Reporter",
    tag: "Production at Duke",
    description: "A web app for the Duke community to report campus issues and track resolution status in real time.",
    tech: ["Rails", "PostgreSQL", "Tailwind", "Docker", "OpenShift"],
  },
  {
    title: "Autocomplete Search Algorithm",
    tag: "Algorithms",
    description: "Implemented performant autocomplete search with attention to data structures and ranking behavior.",
    tech: ["Java", "Data Structures", "Algorithms"],
  },
  {
    title: "Weather Application",
    tag: "Frontend",
    description: "A polished weather app focused on API integration, interaction design, and responsive UI.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const writing = [
  "1-bit vs. 16-bit Quantization in Large Language Models",
  "ViTA-DXF: CAD-Tool-Independent Autograding of 2D CAD Drawings",
  "Investigating Air Quality Across US States",
  "The Rise of Telehealth: Legal, Policy, Ethical, and Technical Issues",
  "NXP Semiconductors Acquires Infineon Technologies · M&A Pitchbook",
  "Amazon Acquisition of OneMedical Telehealth · Trade Pitch",
];

const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "Go", "TypeScript", "JavaScript", "C", "Ruby", "R", "SQL"] },
  { title: "AI + Data", items: ["LLMs", "LangChain", "AWS Bedrock", "Kendra", "Spark", "PrestoSQL", "Airflow", "Qiskit"] },
  { title: "Backend + Cloud", items: ["gRPC", "Kafka", "Redis", "REST APIs", "PostgreSQL", "Docker", "AWS", "Linux"] },
  { title: "Frontend", items: ["React", "Node.js", "Express", "Tailwind CSS", "Bootstrap", "Figma", "Rails"] },
];

const navItems = ["About", "Experience", "Projects", "Writing", "Contact"];

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <span>{children}</span> : null}
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((project) =>
      [project.title, project.tag, project.description, ...project.tech].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main>
      <header>
        <nav>
          <a href="#top" className="brand">
            <div className="logo">EK</div>
            <div>
              <strong>{profile.name}</strong>
              <small>@{profile.handle}</small>
            </div>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>
          <a className="button dark" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div>
          <div className="pill">✨ {profile.status}</div>
          <h1>Engineer for AI systems, product platforms, and crisp user experiences.</h1>
          <p className="lead">{profile.tagline}</p>
          <div className="actions">
            <a className="button primary" href="#projects">Explore work ↗</a>
            <a className="button light" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </div>
          <div className="meta">
            <span>📍 {profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal">
            <div className="dots"><span></span><span></span><span></span></div>
            <pre>{`const esha = {
  focus: ["AI", "backend", "ML ranking"],
  ships: "production systems at scale",
  style: "curious, rigorous, kind",
  now: "building something :)"
};`}</pre>
          </div>
          <div className="stats">
            {highlights.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container section">
        <SectionTitle eyebrow="About" title="Computer science, AI/ML, finance, and production engineering.">
          Duke CS graduate with an AI/ML concentration and finance minor. I like turning ambiguous product and data problems into robust systems, whether that means GenAI infrastructure, ML ranking pipelines, backend migrations, or user-facing tools.
        </SectionTitle>
        <div className="three-grid">
          <article className="card"><span className="emoji">🎓</span><h3>Duke University</h3><p>B.S. Computer Science · AI & ML concentration · Finance minor · Dean’s List with Distinction.</p></article>
          <article className="card"><span className="emoji">💼</span><h3>Industry range</h3><p>Built at Uber, Amazon, and Duke OIT across membership, discovery intelligence, data governance, campus tooling, and research.</p></article>
          <article className="card"><span className="emoji">🏆</span><h3>Leadership</h3><p>Uber Career Prep Distinguished Alumni Program Lead, DTech VP, Duke Technology Scholar, CS Sidekicks Instructor, and FEMMES+Hacks Track Lead.</p></article>
        </div>
      </section>

      <section id="experience" className="container section">
        <SectionTitle eyebrow="Experience" title="Shipping systems with measurable product impact." />
        <div className="timeline">
          {experience.map((job) => (
            <article className="experience" key={`${job.company}-${job.dates}-${job.role}`}>
              <div className="experience-top">
                <div>
                  <p>{job.company}</p>
                  <h3>{job.role}</h3>
                  <span>{job.dates}</span>
                </div>
                <div className="chips">{job.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}</div>
              </div>
              <ul>
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="container section">
        <SectionTitle eyebrow="Projects" title="Selected projects from GitHub, research, and production work.">
          Many class and research repositories are private to preserve assignment and research integrity, but are available upon request.
        </SectionTitle>
        <div className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter by React, ML, Flask, Java..." /></div>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-top"><span>{project.tag}</span><b>↗</b></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">{project.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="container section">
        <SectionTitle eyebrow="Writing" title="Papers, research, and fintech analysis." />
        <div className="writing-grid">
          {writing.map((item) => <div key={item}>▣ {item}</div>)}
        </div>
      </section>

      <section className="container section">
        <SectionTitle eyebrow="Stack" title="Tools I reach for." />
        <div className="stack-grid">
          {skillGroups.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">{group.items.map((item) => <Chip key={item}>{item}</Chip>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-wrap">
        <div className="contact-card">
          <p>Contact</p>
          <h2>Let’s build something excellent.</h2>
          <span>I’m interested in engineering roles and collaborations at the intersection of AI, backend infrastructure, ML products, and delightful developer/user experiences.</span>
          <div className="actions center">
            <a className="button white" href={profile.github} target="_blank" rel="noreferrer">View GitHub</a>
            <a className="button outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
