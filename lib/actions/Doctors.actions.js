"use server";

import { connectToDB } from "../mongoose";

import Doctor from "../models/Doctor";

export async function getTopRankedDoctors() {
  await connectToDB();
  try {
    let Doctors = await Doctor.find().sort({ rank: 1 }).limit(10).lean().exec();
    // console.log(Doctor);
    Doctors = Doctors.map((Doctor) => {
      Doctor._id = Doctor._id.toString();
      return Doctor;
    });

    return Doctors;
  } catch (error) {
    console.log("Error fetching top ranked Doctors:", error);
  }
}

export async function getDoctorData(id) {
  await connectToDB();
  try {
    let doctorData = await Doctor.findById(id).lean().exec();
    // console.log(doctorData);
    if (doctorData) {
      doctorData._id = doctorData._id.toString();
      return doctorData;
    } else {
      console.log(`No doctor found with id: ${id}`);
      return null;
    }
  } catch (error) {
    console.log("Error fetching doctor using id:", error);
  }
}

export async function getAllDoctorData() {
  await connectToDB();
  try {
    let allDoctors = await Doctor.find().lean().exec();
    allDoctors = allDoctors.map((doctor) => {
      doctor._id = doctor._id.toString();
      return doctor;
    });
    return allDoctors;
  } catch (error) {
    console.log("Error fetching all doctors:", error);
  }
}