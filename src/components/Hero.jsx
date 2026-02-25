export default function Hero({ name, title, description, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  )
}