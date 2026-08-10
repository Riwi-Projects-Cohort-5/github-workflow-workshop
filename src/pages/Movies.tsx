import { movies } from '../data/movies'

function Movies() {
  return (
    <section>
      <h1>Películas</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <article className="movie-card" key={movie.id}>
            <h2>{movie.title}</h2>
            <p className="movie-meta">
              {movie.genre} · {movie.year}
            </p>
            <p className="movie-synopsis">{movie.synopsis}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Movies
