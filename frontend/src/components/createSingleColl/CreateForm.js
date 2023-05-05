import upload from "../../img/createSingleColl/upload-single-col.svg";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

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
  handlerItemName
}) {
  const options = ["10%", "20%", "50%"];

  const defaultOption = options[0];

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

  const {createCollName, createCollDescription, detailsPropertie, detailsSize } = state;
  return (
    <Formik
      initialValues={{
        createCollName: createCollName,
        createCollDescription: createCollDescription,
        detailsPropertie: detailsPropertie,
        detailsSize: detailsSize,
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="sing-coll__form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(state);
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
              <Field type="text" id="create-coll-name" name="createCollName" onChange={(e) => console.log(e)}/>
            </div>

            <div className="details__description">
              <label htmlFor="create-coll-description f-pop">Description</label>{" "}
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
                      Enter the price for which the item will be instantly sold
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
                    <p>Content will be unlocked after successful transaction</p>
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
                  <span>Choose an exiting collection or create a new one</span>
                </div>

                <div className="collection__item flex f-pop">
                  <ul className="flex">
                    <li className="create__collection">
                      <div
                        className="circle"
                        style={{ background: "#23262F", display: 'flex', justifyContent: 'center', alignItems:'center' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z" fill="#777E91"/>
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
                {(width > 1024) ? '' : <button type="button" onClick={handlerModal}> Preview </button>}
              <button className="flex align-cent" type="submit">
                
                Create item
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39364 0.843309C6.66418 0.593571 7.08596 0.61044 7.33569 0.880985L9.48954 3.21429C9.72527 3.46967 9.72527 3.86329 9.48955 4.11867L7.3357 6.45203C7.08596 6.72257 6.66419 6.73945 6.39364 6.48971C6.12309 6.23998 6.10622 5.81821 6.35595 5.54766L7.47703 4.33315L0.999674 4.33315C0.631484 4.33315 0.333007 4.03467 0.333007 3.66648C0.333007 3.29829 0.631484 2.99982 0.999674 2.99982L7.477 2.99982L6.35596 1.78536C6.10622 1.51482 6.12309 1.09305 6.39364 0.843309Z" fill="#FCFCFD"/>
                </svg>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateForm;
