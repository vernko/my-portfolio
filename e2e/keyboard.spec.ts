import { test, expect, Page } from '@playwright/test'

async function openMobileMenu(page: Page) {
    await page.goto('/')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await expect(page.getByTestId('mobile-menu')).toBeVisible()
}

test.describe('Keyboard', () => {
    test.skip(({ browserName }) => browserName === 'webkit', 'Safari handles anchor keyboard navigation differently')

    test.describe('Tab Nav', () => {
        test('About', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('about-section')).toBeInViewport()
        })

        test('Skills', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('skills-section')).toBeInViewport()
        })

        test('Experience', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('experience-section')).toBeInViewport()
        })

        test('Projects', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('projects-section')).toBeInViewport()
        })

        test('Blog', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('blog-section')).toBeInViewport()
        })

        test('Contact', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('contact-section')).toBeInViewport()
        })
    })

    test.describe('Hero', () => {
        test('Hero CTA', async ({page}) => {
            await page.goto('/')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'hero-cta-link')

            await page.keyboard.press('Enter')
            await expect(page.getByTestId('projects-section')).toBeInViewport()
        })

        test('Github link opens in new tab', async ({ page }) => {
            await page.goto('/')

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                (async () => {
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Enter')
                })()
            ])
            await expect(newPage).toHaveURL('https://github.com/vernko')
        })

        test('LinkedIn link opens in new tab', async ({ page }) => {
            await page.goto('/')

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                (async () => {
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Tab')
                    await page.keyboard.press('Enter')
                })()
            ])
            await expect(newPage).toHaveURL('https://www.linkedin.com/in/vernkofford/')
        })
    })

    test('Contact', async ({page}) => {
        await page.route('https://formspree.io/**', route => {
            route.fulfill({ status: 200 })
        })

        await page.goto('/#contact')

        await page.getByTestId('contact-name-field').fill('Joe Fake')
        await page.keyboard.press('Tab')
        await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'contact-email-field')

        await page.getByTestId('contact-email-field').fill('joe@fake.com')
        await page.keyboard.press('Tab')
        await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'contact-message-field')

        await page.getByTestId('contact-message-field').fill('I am testing out using tab with keyboard')

        const submitBtn = page.getByTestId('contact-submit-btn')
        await submitBtn.press('Enter')
        await expect(page.getByTestId('contact-success-msg')).toHaveText("Message sent! I'll get back to you soon.")
    })

    test.describe('Mobile Keyboard', () => {
        test.use({ viewport: { width: 375, height: 812 } })
        
        test('hamburger menu opens with keyboard', async ({ page }) => {
            await page.goto('/')
            
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            
            await expect(page.getByTestId('mobile-menu')).toBeVisible()
        })

        test('Tab Nav to About', async ({page}) => {
            await openMobileMenu(page)

            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('about-section')).toBeInViewport()
        })

        test('Tab Nav to Skills', async ({page}) => {
            await openMobileMenu(page)

            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('skills-section')).toBeInViewport()
        })

        test('Tab Nav to Experience', async ({page}) => {
            await openMobileMenu(page)

            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('experience-section')).toBeInViewport()
        })

        test('Tab Nav to Projects', async ({page}) => {
            await openMobileMenu(page)

            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('projects-section')).toBeInViewport()
        })

        test('Tab Nav to Blog', async ({page}) => {
            await openMobileMenu(page)

            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('blog-section')).toBeInViewport()
        })

        test('Tab Nav to Contact', async ({page}) => {
            await openMobileMenu(page)

            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')
            await expect(page.getByTestId('contact-section')).toBeInViewport()
        })
    })
})