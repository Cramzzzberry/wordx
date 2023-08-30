'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  //remember to always put this line inside of a react component, not on some function without component
  const router = useRouter()

  async function RouteToWordDef(event) {
    event.preventDefault()
    const word = event.target.search.value

    router.push(`/${ word.toLowerCase() }`)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>WordX <span className="text-[1rem]">An online dictonary</span></h1>

      <form onSubmit={ RouteToWordDef } className="flex flex-col gap-2 items-center w-1/3">
        <input type="text" name="search" id="search" placeholder="Search a word..."
          className="border rounded-md w-full px-4 py-1" />
        <button type="submit" className="bg-slate-100 border rounded-md px-2 py-1 w-1/2">Search</button>
      </form>
    </div>
  )
}
