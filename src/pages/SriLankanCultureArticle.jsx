import './DiscoverArticle.css'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import heroImage from '../assets/discover/articles/sri-lankan-culture/culture-article-hero.png'
import mainImage from '../assets/discover/articles/sri-lankan-culture/culture-article-main.png'
import historyImage from '../assets/discover/articles/sri-lankan-culture/culture-article-history.png'
import sacredTraditionsImage from '../assets/discover/articles/sri-lankan-culture/culture-article-sacred-traditions.png'
import artSymbolismImage from '../assets/discover/articles/sri-lankan-culture/culture-article-art-symbolism.png'
import livingHeritageImage from '../assets/discover/articles/sri-lankan-culture/culture-article-living-heritage.png'
import sidebarImage from '../assets/discover/articles/sri-lankan-culture/culture-article-sidebar.png'
import bannerImage from '../assets/discover/articles/sri-lankan-culture/culture-article-banner.png'


/* =========================================================
   ICONS
   ========================================================= */

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


/* =========================================================
   ARTICLE SECTIONS
   ========================================================= */

const articleSections = [
    {
        id: 'history',
        title: 'From Royal Courts to Cultural Memory',
        image: historyImage,
        alt: 'Historical Sri Lankan procession featuring elephants',
        text:
            'Historical records and imagery show elephants occupying a highly visible place in Sri Lankan public and ceremonial life. They were associated with royal courts, important occasions and processions, becoming part of a cultural memory that has continued across generations.',
    },
    {
        id: 'sacred-traditions',
        title: 'Ceremony, Devotion and Tradition',
        image: sacredTraditionsImage,
        alt: 'Ceremonially dressed elephant in a Sri Lankan cultural procession',
        text:
            'Elephants are among the most recognisable participants in some Sri Lankan Buddhist ceremonial processions. Alongside drummers, dancers, torch-bearers and other traditional participants, their presence forms part of a rich ceremonial language shaped by devotion, movement, sound, light and craftsmanship.',
    },
    {
        id: 'art-symbolism',
        title: 'The Elephant as an Enduring Image',
        image: artSymbolismImage,
        alt: 'Traditional Sri Lankan artwork depicting elephants in procession',
        text:
            'Elephants have also become enduring subjects within Sri Lankan visual culture. Their forms appear in sculpture, painting, architecture, decorative arts and traditional craftsmanship, preserving changing ideas about strength, dignity, ceremony and the relationship between people and elephants.',
    },
    {
        id: 'living-heritage',
        title: 'Tradition in a Changing World',
        image: livingHeritageImage,
        alt: 'Elephant within a contemporary Sri Lankan cultural tradition',
        text:
            'This cultural relationship is not confined to archives or the past. Traditions continue in the present, while knowledge about elephant behaviour and welfare continues to grow. Living heritage therefore creates an opportunity to remember cultural meaning while also considering our responsibilities toward the elephants at its heart.',
    },
]


/* =========================================================
   EXPLORE THIS TOPIC
   ========================================================= */

const topicLinks = [
    {
        title: 'Through History',
        subtitle: 'Elephants across generations',
        image: historyImage,
        href: '#history',
    },
    {
        title: 'Sacred Traditions',
        subtitle: 'Ceremony and devotion',
        image: sacredTraditionsImage,
        href: '#sacred-traditions',
    },
    {
        title: 'Art & Symbolism',
        subtitle: 'An enduring cultural image',
        image: artSymbolismImage,
        href: '#art-symbolism',
    },
    {
        title: 'Living Heritage',
        subtitle: 'Tradition in the present',
        image: livingHeritageImage,
        href: '#living-heritage',
    },
]


/* =========================================================
   RELATED ARTICLES
   ========================================================= */

const relatedArticles = [
    {
        title: 'Habitats',
        subtitle: 'The landscapes they depend on',
        image: mainImage,
        href: '/discover/habitats',
    },
    {
        title: 'Food & Feeding',
        subtitle: 'A life spent foraging',
        image: historyImage,
        href: '/discover/food-feeding',
    },
    {
        title: 'Stories',
        subtitle: 'Lives, places and memories',
        image: sacredTraditionsImage,
        href: '/stories',
    },
]


/* =========================================================
   SRI LANKAN CULTURE ARTICLE
   ========================================================= */

function SriLankanCultureArticle() {

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
        } catch {
            // Clipboard access may be unavailable in some browsers.
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

                            <span>Culture & Heritage</span>

                            <span>→</span>

                            <span>Sri Lankan Culture</span>
                        </nav>


                        <div className="discover-article__hero-copy">

                            <p className="discover-article__eyebrow">
                                A deeper history
                            </p>

                            <h1>
                                Elephants in Sri Lankan Culture

                                <span>
                                    A Legacy Across Generations
                                </span>
                            </h1>

                            <p className="discover-article__hero-description">
                                Across centuries, elephants have appeared in
                                Sri Lanka&apos;s ceremonies, art, stories and
                                cultural memory — becoming part of a relationship
                                that continues to evolve today.
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
                                <span>Published 21 Sep 2026</span>
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


                            {/* =================================================
                                INTRODUCTION
                                ================================================= */}

                            <header className="discover-article__intro">

                                <p className="discover-article__section-label">
                                    A presence woven through generations
                                </p>

                                <h2>
                                    More Than a Symbol
                                </h2>

                                <p>
                                    The elephant holds a distinctive place in
                                    Sri Lanka&apos;s cultural landscape. Across
                                    different periods of the island&apos;s history,
                                    elephants have been connected with royal courts,
                                    religious observances, ceremonial traditions,
                                    artistic expression and stories passed between
                                    generations.
                                </p>

                                <p>
                                    Their cultural presence reaches beyond a single
                                    event or tradition. Images of elephants appear
                                    throughout visual culture, while living traditions
                                    continue to make them highly visible within the
                                    cultural memory of the island.
                                </p>

                            </header>


                            {/* =================================================
                                MAIN IMAGE
                                ================================================= */}

                            <figure className="discover-article__main-figure">

                                <img
                                    src={mainImage}
                                    alt="Elephant within a Sri Lankan cultural landscape"
                                />

                                <figcaption>
                                    The relationship between people and elephants
                                    has become woven into many layers of Sri Lanka&apos;s
                                    cultural memory.
                                </figcaption>

                            </figure>


                            {/* =================================================
                                ARTICLE SECTIONS
                                ================================================= */}

                            <div className="discover-article__sections">

                                {articleSections.map((section, index) => (

                                    <section
                                        className={`discover-article__section ${
                                            index % 2 === 1
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

                                            <h3>
                                                {section.title}
                                            </h3>

                                            <p>
                                                {section.text}
                                            </p>

                                        </div>


                                        <div className="discover-article__section-image">

                                            <img
                                                src={section.image}
                                                alt={section.alt}
                                            />

                                        </div>

                                    </section>

                                ))}

                            </div>


                            {/* =================================================
                                ARTICLE CLOSING
                                ================================================= */}

                            <section className="discover-article__closing">

                                <span className="discover-article__closing-line" />

                                <div>

                                    <p className="discover-article__section-label">
                                        A living cultural story
                                    </p>

                                    <h3>
                                        Heritage can remember the past
                                        while learning from the present.
                                    </h3>

                                    <p>
                                        Understanding the cultural history of elephants
                                        also means recognising the living animals at the
                                        centre of that history. As knowledge grows, each
                                        generation has an opportunity to carry meaningful
                                        traditions forward with greater awareness, care
                                        and respect.
                                    </p>

                                </div>

                            </section>

                        </article>


                        {/* =====================================================
                            SIDEBAR
                            ===================================================== */}

                        <aside className="discover-article__sidebar">


                            {/* =================================================
                                EXPLORE THIS TOPIC
                                ================================================= */}

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

                                            <img
                                                src={topic.image}
                                                alt=""
                                            />

                                            <span className="discover-article__topic-copy">

                                                <strong>
                                                    {topic.title}
                                                </strong>

                                                <small>
                                                    {topic.subtitle}
                                                </small>

                                            </span>

                                            <span className="discover-article__topic-arrow">
                                                <ArrowIcon />
                                            </span>

                                        </a>

                                    ))}

                                </div>

                            </section>


                            {/* =================================================
                                DID YOU KNOW
                                ================================================= */}

                            <section className="discover-article__fact">

                                <p className="discover-article__sidebar-label">
                                    Did you know?
                                </p>

                                <div className="discover-article__fact-content">

                                    <p>
                                        Elephant imagery appears across many forms
                                        of Sri Lankan cultural expression, including
                                        architecture, sculpture, painting, decorative
                                        arts and ceremonial traditions.
                                    </p>

                                </div>

                            </section>


                            {/* =================================================
                                SIDEBAR IMAGE
                                ================================================= */}

                            <figure className="discover-article__sidebar-image">

                                <img
                                    src={sidebarImage}
                                    alt="Elephant motif within Sri Lankan cultural craftsmanship"
                                />

                            </figure>


                            {/* =================================================
                                RELATED ARTICLES
                                ================================================= */}

                            <section className="discover-article__sidebar-dark">

                                <p className="discover-article__sidebar-label">
                                    Related articles
                                </p>

                                <div className="discover-article__topic-list">

                                    {relatedArticles.map((article) => (

                                        <a
                                            className="discover-article__topic"
                                            href={article.href}
                                            key={article.title}
                                        >

                                            <img
                                                src={article.image}
                                                alt=""
                                            />

                                            <span className="discover-article__topic-copy">

                                                <strong>
                                                    {article.title}
                                                </strong>

                                                <small>
                                                    {article.subtitle}
                                                </small>

                                            </span>

                                            <span className="discover-article__topic-arrow">
                                                <ArrowIcon />
                                            </span>

                                        </a>

                                    ))}

                                </div>

                            </section>


                            {/* =================================================
                                A KINDER TOMORROW
                                ================================================= */}

                            <section className="discover-article__promise">

                                <div>

                                    <p className="discover-article__sidebar-label">
                                        A kinder tomorrow
                                    </p>

                                    <p>
                                        Cultural memory does not have to stand still.
                                        Understanding elephants more deeply gives each
                                        generation an opportunity to carry meaningful
                                        traditions forward with greater care for the
                                        animals at their heart.
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

                            <p>
                                Culture is a living story
                            </p>

                            <h2>
                                Remember the past.
                                <span>
                                    Shape a kinder future.
                                </span>
                            </h2>

                        </div>


                        <div className="discover-article__banner-action">

                            <p>
                                The story of elephants in Sri Lankan culture
                                belongs not only to history, but also to the
                                choices we make about their future.
                            </p>

                            <a href="/discover">
                                Continue Exploring
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

export default SriLankanCultureArticle