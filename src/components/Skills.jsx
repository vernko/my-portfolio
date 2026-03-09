import './Skills.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

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
    const ref = useScrollAnimation()

    return(
        <section id="skills" className="skills fade-in" ref={ref}>
            <div className="skills-inner">
                <h2>Skills</h2>

                <div className="skills-grid">
                    {SKILLS.map((skill) => (
                        <div key={skill.category} className="skill-card">
                            <h3>{skill.category}</h3>

                            <div className="card-tech">
                                {skill.tech.map((badge) => (
                                <span key={badge} className="skill-badge">{badge}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}