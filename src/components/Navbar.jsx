import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.css'
import dalaLogo from '../assets/brand/dala-logo-horizontal.png'

function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return location.pathname.startsWith(path)
  }

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__inner">

        {/* =====================================================
            BRAND
            ===================================================== */}
        <Link
          className="navbar__brand"
          to="/"
          aria-label="DALA home"
        >
          <img
            className="navbar__logo"
            src={dalaLogo}
            alt="DALA"
          />

          <span className="navbar__tagline">
            ELEPHANTS. PEOPLE. A SHARED TOMORROW.
          </span>
        </Link>

        {/* =====================================================
            MAIN NAVIGATION
            ===================================================== */}
        <nav
          className="navbar__nav"
          aria-label="Main navigation"
        >
          <Link
            className={isActive('/') ? 'navbar__link--active' : ''}
            to="/"
          >
            Home
          </Link>

          <Link
            className={
              isActive('/elephants') ? 'navbar__link--active' : ''
            }
            to="/elephants"
          >
            Elephants
          </Link>

          <Link
            className={
              isActive('/stories') ? 'navbar__link--active' : ''
            }
            to="/stories"
          >
            Stories
          </Link>

          <Link
            className={
              isActive('/visual-archive')
                ? 'navbar__link--active'
                : ''
            }
            to="/visual-archive"
          >
            Visual Archive
          </Link>

          <Link
            className={
              isActive('/unspoken') ? 'navbar__link--active' : ''
            }
            to="/unspoken"
          >
            UNSPOKEN
          </Link>

          <Link
            className={
              isActive('/discover') ? 'navbar__link--active' : ''
            }
            to="/discover"
          >
            Discover
          </Link>
        </nav>

        {/* =====================================================
            ACTIONS
            ===================================================== */}
        <div className="navbar__actions">

          <button
            className="navbar__icon-button"
            type="button"
            aria-label="Search"
            title="Search"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </button>

          <button
            className="navbar__icon-button"
            type="button"
            aria-label="Saved stories"
            title="Saved stories"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
            </svg>
          </button>

          <Link
            className="navbar__cta"
            to="/#kind-tomorrow"
          >
            <span>A kinder tomorrow</span>

            <span
              className="navbar__cta-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Navbar