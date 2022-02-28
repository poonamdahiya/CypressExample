module.exports = {
    testConcurrency: 20,
    apiKey: process.env.APPLITOOLS_API_KEY,
    batchId: process.env.APPLITOOLS_BATCH_ID,
    batchName:'ANZ Demo',
    showLogs: true,
    notifyOnCompletion: true,
    batchSequenceName:'Test Batch',
    accessibilityValidation: {level: 'AA', guidelinesVersion: 'WCAG_2_0'},
    browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'chrome-one-version-back'},
        {width: 1366, height: 768, name: 'chrome-two-versions-back'},
//        {width: 3840, height: 2160, name: 'edgechromium'},
//        {width: 1024, height: 768, name: 'edgechromium'},
//
//        {width: 1024, height: 768, name: 'edgelegacy'},
//
//        {width: 1536, height: 960, name: 'safari-earlyaccess'}, //MACBOOK PRO 16 inch
//        {width: 1280, height: 800, name: 'safari-earlyaccess'}, //MacBook 2017 12"   1280 x 800 PX
//        {width: 1280, height: 800, name: 'safari'},// MacBook Air 2018 13"macOS Mojave 1280 x 800 PX
//        {width: 1280, height: 800, name: 'safari'},//MacBook Air 2020 13" macOS Catalina 1280 x 800 PX
//        {width: 1280, height: 800, name: 'safari'},//MacBook Pro 13" 2018 macOS Mojave 1280 x 800 PX
//        {width: 1440, height: 900, name: 'safari'},//MacBook Pro 15" 2018 macOS Mojave 1440 x 900 PX
//        {width: 1921, height: 1080, name: 'safari'},// iMAC 21.5 inch 1921 x 1080
//        {width: 2560, height: 1440, name: 'safari'},// iMAC 27 inch 2560 x 1440
//        {width: 4096, height: 2304, name: 'safari'},// Apple iMac 21.5-inch (Retina 4K Display) 4096 x 2304
//        {width: 5120, height: 2880, name: 'safari'},// Apple iMac 27-inch (Retina 5K Display)  5120	x 2880

        // Surface hub 50  inch - 3840 x 2560
        // Surface hub 85 inch - 3840 x 2160

        // Apple iPad Pro 12.9" (2020) iPadOS 13.4   1024 x 1366 PX
        // Apple iPad Pro 12.9" (2018) iPadOS 13.1.2   1024 x 1366 PX
        // Apple iPad Pro 11" (2020) iPadOS 13.4   834 x 1194 PX
        // Apple iPad Pro 11" (2018) iPadOS 13.1.2   834 x 1194 PX
        // Apple iPad Air 10.5" (2019) iPadOS 13.1.2  834 x 1112 PX
        // Apple iPad 4 Generation   1024 x 768
        // Apple iPad Air 10.9" (2020) iPadOS 14  820 x 1180 PX
        // Apple iPad Air 2iOS 8.1 768 x 1024 PX

        //Apple iPhone XS iOS 12  375 x 812 PX
        //Apple iPhone XR iOS 12  414 x 896 PX
        // Apple iPhone XiOS 11.1.1   375 x 812 PX
        //Apple iPhone 8iOS 11  375 x 667 PX
        //Apple iPhone 7iOS 10.0.1    375 x 667 PX
        //Apple iPhone 6siOS 9   375 x 667 PX
        //Apple iPhone 6s PlusiOS 9 414 x 736 PX
        //Apple iPhone SE iOS 9.3.2    320 x 568 PX

//        {iosDeviceInfo: { deviceName: 'iPhone XR',iosVersion: 'latest' }},
//        {iosDeviceInfo: { deviceName: 'iPhone Xs',iosVersion: 'latest' }},
//        {iosDeviceInfo: { deviceName: 'iPhone X',iosVersion: 'latest' }},
//        {iosDeviceInfo: { deviceName: 'iPhone 8',iosVersion: 'latest' }},
//        {iosDeviceInfo: { deviceName: 'iPhone 7',iosVersion: 'latest' }},
//        {iosDeviceInfo: { deviceName: 'iPhone 12 Pro',iosVersion: 'latest' }},

//        {iosDeviceInfo: { deviceName: 'iPad Pro (12.9-inch) (3rd generation)',iosVersion: 'latest' }},
//        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
//
//        {deviceName: 'Pixel 4', screenOrientation: 'portrait'},
//        {deviceName: 'Galaxy S9', screenOrientation: 'landscape'}
    ],

}

