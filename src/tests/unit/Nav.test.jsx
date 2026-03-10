import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '../../components/Nav'

describe('Nav', () => {
    describe('rendering', () => {
        test('renders nav links', () => {
            render(<Nav />)
            expect(screen.getByText(/about/i)).toBeInTheDocument()
            expect(screen.getByText(/skills/i)).toBeInTheDocument()
            expect(screen.getByText(/experience/i)).toBeInTheDocument()
            expect(screen.getByText(/projects/i)).toBeInTheDocument()
            expect(screen.getByText(/contact/i)).toBeInTheDocument()
        })

        test('renders logo', () => {
            render(<Nav />)
            expect(screen.getByText(/vern kofford/i)).toBeInTheDocument()
        })
    })

    describe('hamburger menu', () => {
        test('clicking hamburger opens and closes menu', async () => {
            const user = userEvent.setup()
            render(<Nav />)

            expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

            await user.click(screen.getByRole('button'))
            expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

            await user.click(screen.getByRole('button'))
            expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
        })
    })
})