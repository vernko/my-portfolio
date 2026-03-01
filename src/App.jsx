import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

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
      <div className="app-wrapper">
        <Projects />
        <Skills />
      </div>
    </div>
  )
}