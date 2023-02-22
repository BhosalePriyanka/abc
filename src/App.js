import { useState } from 'react';
import { FormControl, FormGroup,Form } from 'react-bootstrap';
import { Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from 'react-redux';
import {add,del,remove} from "./Redux/Action" 
import { editItem } from './Redux/Action';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


function App() {
const[item,setItem] = useState('')
const[edit,setEdit] = useState('')
const dispatch = useDispatch()
const list = useSelector(state => state.reducer1)

console.log(list)
  return (
    <div className="text-center">
     <h1>Redux App</h1>
     <Row>
     <Form className = "w-50 mx-auto bg-secondary m-5 p-5">
      <Col>
      <FormGroup>
      <FormControl type = "text" placeholder = "Enter item name" value = {item} onChange={(e)=> setItem(e.target.value)} />       
      </FormGroup>
     </Col>
     <Col>
     { edit ? <Button onClick = {()=> dispatch(editItem(edit.id, item), setEdit(''),setItem(''))}>Edit</Button> :
      <Button disabled = {!item} onClick={()=> dispatch(add(item), (setItem('')))}>Submit</Button>}
     </Col>
     </Form>
     </Row>
     <ul>
      {list.map((list) => 
      <li className="list-unstyled p-3">{list.item} 
      <AiFillEdit onClick = {()=> (setItem(list.item), setEdit(list))}/> 
      <AiFillDelete onClick = {()=> dispatch(del(list.id))}/>
      </li>
      )}
      { list.length > 0 ? <Button onClick={ ()=> dispatch(remove(list.id))}>Remove</Button> : ''}
     </ul>
     
    </div>
  );
}

export default App;
