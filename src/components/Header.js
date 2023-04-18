import logo from "../img/logo.png";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";


function Header() {

  const { pathname } = useLocation();

  return (
    <header>
      <div className="header__wrapper container flex" >
        <div className="header__start flex">
          <Link to="/">
            <div className="header__logo flex">
              <img src={logo} alt="" />
              <div className="logo__text">
                <p className="f-pop">crypter</p>
              </div>
            </div>
          </Link>
            

          <nav className="header__nav f-sans d-2-none">
            <ul className="flex">
              <li>
                <p>Discover</p>
              </li>
              <li>
                <p>How it work</p>
              </li>
            </ul>
          </nav>
          <div className="header__search d-3-none">
            <input
              type="search"
              name="page-search"
              placeholder="Search"
              className="f-pop"
            />

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search__ic"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4212 12.6002C10.2923 13.4778 8.87376 14.0003 7.33317 14.0003C3.65127 14.0003 0.666504 11.0156 0.666504 7.33366C0.666504 3.65176 3.65127 0.666992 7.33317 0.666992C11.0151 0.666992 13.9998 3.65176 13.9998 7.33366C13.9998 8.87425 13.4773 10.2928 12.5997 11.4217L17.0891 15.9111C17.4145 16.2365 17.4145 16.7641 17.0891 17.0896C16.7637 17.415 16.236 17.415 15.9106 17.0896L11.4212 12.6002ZM12.3332 7.33366C12.3332 10.0951 10.0946 12.3337 7.33317 12.3337C4.57175 12.3337 2.33317 10.0951 2.33317 7.33366C2.33317 4.57224 4.57175 2.33366 7.33317 2.33366C10.0946 2.33366 12.3332 4.57224 12.3332 7.33366Z"
                fill="#777E91"
              />
            </svg>
          </div>
        </div>

        <div className="header__notify d-3-none">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15.0233C18 15.5113 17.6043 15.907 17.1163 15.907H0.88372C0.395655 15.907 0 15.5113 0 15.0233C0 14.5352 0.395656 14.1395 0.883721 14.1395H0.9V7.98088C0.9 3.57288 4.527 0 9 0C13.473 0 17.1 3.57288 17.1 7.98088V14.1395H17.1163C17.6043 14.1395 18 14.5352 18 15.0233ZM2.7 14.1395H15.3V7.98088C15.3 4.5494 12.4794 1.76744 9 1.76744C5.5206 1.76744 2.7 4.5494 2.7 7.98088V14.1395ZM6.97604 17.7558C6.73121 17.2608 7.19772 16.7907 7.75 16.7907H10.25C10.8023 16.7907 11.2688 17.2608 11.024 17.7558C10.9155 17.9751 10.7699 18.1773 10.591 18.3529C10.169 18.7672 9.59674 19 9 19C8.40326 19 7.83097 18.7672 7.40901 18.3529C7.23013 18.1773 7.08449 17.9751 6.97604 17.7558Z"
              fill="#777E91"
            />
          </svg>
        </div>
        <div className="header__buttons d-3-none">
          <button className="f-sans but-upl" style={{ backgroundColor: pathname === '/upload' ? '#3772FF' : '#FCFCFD' }}>
            <Link to='upload'><p style={{ color: pathname === '/upload' ? '#FCFCFD' : '#23262F' }}>Upload</p></Link>
            </button>
          <button className="f-sans but-cont">Connect Wallet</button>
        </div>

        <div className="header__burger d-3">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
