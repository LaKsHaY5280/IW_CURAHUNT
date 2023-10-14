import mongoose from "mongoose";

const SurgerySchema = new mongoose.Schema({
  name: String,
  p_img: String,
  about: String,
  time: String,
  risk: [String],
  cost: String,
});

// Avoid OverwriteModelError: Cannot overwrite `DiagnosticCenter` model once compiled.
mongoose.models = {};

const Surgery = mongoose.model("surgeries", SurgerySchema);

export default Surgery;
