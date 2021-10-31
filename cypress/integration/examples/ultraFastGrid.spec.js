describe("AppTest", () => {

    it(`UltraFast Test`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('https://demo.applitools.com');


	cy.eyesOpen({
                 appName: 'Demo App - Cypress',
                 testName: 'Smoke Test - Cypress',
          })


		cy.get ('#log-in', { timeout: 20000 }).should('be.visible').then(()=>{
	        cy.eyesCheckWindow({
                tag: "Login Window",
                target: 'window',
                fully: true
            });
		    })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html


        cy.get('#log-in').click().as('firstNav')
		cy.wait('@firstNav');
        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});