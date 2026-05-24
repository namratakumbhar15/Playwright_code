/*  Locator : is used to identify & interact with specific web element on webpage

types 1) inbuilt 
a) page.getByRole ("Button", {name = "submit"}) OR ("textbox", {name: "username"})
b) page.getbyText("login")
c) page.getByPlaceholder("password")



2)Xpath
a) absolute b) Relative

Relative X path
1) X path by attribute  //Tagname[@attribute='value']
2) X path By text  //Tagname[text()='value']
3) contains by Attribute   //Tagname[contains(@attribute, 'value')]
4) contains by text ()  //Tagname[contains(text(),'value')]
5) By index //tagname[@attribute='value'][1]
6) Start with  //Tagname[startWith(text(), 'value')]  or //tagname[startWith(@attribute, 'value')]

3)CSS Selector
1) #IDValue
2) Tagname#idvalue
3) [atttribute='attributevalue']
4) Tagname[attribute='attributevalue']
5) .classvalue
*/



import { test, expect } from '@playwright/test';

test("test1", async ({ page }) => {

    await page.goto("https://playwright.dev/")
    await page.getByRole("link", { name: "Get started" }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://playwright.dev/docs/intro")
    await page.waitForTimeout(3000);



})