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

export async function getHospitalData(id) {
  await connectToDB();
  try {
    let hospital = await Hospital.findById(id).lean().exec();
    // console.log(hospital);
    if (hospital) {
      hospital._id = hospital._id.toString();
      return hospital;
    } else {
      console.log(`No hospital found with id: ${id}`);
      return null;
    }
  } catch (error) {
    console.log("Error fetching hospital using id:", error);
  }
}

export async function getAllHospitalData() {
  await connectToDB();
  try {
    let allHospital = await Hospital.find().lean().exec();
    // console.log(allHospital);
    allHospital = allHospital.map((hospital) => {
      hospital._id = hospital._id.toString();
      return hospital;
    });
    return allHospital;
  } catch (error) {
    console.log("Error fetching all doctors:", error);
  }
}