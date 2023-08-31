import React from 'react'
import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
// import Draggable, {DraggableCore} from 'react-draggable';
import { useMemo,useCallback } from 'react'
import { useState } from 'react'


const Canvas = () => {
  const [shapes,setShapes] = useState([])

  const generateRandomNumber = () =>{
    return Math.floor(Math.random()*100+1)
  }

  const getPosition = (minpos,maxpos) =>{
    return Math.floor(Math.random()*(maxpos-minpos)+minpos)
  }

  const generateColor = () =>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    console.log(r,g,b)
    return `rgb(${r,g,b})`
  }
  const addShape = () =>{
    let x = getPosition(400,200)
    let y = getPosition(800,400)
    let width = generateRandomNumber()
    let height = generateRandomNumber()
    // let color = generateColor()
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    let shape = {
        x,y,width,height,color
    }
   
    setShapes([...shapes,shape])
    console.log(shapes)
}

  const printJson = () => {
        console.log()
  }
  return (
    <div>
    <div className='bg-slate-500 flex justify-center items-center'>
        <header className='bg-black-100 flex gap-20 justify-evenly mt-10'>
        <button className="bg-black text-white px-5 py-2 rounded-sm font-bold tracking-wider" onClick={addShape}>Add Shape</button>
        <button className="bg-black text-white px-5 py-2 rounded-sm font-bold tracking-wider" onClick={printJson}>Print JSON</button>
        </header>
       
    </div>
    <div style={{width:'1000px',height:"500px"}} className=" m-auto mt-10 bg-white border border-red-400 ">

<div className='bg-black'>{shapes.map((shape,index)=>{
   
    return <Draggable><div key={index} className={`bg-slate-100`}  style={{position:"absolute",top:shape.x,left:shape.y,width:shape.width,height:shape.height,backgroundColor:`${shape.color}`}}></div></Draggable>
})}</div>
</div>
    </div>
  )
}

export default Canvas