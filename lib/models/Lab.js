import mongoose from "mongoose";

const timeSchema = new mongoose.Schema({
  day: String,
  time: String,
});

const diagnosticCenterSchema = new mongoose.Schema({
  name: String,
  no: String,
  rating: Number,
  reg: String,
  about: String,
  loc: String,
  time: [timeSchema],
  address: String,
  amenities: [String],
  services: [String],
  tests: [String],
  img: String,
  rank: Number,
  review: [String],
});

// Avoid OverwriteModelError: Cannot overwrite `DiagnosticCenter` model once compiled.
mongoose.models = {};

const DiagnosticCenter = mongoose.model(
  "DiagnosticCenter",
  diagnosticCenterSchema
);

export default DiagnosticCenter;
