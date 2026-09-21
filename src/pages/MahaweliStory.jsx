import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

/* =========================================================
   MAHAWELI STORY ASSETS
   ========================================================= */

import mahaweliHero from '../assets/stories/mahaweli/mahaweli-story-hero.png'
import mahaweliMap from '../assets/stories/mahaweli/mahaweli-location-map.png'
import mahaweliQuote from '../assets/stories/mahaweli/mahaweli-story-quote.png'

import mahaweliMotherCalf from '../assets/stories/mahaweli/mahaweli-moment-mother-calf.png'
import mahaweliWaterCalf from '../assets/stories/mahaweli/mahaweli-moment-water-calf.png'
import mahaweliRiverLandscape from '../assets/stories/mahaweli/mahaweli-moment-river-landscape.png'
import mahaweliRiverCrossing from '../assets/stories/mahaweli/mahaweli-moment-river-crossing.png'
import mahaweliFootprints from '../assets/stories/mahaweli/mahaweli-moment-footprints.png'

/* =========================================================
   REUSED STORIES ASSETS
   ========================================================= */

import featuredMahaweli from '../assets/stories/featured-mahaweli.png'
import tuskerTemple from '../assets/stories/stories-tusker-temple.png'
import secondChance from '../assets/stories/stories-second-chance.png'
import livesIntertwined from '../assets/stories/stories-lives-intertwined.png'
import wildPaths from '../assets/stories/stories-wild-paths.png'
import bottomCta from '../assets/stories/stories-bottom-cta.png'

import './MahaweliStory.css'


/* =========================================================
   MOMENTS GALLERY DATA
   ========================================================= */

const moments = [
    {
        id: 1,
        image: featuredMahaweli,
        alt: 'A herd of elephants moving through the Mahaweli landscape at sunset',
    },
    {
        id: 2,
        image: mahaweliMotherCalf,
        alt: 'An elephant mother and calf near the river',
    },
    {
        id: 3,
        image: mahaweliWaterCalf,
        alt: 'A young elephant calf playing in the water',
    },
    {
        id: 4,
        image: mahaweliRiverLandscape,
        alt: 'A peaceful river landscape in the Mahaweli region',
    },
    {
        id: 5,
        image: mahaweliRiverCrossing,
        alt: 'A herd of elephants crossing a shallow river',
    },
    {
        id: 6,
        image: mahaweliFootprints,
        alt: 'Elephant footprints along a quiet riverbank',
    },
]


/* =========================================================
   RELATED STORIES DATA
   ========================================================= */

const relatedStories = [
    {
        id: 1,
        title: 'The Tusker and the Temple',
        date: '05 AUG 2026',
        image: tuskerTemple,
    },
    {
        id: 2,
        title: 'Lives Intertwined',
        date: '18 JUL 2026',
        image: livesIntertwined,
    },
    {
        id: 3,
        title: 'A Second Chance',
        date: '28 JUL 2026',
        image: secondChance,
    },
    {
        id: 4,
        title: 'Wild Paths, Ancient Lands',
        date: '10 JUL 2026',
        image: wildPaths,
    },
]


function MahaweliStory() {
    const [galleryStart, setGalleryStart] = useState(0)

    /* =========================================================
       MOMENTS GALLERY
       ========================================================= */

    const visibleMoments = useMemo(() => {
        return [0, 1, 2, 3].map(
            (offset) => moments[(galleryStart + offset) % moments.length]
        )
    }, [galleryStart])

    const showPreviousMoments = () => {
        setGalleryStart(
            (current) => (current - 1 + moments.length) % moments.length
        )
    }

    const showNextMoments = () => {
        setGalleryStart((current) => (current + 1) % moments.length)
    }


    /* =========================================================
       SHARE STORY
       ========================================================= */

    const shareStory = async () => {
        const shareData = {
            title: 'Guardians of the Mahaweli — DALA',
            text: 'A journey through the lives of elephants and the people who live alongside them.',
            url: window.location.href,
        }

        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch {
                // User cancelled the native share dialog.
            }

            return
        }

        try {
            await navigator.clipboard.writeText(window.location.href)
        } catch {
            
        }
    }


    return (
        <>
            <Navbar />

            <main className="mahaweli-story">

                {/* =====================================================
            STORY HERO
        ====================================================== */}
                <section className="mahaweli-story__hero">
                    <img
                        className="mahaweli-story__hero-image"
                        src={mahaweliHero}
                        alt="Elephants crossing a river through a Sri Lankan landscape at golden hour"
                    />

                    <div className="mahaweli-story__hero-overlay" />

                    <div className="mahaweli-story__hero-inner">

                        {/* -------------------------------------------------
                HERO — BREADCRUMB
            -------------------------------------------------- */}
                        <nav
                            className="mahaweli-story__breadcrumb"
                            aria-label="Breadcrumb"
                        >
                            <Link to="/stories">Stories</Link>

                            <span aria-hidden="true">›</span>

                            <span>Guardians of the Mahaweli</span>
                        </nav>


                        {/* -------------------------------------------------
                HERO — CONTENT
            -------------------------------------------------- */}
                        <div className="mahaweli-story__hero-content">
                            <h1 className="mahaweli-story__hero-title">
                                Guardians
                                <br />
                                of the Mahaweli
                            </h1>

                            <p className="mahaweli-story__hero-description">
                                A journey through the lives of elephants
                                <br />
                                and the people who live alongside them.
                            </p>


                            {/* -------------------------------------------------
                  HERO — META
              -------------------------------------------------- */}
                            <div className="mahaweli-story__hero-meta">
                                <div className="mahaweli-story__meta-item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            x="4"
                                            y="6"
                                            width="16"
                                            height="14"
                                            rx="2"
                                        />
                                        <path d="M8 3v6M16 3v6M4 10h16" />
                                    </svg>

                                    <span>12 AUG 2026</span>
                                </div>

                                <span
                                    className="mahaweli-story__meta-divider"
                                    aria-hidden="true"
                                />

                                <div className="mahaweli-story__meta-item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M5 21c.4-5 2.8-7.5 7-7.5s6.6 2.5 7 7.5" />
                                    </svg>

                                    <span>By DALA Team</span>
                                </div>
                            </div>


                            {/* -------------------------------------------------
                  HERO — TAGS
              -------------------------------------------------- */}
                            <div className="mahaweli-story__hero-tags">
                                <span>PEOPLE</span>
                                <span>CONSERVATION</span>
                                <span>PLACES</span>
                            </div>
                        </div>
                    </div>
                </section>


                {/* =====================================================
            STORY BODY
        ====================================================== */}
                <section className="mahaweli-story__body">
                    <div className="mahaweli-story__body-inner">

                        {/* =================================================
                ARTICLE COLUMN
            ================================================== */}
                        <article className="mahaweli-story__article">

                            {/* -------------------------------------------------
                  ARTICLE TEXT
              -------------------------------------------------- */}
                            <div className="mahaweli-story__article-copy">
                                <p className="mahaweli-story__lead">
                                    <span className="mahaweli-story__drop-cap">T</span>
                                    he Mahaweli is more than a river — it is a home, a highway,
                                    and a lifeline. For the elephants of Sri Lanka, it has
                                    always been a place of refuge, a source of food, and a path
                                    that connects forests, villages and generations.
                                </p>

                                <p>
                                    At dawn, herds make their way through misty landscapes,
                                    following routes their ancestors have walked for centuries.
                                    Mothers guide their calves with quiet strength, while young
                                    ones learn the world — splashing, playing, and discovering.
                                    Each footprint along the riverbank carries a story of
                                    survival, memory, and belonging.
                                </p>

                                <p>
                                    But the Mahaweli is also a shared space. Farmers, fishermen
                                    and local communities live along its banks, with their own
                                    hopes and challenges. Their lives are deeply connected to
                                    the same waters and lands. Coexistence here is not always
                                    easy, yet it is a testament to resilience, understanding,
                                    and the possibility of a kinder tomorrow.
                                </p>

                                <p>
                                    This is a story of more than elephants. It is a story of
                                    landscapes, people, and the delicate balance that sustains
                                    us all.
                                </p>
                            </div>


                            {/* =================================================
                  STORY QUOTE
              ================================================== */}
                            <figure className="mahaweli-story__quote">
                                <img
                                    className="mahaweli-story__quote-image"
                                    src={mahaweliQuote}
                                    alt=""
                                    aria-hidden="true"
                                />

                                <div className="mahaweli-story__quote-overlay" />

                                <blockquote className="mahaweli-story__quote-content">
                                    <span
                                        className="mahaweli-story__quote-line"
                                        aria-hidden="true"
                                    />

                                    <p>
                                        “In their footsteps,
                                        <br />
                                        we find a reminder that this world
                                        <br />
                                        belongs to more than just us.”
                                    </p>

                                    <cite>— DALA</cite>
                                </blockquote>
                            </figure>
                        </article>


                        {/* =================================================
                ABOUT THIS STORY SIDEBAR
            ================================================== */}
                        <aside className="mahaweli-story__sidebar">

                            <div className="mahaweli-story__about-card">
                                <div className="mahaweli-story__about-content">
                                    <h2>About This Story</h2>


                                    {/* ---------------------------------------------
                      LOCATION
                  ---------------------------------------------- */}
                                    <div className="mahaweli-story__about-row">
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
                                            <circle cx="12" cy="10" r="2" />
                                        </svg>

                                        <span>Mahaweli River Basin, Sri Lanka</span>
                                    </div>


                                    {/* ---------------------------------------------
                      DATE
                  ---------------------------------------------- */}
                                    <div className="mahaweli-story__about-row">
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <rect
                                                x="4"
                                                y="6"
                                                width="16"
                                                height="14"
                                                rx="2"
                                            />
                                            <path d="M8 3v6M16 3v6M4 10h16" />
                                        </svg>

                                        <span>12 August 2026</span>
                                    </div>


                                    {/* ---------------------------------------------
                      AUTHOR
                  ---------------------------------------------- */}
                                    <div className="mahaweli-story__about-row">
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M5 21c.4-5 2.8-7.5 7-7.5s6.6 2.5 7 7.5" />
                                        </svg>

                                        <span>By DALA Team</span>
                                    </div>


                                    {/* ---------------------------------------------
                      TAGS
                  ---------------------------------------------- */}
                                    <div className="mahaweli-story__about-tags">
                                        <span>PEOPLE</span>
                                        <span>CONSERVATION</span>
                                        <span>PLACES</span>
                                    </div>
                                </div>


                                {/* -----------------------------------------------
                    LOCATION MAP
                ------------------------------------------------ */}
                                <div className="mahaweli-story__map">
                                    <img
                                        src={mahaweliMap}
                                        alt="Minimal map illustration of the Mahaweli River Basin"
                                    />


                                </div>
                            </div>


                            {/* =================================================
                  SHARE THIS STORY
              ================================================== */}
                            <div className="mahaweli-story__share">
                                <h2>Share This Story</h2>

                                <div className="mahaweli-story__share-buttons">

                                    <button
                                        type="button"
                                        onClick={shareStory}
                                        aria-label="Copy or share this story"
                                        title="Share story"
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
                                            <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
                                        </svg>
                                    </button>

                                    <a
                                        href="https://www.facebook.com/sharer/sharer.php"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Share on Facebook"
                                        title="Facebook"
                                    >
                                        f
                                    </a>

                                    <button
                                        type="button"
                                        onClick={shareStory}
                                        aria-label="Share this story"
                                        title="Share"
                                    >
                                        𝕏
                                    </button>

                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(
                                            `Guardians of the Mahaweli — ${window.location.href}`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Share on WhatsApp"
                                        title="WhatsApp"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 20.5 11.7Z" />
                                            <path d="M8.2 7.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.5.9 1.2 1.7 2 2.3.8.6 1.5.9 1.8 1 .3.1.5 0 .7-.2l.9-1.1c.2-.3.5-.3.8-.2l1.8.9c.3.1.5.3.5.5 0 .3-.2 1.4-.8 2-.6.6-1.5.9-2.4.8-1-.1-2.4-.5-4.1-1.5-1.4-.8-2.7-1.9-3.7-3.2-.9-1.1-1.5-2.3-1.6-3.3-.1-.8.1-1.5.4-1.9Z" />
                                        </svg>
                                    </a>

                                    <button
                                        type="button"
                                        onClick={shareStory}
                                        aria-label="More sharing options"
                                        title="More sharing options"
                                    >
                                        <span aria-hidden="true">↗</span>
                                    </button>

                                </div>
                            </div>
                        </aside>
                    </div>
                </section>


                {/* =====================================================
            MOMENTS FROM THE STORY
        ====================================================== */}
                <section className="mahaweli-story__moments">
                    <div className="mahaweli-story__section-inner">

                        <div className="mahaweli-story__section-heading">
                            <div>
                                <span>ALONG THE RIVER</span>

                                <h2>Moments from the Story</h2>
                            </div>
                        </div>


                        {/* -------------------------------------------------
                MOMENTS GRID
            -------------------------------------------------- */}
                        <div className="mahaweli-story__moments-grid">

                            <figure className="mahaweli-story__moment mahaweli-story__moment--large">
                                <img
                                    src={visibleMoments[0].image}
                                    alt={visibleMoments[0].alt}
                                />
                            </figure>


                            <div className="mahaweli-story__moment-stack">
                                <figure className="mahaweli-story__moment">
                                    <img
                                        src={visibleMoments[1].image}
                                        alt={visibleMoments[1].alt}
                                    />
                                </figure>

                                <figure className="mahaweli-story__moment">
                                    <img
                                        src={visibleMoments[2].image}
                                        alt={visibleMoments[2].alt}
                                    />
                                </figure>
                            </div>


                            <figure className="mahaweli-story__moment mahaweli-story__moment--tall">
                                <img
                                    src={visibleMoments[3].image}
                                    alt={visibleMoments[3].alt}
                                />
                            </figure>

                        </div>


                        {/* -------------------------------------------------
                MOMENTS NAVIGATION
            -------------------------------------------------- */}
                        <div className="mahaweli-story__gallery-nav">
                            <button
                                type="button"
                                onClick={showPreviousMoments}
                                aria-label="Previous gallery moments"
                                title="Previous"
                            >
                                ←
                            </button>

                            <span>
                                {galleryStart + 1} / {moments.length}
                            </span>

                            <button
                                type="button"
                                onClick={showNextMoments}
                                aria-label="Next gallery moments"
                                title="Next"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </section>


                {/* =====================================================
            MORE STORIES
        ====================================================== */}
                <section className="mahaweli-story__related">
                    <div className="mahaweli-story__section-inner">

                        <div className="mahaweli-story__related-header">
                            <div>
                                <span>CONTINUE READING</span>

                                <h2>More Stories You Might Like</h2>
                            </div>

                            <Link
                                className="mahaweli-story__view-all"
                                to="/stories"
                            >
                                <span>View All Stories</span>
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>


                        {/* -------------------------------------------------
                RELATED STORY CARDS
            -------------------------------------------------- */}
                        <div className="mahaweli-story__related-grid">
                            {relatedStories.map((story) => (
                                <article
                                    className="mahaweli-story__related-card"
                                    key={story.id}
                                >
                                    <div className="mahaweli-story__related-visual">
                                        <img
                                            src={story.image}
                                            alt=""
                                        />
                                    </div>

                                    <div className="mahaweli-story__related-copy">
                                        <h3>{story.title}</h3>
                                        <span>{story.date}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>


                {/* =====================================================
            KINDER TOMORROW CTA
        ====================================================== */}
                <section className="mahaweli-story__cta">
                    <img
                        className="mahaweli-story__cta-image"
                        src={bottomCta}
                        alt="Elephants moving through a Sri Lankan landscape at golden hour"
                    />

                    <div className="mahaweli-story__cta-overlay" />

                    <div className="mahaweli-story__cta-inner">
                        <div className="mahaweli-story__cta-content">
                            <span className="mahaweli-story__cta-eyebrow">
                                EVERY STORY CAN MAKE A DIFFERENCE
                            </span>

                            <h2>
                                A Kinder Tomorrow
                                <br />
                                Through Real Stories.
                            </h2>

                            <p>
                                Together, we can listen, learn and create
                                <br />
                                a more compassionate world for elephants and people.
                            </p>

                            <Link
                                className="mahaweli-story__cta-button"
                                to="/stories"
                            >
                                <span>Be Part of the Story</span>
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <HomeFooter />
        </>
    )
}

export default MahaweliStory