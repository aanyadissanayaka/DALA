import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import storiesHero from '../assets/stories/stories-hero.png'
import elephantProfilesIcon from '../assets/icons/icon-elephant-profiles.png'
import featuredMahaweli from '../assets/stories/featured-mahaweli.png'
import elephantTexture from '../assets/stories/stories-elephant-textur.png'

import tuskerTemple from '../assets/stories/stories-tusker-temple.png'
import secondChance from '../assets/stories/stories-second-chance.png'
import livesIntertwined from '../assets/stories/stories-lives-intertwined.png'
import wildPaths from '../assets/stories/stories-wild-paths.png'

import quoteElephant from '../assets/stories/stories-quote-elephant.png'
import shareStory from '../assets/stories/stories-share-story.png'
import inspireStory from '../assets/stories/stories-inspire.png'
import bottomCta from '../assets/stories/stories-bottom-cta.png'

import './StoriesPage.css'


/* =========================================================
   STORY CATEGORIES
   ========================================================= */

const storyCategories = [
  {
    id: 'all',
    label: 'All Stories',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    id: 'elephants',
    label: 'Elephants',
    icon: (
      <img
        src={elephantProfilesIcon}
        alt=""
        aria-hidden="true"
      />
    ),
  },
  {
    id: 'people',
    label: 'People & Communities',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M3.5 19c.4-3.7 2.3-5.6 5.5-5.6s5.1 1.9 5.5 5.6" />
        <path d="M14.2 14.3c.7-.6 1.6-.9 2.8-.9 2.4 0 3.8 1.7 4 4.7" />
      </svg>
    ),
  },
  {
    id: 'conservation',
    label: 'Conservation',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5.3c0 4.5 2.7 7.9 7 9.7 4.3-1.8 7-5.2 7-9.7V6l-7-3Z" />
        <path d="M9.2 13.4c2.8-.1 4.7-1.7 5.7-4.5.4 3.2-1.1 5.7-4.5 6.4" />
        <path d="M10.4 15.3c-.1-1.8.6-3.2 2.2-4.4" />
      </svg>
    ),
  },
  {
    id: 'culture',
    label: 'Culture & Traditions',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 19 7v2H5V7l7-3.5Z" />
        <path d="M7 10v7" />
        <path d="M11 10v7" />
        <path d="M15 10v7" />
        <path d="M19 10v7" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
  {
    id: 'places',
    label: 'Places & Landscapes',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 18 5.3-7 3.2 4 2.8-3.5L21 18H3Z" />
        <circle cx="17.5" cy="7" r="2.2" />
      </svg>
    ),
  },
]


/* =========================================================
   LATEST STORIES DATA
   ========================================================= */

const latestStories = [
  {
    id: 1,
    title: 'The Tusker and the Temple',
    date: '2026-08-05',
    displayDate: '05 AUG 2026',
    description:
      'A bond that has lived for centuries in the heart of Kandy.',
    image: tuskerTemple,
    categories: ['elephants', 'culture', 'people'],
    tags: ['CULTURE', 'PEOPLE'],
  },
  {
    id: 2,
    title: 'A Second Chance',
    date: '2026-07-28',
    displayDate: '28 JUL 2026',
    description:
      'The story of a rescued calf and a new beginning.',
    image: secondChance,
    categories: ['elephants', 'conservation'],
    tags: ['CONSERVATION', 'WILDLIFE'],
  },
  {
    id: 3,
    title: 'Lives Intertwined',
    date: '2026-07-18',
    displayDate: '18 JUL 2026',
    description:
      'How one village and a herd learned to live together.',
    image: livesIntertwined,
    categories: ['elephants', 'people'],
    tags: ['PEOPLE', 'COEXISTENCE'],
  },
  {
    id: 4,
    title: 'Wild Paths, Ancient Lands',
    date: '2026-07-10',
    displayDate: '10 JUL 2026',
    description:
      'Exploring the landscapes that shape their journeys.',
    image: wildPaths,
    categories: ['elephants', 'places'],
    tags: ['PLACES', 'ENVIRONMENT'],
  },
]


function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('latest')
  const [savedStories, setSavedStories] = useState([])


  /* =========================================================
     SAVED STORIES
     ========================================================= */

  const toggleSavedStory = (storyId) => {
    setSavedStories((currentSaved) =>
      currentSaved.includes(storyId)
        ? currentSaved.filter((id) => id !== storyId)
        : [...currentSaved, storyId]
    )
  }


  /* =========================================================
     FILTERED + SORTED STORIES
     ========================================================= */

  const visibleStories = latestStories
    .filter(
      (story) =>
        activeCategory === 'all' ||
        story.categories.includes(activeCategory)
    )
    .sort((a, b) =>
      sortOrder === 'latest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    )


  return (
    <>
      <Navbar />

      <main className="stories-page">

        {/* =====================================================
            STORIES HERO
        ====================================================== */}
        <section className="stories-hero">
          <img
            className="stories-hero__image"
            src={storiesHero}
            alt="An elephant overlooking a misty Sri Lankan landscape"
          />

          <div className="stories-hero__overlay" />

          <div className="stories-hero__content">
            <div className="stories-hero__eyebrow">
              <span className="stories-hero__eyebrow-line" />
              <span>STORIES</span>
            </div>

            <h1 className="stories-hero__title">
              More Than
              <br />
              Stories.
            </h1>

            <p className="stories-hero__description">
              Real lives. Real places. Real connections.
              <br />
              Stories that bring us closer to elephants,
              <br />
              people, and the landscapes we share.
            </p>

            <a
              className="stories-hero__button"
              href="#latest-stories"
            >
              <span>Explore Stories</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>


        {/* =====================================================
            STORY CATEGORY FILTER
        ====================================================== */}
        <section
          className="story-filter"
          aria-label="Filter stories by category"
        >
          <div className="story-filter__inner">
            {storyCategories.map((category) => {
              const isActive = activeCategory === category.id

              return (
                <button
                  key={category.id}
                  className={`story-filter__item${isActive ? ' story-filter__item--active' : ''
                    }`}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                >
                  <span className="story-filter__icon">
                    {category.icon}
                  </span>

                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </section>


        {/* =====================================================
            FEATURED STORY
        ====================================================== */}
        <section className="featured-story">
          <div className="featured-story__inner">

            <article className="featured-story__card">

              {/* -------------------------------------------------
                  FEATURED STORY — IMAGE SIDE
              -------------------------------------------------- */}
              <div className="featured-story__visual">
                <img
                  className="featured-story__image"
                  src={featuredMahaweli}
                  alt="A herd of elephants crossing a river through a Sri Lankan landscape at sunset"
                />

                <div className="featured-story__image-overlay" />

                <div className="featured-story__label">
                  <span>FEATURED STORY</span>
                  <span className="featured-story__label-line" />
                </div>

                <div className="featured-story__image-content">
                  <span className="featured-story__date">
                    12 AUG 2026
                  </span>

                  <h2 className="featured-story__title">
                    Guardians of the Mahaweli
                  </h2>

                  <p className="featured-story__summary">
                    A journey through the lives of elephants
                    <br />
                    and the people who live alongside them.
                  </p>
                </div>
              </div>


              {/* -------------------------------------------------
                  FEATURED STORY — CONTENT SIDE
              -------------------------------------------------- */}
              <div className="featured-story__content">
                <img
                  className="featured-story__texture"
                  src={elephantTexture}
                  alt=""
                  aria-hidden="true"
                />

                <div className="featured-story__content-overlay" />

                <div className="featured-story__copy">
                  <div className="featured-story__intro-line" />

                  <span className="featured-story__eyebrow">
                    PEOPLE. PLACES. PURPOSE.
                  </span>

                  <p className="featured-story__description">
                    The Mahaweli is more than a river — it is a home,
                    a highway, and a lifeline. This is a story of
                    elephants, people, and a shared future.
                  </p>

                  <Link
                    className="featured-story__button"
                    to="/stories/guardians-of-the-mahaweli"
                  >
                    <span>Read the Story</span>

                    <span
                      className="featured-story__button-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>

                <blockquote className="featured-story__quote">
                  “The land
                  <br />
                  remembers
                  <br />
                  the footsteps
                  <br />
                  of those who
                  <br />
                  care.”
                </blockquote>
              </div>

            </article>

          </div>
        </section>


        {/* =====================================================
            LATEST STORIES
        ====================================================== */}
        <section
          className="latest-stories"
          id="latest-stories"
        >
          <div className="latest-stories__inner">

            {/* -------------------------------------------------
                LATEST STORIES — HEADER
            -------------------------------------------------- */}
            <div className="latest-stories__header">
              <div>
                <span className="latest-stories__eyebrow">
                  STORIES FROM THE FIELD
                </span>

                <h2 className="latest-stories__heading">
                  Latest Stories
                </h2>
              </div>

              <div className="latest-stories__sort">
                <label htmlFor="stories-sort">
                  Sort By
                </label>

                <select
                  id="stories-sort"
                  value={sortOrder}
                  onChange={(event) =>
                    setSortOrder(event.target.value)
                  }
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>


            {/* -------------------------------------------------
                LATEST STORIES — GRID
            -------------------------------------------------- */}
            <div className="latest-stories__grid">
              {visibleStories.map((story) => {
                const isSaved = savedStories.includes(story.id)

                return (
                  <article
                    className="story-card"
                    key={story.id}
                  >
                    <div className="story-card__visual">
                      <img
                        className="story-card__image"
                        src={story.image}
                        alt=""
                      />

                      <div className="story-card__image-shade" />

                      <button
                        className={`story-card__heart${isSaved
                            ? ' story-card__heart--saved'
                            : ''
                          }`}
                        type="button"
                        onClick={() =>
                          toggleSavedStory(story.id)
                        }
                        aria-label={
                          isSaved
                            ? `Remove ${story.title} from saved stories`
                            : `Save ${story.title}`
                        }
                        aria-pressed={isSaved}
                        title={
                          isSaved
                            ? 'Remove from saved stories'
                            : 'Save story'
                        }
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
                        </svg>
                      </button>
                    </div>

                    <div className="story-card__body">
                      <span className="story-card__date">
                        {story.displayDate}
                      </span>

                      <h3 className="story-card__title">
                        {story.title}
                      </h3>

                      <p className="story-card__description">
                        {story.description}
                      </p>

                      <div className="story-card__tags">
                        {story.tags.map((tag) => (
                          <span
                            className="story-card__tag"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="story-card__footer">
                        <button
                          className="story-card__read"
                          type="button"
                        >
                          <span>Read More</span>

                          <span
                            className="story-card__arrow"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </button>

                        <button
                          className={`story-card__footer-heart${isSaved
                              ? ' story-card__footer-heart--saved'
                              : ''
                            }`}
                          type="button"
                          onClick={() =>
                            toggleSavedStory(story.id)
                          }
                          aria-label={
                            isSaved
                              ? `Remove ${story.title} from saved stories`
                              : `Save ${story.title}`
                          }
                          aria-pressed={isSaved}
                          title={
                            isSaved
                              ? 'Remove from saved stories'
                              : 'Save story'
                          }
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>


            {/* -------------------------------------------------
                EMPTY FILTER STATE
            -------------------------------------------------- */}
            {visibleStories.length === 0 && (
              <div className="latest-stories__empty">
                <p>
                  More stories from this collection are coming soon.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                >
                  View All Stories
                </button>
              </div>
            )}

          </div>
        </section>


        {/* =====================================================
            STORY INVITATION
        ====================================================== */}
        <section className="story-invitation">
          <div className="story-invitation__inner">

            {/* -------------------------------------------------
                QUOTE CARD
            -------------------------------------------------- */}
            <article className="story-invitation__card story-invitation__card--quote">
              <img
                className="story-invitation__image story-invitation__image--quote"
                src={quoteElephant}
                alt="Close portrait of an elephant"
              />

              <div className="story-invitation__overlay story-invitation__overlay--quote" />

              <div className="story-invitation__quote-content">
                <span className="story-invitation__quote-mark" aria-hidden="true">
                  “
                </span>

                <blockquote className="story-invitation__quote">
                  Stories have the power
                  <br />
                  to change how we see
                  <br />
                  the world.
                </blockquote>

                <span className="story-invitation__quote-line" />
              </div>
            </article>


            {/* -------------------------------------------------
                SHARE YOUR STORY CARD
            -------------------------------------------------- */}
            <article className="story-invitation__card story-invitation__card--share">
              <img
                className="story-invitation__image story-invitation__image--share"
                src={shareStory}
                alt="A photographer sharing a quiet moment with an elephant"
              />

              <div className="story-invitation__overlay story-invitation__overlay--card" />

              <div className="story-invitation__card-content">
                <span className="story-invitation__eyebrow">
                  YOUR VOICE MATTERS
                </span>

                <h2 className="story-invitation__title">
                  Share Your Story
                </h2>

                <p className="story-invitation__description">
                  Have a story, photo, or encounter to share?
                  Help preserve the connections between elephants,
                  people, and place.
                </p>

                <button
                  className="story-invitation__button"
                  type="button"
                >
                  <span>Contribute</span>
                  <span className="story-invitation__arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </article>


            {/* -------------------------------------------------
                STORIES THAT INSPIRE CARD
            -------------------------------------------------- */}
            <article className="story-invitation__card story-invitation__card--inspire">
              <img
                className="story-invitation__image story-invitation__image--inspire"
                src={inspireStory}
                alt="A person beside an elephant at golden hour"
              />

              <div className="story-invitation__overlay story-invitation__overlay--card" />

              <div className="story-invitation__card-content">
                <span className="story-invitation__eyebrow">
                  KEEP EXPLORING
                </span>

                <h2 className="story-invitation__title">
                  Stories That Inspire
                </h2>

                <p className="story-invitation__description">
                  Moments of hope, kindness, and coexistence
                  from across the landscapes we share.
                </p>

                <button
                  className="story-invitation__button"
                  type="button"
                >
                  <span>Read More</span>
                  <span className="story-invitation__arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </article>

          </div>
        </section>


        {/* =====================================================
            KINDER TOMORROW CTA
        ====================================================== */}
        <section className="stories-bottom-cta">
          <img
            className="stories-bottom-cta__image"
            src={bottomCta}
            alt="Elephants moving through a Sri Lankan landscape at golden hour"
          />

          <div className="stories-bottom-cta__overlay" />

          <div className="stories-bottom-cta__inner">
            <div className="stories-bottom-cta__content">
              <span className="stories-bottom-cta__eyebrow">
                EVERY STORY CAN MAKE A DIFFERENCE
              </span>

              <h2 className="stories-bottom-cta__title">
                A Kinder Tomorrow
                <br />
                Through Real Stories.
              </h2>

              <p className="stories-bottom-cta__description">
                Together, we can listen, learn and create
                <br />
                a more compassionate world for elephants and people.
              </p>

              <a
                className="stories-bottom-cta__button"
                href="#latest-stories"
              >
                <span>Be Part of the Story</span>
                <span className="stories-bottom-cta__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <HomeFooter />
    </>
  )
}

export default StoriesPage