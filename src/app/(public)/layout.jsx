import { DisableDraftMode } from "@/components/ui/DisableDraftMode"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import { SanityLive } from "@/sanity/lib/live"
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"

const PublicLayout = async ({children}) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
        <main className="min-w-0 w-full">
          {children}
        </main>
        <SanityLive />
        {
          (await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )
        }
      <Footer />
    </div>
  )
}
export default PublicLayout