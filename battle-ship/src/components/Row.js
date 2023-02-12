import React from 'react'
// import "./Row.css"
export default function Row(props) {
  return (
    <div>
      <div className="cell white">  </div> <div className="cell white"> A{props.num} </div> <div className="cell white"> B{props.num} </div> <div className="cell white"> C{props.num} </div> <div className="cell white"> D{props.num} </div> <div className="cell white"> E{props.num} </div> <div className="cell white"> F{props.num} </div> <div className="cell white"> G{props.num} </div> <div className="cell white"> H{props.num} </div> <div className="cell white"> I{props.num} </div> <div className="cell white"> J{props.num} </div>
    </div>
  )
  
}
