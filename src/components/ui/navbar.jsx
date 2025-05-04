import Link from "next/link"

import { getPages } from "@/sanity/lib/api"
import { NavLink } from "./nav-link"

export const Navbar = async () => {

  const pages = await getPages()

  return (
    <nav className="wrapper flex justify-between items-center py-4" aria-label="Main Navigation">
      <Link href="/" className="text-3xl py-1" aria-label="Home Page">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"  className="w-8 h-8">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </Link>
      <ul className="flex gap-4" role="menubar">
        {
          pages.map(page => (
            <li key={page._id} role="none">
              <NavLink  href={`${page.slug === "/" ? '' : '/'}${page.slug}`} aria-label={`Navigate to ${page.title}`}>{page.title}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}