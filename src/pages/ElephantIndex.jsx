import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'
import './ElephantIndex.css'

import heroImage from '../assets/images/elephant-index-hero.png'
import ctaImage from '../assets/images/elephant-index-cta.png'
import allElephantsIcon from '../assets/icons/elephant-index-all-icon.png'

import wasanaImage from '../assets/images/wasana.png'
import sinhaImage from '../assets/images/sinha-raja.png'
import pulathisiImage from '../assets/images/pulathisi-raja.png'
import gajabaImage from '../assets/images/gajaba.png'
import indiImage from '../assets/images/indi-raja.png'
import kawanthissaImage from '../assets/images/kawanthissa.png'
import vijayaRajaImage from '../assets/images/nadungamuwe-vijaya-raja.png'
import agboImage from '../assets/images/agbo.png'


const elephants = [
  {
    id: 'wasana',
    name: 'Wasana',
    sinhalaName: 'වාසනා',
    type: 'captive',
    status: 'Captive',
    location: 'Kandy',
    description: 'Grace, tradition, and auspicious presence.',
    image: wasanaImage,
    imagePosition: 'center 36%',
  },
  {
    id: 'sinha-raja',
    name: 'Sinha Raja',
    sinhalaName: 'සිංහ රාජා',
    type: 'captive',
    status: 'Captive',
    location: 'Kandy',
    description: 'A striking presence with unforgettable charm.',
    image: sinhaImage,
    imagePosition: 'center 38%',
  },
  {
    id: 'pulathisi-raja',
    name: 'Pulathisi Raja',
    sinhalaName: 'පුලතිසි රාජා',
    type: 'captive',
    status: 'Captive',
    location: 'Sri Lanka',
    description: 'Gentle, endearing, and loved by many.',
    image: pulathisiImage,
    imagePosition: 'center 34%',
  },
  {
    id: 'gajaba',
    name: 'Gajaba',
    sinhalaName: 'ගජබා',
    type: 'captive',
    status: 'Captive',
    location: 'Sri Lanka',
    description: 'A towering presence among captive elephants.',
    image: gajabaImage,
    imagePosition: 'center 34%',
  },
  {
    id: 'indi-raja',
    name: 'Indi Raja',
    sinhalaName: 'ඉන්දි රාජා',
    type: 'captive',
    status: 'Captive',
    location: 'Kandy',
    description: 'A distinguished presence of the Athgala.',
    image: indiImage,
    imagePosition: 'center 35%',
  },
  {
    id: 'nadungamuwe-vijaya-raja',
    name: 'Nadungamuwe Vijaya Raja',
    sinhalaName: 'නැදුන්ගමුව විජය රාජා',
    type: 'captive',
    status: 'In Memory',
    location: 'Sri Lanka',
    description: 'A remarkable legacy that continues to be remembered.',
    image: vijayaRajaImage,
    imagePosition: 'center 34%',
    inMemory: true,
  },
  {
    id: 'kawanthissa',
    name: 'Kawanthissa',
    sinhalaName: 'කාවන්තිස්ස',
    type: 'wild',
    status: 'Wild',
    location: 'Sri Lanka',
    description: 'A commanding presence among Sri Lanka’s wild elephants.',
    image: kawanthissaImage,
    imagePosition: 'center 42%',
  },
  {
    id: 'agbo',
    name: 'Agbo',
    sinhalaName: 'අග්බෝ',
    type: 'wild',
    status: 'Wild',
    location: 'Sri Lanka',
    description: 'A known life from the wild, with a story of his own.',
    image: agboImage,
    imagePosition: 'center 42%',
  },
]


function ElephantIndex() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [savedElephants, setSavedElephants] = useState([])

  const categories = [
    {
      id: 'all',
      label: 'All Elephants',
      count: elephants.length,
      icon: (
        <img
          className="category-elephant-icon"
          src={allElephantsIcon}
          alt=""
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'captive',
      label: 'Captive (Tame)',
      count: elephants.filter((e) => e.type === 'captive').length,
      icon: (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M9 39h30" />
          <path d="M12 35h24" />
          <path d="M15 18h18v17H15z" />
          <path d="M19 18v17M24 18v17M29 18v17" />
          <path d="M11 18h26L24 8 11 18Z" />
        </svg>
      ),
    },
    {
      id: 'wild',
      label: 'Wild (Known)',
      count: elephants.filter((e) => e.type === 'wild').length,
      icon: (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M4 37 17 18l8 11 6-8 13 16H4Z" />
          <path d="m12 30 5-6 4 5M28 29l3-4 4 5" />
        </svg>
      ),
    },
    {
      id: 'memory',
      label: 'In Memory',
      count: elephants.filter((e) => e.inMemory).length,
      icon: (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 40S7 31 7 19.5C7 14.5 10.8 11 15.8 11c3.5 0 6.5 1.9 8.2 4.8C25.7 12.9 28.7 11 32.2 11 37.2 11 41 14.5 41 19.5 41 31 24 40 24 40Z" />
        </svg>
      ),
    },
  ]

  const visibleElephants = useMemo(() => {
    let result = [...elephants]

    if (activeCategory === 'captive') {
      result = result.filter((elephant) => elephant.type === 'captive')
    }

    if (activeCategory === 'wild') {
      result = result.filter((elephant) => elephant.type === 'wild')
    }

    if (activeCategory === 'memory') {
      result = result.filter((elephant) => elephant.inMemory)
    }

    if (locationFilter !== 'all') {
      result = result.filter(
        (elephant) =>
          elephant.location.toLowerCase() === locationFilter.toLowerCase()
      )
    }

    if (statusFilter !== 'all') {
      if (statusFilter === 'memory') {
        result = result.filter((elephant) => elephant.inMemory)
      } else {
        result = result.filter(
          (elephant) => elephant.type === statusFilter
        )
      }
    }

    const search = searchTerm.trim().toLowerCase()

    if (search) {
      result = result.filter(
        (elephant) =>
          elephant.name.toLowerCase().includes(search) ||
          elephant.sinhalaName.includes(search) ||
          elephant.location.toLowerCase().includes(search) ||
          elephant.description.toLowerCase().includes(search)
      )
    }

    if (sortBy === 'az') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortBy === 'za') {
      result.sort((a, b) => b.name.localeCompare(a.name))
    }

    return result
  }, [
    activeCategory,
    searchTerm,
    locationFilter,
    statusFilter,
    sortBy,
  ])

  const toggleSaved = (id) => {
    setSavedElephants((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    )
  }

  return (
    <>
      <Navbar />

      <main className="elephant-index">

        {/* HERO  */}
        <section
          className="elephant-index-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="elephant-index-hero__overlay" />

          <div className="elephant-index-hero__inner">
            <div className="elephant-index-hero__content">

              <div className="elephant-index-hero__eyebrow">
                <span>ELEPHANT INDEX</span>
                <span
                  className="elephant-index-hero__eyebrow-line"
                  aria-hidden="true"
                />
              </div>

              <h1 className="elephant-index-hero__title">
                Meet
                <br />
                The Elephants
              </h1>

              <p className="elephant-index-hero__description">
                Individual lives. Unique stories.
                <br />
                A shared tomorrow.
              </p>

              <a
                className="elephant-index-hero__button"
                href="#elephant-directory"
              >
                <span>Learn About Our Elephants</span>
                <span
                  className="elephant-index-hero__arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

            </div>
          </div>
        </section>


        {/* DIRECTORY */}
        <section
          className="elephant-directory"
          id="elephant-directory"
        >
          <div className="elephant-categories">
            <div className="elephant-categories__inner">

              {categories.map((category, index) => (
                <div
                  className="elephant-category__slot"
                  key={category.id}
                >
                  {index > 0 && (
                    <span
                      className="elephant-category__separator"
                      aria-hidden="true"
                    />
                  )}

                  <button
                    type="button"
                    className={`elephant-category ${activeCategory === category.id
                        ? 'elephant-category--active'
                        : ''
                      }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="elephant-category__icon">
                      {category.icon}
                    </span>

                    <span className="elephant-category__text">
                      <strong>{category.label}</strong>
                      <small>{category.count}</small>
                    </span>
                  </button>
                </div>
              ))}

            </div>
          </div>


          {/* CONTROLS */}
          <div className="elephant-directory__controls">

            <label className="elephant-directory__search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search by name, location or keyword..."
                aria-label="Search elephants"
              />
            </label>

            <select
              className="elephant-directory__select"
              value={locationFilter}
              onChange={(event) =>
                setLocationFilter(event.target.value)
              }
              aria-label="Filter by location"
            >
              <option value="all">All Locations</option>
              <option value="Kandy">Kandy</option>
              <option value="Sri Lanka">Sri Lanka</option>
            </select>

            <select
              className="elephant-directory__select"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              aria-label="Filter by status"
            >
              <option value="all">All Status</option>
              <option value="captive">Captive</option>
              <option value="wild">Wild</option>
              <option value="memory">In Memory</option>
            </select>

            <select
              className="elephant-directory__select"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
              aria-label="Sort elephants"
            >
              <option value="default">Sort By</option>
              <option value="az">Name A–Z</option>
              <option value="za">Name Z–A</option>
            </select>

            <div
              className="elephant-directory__views"
              aria-label="Change elephant view"
            >
              <button
                type="button"
                className={`elephant-directory__view-button ${viewMode === 'grid'
                    ? 'elephant-directory__view-button--active'
                    : ''
                  }`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                title="Grid view"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="6" height="6" />
                  <rect x="14" y="4" width="6" height="6" />
                  <rect x="4" y="14" width="6" height="6" />
                  <rect x="14" y="14" width="6" height="6" />
                </svg>
              </button>

              <button
                type="button"
                className={`elephant-directory__view-button ${viewMode === 'list'
                    ? 'elephant-directory__view-button--active'
                    : ''
                  }`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
                title="List view"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 6h11M9 12h11M9 18h11" />
                  <circle cx="5" cy="6" r="1" />
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="5" cy="18" r="1" />
                </svg>
              </button>
            </div>

          </div>


          {/* CARDS */}
          {visibleElephants.length > 0 ? (
            <>
              <div
                className={`elephant-cards ${viewMode === 'list'
                    ? 'elephant-cards--list'
                    : ''
                  }`}
              >
                {visibleElephants.map((elephant) => {
                  const isSaved =
                    savedElephants.includes(elephant.id)

                  return (
                    <article
                      className="elephant-card"
                      key={elephant.id}
                    >
                      <div className="elephant-card__image-wrap">
                        <img
                          className="elephant-card__image"
                          src={elephant.image}
                          alt={elephant.name}
                          style={{
                            objectPosition: elephant.imagePosition,
                          }}
                        />

                        <button
                          type="button"
                          className={`elephant-card__heart ${isSaved
                              ? 'elephant-card__heart--saved'
                              : ''
                            }`}
                          onClick={() =>
                            toggleSaved(elephant.id)
                          }
                          aria-label={
                            isSaved
                              ? `Remove ${elephant.name} from saved elephants`
                              : `Save ${elephant.name}`
                          }
                          title={
                            isSaved
                              ? 'Remove from saved'
                              : 'Save elephant'
                          }
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
                          </svg>
                        </button>
                      </div>

                      <div className="elephant-card__body">

                        <div className="elephant-card__heading">
                          <h2>{elephant.name}</h2>

                          <p
                            className="elephant-card__sinhala"
                            lang="si"
                          >
                            {elephant.sinhalaName}
                          </p>
                        </div>

                        <span
                          className={`elephant-card__status elephant-card__status--${elephant.inMemory
                              ? 'memory'
                              : elephant.type
                            }`}
                        >
                          {elephant.status}
                        </span>

                        <p className="elephant-card__description">
                          {elephant.description}
                        </p>

                        <Link
                          className="elephant-card__link"
                          to={`/elephants/${elephant.id}`}
                        >
                          <span>View Profile</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>

              <nav
                className="elephant-pagination"
                aria-label="Elephant pages"
              >
                <button
                  type="button"
                  className="elephant-pagination__arrow"
                  aria-label="Previous page"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="elephant-pagination__page elephant-pagination__page--active"
                >
                  1
                </button>

                {[2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    type="button"
                    className="elephant-pagination__page"
                  >
                    {page}
                  </button>
                ))}

                <span className="elephant-pagination__dots">
                  …
                </span>

                <button
                  type="button"
                  className="elephant-pagination__page"
                >
                  12
                </button>

                <button
                  type="button"
                  className="elephant-pagination__arrow"
                  aria-label="Next page"
                >
                  →
                </button>
              </nav>
            </>
          ) : (
            <div className="elephant-directory__empty">
              <p>No elephants match these filters.</p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('all')
                  setLocationFilter('all')
                  setStatusFilter('all')
                  setSortBy('default')
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>


        {/* =========================================================
            EVERY ELEPHANT MATTERS CTA
            ========================================================= */}
        <section className="elephant-index-cta">
          <img
            className="elephant-index-cta__image"
            src={ctaImage}
            alt=""
            aria-hidden="true"
          />

          <div
            className="elephant-index-cta__overlay"
            aria-hidden="true"
          />

          <div className="elephant-index-cta__inner">
            <div className="elephant-index-cta__content">
              <h2 className="elephant-index-cta__title">
                Every Elephant
                <br />
                Matters.
              </h2>

              <p className="elephant-index-cta__description">
                Together, we can protect their tomorrows
                <br />
                and the places they call home.
              </p>

              <a
                className="elephant-index-cta__button"
                href="/#kind-tomorrow"
              >
                <span>Support Their Future</span>
                <span
                  className="elephant-index-cta__arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* =========================================================
          FOOTER — SHARED DARK VARIANT
          ========================================================= */}
      <HomeFooter variant="dark" />
    </>
  )
}

export default ElephantIndex