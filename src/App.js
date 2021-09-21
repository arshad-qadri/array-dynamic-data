
import { useState } from 'react';
import './App.css';
import data from './data';

const btn = [...new Set(data.map((elem) => elem.category)),"all"];
console.log( 'btn', btn);

function App() {
  const [item, setItem]= useState(data)
  console.log(data);

const btnHandle=(item)=>{
  const updatedData= data.filter(e=>e.category===item)
  console.log(item);
  setItem(updatedData)
  if(item==="all"){
      setItem(data);
  }
}

  return (
    <div className="">
      <h1
        className="bg-red-500 h-16 text-center text-white font-bold text-3xl tracking-wider capitalize"
        style={{ lineHeight: "4rem" }}
      >
        Your favourite dish
      </h1>

      <div className="flex justify-center items-center gap-x-6 my-9 ">
        {btn.map((item,i) => {
          return (
            <button key={i} onClick={()=>btnHandle(item)} className="bg-yellow-400 px-6 py-1 text-white capitalize font-bold tracking-wider shadow-xl rounded hover:bg-yellow-500">
              {item}
            </button>
          );
        })}
      </div>
      <div className="w-5/6 mx-auto  mt-4 flex flex-wrap gap-4">
        {item.map((elem) => {
          return (
            <div
              className="bg-white shadow-2xl w-96 h-52 grid grid-cols-3 rounded-xl overflow-hidden"
              key={elem.id}
            >
              <div className="bg-yellow-200 overflow-hidden">
                <img
                  src={elem.img}
                  alt={elem.name}
                  className=" h-full object-cover transform hover:scale-150 duration-1000"
                />
              </div>
              <div className="border col-span-2 p-3">
                <h1 className="text-2xl font-bold"> {elem.name} </h1>
                <p className="text-sm font-semibold my-4">{elem.desc}</p>
                <div className="flex justify-between items-center mt-8  ">
                  <h2 className="text-yellow-400 font-bold text-lg">
                    {`Price : ${elem.price} ₹`}
                  </h2>
                  <button className="bg-yellow-400 text-white font-bold text-sm px-3 py-1 shadow-lg rounded">
                    Order Now
                  </button>
                </div>
                <p className="text-sm font-bold mt-4 text-gray-400">
                  *Prices may vary on selected date
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
//  <div className="container mx-auto mt-4 ">
//    <div className="bg-white shadow-2xl w-96 h-52 grid grid-cols-3 rounded-xl overflow-hidden">
//      <div className="bg-yellow-200 ">
//        <img
//          src="https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg"
//          alt=""
//          className=" h-full object-cover"
//        />
//      </div>
//      <div className="border col-span-2 p-3">
//        <h1 className="text-2xl font-bold">Name</h1>
//        <p className="text-sm font-semibold my-4">
//          Lorem Ipsum is simply dummy text of typesetting industry.
//        </p>
//        <div className="flex justify-between items-center mt-8  ">
//          <h2 className="text-yellow-400 font-bold text-lg">Price : 30 ₹</h2>
//          <button className="bg-yellow-400 text-white font-bold text-sm px-3 py-1 shadow-lg rounded">
//            Order Now
//          </button>
//        </div>
//        <p className="text-sm font-bold mt-4 text-gray-400">
//          *Prices may vary on selected date
//        </p>
//      </div>
//    </div>
//  </div>;