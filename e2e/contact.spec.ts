import { test, expect } from '@playwright/test'

test.describe('Contact', () => {
    test('user is able to submit form successfully', async ({page}) => {
        await page.route('https://formspree.io/**', route => {
            route.fulfill({ status: 200 })
        })

        await page.goto('/#contact')

        await page.getByTestId('contact-name-field').fill('Joe Cool')
        await page.getByTestId('contact-email-field').fill('joe@cool.com')
        await page.getByTestId('contact-message-field').fill('I want to test that submitting the form is successful')
        await page.getByTestId('contact-submit-btn').click()

        await expect(page.getByTestId('contact-success-msg')).toHaveText("Message sent! I'll get back to you soon.")
    })

    test('submitting empty form shows errors', async ({page}) => {
        await page.route('https://formspree.io/**', route => {
            route.fulfill({ status: 200 })
        })
        
        await page.goto('/#contact')

        await page.getByTestId('contact-submit-btn').click()

        await expect(page.getByText(/name is required/i)).toBeVisible()
        await expect(page.getByText(/email is required/i)).toBeVisible()
        await expect(page.getByText(/message is required/i)).toBeVisible()
    })
})