describe("AppTestNew", () => {

    it.only(`DemoApp_Diff_Test_Strict`, function () {
           // Navigate to the url we want to test
           // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
           // but then change the above URL to https://demo.applitools.com/index_v2.html
           // (for the 2nd run)
           cy.visit('https://demo.applitools.com/');

           // Call Open on eyes to initialize a test session
           cy.eyesOpen({
               appName: 'Baseline Demo'
           })


           cy.eyesCheckWindow({
               tag: "Login Window",
               target: 'window',
               fully: true
           });

           cy.get('#log-in').click()

           // Check the app page
           cy.eyesCheckWindow({
               tag: "App Window",
               target: 'window',
               fully: true
           });

           // Call Close on eyes to let the server know it should display the results
           cy.eyesClose()
       });

    it(`DemoApp_Diff_Test_Layout`, function () {

            cy.visit('https://demo.applitools.com/app.html');

            // Call Open on eyes to initialize a test session
            cy.eyesOpen({
                appName: 'ANZ Demo'
            })

            // check the login page with fluent api, see more info here
            // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
            cy.eyesCheckWindow({
                tag: "Login Window",
                target: 'window',
                matchLevel: 'Layout',
                fully: true
            });

            // Call Close on eyes to let the server know it should display the results
            cy.eyesClose()
        });

    it(`DemoApp_LayoutRegion_Test_Strict`, function () {

           cy.visit('https://demo.applitools.com/app.html');

           // Call Open on eyes to initialize a test session
           cy.eyesOpen({
               appName: 'ANZ Demo'
           })

           // check the login page with fluent api, see more info here
           // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
           cy.eyesCheckWindow({
               tag: "Login Window",
               target: 'window',
               layout: [{selector: '.element-balances'}],
               fully: true
           });

           // Call Close on eyes to let the server know it should display the results
           cy.eyesClose()
                });

    it(`DemoApp_IgnoreRegion_Test_Strict`, function () {

           cy.visit('https://demo.applitools.com/app.html');

           // Call Open on eyes to initialize a test session
           cy.eyesOpen({
               appName: 'ANZ Demo'
           })

           // check the login page with fluent api, see more info here
           // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
           cy.eyesCheckWindow({
               tag: "Login Window",
               target: 'window',
               ignore: [{selector: '.element-balances'}],
               fully: true
           });

           // Call Close on eyes to let the server know it should display the results
           cy.eyesClose()
                });

    it(`DemoApp_Region_Test_Strict`, function () {

            cy.visit('https://demo.applitools.com/app.html');

            // Call Open on eyes to initialize a test session
            cy.eyesOpen({
                appName: 'ANZ Demo'
            })

            // check the login page with fluent api, see more info here
            // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
            cy.eyesCheckWindow({
                tag: "header",
                target: 'region',
                selector: {
                type: 'css',
                selector:'.top-bar.color-scheme-bright'
                }
            });

            // Call Close on eyes to let the server know it should display the results
            cy.eyesClose()
        });
});