import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { autnActions } from "../../store/authReducer/authReducer";
import { todosActions } from "../../store/todoReducer/store";

import Button from "../IU/button";
import TodoForm from "../todoForm/TodoForm";

function Content() {
  const [inputText, setInputText] = useState("");
  const navigate=useNavigate()


  const dispatch = useDispatch();

   const LogoutBtn = (event) => {
     event.preventDefault();
     dispatch(autnActions.logout());
     navigate("/login");
   };

  const changeInput = (event) => {
    setInputText(event.target.value);
  };

  const deleteAll=()=>{
    dispatch(todosActions.deleteAll([]))
  }

  const buttonHandler = () => {
    const inputState = {
      id: Date.now().toString(),
      title: inputText,
    };
    dispatch(todosActions.add(inputState));
    setInputText("");
  };
  return (
    <>
    <Button onClick={LogoutBtn}>Logout</Button>
      <Container>
        <Input type="text" onChange={changeInput} value={inputText} />
        <Button onClick={buttonHandler}>ADD</Button>
        <Button onClick={deleteAll}>delete all</Button>
      </Container>
      <TodoForm />
    </>
  );
}

export default Content;
const Container = styled.div`
  margin: auto;
  width: 70%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 6rem;
  border: 1px solid #c0c9c9;
  background-color: #c0c9c9;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 22vw;
  height: 5vh;
  border: none;
  border-radius: 7px;
  border: 1px solid #4c6161;
`;