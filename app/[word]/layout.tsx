'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function NavbarLayout({ 
  children 
} : { 
  children: React.ReactNode 
}) {

  const router = useRouter()

  async function RouteToWordDef(event) {
    event.preventDefault()
    const word = event.target.searchnavbar.value

    router.push(`/${ word.toLowerCase() }`)
  }

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="hidden sm:inline font-bold text-[1.5rem]">WordX</Link>
        <form onSubmit={ RouteToWordDef } className="w-full flex flex-row justify-center sm:justify-start">
          <input type="text" name="search" id="searchnavbar" placeholder="Search more..."
            className="searchnavbar" />
        </form>
      </nav>
      { children }
    </>
  )
}