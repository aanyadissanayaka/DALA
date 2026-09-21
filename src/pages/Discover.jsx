import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import './Discover.css'

/* =========================================================
   DISCOVER ASSETS
   ========================================================= */

import heroImage from '../assets/discover/discover-hero.png'

import elephantProfilesIcon from '../assets/icons/icon-elephant-profiles.png'

import familyBondsImage from '../assets/discover/discover-intelligence-family-bonds.png'
import complexMindsImage from '../assets/discover/discover-intelligence-complex-minds.png'
import lifelongLearningImage from '../assets/discover/discover-intelligence-lifelong-learning.png'
import vitalRoleImage from '../assets/discover/discover-intelligence-vital-role.png'

import habitatsMainImage from '../assets/discover/discover-habitats-main.png'
import forestImage from '../assets/discover/discover-habitat-forests.png'
import grasslandsImage from '../assets/discover/discover-habitat-grasslands.png'
import wetlandsImage from '../assets/discover/discover-habitat-wetlands.png'
import seasonalImage from '../assets/discover/discover-habitat-seasonal.png'

import communicationImage from '../assets/discover/discover-communication.png'
import elephantRumble from '../assets/discover/discover-elephant-rumble.wav'

import foodFeedingImage from '../assets/discover/articles/food-feeding/food-feeding-trunk.png'
import cultureHistoryImage from '../assets/discover/discover-culture-history.png'
import conservationImage from '../assets/discover/discover-conservation.png'

import closingBannerImage from '../assets/discover/discover-closing-banner.png'


/* =========================================================
   SHARED ARROW
   ========================================================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m14 8 4 4-4 4" />
    </svg>
  )
}


/* =========================================================
   TOPIC ICONS
   ========================================================= */

function HabitatIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="m5 36 13-19 8 11 5-7 12 15H5Z" />
      <path d="m15 21 3 3 3-3M28 25l3 3 3-3" />
      <circle cx="36" cy="12" r="3" />
    </svg>
  )
}

function CommunicationIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M5 24h4M39 24h4" />
      <path d="M11 18v12M15 13v22M19 19v10M23 8v32M27 15v18M31 11v26M35 19v10" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="17" cy="15" r="5" />
      <circle cx="32" cy="16" r="4.5" />
      <path d="M7 37v-5c0-6 4-10 10-10s10 4 10 10v5M27 25c2-2 4-3 6-3 5 0 8 4 8 9v6" />
    </svg>
  )
}

function CultureIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M7 17 24 8l17 9H7ZM10 19h28M12 20v15M19 20v15M29 20v15M36 20v15M8 37h32M5 41h38" />
    </svg>
  )
}

function ConservationIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {/* Protective shield */}
      <path d="M24 5L39 11V22C39 31.5 33 39 24 43C15 39 9 31.5 9 22V11L24 5Z" />

      {/* Elephant */}
      <path d="M17 27V21C17 17.7 19.7 15 23 15H27C30.3 15 33 17.7 33 21V27" />
      <path d="M17 22H14C14 18.8 15.5 17 18 17" />
      <path d="M33 21V29C33 32 31.5 34 29 34C27.5 34 27 33 27 31" />
      <path d="M21 27V32M29 27V32" />
      <circle cx="28.5" cy="20" r="1" />
    </svg>
  )
}

/* =========================================================
   DISCOVER PAGE
   ========================================================= */

function Discover() {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)


  /* =======================================================
     PAGE START
     ======================================================= */

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }


  /* =======================================================
     AUDIO
     ======================================================= */

  const toggleAudio = async () => {
    const audio = audioRef.current

    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
      } catch (error) {
        console.error('Unable to play audio:', error)
      }
    } else {
      audio.pause()
    }
  }

  const handleMetadata = () => {
    if (!audioRef.current) return
    setDuration(audioRef.current.duration || 0)
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    setCurrentTime(audioRef.current.currentTime || 0)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const formatTime = (value) => {
    if (!Number.isFinite(value)) return '0:00'

    const minutes = Math.floor(value / 60)
    const seconds = Math.floor(value % 60)
      .toString()
      .padStart(2, '0')

    return `${minutes}:${seconds}`
  }

  const audioProgress =
    duration > 0
      ? Math.min((currentTime / duration) * 100, 100)
      : 0


  return (
    <div className="discover-page">

      {/* ===================================================
          EXISTING NAVBAR
      ==================================================== */}

      <Navbar />


      <main>

        {/* =================================================
            HERO
        ================================================== */}

        <section
          className="discover-hero"
          id="discover"
          style={{
            '--discover-hero-image': `url(${heroImage})`,
          }}
        >
          <div className="discover-hero__overlay" />

          <div className="discover-shell discover-hero__inner">

            <div className="discover-hero__content">

              <div className="discover-eyebrow discover-eyebrow--light">
                <span />
                DISCOVER
              </div>

              <h1>
                Know More.
                <br />
                Care Deeper.
              </h1>

              <p>
                Explore the world of elephants — their behaviour,
                habitats, communication, conservation and the deep
                connection they share with our island.
              </p>

              <button
                className="discover-button discover-button--light"
                type="button"
                onClick={() =>
                  scrollToSection('extraordinary-elephant')
                }
              >
                <span>Start Exploring</span>
                <ArrowIcon />
              </button>

            </div>

          </div>
        </section>


        {/* =================================================
            TOPIC BAR
        ================================================== */}

        <section
          className="discover-topic-bar"
          aria-label="Discover topics"
        >
          <div className="discover-shell discover-topic-bar__inner">

            <button
              className="discover-topic"
              type="button"
              onClick={() =>
                scrollToSection('extraordinary-elephant')
              }
            >
              <span className="discover-topic__icon">
                <img
                  src={elephantProfilesIcon}
                  alt=""
                  aria-hidden="true"
                />
              </span>

              <span className="discover-topic__text">
                <strong>Behaviour</strong>
                <small>How elephants think and live</small>
              </span>
            </button>


            <button
              className="discover-topic"
              type="button"
              onClick={() => scrollToSection('habitats')}
            >
              <span className="discover-topic__icon">
                <HabitatIcon />
              </span>

              <span className="discover-topic__text">
                <strong>Habitats</strong>
                <small>Where they belong</small>
              </span>
            </button>


            <button
              className="discover-topic"
              type="button"
              onClick={() => scrollToSection('communication')}
            >
              <span className="discover-topic__icon">
                <CommunicationIcon />
              </span>

              <span className="discover-topic__text">
                <strong>Communication</strong>
                <small>The sounds and signals</small>
              </span>
            </button>


            <button
              className="discover-topic"
              type="button"
              onClick={() => scrollToSection('extraordinary-elephant')}
            >
              <span className="discover-topic__icon">
                <PeopleIcon />
              </span>

              <span className="discover-topic__text">
                <strong>Social Bonds</strong>
                <small>How elephants connect</small>
              </span>
            </button>


            <button
              className="discover-topic"
              type="button"
              onClick={() =>
                scrollToSection('culture-history')
              }
            >
              <span className="discover-topic__icon">
                <CultureIcon />
              </span>

              <span className="discover-topic__text">
                <strong>Culture &amp; History</strong>
                <small>A shared heritage</small>
              </span>
            </button>


            <button
              className="discover-topic"
              type="button"
              onClick={() =>
                scrollToSection('conservation')
              }
            >
              <span className="discover-topic__icon">
                <ConservationIcon />
              </span>

              <span className="discover-topic__text">
                <strong>Conservation</strong>
                <small>A brighter tomorrow</small>
              </span>
            </button>

          </div>
        </section>


        {/* =================================================
            EXTRAORDINARY ELEPHANT
        ================================================== */}

        <section
          className="discover-extraordinary"
          id="extraordinary-elephant"
        >
          <div className="discover-shell discover-extraordinary__layout">

            <div className="discover-section-copy">

              <div className="discover-eyebrow">
                <span />
                THE EXTRAORDINARY ELEPHANT
              </div>

              <h2>
                Intelligent.
                <br />
                Social. Remarkable.
              </h2>

              <p>
                Elephants are more than the largest land mammals —
                they are intelligent, emotional, and deeply social
                beings. They remember, they grieve, they communicate,
                and they care for one another.
              </p>

              <Link
                className="discover-button discover-button--dark"
                to="/discover/extraordinary-elephant"
              >
                <span>Learn About Their World</span>
                <ArrowIcon />
              </Link>

            </div>


            <div className="discover-intelligence-grid">

              <article className="discover-intelligence-card">
                <div className="discover-intelligence-card__image">
                  <img
                    src={familyBondsImage}
                    alt="Elephants sharing a close family bond"
                  />
                </div>

                <h3>Strong Family Bonds</h3>
                <p>A lifetime of connection</p>
              </article>


              <article className="discover-intelligence-card">
                <div className="discover-intelligence-card__image">
                  <img
                    src={complexMindsImage}
                    alt="Elephants displaying awareness and intelligence"
                  />
                </div>

                <h3>Complex Minds</h3>
                <p>Remarkable memory and emotion</p>
              </article>


              <article className="discover-intelligence-card">
                <div className="discover-intelligence-card__image">
                  <img
                    src={lifelongLearningImage}
                    alt="Adult elephant and calf together"
                  />
                </div>

                <h3>Lifelong Learning</h3>
                <p>Knowledge passed across generations</p>
              </article>


              <article className="discover-intelligence-card">
                <div className="discover-intelligence-card__image">
                  <img
                    src={vitalRoleImage}
                    alt="Adult elephant caring for a young calf"
                  />
                </div>

                <h3>Protective Care</h3>
                <p>Care that begins within the herd</p>
              </article>

            </div>
          </div>
        </section>


        {/* =================================================
            HABITATS
        ================================================== */}

        <section
          className="discover-habitats"
          id="habitats"
        >
          <div className="discover-habitats__layout">

            <div className="discover-habitats__main-image">
              <img
                src={habitatsMainImage}
                alt="Elephants moving through a Sri Lankan landscape"
              />
            </div>


            <div className="discover-habitats__content">

              <div className="discover-eyebrow discover-eyebrow--light">
                <span />
                IN HARMONY WITH NATURE
              </div>

              <h2>Habitats That Sustain Life</h2>

              <p>
                From forests and grasslands to rivers and reservoirs,
                elephants move across diverse landscapes. These habitats
                provide food, water, shelter and the space they need
                to thrive.
              </p>

              <Link
                className="discover-button discover-button--cream"
                to="/discover/habitats"
              >
                <span>Explore Habitats</span>
                <ArrowIcon />
              </Link>


              <div className="discover-habitat-thumbnails">

                <article className="discover-habitat-thumb">
                  <img
                    src={forestImage}
                    alt="Forest elephant habitat"
                  />
                  <span>Forests</span>
                </article>

                <article className="discover-habitat-thumb">
                  <img
                    src={grasslandsImage}
                    alt="Grassland elephant habitat"
                  />
                  <span>Grasslands</span>
                </article>

                <article className="discover-habitat-thumb">
                  <img
                    src={wetlandsImage}
                    alt="River and wetland elephant habitat"
                  />
                  <span>Rivers &amp; Wetlands</span>
                </article>

                <article className="discover-habitat-thumb">
                  <img
                    src={seasonalImage}
                    alt="Seasonal elephant movement"
                  />
                  <span>Seasonal Movements</span>
                </article>

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            COMMUNICATION + AUDIO
        ================================================== */}

        <section
          className="discover-communication"
          id="communication"
        >
          <div className="discover-shell discover-communication__layout">

            <div className="discover-communication__copy">

              <div className="discover-eyebrow">
                <span />
                A LANGUAGE BEYOND WORDS
              </div>

              <h2>
                Listen to
                <br />
                Their World
              </h2>

              <p>
                Elephants communicate in many ways — through sounds,
                body language, touch and even vibrations we cannot hear.
              </p>

            </div>


            <div
              className="discover-audio-card"
              style={{
                '--discover-communication-image':
                  `url(${communicationImage})`,
              }}
            >
              <div className="discover-audio-card__overlay" />

              <div className="discover-audio-card__content">

                <div className="discover-audio-card__title">
                  <span>ELEPHANT COMMUNICATION</span>

                  <h3>Listen to Their World</h3>

                  <p>Rumbles, trumpets, and more</p>
                </div>


                <div className="discover-audio-player">

                  <button
                    className="discover-audio-button"
                    type="button"
                    onClick={toggleAudio}
                    aria-label={
                      isPlaying
                        ? 'Pause elephant rumble'
                        : 'Play elephant rumble'
                    }
                    title={
                      isPlaying
                        ? 'Pause elephant rumble'
                        : 'Play elephant rumble'
                    }
                  >
                    {isPlaying ? (
                      <span
                        className="discover-audio-button__pause"
                        aria-hidden="true"
                      >
                        <i />
                        <i />
                      </span>
                    ) : (
                      <span
                        className="discover-audio-button__play"
                        aria-hidden="true"
                      />
                    )}
                  </button>


                  <div className="discover-wave">
                    <div
                      className="discover-wave__bars"
                      aria-hidden="true"
                    >
                      {[
                        12, 24, 16, 31, 20, 39, 17, 28,
                        42, 22, 34, 18, 37, 25, 45, 20,
                        32, 17, 38, 27, 43, 19, 35, 23,
                        40, 16, 29, 21, 36, 14,
                      ].map((height, index) => (
                        <span
                          key={index}
                          style={{
                            height: `${height}px`,
                          }}
                        />
                      ))}
                    </div>

                    <div
                      className="discover-wave__progress"
                      style={{
                        width: `${audioProgress}%`,
                      }}
                    />
                  </div>


                  <span className="discover-audio-player__time">
                    {formatTime(currentTime)}
                    {' / '}
                    {formatTime(duration)}
                  </span>

                </div>

              </div>


              <audio
                ref={audioRef}
                src={elephantRumble}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadedMetadata={handleMetadata}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
              />

            </div>

          </div>
        </section>


        {/* =================================================
             FOOD & FEEDING
          ================================================== */}

        <section
          className="discover-coexistence"
          id="food-feeding"
        >
          <div className="discover-shell discover-coexistence__layout">

            <div className="discover-coexistence__copy">

              <div className="discover-eyebrow">
                <span />
                NOURISHED BY THE LANDSCAPE
              </div>

              <h2>
                Food &amp; Feeding
                <br />
                A Life Spent Foraging
              </h2>

              <p>
                Feeding shapes much of an elephant’s day.
                From grasses and leaves to bark, roots and
                seasonal vegetation, elephants move through
                the landscape searching for the food they need.
              </p>

              <Link
                className="discover-button discover-button--dark"
                to="/discover/food-feeding"
              >
                <span>Explore Food &amp; Feeding</span>
                <ArrowIcon />
              </Link>

            </div>


            <div className="discover-coexistence__image">
              <img
                src={foodFeedingImage}
                alt="Asian elephant using its trunk to gather natural vegetation"
              />

              <div className="discover-coexistence__image-label">
                <span>THE ART OF FORAGING</span>

                <strong>
                  Every meal begins with the landscape.
                </strong>
              </div>
            </div>

          </div>
        </section>
        {/* =================================================
            CULTURE + CONSERVATION
           ================================================== */}

        <section className="discover-knowledge">

          <div className="discover-shell discover-knowledge__grid">

            {/* =================================================
              CULTURE & HISTORY
              ================================================== */}

            <article
              className="discover-knowledge-card"
              id="culture-history"
            >
              <div className="discover-knowledge-card__image">
                <img
                  src={cultureHistoryImage}
                  alt="Elephants within Sri Lankan cultural heritage"
                />
              </div>

              <div className="discover-knowledge-card__content">

                <div className="discover-eyebrow">
                  <span />
                  A DEEPER HISTORY
                </div>

                <h2>
                  Elephants in
                  <br />
                  Sri Lankan Culture
                </h2>

                <p>
                  For centuries, elephants have been part of our
                  history, spirituality and identity. Their presence
                  continues to inspire art, traditions and stories
                  across generations.
                </p>

                <Link
                  className="discover-button discover-button--dark"
                  to="/discover/sri-lankan-culture"
                >
                  <span>Explore the Legacy</span>
                  <ArrowIcon />
                </Link>

              </div>
            </article>


            {/* =================================================
               CONSERVATION
              ================================================== */}

            <article
              className="discover-knowledge-card discover-knowledge-card--dark"
              id="conservation"
            >
              <div className="discover-knowledge-card__image">
                <img
                  src={conservationImage}
                  alt="Elephants within a conservation landscape"
                />
              </div>

              <div className="discover-knowledge-card__content">

                <div className="discover-eyebrow discover-eyebrow--light">
                  <span />
                  A BRIGHTER TOMORROW
                </div>

                <h2>
                  Conservation
                  <br />
                  in Action
                </h2>

                <p>
                  From protected areas to community initiatives,
                  many are working to ensure a safer future for
                  elephants. Learn how thoughtful action can make
                  a difference.
                </p>

                <Link
                  className="discover-button discover-button--cream"
                  to="/unspoken"
                >
                  <span>Support the Change</span>
                  <ArrowIcon />
                </Link>

              </div>
            </article>

          </div>

        </section>


        {/* =================================================
            CLOSING BANNER
        ================================================== */}

        <section
          className="discover-closing"
          style={{
            '--discover-closing-image':
              `url(${closingBannerImage})`,
          }}
        >
          <div className="discover-closing__overlay" />

          <div className="discover-shell discover-closing__inner">

            <div className="discover-closing__content">

              <div className="discover-eyebrow discover-eyebrow--light">
                <span />
                KEEP DISCOVERING
              </div>

              <h2>
                Knowledge creates
                <br />
                compassion.
              </h2>

              <p>
                The more we understand their world, the better we can
                protect the future we share.
              </p>

              <Link
                className="discover-button discover-button--cream"
                to="/unspoken"
              >
                <span>Be Part of It</span>
                <ArrowIcon />
              </Link>

            </div>

          </div>
        </section>

      </main>


      {/* ===================================================
          EXISTING FOOTER
      ==================================================== */}

      <HomeFooter />

    </div>
  )
}

export default Discover