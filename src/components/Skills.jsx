import './Skills.css'

const SKILLS = [
    {
        category: 'Tools & CI/CD',
        tech: ['Git', 'Github Actions', 'Gitlab', 'Jenkins', 'Jira', 'Postman']
    },
    {
        category: 'Processes',
        tech: ['Agile', 'Defect Tracking', 'Documentation', 'Root Cause Analysis', 'Code Reviews', 'Mentoring', ]
    },
    {
        category: 'Automation',
        tech: ['Playwright', 'Selenium', 'Hound']
    },
    {
        category: 'Languages',
        tech: ['Python', 'TypeScript', 'Java', 'Elixir', 'C#']
    },
    {
        category: 'Testing Methodologies',
        tech: ['Mobile (iOS/Android)', 'API', 'Cross-browser', 'Regression', 'Exploratory']
    },
]

export default function Skills() {
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>

            <div className="skills-grid">
                {SKILLS.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <h3>{skill.category}</h3>

                        <div className="card-tech">
                            {skill.tech.map((item) => (
                            <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}