import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Experience from './components/Experience'
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
        availability="🟢 Open to new opportunities"
      />
      <div className="app-wrapper">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </div>
  )
}