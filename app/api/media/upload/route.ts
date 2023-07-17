import { getPresignedUrl } from "@/services/media.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const contentType = searchParams.get("contentType");

  if (!contentType) {
    return new Response("Missing content type", { status: 400 });
  }

  const presignedUrl = await getPresignedUrl(contentType);

  return NextResponse.json({
    signedUrl: presignedUrl.signedUrl,
    fileKey: presignedUrl.fileKey,
  });
}
