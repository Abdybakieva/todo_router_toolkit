import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todosActions } from '../../store/todoReducer/store';

import Button from '../IU/button';

function TodoList({title,el}) {
  const [todoDelete,setTodoDelete]=useState("")
  const [isLogaut,setLogout]=useState(false)

  const dispatch=useDispatch()
  console.log("id",el.id);
 
  const deleteHandler=()=>{
    dispatch(todosActions.delete(el.id))
    console.log(dispatch);
  }

  const inputChangeHandler=(event)=>{
    setTodoDelete(event.target.value)
  }
  const editHandler=()=>{
    setLogout(true)
    setTodoDelete(title)
  }
  
  const saveBtnHandler=()=>{
    dispatch(todosActions.edit({id:el.id,value:todoDelete}))
    setLogout(false)
  }


  const completedBtnHandler=()=>{
    dispatch(todosActions.completedtodos(el.id))
  }
  return (
    <ContainerList>
      {isLogaut ? (
      <>< Edit>
        <Input type="text" value={todoDelete} onChange={inputChangeHandler} />
        <Button onClick={saveBtnHandler}>Save</Button>
      </Edit>
      </>
      ):(
      <StyledConponents>
        <p className={`${el.completed ? "hh" : "gg"}`}>{title}</p>
        <Button onClick={completedBtnHandler}>Completed</Button>
        <Button onClick={deleteHandler}>delete</Button>
        <Button onClick={editHandler}>edit</Button>
      </StyledConponents>
 )} 
    </ContainerList>
  );
}

export default TodoList

const ContainerList = styled.div`
  background-color: #dadadd;
  width: 600px;
  margin: auto;
  border-radius: 10px;
  margin-top: 40px;
  padding: 13px 20px;
`;

const StyledConponents = styled.div`
  -webkit-box-shadow: 13px -6px 16px 6px rgba(34, 60, 80, 0.28);
  -moz-box-shadow: 13px -6px 16px 6px rgba(34, 60, 80, 0.28);
  box-shadow: 13px -6px 16px 6px rgba(34, 60, 80, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 1.5rem;
  .hh {
    text-decoration: line-through;
  }
`;

const Input = styled.input`
  width: 19vw;
  height: 5vh;
  border: none;
  border-radius: 7px;
  background-color: #daecec;
  border: 1px solid #e1e6e6;
`;


const Edit = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;