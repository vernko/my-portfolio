import './Hero.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profilePhoto from '../assets/profile.png'

export default function Hero({ name, title, description, availability }) {
  return (
    <section className="hero" data-testid="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 data-testid="hero-name">{name}</h1>
          <h2 data-testid="hero-title">{title}</h2>
          <p data-testid="hero-description">{description}</p>
          <p data-testid="hero-availability">{availability}</p>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hero-cta" data-testid="hero-cta-link">
            View My Work
          </button>
          <div className="hero-social">
            <a href="https://github.com/vernko" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="hero-github"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vernkofford/" target="_blank" rel="noreferrer" aria-label="LinkedIN" data-testid="hero-linkedin"><FaLinkedin /></a>
          </div>
        </div>
        <div className="hero-image" data-testid="hero-img">
          <img src={profilePhoto} alt="Vern Kofford" />
        </div>
      </div>
    </section>
  )
}