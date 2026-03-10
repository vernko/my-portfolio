import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '../../components/Nav'

describe('rendering', () => {
    test('nav links point to correct sections', () => {
        render(<Nav />)
        
        expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
        expect(screen.getByRole('link', { name: /skills/i })).toHaveAttribute('href', '#skills')
        expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute('href', '#experience')
    })

    test('nav links on mobile point to correct sections', async () => {
        const user = userEvent.setup()
        render(<Nav />)

        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

        await user.click(screen.getByRole('button'))
        const mobileMenu = screen.getByTestId('mobile-menu')
        expect(within(mobileMenu).getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
        expect(within(mobileMenu).getByRole('link', { name: /skills/i })).toHaveAttribute('href', '#skills')
        expect(within(mobileMenu).getByRole('link', { name: /experience/i })).toHaveAttribute('href', '#experience')
    })
})
