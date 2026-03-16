import './About.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="about fade-in" ref={ref} data-testid="about-section">
      <div className="about-inner">
        <h2 data-testid="about-heading">About</h2>
        <div className="about-grid">
          <div className="about-professional">
            <span className="about-label" data-testid="about-professional-label">Professionally</span>
            <p data-testid="about-professional-text">I'm a QA/SDET engineer driven by curiosity and persistence — I thrive in environments where there's always something new to learn. Collaboration is at the heart of how I work; I believe the best products are built by teams that trust each other. I bring that trust through clean work, organized thinking, and showing up consistently.</p>
          </div>
          <div className="about-personal">
            <span className="about-label" data-testid="about-personal-label">Personally</span>
            <p data-testid="about-personal-text">Outside of work I'm probably the loudest parent in the stands. I've been involved in sports my whole life — playing, watching, and coaching. I also have a soft spot for live performances and am proudly nerdy about anime, superheroes, and all things Godzilla.</p>
          </div>
        </div>
      </div>
    </section>
  )
}