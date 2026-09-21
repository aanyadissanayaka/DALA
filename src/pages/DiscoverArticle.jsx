import './DiscoverArticle.css'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import heroImage from '../assets/discover/articles/habitats/habitats-article-hero.png'
import mainImage from '../assets/discover/articles/habitats/habitats-article-main.png'
import forestsImage from '../assets/discover/articles/habitats/habitats-article-forests.png'
import grasslandsImage from '../assets/discover/articles/habitats/habitats-article-grasslands.png'
import wetlandsImage from '../assets/discover/articles/habitats/habitats-article-wetlands.png'
import seasonalImage from '../assets/discover/articles/habitats/habitats-article-seasonal.png'
import bannerImage from '../assets/discover/articles/habitats/habitats-article-banner.png'


const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
)

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18" />
    </svg>
)

const UserIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21c.7-4.6 3.2-7 7.5-7s6.8 2.4 7.5 7" />
    </svg>
)

const ClockIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
    </svg>
)

const LinkIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 14a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
        <path d="M14 10a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 19l1.1-1.1" />
    </svg>
)

const ElephantIcon = () => (
    <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M15 39V28c0-11 7-18 18-18 10 0 18 7 18 17v13" />
        <path d="M20 38v13M34 40v11M47 38v13" />
        <path d="M51 27c5 0 8 4 8 9 0 6-3 10-7 12" />
        <path d="M13 29H8c-3 0-5 2-5 5v6" />
        <path d="M24 22c2 5 6 8 11 8" />
        <circle cx="41" cy="21" r="1.5" fill="currentColor" stroke="none" />
    </svg>
)

const LeafIcon = () => (
    <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M53 9C31 10 14 20 10 42c10 5 25 3 34-8 7-8 8-18 9-25Z" />
        <path d="M10 53c8-15 18-25 34-34" />
    </svg>
)

const articleSections = [
    {
        id: 'forests',
        title: 'Forests: Home and Shelter',
        image: forestsImage,
        alt: 'Asian elephants moving through a forest habitat',
        text:
            'Forests provide shade, food and protection. They are crucial for movement, breeding and long-term survival. Healthy forest ecosystems give elephants access to diverse vegetation, quieter resting places and connected routes through the landscape.',
    },
    {
        id: 'grasslands',
        title: 'Grasslands: Space to Roam',
        image: grasslandsImage,
        alt: 'Asian elephants grazing in an open grassland',
        text:
            'Open grasslands offer essential grazing areas, especially during drier months. These open spaces allow elephants to move freely, socialise and find the variety of grasses and vegetation they need.',
    },
    {
        id: 'wetlands',
        title: 'Rivers and Wetlands: Life’s Essentials',
        image: wetlandsImage,
        alt: 'Asian elephants standing in a river and wetland habitat',
        text:
            'Rivers, lakes and seasonal wetlands provide water, food and places to cool down. They can also form important movement corridors, connecting different habitats across the wider landscape.',
    },
    {
        id: 'seasonal',
        title: 'Seasonal Movements',
        image: seasonalImage,
        alt: 'Asian elephants travelling across a landscape at sunset',
        text:
            'Elephants move between habitats as conditions change, following food and water across the seasons. Protecting connected landscapes helps make these natural movements possible and supports healthier ecosystems.',
    },
]

const topicLinks = [
    {
        title: 'Forests',
        subtitle: 'Shade, food and safety',
        image: forestsImage,
        href: '#forests',
    },
    {
        title: 'Grasslands',
        subtitle: 'Open spaces for grazing',
        image: grasslandsImage,
        href: '#grasslands',
    },
    {
        title: 'Rivers & Wetlands',
        subtitle: 'Water and life',
        image: wetlandsImage,
        href: '#wetlands',
    },
    {
        title: 'Seasonal Movements',
        subtitle: 'Following the seasons',
        image: seasonalImage,
        href: '#seasonal',
    },
]

const relatedArticles = [
    {
        title: 'Behaviour',
        subtitle: 'Inside an elephant’s world',
        image: forestsImage,
    },
    {
        title: 'Communication',
        subtitle: 'A language beyond words',
        image: wetlandsImage,
    },
    {
        title: 'People & Coexistence',
        subtitle: 'Living together',
        image: grasslandsImage,
    },
]

function DiscoverArticle() {
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
        } catch {
        }
    }

    return (
        <div className="discover-article">
            <Navbar />

            <main>
                {/* =========================================================
            HERO
        ========================================================= */}
                <section
                    className="discover-article__hero"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="discover-article__hero-overlay" />

                    <div className="discover-article__hero-inner">
                        <nav
                            className="discover-article__breadcrumbs"
                            aria-label="Breadcrumb"
                        >
                            <a href="/discover">Discover</a>
                            <span>→</span>
                            <span>Elephants in Sri Lanka</span>
                            <span>→</span>
                            <span>Habitats</span>
                        </nav>

                        <div className="discover-article__hero-copy">
                            <p className="discover-article__eyebrow">
                                In harmony with nature
                            </p>

                            <h1>
                                Habitats
                                <span>That Sustain Life</span>
                            </h1>

                            <p className="discover-article__hero-description">
                                From misty forests to open grasslands, elephants move across
                                Sri Lanka’s diverse landscapes. These habitats provide food,
                                water, shelter and the space they need to thrive.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            META BAR
        ========================================================= */}
                <section className="discover-article__meta">
                    <div className="discover-article__meta-inner">
                        <div className="discover-article__meta-details">
                            <div className="discover-article__meta-item">
                                <CalendarIcon />
                                <span>Published 12 Aug 2026</span>
                            </div>

                            <div className="discover-article__meta-item">
                                <UserIcon />
                                <span>DALA Team</span>
                            </div>

                            <div className="discover-article__meta-item">
                                <ClockIcon />
                                <span>8 min read</span>
                            </div>
                        </div>

                        <div className="discover-article__share">
                            <span>Share this article</span>

                            <a
                                className="discover-article__social"
                                href="https://www.facebook.com/sharer/sharer.php"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Share on Facebook"
                            >
                                f
                            </a>

                            <a
                                className="discover-article__social"
                                href="https://twitter.com/intent/tweet"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Share on X"
                            >
                                𝕏
                            </a>

                            <button
                                className="discover-article__copy"
                                type="button"
                                onClick={handleCopyLink}
                                aria-label="Copy article link"
                                title="Copy article link"
                            >
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            ARTICLE BODY
        ========================================================= */}
                <section className="discover-article__content">
                    <div className="discover-article__content-grid">
                        <article className="discover-article__main">
                            {/* INTRODUCTION */}
                            <header className="discover-article__intro">
                                <p className="discover-article__section-label">
                                    The landscapes they depend on
                                </p>

                                <h2>A Land of Many Landscapes</h2>

                                <p>
                                    Sri Lanka’s elephants live across a remarkable range of
                                    habitats, from dense forests and grasslands to riverine
                                    areas, wetlands and dry-zone plains. Each landscape plays a
                                    vital role in their survival, offering food, water, shelter
                                    and space across generations.
                                </p>
                            </header>

                            {/* MAIN LANDSCAPE */}
                            <figure className="discover-article__main-figure">
                                <img
                                    src={mainImage}
                                    alt="A herd of Asian elephants across a diverse natural landscape"
                                />
                                <figcaption>
                                    Connected landscapes allow elephants to move between the
                                    resources they need throughout the year.
                                </figcaption>
                            </figure>

                            {/* ARTICLE SECTIONS */}
                            <div className="discover-article__sections">
                                {articleSections.map((section, index) => (
                                    <section
                                        className={`discover-article__section ${index % 2 === 1
                                            ? 'discover-article__section--reverse'
                                            : ''
                                            }`}
                                        id={section.id}
                                        key={section.id}
                                    >
                                        <div className="discover-article__section-copy">
                                            <span className="discover-article__section-number">
                                                0{index + 1}
                                            </span>

                                            <h3>{section.title}</h3>
                                            <p>{section.text}</p>
                                        </div>

                                        <div className="discover-article__section-image">
                                            <img src={section.image} alt={section.alt} />
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* ARTICLE CLOSING */}
                            <section className="discover-article__closing">
                                <span className="discover-article__closing-line" />

                                <div>
                                    <p className="discover-article__section-label">
                                        One connected home
                                    </p>

                                    <h3>Every habitat is part of the story.</h3>

                                    <p>
                                        An elephant’s world does not end at the edge of a forest,
                                        river or grassland. These places work together as one
                                        connected living system. Protecting that connection is
                                        essential for elephants and for the many other species
                                        sharing the same landscapes.
                                    </p>
                                </div>
                            </section>
                        </article>

                        {/* =====================================================
                SIDEBAR
            ===================================================== */}
                        <aside className="discover-article__sidebar">
                            {/* EXPLORE THIS TOPIC */}
                            <section className="discover-article__sidebar-dark">
                                <p className="discover-article__sidebar-label">
                                    Explore this topic
                                </p>

                                <div className="discover-article__topic-list">
                                    {topicLinks.map((topic) => (
                                        <a
                                            className="discover-article__topic"
                                            href={topic.href}
                                            key={topic.title}
                                        >
                                            <img src={topic.image} alt="" />

                                            <span className="discover-article__topic-copy">
                                                <strong>{topic.title}</strong>
                                                <small>{topic.subtitle}</small>
                                            </span>

                                            <span className="discover-article__topic-arrow">
                                                <ArrowIcon />
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </section>

                            {/* DID YOU KNOW */}
                            <section className="discover-article__fact">
                                <p className="discover-article__sidebar-label">
                                    Did you know?
                                </p>

                                <div className="discover-article__fact-content">
                                    <p>
                                        Elephants may travel across large areas in search of food,
                                        water and suitable habitat, making landscape connectivity
                                        especially important.
                                    </p>
                                </div>
                            </section>
                            {/* SIDEBAR IMAGE */}
                            <figure className="discover-article__sidebar-image">
                                <img
                                    src={mainImage}
                                    alt="Elephant habitat extending towards distant mountains"
                                />
                            </figure>

                            {/* RELATED ARTICLES */}
                            <section className="discover-article__sidebar-dark">
                                <p className="discover-article__sidebar-label">
                                    Related articles
                                </p>

                                <div className="discover-article__topic-list">
                                    {relatedArticles.map((article) => (
                                        <a
                                            className="discover-article__topic"
                                            href="/discover"
                                            key={article.title}
                                        >
                                            <img src={article.image} alt="" />

                                            <span className="discover-article__topic-copy">
                                                <strong>{article.title}</strong>
                                                <small>{article.subtitle}</small>
                                            </span>

                                            <span className="discover-article__topic-arrow">
                                                <ArrowIcon />
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </section>

                            {/* KINDER TOMORROW */}
                            <section className="discover-article__promise">
                                <div>
                                    <p className="discover-article__sidebar-label">
                                        A kinder tomorrow
                                    </p>

                                    <p>
                                        Protecting connected landscapes gives elephants the space
                                        to move, feed and live more naturally — supporting healthier
                                        ecosystems for everyone.
                                    </p>
                                </div>
                            </section>
                        </aside>
                    </div>
                </section>

                {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
                <section
                    className="discover-article__banner"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                >
                    <div className="discover-article__banner-overlay" />

                    <div className="discover-article__banner-inner">
                        <div className="discover-article__banner-copy">
                            <p>Keep their world connected</p>
                            <h2>
                                Healthy habitats.
                                <span>Brighter tomorrows.</span>
                            </h2>
                        </div>

                        <div className="discover-article__banner-action">
                            <p>
                                Discover how thoughtful conservation can help protect the
                                landscapes elephants depend on.
                            </p>

                            <a href="/unspoken">
                                Take Action
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <HomeFooter />
        </div>
    )
}

export default DiscoverArticle