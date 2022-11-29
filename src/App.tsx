import { useState } from "react"


function App() {
  // const [findWord, setFindWord]=useState(()=> {
  //   return word[Math.floor(Math.random() * word.length)]
  // })
  const [enterLetters,setEnterLetters] = useState<string[]>([])

  return (
   <div className="bg-red-500 min-h-screen">
    Lose Winmb
   </div>
  )
}

export default App
