import './About.css'

function AboutPage() {
  return (
    <>
      <div className="main-wrapper" id="creator-container">
        <div className="OBA">
          <div className="OBA-text">
            <h2>The Ateneo One Big App</h2>
            <img src="/logo.svg" alt="Logo" className="OBALogo mobile" media="" />
            <p>
              Ateneo: One Big App is a web application where students can view all
              of the Loyola Schools News and Memos, as well as their upcoming
              schedule of classes paired with an interactive map for easy
              navigation of the campus, all in one location. For years, the ADMU
              has handled its various school processes on different platforms such
              as AISIS, Facebook, and on their website. This has been a confusing
              process for many, especially the freshmen who may not be familiar
              with them or for students who do not have accounts on social media.
            </p>
          </div>
          <img src="/logo.svg" alt="Logo" className="OBALogo desktop" />
        </div>
        <div className="Ateneo">
          <div className="Ateneo-text">
            <h2><span id="about-text">About</span> Ateneo de Manila</h2>
            <img src="/about_ateneo.svg" alt="Ateneo" className="AteneoPic mobile" />
            <blockquote>
              “To understand the soul of Ateneo de Manila University -- what shaped
              it and where it came from, where it is going and where it can take
              you -- it is essential to understand its motto, Lux in Domino, or
              "Light in the Lord."
            </blockquote>
            <div className="Ateneo-body-pic">
              <p>
                From the letter of St. Paul to the Ephesians (5:8), these words
                capture the spirit of a way of life which Ateneo holds up to her
                sons and daughters as their best contribution to the work by which
                God transforms the world. 
                <br></br>
                <br></br>
                To be "light in the Lord" in all fullness
                demands moving insistently and deliberately towards God as the
                center of a person's life, identifying the issues that such a
                centering poses, and then moving out to the world to find ever new
                ways of constructing the edifice, cultivating the garden, painting
                the masterpiece, that God is unfolding in one's life.
              </p>
              <img src="/about_ateneo.svg" alt="Ateneo" className="AteneoPic desktop" />
            </div>
          </div>
        </div>
        <div className="Team">
          <h2>About the Team</h2>
          <div className="Team-cards">
              <div className="Team-card">
                <img src='/profile_emman.svg' alt='ProfilePic' className='profile-pic' />
                <div className="Team-card-text">
                  <name>Emman Evangelista</name>
                  <position>Project Head</position>
                  <div className="Team-card-links">
                    <a target="_blank" href="https://www.facebook.com/nammeattacks">
                      <img src='/fb_logo_hover.svg' alt='Facebook' className='altlogo' />
                      <img src='/fb_logo.svg' alt='Facebook' className='logo' />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/devnamme"
                    >
                      <img src='/linkedin_logo_hover.svg' alt='LinkedIn' className='altlogo' />
                      <img src='/linkedin_logo.svg' alt='LinkedIn' className='logo' />
                    </a>
                    <a target="_blank" href="https://github.com/dnamme">
                      <img src='/git_logo_hover.svg' alt='Git' className='altlogo' />
                      <img src='/git_logo.svg' alt='Git' className='logo' />
                    </a>
                  </div>
                </div>
              </div>
              <div className="Team-card">
                <img src='/profile_andre.svg' alt='ProfilePic' className='profile-pic' />
                <div className="Team-card-text">
                  <name>Andre Dumandan</name>
                  <position>Developer</position>
                  <div className="Team-card-links">
                    <a target="_blank" href="https://www.facebook.com/andretothemax">
                      <img src='/fb_logo_hover.svg' alt='Facebook' className='altlogo' />
                      <img src='/fb_logo.svg' alt='Facebook' className='logo' />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/andre-dumandan/"
                    >
                      <img src='/linkedin_logo_hover.svg' alt='LinkedIn' className='altlogo' />
                      <img src='/linkedin_logo.svg' alt='LinkedIn' className='logo' />
                    </a>
                    <a target="_blank" href="https://github.com/andredumandan">
                      <img src='/git_logo_hover.svg' alt='Git' className='altlogo' />
                      <img src='/git_logo.svg' alt='Git' className='logo' />
                    </a>
                  </div>
                </div>
              </div>
              <div className="Team-card">
                <img src='/profile_szel.svg' alt='ProfilePic' className='profile-pic' />
                <div className="Team-card-text">
                  <name>Szel Embay</name>
                  <position>Developer</position>
                  <div className="Team-card-links">
                    <a target="_blank" href="https://www.facebook.com/szel.embay">
                      <img src='/fb_logo_hover.svg' alt='Facebook' className='altlogo' />
                      <img src='/fb_logo.svg' alt='Facebook' className='logo' />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/szel-leeven-embay-3b70b6171/"
                    >
                      <img src='/linkedin_logo_hover.svg' alt='LinkedIn' className='altlogo' />
                      <img src='/linkedin_logo.svg' alt='LinkedIn' className='logo' />
                    </a>
                    <a target="_blank" href="https://github.com/Hayzhel">
                      <img src='/git_logo_hover.svg' alt='Git' className='altlogo' />
                      <img src='/git_logo.svg' alt='Git' className='logo' />
                    </a>
                  </div>
                </div>
            </div>
              <div className="Team-card">
                <img src='/profile_angelo.svg' alt='ProfilePic' className='profile-pic' />
                <div className="Team-card-text">
                  <name>Angelo Lumba</name>
                  <position>Developer</position>
                  <div className="Team-card-links">
                    <a target="_blank" href="https://www.facebook.com/snag.lumba">
                      <img src='/fb_logo_hover.svg' alt='Facebook' className='altlogo' />
                      <img src='/fb_logo.svg' alt='Facebook' className='logo' />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/swailem-neil-angelo-lumba/"
                    >
                      <img src='/linkedin_logo_hover.svg' alt='LinkedIn' className='altlogo' />
                      <img src='/linkedin_logo.svg' alt='LinkedIn' className='logo' />
                    </a>
                    <a target="_blank" href="https://github.com/Keidare">
                      <img src='/git_logo_hover.svg' alt='Git' className='altlogo' />
                      <img src='/git_logo.svg' alt='Git' className='logo' />
                    </a>
                  </div>
                </div>
              </div>
              <div className="Team-card">
                <img src='/profile_kai.svg' alt='ProfilePic' className='profile-pic' />
                <div className="Team-card-text">
                  <name>Kyla Martin</name>
                  <position>Developer</position>
                  <div className="Team-card-links">
                    <a target="_blank" href="https://github.com/kaiouseis">
                      <img src='/git_logo_hover.svg' alt='Git' className='altlogo' />
                      <img src='/git_logo.svg' alt='Git' className='logo' />
                    </a>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    

  )
}

export default AboutPage