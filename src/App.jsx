import Nav from './components/Nav'
import Hero from './components/Hero'

export default function App() {
  return (
    <div>
      <Nav />
      <Hero
        name="Vern Kofford"
        title="Software Engineer in Test"
        description="I build reliable systems and automate the things that shouldn't need human attention."
        location="Huntington, Utah"
      />
    </div>
  )
}