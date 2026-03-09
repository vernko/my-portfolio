import { render, screen } from '@testing-library/react'
import App from '../../App'
import '@testing-library/jest-dom'

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

test('renders without crashing', () => {
  render(<App />)
})