import { toManifestPayload, loadManifest } from "@beacon/agent/artifact-store";

export async function GET(request: Request): Promise<Response> {
  const sessionId = new URL(request.url).searchParams.get("sessionId");
  if (sessionId === null || sessionId.trim() === "") {
    return Response.json({ error: "sessionId is required" }, { status: 400 });
  }

  const manifest = await loadManifest(sessionId);
  return Response.json(toManifestPayload(manifest));
}
