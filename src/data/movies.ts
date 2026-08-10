export interface Movie {
  id: number
  title: string
  genre: string
  year: number
  durationMinutes: number
  synopsis: string
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'El Jardín Secreto',
    genre: 'Drama',
    year: 2023,
    durationMinutes: 118,
    synopsis: 'Una joven hereda una casa y descubre un jardín abandonado lleno de misterios.',
  },
  {
    id: 2,
    title: 'Nébula',
    genre: 'Ciencia ficción',
    year: 2024,
    durationMinutes: 132,
    synopsis: 'Una tripulación atraviesa una nube interestelar y pierde contacto con la Tierra.',
  },
  {
    id: 3,
    title: 'Café y Lluvia',
    genre: 'Comedia',
    year: 2022,
    durationMinutes: 96,
    synopsis: 'Dos desconocidos comparten una mesa en un café y terminan cambiando sus vidas.',
  },
  {
    id: 4,
    title: 'El Último Faro',
    genre: 'Terror',
    year: 2024,
    durationMinutes: 104,
    synopsis: 'Un farero solitario recibe señales que no provienen del mar.',
  },
  {
    id: 5,
    title: 'Ruta Norte',
    genre: 'Aventura',
    year: 2023,
    durationMinutes: 125,
    synopsis: 'Un viaje por carretera se convierte en una búsqueda de un tesoro familiar.',
  },
]
