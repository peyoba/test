describe('基础功能测试', () => {
  it('访问首页', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Hello World')
  })
}) 