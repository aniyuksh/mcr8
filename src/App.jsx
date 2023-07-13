import {Routes, Route} from "react-router-dom"
import Listing from "./pages/Listing"
import SingleEvent from "./pages/SingleEvent"

function App() {


  return (
    <>
      {/* <h1 className="text-5xl">Hello</h1> */}
      <Routes>
        <Route path="/" exact element={<Listing />} />
        <Route path="/single/:id" element={<SingleEvent />} />
      </Routes>
      
    </>
  )
}

export default App
