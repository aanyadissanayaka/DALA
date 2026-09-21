import { useEffect, useMemo, useState } from 'react'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import visualArchiveHero from '../assets/visual-archive/visual-archive-hero.png'
import featuredStoryImage from '../assets/visual-archive/visual-archive-featured-story.png'
import conservationCtaImage from '../assets/visual-archive/visual-archive-conservation-cta.png'

import gallery01 from '../assets/visual-archive/1.jpg'
import gallery02 from '../assets/visual-archive/2.jpg'
import gallery03 from '../assets/visual-archive/3.jpg'
import gallery04 from '../assets/visual-archive/4.jpg'
import gallery05 from '../assets/visual-archive/5.jpg'
import gallery06 from '../assets/visual-archive/6.jpg'
import gallery07 from '../assets/visual-archive/7.jpg'
import gallery08 from '../assets/visual-archive/8.jpg'
import gallery09 from '../assets/visual-archive/9.jpg'
import gallery10 from '../assets/visual-archive/10.jpg'
import gallery11 from '../assets/visual-archive/11.jpg'
import gallery12 from '../assets/visual-archive/12.jpg'
import gallery13 from '../assets/visual-archive/13.jpg'
import gallery14 from '../assets/visual-archive/14.jpg'
import gallery15 from '../assets/visual-archive/15.jpg'
import gallery16 from '../assets/visual-archive/16.jpg'
import gallery17 from '../assets/visual-archive/17.jpg'
import gallery18 from '../assets/visual-archive/18.jpg'
import gallery19 from '../assets/visual-archive/19.jpg'
import gallery20 from '../assets/visual-archive/20.jpg'
import gallery21 from '../assets/visual-archive/21.jpg'
import gallery22 from '../assets/visual-archive/22.jpg'
import gallery23 from '../assets/visual-archive/23.jpg'
import gallery24 from '../assets/visual-archive/24.jpg'

import './VisualArchive.css'


/* =========================================================
   ARCHIVE FILTERS
   ========================================================= */

const archiveFilters = [
  { id: 'all', label: 'All' },
  { id: 'elephants', label: 'Elephants' },
  { id: 'little-giants', label: 'Little Giants' },
  { id: 'bonds-family', label: 'Bonds & Families' },
  { id: 'wild-places', label: 'Wild Places' },
  { id: 'culture-traditions', label: 'Culture & Traditions' },
]


/* =========================================================
   ARCHIVE IMAGE DATA

   Photographer credits are intentionally left blank where
   the exact photographer has not yet been verified.
   ========================================================= */

const archiveImages = [
  {
    id: 1,
    image: gallery01,
    title: 'A Joyful Moment',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 2,
    image: gallery02,
    title: 'A Living Legacy',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 3,
    image: gallery03,
    title: 'Dressed in Tradition',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 4,
    image: gallery04,
    title: 'Among Giants',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 5,
    image: gallery05,
    title: 'Small Details',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 6,
    image: gallery06,
    title: 'Sacred Paths',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 7,
    image: gallery07,
    title: 'A Sacred Journey',
    label: 'Culture & Traditions',
    categories: ['elephants', 'culture-traditions'],
    credit: '',
  },
  {
    id: 8,
    image: gallery08,
    title: 'Wild Majesty',
    label: 'Wild Places',
    categories: ['elephants', 'wild-places'],
    credit: '',
  },
  {
    id: 9,
    image: gallery09,
    title: 'Together',
    label: 'Bonds & Families',
    categories: ['elephants', 'bonds-family'],
    credit: '',
  },
  {
    id: 10,
    image: gallery10,
    title: 'Gentle Encounters',
    label: 'Bonds & Families',
    categories: ['elephants', 'bonds-family'],
    credit: '',
  },
  {
    id: 11,
    image: gallery11,
    title: 'Shared Waters',
    label: 'Wild Places',
    categories: ['elephants', 'wild-places'],
    credit: '',
  },
  {
    id: 12,
    image: gallery12,
    title: 'Safe Beside You',
    label: 'Bonds & Families',
    categories: ['elephants', 'little-giants', 'bonds-family'],
    credit: '',
  },
  {
    id: 13,
    image: gallery13,
    title: 'Playful Hearts',
    label: 'Little Giants',
    categories: ['elephants', 'little-giants'],
    credit: '',
  },
  {
    id: 14,
    image: gallery14,
    title: 'At the Water’s Edge',
    label: 'Wild Places',
    categories: ['elephants', 'wild-places'],
    credit: '',
  },
  {
    id: 15,
    image: gallery15,
    title: 'A Little Explorer',
    label: 'Little Giants',
    categories: ['elephants', 'little-giants'],
    credit: '',
  },
  {
    id: 16,
    image: gallery16,
    title: 'New Beginnings',
    label: 'Little Giants',
    categories: ['elephants', 'little-giants'],
    credit: '',
  },
  {
    id: 17,
    image: gallery17,
    title: 'Hold On Tight',
    label: 'Bonds & Families',
    categories: ['elephants', 'little-giants', 'bonds-family'],
    credit: '',
  },
  {
    id: 18,
    image: gallery18,
    title: 'Wild Strength',
    label: 'Wild Places',
    categories: ['elephants', 'wild-places'],
    credit: '',
  },
  {
    id: 19,
    image: gallery19,
    title: 'Hello, World',
    label: 'Little Giants',
    categories: ['elephants', 'little-giants'],
    credit: '',
  },
  {
    id: 20,
    image: gallery20,
    title: 'Learning the Way',
    label: 'Little Giants',
    categories: ['elephants', 'little-giants'],
    credit: '',
  },
  {
    id: 21,
    image: gallery21,
    title: 'Unspoken Bonds',
    label: 'Bonds & Families',
    categories: ['elephants', 'bonds-family'],
    credit: '',
  },
  {
    id: 22,
    image: gallery22,
    title: 'Walking Together',
    label: 'Bonds & Families',
    categories: ['elephants', 'bonds-family', 'wild-places'],
    credit: '',
  },
  {
    id: 23,
    image: gallery23,
    title: 'Resting Together',
    label: 'Bonds & Families',
    categories: ['elephants', 'bonds-family'],
    credit: '',
  },
  {
    id: 24,
    image: gallery24,
    title: 'Little Steps',
    label: 'Little Giants',
    categories: ['elephants', 'little-giants'],
    credit: '',
  },
]


/* =========================================================
   EXPLORE BY THEME
   ========================================================= */

const archiveThemes = [
  {
    id: 'little-giants',
    title: 'Little Giants',
    description: 'Curious beginnings, playful moments and little steps.',
    image: gallery19,
  },
  {
    id: 'bonds-family',
    title: 'Bonds & Families',
    description: 'Moments of care, closeness and life lived together.',
    image: gallery12,
  },
  {
    id: 'wild-places',
    title: 'Wild Places',
    description: 'Elephants within the landscapes that shape their lives.',
    image: gallery11,
  },
  {
    id: 'culture-traditions',
    title: 'Culture & Traditions',
    description: 'A visual record of elephants within living traditions.',
    image: gallery03,
  },
]


function VisualArchive() {
  /* =========================================================
     PAGE STATE
     ========================================================= */

  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(12)
  const [selectedImage, setSelectedImage] = useState(null)


  /* =========================================================
     FILTERED GALLERY
     ========================================================= */

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') {
      return archiveImages
    }

    return archiveImages.filter((item) =>
      item.categories.includes(activeFilter)
    )
  }, [activeFilter])

  const visibleImages = filteredImages.slice(0, visibleCount)

  const hasMoreImages = visibleCount < filteredImages.length


  /* =========================================================
     CURRENT LIGHTBOX INDEX
     ========================================================= */

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((item) => item.id === selectedImage.id)
    : -1


  /* =========================================================
     FILTER HANDLER
     ========================================================= */

  const handleFilterChange = (filterId, shouldScroll = false) => {
    setActiveFilter(filterId)
    setVisibleCount(12)
    setSelectedImage(null)

    if (shouldScroll) {
      window.setTimeout(() => {
        document
          .getElementById('visual-archive-gallery')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      }, 50)
    }
  }


  /* =========================================================
     LOAD MORE HANDLER
     ========================================================= */

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + 12, filteredImages.length)
    )
  }


  /* =========================================================
     LIGHTBOX CONTROLS
     ========================================================= */

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const showPreviousImage = () => {
    if (filteredImages.length === 0 || selectedIndex < 0) return

    const previousIndex =
      (selectedIndex - 1 + filteredImages.length) %
      filteredImages.length

    setSelectedImage(filteredImages[previousIndex])
  }

  const showNextImage = () => {
    if (filteredImages.length === 0 || selectedIndex < 0) return

    const nextIndex =
      (selectedIndex + 1) % filteredImages.length

    setSelectedImage(filteredImages[nextIndex])
  }


  /* =========================================================
     LIGHTBOX KEYBOARD + BODY SCROLL
     ========================================================= */

  useEffect(() => {
    if (!selectedImage) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedImage, selectedIndex, filteredImages])


  return (
    <>
      <Navbar />

      <main className="visual-archive-page">

        {/* =====================================================
            VISUAL ARCHIVE HERO
        ====================================================== */}
        <section className="visual-archive-hero">
          <img
            className="visual-archive-hero__image"
            src={visualArchiveHero}
            alt="Elephants beside a peaceful wetland landscape"
          />

          <div
            className="visual-archive-hero__overlay"
            aria-hidden="true"
          />

          <div className="visual-archive-hero__inner">
            <div className="visual-archive-hero__content">

              {/* HERO EYEBROW */}
              <div className="visual-archive-hero__eyebrow">
                <span
                  className="visual-archive-hero__eyebrow-line"
                  aria-hidden="true"
                />
                <span>VISUAL ARCHIVE</span>
              </div>

              {/* HERO TITLE */}
              <h1 className="visual-archive-hero__title">
                Moments
                <br />
                Beyond Words.
              </h1>

              {/* HERO DESCRIPTION */}
              <p className="visual-archive-hero__description">
                Images. Places. People.
                <br />
                A shared tomorrow.
              </p>

              {/* HERO CTA */}
              <a
                className="visual-archive-hero__button"
                href="#visual-archive-gallery"
              >
                <span>Explore the Archive</span>
                <span aria-hidden="true">→</span>
              </a>

            </div>
          </div>
        </section>


        {/* =====================================================
            ARCHIVE FILTER BAR
        ====================================================== */}
        <section
          className="archive-filter"
          aria-label="Filter visual archive"
        >
          <div className="archive-filter__inner">
            {archiveFilters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  className={`archive-filter__button${
                    isActive ? ' archive-filter__button--active' : ''
                  }`}
                  type="button"
                  onClick={() => handleFilterChange(filter.id)}
                  aria-pressed={isActive}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </section>


        {/* =====================================================
            MAIN VISUAL ARCHIVE
        ====================================================== */}
        <section
          className="archive-gallery"
          id="visual-archive-gallery"
        >
          <div className="archive-gallery__inner">

            {/* GALLERY HEADER */}
            <header className="archive-gallery__header">
              <div>
                <span className="archive-gallery__eyebrow">
                  THE ARCHIVE
                </span>

                <h2>A Glimpse Inside DALA</h2>
              </div>

              <p>
                Moments of life, connection and place,
                preserved through images.
              </p>
            </header>


            {/* GALLERY GRID */}
            <div className="archive-gallery__grid">
              {visibleImages.map((item, index) => (
                <button
                  className={`archive-card archive-card--${
                    (index % 6) + 1
                  }`}
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    className="archive-card__image"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span
                    className="archive-card__overlay"
                    aria-hidden="true"
                  />

                  <span className="archive-card__view">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="6" />
                      <path d="m16 16 4 4" />
                      <path d="M8.5 11h5" />
                      <path d="M11 8.5v5" />
                    </svg>

                    View
                  </span>

                  <span className="archive-card__content">
                    <span className="archive-card__category">
                      {item.label}
                    </span>

                    <span className="archive-card__title">
                      {item.title}
                    </span>

                    {item.credit && (
                      <span className="archive-card__credit">
                        Photo © {item.credit}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>


            {/* LOAD MORE */}
            {hasMoreImages && (
              <div className="archive-gallery__load-more">
                <button
                  type="button"
                  onClick={handleLoadMore}
                >
                  <span>Load More Moments</span>
                  <span aria-hidden="true">↓</span>
                </button>
              </div>
            )}

          </div>
        </section>


        {/* =====================================================
            FEATURED STORY
        ====================================================== */}
        <section className="archive-featured">
          <img
            className="archive-featured__image"
            src={featuredStoryImage}
            alt="A herd of elephants moving through a wetland landscape"
          />

          <div
            className="archive-featured__overlay"
            aria-hidden="true"
          />

          <div className="archive-featured__inner">
            <div className="archive-featured__content">
              <span className="archive-section-label">
                FEATURED COLLECTION
              </span>

              <h2>A Day in Their World</h2>

              <p>
                From quiet mornings to shared waters, a glimpse
                into the rhythms that shape an elephant&apos;s day.
              </p>

              <button
                className="archive-featured__button"
                type="button"
                onClick={() =>
                  handleFilterChange('wild-places', true)
                }
              >
                <span>Explore the Collection</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>


        {/* =====================================================
            EXPLORE BY THEME
        ====================================================== */}
        <section className="archive-themes">
          <div className="archive-themes__inner">

            {/* THEME HEADER */}
            <header className="archive-themes__header">
              <span className="archive-section-label">
                EXPLORE
              </span>

              <h2>Explore by Theme</h2>

              <p>
                Follow the moments that speak to you.
              </p>
            </header>


            {/* THEME CARDS */}
            <div className="archive-themes__grid">
              {archiveThemes.map((theme) => (
                <button
                  className="archive-theme-card"
                  type="button"
                  key={theme.id}
                  onClick={() =>
                    handleFilterChange(theme.id, true)
                  }
                >
                  <img
                    src={theme.image}
                    alt=""
                    aria-hidden="true"
                  />

                  <span
                    className="archive-theme-card__overlay"
                    aria-hidden="true"
                  />

                  <span className="archive-theme-card__content">
                    <span className="archive-theme-card__title">
                      {theme.title}
                    </span>

                    <span className="archive-theme-card__description">
                      {theme.description}
                    </span>

                    <span className="archive-theme-card__link">
                      Explore
                      <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>

          </div>
        </section>


        {/* =====================================================
            CONSERVATION CTA
        ====================================================== */}
        <section className="archive-conservation">
          <img
            className="archive-conservation__image"
            src={conservationCtaImage}
            alt="An adult elephant standing protectively beside a calf"
          />

          <div
            className="archive-conservation__overlay"
            aria-hidden="true"
          />

          <div className="archive-conservation__inner">
            <div className="archive-conservation__content">
              <span className="archive-section-label">
                BEYOND THE IMAGE
              </span>

              <h2>
                Their stories
                <br />
                inspire change.
              </h2>

              <p>
                Every moment preserved here is a reminder of
                what still deserves our attention, respect and care.
              </p>

              <a
                className="archive-conservation__button"
                href="/#conservation"
              >
                <span>Discover Conservation</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>


      {/* =======================================================
          IMAGE VIEWER / LIGHTBOX
      ======================================================== */}
      {selectedImage && (
        <div
          className="archive-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${selectedImage.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox()
            }
          }}
        >
          <div className="archive-lightbox__panel">

            {/* CLOSE */}
            <button
              className="archive-lightbox__close"
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              title="Close"
            >
              ×
            </button>


            {/* IMAGE */}
            <div className="archive-lightbox__visual">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

              {/* PREVIOUS */}
              <button
                className="archive-lightbox__nav archive-lightbox__nav--previous"
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous image"
                title="Previous"
              >
                ←
              </button>

              {/* NEXT */}
              <button
                className="archive-lightbox__nav archive-lightbox__nav--next"
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                title="Next"
              >
                →
              </button>
            </div>


            {/* IMAGE INFORMATION */}
            <aside className="archive-lightbox__info">
              <span className="archive-lightbox__category">
                {selectedImage.label}
              </span>

              <h2>{selectedImage.title}</h2>

              <div className="archive-lightbox__divider" />

              <p>
                A moment from the DALA Visual Archive,
                documenting elephants, relationships and the
                landscapes they share.
              </p>

              {selectedImage.credit && (
                <span className="archive-lightbox__credit">
                  Photo © {selectedImage.credit}
                </span>
              )}

              <div className="archive-lightbox__counter">
                <span>
                  {String(selectedIndex + 1).padStart(2, '0')}
                </span>

                <span className="archive-lightbox__counter-line" />

                <span>
                  {String(filteredImages.length).padStart(2, '0')}
                </span>
              </div>
            </aside>

          </div>
        </div>
      )}


      <HomeFooter />
    </>
  )
}

export default VisualArchive