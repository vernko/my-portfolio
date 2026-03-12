import './Hero.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profilePhoto from '../assets/profile.png'

export default function Hero({ name, title, description, availability }) {
  return (
    <div class="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{availability}</p>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hero-cta">
            View My Work
          </button>
          <div className="hero-social">
            <a href="https://github.com/vernko" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vernkofford/" target="_blank" rel="noreferrer" aria-label="LinkedIN"><FaLinkedin /></a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePhoto} alt="Vern Kofford" />
        </div>
      </div>
    </div>
  )
}