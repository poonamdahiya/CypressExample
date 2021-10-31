module.exports = {
    testConcurrency: 20,
    apiKey: process.env.APPLITOOLS_API_KEY,
    batchId: process.env.APPLITOOLS_BATCH_ID
    batchName:'ANZDemo',
     showLogs: true,
     notifyOnCompletion: true,
     batchSequenceName:'Test Batch',
     accessibilityValidation: {level: 'AA', guidelinesVersion: 'WCAG_2_0'},
     browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1366, height: 768, name: 'chrome'},
        {iosDeviceInfo: { deviceName: 'iPhone 11',iosVersion: 'latest' }},
        {width: 1024, height: 768, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'}
    ],

}

