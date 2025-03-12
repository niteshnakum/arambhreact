import React from 'react';

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
            <img className="download-app-promo__play-store" src="../src/assets/images/google_play_store.svg" alt="google play" />
          </a>
          <a className="download-app-promo-subsection--link download-app-promo-subsection--appstore" href="#" target="_parent">
            <img className="download-app-promo__app-store" src="../src/assets/images/ios_app_store.svg" alt="ios app store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadAppPromo;
