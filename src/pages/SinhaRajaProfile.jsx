import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'
import sinhaRajaHero from '../assets/images/sinha-raja/sinha-raja-profile-hero.png'

import './SinhaRajaProfile.css'

import elephantStatusIcon from '../assets/icons/elephant-index-all-icon.png'
import sinhaRajaStoryVideo from '../assets/images/sinha-raja/sinha-raja-story.mp4'

import sinhaRajaEyes from '../assets/images/sinha-raja/sinha-raja-eyes.png'
import sinhaRajaEars from '../assets/images/sinha-raja/sinha-raja-ears.png'
import sinhaRajaTrunk from '../assets/images/sinha-raja/sinha-raja-trunk.png'
import sinhaRajaTusks from '../assets/images/sinha-raja/sinha-raja-tusks.png'
import sinhaRajaSkin from '../assets/images/sinha-raja/sinha-raja-skin.png'
import sinhaRajaRoleSignificance from '../assets/images/sinha-raja/sinha-raja-role-significance.png'
import sinhaRajaLocationMap from '../assets/images/sinha-raja/sinha-raja-location-map.png'
import wasanaImage from '../assets/images/wasana.png'
import pulathisiRajaImage from '../assets/images/pulathisi-raja.png'


function SinhaRajaProfile() {
    return (
        <>
            {/* =========================================================
          01. SHARED NAVBAR
          ========================================================= */}
            <Navbar />


            <main className="sinha-profile">

                {/* =========================================================
            02. HERO
            ========================================================= */}
                <section
                    className="sinha-profile-hero"
                    id="profile-top"
                >

                    {/* -------------------------------------------------------
              02.1 HERO IMAGE
              ------------------------------------------------------- */}
                    <img
                        className="sinha-profile-hero__image"
                        src={sinhaRajaHero}
                        alt=""
                        aria-hidden="true"
                    />


                    {/* -------------------------------------------------------
              02.2 HERO READABILITY GRADIENT
              ------------------------------------------------------- */}
                    <div
                        className="sinha-profile-hero__overlay"
                        aria-hidden="true"
                    />


                    {/* -------------------------------------------------------
              02.3 HERO INNER CONTENT
              ------------------------------------------------------- */}
                    <div className="sinha-profile-hero__inner">

                        {/* BREADCRUMB */}
                        <nav
                            className="sinha-profile-hero__breadcrumb"
                            aria-label="Breadcrumb"
                        >
                            <Link to="/elephants">
                                Elephants
                            </Link>

                            <span aria-hidden="true">›</span>

                            <span>Sinha Raja</span>
                        </nav>


                        {/* MAIN HERO CONTENT */}
                        <div className="sinha-profile-hero__content">

                            <p className="sinha-profile-hero__eyebrow">
                                SRI LANKAN TUSKER
                            </p>


                            <div className="sinha-profile-hero__title-group">

                                <h1>
                                    Sinha Raja
                                </h1>

                                <span className="sinha-profile-hero__sinhala">
                                    සිංහ රාජා
                                </span>

                            </div>


                            <p className="sinha-profile-hero__description">
                                A familiar tusker of the Sri Dalada Maligawa.
                                <br />
                                A life shaped by resilience, tradition and care.
                            </p>


                            {/* HERO ACTIONS */}
                            <div className="sinha-profile-hero__actions">

                                <a
                                    className="
                    sinha-profile-hero__button
                    sinha-profile-hero__button--primary
                  "
                                    href="#overview"
                                >
                                    <span>Discover His Story</span>
                                    <span aria-hidden="true">↓</span>
                                </a>


                                <button
                                    className="
                    sinha-profile-hero__button
                    sinha-profile-hero__button--secondary
                  "
                                    type="button"
                                    aria-label="Add Sinha Raja to favourites"
                                    title="Add to favourites"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
                                    </svg>

                                    <span>Add to Favourites</span>
                                </button>

                            </div>

                        </div>

                    </div>

                </section>
                {/* =========================================================
            04. QUICK FACTS
            ========================================================= */}
                <section
                    className="sinha-profile-facts"
                    aria-label="Sinha Raja quick facts"
                >
                    <div className="sinha-profile-facts__inner">

                        {/* -------------------------------------------------------
                04.1 STATUS
                ------------------------------------------------------- */}
                        <div className="sinha-profile-fact">

                            <div
                                className="sinha-profile-fact__icon"
                                title="Status"
                            >
                                <img
                                    className="sinha-profile-fact__elephant-icon"
                                    src={elephantStatusIcon}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="sinha-profile-fact__text">
                                <span className="sinha-profile-fact__label">
                                    Status
                                </span>

                                <span className="sinha-profile-fact__value">
                                    Captive (Tame)
                                </span>
                            </div>

                        </div>


                        {/* -------------------------------------------------------
                04.2 LOCATION
                ------------------------------------------------------- */}
                        <div className="sinha-profile-fact">

                            <div
                                className="sinha-profile-fact__icon"
                                title="Location"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                            </div>

                            <div className="sinha-profile-fact__text">
                                <span className="sinha-profile-fact__label">
                                    Location
                                </span>

                                <span className="sinha-profile-fact__value">
                                    Athgala (ඇත්ගාල), Sri Dalada Maligawa, Kandy
                                </span>
                            </div>

                        </div>


                        {/* -------------------------------------------------------
                04.3 ESTIMATED AGE
                ------------------------------------------------------- */}
                        <div className="sinha-profile-fact">

                            <div
                                className="sinha-profile-fact__icon"
                                title="Estimated age"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" />
                                    <path d="M8 3v5M16 3v5M3.5 10h17" />
                                    <path d="M8 14h2M14 14h2M8 17h2M14 17h2" />
                                </svg>
                            </div>

                            <div className="sinha-profile-fact__text">
                                <span className="sinha-profile-fact__label">
                                    Estimated Age
                                </span>

                                <span className="sinha-profile-fact__value">
                                    —
                                </span>
                            </div>

                        </div>


                        {/* -------------------------------------------------------
                04.4 TUSK STATUS
                ------------------------------------------------------- */}
                        <div className="sinha-profile-fact">

                            <div
                                className="sinha-profile-fact__icon"
                                title="Tusk status"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18.5 3.5c.1 7.9-2.7 13.6-8 16.2-2.5 1.2-4.7.8-6-.6 4.4-.4 7.7-2.1 9.8-5.1 2-2.8 3.2-6.3 4.2-10.5Z" />
                                </svg>
                            </div>

                            <div className="sinha-profile-fact__text">
                                <span className="sinha-profile-fact__label">
                                    Tusk Status
                                </span>

                                <span className="sinha-profile-fact__value">
                                    Tusker
                                </span>
                            </div>

                        </div>


                        {/* -------------------------------------------------------
                04.5 KNOWN FOR
                ------------------------------------------------------- */}
                        <div className="sinha-profile-fact sinha-profile-fact--known">

                            <div
                                className="sinha-profile-fact__icon"
                                title="Known for"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="7" r="3" />
                                    <circle cx="5" cy="9" r="2.3" />
                                    <circle cx="19" cy="9" r="2.3" />

                                    <path d="M7.5 20v-3.5c0-2.7 2-4.5 4.5-4.5s4.5 1.8 4.5 4.5V20" />
                                    <path d="M2 20v-3c0-2.2 1.4-3.8 3.4-4" />
                                    <path d="M22 20v-3c0-2.2-1.4-3.8-3.4-4" />
                                </svg>
                            </div>

                            <div className="sinha-profile-fact__text">
                                <span className="sinha-profile-fact__label">
                                    Known For
                                </span>

                                <span className="sinha-profile-fact__value">
                                    Sri Dalada Maligawa
                                    <br />
                                    Ceremonial Significance
                                </span>
                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================================================
                    05. PROFILE CONTENT
                    ========================================================= */}
                <section
                    className="sinha-profile-content"
                    id="overview"
                >
                    <div className="sinha-profile-content__inner">


                        {/* -------------------------------------------------------
                            05.1 PROFILE SIDE NAVIGATION
                            ------------------------------------------------------- */}
                        <aside className="sinha-profile-sidebar">

                            <nav
                                className="sinha-profile-sidebar__nav"
                                aria-label="Sinha Raja profile sections"
                            >
                                <a
                                    className="sinha-profile-sidebar__link sinha-profile-sidebar__link--active"
                                    href="#overview"
                                >
                                    <span>Overview</span>
                                </a>

                                <a
                                    className="sinha-profile-sidebar__link"
                                    href="#physical-features"
                                >
                                    <span>Physical Features</span>
                                </a>

                                <a
                                    className="sinha-profile-sidebar__link"
                                    href="#role-significance"
                                >
                                    <span>Role &amp; Significance</span>
                                </a>

                                <a
                                    className="sinha-profile-sidebar__link"
                                    href="#location"
                                >
                                    <span>Location</span>
                                </a>
                            </nav>
                            {/* -------------------------------------------------------
    06.2.1 SIDEBAR BRAND NOTE
    ------------------------------------------------------- */}
                            <div className="sinha-profile-sidebar__brand-note">

                                <span
                                    className="sinha-profile-sidebar__brand-line"
                                    aria-hidden="true"
                                />

                                <img
                                    className="sinha-profile-sidebar__brand-elephant"
                                    src={elephantStatusIcon}
                                    alt=""
                                    aria-hidden="true"
                                />

                                <p>
                                    Every elephant
                                    <br />
                                    has a story.
                                </p>

                            </div>
                        </aside>


                        {/* -------------------------------------------------------
                            05.2 OVERVIEW STORY
                            ------------------------------------------------------- */}
                        <article className="sinha-profile-overview">

                            <p className="sinha-profile-overview__eyebrow">
                                HIS STORY
                            </p>

                            <h2 className="sinha-profile-overview__title">
                                A Life of Resilience
                                <br />
                                and Tradition
                            </h2>

                            {/* -------------------------------------------------------
    05.2.1 LIFE STORY
    ------------------------------------------------------- */}
                            <div className="sinha-profile-overview__story">

                                <p>
                                    Sinha Raja’s story began far from the ceremonial
                                    traditions that would later become part of his life.
                                    During the years of conflict in Sri Lanka, he was
                                    found in the Vavuniya region as a young calf,
                                    separated from his herd and injured.
                                </p>

                                <p>
                                    He was rescued by members of the Sri Lanka Army’s
                                    Sinha Regiment, who cared for him and helped him
                                    recover. That early chapter of his life would later
                                    be remembered in the name by which he became known —
                                    Sinha Raja.
                                </p>

                                <p>
                                    In 1994, Sinha Raja was entrusted to the Sri Dalada
                                    Maligawa in Kandy. There, his life entered a very
                                    different chapter as he became part of the Athgala
                                    (ඇත්ගාල), the elephant group associated with the
                                    Temple of the Sacred Tooth Relic.
                                </p>

                                <p>
                                    Over the years, he grew into a familiar and trusted
                                    tusker of the Maligawa. His calm temperament,
                                    obedience and experience allowed him to take part
                                    in important ceremonial occasions and in the
                                    traditions surrounding the Kandy Esala Perahera.
                                </p>

                                <p>
                                    Among the responsibilities entrusted to him was the
                                    sacred duty of carrying the casket during ceremonial
                                    processions — a role reserved for experienced and
                                    dependable tuskers.
                                </p>

                                <p>
                                    Yet Sinha Raja’s story is larger than his ceremonial
                                    role. From an injured calf separated from his herd
                                    to a tusker whose life became closely connected with
                                    one of Sri Lanka’s most enduring cultural traditions,
                                    his journey is one of survival, care and remarkable
                                    change.
                                </p>

                            </div>


                            {/* -------------------------------------------------------
05.2.2 STORY REFLECTION
------------------------------------------------------- */}
                            <blockquote className="sinha-profile-overview__quote">

                                <span
                                    className="sinha-profile-overview__quote-mark"
                                    aria-hidden="true"
                                >
                                    “
                                </span>

                                <p>
                                    From rescue to ritual, his life carries a story
                                    of resilience, care and a remarkable journey
                                    through time.
                                </p>

                            </blockquote>



                        </article>


                        {/* -------------------------------------------------------
                            05.3 STORY VIDEO
                            ------------------------------------------------------- */}
                        <div className="sinha-profile-media">

                            <div className="sinha-profile-media__heading">
                                <span className="sinha-profile-media__label">
                                    WATCH HIS STORY
                                </span>

                                <span className="sinha-profile-media__line" />
                            </div>


                            <div className="sinha-profile-media__video-frame">

                                <video
                                    className="sinha-profile-media__video"
                                    src={sinhaRajaStoryVideo}
                                    controls
                                    playsInline
                                    preload="metadata"
                                    aria-label="Sinha Raja story video"
                                />

                            </div>


                            <div className="sinha-profile-media__caption">

                                <span className="sinha-profile-media__caption-title">
                                    Sinha Raja
                                </span>

                                <span className="sinha-profile-media__caption-text">
                                    A glimpse into his life and legacy.
                                </span>

                            </div>

                        </div>


                    </div>
                </section>

                {/* =========================================================
    07. PHYSICAL FEATURES
    ========================================================= */}
                <section
                    className="sinha-physical-features"
                    id="physical-features"
                >
                    <div className="sinha-physical-features__inner">


                        {/* -------------------------------------------------------
            07.1 SECTION HEADER
            ------------------------------------------------------- */}
                        <div className="sinha-physical-features__header">

                            <div className="sinha-physical-features__heading">

                                <p className="sinha-physical-features__eyebrow">
                                    PHYSICAL FEATURES
                                </p>

                                <h2 className="sinha-physical-features__title">
                                    Details That Make Him Distinctive
                                </h2>

                            </div>


                            {/* SECTION NOTE */}
                            <div className="sinha-physical-features__note">

                                <span
                                    className="sinha-physical-features__note-line"
                                    aria-hidden="true"
                                />

                                <p>
                                    Every detail tells
                                    <br />
                                    part of his story.
                                </p>

                            </div>

                        </div>


                        {/* -------------------------------------------------------
            07.2 FEATURE IMAGE GRID
            ------------------------------------------------------- */}
                        <div className="sinha-physical-features__grid">


                            {/* ---------------------------------------------------
                07.2.1 EYES
                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={sinhaRajaEyes}
                                        alt="Close-up view of Sinha Raja's eye"
                                    />
                                </div>

                                <div className="sinha-feature-card__content">

                                    <span className="sinha-feature-card__number">
                                        01
                                    </span>

                                    <h3>
                                        Eyes
                                    </h3>

                                    <p>
                                        Calm, observant and expressive.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                07.2.2 EARS
                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={sinhaRajaEars}
                                        alt="Close-up view of Sinha Raja's ear"
                                    />
                                </div>

                                <div className="sinha-feature-card__content">

                                    <span className="sinha-feature-card__number">
                                        02
                                    </span>

                                    <h3>
                                        Ears
                                    </h3>

                                    <p>
                                        Broad ears with their own distinctive form.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                07.2.3 TRUNK
                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={sinhaRajaTrunk}
                                        alt="Close-up view of Sinha Raja's trunk"
                                    />
                                </div>

                                <div className="sinha-feature-card__content">

                                    <span className="sinha-feature-card__number">
                                        03
                                    </span>

                                    <h3>
                                        Trunk
                                    </h3>

                                    <p>
                                        Strong, sensitive and remarkably expressive.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                07.2.4 TUSKS
                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={sinhaRajaTusks}
                                        alt="Close-up view of Sinha Raja's tusks"
                                    />
                                </div>

                                <div className="sinha-feature-card__content">

                                    <span className="sinha-feature-card__number">
                                        04
                                    </span>

                                    <h3>
                                        Tusks
                                    </h3>

                                    <p>
                                        Long, prominent and defining features.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                07.2.5 SKIN
                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={sinhaRajaSkin}
                                        alt="Close-up view of Sinha Raja's skin"
                                    />
                                </div>

                                <div className="sinha-feature-card__content">

                                    <span className="sinha-feature-card__number">
                                        05
                                    </span>

                                    <h3>
                                        Skin
                                    </h3>

                                    <p>
                                        Rich texture and natural pigmentation.
                                    </p>

                                </div>

                            </article>


                        </div>


                        {/* -------------------------------------------------------
            07.3 SECTION DIVIDER
            ------------------------------------------------------- */}
                        <div
                            className="sinha-physical-features__divider"
                            aria-hidden="true"
                        />

                    </div>
                </section>

                {/* =========================================================
    08. ROLE & SIGNIFICANCE
    ========================================================= */}
                <section
                    className="sinha-role"
                    id="role-significance"
                >
                    <div className="sinha-role__inner">


                        {/* -------------------------------------------------------
            08.1 SECTION INTRO
            ------------------------------------------------------- */}
                        <div className="sinha-role__intro">

                            <p className="sinha-role__eyebrow">
                                ROLE &amp; SIGNIFICANCE
                            </p>

                            <h2 className="sinha-role__title">
                                A Place Within a Living Tradition
                            </h2>

                        </div>


                        {/* -------------------------------------------------------
            08.2 MAIN EDITORIAL LAYOUT
            ------------------------------------------------------- */}
                        <div className="sinha-role__layout">


                            {/* ---------------------------------------------------
                08.2.1 CEREMONIAL IMAGE
                --------------------------------------------------- */}
                            <div className="sinha-role__visual">

                                <div className="sinha-role__image-frame">
                                    <img
                                        className="sinha-role__image"
                                        src={sinhaRajaRoleSignificance}
                                        alt="Sinha Raja during a ceremonial occasion"
                                    />
                                </div>

                            </div>

                            {/* ---------------------------------------------------
                08.2.2 ROLE CONTENT
                --------------------------------------------------- */}
                            <div className="sinha-role__content">

                                <span className="sinha-role__number">
                                    01
                                </span>

                                <h3>
                                    Part of the
                                    <br />
                                    Sri Dalada Maligawa
                                </h3>

                                <p>
                                    Sinha Raja became part of the Athgala
                                    (ඇත්ගාල) of the Sri Dalada Maligawa,
                                    connecting his life with a long-standing
                                    cultural and ceremonial tradition in Kandy.
                                </p>


                                {/* ------------------------------------------------
                    08.2.3 SECOND CONTENT BLOCK
                    ------------------------------------------------ */}
                                <div className="sinha-role__detail">

                                    <span className="sinha-role__number">
                                        02
                                    </span>

                                    <h3>
                                        Ceremonial
                                        Responsibilities
                                    </h3>

                                    <p>
                                        Through the years, he took part in
                                        ceremonial occasions associated with
                                        the Maligawa and the traditions
                                        surrounding the Kandy Esala Perahera.
                                    </p>

                                </div>


                                {/* ------------------------------------------------
                    08.2.4 REFLECTION
                    ------------------------------------------------ */}
                                <div className="sinha-role__reflection">

                                    <span
                                        className="sinha-role__reflection-line"
                                        aria-hidden="true"
                                    />

                                    <p>
                                        His significance lives not only in the
                                        ceremonies he joined, but in the story
                                        that connects an individual elephant
                                        with people, place and tradition.
                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* -------------------------------------------------------
            08.4 SECTION DIVIDER
            ------------------------------------------------------- */}
                        <div
                            className="sinha-role__divider"
                            aria-hidden="true"
                        />

                    </div>
                </section>

                {/* =========================================================
    09. LOCATION
    ========================================================= */}
                <section
                    className="sinha-location"
                    id="location"
                >
                    <div className="sinha-location__inner">


                        {/* -------------------------------------------------------
            09.1 SECTION HEADER
            ------------------------------------------------------- */}
                        <div className="sinha-location__header">

                            <div>
                                <p className="sinha-location__eyebrow">
                                    LOCATION
                                </p>

                                <h2 className="sinha-location__title">
                                    Where His Story Lives
                                </h2>
                            </div>

                            <p className="sinha-location__intro">
                                A place closely connected with the later chapters
                                of Sinha Raja’s life and his ceremonial journey.
                            </p>
                        </div>


                        {/* -------------------------------------------------------
            09.2 LOCATION LAYOUT
            ------------------------------------------------------- */}
                        <div className="sinha-location__layout">


                            {/* ---------------------------------------------------
    09.2.1 MAP VISUAL
    --------------------------------------------------- */}
                            <div className="sinha-location__visual">

                                <div className="sinha-location__map-frame">
                                    <img
                                        className="sinha-location__map-image"
                                        src={sinhaRajaLocationMap}
                                        alt="Map showing Sinha Raja's location at Sri Dalada Maligawa in Kandy, Sri Lanka"
                                    />
                                </div>

                            </div>

                            {/* ---------------------------------------------------
                09.2.2 LOCATION DETAILS
                --------------------------------------------------- */}
                            <div className="sinha-location__details">


                                {/* LOCATION ICON */}
                                <div
                                    className="sinha-location__icon"
                                    title="Sinha Raja's location"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                                        <circle cx="12" cy="10" r="2.5" />
                                    </svg>
                                </div>


                                {/* PRIMARY LOCATION */}
                                <div className="sinha-location__primary">

                                    <span className="sinha-location__label">
                                        CURRENT LOCATION
                                    </span>

                                    <h3>
                                        Athgala (ඇත්ගාල)
                                    </h3>

                                    <p>
                                        Sri Dalada Maligawa
                                        <br />
                                        Kandy, Sri Lanka
                                    </p>

                                </div>


                                {/* LOCATION DIVIDER */}
                                <div
                                    className="sinha-location__details-divider"
                                    aria-hidden="true"
                                />


                                {/* LOCATION STORY */}
                                <div className="sinha-location__story">

                                    <span className="sinha-location__label">
                                        PLACE &amp; STORY
                                    </span>

                                    <p>
                                        After being entrusted to the Sri Dalada Maligawa
                                        in 1994, Sinha Raja became part of the Athgala
                                        and a familiar presence within its ceremonial
                                        traditions.
                                    </p>

                                </div>


                                {/* LOCATION META */}
                                <div className="sinha-location__meta">

                                    <div>
                                        <span>
                                            CITY
                                        </span>

                                        <strong>
                                            Kandy
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            REGION
                                        </span>

                                        <strong>
                                            Central Province
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            COUNTRY
                                        </span>

                                        <strong>
                                            Sri Lanka
                                        </strong>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================================================
    10. CONTINUE EXPLORING
    ========================================================= */}
                <section
                    className="sinha-explore"
                    aria-label="Continue exploring elephant stories"
                >
                    <div className="sinha-explore__inner">

                        {/* -------------------------------------------------------
            10.1 SECTION LABEL
            ------------------------------------------------------- */}
                        <div className="sinha-explore__label">

                            <span className="sinha-explore__eyebrow">
                                CONTINUE EXPLORING
                            </span>

                            <span
                                className="sinha-explore__label-line"
                                aria-hidden="true"
                            />

                        </div>


                        {/* -------------------------------------------------------
            10.2 ELEPHANT LINKS
            ------------------------------------------------------- */}
                        <div className="sinha-explore__stories">


                            {/* WASANA */}
                            <Link
                                className="sinha-explore-card"
                                to="/elephants/wasana"
                                aria-label="View Wasana's profile"
                            >
                                <div className="sinha-explore-card__image-frame">

                                    <img
                                        className="sinha-explore-card__image sinha-explore-card__image--wasana"
                                        src={wasanaImage}
                                        alt=""
                                        aria-hidden="true"
                                    />

                                </div>


                                <div className="sinha-explore-card__content">

                                    <span className="sinha-explore-card__type">
                                        SRI LANKAN TUSKER
                                    </span>

                                    <div className="sinha-explore-card__name-row">

                                        <h3>
                                            Wasana
                                        </h3>

                                        <span
                                            className="sinha-explore-card__arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                    </div>

                                </div>
                            </Link>


                            {/* DIVIDER */}
                            <span
                                className="sinha-explore__divider"
                                aria-hidden="true"
                            />


                            {/* PULATHISI RAJA */}
                            <Link
                                className="sinha-explore-card"
                                to="/elephants/pulathisi-raja"
                                aria-label="View Pulathisi Raja's profile"
                            >
                                <div className="sinha-explore-card__image-frame">

                                    <img
                                        className="sinha-explore-card__image sinha-explore-card__image--pulathisi"
                                        src={pulathisiRajaImage}
                                        alt=""
                                        aria-hidden="true"
                                    />

                                </div>


                                <div className="sinha-explore-card__content">

                                    <span className="sinha-explore-card__type">
                                        SRI LANKAN TUSKER
                                    </span>

                                    <div className="sinha-explore-card__name-row">

                                        <h3>
                                            Pulathisi Raja
                                        </h3>

                                        <span
                                            className="sinha-explore-card__arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                    </div>

                                </div>
                            </Link>

                        </div>


                        {/* -------------------------------------------------------
            10.3 ELEPHANT DIRECTORY
            ------------------------------------------------------- */}
                        <div className="sinha-explore__directory">

                            <Link
                                className="sinha-explore__directory-link"
                                to="/elephants"
                            >
                                <span>
                                    Explore All Elephants
                                </span>

                                <span aria-hidden="true">
                                    →
                                </span>
                            </Link>

                        </div>

                    </div>
                </section>
            </main>
             {/* =========================================================
            SHARED DALA FOOTER
            ========================================================= */}
        <HomeFooter />

        </>
    )
}

export default SinhaRajaProfile