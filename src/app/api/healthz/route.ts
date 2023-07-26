import { NextResponse } from 'next/server';

export async function GET(_: Request) {
  return NextResponse.json(
    { message: 'API route is working!' },
    { status: 200 }
  );
}
