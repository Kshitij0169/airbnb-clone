import { NextResponse } from "next/server";
import listingData from "../../listingData.json";

export async function GET(req) {
  return NextResponse.json(listingData);
}
