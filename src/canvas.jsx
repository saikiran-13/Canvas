import React from 'react'
import { useMemo,useCallback } from 'react'


const Canvas = () => {
  const shapes = []
  const generateRandomNumber = () =>{
    return Math.floor(Math.random()*1000+1)
  }
  const addShape = () =>{
    let x = generateRandomNumber()
    let y = generateRandomNumber()
    let width = generateRandomNumber()
    let height = generateRandomNumber()
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    let shape = {
        x,y,width,height,color
    }
    shapes.push(shape)
    console.log(shapes)
}

  const printJson = () => {

  }
  return (
    <div>
    <div className='bg-slate-500 flex justify-center items-center'>
        <header className='bg-black-100 flex gap-20 justify-evenly mt-10'>
        <button className="bg-black text-white px-5 py-2 rounded-sm font-bold tracking-wider" onClick={addShape}>Add Shape</button>
        <button className="bg-black text-white px-5 py-2 rounded-sm font-bold tracking-wider" onClick={printJson}>Print JSON</button>
        </header>
       
    </div>
    <div className=" m-auto mt-10 bg-white w-3/4 h-96 border border-red-400 ">

<div>{shapes.map((shape)=>{
    return <div></div>
})}</div>
</div>
    </div>
  )
}

export default Canvas