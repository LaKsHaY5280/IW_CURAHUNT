import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  reg: String,
  loc: String,
  time: String,
  days: String,
  fees: String,
  pay: String,
  no_amb: Number,
  num: Number,
  em_num: Number,
  about: String,
  no_dr: Number,
  no_bed: Number,
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }], // Reference to many Doctor documents
  services: [String],
  amenities: [String],
  surgery: [String],
  rating: Number,
  rank: Number,
  tags: [String],
  h_id: String,
  type: String,
  visit: [String],
  doctors: [String],
  review: [String],
});

// Avoid OverwriteModelError: Cannot overwrite `Hospital` model once compiled.
mongoose.models = {};

const Hospital = mongoose.model("Hospital", hospitalSchema, "hospitals");

export default Hospital;
