describe('Check All Wallet Pages Work', () => {
  before(() => {
    // Attach up wallet
    cy.setupMetamask(Cypress.env('privateKey'), Cypress.env('network'));

    // Logout and login as an artist
    cy.disconnectMetamaskWalletFromAllDapps();

    // Visit wallet connect page
    cy.visit('/auth/login');

    // Wait until the page is loaded
    cy.contains('Connect your Wallet', { timeout: 20000 });
    cy.contains('MetaMask').click();

    // Signature request set as true
    cy.acceptMetamaskAccess({ confirmSignatureRequest: true });
  });

  /**
   *
   * Setup your test flow
   *
   */
});
