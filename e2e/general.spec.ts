import { test, expect } from '@playwright/test'

test.describe('General', () => {
    test('all sections render correctly', async ({page}) => {
        await page.goto('/')

        await expect(page.getByTestId('nav-section')).toBeVisible()
        await expect(page.getByTestId('hero-section')).toBeVisible()
        await expect(page.getByTestId('about-section')).toBeVisible()
        await expect(page.getByTestId('skills-section')).toBeVisible()
        await expect(page.getByTestId('experience-section')).toBeVisible()
        await expect(page.getByTestId('projects-section')).toBeVisible()
        await expect(page.getByTestId('blog-section')).toBeVisible()
        await expect(page.getByTestId('contact-section')).toBeVisible()
    })

    test('title displays correctly', async ({page}) => {
        await page.goto('/')

        await expect(page).toHaveTitle('Vern Kofford | Software Engineer in Test')
    })
})