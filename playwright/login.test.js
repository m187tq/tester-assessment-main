const { expect, test } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
})

test('should render submit button', async ({ page }) => {
  const buttonText = await page.innerText('form>button>span')
  expect(buttonText).toBe('SUBMIT')
})
