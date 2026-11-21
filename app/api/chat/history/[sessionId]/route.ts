import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;
  return NextResponse.json({
    success: true,
    data: {
      sessionId,
      messages: [],
      isHumanActive: false,
    },
  });
}
