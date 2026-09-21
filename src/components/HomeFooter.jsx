import dalaLogo from '../assets/brand/dala-logo-horizontal.png'
import './HomeFooter.css'

function HomeFooter({ variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <footer
      className={`site-footer ${
        isDark ? 'site-footer--dark' : 'site-footer--light'
      }`}
      id="about"
    >
      <div className="site-footer__inner">

        {/* BRAND */}
        <a className="site-footer__brand" href="#home">
          <img
            className="site-footer__logo"
            src={dalaLogo}
            alt="DALA"
          />

          <span className="site-footer__tagline">
            ELEPHANTS. PEOPLE. A SHARED TOMORROW.
          </span>
        </a>


        {/* MAIN NAVIGATION */}
        <nav
          className="site-footer__nav"
          aria-label="Footer navigation"
        >
          <a href="#home">Home</a>
          <a href="#elephants">Elephants</a>
          <a href="#stories">Stories</a>
          <a href="#archive">Visual Archive</a>
          <a href="#unspoken">UNSPOKEN</a>
          <a href="#discover">Discover</a>
        </nav>


        {/* SOCIAL MEDIA */}
        <div
          className="site-footer__social"
          aria-label="Social media"
        >
          <a
            href="#instagram"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="4"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.6"
                cy="6.6"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          <a
            href="#facebook"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13.7 21v-8h2.8l.42-3.1H13.7V7.92c0-.9.25-1.52 1.58-1.52H17V3.62c-.3-.04-1.3-.12-2.47-.12-2.44 0-4.11 1.49-4.11 4.23V9.9H7.65V13h2.77v8h3.28Z" />
            </svg>
          </a>


          <a
            href="#youtube"
            aria-label="YouTube"
            title="YouTube"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 8.1a2.8 2.8 0 0 0-2-2C17.25 5.6 12 5.6 12 5.6s-5.25 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 15.9a2.8 2.8 0 0 0 2 2c1.75.5 7 .5 7 .5s5.25 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.9 29 29 0 0 0-.5-3.9Z"
                fill="currentColor"
              />

              <path
                d="m10 15.2 5-3.2-5-3.2v6.4Z"
                fill={isDark ? '#101210' : '#f7f4ee'}
              />
            </svg>
          </a>
        </div>


        {/* DIVIDER 01 */}
        <span
          className="site-footer__divider"
          aria-hidden="true"
        />


        {/* SECONDARY NAVIGATION */}
        <nav
          className="site-footer__secondary"
          aria-label="Secondary footer navigation"
        >
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
        </nav>


        {/* DIVIDER 02 */}
        <span
          className="site-footer__divider"
          aria-hidden="true"
        />


        {/* KINDER TOMORROW */}
        <div className="site-footer__heart">
          <span
            className="site-footer__heart-icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 27.2C13.8 24.9 5.2 18.8 5.2 11.6C5.2 7.9 7.8 5.6 11 5.6C13.2 5.6 15 6.8 16 8.5C17 6.8 18.8 5.6 21 5.6C24.2 5.6 26.8 7.9 26.8 11.6C26.8 18.8 18.2 24.9 16 27.2Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span>For a kinder tomorrow</span>
        </div>

      </div>
    </footer>
  )
}

export default HomeFooter