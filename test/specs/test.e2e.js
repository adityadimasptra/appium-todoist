import { faker } from '@faker-js/faker';
import ApiRequest from "../../helper/api.js"
import loginPage from "../pageobjects/login.page.js"
import dashboardPage from "../pageobjects/dashboard.page.js";

describe('Todoist', async () => {

  beforeEach(async() => {
    await loginPage.login()
  });
  afterEach(async() => {
    await driver.reloadSession()
  });

  it('Successfully create a new project', async () => {
    const projectName = faker.music.songName()
    // create project request from api
    const response = await ApiRequest.post({
      endpoint: '/projects', 
      data: {
        name: projectName
      }
    })
    const projectId = response.id

    // verify the project created previously
    await dashboardPage.browseMenu.click()
    await dashboardPage.manageProjectMenu.click() 
    expect(await dashboardPage.getProjectSection.isDisplayed()).toHaveText(projectName)

    // the account has limitation of projects, need to delete
    await ApiRequest.delete({endpoint: `/projects/${projectId}`}) 
  })

  it('Successfully create a new task', async() => {
    const taskName = `Holiday ${faker.location.city()}`
    // create a new task
    await dashboardPage.fabAddButton.click()
    await dashboardPage.todoInputText.setValue(taskName)
    await dashboardPage.descriptionInputField.setValue(faker.commerce.productDescription())
    await dashboardPage.InputDate('24 03 2026')
    await dashboardPage.createTaskButton.click()
    await sleep(2000); // it is a guard statement for waiting the task successfully created
    
    // get the tasks request from api and verify the task successfully created
    const response = await ApiRequest.get({endpoint: '/tasks'})
    const tasks = response.sort((a, b) => b.id - a.id);
    expect(tasks[0].content).toEqual(taskName)
  });
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

