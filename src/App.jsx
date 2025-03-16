import Header from "./components/Header"
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "../src/notes"


function App() {
  return (
    <>
      <Header />
      {notes.map(entry => <Note 
      key = {entry.key}
      content={entry.content} 
      title = {entry.title}
      />)}
      <Footer />
    </>
  )
}

export default App
