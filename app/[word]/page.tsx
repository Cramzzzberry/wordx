import Link from "next/link";

function WordResults(props) {
  const results = props.results

  return results.map((result, index) => (
    <>
      <div className="flex flex-row gap-4 items-center">
        <h3 key={ index } className="font-bold text-[2rem] capitalize">
          { result.word }
        </h3>
        <span className="text-[1.5rem]">
          { result.phonetics.length > 0 ? result.phonetics[0].text : '' }
        </span>
      </div>
      <br />

      {/* word meanings */}
      <WordMeanings meanings={ result.meanings } />
    </>
  ))
}

function WordMeanings(props) {
  const meanings = props.meanings

  return meanings.map((meaning, index) => (
    <>
      <span key={ index } className="font-semibold italic text-[1.25rem]">{ meaning.partOfSpeech }</span><br />
      <WordDefinitions definitions={ meaning.definitions } /><br />
    </>
  ))
}

function WordDefinitions(props) {
  const definitions = props.definitions

  return definitions.map((def, index) => (
    <>
      <span key={ index } className="">- { def.definition }</span><br />
    </>
  ))
}

async function GetWordResults(word: string) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`
  const response = await fetch(url)
  const result = await response.json()

  return result
}

export default async function WordDef({ 
  params 
}: { 
  params: { word: string } 
}) {
  
  const wordResults = await GetWordResults(params.word)
  
  if ("title" in wordResults) {
    return (
      <div className="h-[calc(100vh-4rem)] font-bold text-[2rem] flex flex-col items-center justify-center">
        <span className="w-2/3 text-center">Sorry, we couldn&apos;t find what you&apos;re looking for</span>
        <Link href="/" className="homebtn error">Go Home</Link>
      </div>
    )
  } else {
    return (
      <>
        <div className="px-4 sm:px-24 xl:px-48 pt-16 pb-8">
          <Link href="/" className="homebtn">Go Home</Link>
          <WordResults results={ wordResults } />
        </div>
      </>
    )
  }
}