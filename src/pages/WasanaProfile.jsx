import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'


/* =========================================================
   01. SHARED ASSETS
   ========================================================= */

import elephantStatusIcon from '../assets/icons/elephant-index-all-icon.png'


/* =========================================================
   02. WASANA PROFILE ASSETS
   ========================================================= */

import wasanaHero from '../assets/images/wasana/wasana-profile-hero.png'
import wasanaStoryVideo from '../assets/images/wasana/wasana-profile-video.mp4'

import wasanaEyes from '../assets/images/wasana/wasana-feature-eyes.png'
import wasanaEars from '../assets/images/wasana/wasana-feature-ears.png'
import wasanaTrunk from '../assets/images/wasana/wasana-feature-trunk.png'
import wasanaTusks from '../assets/images/wasana/wasana-feature-tusks.png'
import wasanaSkin from '../assets/images/wasana/wasana-feature-skin.png'

import wasanaRoleSignificance from '../assets/images/wasana/wasana-role-significance.png'
import wasanaLocation from '../assets/images/wasana/wasana-location.png'


/* =========================================================
   03. CONTINUE EXPLORING ASSETS
   ========================================================= */

import sinhaRajaImage from '../assets/images/sinha-raja.png'
import pulathisiRajaImage from '../assets/images/pulathisi-raja.png'


function WasanaProfile() {
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
                        src={wasanaHero}
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

                            <span aria-hidden="true">
                                ›
                            </span>

                            <span>
                                Wasana
                            </span>
                        </nav>


                        {/* MAIN HERO CONTENT */}
                        <div className="sinha-profile-hero__content">

                            <p className="sinha-profile-hero__eyebrow">
                                SRI LANKAN TUSKER
                            </p>


                            <div className="sinha-profile-hero__title-group">

                                <h1>
                                    Wasana
                                </h1>

                                <span className="sinha-profile-hero__sinhala">
                                    වාසනා
                                </span>

                            </div>


                            <p className="sinha-profile-hero__description">
                                A familiar tusker of Ruhunu Maha Kataragama Dewalaya.
                                <br />
                                A life woven through devotion, tradition and resilience.
                            </p>


                            {/* -------------------------------------------------------
                                02.4 HERO ACTIONS
                                ------------------------------------------------------- */}
                            <div className="sinha-profile-hero__actions">

                                <a
                                    className="
                                        sinha-profile-hero__button
                                        sinha-profile-hero__button--primary
                                    "
                                    href="#overview"
                                >
                                    <span>
                                        Discover His Story
                                    </span>

                                    <span aria-hidden="true">
                                        ↓
                                    </span>
                                </a>


                                <button
                                    className="
                                        sinha-profile-hero__button
                                        sinha-profile-hero__button--secondary
                                    "
                                    type="button"
                                    aria-label="Add Wasana to favourites"
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

                                    <span>
                                        Add to Favourites
                                    </span>
                                </button>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================================
                    03. QUICK FACTS
                    ========================================================= */}
                <section
                    className="sinha-profile-facts"
                    aria-label="Wasana quick facts"
                >
                    <div className="sinha-profile-facts__inner">


                        {/* -------------------------------------------------------
                            03.1 STATUS
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
                            03.2 LOCATION
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
                                    Ruhunu Maha Kataragama Dewalaya
                                    <br />
                                    Kataragama, Sri Lanka
                                </span>

                            </div>

                        </div>


                        {/* -------------------------------------------------------
                            03.3 ESTIMATED AGE
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
                                    <rect
                                        x="3.5"
                                        y="5.5"
                                        width="17"
                                        height="15"
                                        rx="1.5"
                                    />

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
                            03.4 TUSK STATUS
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
                            03.5 KNOWN FOR
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
                                    Kataragama Traditions
                                    <br />
                                    Ceremonial Significance
                                </span>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    04. PROFILE CONTENT
                    ========================================================= */}
                <section
                    className="sinha-profile-content"
                    id="overview"
                >
                    <div className="sinha-profile-content__inner">


                        {/* -------------------------------------------------------
                            04.1 PROFILE SIDE NAVIGATION
                            ------------------------------------------------------- */}
                        <aside className="sinha-profile-sidebar">

                            <nav
                                className="sinha-profile-sidebar__nav"
                                aria-label="Wasana profile sections"
                            >
                                <a
                                    className="
                                        sinha-profile-sidebar__link
                                        sinha-profile-sidebar__link--active
                                    "
                                    href="#overview"
                                >
                                    <span>
                                        Overview
                                    </span>
                                </a>

                                <a
                                    className="sinha-profile-sidebar__link"
                                    href="#physical-features"
                                >
                                    <span>
                                        Physical Features
                                    </span>
                                </a>

                                <a
                                    className="sinha-profile-sidebar__link"
                                    href="#role-significance"
                                >
                                    <span>
                                        Role &amp; Significance
                                    </span>
                                </a>

                                <a
                                    className="sinha-profile-sidebar__link"
                                    href="#location"
                                >
                                    <span>
                                        Location
                                    </span>
                                </a>

                            </nav>


                            {/* -------------------------------------------------------
                                04.1.1 SIDEBAR BRAND NOTE
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
                            04.2 OVERVIEW STORY
                            ------------------------------------------------------- */}
                        <article className="sinha-profile-overview">

                            <p className="sinha-profile-overview__eyebrow">
                                HIS STORY
                            </p>

                            <h2 className="sinha-profile-overview__title">
                                A Life Woven Through
                                <br />
                                Devotion and Tradition
                            </h2>


                            {/* -------------------------------------------------------
                                04.2.1 LIFE STORY
                                ------------------------------------------------------- */}
                            <div className="sinha-profile-overview__story">

                                <p>
                                    Wasana’s story began far from the ceremonial
                                    traditions with which he would later become closely
                                    associated. He was found alone in the Anuradhapura
                                    region and was later cared for at the Pinnawala
                                    Elephant Orphanage.
                                </p>

                                <p>
                                    In 1978, a new chapter began when Wasana was
                                    entrusted to the Ruhunu Maha Kataragama Dewalaya.
                                    From there, his life became closely connected with
                                    Kataragama and its long-standing religious and
                                    cultural traditions.
                                </p>

                                <p>
                                    Over the years, Wasana grew into a familiar
                                    ceremonial tusker. His presence became associated
                                    not only with traditions in Kataragama, but also
                                    with important processions elsewhere in Sri Lanka,
                                    including ceremonial occasions connected with Kandy.
                                </p>

                                <p>
                                    One of the most difficult chapters of his story
                                    came on 18 July 1989. During a ceremonial occasion,
                                    Wasana was injured amid a sudden and dangerous
                                    disturbance. Despite the chaos around him, the
                                    episode became remembered as part of a remarkable
                                    chapter in his long ceremonial life.
                                </p>

                                <p>
                                    His journey has also carried the marks of time.
                                    Like many elephants whose lives extend across
                                    decades of human care and ceremonial tradition,
                                    changes to his body — including damage to one of
                                    his tusks — have become part of the visible story
                                    he carries today.
                                </p>

                                <p>
                                    Wasana’s story is therefore more than a record
                                    of processions and ceremonial appearances. It is
                                    the story of an individual elephant whose life
                                    has become intertwined with place, people,
                                    devotion and generations of living tradition.
                                </p>

                            </div>


                            {/* -------------------------------------------------------
                                04.2.2 STORY REFLECTION
                                ------------------------------------------------------- */}
                            <blockquote className="sinha-profile-overview__quote">

                                <span
                                    className="sinha-profile-overview__quote-mark"
                                    aria-hidden="true"
                                >
                                    “
                                </span>

                                <p>
                                    Across decades of change, Wasana’s story has
                                    remained intertwined with people, place and
                                    a living ceremonial tradition.
                                </p>

                            </blockquote>

                        </article>


                        {/* -------------------------------------------------------
                            04.3 STORY VIDEO
                            ------------------------------------------------------- */}
                        <div className="sinha-profile-media">

                            <div className="sinha-profile-media__heading">

                                <span className="sinha-profile-media__label">
                                    WATCH HIS STORY
                                </span>

                                <span
                                    className="sinha-profile-media__line"
                                    aria-hidden="true"
                                />

                            </div>


                            <div className="sinha-profile-media__video-frame">

                                <video
                                    className="sinha-profile-media__video"
                                    src={wasanaStoryVideo}
                                    controls
                                    playsInline
                                    preload="metadata"
                                    aria-label="Wasana story video"
                                />

                            </div>


                            <div className="sinha-profile-media__caption">

                                <span className="sinha-profile-media__caption-title">
                                    Wasana
                                </span>

                                <span className="sinha-profile-media__caption-text">
                                    A glimpse into his life and ceremonial journey.
                                </span>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    05. PHYSICAL FEATURES
                    ========================================================= */}
                <section
                    className="sinha-physical-features"
                    id="physical-features"
                >
                    <div className="sinha-physical-features__inner">


                        {/* -------------------------------------------------------
                            05.1 SECTION HEADER
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
                            05.2 FEATURE IMAGE GRID
                            ------------------------------------------------------- */}
                        <div className="sinha-physical-features__grid">


                            {/* ---------------------------------------------------
                                05.2.1 EYES
                                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">

                                    <img
                                        className="sinha-feature-card__image"
                                        src={wasanaEyes}
                                        alt="Close-up view of Wasana's eye"
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
                                        Calm, observant and framed by deeply
                                        textured skin.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                                05.2.2 EARS
                                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">

                                    <img
                                        className="sinha-feature-card__image"
                                        src={wasanaEars}
                                        alt="Close-up view of Wasana's ears"
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
                                        Broad ears marked by distinctive
                                        natural pigmentation.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                                05.2.3 TRUNK
                                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">

                                    <img
                                        className="sinha-feature-card__image"
                                        src={wasanaTrunk}
                                        alt="Close-up view of Wasana's trunk"
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
                                        Strong and expressive, with prominent
                                        mottled pigmentation.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                                05.2.4 TUSKS
                                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">

                                    <img
                                        className="sinha-feature-card__image"
                                        src={wasanaTusks}
                                        alt="Close-up view of Wasana's tusks"
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
                                        Prominent ivory tusks that form one
                                        of his defining features.
                                    </p>

                                </div>

                            </article>


                            {/* ---------------------------------------------------
                                05.2.5 SKIN
                                --------------------------------------------------- */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">

                                    <img
                                        className="sinha-feature-card__image"
                                        src={wasanaSkin}
                                        alt="Close-up view of Wasana's skin and pigmentation"
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
                                        Deeply textured skin with distinctive
                                        areas of mottled pigmentation.
                                    </p>

                                </div>

                            </article>

                        </div>


                        {/* -------------------------------------------------------
                            05.3 SECTION DIVIDER
                            ------------------------------------------------------- */}
                        <div
                            className="sinha-physical-features__divider"
                            aria-hidden="true"
                        />

                    </div>
                </section>


                {/* =========================================================
                    06. ROLE & SIGNIFICANCE
                    ========================================================= */}
                <section
                    className="sinha-role"
                    id="role-significance"
                >
                    <div className="sinha-role__inner">


                        {/* -------------------------------------------------------
                            06.1 SECTION INTRO
                            ------------------------------------------------------- */}
                        <div className="sinha-role__intro">

                            <p className="sinha-role__eyebrow">
                                ROLE &amp; SIGNIFICANCE
                            </p>

                            <h2 className="sinha-role__title">
                                A Presence Within a Sacred Tradition
                            </h2>

                        </div>


                        {/* -------------------------------------------------------
                            06.2 MAIN EDITORIAL LAYOUT
                            ------------------------------------------------------- */}
                        <div className="sinha-role__layout">


                            {/* ---------------------------------------------------
                                06.2.1 CEREMONIAL IMAGE
                                --------------------------------------------------- */}
                            <div className="sinha-role__visual">

                                <div className="sinha-role__image-frame">

                                    <img
                                        className="sinha-role__image"
                                        src={wasanaRoleSignificance}
                                        alt="Ceremonial procession representing Wasana's role and significance"
                                    />

                                </div>

                            </div>


                            {/* ---------------------------------------------------
                                06.2.2 ROLE CONTENT
                                --------------------------------------------------- */}
                            <div className="sinha-role__content">

                                <span className="sinha-role__number">
                                    01
                                </span>

                                <h3>
                                    Part of the
                                    <br />
                                    Kataragama Tradition
                                </h3>

                                <p>
                                    Wasana’s life has been closely associated
                                    with the Ruhunu Maha Kataragama Dewalaya,
                                    placing him within one of Sri Lanka’s
                                    long-standing religious and cultural
                                    traditions.
                                </p>


                                {/* ------------------------------------------------
                                    06.2.3 SECOND CONTENT BLOCK
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
                                        Across the years, Wasana has taken part
                                        in ceremonial processions and occasions
                                        connected with Kataragama, while his
                                        ceremonial journey has also extended
                                        beyond the sacred town.
                                    </p>

                                </div>


                                {/* ------------------------------------------------
                                    06.2.4 REFLECTION
                                    ------------------------------------------------ */}
                                <div className="sinha-role__reflection">

                                    <span
                                        className="sinha-role__reflection-line"
                                        aria-hidden="true"
                                    />

                                    <p>
                                        His significance lies not simply in
                                        ceremonial appearances, but in a long
                                        individual story connecting an elephant
                                        with generations of people, devotion
                                        and place.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* -------------------------------------------------------
                            06.3 SECTION DIVIDER
                            ------------------------------------------------------- */}
                        <div
                            className="sinha-role__divider"
                            aria-hidden="true"
                        />

                    </div>
                </section>


                {/* =========================================================
                    07. LOCATION
                    ========================================================= */}
                <section
                    className="sinha-location"
                    id="location"
                >
                    <div className="sinha-location__inner">


                        {/* -------------------------------------------------------
                            07.1 SECTION HEADER
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
                                Kataragama is the place most closely connected
                                with Wasana’s long ceremonial life and the
                                traditions that shaped his story.
                            </p>

                        </div>


                        {/* -------------------------------------------------------
                            07.2 LOCATION LAYOUT
                            ------------------------------------------------------- */}
                        <div className="sinha-location__layout">


                            {/* ---------------------------------------------------
                                07.2.1 LOCATION VISUAL
                                --------------------------------------------------- */}
                            <div className="sinha-location__visual">

                                <div className="sinha-location__map-frame">

                                    <img
                                        className="sinha-location__map-image"
                                        src={wasanaLocation}
                                        alt="Location visual showing Kataragama in Sri Lanka"
                                    />

                                </div>

                            </div>


                            {/* ---------------------------------------------------
                                07.2.2 LOCATION DETAILS
                                --------------------------------------------------- */}
                            <div className="sinha-location__details">


                                {/* LOCATION ICON */}
                                <div
                                    className="sinha-location__icon"
                                    title="Wasana's location"
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
                                        Kataragama
                                    </h3>

                                    <p>
                                        Ruhunu Maha Kataragama Dewalaya
                                        <br />
                                        Sri Lanka
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
                                        Since being entrusted to the Ruhunu Maha
                                        Kataragama Dewalaya in 1978, Wasana’s
                                        life has become deeply connected with
                                        Kataragama and its ceremonial traditions.
                                    </p>

                                </div>


                                {/* LOCATION META */}
                                <div className="sinha-location__meta">

                                    <div>

                                        <span>
                                            TOWN
                                        </span>

                                        <strong>
                                            Kataragama
                                        </strong>

                                    </div>

                                    <div>

                                        <span>
                                            REGION
                                        </span>

                                        <strong>
                                            Uva Province
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
                    08. CONTINUE EXPLORING
                    ========================================================= */}
                <section
                    className="sinha-explore"
                    aria-label="Continue exploring elephant stories"
                >
                    <div className="sinha-explore__inner">


                        {/* -------------------------------------------------------
                            08.1 SECTION LABEL
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
                            08.2 ELEPHANT LINKS
                            ------------------------------------------------------- */}
                        <div className="sinha-explore__stories">


                            {/* ---------------------------------------------------
                                08.2.1 SINHA RAJA
                                --------------------------------------------------- */}
                            <Link
                                className="sinha-explore-card"
                                to="/elephants/sinha-raja"
                                aria-label="View Sinha Raja's profile"
                            >

                                <div className="sinha-explore-card__image-frame">

                                    <img
                                        className="
                                            sinha-explore-card__image
                                            sinha-explore-card__image--wasana
                                        "
                                        src={sinhaRajaImage}
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
                                            Sinha Raja
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


                            {/* ---------------------------------------------------
                                08.2.2 PULATHISI RAJA
                                --------------------------------------------------- */}
                            <Link
                                className="sinha-explore-card"
                                to="/elephants/pulathisi-raja"
                                aria-label="View Pulathisi Raja's profile"
                            >

                                <div className="sinha-explore-card__image-frame">

                                    <img
                                        className="
                                            sinha-explore-card__image
                                            sinha-explore-card__image--pulathisi
                                        "
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
                            08.3 ELEPHANT DIRECTORY
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
                09. SHARED DALA FOOTER
                ========================================================= */}
            <HomeFooter />

        </>
    )
}


export default WasanaProfile