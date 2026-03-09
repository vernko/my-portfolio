import './Experience.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

const EXPERIENCES = [
    {
        title: 'Business I & R Tech',
        company: 'EmeryTelcom',
        date: '2023 - Present',
        location: 'Onsite',
        description: 'Validate and deploy phone, internet, and network infrastructure for business customers. Designed a testing lab and standardized testing procedures and documentation to improve efficiency and repeatability.',
    },
        {
        title: 'Software QA Assistant Teacher',
        company: 'Mountainland Technical College',
        date: '2023 - Present',
        location: 'Onsite',
        description: 'Mentor and instruct students in QA best practices, automation fundamentals, Agile testing processes, and professional defect reporting.',
    },
    {
        title: 'Software Engineer in Test',
        company: 'Bill',
        date: '2022 - 2023',
        location: 'Remote',
        description: 'Owned quality validation for a white-label expense management platform, led automated UI tests across web and mobile. Enhanced the Hound/Elixir automation framework with improvements that reduced flaky test failures.',
    },
    {
        title: 'Software Engineer in Test',
        company: 'NuSkin',
        date: '2019 - 2022',
        location: 'Hybrid',
        description: 'Primary QA on an Agile team verifying web, Android, and iOS. Maintained the Selenium/Java framework. Defined standardized bug reporting guidelines that improved defect clarity across teams.',
    },
    {
        title: 'Software Engineer in Test (Contract)',
        company: 'Software Technology Group',
        date: '2019',
        location: 'Onsite',
        description: 'Executed manual and automated test cases within Agile sprint cycles while contributing to Selenium/Java framework enhancements and regression strategy.',
    },
    {
        title: 'Frontend Developer/QA',
        company: 'Tranont',
        date: '2019',
        location: 'Onsite',
        description: 'Collaborated with the product team to implement UI features and site improvements using JavaScript, while performing testing across new builds.',
    },
]

export default function Experience() {
    const ref = useScrollAnimation()

    return (
        <section id="experience" className="experience fade-in" ref={ref}>
            <div className="experience-inner">
                <h1>Experience</h1>

                <div className="experience-grid">
                    {EXPERIENCES.map((experience) => (
                        <div key={`${experience.company}-${experience.title}`} className="experience-card">
                            <div className="experience-card-title">
                                <h2>{experience.title}</h2>
                            </div>
                            <div className="experience-card-middle">
                                <span>{experience.company}</span>
                                <span>{experience.date}</span>
                                <span>{experience.location}</span>
                            </div>
                            <div className="experience-card-description">
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}