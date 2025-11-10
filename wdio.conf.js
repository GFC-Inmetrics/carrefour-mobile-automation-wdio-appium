const platform = process.env.PLATFORM || 'android';
const deviceType = process.env.DEVICE || 'real';

//  ANDROID DEVICE FÍSICO
const androidRealDevice = {
  platformName: 'Android',
  'appium:deviceName': '192.168.0.89:5555',
  'appium:automationName': 'UiAutomator2',
  'appium:app': 'C:/Users/guilherme.clemente/android.wdio.native.app.v1.0.8.apk',
  'appium:appPackage': 'com.wdiodemoapp',
  'appium:appActivity': 'com.wdiodemoapp.MainActivity',
  'appium:noReset': false,
  'appium:autoGrantPermissions': true
};

//  ANDROID EMULADOR
const androidEmulator = {
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:automationName': 'UiAutomator2',
  'appium:app': 'C:/Users/guilherme.clemente/android.wdio.native.app.v1.0.8.apk',
  'appium:autoGrantPermissions': true,
  'appium:noReset': false
};

//  iOS SIMULADOR
const iosSimulator = {
  platformName: 'iOS',
  'appium:deviceName': 'iPhone 14',
  'appium:platformVersion': '16.4',
  'appium:automationName': 'XCUITest',
  'appium:app': '/Users/seuUsuario/path/WdioDemoApp.app'
};

function selectCapabilities() {
  if (platform === 'android' && deviceType === 'real') return [androidRealDevice];
  if (platform === 'android' && deviceType === 'emulator') return [androidEmulator];
  if (platform === 'ios' && deviceType === 'emulator') return [iosSimulator];
}

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,
  capabilities: selectCapabilities(),

  logLevel: 'info',
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  framework: 'mocha',
  mochaOpts: { timeout: 180000 },

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  //
  // SCREENSHOT EM SUCESSO E FALHA
  //
  afterTest: async function(test, context, { error, result, duration, passed, retries }) {

    if ( !passed) {
    const screenshot = await browser.takeScreenshot();
    const { addAttachment } = require('@wdio/allure-reporter').default;
    addAttachment(`Screenshot - ${test.title}`, Buffer.from(screenshot, 'base64'), 'image/png');
  }
}
};
