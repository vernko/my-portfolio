import './Hero.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero({ name, title, description, availability }) {
  return (
    <div className="hero">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{availability}</p>
      <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hero-cta">
        View My Work
      </button>
      <div className="hero-social">
        <a href="https://github.com/vernko" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vernkofford/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  )
}