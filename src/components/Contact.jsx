import { useState } from "react"
import './Contact.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({name: '', email: '', message: ''})
    const [submitError, setSubmitError] = useState('')

    const getFieldError = (field, value) => {
        if (field === 'name') {
            if (!value) return 'Name is required'
            if (value.trim().length < 2) return 'Name must be at least 2 characters'
        }

        if (field === 'email') {
            if (!value) return 'Email is required'
            if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        }

        if (field === 'message') {
            if (!value) return 'Message is required'
            if (value.trim().length < 20) return 'Message must be at least 20 characters'
            if (value.length > 300) return 'Message must be under 300 characters'
        }

        return ''
    }

    const validateField = (field) => {
        const value = { name, email, message }[field]
        setErrors(prev => ({ ...prev, [field]: getFieldError(field, value) }))
    }

    const validateForm = () => {
        const newErrors = {
            name: getFieldError('name', name),
            email: getFieldError('email', email),
            message: getFieldError('message', message),
        }
        setErrors(newErrors)
        return !newErrors.name && !newErrors.email && !newErrors.message
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        
        const response = await fetch('https://formspree.io/f/mqeyzkag', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })

        setIsSubmitting(false)

        if (response.ok) {
            setSent(true)
            setName('')
            setEmail('')
            setMessage('')
            setSubmitError('') 
            setTimeout(() => setSent(false), 3000)
        } else {
            setSubmitError('Something went wrong. Please try again.')
        }
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-inner">
                <h1>Contact</h1>

                {sent ? (
                    <div className="contact-success">
                        Message sent! I'll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-grid">
                        <div>
                            <label htmlFor="name">Name: <span className="required">*</span></label>
                            <input
                                type="text"
                                className="contact-input"
                                id="name"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={() => validateField('name')}
                            />
                            {errors.name && <p className="contact-error">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email">Email: <span className="required">*</span></label>
                            <input
                                type="text"
                                className="contact-input"
                                id="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => validateField('email')}
                            />
                            {errors.email && <p className="contact-error">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message">Message: <span className="required">*</span></label>
                            <textarea
                                type="text"
                                className="contact-input"
                                id="message"
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onBlur={() => validateField('message')}
                            />
                            {errors.message && <p className="contact-error">{errors.message}</p>}
                        </div>

                        {submitError && <p className="contact-error">{submitError}</p>}
                        <button type="submit" className="contact-submit">{isSubmitting ? 'Sending...' : 'Submit'}</button>
                    </form>
                )}
            </div>
        </section>
    )
}