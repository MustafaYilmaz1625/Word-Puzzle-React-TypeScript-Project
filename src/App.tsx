import { useState } from "react"


function App() {
  // const [findWord, setFindWord]=useState(()=> {
  //   return word[Math.floor(Math.random() * word.length)]
  // })
  const [enterLetters,setEnterLetters] = useState<string[]>([])

  return (
  <div className="app">
     <div className="bg-red-500 min-h-screen">
      Lose Winmb
     </div>
     
  </div>
  )
}

export default App
