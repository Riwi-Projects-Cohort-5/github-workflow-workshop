import { describe, expect, it } from 'vitest'
import type { Reservation } from '../data/reservations'
import { getReservationStatus } from '../utils/reservationStatus'

const today = new Date('2026-08-10T12:00:00')

function makeReservation(overrides: Partial<Reservation> = {}): Reservation {
  return {
    id: 1,
    movieId: 1,
    customer: 'Persona de prueba',
    date: '2026-08-15',
    seats: 2,
    cancelled: false,
    ...overrides,
  }
}

describe('getReservationStatus', () => {
  it('devuelve confirmada para una sesión futura', () => {
    const reservation = makeReservation({ date: '2026-08-15' })
    expect(getReservationStatus(reservation, today)).toBe('confirmada')
  })

  it('devuelve confirmada para la sesión de hoy', () => {
    const reservation = makeReservation({ date: '2026-08-10' })
    expect(getReservationStatus(reservation, today)).toBe('confirmada')
  })

  it('devuelve cancelada para una reserva cancelada', () => {
    const reservation = makeReservation({ cancelled: true })
    expect(getReservationStatus(reservation, today)).toBe('cancelada')
  })
})
