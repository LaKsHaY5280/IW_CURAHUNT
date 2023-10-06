"use server";

import { connectToDB } from "../mongoose";

import Doctor from "../models/Doctor";

export async function getTopRankedDoctors() {
  await connectToDB();
  try {
    let Doctors = await Doctor.find().sort({ rank: 1 }).limit(10).lean().exec();
    Doctors = Doctors.map((Doctor) => {
      Doctor._id = Doctor._id.toString();
      return Doctor;
    });

    return Doctors;
  } catch (error) {
    console.log("Error fetching top ranked Doctors:", error);
  }
}
