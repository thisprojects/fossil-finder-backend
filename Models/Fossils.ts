import mongoose from "mongoose";

const fossilSchema = new mongoose.Schema(
  {
      recordType  : {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
      label_offset  : {
      type: Number,
      required: true,
      min: 6,
      max: 255,
    },
    name  : {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
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
    co_ords: {
      type: Array,
      required: true,
    },
    date_found: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
);

export interface IFossil<T> {
  species: string;
  fossil_id: string;
  location: Array<T>;
  date: Date;
}

export default mongoose.model("Fossil", fossilSchema);
