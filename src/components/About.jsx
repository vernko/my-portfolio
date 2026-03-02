import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-professional">
          <span className="about-label">Professionally</span>
          <p>I'm a QA/SDET engineer driven by curiosity and persistence — I thrive in environments where there's always something new to learn. Collaboration is at the heart of how I work; I believe the best products are built by teams that trust each other. I bring that trust through clean work, organized thinking, and showing up consistently.</p>
        </div>
        <div className="about-personal">
          <span className="about-label">Personally</span>
          <p>Outside of work I'm probably the loudest parent in the stands. I've been involved in sports my whole life — playing, watching, and coaching. I also have a soft spot for live performances and am proudly nerdy about anime, superheroes, and all things Godzilla.</p>
        </div>
      </div>
    </section>
  )
}