import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import Contact from '../../components/Contact'
import { expect } from 'vitest'

describe('Contact', () => {
    describe('rendering', () => {
        test('render form fields', () => {
            render(<Contact />)
            expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
            expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
            expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
        })

        test('renders placeholders for form fields', () => {
            render(<Contact />)
            expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
            expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
            expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
        })

        test('renders counters on name and message fields', () => {
            render(<Contact />)
            expect(screen.getByTestId("name-char-count")).toBeInTheDocument()
            expect(screen.getByTestId("message-char-count")).toBeInTheDocument()
        })

        test('character counter updates as user types', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            await user.type(screen.getByLabelText(/name/i), 'Vern')
            expect(screen.getByTestId('name-char-count')).toHaveTextContent('4/100')
            
            await user.type(screen.getByLabelText(/message/i), 'Hello')
            expect(screen.getByTestId('message-char-count')).toHaveTextContent('5/300')
        })

        test('character counter turns red when approaching limit', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'a'.repeat(281) } })
            expect(screen.getByTestId('message-char-count')).toHaveClass('contact-char-count--warning')
        })
    })

    describe('validation', () => {
        test('shows error when name is too short', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const nameInput = screen.getByLabelText(/name/i)
            await user.click(nameInput)
            await user.type(nameInput, 'a')
            await user.tab()
            
            expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
        })

        test('shows error when name is too many characters', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const nameInput = screen.getByLabelText(/name/i)
            await user.click(nameInput)
            fireEvent.change(nameInput, { target: { value: 'a'.repeat(101) } })
            fireEvent.blur(nameInput)
            
            expect(screen.getByText(/name must be under 100 characters/i)).toBeInTheDocument()
        })

        test('shows error when name is empty on blur', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const nameInput = screen.getByLabelText(/name/i)
            await user.click(nameInput)
            await user.tab()
            
            expect(screen.getByText(/name is required/i)).toBeInTheDocument()
        })

        test('shows error when email is empty on blur', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const enmailInput = screen.getByLabelText(/email/i)
            await user.click(enmailInput)
            await user.tab()
            
            expect(screen.getByText(/email is required/i)).toBeInTheDocument()
        })

        test('shows error when message is empty on blur', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const messageInput = screen.getByLabelText(/message/i)
            await user.click(messageInput)
            await user.tab()
            
            expect(screen.getByText(/message is required/i)).toBeInTheDocument()
        })

        test('shows error when email is in an invalid format', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const emailInput = screen.getByLabelText(/email/i)
            await user.click(emailInput)
            await user.type(emailInput, 'test.invalid.email')
            await user.tab()
            
            expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
        })

        test('shows error when message is too short', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const messageInput = screen.getByLabelText(/message/i)
            await user.click(messageInput)
            await user.type(messageInput, "I'm so interested")
            await user.tab()
            
            expect(screen.getByText(/message must be at least 20 characters/i)).toBeInTheDocument()
        })

        test('shows error when message is too long', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            const messageInput = screen.getByLabelText(/message/i)
            await user.click(messageInput)
            fireEvent.change(messageInput, { target: { value: 'a'.repeat(301) } })
            fireEvent.blur(messageInput)
            
            expect(screen.getByText(/Message must be under 300 characters/i)).toBeInTheDocument()
        })
    })

    describe('submission', () => {
        beforeEach(() => {
            global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
            })
            )
        })

        afterEach(() => {
            vi.restoreAllMocks()
        })

        test('shows all errors when submitting empty form', async () => {
            const user = userEvent.setup()
            render(<Contact />)
            
            await user.click(screen.getByRole('button', { name: /submit/i }))
            
            expect(screen.getByText(/name is required/i)).toBeInTheDocument()
            expect(screen.getByText(/email is required/i)).toBeInTheDocument()
            expect(screen.getByText(/message is required/i)).toBeInTheDocument()
        })

        test('shows success message after valid submission', async () => {
            const user = userEvent.setup()
            render(<Contact />)

            await user.type(screen.getByLabelText(/name/i), 'Vern Kofford')
            await user.type(screen.getByLabelText(/email/i), 'vern@example.com')
            await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough')
            await user.click(screen.getByRole('button', { name: /submit/i }))

            expect(screen.getByText(/message sent/i)).toBeInTheDocument()
        })
    })
})