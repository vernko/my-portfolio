import { render, screen, within } from '@testing-library/react'
import App from '../../App'

describe('rendering', () => {
    test('renders all sections', () => {
        render(<App />)
        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    })
})