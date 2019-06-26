---
title: Puppeteer Testing Example
date: "2019-04-21T21:12:03.284Z"
description: Let's try Puppeteer
---

```js
import puppeteer from "puppeteer"
import faker from "faker"

const User = {
  name: faker.name.findName(),
  phone: faker.phone.phoneNumber(),
  notes: faker.random.words(1),
}

const User1 = {
  name: faker.name.findName(),
  phone: faker.phone.phoneNumber(),
  notes: faker.random.words(1),
}

let page
let browser

const isDebugging = () => {
  const debuggingMode = {
    headless: false,
    slowMo: 50,
  }
  return process.env.JEST_ENV === "debug" ? debuggingMode : {}
}

jest.setTimeout(10000)

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging())
  page = await browser.newPage()
  await page.goto(
    `http://localhost:${process.env.JEST_ENV === "debug" ? "3003" : "3000"}/`
  )
  page.setViewport({
    width: 1000,
    height: 1080,
  })
})

afterAll(async () => {
  await page.close()
  await browser.close()
})

describe("Login Page", () => {
  test("Page has content", async assert => {
    const content = await page.content()
    assert.ok(content.length > 0)
  })

  test("Page doesn't have any visual change", async assert => {
    await page.screenshot({
      path: "screenshots/full.png",
      fullPage: true,
    })
  })

  test("Page has password", async () => {
    await page.click('[data-test-id="password"]')
    await page.type('[data-test-id="password"]', "password")
  })
})

describe("Edit User", () => {
  test("The page update user info", async () => {
    await page.click(`[data-test-username="${User.name}"]`)

    await page.click('[data-test-id="userName"]', { clickCount: 3 })
    await page.type('[data-test-id="userName"]', User1.name)

    await page.click('[data-test-id="userPhone"]', { clickCount: 3 })
    await page.type('[data-test-id="userPhone"]', User1.phone)

    await page.click('[data-test-id="signInButton"]')

    let userName
    let res = await page.waitForSelector(`[data-test-username="${User1.name}"]`)
    console.log(res)
    expect(res).toBeDefined()
  })
})

describe("Delete User", () => {
  test("The page lets you to change your mind when deleting the video call", async () => {
    await page.click(`[data-test-username="${User1.name}"]`)
    await page.click('[data-test-id="deleteUser"]')
    await page.click('[data-test-id="no"]')
    const res = await page.waitForSelector(
      `[data-test-username="${User1.name}"]`
    )
    expect(res).toBeDefined()
  })

  test("The page lets you to delete the video call", async () => {
    await page.click(`[data-test-username="${User1.name}"]`)
    await page.click('[data-test-id="deleteUser"]')
    await page.click('[data-test-id="yes"]')
  })
})
```
