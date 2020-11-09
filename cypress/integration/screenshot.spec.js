const routes = ['/', '/about'];

const sizes = [
  [1920, 1080],
  [990, 800],
  [600, 800],
];

// const scrubbedElements = ['.todo > label > span'];

describe('Component screenshot', () => {
  sizes.forEach((size) => {
    routes.forEach((route) => {
      const testName = `${route} should match previous screenshot when '${size}' resolution`;

      it(testName, () => {
        cy.viewport(size[0], size[1]);
        cy.visit(route);
        //   cy.wait();
        // cy.get('.todo').should('be.visible');
        cy.matchImageSnapshot(`${route} size ${size[0]} x ${size[1]}`);
      });
    });
  });
});

// describe('Component screenshot', () => {
//   routes.forEach((route) => {
//     const testName = `${route} should match previous screenshot`;

//     if (route === '/') {
//       it(testName, () => {
//         cy.visit(route);
//         //   cy.wait();
//         cy.get('.todo').should('be.visible');
//         cy.matchImageSnapshot();
//       });
//     } else {
//       it(testName, () => {
//         cy.visit(route);
//         //   cy.wait();
//         cy.matchImageSnapshot();
//       });
//     }
//   });
// });
