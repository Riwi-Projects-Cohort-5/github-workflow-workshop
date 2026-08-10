import { NavLink } from 'react-router-dom'

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/movies', label: 'Películas' },
  { to: '/reservations', label: 'Reservas' },
  { to: '/profile', label: 'Perfil' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">CineScope Admin</div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
