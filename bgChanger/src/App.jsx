import {useState} from "react"
function App() {
  const [color,useColor]=useState("green")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"red"}}
          onClick={()=>useColor("red")}>
            Red
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"blue"}}
          onClick={()=>useColor("blue")}>
            blue
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"yellow"}}
          onClick={()=>useColor("yellow")}>
            yellow
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"orange"}}
          onClick={()=>useColor("orange")}>
            orange
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"purple"}}
          onClick={()=>useColor("purple")}>
            purple
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"pink"}}
          onClick={()=>useColor("pink")}>
            pink
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"lavender"}}
          onClick={()=>useColor("lavender")}>
            lavender
          </button>

          <button className="ouline-none px-4 rounded-full shadow-sm"
          style={{backgroundColor:"grey"}}
          onClick={()=>useColor("grey")}>
            grey
          </button>
         </div>
      </div>
    </div>
  )
}

export default App
