import { render, screen } from '@testing-library/react'
import Hero from '../../components/Hero'

describe('Hero', () => {
    const mockProps = {
        name: 'Vern Kofford',
        title: 'Software Engineer in Test',
        description: 'I build reliable systems and automate the things that shouldn\'t need human attention.',
    }

    test('rendering', () => {
        render(<Hero {...mockProps} />)
        expect(screen.getByText(/vern kofford/i)).toBeInTheDocument()
        expect(screen.getByText(/software engineer in test/i)).toBeInTheDocument()
        expect(screen.getByText(/i build reliable systems/i)).toBeInTheDocument()
        expect(screen.getByText(/view my work/i)).toBeInTheDocument()

        const githubLink = screen.getByRole('link', { name: /github/i })
        expect(githubLink).toHaveAttribute('href', 'https://github.com/vernko')

        const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/vernkofford/')
    })
})