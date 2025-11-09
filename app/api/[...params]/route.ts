import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ params: string[] }> }
) {
  try {
    // ✅ Await the params property, not the whole context
    const { params } = await context.params;
    const [key, scale, tonality] = params;

    const client = await clientPromise;
    const db = client.db("fingerpickingdb");

    const kdata = await db
      .collection("stringdata")
      .findOne({ key, scale, tonality });

    if (!kdata) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json(kdata);
  } catch (err) {
    console.error("🔥 API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
