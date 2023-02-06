import mongoose from "mongoose";

const fossilSchema = new mongoose.Schema(
  {
    species  : {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    fossil_id: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    location: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    date_found: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
);

export interface IFossil {
  species: string;
  fossil_id: string;
  location: string;
  date: Date;
}

export default mongoose.model("Fossil", fossilSchema);
