import { useRef, useState } from 'react'

import Navbar from '../components/Navbar'
import HomeFooter from '../components/HomeFooter'

import heroImage from '../assets/images/home-hero-elephants.webp'
import elephantProfilesIcon from '../assets/icons/icon-elephant-profiles.png'
import realStoriesIcon from '../assets/icons/icon-real-stories.png'
import coexistenceIcon from '../assets/icons/icon-coexistence.png'
import habitatsIcon from '../assets/icons/icon-habitats.png'
import communitiesIcon from '../assets/icons/icon-communities.png'
import purposeHerd from '../assets/images/home-purpose-herd.webp'
import voicesBg from '../assets/images/home-voices-bg.webp'
import lowRumbleImage from '../assets/images/voice-low-rumble.webp'
import trumpetImage from '../assets/images/voice-trumpet.webp'
import roarImage from '../assets/images/voice-roar.webp'
import breathingImage from '../assets/images/voice-breathing.webp'
import archiveEye from '../assets/images/archive-eye.webp'
import archiveHerd from '../assets/images/archive-herd.webp'
import archiveForest from '../assets/images/archive-forest.webp'
import archiveFoot from '../assets/images/archive-foot.webp'
import kinderTomorrow from '../assets/images/home-kinder-tomorrow.webp'
import learnShareIcon from '../assets/icons/icon-learn-share.png'
import supportIcon from '../assets/icons/icon-support-initiatives.png'
import kindVisitorIcon from '../assets/icons/icon-kind-visitor.png'
import respectSpaceIcon from '../assets/icons/icon-respect-space.png'

import lowRumbleAudio from '../assets/audio/elephant-low-rumble.ogg'
import trumpetAudio from '../assets/audio/elephant-trumpet.ogg'
import roarAudio from '../assets/audio/elephant-roar.mp3'
import breathingAudio from '../assets/audio/elephant-breathing-snort.wav'

const wave = [
  8, 15, 22, 11, 25, 18, 10, 20, 27, 13, 18, 24,
  9, 16, 22, 12, 25, 18, 8, 20, 15, 24, 11, 17,
]

const sounds = [
  {
    title: 'Low Rumble',
    description: 'Deep communication across distances',
    duration: '0:28',
    image: lowRumbleImage,
    audio: lowRumbleAudio,
  },
  {
    title: 'Trumpet Call',
    description: 'A powerful expression',
    duration: '0:18',
    image: trumpetImage,
    audio: trumpetAudio,
  },
  {
    title: 'Roar',
    description: 'A powerful voice from the wild',
    duration: '0:16',
    image: roarImage,
    audio: roarAudio,
    roar: true,
  },
  {
    title: 'Breathing & Snort',
    description: 'The quiet moments too',
    duration: '0:20',
    image: breathingImage,
    audio: breathingAudio,
  },
]

function Home() {
  const [playingSound, setPlayingSound] = useState(null)
  const audioRef = useRef(null)

  const handleSoundPlay = (sound) => {
    if (playingSound === sound.title && audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
      setPlayingSound(null)
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    const audio = new Audio(sound.audio)
    audioRef.current = audio

    audio
      .play()
      .then(() => {
        setPlayingSound(sound.title)
      })
      .catch((error) => {
        console.error('Audio playback failed:', error)
        audioRef.current = null
        setPlayingSound(null)
      })

    audio.onended = () => {
      if (audioRef.current === audio) {
        audioRef.current = null
        setPlayingSound(null)
      }
    }
  }

  return (
    <>
      <Navbar />

      <main>
        <section
          className="hero"
          id="home"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero__overlay" />

          <div className="hero__content">
            <h1 className="hero__title">
              Different
              <br />
              Lives.
              <br />
              A Shared
              <br />
              Tomorrow.
            </h1>

            <div className="hero__line" />

            <p className="hero__description">
              Every elephant has a story.
              <br />
              Every story deserves to be heard.
            </p>

            <a className="hero__button" href="#elephants">
              <span>Explore Their World</span>
              <span>→</span>
            </a>
          </div>
        </section>

        <section
          className="feature-strip"
          aria-label="Explore DALA"
        >
          <div className="feature-strip__inner">
            {[
              [
                elephantProfilesIcon,
                'Elephant Profiles',
                'Discover their unique lives',
                '#elephants',
              ],
              [
                realStoriesIcon,
                'Real Stories',
                'Voices from the ground',
                '#stories',
              ],
              [
                coexistenceIcon,
                'Conservation & Coexistence',
                'Ideas, initiatives, and solutions',
                '#conservation',
              ],
              [
                habitatsIcon,
                'Habitats',
                'Forests, rivers, and landscapes',
                '#habitats',
              ],
              [
                communitiesIcon,
                'People & Communities',
                'Shared futures',
                '#communities',
              ],
            ].map(([icon, title, text, href]) => (
              <a
                className="feature-item"
                href={href}
                key={title}
              >
                <div className="feature-item__icon">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div className="feature-item__text">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="purpose-section" id="purpose">
          <div className="purpose-section__inner">
            <div className="purpose-section__content">
              <div className="purpose-section__eyebrow">
                <span className="purpose-section__line" />
                <span>OUR PURPOSE</span>
              </div>

              <h2>
                A Kinder
                <br />
                Tomorrow.
              </h2>

              <p>
                DALA shares the stories of Sri Lanka&apos;s elephants —
                their beauty, their challenges, and the people who stand
                with them. Through knowledge, compassion, and responsible
                choices, we can create a future where elephants and people
                thrive together.
              </p>

              <a
                href="#about"
                className="purpose-section__button"
              >
                <span>Learn More About DALA</span>
                <span>→</span>
              </a>
            </div>

            <div className="purpose-section__image">
              <img
                src={purposeHerd}
                alt="A herd of elephants in the Sri Lankan landscape"
              />
            </div>
          </div>
        </section>

        <section
          className="voices-section"
          id="stories"
          style={{ '--voices-bg': `url(${voicesBg})` }}
        >
          <div className="voices-section__inner">
            <div className="voices-section__intro">
              <div className="voices-section__eyebrow">
                <span className="voices-section__line" />
                <span>LISTEN TO THEM</span>
              </div>

              <h2>
                Voices of
                <br />
                a Wilder World.
              </h2>

              <p>
                Every sound has a story. Explore real elephant sounds
                and hear a glimpse of their world.
              </p>

              <a
                className="voices-section__button"
                href="#sounds"
              >
                <span>Listen to the Sounds</span>
                <span>→</span>
              </a>
            </div>

            <div className="voices-section__cards">
              {sounds.map((sound) => (
                <article
                  className={`sound-card${
                    sound.roar ? ' sound-card--roar' : ''
                  }`}
                  key={sound.title}
                >
                  <div className="sound-card__image-wrap">
                    <img
                      className="sound-card__image"
                      src={sound.image}
                      alt=""
                    />
                    <div className="sound-card__shade" />
                  </div>

                  <div className="sound-card__content">
                    <div className="sound-card__player">
                      <button
                        className="sound-card__play"
                        type="button"
                        onClick={() => handleSoundPlay(sound)}
                        aria-label={
                          playingSound === sound.title
                            ? `Pause ${sound.title}`
                            : `Play ${sound.title}`
                        }
                        title={
                          playingSound === sound.title
                            ? `Pause ${sound.title}`
                            : `Play ${sound.title}`
                        }
                      >
                        {playingSound === sound.title ? '❚❚' : '▶'}
                      </button>

                      <div
                        className="sound-card__wave"
                        aria-hidden="true"
                      >
                        {wave.map((height, index) => (
                          <span
                            key={index}
                            style={{ height: `${height}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="sound-card__meta">
                      <div>
                        <h3>{sound.title}</h3>
                        <p>{sound.description}</p>
                      </div>

                      <span className="sound-card__duration">
                        {sound.duration}
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              <a
                className="voices-section__more"
                href="#sounds"
              >
                Explore More Sounds <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="archive-section" id="archive">
          <div className="archive-section__inner">
            <div>
              <div className="archive-section__eyebrow">
                <span className="archive-section__line" />
                <span>VISUAL ARCHIVE</span>
              </div>

              <h2>
                Moments
                <br />
                That Matter.
              </h2>

              <p>
                A glimpse into their world — wild landscapes, quiet
                encounters, and the details that tell greater stories.
              </p>

              <a
                className="archive-section__button"
                href="#archive"
              >
                <span>Explore the Archive</span>
                <span>→</span>
              </a>
            </div>

            <div className="archive-section__grid">
              <img
                src={archiveEye}
                alt="Elephant eye detail"
              />
              <img
                src={archiveHerd}
                alt="Elephants in a Sri Lankan landscape"
              />
              <img
                src={archiveForest}
                alt="Elephants in a forest landscape"
              />
              <img
                src={archiveFoot}
                alt="Elephant foot detail"
              />
            </div>
          </div>
        </section>

        <section
          className="kind-section"
          id="kind-tomorrow"
          style={{ backgroundImage: `url(${kinderTomorrow})` }}
        >
          <div className="kind-section__inner">
            <div aria-hidden="true" />

            <div className="kind-section__content">
              <h2>Be Part of a Kinder Tomorrow.</h2>

              <p>
                Learn, share, support, and make more compassionate
                choices — for elephants, for people, for the places
                we all call home.
              </p>

              <a
                className="kind-section__button"
                href="#discover"
              >
                <span>See How You Can Help</span>
                <span>→</span>
              </a>
            </div>

            <div className="kind-section__links">
              {[
                [learnShareIcon, 'Learn & Share'],
                [supportIcon, 'Support Responsible Initiatives'],
                [kindVisitorIcon, 'Be a Kind Visitor'],
                [respectSpaceIcon, 'Respect Their Space'],
              ].map(([icon, label]) => (
                <a
                  className="kind-link"
                  href="#discover"
                  key={label}
                >
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />

      <div id="elephants" />
      <div id="unspoken" />
      <div id="discover" />
      <div id="conservation" />
      <div id="habitats" />
      <div id="communities" />
      <div id="sounds" />
      <div id="contact" />
      <div id="privacy" />
    </>
  )
}

export default Home