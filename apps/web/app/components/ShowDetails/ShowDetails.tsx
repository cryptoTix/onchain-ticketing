import React from "react";

import { getUTCTimeToSellerTime, displayTime } from "../../utils/helpers";
import { ShowDetailsProp } from "../../types/props/ShowDetailsProps";

export const ShowDetailsViewer: React.FC<ShowDetailsProp> = ({ sellerAndshowDetails, movieDetails }) => {
  return (sellerAndshowDetails != null && movieDetails != null) ? (
    <div className="w-full mt-4">
        <div className="text-lg text-left">{movieDetails.name + ": " + sellerAndshowDetails.name + ", " + sellerAndshowDetails.location + " | " + getUTCTimeToSellerTime(sellerAndshowDetails.show.showTime, sellerAndshowDetails.utcTimeDiff)}</div>
    </div>
  ) : <div></div>;
};

export default ShowDetailsViewer;
