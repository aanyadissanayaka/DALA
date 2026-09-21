import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import './SinhaRajaProfile.css'


/* =========================================================
   01. SHARED ASSETS
   ========================================================= */

import elephantStatusIcon from '../assets/icons/elephant-index-all-icon.png'


/* =========================================================
   02. PULATHISI RAJA PROFILE ASSETS
   ========================================================= */

import pulathisiHero from '../assets/images/pulathisi-raja/pulathisi-raja-profile-hero.png'
import pulathisiStoryVideo from '../assets/images/pulathisi-raja/pulathisi-raja-profile-video.mp4'

import pulathisiEyes from '../assets/images/pulathisi-raja/pulathisi-raja-feature-eyes.png'
import pulathisiEars from '../assets/images/pulathisi-raja/pulathisi-raja-feature-ears.png'
import pulathisiTrunk from '../assets/images/pulathisi-raja/pulathisi-raja-feature-trunk.png'
import pulathisiTusks from '../assets/images/pulathisi-raja/pulathisi-raja-feature-tusks.png'
import pulathisiSkin from '../assets/images/pulathisi-raja/pulathisi-raja-feature-skin.png'

import pulathisiRoleSignificance from '../assets/images/pulathisi-raja/pulathisi-raja-role-significance.png'
import pulathisiLocation from '../assets/images/pulathisi-raja/pulathisi-raja-location.png'


/* =========================================================
   03. CONTINUE EXPLORING ASSETS
   ========================================================= */

import sinhaRajaImage from '../assets/images/sinha-raja.png'
import wasanaImage from '../assets/images/wasana.png'


function PulathisiRajaProfile() {
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
                        src={pulathisiHero}
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
                                Pulathisi Raja
                            </span>
                        </nav>


                        {/* MAIN HERO CONTENT */}
                        <div className="sinha-profile-hero__content">

                            <p className="sinha-profile-hero__eyebrow">
                                SRI LANKAN TUSKER
                            </p>


                            <div className="sinha-profile-hero__title-group">

                                <h1>
                                    Pulathisi Raja
                                </h1>

                                <span className="sinha-profile-hero__sinhala">
                                    පුලතිසි රාජා
                                </span>

                            </div>


                            <p className="sinha-profile-hero__description">
                                A tusker of the Sri Dalada Maligawa elephant group.
                                <br />
                                From Myanmar to Kandy, a new chapter in a living tradition.
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
                                    aria-label="Add Pulathisi Raja to favourites"
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
                    aria-label="Pulathisi Raja quick facts"
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
                                    Sri Dalada Maligawa
                                    <br />
                                    Kandy, Sri Lanka
                                </span>

                            </div>

                        </div>


                        {/* -------------------------------------------------------
                            03.3 ARRIVAL IN SRI LANKA
                            ------------------------------------------------------- */}
                        <div className="sinha-profile-fact">

                            <div
                                className="sinha-profile-fact__icon"
                                title="Arrival in Sri Lanka"
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
                                    Arrived in Sri Lanka
                                </span>

                                <span className="sinha-profile-fact__value">
                                    2017
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
                                    Dalada Traditions
                                    <br />
                                    Sacred Casket Duty
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
                                aria-label="Pulathisi Raja profile sections"
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
                                From Myanmar
                                <br />
                                to the Heart of Kandy
                            </h2>


                            {/* -------------------------------------------------------
                                04.2.1 LIFE STORY
                                ------------------------------------------------------- */}
                            <div className="sinha-profile-overview__story">

                                <p>
                                    Pulathisi Raja’s story at the Sri Dalada
                                    Maligawa began in 2017, when a tusker gifted
                                    to Sri Lanka by the Government of Myanmar
                                    was formally entrusted to the Diyawadana
                                    Nilame of the Sri Dalada Maligawa.
                                </p>

                                <p>
                                    He was given the name Pulathisi Raja and
                                    became part of the Maligawa elephant group
                                    in Kandy. His arrival added a new chapter
                                    to a ceremonial tradition carried forward
                                    across generations.
                                </p>

                                <p>
                                    In the years that followed, Pulathisi Raja
                                    became increasingly visible in the Kandy
                                    Esala Perahera, taking part alongside other
                                    well-known tuskers of the Sri Dalada
                                    Maligawa.
                                </p>

                                <p>
                                    During the 2025 Esala Perahera, he was
                                    documented accompanying the tusker carrying
                                    the Sacred Casket during major processions,
                                    reflecting his growing place within the
                                    ceremonial elephant group.
                                </p>

                                <p>
                                    A major milestone came on 21 August 2026.
                                    During the Fourth Kumbal Perahera, Pulathisi
                                    Raja carried the Sacred Casket through the
                                    streets of Kandy.
                                </p>

                                <p>
                                    His journey from Myanmar to the Sri Dalada
                                    Maligawa is therefore not only a story of
                                    arrival. It is a continuing story of an
                                    individual tusker becoming part of one of
                                    Sri Lanka’s most recognised living
                                    ceremonial traditions.
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
                                    From Myanmar to Kandy, Pulathisi Raja’s
                                    journey continues within a tradition shaped
                                    by ceremony, responsibility and time.
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
                                    src={pulathisiStoryVideo}
                                    controls
                                    playsInline
                                    preload="metadata"
                                    aria-label="Pulathisi Raja story video"
                                />

                            </div>


                            <div className="sinha-profile-media__caption">

                                <span className="sinha-profile-media__caption-title">
                                    Pulathisi Raja
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


                            {/* EYES */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={pulathisiEyes}
                                        alt="Close-up view of Pulathisi Raja's eyes"
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
                                        Calm, observant eyes framed by deeply
                                        textured skin.
                                    </p>

                                </div>

                            </article>


                            {/* EARS */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={pulathisiEars}
                                        alt="Close-up view of Pulathisi Raja's ears"
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
                                        Broad ears carrying distinctive areas
                                        of natural pigmentation.
                                    </p>

                                </div>

                            </article>


                            {/* TRUNK */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={pulathisiTrunk}
                                        alt="Close-up view of Pulathisi Raja's trunk"
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
                                        A powerful trunk marked by rich texture
                                        and mottled pigmentation.
                                    </p>

                                </div>

                            </article>


                            {/* TUSKS */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={pulathisiTusks}
                                        alt="Close-up view of Pulathisi Raja's tusks"
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
                                        Long ivory tusks forming one of his
                                        most recognisable physical features.
                                    </p>

                                </div>

                            </article>


                            {/* SKIN */}
                            <article className="sinha-feature-card">

                                <div className="sinha-feature-card__image-frame">
                                    <img
                                        className="sinha-feature-card__image"
                                        src={pulathisiSkin}
                                        alt="Close-up view of Pulathisi Raja's skin"
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
                                        Deep wrinkles, coarse texture and
                                        naturally mottled areas define his skin.
                                    </p>

                                </div>

                            </article>

                        </div>


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
                                A Growing Role in a Sacred Tradition
                            </h2>

                        </div>


                        {/* -------------------------------------------------------
                            06.2 MAIN EDITORIAL LAYOUT
                            ------------------------------------------------------- */}
                        <div className="sinha-role__layout">


                            {/* CEREMONIAL IMAGE */}
                            <div className="sinha-role__visual">

                                <div className="sinha-role__image-frame">

                                    <img
                                        className="sinha-role__image"
                                        src={pulathisiRoleSignificance}
                                        alt="Pulathisi Raja participating in a ceremonial procession"
                                    />

                                </div>

                            </div>


                            {/* ROLE CONTENT */}
                            <div className="sinha-role__content">

                                <span className="sinha-role__number">
                                    01
                                </span>

                                <h3>
                                    Part of the
                                    <br />
                                    Dalada Tradition
                                </h3>

                                <p>
                                    As a tusker of the Sri Dalada Maligawa
                                    elephant group, Pulathisi Raja participates
                                    in ceremonial duties associated with the
                                    Kandy Esala Perahera and the traditions
                                    surrounding the Sacred Tooth Relic.
                                </p>


                                <div className="sinha-role__detail">

                                    <span className="sinha-role__number">
                                        02
                                    </span>

                                    <h3>
                                        Sacred Casket
                                        Responsibility
                                    </h3>

                                    <p>
                                        On 21 August 2026, Pulathisi Raja
                                        carried the Sacred Casket during the
                                        Fourth Kumbal Perahera, marking an
                                        important milestone in his ceremonial
                                        journey at the Sri Dalada Maligawa.
                                    </p>

                                </div>


                                <div className="sinha-role__reflection">

                                    <span
                                        className="sinha-role__reflection-line"
                                        aria-hidden="true"
                                    />

                                    <p>
                                        His story reflects how a tusker who
                                        arrived from Myanmar became part of
                                        Kandy’s living ceremonial heritage,
                                        carrying responsibilities that continue
                                        to evolve with time.
                                    </p>

                                </div>

                            </div>

                        </div>


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
                                Kandy and the Sri Dalada Maligawa form the
                                centre of Pulathisi Raja’s ceremonial life
                                in Sri Lanka.
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
                                        src={pulathisiLocation}
                                        alt="Location visual showing Kandy in Sri Lanka"
                                    />

                                </div>

                            </div>


                            {/* ---------------------------------------------------
                                07.2.2 LOCATION DETAILS
                                --------------------------------------------------- */}
                            <div className="sinha-location__details">


                                <div
                                    className="sinha-location__icon"
                                    title="Pulathisi Raja's location"
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
                                        Kandy
                                    </h3>

                                    <p>
                                        Sri Dalada Maligawa
                                        <br />
                                        Sri Lanka
                                    </p>

                                </div>


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
                                        Since being entrusted to the Sri Dalada
                                        Maligawa in 2017, Kandy has become the
                                        centre of Pulathisi Raja’s life within
                                        Sri Lanka’s Dalada ceremonial tradition.
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


                            {/* SINHA RAJA */}
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


                            {/* WASANA */}
                            <Link
                                className="sinha-explore-card"
                                to="/elephants/wasana"
                                aria-label="View Wasana's profile"
                            >

                                <div className="sinha-explore-card__image-frame">

                                    <img
                                        className="
                                            sinha-explore-card__image
                                            sinha-explore-card__image--wasana
                                        "
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


export default PulathisiRajaProfile