import { saveMovie } from "@/services/media.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const res = await saveMovie(data.title, data.fileKey, data.username);
  return NextResponse.json(res);
}
