import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  Morning: String,
  Afternoon: String,
});

const reviewSchema = new mongoose.Schema({
  rev_id: String,
});

const doctorSchema = new mongoose.Schema({
  dr_id: String,
  name: String,
  deg: String,
  spec: String,
  exp: String,
  Cverified: Boolean,
  About: String,
  fees: String,
  apt: [appointmentSchema],
  p_img: String,
  practice: String,
  h_id: String,
  rating: Number,
  rank: Number,
  surgery: [String],
  review: [reviewSchema],
});

// Avoid OverwriteModelError: Cannot overwrite `Doctor` model once compiled
mongoose.models = {};

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
