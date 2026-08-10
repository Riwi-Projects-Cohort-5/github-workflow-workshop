import type { Reservation } from '../data/reservations'

export type ReservationStatus = 'pendiente' | 'confirmada' | 'cancelada'

export function getReservationStatus(
  reservation: Reservation,
  today: Date = new Date(),
): ReservationStatus {
  const sessionDate = new Date(`${reservation.date}T00:00:00`)
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  if (reservation.cancelled) {
    return 'cancelada'
  }

  if (sessionDate < startOfToday) {
    return 'pendiente'
  }

  return 'confirmada'
}
