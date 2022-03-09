import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask, filter } from "../Redux/actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input!=="") {
      //trim tna7i lespace menna w menn
      dispatch(addtask({ name: input.trim(), id: Math.random(), complete: false }));
      setInput("");
    } else { alert('please write something')
    }
  };
  return (
    <div>
      {" "}
      AddTask
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
        placeholder="write your task..."
      />
      <button onClick={handleAdd}> add</button>
     <div style={{display:'flex',justifyContent:'center'}}>  
      <button onClick={()=>dispatch(filter('all'))}> All </button>
      <button onClick={()=>dispatch(filter('complete'))}> Complete</button>
      <button onClick={()=>dispatch(filter('nocomplete'))}> No Complete </button>
      </div>
    </div>
  );
};

export default AddTask;
