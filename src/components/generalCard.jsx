import React, { useState } from "react";

const GeneralCard = (props) => {
  const { cardTitle, cardValue, cardUnit, cardStatus } = props;
  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">
          {cardValue} {cardUnit}
        </p>
        <p class="card-text">{cardStatus}</p>
      </div>
    </div>
  );
};

export default GeneralCard;
