import React from 'react';
import newImage from './google_play_store.svg';
import newImage2 from './ios_app_store.svg';
//import '.././Aos.css';

const DownloadAppPromo = () => {
  return (
    <div id="download-app" className="download-app-promo">
      <div className="download-app-promo-text">
        <div className="download-app-promo-text__tagline">The best way to get information on the go</div>
        <br />
        <div className="download-app-promo-text__download">Download the TechTheme App.</div>
      </div>
      <div className="download-app-promo__section">
        <div className="download-app-promo-subsection">
          <a className="download-app-promo-subsection--link download-app-promo-subsection--playstore" href="#" target="_parent">
            <img className="download-app-promo__play-store" src={newImage} alt="google play" />
          </a>
          <a className="download-app-promo-subsection--link download-app-promo-subsection--appstore" href="#" target="_parent">
            <img className="download-app-promo__app-store" src={newImage2} alt="ios app store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadAppPromo;

// "../src/assets/images/google_play_store.svg"