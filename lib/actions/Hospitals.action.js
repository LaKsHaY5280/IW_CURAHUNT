"use server";

import { connectToDB } from "../mongoose";

import Hospital from "../models/Hospital";

export async function getTopRankedHospitals() {
  await connectToDB();
  try {
    let hospitals = await Hospital.find()
      .sort({ rank: 1 })
      .limit(10)
      .lean()
      .exec();
    hospitals = hospitals.map((hospital) => {
      hospital._id = hospital._id.toString();
      return hospital;
    });

    return hospitals;
  } catch (error) {
    console.log("Error fetching top ranked hospitals:", error);
  }
}
