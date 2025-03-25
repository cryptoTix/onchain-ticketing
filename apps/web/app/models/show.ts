// import { Schema, model, models } from "mongoose";

import { StaticImageData } from "next/image";

// export interface BaseShowInterface {
//   name: string;
//   genre: string;
// }

// export interface ShowFormInterface extends BaseShowInterface {
//   image: File;
// }

// export interface ShowAPIInterface extends BaseShowInterface {
//   image: string;
// }

// export interface ShowInterface extends ShowAPIInterface {
//   _id: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface PaginatedShows {
//   shows: ShowInterface[];
//   total: number;
// }

// const ShowSchema = new Schema<ShowAPIInterface>(
//   {
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//       },
//     image: {
//         type: String,
//         required: [true, "Image is required"],
//       },
//     genre: {
//         type: String,
//         required: [true, "genre is required"]
//     }
// }
// );

// const Show =
//   models.Show<ShowAPIInterface> ||
//   model<ShowAPIInterface>("Show", ShowSchema);

// export default Show;
export interface ShowInterface {
  id: string;
  name: string;
  image: string;
  genre: string;
  duration: string
  actor: string
  rating: string
}