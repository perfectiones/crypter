import upload from "../../img/createSingleColl/upload-single-col.svg";
import { useField, Form, FormikProps, Formik, Field } from "formik";
import { useState } from "react";
import Modal from "react-modal";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function CreateForm({
  collectionColor,
  handlePutOnSale,
  handleUnlockOnce,
  handleOption,
  handleInstantSale,
  onImageChange,
  width,
  handlerModal,
  handlerItemName,
  handlerModalCollection,
  collectionModal,
}) {
  const options = ["10%", "20%", "50%"];

  const defaultOption = options[0];

  console.log();

  const collectionList = [
    {
      collectionColor: "#45B36B",
      collectionName: "Crypto Legend - Professor",
    },
    {
      collectionColor: "#EF466F",
      collectionName: "Crypto Legend - Professor",
    },
    {
      collectionColor: "#9757D7",
      collectionName: "Legend Photography",
    },
  ];

  const [state, setState] = useState({
    createCollName: "",
    createCollDescription: "",
    detailsPropertie: "",
    detailsSize: "",
  });

  const {
    createCollName,
    createCollDescription,
    detailsPropertie,
    detailsSize,
  } = state;
  return (
    <>
      <Formik
        initialValues={{
          createCollName: "",
          createCollDescription: "",
          detailsPropertie: "",
          detailsSize: "",
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="sing-coll__form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <div className="form__title f-pop">Upload file</div>
            <div className="form__subtitle f-pop">
              Drag or choose your file to upload
            </div>

            <div className="form__upload">
              <label htmlFor="sing-coll__upload">
                <img src={upload} alt="" />
                <div>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</div>
              </label>
              <input
                type="file"
                id="sing-coll__upload"
                onChange={onImageChange}
                accept=".png, .gif, .webp"
              />
            </div>

            <div className="form__details">
              <div className="details__title f-pop">
                <p>Item Details</p>
              </div>
              <div className="details__name">
                <label htmlFor="create-coll-name f-pop">Item name</label> <br />
                <Field
                  type="text"
                  id="create-coll-name"
                  name="createCollName"
                />
              </div>

              <div className="details__description">
                <label htmlFor="create-coll-description f-pop">
                  Description
                </label>
                <br />
                <Field
                  type="text"
                  id="createCollDescription"
                  name="createCollDescription"
                />
              </div>

              <div className="details__min-inp flex">
                <div className="details__dropdown">
                  <label htmlFor="details__dropdown f-pop">Royalties</label>{" "}
                  <br />
                  <Dropdown
                    className="dropdown"
                    id="details__dropdown"
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                    onChange={handleOption}
                  />
                </div>

                <div className="details__size">
                  <label htmlFor="details__size">Size</label> <br />
                  <Field type="text" id="details__size" name="detailsSize" />
                </div>

                <div className="details__propertie">
                  <label htmlFor="details__propertie">Propertie</label> <br />
                  <Field
                    type="text"
                    id="details__propertie"
                    name="detailsPropertie"
                  />
                </div>
              </div>

              <div className="details__toggle">
                <div className="toggle__put-sale flex justif-ss-betw">
                  <div className="put-sale__text toggle-inp">
                    <div className="title f-pop">
                      <p>Put on sale</p>
                    </div>
                    <div className="subtitle f-pop">
                      <p>You’ll receive bids on this item</p>
                    </div>
                  </div>

                  <div className="put-sale__toggle">
                    <label className="toggleSwitch">
                      <input
                        type="checkbox"
                        name="put-on-sale"
                        onClick={handlePutOnSale}
                      />
                      <span className="toggleSwitch__span" />
                    </label>
                  </div>
                </div>

                <div className="toggle__inst-price flex justif-ss-betw">
                  <div className="inst-price__text toggle-inp">
                    <div className="title f-pop">
                      <p>Instant sale price</p>
                    </div>
                    <div className="subtitle f-pop">
                      <p>
                        Enter the price for which the item will be instantly
                        sold
                      </p>
                    </div>
                  </div>

                  <div className="inst-price__toggle">
                    <label className="toggleSwitch">
                      <input
                        type="checkbox"
                        name="instant-sale"
                        onClick={handleInstantSale}
                      />
                      <span className="toggleSwitch__span" />
                    </label>
                  </div>
                </div>

                <div className="toggle__unl-purch flex justif-ss-betw">
                  <div className="unl-purch__text toggle-inp">
                    <div className="title f-pop">
                      <p>Unlock once purchased</p>
                    </div>
                    <div className="subtitle f-pop">
                      <p>
                        Content will be unlocked after successful transaction
                      </p>
                    </div>
                  </div>

                  <div className="unl-purch__toggle">
                    <label className="toggleSwitch">
                      <input
                        type="checkbox"
                        name="unlock-once"
                        onClick={handleUnlockOnce}
                      />
                      <span className="toggleSwitch__span" />
                    </label>
                  </div>
                </div>

                <div className="toggle__collection">
                  <div className="collection__title f-pop">
                    <p>Choose collection</p>
                    <span>
                      Choose an exiting collection or create a new one
                    </span>
                  </div>

                  <div className="collection__item flex f-pop">
                    <ul className="flex">
                      <li className="create__collection">
                        <div
                          className="circle"
                          style={{
                            background: "#23262F",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={handlerModalCollection}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z"
                              fill="#777E91"
                            />
                          </svg>
                        </div>

                        <p>Create collection</p>
                      </li>

                      {collectionList.map((el, i) => (
                        <li key={collectionColor}>
                          <div
                            className="circle"
                            style={{ background: el.collectionColor }}
                          ></div>
                          <p>{el.collectionName}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="details__button">
                {width > 1024 ? (
                  ""
                ) : (
                  <button type="button" onClick={handlerModal}>
                    {" "}
                    Preview{" "}
                  </button>
                )}
                <button className="flex align-cent" type="submit">
                  Create item
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.39364 0.843309C6.66418 0.593571 7.08596 0.61044 7.33569 0.880985L9.48954 3.21429C9.72527 3.46967 9.72527 3.86329 9.48955 4.11867L7.3357 6.45203C7.08596 6.72257 6.66419 6.73945 6.39364 6.48971C6.12309 6.23998 6.10622 5.81821 6.35595 5.54766L7.47703 4.33315L0.999674 4.33315C0.631484 4.33315 0.333007 4.03467 0.333007 3.66648C0.333007 3.29829 0.631484 2.99982 0.999674 2.99982L7.477 2.99982L6.35596 1.78536C6.10622 1.51482 6.12309 1.09305 6.39364 0.843309Z"
                      fill="#FCFCFD"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="modal__collection"></div>
      <Modal
        isOpen={collectionModal}
        onRequestClose={handlerModalCollection}
        contentLabel="Example Modal"
        parentSelector={() => document.querySelector(".modal__collection")}
      >
        <div className="modal__preview">
          <div className="preview__title flex align-cent justif-ss-betw">
            <p className="f-sans">Folow steps</p>

            <button
              onClick={handlerModalCollection}
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
          <Formik
            initialValues={{
              miniToken: null,
            }}
          >
            {({ errors, touched }) => (
              <Form
                className="previewModal_form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="preview__body">
                  <div className="step__list flex">
                    <div className="step">
                      <div className="step__top flex align-cent">
                        <div className="circle">
                          <img src={upload} alt="" />
                        </div>
                        <div className="text f-pop">
                          <div className="title">
                            <p>Upload files & Mint token</p>
                          </div>
                          <div className="subtitle">
                            <p>Call contract method</p>
                          </div>
                        </div>
                      </div>
                      <label className="step__button f-sans">
                        Start now
                        <Field name="miniToken" type="file" />
                      </label>
                    </div>

                    <div className="step">
                      <div className="step__top flex align-cent">
                        <div className="circle">
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.02276 16.3979L1.74741 13.1369C1.91243 12.3943 2.28581 11.7142 2.82373 11.1762L12.6717 1.32831C14.2338 -0.233784 16.7664 -0.233788 18.3285 1.32831L19.6717 2.67146C21.2338 4.23355 21.2338 6.76621 19.6717 8.32831L9.82373 18.1762C9.28581 18.7142 8.60564 19.0875 7.86302 19.2526L4.60211 19.9772C2.45862 20.4535 0.546429 18.5414 1.02276 16.3979ZM3.69978 13.5708L2.97514 16.8317C2.81636 17.5462 3.45375 18.1836 4.16825 18.0248L7.42916 17.3002C7.78626 17.2208 8.11448 17.0451 8.37833 16.7925L4.20743 12.6216C3.95485 12.8855 3.77914 13.2137 3.69978 13.5708ZM5.62131 11.2071L9.79288 15.3787L15.3787 9.79288L11.2071 5.62131L5.62131 11.2071ZM18.2575 6.9141L16.7929 8.37867L12.6213 4.20709L14.0859 2.74253C14.8669 1.96148 16.1333 1.96148 16.9143 2.74252L18.2575 4.08567C19.0385 4.86672 19.0385 6.13305 18.2575 6.9141Z"
                              fill="#777E91"
                            />
                          </svg>
                        </div>
                        <div className="text f-pop">
                          <div className="title">
                            <p>Sign sell order</p>
                          </div>
                          <div className="subtitle">
                            <p>Sign sell order using your wallet</p>
                          </div>
                        </div>
                      </div>
                      <label className="step__button f-sans">
                        Start now
                        <Field name="miniToken" type="file" />
                      </label>
                    </div>

                    <div className="step">
                      <div className="step__top flex align-cent">
                        <div className="circle">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7424 8H6.25797C5.10433 8 4.1899 8.97336 4.26187 10.1248L4.76187 18.1248C4.82775 19.1788 5.70185 20 6.75797 20H17.2424C18.2985 20 19.1726 19.1788 19.2385 18.1248L19.7385 10.1248C19.8104 8.97336 18.896 8 17.7424 8ZM6.25797 6C3.95069 6 2.12184 7.94672 2.26576 10.2495L2.76576 18.2495C2.89752 20.3577 4.64572 22 6.75797 22H17.2424C19.3546 22 21.1028 20.3577 21.2346 18.2495L21.7346 10.2495C21.8785 7.94672 20.0496 6 17.7424 6H6.25797Z" fill="#777E91"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V7Z" fill="#777E91"/>
                          </svg>
                        </div>
                        <div className="text f-pop">
                          <div className="title">
                            <p>Sign lock order</p>
                          </div>
                          <div className="subtitle">
                            <p>Sign lock order using your wallet</p>
                          </div>
                        </div>
                      </div>
                      <label className="step__button f-sans">
                        Start now
                        <Field name="miniToken" type="file" />
                      </label>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}

export default CreateForm;
