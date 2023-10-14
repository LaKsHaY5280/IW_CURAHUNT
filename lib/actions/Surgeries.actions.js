"use server";

import { connectToDB } from "../mongoose";

import Surgery from "../models/Surgeries";

export async function getSurgeryList() {
  await connectToDB();
  try {
    let Surgeries = await Surgery.find().lean().exec();
    // console.log(Surgery);
    Surgeries = Surgeries.map((Surgery) => {
      Surgery._id = Surgery._id.toString();
      return Surgery;
    });
    // console.log(Surgeries);
    return Surgeries;
  } catch (error) {
    console.log("Error fetching surgeries using id:", error);
  }
}
