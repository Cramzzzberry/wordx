import Link from "next/link";

function WordResults(props) {
  const results = props.results

  return results.map((result, index) => (
    <>
      <h3 key={ index } className="font-semibold text-[2rem]">
        { result.word }
        <span className="font-normal text-[1.5rem]">
          { result.phonetics.length > 0 ? result.phonetics[0].text : '' }
        </span>
      </h3><br />

      {/* word meanings */}
      <WordMeanings meanings={ result.meanings } />
    </>
  ))
}

function WordMeanings(props) {
  const meanings = props.meanings

  return meanings.map((meaning, index) => (
    <>
      <span key={ index } className="italic">{ meaning.partOfSpeech }</span><br />
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

export default async function WordDef({ params }: { params: { word: string } }) {
  const wordResults = await GetWordResults(params.word)

  return (
    <div className="w-screen px-56 py-16">
      <Link href="/" className="bg-slate-100 border rounded-md px-2 py-1">Home</Link>

      {/* word results */}
      <WordResults results={ wordResults } />
    </div>
  )
}