import { test, expect } from '@playwright/test'

test.describe('Nav', () => {
    const sections = ['about', 'skills', 'experience', 'projects', 'blog', 'contact']

    test('clicking a nav link navigates to the appropriate section', async ({page}) => {
        await page.goto('/')

        for (const section of sections) {
            await page.getByTestId(`nav-link-${section}`).click()
            await expect(page.getByTestId(`${section}-section`)).toBeInViewport()
        }
    })
})

test.describe('Mobile nav', () => {
    test.use({ viewport: { width: 375, height: 812 } })
    const sections = ['about', 'skills', 'experience', 'projects', 'blog', 'contact']

    test('hamburger menu opens on mobile', async ({page}) => {
        await page.goto('/')

        const hamburgerBtn = page.getByTestId('nav-hamburger-btn')
        await expect(hamburgerBtn).toBeVisible()
        await hamburgerBtn.click()
        await expect(page.getByTestId('mobile-menu')).toBeVisible()
    })

    test('clicking mobile nav link navigages to the appropriate section', async ({page}) => {
        await page.goto('/')

        for (const section of sections) {
            await expect(page.getByTestId('nav-hamburger-btn')).toBeVisible()
            await page.getByTestId('nav-hamburger-btn').click() // open menu
            await expect(page.getByTestId('mobile-menu')).toBeVisible()
            await page.getByTestId(`mobile-nav-link-${section}`).click() // closes menu
            await expect(page.getByTestId(`${section}-section`)).toBeInViewport()
        }
    })
})