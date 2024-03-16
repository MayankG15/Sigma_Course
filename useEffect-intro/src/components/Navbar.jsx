import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    // useEffect(() => {
    //   alert("color was changed")
    
    // }, [color])

    // Run on every Render
  useEffect(()=>{
    alert("hey I will run on every render")
  })

  // case 2: Run only on first render
  useEffect(()=>{
    alert("Count was changed")
  },[])
// Run only when certain value chnaged
  useEffect(()=>{
    alert("Count was changed")
  },[color])
    
  return (
    <div>
      I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar
