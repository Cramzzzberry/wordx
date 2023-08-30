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
    const word = event.target.search.value

    router.push(`/${ word.toLowerCase() }`)
  }

  return (
    <>
      <nav className="sticky top-0 bg-slate-400 h-[4rem] flex flex-row gap-4 items-center px-48 text-slate-800">
        <Link href="/" className="font-bold text-[1.5rem]">WordX</Link>
        <form onSubmit={ RouteToWordDef }>
          <input type="text" name="search" id="search" placeholder="Search more..."
            className="searchnavbar" />
        </form>
      </nav>
      { children }
    </>
  )
}