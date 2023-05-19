/*

  Сделать чтобы отправлялось на сервер

*/
import React, { useState } from "react";

import Preview from "./createSingleColl/Preview";

import { Link } from "react-router-dom";

import CreateForm from "./createSingleColl/CreateForm";

function CreateSingleColl(props) {

  const [state, setState] = useState({
    putOnSale: false,
    instantSale: false,
    unlockOnce: false,
    optionRoyalty: 10,
    previewImg: null,
    modalOpen: false,
    itemName: ' ',
    collectionModal: false
  });

  function handlerModalCollection() {
    setState({ ...state, collectionModal: !state.collectionModal });
    props.bodyLock()
  }

  function handlerModal() {

    setState({ ...state, modalOpen: !state.modalOpen });
    props.bodyLock()    
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setState({
        ...state,
        previewImg: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleUnlockOnce = () => {
    setState({ ...state, unlockOnce: !state.unlockOnce });
  };

  const handlePutOnSale = () => {
    setState({ ...state, putOnSale: !state.putOnSale });
  };

  const handleInstantSale = () => {
    setState({ ...state, instantSale: !state.instantSale });
  };

  const handleOption = (e) => {
    setState({ ...state, optionRoyalty: e.value });
  };

  const handlerItemName = (e) => {
    //setState({ ...state, itemName: e.value });

    console.log(e);
  };

  const { putOnSale, instantSale, unlockOnce, previewImg, optionRoyalty, modalOpen, itemName, collectionModal } = state;

  return (
    <div className="container cr-sing-coll__page">
      <div className="row flex justif-ss-betw sing-coll__main">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-1024">
          <div className="sing-coll__title f-sans flex justif-ss-betw">
            <p>Create single collectible</p>
            <Link to="/">
              <button className="flex align-cent sing-coll__nav f-sans">
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60636 0.843797C3.33582 0.59406 2.91404 0.610928 2.66431 0.881474L0.510459 3.21478C0.274728 3.47015 0.274725 3.86378 0.510455 4.11915L2.6643 6.45251C2.91404 6.72306 3.33581 6.73994 3.60636 6.4902C3.87691 6.24047 3.89378 5.81869 3.64405 5.54815L2.52297 4.33364L9.00033 4.33364C9.36852 4.33364 9.66699 4.03516 9.66699 3.66697C9.66699 3.29878 9.36852 3.0003 9.00033 3.0003L2.523 3.0003L3.64404 1.78585C3.89378 1.51531 3.87691 1.09353 3.60636 0.843797Z" fill="#777E91"/>
                </svg>
                Switch to Multiple
              </button>
            </Link>
          </div>

          <CreateForm 
            previewImg={previewImg}
            instantSale={instantSale}
            unlockOnce={unlockOnce}
            optionRoyalty={optionRoyalty}
            putOnSale={putOnSale}

            onImageChange={onImageChange}
            handlePutOnSale={handlePutOnSale}
            handleUnlockOnce={handleUnlockOnce}
            handleOption={handleOption}
            handleInstantSale={handleInstantSale}
            width={props.width}
            handlerModal={handlerModal}
            bodyLock={props.bodyLock}
            modalOpen={modalOpen}
            handlerItemName={handlerItemName}
            handlerModalCollection={handlerModalCollection}
            collectionModal={collectionModal}
          />
        </div>
        <Preview 
          width={props.width}
          breakpoint2={props.breakpoint2}
          breakpoint={props.breakpoint}
          previewImg={previewImg}
          handlerModal={handlerModal}
          modalOpen={modalOpen}
        />
      </div>
    </div>
  );
}

export default CreateSingleColl;
