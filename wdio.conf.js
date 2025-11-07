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
    'appium:noReset': true,
    'appium:autoGrantPermissions': true
};

//  ANDROID EMULADOR 
const androidEmulator = {
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'C:/Users/guilherme.clemente/android.wdio.native.app.v1.0.8.apk',
};

//  iOS SIMULADOR 
const iosSimulator = {
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14', // ou iPhone 13, 15, etc.
    'appium:platformVersion': '16.4', // ajuste para a versão do Xcode instalada
    'appium:automationName': 'XCUITest',
    // OBS: o arquivo precisa ser `.app` gerado pelo Xcode para simulador
    'appium:app': '/Users/seuUsuario/path/do/WdioDemoApp.app'
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
    framework: 'mocha',
    mochaOpts: { timeout: 180000 },

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    services: []
};
