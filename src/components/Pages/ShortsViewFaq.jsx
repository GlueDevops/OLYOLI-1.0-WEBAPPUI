import React from "react";

const ShortsViewFaq = () => {
  return (
    <div className=''>
      <div style={{ height: "96vh" }}>
        <div className='shorts-view-nav'>
          <button className='nav-btn'>
            {" "}
            <img
              src={require("../../assets/images/back.png")}
              alt=''
              className='arrow-back'
            />
            Back{" "}
          </button>
          <button className='nav-btn'>
            Next{" "}
            <img
              src={require("../../assets/images/next.png")}
              alt=''
              className='arrow-next'
            />
          </button>
        </div>
        <div className='shorts-view-faq-video-container'>
          <div className='shorts-view-faq-video'>
            <div className='shorts-view-faq-top'>
              <div className='shorts-view-faq-img'>
                <img src='' alt='' />
              </div>
              <div className='shorts-view-faq-interact'></div>
            </div>
            <div className='shorts-view-faq-video-icon'>
              <img
                src={require("../../assets/images/video-button.png")}
                alt=''
                className='w-100'
              />
            </div>
            <div className='shorts-view-faq-bottom'>
              <button className='shorts-view-faq-follow'>Follow</button>
              <p className='shorts-view-faq-category'>Electronics</p>
              {/* <p className='shorts-view-faq-date'>Starts on: 5th August 2023 @ 4:00PM IST</p> */}
              <p className='shorts-view-faq-description'>
                Popular belief, Lorem is simply random text.
              </p>
              <p className='shorts-view-faq-user'>Gluetron eBusiness, India.</p>
            </div>
          </div>
        </div>
        <div className='faq-container'>
          <div className='faq-arrow'>
            <img src={require("../../assets/images/faq-arrow.png")} alt='' />
          </div>
          <div className='faq-info'>
            <div className='faq-ask'>
              <div className='d-flex'>
                <div className='faq-image'>
                  <img src='' alt='' />
                </div>
                <div>
                  <h4 className='faq-name'>
                    Popular belief, Lorem is simply random text.
                  </h4>
                  <p className='faq-business'>Gluetron eBusiness, India.</p>
                </div>
              </div>
              <textarea
                type='text'
                className='faq-question-input'
                rows={2}
                placeholder='You may ask question here.'
              />
              <button className='faq-question-submit'>SUBMIT</button>
              <div className='faq-question-asked'>
                <div className='d-flex'>
                  <div className='faq-image'>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <h4 className='faq-name'>
                      Popular belief, Lorem is simply random text.
                    </h4>
                    <p className='faq-business'>Gluetron eBusiness, India.</p>
                  </div>
                </div>
                <p className='faq-date'>1 July 2023</p>
                <p className='faq-question'>
                  <span>Q:</span> Popular belief, Lorem is simply random text.
                </p>
              </div>
              <div className='faq-question-answered'>
                <div className='d-flex'>
                  <div className='faq-image'>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <h4 className='faq-name'>
                      Popular belief, Lorem is simply random text.
                    </h4>
                    <p className='faq-business'>Gluetron eBusiness, India.</p>
                  </div>
                </div>
                <p className='faq-date'>1 July 2023</p>
                <p className='faq-question'>
                  <span>A:</span> Popular belief, Lorem is simply random text.
                </p>
              </div>
              <div className='faq-question-asked'>
                <div className='d-flex'>
                  <div className='faq-image'>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <h4 className='faq-name'>
                      Popular belief, Lorem is simply random text.
                    </h4>
                    <p className='faq-business'>Gluetron eBusiness, India.</p>
                  </div>
                </div>
                <p className='faq-date'>1 July 2023</p>
                <p className='faq-question'>
                  <span>Q:</span> Popular belief, Lorem is simply random text.
                </p>
              </div>
              <div className='faq-question-answered'>
                <div className='d-flex'>
                  <div className='faq-image'>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <h4 className='faq-name'>
                      Popular belief, Lorem is simply random text.
                    </h4>
                    <p className='faq-business'>Gluetron eBusiness, India.</p>
                  </div>
                </div>
                <p className='faq-date'>1 July 2023</p>
                <p className='faq-question'>
                  <span>A:</span> Popular belief, Lorem is simply random text.
                </p>
              </div>
              <div className='faq-question-asked'>
                <div className='d-flex'>
                  <div className='faq-image'>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <h4 className='faq-name'>
                      Popular belief, Lorem is simply random text.
                    </h4>
                    <p className='faq-business'>Gluetron eBusiness, India.</p>
                  </div>
                </div>
                <p className='faq-date'>1 July 2023</p>
                <p className='faq-question'>
                  <span>Q:</span> Popular belief, Lorem is simply random text.
                </p>
              </div>
              <div className='faq-question-answered'>
                <div className='d-flex'>
                  <div className='faq-image'>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <h4 className='faq-name'>
                      Popular belief, Lorem is simply random text.
                    </h4>
                    <p className='faq-business'>Gluetron eBusiness, India.</p>
                  </div>
                </div>
                <p className='faq-date'>1 July 2023</p>
                <p className='faq-question'>
                  <span>A:</span> Popular belief, Lorem is simply random text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortsViewFaq;
