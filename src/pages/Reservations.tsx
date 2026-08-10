import { getMovieTitle, reservations } from '../data/reservations'
import { getReservationStatus } from '../utils/reservationStatus'

function Reservations() {
  return (
    <section>
      <h1>Reservas</h1>
      <div className="table-wrap">
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Película</th>
              <th>Fecha</th>
              <th>Butacas</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.customer}</td>
                <td>{getMovieTitle(reservation.movieId)}</td>
                <td>{reservation.date}</td>
                <td>{reservation.seats}</td>
                <td>{getReservationStatus(reservation)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Reservations
