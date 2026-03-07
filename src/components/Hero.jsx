import './Hero.css'

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
    </div>
  )
}