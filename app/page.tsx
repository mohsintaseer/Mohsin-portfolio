import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import AgentGraph from "@/components/AgentGraph";
import { Reveal, Card, Typer, Progress } from "@/components/Fx";
import AgentPipeline from "@/components/AgentPipeline";
import { profile, experience, education, skills, projects, events } from "@/lib/data";

const allSkills = skills.flatMap((s) => s.items);

export default function Home() {
  const first = profile.name.split(" ");
  return (
    <>
      <Progress />
      <header className="top">
        <a href="#top" className="logo">SMTN</a>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a><a href="#convocation">Convocation</a><a href="#experience">Experience</a>
          <a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <AgentGraph />
        <div className="hero-in">
          <div className="copy">
            <p className="hi">Hi, I’m</p>
            <h1 aria-label={profile.name}>
              {first.map((w, wi) => (
                <span className="word" key={wi} aria-hidden="true">
                  {w.split("").map((ch, ci) => (
                    <span key={ci} className="ch" style={{ animationDelay: `${(wi * 6 + ci) * 45}ms` }}>{ch}</span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="line"><Typer words={["Full-stack web developer", "Agentic AI & RAG builder", "Flutter app developer"]} /></p>
            <p className="lead">{profile.intro}</p>
            <div className="cta">
              <a className="btn" href="#projects">See my work</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="portrait">
            <span className="ring" aria-hidden="true" />
            <div className="photo"><Image src="/profile.jpg" alt="Syed Mohsin Taseer Naqvi in graduation gown" width={450} height={600} priority /></div>
            <span className="badge">{education.degree} · {education.school}<br />Class of 2026</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">{[...allSkills, ...allSkills].map((s, i) => <span key={i}>{s}</span>)}</div>
      </div>

      <main className="wrap">
        <section id="projects">
          <Reveal><h2>Things I’ve built</h2><p className="sub">Move your cursor over a card.</p></Reveal>
          <ul className="grid">
            {projects.map((p, i) => (
              <Card key={p.name}>
                <div className={`reveal-card ${i === 0 ? "feat" : ""}`}>
                  <div className="ph"><h3><a href={p.link}>{p.name}</a></h3><span>{p.tag}</span></div>
                  <p>{p.desc}</p>
                  <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </Card>
            ))}
          </ul>
          <AgentPipeline />
        </section>

        <section id="convocation">
          <Reveal>
            <h2>The last chapter</h2>
            <p className="sub">Departmental convocation · University of Gujrat · Class of 2026</p>
          </Reveal>

          <div className="cert-row">
            <Reveal className="cert-col">
              <figure className="cert">
                <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />
                <div className="cert-img">
                  <Image src="/convocation/certificate.jpg" alt="Mohsin receiving a Certificate of Achievement from Dr. Sami at the convocation" width={843} height={1264} />
                  <span className="shine" aria-hidden="true" />
                </div>
                <figcaption>Certificate of Achievement, presented by Dr. Sami</figcaption>
              </figure>
            </Reveal>
            <Reveal className="story">
              <h3>Four years, one stage</h3>
              <p className="l1">Mohsin walked into the Computer Science department in 2022 and walked out in 2026 with a very different résumé: a lab instructor teaching the same subjects he once struggled through, an Information Secretary keeping the Computing Society talking, and a builder shipping AI agents.</p>
              <p className="l2">His final year project, TradeFlux, is the clearest picture of that growth. It started as a classroom idea and became a platform where several agents work together to read the market.</p>
              <p className="l3">This certificate, handed over by Dr. Sami on the convocation stage, is the department’s way of saying the effort was noticed. It is a chapter closing, and the next one is already being written in code.</p>
              <ul className="marks l4"><li>Class of 2026</li><li>Lab instructor</li><li>Society secretary</li><li>Agentic AI builder</li></ul>
            </Reveal>
          </div>

          <Reveal>
            <figure className="wide">
              <Image src="/convocation/stage.jpg" alt="Mohsin on the convocation stage with department faculty" width={1400} height={943} />
              <figcaption>On stage with the faculty who taught, graded and encouraged along the way.</figcaption>
            </figure>
          </Reveal>
          <Reveal>
            <div className="duo">
              <figure className="tilt a"><Image src="/convocation/caps.jpg" alt="Graduates tossing their caps into the air" width={1280} height={853} /><figcaption>Caps in the air</figcaption></figure>
              <figure className="tilt b"><Image src="/convocation/group.jpg" alt="The graduating class posing together with faculty" width={1280} height={853} /><figcaption>The whole batch</figcaption></figure>
            </div>
          </Reveal>
        </section>

        <section id="experience">
          <Reveal><h2>Experience</h2></Reveal>
          <div className="timeline">
            {experience.map((e) => (
              <Reveal key={e.title} className="job">
                <span className="dot" />
                <div className="ph"><h3>{e.title}</h3><span>{e.period}</span></div>
                <p className="org">{e.org}</p>
                <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal><p className="sub">Also attended conferences and seminars on {events.join(", ").toLowerCase()}.</p></Reveal>
        </section>

        <section id="skills">
          <Reveal><h2>Skills</h2></Reveal>
          <Reveal>
            <dl className="skills">
              {skills.map((s) => (<div key={s.group}><dt>{s.group}</dt><dd>{s.items.join(" · ")}</dd></div>))}
            </dl>
          </Reveal>
        </section>

        <section id="contact">
          <Reveal>
            <h2>Let’s work together</h2>
            <p className="sub">Send a message and I’ll reply by email. {profile.location}.</p>
            <ContactForm />
            <p className="social"><a href={profile.github}>GitHub</a> <a href={profile.linkedin}>LinkedIn</a> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          </Reveal>
        </section>
        <footer>© {new Date().getFullYear()} {profile.name}</footer>
      </main>
    </>
  );
}
