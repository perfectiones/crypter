import logo from "../img/logo.png";
import Collapsible from "react-collapsible";

function Footer() {
  return (
    <footer>
      <Collapsible trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      {
        window.innerWidth > 500 &&

        <h1>
            hello
        </h1>
      }
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="footer__logo flex">
              <img src={logo} alt="" />
              <p className="f-pop">crypter</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-12">
            Lorem, ipsum dolor.
          </div>

          <div className="col-xl-4 col-lg-5 col-md-5 col-12">
            Lorem, ipsum dolor.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
