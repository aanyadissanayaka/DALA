import './DiscoverArticle.css'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import heroImage from '../assets/discover/articles/food-feeding/food-feeding-hero.png'
import mainImage from '../assets/discover/articles/food-feeding/food-feeding-main.png'
import dietImage from '../assets/discover/articles/food-feeding/food-feeding-diet.png'
import foragingImage from '../assets/discover/articles/food-feeding/food-feeding-foraging.png'
import trunkImage from '../assets/discover/articles/food-feeding/food-feeding-trunk.png'
import dailyNeedsImage from '../assets/discover/articles/food-feeding/food-feeding-daily-needs.png'
import sidebarImage from '../assets/discover/articles/food-feeding/food-feeding-sidebar.png'
import bannerImage from '../assets/discover/articles/food-feeding/food-feeding-banner.png'


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


const articleSections = [
    {
        id: 'diet',
        title: 'A Diverse Plant-Based Diet',
        image: dietImage,
        alt: 'Asian elephant feeding on fresh leaves and vegetation',
        text:
            'Elephants are herbivores with a remarkably varied diet. Grasses, leaves, shoots, bark, roots, fruits and other plant material can all form part of what they eat. What is available changes from place to place and across the seasons, so elephants continually adapt their feeding choices to the landscapes around them.',
    },
    {
        id: 'foraging',
        title: 'Foraging: Much More Than a Meal',
        image: foragingImage,
        alt: 'Asian elephant naturally foraging through tall vegetation',
        text:
            'Feeding is woven through much of an elephant’s day. As they walk, elephants browse and graze across wide areas, searching for suitable plants and selecting different foods along the way. This natural foraging behaviour also keeps them moving through the landscape and exploring their surroundings.',
    },
    {
        id: 'trunk',
        title: 'The Trunk: A Remarkable Feeding Tool',
        image: trunkImage,
        alt: 'Asian elephant using its trunk to gather vegetation',
        text:
            'An elephant’s trunk gives it extraordinary control while feeding. It can gather grass, pull leaves from branches, reach vegetation at different heights and carefully bring food to the mouth. The same powerful trunk can handle large branches and perform surprisingly delicate movements.',
    },
    {
        id: 'daily-needs',
        title: 'Feeding Through the Day',
        image: dailyNeedsImage,
        alt: 'Asian elephants feeding together in a natural landscape',
        text:
            'Because plant foods are relatively low in concentrated energy, elephants spend a large part of their day searching for and eating vegetation. Access to varied feeding grounds is therefore closely connected to their movement, wellbeing and ability to live naturally across changing seasons.',
    },
]


const topicLinks = [
    {
        title: 'Their Diet',
        subtitle: 'What elephants eat',
        image: dietImage,
        href: '#diet',
    },
    {
        title: 'Natural Foraging',
        subtitle: 'Searching and selecting',
        image: foragingImage,
        href: '#foraging',
    },
    {
        title: 'The Trunk',
        subtitle: 'A remarkable feeding tool',
        image: trunkImage,
        href: '#trunk',
    },
    {
        title: 'Daily Needs',
        subtitle: 'Feeding through the day',
        image: dailyNeedsImage,
        href: '#daily-needs',
    },
]


const relatedArticles = [
    {
        title: 'Habitats',
        subtitle: 'The landscapes they depend on',
        image: mainImage,
        href: '/discover/habitats',
    },
    {
        title: 'Water & Wellbeing',
        subtitle: 'An essential part of life',
        image: dailyNeedsImage,
        href: '/discover',
    },
    {
        title: 'Family & Social Life',
        subtitle: 'Bonds that shape their world',
        image: foragingImage,
        href: '/discover',
    },
]


function FoodFeedingArticle() {
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
                            <span>Elephants in Sri Lanka</span>
                            <span>→</span>
                            <span>Food & Feeding</span>
                        </nav>

                        <div className="discover-article__hero-copy">
                            <p className="discover-article__eyebrow">
                                Nourished by the landscape
                            </p>

                            <h1>
                                Food & Feeding
                                <span>A Life Spent Foraging</span>
                            </h1>

                            <p className="discover-article__hero-description">
                                From tender grasses to leaves, bark and seasonal
                                vegetation, food shapes an elephant’s daily rhythm,
                                movement and relationship with the landscape.
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
                                <span>7 min read</span>
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
                                    Following food through the landscape
                                </p>

                                <h2>Feeding Shapes the Day</h2>

                                <p>
                                    For an elephant, finding food is not a small part of
                                    daily life. It is one of the rhythms around which much
                                    of the day is organised. Elephants move through forests,
                                    grasslands and other habitats while grazing, browsing and
                                    selecting from the vegetation available around them.
                                </p>
                            </header>


                            {/* MAIN LANDSCAPE */}
                            <figure className="discover-article__main-figure">
                                <img
                                    src={mainImage}
                                    alt="Asian elephants feeding across a natural riverside landscape"
                                />

                                <figcaption>
                                    Feeding grounds are living landscapes, connecting
                                    movement, nutrition and the changing seasons.
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
                                            <img
                                                src={section.image}
                                                alt={section.alt}
                                            />
                                        </div>
                                    </section>
                                ))}
                            </div>


                            {/* ARTICLE CLOSING */}
                            <section className="discover-article__closing">
                                <span className="discover-article__closing-line" />

                                <div>
                                    <p className="discover-article__section-label">
                                        More than a source of food
                                    </p>

                                    <h3>
                                        Feeding connects elephants to the land.
                                    </h3>

                                    <p>
                                        Every grassland, forest edge and patch of
                                        vegetation can become part of an elephant’s
                                        feeding journey. Protecting diverse, connected
                                        landscapes gives elephants the freedom to forage,
                                        move and respond naturally as conditions change.
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
                                        Elephants can spend many hours of the day
                                        feeding and searching for vegetation, which is
                                        why access to large and varied landscapes matters.
                                    </p>
                                </div>
                            </section>

                            {/* SIDEBAR IMAGE */}
                            <figure className="discover-article__sidebar-image">
                                <img
                                    src={sidebarImage}
                                    alt="Close view of an elephant using its trunk while feeding"
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
                                            href={article.href}
                                            key={article.title}
                                        >
                                            <img
                                                src={article.image}
                                                alt=""
                                            />

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
                                        Landscapes rich in natural food allow elephants
                                        to forage, move and live with greater freedom —
                                        supporting healthier lives and healthier ecosystems.
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
                            <p>Let the landscape provide</p>

                            <h2>
                                Room to forage.
                                <span>Freedom to thrive.</span>
                            </h2>
                        </div>

                        <div className="discover-article__banner-action">
                            <p>
                                Protecting connected landscapes helps elephants
                                find the natural food and space they depend on.
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

export default FoodFeedingArticle