import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  return (
    <>
      <Navbar/>
      
      <div className="cards">
        <Card title="card1" description="card1 desc"/>
        <Card title="card2" description="card2 desc"/>
        <Card title="card3" description="card3 desc"/>
        <Card title="card4" description="card4 desc"/>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
