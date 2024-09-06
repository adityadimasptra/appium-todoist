# Mobile Automation using WebdriverIO and Appium

This project is set up for mobile application testing using [WebdriverIO](https://webdriver.io/) and [Appium](https://appium.io/). It supports both Android and iOS platforms for native and hybrid mobile apps.

## Prerequisites

### General Requirements
- Node.js (>= 16.x)
- Java Development Kit (JDK >= 8)
- Android Studio (for Android testing)
- Appium (install globally using `npm`)

### Android Specific Requirements
- Android SDK
- AVD Manager (to create and run Android emulators)

## Setup

1. Clone the repository:

```bash
  git clone https://github.com/your-username/your-repo-name.git
  cd appium-todoist
```

2. Install dependencies:
```bash
  npm install
```
3. Install Appium globally:
```bash
  npm install -g appium
```
4. Please create a `.env` file in the root folder project, and please make it secret my credential and token. but its okay i made it with dummy account :D
```json
TODOIST_TOKEN=7500ef67f2e14586674b977213c19bdd2b23e3d2
BASE_URL=https://api.todoist.com/rest/v2
EMAIL=penguinads02@gmail.com
PASSWORD=adsTodoist
```

## Running Test
1. Create Vritual Device from android studio
2. Set capabilities on `wdio.conf.js`, please adjust the `appium:platformVersion` and `appium:deviceName` relate with number 1
```javascript
  capabilities: [{
    // capabilities for local Appium web tests on an Android Emulator
    'platformName': 'Android',
    'appium:platformVersion': 'version_name',
    'appium:deviceName': 'device_name',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(),'app/android/todoist.apk'),
    'appium:appPackage': 'com.todoist',
    'appium:appActivity': 'com.todoist.alias.HomeActivityDefault'
  }]
```

3. To run the tests, use the following commands:
```bash 
  npm run wdio
```