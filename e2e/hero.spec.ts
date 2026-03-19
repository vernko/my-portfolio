import { test, expect } from '@playwright/test'

test.describe('Hero', () => {
    test('clicking view my work goes to project section', async ({page}) => {
        await page.goto('/')

        await page.getByTestId('hero-cta-link').click()
        await expect(page.getByTestId('projects-section')).toBeInViewport()
    })

    test('clicking github icon, opens github in new tab', async ({page}) => {
        await page.goto('/')

        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('link', { name: /github/i }).click()
        ])
        await expect(newPage).toHaveURL('https://github.com/vernko')
    })

        test('clicking linkedin icon, opens linkedin in new tab', async ({page}) => {
        await page.goto('/')

        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('link', { name: /linkedin/i }).click()
        ])
        await expect(newPage).toHaveURL('https://www.linkedin.com/in/vernkofford/')
    })
})