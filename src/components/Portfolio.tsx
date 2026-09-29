import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/projects";
import medidental from "@/assets/projects/medidental.webp";
import scott from "@/assets/projects/scott.webp";
import redblu from "@/assets/projects/redblu.webp";
import solmar from "@/assets/projects/solmar.webp";
import crossroads from "@/assets/projects/crossroads.webp";
import salmarine from "@/assets/projects/salmarine.webp";
import gregg from "@/assets/projects/gregg.webp";
import niche from "@/assets/projects/niche.webp";
import aircare from "@/assets/projects/aircare.webp";
import xford from "@/assets/projects/xford.webp";
import kukoon from "@/assets/projects/kukoon.webp";
import eevent from "@/assets/projects/eevent.webp";
import voldog from "@/assets/projects/voldog.webp";
import {
  ChatGPT3DIcon,
  Claude3DIcon,
  Gemini3DIcon,
  Figma3DIcon,
  Adobe3DIcon,
  Lovable3DIcon,
  ClaudeCode3DIcon,
  GoogleAIStudio3DIcon,
} from "@/components/ToolIcons3D";

const images = [
  medidental,
  scott,
  redblu,
  solmar,
  crossroads,
  salmarine,
  gregg,
  niche,
  aircare,
  xford,
  kukoon,
  eevent,
  voldog,
];
const filters = [
  "All",
  "E-commerce",
  "Product Design",
  "UI/UX",
  "Healthcare",
  "Marketplace",
  "Travel",
  "B2B",
  "Event",
];
const navItems = [
  ["Work", "work"],
  ["About", "about"],
  ["Skills", "skills"],
  ["AI", "ai"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <div className={`preloader ${done ? "preloader-done" : ""}`} aria-hidden="true">
      <div>
        <strong>DSB</strong>
        <span>DEVENDRA SINGH BISHT</span>
        <small>UI/UX · PRODUCT · AI</small>
        <i />
      </div>
    </div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  useEffect(() => {
    const move = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY });
    const over = (event: MouseEvent) =>
      setLabel(
        (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]")?.dataset["cursor"] ??
          "",
      );
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <div
      className={`custom-cursor ${label ? "cursor-active" : ""}`}
      style={{ transform: `translate3d(${pos.x}px,${pos.y}px,0)` }}
    >
      {label}
    </div>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Back to top">
        DEVENDRA <span>SINGH BISHT</span>
      </button>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <Button variant="premium" size="lg" className="nav-cta" onClick={() => scrollTo("contact")}>
        Let's Talk <ArrowUpRight />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="menu-button"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle menu"
        aria-expanded={menu}
      >
        {menu ? <X /> : <Menu />}
      </Button>
      <div className={`mobile-menu ${menu ? "mobile-menu-open" : ""}`}>
        {navItems.map(([label, id], index) => (
          <button
            key={id}
            onClick={() => {
              setMenu(false);
              scrollTo(id);
            }}
          >
            <small>0{index + 1}</small>
            {label}
            <ArrowUpRight />
          </button>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-light" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-status-pill">
            <span className="status-ping-wrap">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span className="status-text">AVAILABLE FOR SELECT ROLES &amp; PROJECTS</span>
          </div>
          <p className="hero-eyebrow">SENIOR UI/UX &amp; PRODUCT DESIGNER · 8+ YEARS OF CRAFT</p>
          <h1 className="hero-title">
            <span>Designing digital</span>
            <span>experiences for the</span>
            <span>
              next generation <em className="hero-gradient-text">of products.</em>
            </span>
          </h1>
          <p className="hero-summary">
            Senior UI/UX &amp; Product Designer creating intuitive digital products, scalable design
            systems and AI-assisted interfaces for visionary brands.
          </p>
          <div className="hero-actions">
            <Button variant="premium" size="xl" onClick={() => scrollTo("work")}>
              Explore My Work <ArrowDown />
            </Button>
            <Button variant="outlinePremium" size="xl" onClick={() => scrollTo("contact")}>
              Let's Talk <ArrowUpRight />
            </Button>
          </div>
        </div>

        <div className="hero-artifact-wrap">
          <div className="artifact" aria-hidden="true" data-cursor="EXPLORE">
            <div className="artifact-glow" />
            <div className="artifact-ring-dashed" />
            <div className="artifact-dial" />
            <div className="artifact-orbit orbit-a">
              <span className="orbit-node node-a" />
            </div>
            <div className="artifact-orbit orbit-b">
              <span className="orbit-node node-b" />
            </div>
            <div className="artifact-orbit orbit-c">
              <span className="orbit-node node-c" />
            </div>

            {/* Kinetic decorative rotor behind lens */}
            <div className="artifact-rotor" />

            {/* Stable, Upright Optical Glass Centerpiece */}
            <div className="artifact-lens">
              <div className="lens-specular" />
              <div className="lens-content">
                <span className="lens-tag">DESIGN MATRIX</span>
                <div className="lens-core">
                  <div className="lens-iris" />
                  <span className="lens-monogram">DSB</span>
                </div>
                <div className="lens-metrics">
                  <span>8+ YRS</span>
                  <span className="lens-sep">✦</span>
                  <span>AI × UX</span>
                </div>
              </div>
            </div>

            {/* Floating Contextual Badges */}
            <div className="artifact-chip chip-top">
              <span className="chip-dot" />
              <span className="chip-text">AI × PRODUCT</span>
            </div>
            <div className="artifact-chip chip-bottom">
              <span className="chip-pulse" />
              <span className="chip-text">SYSTEMS · CRAFT</span>
            </div>
            <div className="artifact-chip chip-side">
              <span className="chip-star">◈</span>
              <span className="chip-text">13+ SHIPPED</span>
            </div>
          </div>
        </div>
      </div>

      <div className="credential-strip">
        {[
          "8+ YEARS EXPERIENCE",
          "UI/UX DESIGN",
          "PRODUCT DESIGN",
          "AI-ASSISTED DESIGN",
          "WEB + MOBILE",
        ].map((x) => (
          <span key={x} className="credential-item">
            <span className="credential-bullet" />
            {x}
          </span>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  const stats = [
    ["08+", "Years Experience"],
    ["13+", "Featured Projects"],
    ["UI/UX", "Core Expertise"],
    ["AI", "Design Workflow"],
  ];
  return (
    <section id="about" className="section-shell intro section-pad">
      <div className="section-label">
        ABOUT MY APPROACH <span>01</span>
      </div>
      <h2>
        I don't just design interfaces. <span>I design how products work.</span>
      </h2>
      <div className="intro-copy">
        <p>
          I'm Devendra Singh Bisht, a Senior UI/UX &amp; Product Designer with 8 years of experience
          designing websites, e-commerce experiences, mobile products and digital platforms. My
          approach combines UX thinking, visual design, product strategy, design systems and
          AI-assisted workflows to turn complex requirements into clear, scalable and engaging
          digital experiences.
        </p>
        <p>
          I use AI as a design partner to accelerate exploration, structure ideas, prototype faster
          and explore product possibilities while keeping human creativity, design judgment and
          visual craft at the center.
        </p>
      </div>
      <div className="stats">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Laptop({ project }: { project: Project }) {
  return (
    <div className="laptop" data-cursor="VIEW">
      <div className="laptop-lid">
        <div className="camera" />
        <img
          src={images[project.id - 1]}
          loading="lazy"
          alt={`${project.title} website homepage`}
        />
        <div className="project-hover">
          <strong>VIEW CASE STUDY</strong>
          <ArrowUpRight />
          <span>UX STRATEGY · WIREFRAMES · UI · PROTOTYPE</span>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", key);
    };
  }, [onClose]);
  return (
    <div
      className="case-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="case-top">
        <span>CASE STUDY · {String(project.id).padStart(2, "0")}/13</span>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close case study">
          <X />
        </Button>
      </div>
      <div className="case-hero">
        <p>{project.category}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noreferrer" className="text-link">
          Visit Live Website <ArrowUpRight />
        </a>
      </div>
      <div className="case-visual">
        <img src={images[project.id - 1]} alt={`${project.title} website design`} />
      </div>
      <div className="case-grid">
        <div>
          <span>ROLE</span>
          <p>UI/UX &amp; Product Design</p>
        </div>
        <div>
          <span>INDUSTRY</span>
          <p>{project.category}</p>
        </div>
        <div>
          <span>TOOLS</span>
          <p>{project.tools.join(" · ")}</p>
        </div>
      </div>
      <div className="case-content">
        <section>
          <span>01 — PROJECT OVERVIEW</span>
          <h3>A clear, responsive digital experience.</h3>
          <p>{project.description}</p>
        </section>
        <section>
          <span>02 — MY CONTRIBUTION</span>
          <h3>Designed with intent, from structure to interface.</h3>
          <div className="case-tags">
            {project.designed.map((x) => (
              <span key={x}>
                <Check />
                {x}
              </span>
            ))}
          </div>
        </section>
        <section>
          <span>03 — DESIGN DIRECTION</span>
          <h3>Hierarchy, clarity and a scalable visual language.</h3>
          <p>
            The work focused on the supplied areas of contribution, translating the product's
            content and services into a coherent, usable responsive experience.
          </p>
        </section>
      </div>
      <div className="case-end">
        <h3>Explore the live experience.</h3>
        <a href={project.url} target="_blank" rel="noreferrer" className="button-link">
          Visit Live Website <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.filters.includes(active))),
    [active],
  );
  return (
    <section id="work" className="work section-pad">
      <div className="section-shell">
        <div className="section-label">
          SELECTED WORK · 01—13 <span>02</span>
        </div>
        <div className="work-head">
          <h2>
            Digital experiences
            <br />
            designed to <em>perform.</em>
          </h2>
          <p>
            A selection of websites, e-commerce platforms, marketplaces and digital products
            designed with a focus on UX, visual design and product thinking.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <Button
              variant={active === filter ? "filterActive" : "filter"}
              size="sm"
              key={filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      <div className="projects">
        {filtered.map((project) => (
          <article className="project" key={project.id}>
            <button
              className="project-visual"
              onClick={() => setSelected(project)}
              aria-label={`View ${project.title} case study`}
            >
              <Laptop project={project} />
            </button>
            <div className="project-copy">
              <div className="project-number">
                {String(project.id).padStart(2, "0")} <span>/ 13</span>
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="meta">
                <span>DESIGNED</span>
                <p>{project.designed.join(" · ")}</p>
              </div>
              <div className="meta">
                <span>TOOLS</span>
                <p>{project.tools.join(" · ")}</p>
              </div>
              <div className="project-actions">
                <Button variant="text" onClick={() => setSelected(project)} data-cursor="EXPLORE">
                  View Case Study <ArrowUpRight />
                </Button>
                <Button asChild variant="textMuted">
                  <a href={project.url} target="_blank" rel="noreferrer" data-cursor="OPEN">
                    Live Website <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

const workflow = [
  ["UNDERSTAND", "Client requirements · Business goals · Product documentation"],
  ["EXPLORE", "ChatGPT · Claude · Gemini"],
  ["STRUCTURE", "User journeys · IA · Wireframes"],
  ["DESIGN", "Figma · Figma AI · Adobe AI"],
  ["PROTOTYPE", "Lovable · Claude Code · Figma"],
  ["REFINE", "Usability · Accessibility · Responsive UX"],
];
const tools = [
  {
    name: "ChatGPT",
    role: "LLM · Ideation",
    desc: "Research, ideation and structured exploration",
    Icon: ChatGPT3DIcon,
  },
  {
    name: "Claude",
    role: "Reasoning · UX Docs",
    desc: "Product thinking and design documentation",
    Icon: Claude3DIcon,
  },
  {
    name: "Google Gemini",
    role: "Multimodal · Synthesis",
    desc: "Multimodal exploration and synthesis",
    Icon: Gemini3DIcon,
  },
  {
    name: "Figma AI",
    role: "UI Systems · Speed",
    desc: "Interface exploration and design acceleration",
    Icon: Figma3DIcon,
  },
  {
    name: "Adobe AI",
    role: "Visuals · Generative",
    desc: "Visual creation and asset refinement",
    Icon: Adobe3DIcon,
  },
  {
    name: "Lovable",
    role: "Rapid Prototyping",
    desc: "Rapid high-fidelity product prototyping",
    Icon: Lovable3DIcon,
  },
  {
    name: "Claude Code",
    role: "Interactive Workflows",
    desc: "Interactive implementation workflows",
    Icon: ClaudeCode3DIcon,
  },
  {
    name: "Google AI Studio",
    role: "AI Experiments · API",
    desc: "AI product and interaction experiments",
    Icon: GoogleAIStudio3DIcon,
  },
];
function AISection() {
  return (
    <section id="ai" className="ai-section section-pad">
      <div className="section-shell">
        <div className="section-label">
          AI × PRODUCT DESIGN <span>03</span>
        </div>
        <h2>
          Design faster.
          <br />
          Think deeper.
          <br />
          <em>Build smarter.</em>
        </h2>
        <p className="lead">
          I use AI as a design partner to accelerate research, UX exploration, information
          architecture, wireframing, prototyping and product thinking while keeping human creativity
          and design judgment at the center.
        </p>
        <div className="workflow">
          {workflow.map(([name, desc], i) => (
            <div key={name} className="workflow-step">
              <small>0{i + 1}</small>
              <strong>{name}</strong>
              <p>{desc}</p>
              {i < workflow.length - 1 && <ArrowUpRight />}
            </div>
          ))}
        </div>
        <div className="tool-grid">
          {tools.map(({ name, role, desc, Icon }) => (
            <article key={name} className="tool-card">
              <div className="tool-card-top">
                <div className="tool-icon-3d">
                  <Icon />
                </div>
                <span className="tool-role-tag">{role}</span>
              </div>
              <Sparkles />
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  [
    "UX DESIGN",
    [
      "User Research",
      "User Journeys",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Usability",
      "UX Strategy",
    ],
  ],
  [
    "UI DESIGN",
    [
      "Visual Design",
      "Responsive Design",
      "Web Design",
      "Mobile UI",
      "Design Systems",
      "Typography",
      "Iconography",
      "Interaction Design",
    ],
  ],
  [
    "PRODUCT DESIGN",
    [
      "Product Thinking",
      "Product Architecture",
      "Feature Design",
      "MVP Design",
      "Design Validation",
      "Prototyping",
    ],
  ],
  [
    "AI PRODUCT DESIGN",
    [
      "AI-assisted UX",
      "AI Product Ideation",
      "AI Interface Design",
      "AI Workflow Design",
      "AI Prototyping",
      "Conversational UI",
      "AI Agent UX Concepts",
    ],
  ],
] as const;
function Skills() {
  return (
    <section id="skills" className="skills section-shell section-pad">
      <div className="section-label">
        DESIGN CAPABILITIES <span>04</span>
      </div>
      <div className="skills-intro">
        <h2>
          Craft, systems
          <br />
          and <em>strategy.</em>
        </h2>
        <p>
          End-to-end product design spanning research, interaction, visual systems and AI-assisted
          workflows.
        </p>
      </div>
      <div className="skill-list">
        {skills.map(([category, items], i) => (
          <article key={category}>
            <span>0{i + 1}</span>
            <h3>{category}</h3>
            <div>
              {items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutMore() {
  const philosophy = [
    ["SIMPLICITY", "Make complex products easier to understand."],
    ["HUMAN-CENTERED", "Design around real user needs."],
    ["SYSTEMS THINKING", "Create scalable and consistent experiences."],
    ["PRODUCT THINKING", "Design for users and business goals."],
    ["AI-AUGMENTED", "Use AI to accelerate exploration without replacing human creativity."],
  ];
  return (
    <>
      <section className="about-more section-shell section-pad">
        <div>
          <div className="section-label">
            ABOUT DEVENDRA <span>05</span>
          </div>
          <h2>
            From interface design to <em>product thinking.</em>
          </h2>
        </div>
        <div className="about-body">
          <p>
            I'm Devendra Singh Bisht, a Senior UI/UX &amp; Product Designer with 8 years of
            experience designing digital experiences across websites, e-commerce platforms, mobile
            products and digital products.
          </p>
          <p>
            My design approach combines UX strategy, visual design, product thinking, responsive
            design, design systems and AI-assisted workflows to transform complex requirements into
            simple, useful and engaging experiences.
          </p>
        </div>
        <div className="education">
          <span>EDUCATION</span>
          <h3>Design backed by technology.</h3>
          <p>
            <strong>Bachelor of Computer Applications — BCA</strong>
            <br />
            Jaipur National University
          </p>
          <p>
            My BCA background gives me a strong foundation in technology and digital systems,
            complementing my UI/UX and Product Design expertise.
          </p>
        </div>
      </section>
      <section className="evolution section-pad">
        <div className="section-shell">
          <div className="section-label">
            CAREER EVOLUTION <span>06</span>
          </div>
          <div className="evolution-line">
            {[
              "UI DESIGN",
              "UX DESIGN",
              "PRODUCT DESIGN",
              "DESIGN SYSTEMS",
              "AI-ASSISTED PRODUCT DESIGN",
            ].map((x, i) => (
              <div key={x} className="evolution-step">
                <div className="step-node">
                  <span className="node-pulse" />
                  <span className="node-dot" />
                </div>
                <div className="step-content">
                  <div className="step-badge">MILESTONE 0{i + 1}</div>
                  <span className="step-num">0{i + 1}</span>
                  <strong className="step-title">{x}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="philosophy">
            {philosophy.map(([name, desc], i) => (
              <article key={name} className="philosophy-card">
                <div className="philosophy-header">
                  <span className="philosophy-num">0{i + 1}</span>
                  <div className="philosophy-indicator" />
                </div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience section-shell section-pad">
      <div className="section-label">
        EXPERIENCE <span>07</span>
      </div>
      <div className="experience-grid">
        <h2>
          Eight years of
          <br />
          <em>continuous evolution.</em>
        </h2>
        <div className="experience-note">
          <span>EMPLOYMENT HISTORY</span>
          <h3>Verified details coming soon.</h3>
          <p>
            Company, role, duration, responsibilities and project information will be added when
            supplied.
          </p>
        </div>
      </div>
      <div className="resume">
        <div>
          <span>RESUME</span>
          <h3>
            8 Years of Designing
            <br />
            Digital Experiences
          </h3>
          <p>UI/UX · Product Design · Design Systems · AI-Assisted Design</p>
        </div>
        <Button asChild variant="outlinePremium" size="xl">
          <a href="#resume-placeholder" onClick={(e) => e.preventDefault()}>
            Download Resume <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <section id="contact" className="contact section-pad">
        <div className="contact-glow" />
        <div className="section-shell">
          <p className="eyebrow">LET'S CREATE SOMETHING MEANINGFUL</p>
          <h2>
            Have a product idea?
            <br />
            <em>Let's design it.</em>
          </h2>
          <p>
            From UX strategy and product architecture to high-fidelity UI, design systems and
            AI-assisted prototyping, let's transform ideas into polished digital experiences.
          </p>
          <div>
            <Button variant="premium" size="xl" data-cursor="START">
              Start a Conversation <ArrowUpRight />
            </Button>
            <Button variant="textMuted" size="xl">
              LinkedIn <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>
      <footer className="footer section-shell">
        <div>
          <strong>DEVENDRA SINGH BISHT</strong>
          <span>Senior UI/UX &amp; Product Designer</span>
        </div>
        <nav>
          {["Work", "About", "Skills", "AI", "Contact"].map((x) => (
            <button key={x} onClick={() => scrollTo(x.toLowerCase())}>
              {x}
            </button>
          ))}
        </nav>
        <div className="social">
          <span>LinkedIn</span>
          <span>Behance</span>
          <span>Dribbble</span>
        </div>
        <small>© 2026 Devendra Singh Bisht. All rights reserved.</small>
      </footer>
    </>
  );
}

export function Portfolio() {
  return (
    <main>
      <Preloader />
      <Cursor />
      <Navbar />
      <Hero />
      <Intro />
      <Work />
      <AISection />
      <Skills />
      <AboutMore />
      <Experience />
      <Contact />
    </main>
  );
}
