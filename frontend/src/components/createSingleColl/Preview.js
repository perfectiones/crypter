import { useState } from "react";
import avatar from "../../img/main/avatar.png";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Preview({ width, previewImg, handlerModal, modalOpen }) {
  let previewDec = null;

  if (width > 1024) {
    previewDec = (
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 preview__wrapper f-pop">
        <div className="preview__title">
          <p>Preview</p>
        </div>
        <div className="preview__main preview__item">
          <div className="item__img">
            <img src={previewImg} alt="" />
          </div>

          <div className="item__title flex justif-ss-betw align-cent">
            <p>Black Golden Tiger</p>

            <div className="cost">2.45 ETH</div>
          </div>

          <div className="item__users flex justif-ss-betw align-cent">
            <div className="users__img flex">
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
            </div>

            <p>3 in stock</p>
          </div>

          <div className="item__bid flex align-cent f-pop">
            <div className="bid__svg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                  fill="#777E91"
                />
                <path
                  d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                  fill="#777E91"
                />
                <path
                  d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                  fill="#777E91"
                />
                <path
                  d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                  fill="#777E91"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                  fill="#777E91"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                  fill="#777E91"
                />
              </svg>
            </div>

            <div className="bid__text flex">
              <p>Highest bid</p> <span> 0.001 ETH</span>
            </div>

            <p className="bid__status">New bid 🔥</p>
          </div>

          <div className="item__button">
            <button className="flex align-cent">
              <div className="cross">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L4 2.58579L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L5.41421 4L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L4 5.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L2.58579 4L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#777E91"
                  />
                </svg>
              </div>

              <p>Clear all</p>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    previewDec = (
      <div className="col-12 preview__modal">
        <Modal
          isOpen={modalOpen}
          onRequestClose={handlerModal}
          style={customStyles}
          contentLabel="Example Modal"
          parentSelector={() => document.querySelector(".preview__modal")}
        >
          <div className="modal__preview">
            
            <div className="modal__title flex justif-ss-betw">
              <p>Preview</p>

              <button 
                onClick={handlerModal} 
                className="modal__close flex align-cent"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                    fill="#23262F"
                  />
                </svg>
              </button>
            </div>
            <div className="modal__body">
              <div className="img__wrapper">
                <img src={previewImg} alt="" />
              </div>
              <div className="img__title flex align-cent justif-ss-betw">
                <p className="name">Black Golden Tiger</p>

                <p className="cost">2.45 ETH</p>
              </div>

              <div className="img__status flex align-cent justif-ss-betw">
                <div className="status__avatar flex ">
                  <img src={avatar} alt="" />
                  <img src={avatar} alt="" />
                  <img src={avatar} alt="" />
                </div>
                <p className="status__text">3 in stock</p>
              </div>

              <div className="img__bid flex align-cent">
                <div className="bid__svg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                      fill="#777E91"
                    />
                    <path
                      d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                      fill="#777E91"
                    />
                    <path
                      d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                      fill="#777E91"
                    />
                    <path
                      d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                      fill="#777E91"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                      fill="#777E91"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>

                <div className="bid__text flex">
                  <p>Highest bid</p> <span> 0.001 ETH</span>
                </div>

                <p className="bid__status">New bid 🔥</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
  return <>{previewDec}</>;
}

export default Preview;
