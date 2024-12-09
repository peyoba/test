import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home页面', () => {
  it('渲染欢迎信息', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Hello World')
  })
}) 