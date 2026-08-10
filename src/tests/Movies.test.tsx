import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Movies from '../pages/Movies'

describe('Movies', () => {
  it('muestra todas las películas del catálogo', () => {
    render(<Movies />)

    expect(screen.getByText('El Jardín Secreto')).toBeInTheDocument()
    expect(screen.getByText('Nébula')).toBeInTheDocument()
    expect(screen.getByText('Café y Lluvia')).toBeInTheDocument()
    expect(screen.getByText('El Último Faro')).toBeInTheDocument()
    expect(screen.getByText('Ruta Norte')).toBeInTheDocument()
  })

  it('muestra el género y el año de cada película', () => {
    render(<Movies />)

    expect(screen.getByText('Ciencia ficción · 2024')).toBeInTheDocument()
    expect(screen.getByText('Comedia · 2022')).toBeInTheDocument()
    expect(screen.getByText('Terror · 2024')).toBeInTheDocument()
  })
})
