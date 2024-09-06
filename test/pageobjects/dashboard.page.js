import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage {
    /**
     * define selectors using getter methods
     */
    get fabAddButton () {
        return $('id:com.todoist:id/fab');
    }
    get todoInputText () {
        return $('id:android:id/message');
    }
    get descriptionInputField () {
        return $('xpath://android.widget.EditText[@resource-id="com.todoist:id/description"]');
    }
    get scheduleButtonField () {
        return $('id:com.todoist:id/schedule');
    }
    get scheduleInputField () {
        return $('id:com.todoist:id/scheduler_input');
    }
    get submitScheduleButtonField () {
        return $('id:com.todoist:id/scheduler_input_submit');
    }
    async InputDate(date) {
        await this.scheduleButtonField.click()
        await this.scheduleInputField.click()
        await this.scheduleInputField.setValue(date)
        await this.submitScheduleButtonField.click()
    }
    get createTaskButton () {
        return $('xpath://android.widget.ImageView[@content-desc="Add"]')
    }
    get getProjectSection() {
        return $('xpath://androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]')
    }
    get manageProjectMenu() {
        return $('xpath://android.widget.TextView[@text="Manage projects"]')
    }
    get browseMenu() {
        return $('xpath://android.widget.TextView[@text="Browse"]')
    }
}

export default new DashboardPage();
