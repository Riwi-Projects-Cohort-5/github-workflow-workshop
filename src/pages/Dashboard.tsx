import StatCard from '../components/StatCard'
import { movies } from '../data/movies'
import { reservations } from '../data/reservations'
import { getReservationStatus } from '../utils/reservationStatus'

function Dashboard() {
  const totalSeats = reservations.reduce((total, reservation) => total + reservation.seats, 0)
  const cancelled = reservations.filter(
    (reservation) => getReservationStatus(reservation) === 'cancelada',
  ).length

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="stat-grid">
        <StatCard label="Películas" value={movies.length} />
        <StatCard label="Reservas" value={reservations.length} />
        <StatCard label="Butacas reservadas" value={totalSeats} />
        <StatCard label="Reservas canceladas" value={cancelled} />
      </div>
    </section>
  )
}

export default Dashboard
