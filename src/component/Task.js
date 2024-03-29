import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import EditTask from './EditTask';
import { useDispatch } from 'react-redux';
import { complete, remove } from './../Redux/actions';
const Task = ({e}) => {
const dispatch=useDispatch();
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
       <p style={e.complete?{color:'green'}:{color:'red'}}> {e.name} </p> 
       <button onClick={()=>dispatch(remove(e.id))}>  <DeleteIcon color='success'/> </button>
       <EditTask eProp={e}/>
       <button onClick={()=>dispatch(complete(e.id))}> complete</button>

    </div>
  )
}

export default Task