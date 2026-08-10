import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App'

function renderApp(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  it('muestra el sidebar con las secciones principales', () => {
    renderApp('/dashboard')

    expect(screen.getByText('CineScope Admin')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dashboard' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Películas' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Reservas' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Perfil' })).toBeInTheDocument()
  })

  it('muestra la página de películas en /movies', () => {
    renderApp('/movies')

    expect(screen.getByRole('heading', { name: 'Películas' })).toBeInTheDocument()
    expect(screen.getByText('El Jardín Secreto')).toBeInTheDocument()
  })

  it('muestra la página de reservas en /reservations', () => {
    renderApp('/reservations')

    expect(screen.getByRole('heading', { name: 'Reservas' })).toBeInTheDocument()
    expect(screen.getByText('Ana Torres')).toBeInTheDocument()
  })
})
