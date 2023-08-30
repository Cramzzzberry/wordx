'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  //remember to always put this line inside of a react component, not on some function without component
  const router = useRouter()

  async function RouteToWordDef(event: Event) {
    event.preventDefault()
    const word = event.target.search.value

    router.push(`/${ word.toLowerCase() }`)
  }

  return (
    <div className="px-4 sm:px-0 w-screen h-screen flex flex-col justify-center items-center">
      <div className="mb-4 sm:mb-0 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-end">
        <h1>WordX</h1>
        <span className="text-[1rem] sm:pb-7">An online dictonary</span>
      </div>

      <form onSubmit={ RouteToWordDef } className="w-[calc(100vw-2rem)] max-w-[32rem] flex flex-row items-center">
        <input type="text" name="search" id="search" placeholder="Search a word..."
          className="searchbar" />
        <button type="submit" className="searchbtn">
          <span className="material-icons-round text-[1.625rem]">search</span>
        </button>
      </form>
    </div>
  )
}
