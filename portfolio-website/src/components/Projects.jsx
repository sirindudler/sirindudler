export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SBB Travelcard Calculator",
      description: "Calculate optimal travelcard for Swiss public transport",
      technologies: ["TypeScript"],
      github: "https://github.com/sirindudler/SBB-Travelcard-Calculator"
    },
    {
      id: 2,
      title: "Environmental Monitoring Dashboard", 
      description: "Interactive environmental monitoring dashboard for Assaba region of Mauritania",
      technologies: ["TypeScript"],
      github: "https://github.com/sirindudler/STARTHack25-G20-UNCCD-Case"
    },
    {
      id: 3,
      title: "eToro Import Tool",
      description: "Transform eToro account statements (.PDF) into .csv for parqet.com import",
      technologies: ["Python"],
      github: "https://github.com/sirindudler/parqet-etoro-import"
    },
    {
      id: 4,
      title: "Value Investors Club Watchlist",
      description: "Define watchlist for Value Investors Club Forum",
      technologies: ["Python"],
      github: "https://github.com/sirindudler/ValueInvestorsClub_Watchlist"
    },
    {
      id: 5,
      title: "Coin Flip Bot",
      description: "Weighted Coin Flip Game - Bot for ElmWealth",
      technologies: ["Python"],
      github: "https://github.com/sirindudler/ElmWealthCoinFlipBot"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}