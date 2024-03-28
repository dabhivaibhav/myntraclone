import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagslice";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

export default function HomeItem({ homeitem }) {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);

  const elementFound = bagItems.indexOf(homeitem.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(homeitem.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(homeitem.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={homeitem.image} alt="item image" />
      <div className="rating">
        {homeitem.rating.stars} ⭐ | {homeitem.rating.count}
      </div>
      <div className="company-name">{homeitem.company}</div>
      <div className="item-name">{homeitem.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {homeitem.current_price}</span>
        <span className="original-price">Rs {homeitem.original_price}</span>
        <span className="discount">({homeitem.discount_percentage}% OFF)</span>
      </div>

      <div className="control-buttons">
        {elementFound ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemoveFromBag}
          >
            <IoMdRemoveCircle /> Remove
          </button>
        ) : (
          <button
            type="button "
            className="btn  btn-success "
            onClick={handleAddToBag}
          >
            <IoMdAddCircle /> Add to bag
          </button>
        )}
      </div>
    </div>
  );
}
