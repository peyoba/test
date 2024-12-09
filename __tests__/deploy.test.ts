describe('部署测试', () => {
  it('确保环境变量正确加载', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })

  it('确保可以进行构建', async () => {
    const { execSync } = require('child_process')
    expect(() => {
      execSync('npm run build')
    }).not.toThrow()
  })
}) 