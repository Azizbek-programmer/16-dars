import Form from "../form/Form";
import BookView from "../book-view/BookView";
import { useState } from "react";

const Main = () => {
  const [isVisble, setVisble] = useState(false)
  const [data, setData] = useState([])

  const hendleOpen = () => setVisble(true)
  const hendleClose = () => setVisble(false)
  return (
    <div className="container mx-auto">
        <div className="bg-slate-200 p-6 rounded-2xl my-6 flex justify-between items-center">
            <h2 className="text-xl font-bold uppercase">Foot store</h2>
            <button onClick={hendleOpen} className="bg-slate-900 text-white size-8 rounded-lg text-xl">&#10011;</button>
        </div>
      {isVisble &&  <Form onClose={hendleClose}  setData={setData}/>}
      <BookView data={data}/>
    </div>
  );
};

export default Main;
