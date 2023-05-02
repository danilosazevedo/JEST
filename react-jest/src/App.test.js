import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('testes para o component principal', () => {
  test ('Deve renderizar corretamente', () => {
render(<App />)
expect(screen.getByText('Cadastrar')).toBeInTheDocument()
  })

  test ('Deve adicionar a tarefa na lista', () =>{
    render(<App />)
    fireEvent.change(screen.getByTestId('campotarefa'),{
      target: {
        value: 'estudar Js'
      }
  })
  fireEvent.click(screen.getByTestId('btn-cadastrar'))
  expect(screen.getByText('estudar Js')).toBeInTheDocument()
})
})