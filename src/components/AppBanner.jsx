import React from 'react';


function AppBanner() {
  return (
    <div className='bannerMain'>

      <div className='bannerInner'>

        <div className='bannerUpper'></div>

        <div className='bannerLower'>

          <h2 className='headng'>{"\u2014"} Coders at work {"\u2014"}</h2>
          <h3 className='CS'>App available soon</h3>

          <div className='availableImages'>

            <img className='downloadImg' src='/androidCommingSoon.png' />
            <img className='downloadImg' src='/iosCommingSoon.png' />

          </div>

          <div className='contactUs'>

            

          </div>

        </div>

      </div>

    </div>
  );
}

export default AppBanner;
