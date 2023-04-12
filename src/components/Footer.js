import logo from "../../src/img/logo.png";
import Collapsible from "react-collapsible";

function Footer(props) {
  let footerContentMob = null;

  let footerContentDec = null;

if (props.width < props.breakpoint) {
  footerContentMob = (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__logo flex">
              <img src={logo} alt="" />
              <p className="f-pop">crypter</p>
            </div>
            <div className="footer__text">
              <p>Let’s make a great design togerther</p>
            </div>

            <div className="footer__collapsible">
              <Collapsible trigger="Crypter.">
                <a href="/" className="f-sans">
                  Connect wallet
                </a>
                <a href="/" className="f-sans">
                  Discover
                </a>
                <a href="/" className="f-sans">
                  FAQ
                </a>
              </Collapsible>

              <Collapsible trigger="info">
                <a href="/" className="f-sans">
                  Download
                </a>
                <a href="/" className="f-sans">
                  Demos
                </a>
                <a href="/" className="f-sans">
                  Support
                </a>
              </Collapsible>
            </div>

            <div className="footer__bottom">
              <div className="title f-pop">
                <p>Join Newsletter</p>
              </div>

              <div className="text f-pop">
                Subscribe our newsletter to get more free design course and
                resource
              </div>

              <div className="mail">
                <form action="#" method="post">
                  <input type="mail" placeholder="Enter your email" />
                  <button className="input__svg">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.39412 0.843309C6.66467 0.593571 7.08644 0.61044 7.33618 0.880985L9.49003 3.21429C9.72576 3.46967 9.72576 3.86329 9.49003 4.11867L7.33619 6.45203C7.08645 6.72257 6.66468 6.73945 6.39413 6.48971C6.12358 6.23998 6.10671 5.81821 6.35644 5.54766L7.47752 4.33315L1.00016 4.33315C0.631972 4.33315 0.333496 4.03467 0.333496 3.66648C0.333496 3.29829 0.631972 2.99982 1.00016 2.99982L7.47749 2.99982L6.35645 1.78536C6.10671 1.51482 6.12358 1.09305 6.39412 0.843309Z"
                        fill="#FCFCFD"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 f-pop">
              <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} else {
  footerContentDec = (
    <>
      <div className="dec">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-3 col-12">
              <div className="footer__logo flex">
                <img src={logo} alt="" />
                <p className="f-pop">crypter</p>
              </div>
            </div>
  
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 flex">
              <div className="footer__col col-6">
                <div className="col__title f-pop">
                  <p>Crypter.</p>
                </div>
                <div className="title__links f-sans">
                  <a href="/">Discover</a>
                  <a href="/">Connect wallet</a>
                  <a href="/">Create item</a>
                </div>
              </div>
  
              <div className="footer__col col-6">
                <div className="col__title f-pop">
                  <p>Info</p>
                </div>
                <div className="title__links f-sans">
                  <a href="/">Download</a>
                  <a href="/">Demos</a>
                  <a href="/">Support</a>
                </div>
              </div>
            </div>
  
            <div className="col-xl-4 col-lg-5 col-md-5 col-12 col-send">
              <div className="title f-pop">
                <p>Join Newsletter</p>
              </div>
  
              <div className="text f-pop">
                Subscribe our newsletter to get more free design course and
                resource
              </div>
              <div className="mail">
                <form action="#" method="post">
                  <input type="mail" placeholder="Enter your email" />
                  <button className="input__svg">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.39412 0.843309C6.66467 0.593571 7.08644 0.61044 7.33618 0.880985L9.49003 3.21429C9.72576 3.46967 9.72576 3.86329 9.49003 4.11867L7.33619 6.45203C7.08645 6.72257 6.66468 6.73945 6.39413 6.48971C6.12358 6.23998 6.10671 5.81821 6.35644 5.54766L7.47752 4.33315L1.00016 4.33315C0.631972 4.33315 0.333496 4.03467 0.333496 3.66648C0.333496 3.29829 0.631972 2.99982 1.00016 2.99982L7.47749 2.99982L6.35645 1.78536C6.10671 1.51482 6.12358 1.09305 6.39412 0.843309Z"
                        fill="#FCFCFD"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="flex justif-ss-betw f-pop">
              <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
              <div className="flex ckie">
                <p>We use cookies for better service.</p>
                <button>Accept</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  return (
    <footer>
      {footerContentDec}
      {footerContentMob}
    </footer>
  );
}

export default Footer;
