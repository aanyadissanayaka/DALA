import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import unspokenHero from '../assets/unspoken/unspoken-hero.png'
import elephantProfilesIcon from '../assets/icons/icon-elephant-profiles.png'

/* =========================================================
   CURRENT ATTENTION IMAGES
========================================================= */

import hakkaPatasImage from '../assets/unspoken/unspoken-attention-hakka-patas.png'
import gunshotConflictImage from '../assets/unspoken/unspoken-attention-gunshot-conflict.png'
import habitatLossImage from '../assets/unspoken/unspoken-attention-habitat-loss.png'
import waterScarcityImage from '../assets/unspoken/unspoken-attention-water-scarcity.png'

/* =========================================================
   CALF AWARENESS BANNER
========================================================= */

import ethDaruwoBanner from '../assets/unspoken/unspoken-eth-daruwo-banner.png'

/* =========================================================
   THEME IMAGES
========================================================= */

import wildLivesImage from '../assets/unspoken/unspoken-theme-wild-lives.png'
import landscapesImage from '../assets/unspoken/unspoken-theme-landscapes.png'
import coexistenceImage from '../assets/unspoken/unspoken-theme-coexistence.png'
import hopeSolutionsImage from '../assets/unspoken/unspoken-theme-hope-solutions.png'

import kinderTomorrowBanner from '../assets/unspoken/unspoken-kinder-tomorrow-banner.png'
import './Unspoken.css'


function Unspoken() {
    return (
        <div className="unspoken-page">

            {/* =========================================================
                NAVBAR
            ========================================================= */}
            <Navbar />


            <main>

                {/* =========================================================
                    HERO SECTION
                ========================================================= */}
                <section
                    className="unspoken-hero"
                    id="unspoken-home"
                    style={{
                        backgroundImage: `url(${unspokenHero})`,
                    }}
                >
                    <div
                        className="unspoken-hero__overlay"
                        aria-hidden="true"
                    />

                    <div className="unspoken-hero__inner">
                        <div className="unspoken-hero__content">

                            <span className="unspoken-hero__eyebrow">
                                UNSPOKEN
                            </span>

                            <h1 className="unspoken-hero__title">
                                Stories
                                <br />
                                They Cannot Tell.
                            </h1>

                            <p className="unspoken-hero__lead">
                                Different lives. The same right to exist.
                            </p>

                            <p className="unspoken-hero__description">
                                UNSPOKEN brings attention to the challenges faced
                                by Sri Lankan elephants — through verified stories,
                                thoughtful context, and pathways to responsible action.
                            </p>

                            <a
                                className="unspoken-hero__cta"
                                href="#current-attention"
                            >
                                <span>Explore UNSPOKEN</span>

                                <span
                                    className="unspoken-hero__cta-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>

                        </div>
                    </div>
                </section>


                {/* =========================================================
                    UNSPOKEN PILLARS BAR
                ========================================================= */}
                <section
                    className="unspoken-pillars"
                    aria-label="UNSPOKEN themes"
                >
                    <div className="unspoken-pillars__inner">

                        {/* WILD ELEPHANTS */}
                        <a
                            className="unspoken-pillar"
                            href="#wild-elephants"
                        >
                            <span
                                className="unspoken-pillar__icon"
                                aria-hidden="true"
                            >
                                <img
                                    className="unspoken-pillar__image-icon"
                                    src={elephantProfilesIcon}
                                    alt=""
                                />
                            </span>

                            <span className="unspoken-pillar__text">
                                Wild Elephants
                            </span>
                        </a>


                        {/* PEOPLE & COEXISTENCE */}
                        <a
                            className="unspoken-pillar"
                            href="#coexistence"
                        >
                            <span
                                className="unspoken-pillar__icon"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="16" cy="15" r="5" />
                                    <circle cx="32" cy="15" r="5" />
                                    <path d="M7 36c1-7 4-11 9-11s8 4 9 11" />
                                    <path d="M23 36c1-7 4-11 9-11s8 4 9 11" />
                                    <path d="M20 22c2 2 6 2 8 0" />
                                </svg>
                            </span>

                            <span className="unspoken-pillar__text">
                                People &amp; Coexistence
                            </span>
                        </a>


                        {/* HABITATS */}
                        <a
                            className="unspoken-pillar"
                            href="#habitats"
                        >
                            <span
                                className="unspoken-pillar__icon"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M24 39V18" />
                                    <path d="M24 20C16 20 10 16 8 8c8 0 14 3 16 12Z" />
                                    <path d="M24 26c8 0 14-4 16-12-8 0-14 3-16 12Z" />
                                    <path d="M17 39h14" />
                                </svg>
                            </span>

                            <span className="unspoken-pillar__text">
                                Habitats
                            </span>
                        </a>


                        {/* AWARENESS & ACTION */}
                        <a
                            className="unspoken-pillar"
                            href="#awareness-action"
                        >
                            <span
                                className="unspoken-pillar__icon"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M24 40S9 31 9 19c0-5.5 4-9 9-9 3 0 5.2 1.4 6 3.3C24.8 11.4 27 10 30 10c5 0 9 3.5 9 9 0 12-15 21-15 21Z" />
                                    <path d="M24 32V20" />
                                    <path d="M24 24c-4 0-7-2-8-6 4 0 7 1.5 8 6Z" />
                                    <path d="M24 27c4 0 7-2 8-6-4 0-7 1.5-8 6Z" />
                                </svg>
                            </span>

                            <span className="unspoken-pillar__text">
                                Awareness &amp; Action
                            </span>
                        </a>

                    </div>
                </section>


                {/* =========================================================
                    CURRENT ATTENTION
                ========================================================= */}
                <section
                    className="unspoken-attention"
                    id="current-attention"
                >
                    <div className="unspoken-attention__inner">

                        <div className="unspoken-section-heading">

                            <span className="unspoken-section-heading__eyebrow">
                                CURRENT ATTENTION
                            </span>

                            <h2 className="unspoken-section-heading__title">
                                Some stories need more than attention.
                            </h2>

                            <p className="unspoken-section-heading__description">
                                Four continuing challenges that shape the lives of
                                Sri Lanka’s elephants — and why attention must lead
                                to action.
                            </p>

                        </div>


                        <div className="unspoken-attention__grid">

                            {/* HAKKA PATAS */}
                            <article
                                className="unspoken-attention-card"
                                id="wild-elephants"
                            >
                                <div className="unspoken-attention-card__image-wrap">
                                    <img
                                        className="unspoken-attention-card__image"
                                        src={hakkaPatasImage}
                                        alt="Young elephant calf in a forest environment"
                                    />

                                    <span className="unspoken-attention-card__number">
                                        01
                                    </span>
                                </div>

                                <div className="unspoken-attention-card__content">
                                    <span className="unspoken-attention-card__label">
                                        CALVES AT RISK
                                    </span>

                                    <h3 className="unspoken-attention-card__title">
                                        A Childhood Cut Short
                                    </h3>

                                    <p className="unspoken-attention-card__text">
                                        Young elephants can become victims of
                                        hakka patas and other dangerous human-related
                                        threats, turning curiosity and hunger into
                                        life-changing harm.
                                    </p>

                                    <a
                                        className="unspoken-attention-card__link"
                                        href="#eth-daruwo"
                                    >
                                        <span>Understand the issue</span>
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </article>


                            {/* GUNSHOT CONFLICT */}
                            <article
                                className="unspoken-attention-card"
                                id="coexistence"
                            >
                                <div className="unspoken-attention-card__image-wrap">
                                    <img
                                        className="unspoken-attention-card__image"
                                        src={gunshotConflictImage}
                                        alt="Elephant standing in a forest clearing"
                                    />

                                    <span className="unspoken-attention-card__number">
                                        02
                                    </span>
                                </div>

                                <div className="unspoken-attention-card__content">
                                    <span className="unspoken-attention-card__label">
                                        HUMAN–ELEPHANT CONFLICT
                                    </span>

                                    <h3 className="unspoken-attention-card__title">
                                        Caught in the Line of Fire
                                    </h3>

                                    <p className="unspoken-attention-card__text">
                                        Conflict between people and elephants can
                                        leave animals injured by gunfire and other
                                        forms of violence, while communities face
                                        risks of their own.
                                    </p>

                                    <a
                                        className="unspoken-attention-card__link"
                                        href="#awareness-action"
                                    >
                                        <span>Explore coexistence</span>
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </article>


                            {/* HABITAT LOSS */}
                            <article
                                className="unspoken-attention-card"
                                id="habitats"
                            >
                                <div className="unspoken-attention-card__image-wrap">
                                    <img
                                        className="unspoken-attention-card__image"
                                        src={habitatLossImage}
                                        alt="Elephants moving through a changing landscape"
                                    />

                                    <span className="unspoken-attention-card__number">
                                        03
                                    </span>
                                </div>

                                <div className="unspoken-attention-card__content">
                                    <span className="unspoken-attention-card__label">
                                        HABITAT &amp; MOVEMENT
                                    </span>

                                    <h3 className="unspoken-attention-card__title">
                                        When Home Disappears
                                    </h3>

                                    <p className="unspoken-attention-card__text">
                                        Forest loss, fragmented habitats and
                                        development across elephant movement routes
                                        can leave herds with less space to live,
                                        feed and move safely.
                                    </p>

                                    <a
                                        className="unspoken-attention-card__link"
                                        href="#explore-themes"
                                    >
                                        <span>Why habitat matters</span>
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </article>


                            {/* WATER SCARCITY */}
                            <article className="unspoken-attention-card">
                                <div className="unspoken-attention-card__image-wrap">
                                    <img
                                        className="unspoken-attention-card__image"
                                        src={waterScarcityImage}
                                        alt="Elephants near a shrinking water source"
                                    />

                                    <span className="unspoken-attention-card__number">
                                        04
                                    </span>
                                </div>

                                <div className="unspoken-attention-card__content">
                                    <span className="unspoken-attention-card__label">
                                        WATER &amp; DROUGHT
                                    </span>

                                    <h3 className="unspoken-attention-card__title">
                                        When the Water Runs Dry
                                    </h3>

                                    <p className="unspoken-attention-card__text">
                                        During prolonged dry periods, shrinking water
                                        sources can push elephants farther in search
                                        of water and closer to human settlements.
                                    </p>

                                    <a
                                        className="unspoken-attention-card__link"
                                        href="#explore-themes"
                                    >
                                        <span>Explore the challenge</span>
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>


                {/* =========================================================
                    "ඒත් දරුවොනේ..." — CALF AWARENESS BANNER
                ========================================================= */}
                <section
                    className="unspoken-daruwo"
                    id="eth-daruwo"
                >
                    <div className="unspoken-daruwo__inner">

                        <div className="unspoken-daruwo__image-wrap">
                            <img
                                className="unspoken-daruwo__image"
                                src={ethDaruwoBanner}
                                alt="Mother elephant walking beside her young calf"
                            />
                        </div>

                        <div
                            className="unspoken-daruwo__overlay"
                            aria-hidden="true"
                        />

                        <div className="unspoken-daruwo__content">

                            <span className="unspoken-daruwo__eyebrow">
                                BEFORE ANOTHER STORY GOES UNSPOKEN
                            </span>

                            <h2 className="unspoken-daruwo__title">
                                ඒත් දරුවොනේ...
                            </h2>

                            <p className="unspoken-daruwo__subtitle">
                                Let them grow up.
                            </p>

                            <p className="unspoken-daruwo__description">
                                Some dangers can be prevented before a calf ever
                                becomes a story of loss. This initiative focuses
                                on awareness, prevention and the small choices
                                that can help protect young elephants.
                            </p>

                            <a
                                className="unspoken-daruwo__cta"
                                href="#awareness-action"
                            >
                                <span>Discover the initiative</span>

                                <span
                                    className="unspoken-daruwo__cta-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>

                        </div>
                    </div>
                </section>


                {/* =========================================================
                    EXPLORE STORIES BY THEME
                ========================================================= */}
                <section
                    className="unspoken-themes"
                    id="explore-themes"
                >
                    <div className="unspoken-themes__inner">

                        {/* SECTION HEADER */}
                        <div className="unspoken-themes__header">
                            <div>
                                <span className="unspoken-themes__eyebrow">
                                    EXPLORE STORIES BY THEME
                                </span>

                                <h2 className="unspoken-themes__heading">
                                    Different challenges - Connected stories.
                                </h2>
                            </div>

                            <a
                                className="unspoken-themes__view-all"
                                href="#latest-unspoken"
                            >
                                <span>View all stories</span>
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>


                        {/* THEME CARDS */}
                        <div className="unspoken-themes__grid">

                            {/* WILD LIVES */}
                            <a
                                className="unspoken-theme-card"
                                href="#latest-unspoken"
                            >
                                <img
                                    className="unspoken-theme-card__image"
                                    src={wildLivesImage}
                                    alt="Wild elephants moving through a forest"
                                />

                                <div
                                    className="unspoken-theme-card__overlay"
                                    aria-hidden="true"
                                />

                                <div className="unspoken-theme-card__content">
                                    <span className="unspoken-theme-card__number">
                                        01
                                    </span>

                                    <h3>Wild Lives</h3>

                                    <p>
                                        Stories from forests, migrations,
                                        encounters and the wild.
                                    </p>

                                    <span className="unspoken-theme-card__explore">
                                        <span>Explore</span>
                                        <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </a>


                            {/* LANDSCAPES */}
                            <a
                                className="unspoken-theme-card"
                                href="#latest-unspoken"
                            >
                                <img
                                    className="unspoken-theme-card__image"
                                    src={landscapesImage}
                                    alt="Sri Lankan elephant habitat and landscape"
                                />

                                <div
                                    className="unspoken-theme-card__overlay"
                                    aria-hidden="true"
                                />

                                <div className="unspoken-theme-card__content">
                                    <span className="unspoken-theme-card__number">
                                        02
                                    </span>

                                    <h3>Landscapes &amp; Habitats</h3>

                                    <p>
                                        The forests, rivers and routes
                                        that sustain their journeys.
                                    </p>

                                    <span className="unspoken-theme-card__explore">
                                        <span>Explore</span>
                                        <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </a>


                            {/* COEXISTENCE */}
                            <a
                                className="unspoken-theme-card"
                                href="#latest-unspoken"
                            >
                                <img
                                    className="unspoken-theme-card__image"
                                    src={coexistenceImage}
                                    alt="Elephants living near human communities"
                                />

                                <div
                                    className="unspoken-theme-card__overlay"
                                    aria-hidden="true"
                                />

                                <div className="unspoken-theme-card__content">
                                    <span className="unspoken-theme-card__number">
                                        03
                                    </span>

                                    <h3>People &amp; Coexistence</h3>

                                    <p>
                                        Shared landscapes, difficult realities
                                        and paths toward coexistence.
                                    </p>

                                    <span className="unspoken-theme-card__explore">
                                        <span>Explore</span>
                                        <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </a>


                            {/* HOPE & SOLUTIONS */}
                            <a
                                className="unspoken-theme-card"
                                href="#awareness-action"
                            >
                                <img
                                    className="unspoken-theme-card__image"
                                    src={hopeSolutionsImage}
                                    alt="Elephants representing conservation and hope"
                                />

                                <div
                                    className="unspoken-theme-card__overlay"
                                    aria-hidden="true"
                                />

                                <div className="unspoken-theme-card__content">
                                    <span className="unspoken-theme-card__number">
                                        04
                                    </span>

                                    <h3>Hope &amp; Solutions</h3>

                                    <p>
                                        Ideas, initiatives and people
                                        working toward a kinder future.
                                    </p>

                                    <span className="unspoken-theme-card__explore">
                                        <span>Explore</span>
                                        <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </a>

                        </div>
                    </div>
                </section>

                {/* =========================================================
    BE PART OF A KINDER TOMORROW — IMAGE BANNER
========================================================= */}
                <section
                    className="unspoken-action"
                    id="awareness-action"
                >
                    <div className="unspoken-action__inner">

                        {/* BACKGROUND IMAGE */}
                        <div className="unspoken-action__image-wrap">
                            <img
                                className="unspoken-action__image"
                                src={kinderTomorrowBanner}
                                alt="Elephant family walking beside a river at sunset"
                            />
                        </div>


                        {/* DARK GRADIENT OVERLAY */}
                        <div
                            className="unspoken-action__overlay"
                            aria-hidden="true"
                        />


                        {/* BANNER CONTENT */}
                        <div className="unspoken-action__content">

                            <span className="unspoken-action__eyebrow">
                                AWARENESS &amp; ACTION
                            </span>

                            <h2 className="unspoken-action__title">
                                Be Part of a
                                <br />
                                Kinder Tomorrow.
                            </h2>

                            <p className="unspoken-action__description">
                                Learn, share, support, and make more compassionate
                                choices — for elephants, for people, and for the
                                places we all call home.
                            </p>

                            <a
                                className="unspoken-action__cta"
                                href="#latest-unspoken"
                            >
                                <span>See How You Can Help</span>
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>


                        {/* ACTION LINKS */}
                        <div className="unspoken-action__list">

                            {/* LEARN & SHARE */}
                            <a
                                className="unspoken-action-item"
                                href="#latest-unspoken"
                            >
                                <span
                                    className="unspoken-action-item__icon"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M7 10h13c4 0 7 3 7 7v22c0-4-3-7-7-7H7V10Z" />
                                        <path d="M41 10H28c-1 0-2 .2-3 .7" />
                                        <path d="M27 39c0-4 3-7 7-7h7V10" />
                                    </svg>
                                </span>

                                <span className="unspoken-action-item__copy">
                                    <strong>Learn &amp; Share</strong>
                                    <small>
                                        Understand first. Share responsibly.
                                    </small>
                                </span>

                                <span
                                    className="unspoken-action-item__arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>


                            {/* SUPPORT RESPONSIBLE INITIATIVES */}
                            <a
                                className="unspoken-action-item"
                                href="#latest-unspoken"
                            >
                                <span
                                    className="unspoken-action-item__icon"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="24" cy="13" r="5" />
                                        <path d="M12 37c1-8 5-13 12-13s11 5 12 13" />
                                        <path d="M7 24c3 0 5 2 5 5" />
                                        <path d="M41 24c-3 0-5 2-5 5" />
                                    </svg>
                                </span>

                                <span className="unspoken-action-item__copy">
                                    <strong>
                                        Support Responsible Initiatives
                                    </strong>
                                    <small>
                                        Choose thoughtful, accountable conservation.
                                    </small>
                                </span>

                                <span
                                    className="unspoken-action-item__arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>


                            {/* BE A KIND VISITOR */}
                            <a
                                className="unspoken-action-item"
                                href="#latest-unspoken"
                            >
                                <span
                                    className="unspoken-action-item__icon"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M24 40S8 30 8 18c0-6 4-10 9-10 3.2 0 5.8 1.6 7 4 1.2-2.4 3.8-4 7-4 5 0 9 4 9 10 0 12-16 22-16 22Z" />
                                    </svg>
                                </span>

                                <span className="unspoken-action-item__copy">
                                    <strong>Be a Kind Visitor</strong>
                                    <small>
                                        Observe wildlife without disturbing it.
                                    </small>
                                </span>

                                <span
                                    className="unspoken-action-item__arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>


                            {/* RESPECT THEIR SPACE */}
                            <a
                                className="unspoken-action-item"
                                href="#latest-unspoken"
                            >
                                <span
                                    className="unspoken-action-item__icon"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M38 7C22 9 12 18 10 36c9-2 20-10 28-29Z" />
                                        <path d="M11 37c8-9 14-15 23-22" />
                                    </svg>
                                </span>

                                <span className="unspoken-action-item__copy">
                                    <strong>Respect Their Space</strong>
                                    <small>
                                        Give elephants room to live and move freely.
                                    </small>
                                </span>

                                <span
                                    className="unspoken-action-item__arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    LATEST FROM UNSPOKEN
                ========================================================= */}
                <section
                    className="unspoken-latest"
                    id="latest-unspoken"
                >
                    <div className="unspoken-latest__inner">

                        {/* SECTION HEADER */}
                        <div className="unspoken-latest__header">
                            <div>
                                <span className="unspoken-latest__eyebrow">
                                    LATEST FROM UNSPOKEN
                                </span>

                                <h2 className="unspoken-latest__heading">
                                    Stories worth listening to.
                                </h2>
                            </div>

                            <a
                                className="unspoken-latest__view-all"
                                href="#explore-themes"
                            >
                                <span>View all stories</span>
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>


                        {/* STORY CARDS */}
                        <div className="unspoken-latest__grid">

                            <article className="unspoken-latest-card">
                                <a
                                    className="unspoken-latest-card__image-link"
                                    href="#wild-elephants"
                                >
                                    <img
                                        className="unspoken-latest-card__image"
                                        src={wildLivesImage}
                                        alt="Wild elephant crossing through its habitat"
                                    />
                                </a>

                                <div className="unspoken-latest-card__content">
                                    <span className="unspoken-latest-card__meta">
                                        WILD LIVES
                                    </span>

                                    <h3>
                                        <a href="#wild-elephants">
                                            The Quiet Crossing
                                        </a>
                                    </h3>

                                    <p>
                                        Following the paths elephants still
                                        remember across a changing landscape.
                                    </p>

                                    <a
                                        className="unspoken-latest-card__read"
                                        href="#wild-elephants"
                                    >
                                        Read story <span>→</span>
                                    </a>
                                </div>
                            </article>


                            <article className="unspoken-latest-card">
                                <a
                                    className="unspoken-latest-card__image-link"
                                    href="#habitats"
                                >
                                    <img
                                        className="unspoken-latest-card__image"
                                        src={landscapesImage}
                                        alt="River and landscape within elephant habitat"
                                    />
                                </a>

                                <div className="unspoken-latest-card__content">
                                    <span className="unspoken-latest-card__meta">
                                        LANDSCAPES
                                    </span>

                                    <h3>
                                        <a href="#habitats">
                                            Rivers That Connect
                                        </a>
                                    </h3>

                                    <p>
                                        Water is more than a resource — it
                                        connects habitats, journeys and lives.
                                    </p>

                                    <a
                                        className="unspoken-latest-card__read"
                                        href="#habitats"
                                    >
                                        Read story <span>→</span>
                                    </a>
                                </div>
                            </article>


                            <article className="unspoken-latest-card">
                                <a
                                    className="unspoken-latest-card__image-link"
                                    href="#coexistence"
                                >
                                    <img
                                        className="unspoken-latest-card__image"
                                        src={coexistenceImage}
                                        alt="Elephants and human communities sharing a landscape"
                                    />
                                </a>

                                <div className="unspoken-latest-card__content">
                                    <span className="unspoken-latest-card__meta">
                                        COEXISTENCE
                                    </span>

                                    <h3>
                                        <a href="#coexistence">
                                            Living Together
                                        </a>
                                    </h3>

                                    <p>
                                        Coexistence asks what it means to
                                        make room for both people and elephants.
                                    </p>

                                    <a
                                        className="unspoken-latest-card__read"
                                        href="#coexistence"
                                    >
                                        Read story <span>→</span>
                                    </a>
                                </div>
                            </article>


                            <article className="unspoken-latest-card">
                                <a
                                    className="unspoken-latest-card__image-link"
                                    href="#awareness-action"
                                >
                                    <img
                                        className="unspoken-latest-card__image"
                                        src={hopeSolutionsImage}
                                        alt="Elephants in a landscape representing conservation hope"
                                    />
                                </a>

                                <div className="unspoken-latest-card__content">
                                    <span className="unspoken-latest-card__meta">
                                        HOPE &amp; SOLUTIONS
                                    </span>

                                    <h3>
                                        <a href="#awareness-action">
                                            More Than a Habitat
                                        </a>
                                    </h3>

                                    <p>
                                        Protecting elephants also means
                                        protecting the systems that sustain them.
                                    </p>

                                    <a
                                        className="unspoken-latest-card__read"
                                        href="#awareness-action"
                                    >
                                        Read story <span>→</span>
                                    </a>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>

            </main>


            {/* =========================================================
                FOOTER
            ========================================================= */}
            <HomeFooter variant="light" />

        </div>
    )
}

export default Unspoken