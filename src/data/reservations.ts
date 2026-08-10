import { movies } from './movies'

export interface Reservation {
  id: number
  movieId: number
  customer: string
  date: string
  seats: number
  cancelled: boolean
}

export const reservations: Reservation[] = [
  { id: 1, movieId: 1, customer: 'Ana Torres', date: '2026-08-15', seats: 2, cancelled: false },
  { id: 2, movieId: 2, customer: 'Luis Pérez', date: '2026-08-12', seats: 4, cancelled: false },
  { id: 3, movieId: 3, customer: 'Marta Gómez', date: '2026-07-28', seats: 1, cancelled: false },
  { id: 4, movieId: 1, customer: 'Carlos Ruiz', date: '2026-08-20', seats: 3, cancelled: true },
  { id: 5, movieId: 4, customer: 'Sofía Díaz', date: '2026-08-10', seats: 2, cancelled: false },
]

export function getMovieTitle(movieId: number): string {
  const movie = movies.find((m) => m.id === movieId)
  return movie ? movie.title : 'Película desconocida'
}
