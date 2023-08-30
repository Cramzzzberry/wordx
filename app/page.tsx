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
      <div className="flex flex-row gap-4 items-end">
        <h1>WordX</h1>
        <span className="text-[1rem] pb-7">An online dictonary</span>
      </div>

      <form onSubmit={ RouteToWordDef } className="flex flex-row items-center">
        <input type="text" name="search" id="search" placeholder="Search a word..."
          className="searchbar" />
        <button type="submit" className="searchbtn">
          <span class="material-icons-round text-[1.625rem]">search</span>
        </button>
      </form>
    </div>
  )
}
