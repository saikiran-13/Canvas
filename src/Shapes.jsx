import React, { useState, useRef } from 'react';

const Rectangle = ({ id, left, top, width, height, color, onRectangleDrag }) => {
  const [isDragging, setIsDragging] = useState(false);


  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const containerRect = e.currentTarget.parentNode.getBoundingClientRect();
    const newLeft = Math.max(0, Math.min(containerRect.width - width, left + e.movementX));
    const newTop = Math.max(0, Math.min(containerRect.height - height, top + e.movementY));

    onRectangleDrag(id, newLeft, newTop);

  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        background: `${color}`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >

    </div>
  );
};

const RectangleBox = () => {
  const [rectangles, setRectangles] = useState([]);
  const displayRef = useRef(null)
  const generateRandomValue = (max) => Math.floor(Math.random() * max);

  const addShape = () => {
    const maxWidth = 1000;
    const maxHeight = 500;

    const newRectangleWidth = generateRandomValue(maxWidth);
    const newRectangleHeight = generateRandomValue(maxHeight);

    //Rectangle Properties
    const newRectangle = {
      id: `rectangle-${rectangles.length}`,
      left: generateRandomValue(maxWidth - newRectangleWidth),
      top: generateRandomValue(maxHeight - newRectangleHeight),
      width: Math.floor(Math.random() * newRectangleWidth),
      height: Math.floor(Math.random() * newRectangleHeight),
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    };

    setRectangles([...rectangles, newRectangle]);
  };

  const handleRectangleDrag = (id, newLeft, newTop) => {
    //Updating  to new left and top positions
    const updatedRectangles = rectangles.map((rect) =>
      rect.id === id ? { ...rect, left: newLeft, top: newTop } : rect
    );
    setRectangles(updatedRectangles);

  };

  const printJson = () => {

    displayRef.current.style.display = "flex"

  };


  return (
    <div>
      <div style={{ backgroundColor: "dodgerblue", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <header style={{ background: "dodgerblue", display: "flex", gap: "30px", justifyContent: "space-evenly", marginTop: "40px" }}>
          <button

            className="bg-black text-white px-5 py-2 rounded-sm font-bold tracking-wider"
            onClick={addShape}
          >
            Add Rectangle
          </button>
          <button
            className="bg-black text-white px-5 py-2 rounded-sm font-bold tracking-wider"
            onClick={printJson}
          >
            Print Json
          </button>
        </header>
      </div>
      <div
        style={{ width: "1000px", height: "500px" }}
        className="relative m-auto mt-10 bg-[#f8f8ff] border border-[dodgerblue] mb-4 shadow-md shadow-slate-300 rounded-lg"
      >
        {rectangles.map((rectangle) => (
          <Rectangle
            key={rectangle.id}
            onRectangleDrag={handleRectangleDrag}
            {...rectangle}
          />
        ))}

      </div>
      <div ref={displayRef} style={{ display: "none" }}>
        <div style={{ margin: "auto" }}>{rectangles.map((rectangle) => {
          return <div key={rectangle.id} style={{ display: "flex", gap: "10px" }} className='bg-slate-300 rounded-md mb-2 p-2 text-white font-bold'>
            <span>id:{rectangle.id}</span><span>top:{rectangle.top}</span><span>left:{rectangle.left}</span><span>width:{rectangle.width}</span><span>height:{rectangle.height}</span><span>backgroundColor:{rectangle.color}</span></div>
        })}
        </div>
      </div>

    </div>
  );
};

export default RectangleBox;
