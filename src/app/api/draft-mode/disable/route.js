import { draftMode } from "next/headers"
import { NextResponse } from "next/server"



export const GET = async (request) => {
  (await draftMode()).disable()
  return NextResponse.redirect(new URL("/", request.url))
}