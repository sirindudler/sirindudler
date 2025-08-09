export default function Skills() {
  const skills = [
    { name: "TypeScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "Financial Analysis", icon: "📊" },
    { name: "Data Processing", icon: "🔄" },
    { name: "PDF Automation", icon: "📄" },
    { name: "Transportation Optimization", icon: "🚊" },
    { name: "Environmental Monitoring", icon: "🌍" },
    { name: "Git", icon: "🔧" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Swiss Public Transport", icon: "🇨🇭" }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}