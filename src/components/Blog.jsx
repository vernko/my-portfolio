import './Blog.css'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Blog() {
    const ref = useScrollAnimation()

    return (
        <section id="blog" className="blog fade-in" ref={ref}>
            <div className="blog-inner">
                <h1>Blog</h1>
                <h2>Coming soon!</h2>
                <p>Thoughts on testing, automation, and engineering.</p>
            </div>
        </section>
    )
}