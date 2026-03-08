import './Projects.css'

const PROJECTS = [
    {
        id: 1,
        title: 'UI & Authentication Testing',
        description: 'Technical assessment project demonstrating UI and authentication test automation.',
        tech: ["Playwright", "Typescript", "Page Object Model"],
        link: 'https://github.com/vernko/pw-ts-ui-auth',
        media: 'coming-soon'
    },
        {
        id: 2,
        title: 'PBR UI Automation',
        description: 'End-to-end UI automation tests for PBR web experiences focused on validating real user behavior and critical flows.',
        tech: ["Playwright", "Typescript"],
        link: 'https://github.com/vernko/playwright-ts-pbr',
        media: 'coming-soon'
    },
    {
        id: 3,
        title: 'SauceDemo E-Commerce Test Suite',
        description: 'Comprehensive E2E test suite for the SauceDemo e-commerce app covering authentication, shopping cart, checkout, and multi-user role testing.',
        tech: ["Playwright", "Python"],
        link: 'https://github.com/vernko/python-playwright-saucedemo',
        media: 'coming-soon'
    },
    {
        id: 4,
        title: 'API Testing - JSONPlaceholder',
        description: 'Rest API test automation suite testing JSONPlaceholder fake REST API to demonstrate API testing skills.',
        tech: ["Python", "pytest", "requests"],
        link: 'https://github.com/vernko/python-api-testing-jsonplaceholder',
        media: 'coming-soon',
    },
]

export default function Projects() {
    return(
        <section id="projects" className="projects">
            <div className="projects-inner">
                <h1>Projects</h1>
                
                <div className="projects-grid">
                    {PROJECTS.map((card) => (
                        <div key={card.id} className="project-card">
                            <div className="project-card-title">
                                <h2>{card.title}</h2>
                            </div>
                            <div className="project-card-description">
                                <p>{card.description}</p>
                            </div>
                            <div className="project-card-tech">
                                {card.tech.map((tech) => (
                                <span key={tech}>{tech}</span>
                                ))}
                            </div>
                            <div className="project-card-link">
                                <a href={card.link} target="_blank">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}