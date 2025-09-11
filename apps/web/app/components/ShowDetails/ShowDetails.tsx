import React from "react";

import { displayLongDate, displayTime } from "../../utils/helpers";
import { ShowDetailsProp } from "../../types/props/ShowDetailsProps";

export const ShowDetailsViewer: React.FC<ShowDetailsProp> = ({ sellerAndshowDetails, movieDetails }) => {
  return (sellerAndshowDetails != null && movieDetails != null) ? (
    <div className="w-full mt-4">
        <div className="text-lg text-left">{movieDetails.name + ": " + sellerAndshowDetails.name + ", " + sellerAndshowDetails.location + " | " + displayLongDate(new Date(sellerAndshowDetails.show.showTime)) + " " + displayTime(new Date(sellerAndshowDetails.show.showTime))}</div>
    </div>
  ) : <div></div>;
};

export default ShowDetailsViewer;
