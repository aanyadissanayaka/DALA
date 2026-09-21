import './DiscoverArticle.css'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

/* =========================================================
   ARTICLE ASSETS
   ========================================================= */

import heroImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-hero.png'
import mainImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-main.png'
import intelligenceImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-intelligence.png'
import socialBondsImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-social-bonds.png'
import communicationImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-communication.png'
import emotionCareImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-emotion-care.png'
import sidebarImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-sidebar.png'
import bannerImage from '../assets/discover/articles/extraordinary-elephant/extraordinary-article-banner.png'


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
    id: 'intelligence-memory',
    title: 'Intelligence & Memory',
    image: intelligenceImage,
    alt: 'Asian elephants interacting naturally in their environment',
    text:
      'Elephants possess remarkable cognitive abilities. They can learn, solve problems, recognise individuals and retain information about places, relationships and experiences over long periods of time. Memory is especially valuable in a changing landscape, helping elephants navigate between important resources and respond to situations they have encountered before.',
  },
  {
    id: 'family-social-bonds',
    title: 'Family & Social Bonds',
    image: socialBondsImage,
    alt: 'Young Asian elephants interacting closely within a herd',
    text:
      'For many elephants, life is deeply social. Females and their young typically live within family groups where calves grow up surrounded by mothers, relatives and other herd members. Through years of close interaction, young elephants learn how to move through their environment, communicate with others and become part of a complex social world.',
  },
  {
    id: 'communication',
    title: 'A Language Beyond Words',
    image: communicationImage,
    alt: 'Asian elephants communicating through close physical contact',
    text:
      'Elephant communication extends far beyond the sounds most people can hear. They use trumpets, rumbles, body posture, scent and touch, while some low-frequency calls can travel across considerable distances. Even subtle movements of the ears, trunk and body can carry information between individuals.',
  },
  {
    id: 'emotion-care',
    title: 'Emotion, Care & Grief',
    image: emotionCareImage,
    alt: 'Asian elephants sharing close social contact',
    text:
      'Elephants display rich social responses. They comfort companions through touch, protect vulnerable calves and show strong interest in members of their social group. Researchers have also documented unusual attention toward injured, distressed and deceased elephants, offering a glimpse into the depth and complexity of elephant social life.',
  },
]


/* =========================================================
   EXPLORE THIS TOPIC
   ========================================================= */

const topicLinks = [
  {
    title: 'Intelligence & Memory',
    subtitle: 'Learning, remembering and adapting',
    image: intelligenceImage,
    href: '#intelligence-memory',
  },
  {
    title: 'Social Bonds',
    subtitle: 'Family life and relationships',
    image: socialBondsImage,
    href: '#family-social-bonds',
  },
  {
    title: 'Communication',
    subtitle: 'Sound, touch and vibration',
    image: communicationImage,
    href: '#communication',
  },
  {
    title: 'Emotion & Care',
    subtitle: 'A deeply social world',
    image: emotionCareImage,
    href: '#emotion-care',
  },
]


/* =========================================================
   RELATED ARTICLES
   ========================================================= */

const relatedArticles = [
  {
    title: 'Habitats',
    subtitle: 'The landscapes elephants depend on',
    image: mainImage,
    href: '/discover/habitats',
  },
  {
    title: 'Food & Feeding',
    subtitle: 'A life shaped by foraging',
    image: intelligenceImage,
    href: '/discover/food-feeding',
  },
  {
    title: 'Sri Lankan Culture',
    subtitle: 'A legacy across generations',
    image: socialBondsImage,
    href: '/discover/sri-lankan-culture',
  },
]


/* =========================================================
   EXTRAORDINARY ELEPHANT ARTICLE
   ========================================================= */

function ExtraordinaryElephantArticle() {

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

        {/* =================================================
            HERO
        ================================================== */}

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

              <span>The Extraordinary Elephant</span>

              <span>→</span>

              <span>Elephant Behaviour</span>
            </nav>


            <div className="discover-article__hero-copy">

              <p className="discover-article__eyebrow">
                The extraordinary elephant
              </p>

              <h1>
                Intelligent. Social. Remarkable.

                <span>
                  Inside the World of Elephants
                </span>
              </h1>

              <p className="discover-article__hero-description">
                Elephants are more than the largest land mammals —
                they are intelligent, emotional and deeply social
                beings whose lives are shaped by memory,
                communication and enduring relationships.
              </p>

            </div>

          </div>
        </section>


        {/* =================================================
            META BAR
        ================================================== */}

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


        {/* =================================================
            ARTICLE BODY
        ================================================== */}

        <section className="discover-article__content">

          <div className="discover-article__content-grid">

            <article className="discover-article__main">


              {/* =============================================
                  INTRODUCTION
              ============================================== */}

              <header className="discover-article__intro">

                <p className="discover-article__section-label">
                  More than meets the eye
                </p>

                <h2>
                  A Complex World
                  Behind Every Elephant
                </h2>

                <p>
                  To understand an elephant, size is one of the
                  least interesting places to begin. Behind that
                  enormous presence is an animal navigating a
                  sophisticated world of memory, relationships,
                  communication and experience.
                </p>

                <p>
                  Elephants learn from one another. They recognise
                  familiar individuals, maintain social bonds,
                  communicate in ways that extend beyond human
                  hearing and respond closely to the behaviour of
                  those around them.
                </p>

                <p>
                  Looking more closely at these abilities changes
                  the way we see elephants — not simply as a
                  species, but as individuals living within rich
                  and interconnected social worlds.
                </p>

              </header>


              {/* =============================================
                  MAIN IMAGE
              ============================================== */}

              <figure className="discover-article__main-figure">

                <img
                  src={mainImage}
                  alt="A herd of Asian elephants moving together through a natural landscape"
                />

                <figcaption>
                  Elephant life is shaped by relationships,
                  experience and knowledge shared across generations.
                </figcaption>

              </figure>


              {/* =============================================
                  ARTICLE SECTIONS
              ============================================== */}

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


              {/* =============================================
                  ARTICLE CLOSING
              ============================================== */}

              <section className="discover-article__closing">

                <span className="discover-article__closing-line" />

                <div>

                  <p className="discover-article__section-label">
                    Seeing elephants differently
                  </p>

                  <h3>
                    Understanding begins
                    with paying attention.
                  </h3>

                  <p>
                    The more we learn about elephant intelligence,
                    relationships and communication, the harder it
                    becomes to see an elephant as simply one member
                    of a species. Each animal carries experiences,
                    relationships and knowledge shaped over a
                    lifetime.
                  </p>

                  <p>
                    Protecting elephants therefore means protecting
                    more than individual bodies. It also means
                    respecting the social bonds, landscapes and
                    opportunities that allow their extraordinary
                    lives to continue.
                  </p>

                </div>

              </section>

            </article>


            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="discover-article__sidebar">


              {/* =============================================
                  EXPLORE THIS TOPIC
              ============================================== */}

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


              {/* =============================================
                  DID YOU KNOW?
              ============================================== */}

              <section className="discover-article__fact">

                <p className="discover-article__sidebar-label">
                  Did you know?
                </p>

                <div className="discover-article__fact-content">

                  <p>
                    Some elephant calls are so low in frequency
                    that they fall below the range of normal human
                    hearing. These rumbles can help elephants
                    communicate across considerable distances.
                  </p>

                </div>

              </section>


              {/* =============================================
                  SIDEBAR IMAGE
              ============================================== */}

              <figure className="discover-article__sidebar-image">

                <img
                  src={sidebarImage}
                  alt="Asian elephants walking together through a natural forest landscape"
                />

              </figure>


              {/* =============================================
                  RELATED ARTICLES
              ============================================== */}

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


              {/* =============================================
                  A KINDER TOMORROW
              ============================================== */}

              <section className="discover-article__promise">

                <div>

                  <p className="discover-article__sidebar-label">
                    A kinder tomorrow
                  </p>

                  <p>
                    When we recognise elephants as intelligent,
                    social individuals, conservation becomes more
                    than protecting a species. It becomes a promise
                    to protect the relationships, knowledge and
                    lives that make every elephant remarkable.
                  </p>

                </div>

              </section>

            </aside>

          </div>

        </section>


        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <section
          className="discover-article__banner"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >

          <div className="discover-article__banner-overlay" />

          <div className="discover-article__banner-inner">

            <div className="discover-article__banner-copy">

              <p>
                Look closer
              </p>

              <h2>
                Every elephant
                <span>
                  has a world of their own.
                </span>
              </h2>

            </div>


            <div className="discover-article__banner-action">

              <p>
                Intelligence, memory, communication and
                relationships are part of what makes an
                elephant&apos;s life extraordinary.
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

export default ExtraordinaryElephantArticle