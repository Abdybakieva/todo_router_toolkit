import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { autnActions } from "../../store/authReducer/authReducer";
import Button from "../IU/button";

function Autn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.email.includes("@") && formState.password.length > 6) {
      dispatch(autnActions.login(formState.email));
      navigate("/todo");
    }
  };
  return (
    <Main>
      <section>
        <Form>
          <StyledEmail>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </StyledEmail>
          <StyledPassword>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </StyledPassword>
          <Button onClick={submitHandler}>Login</Button>
        </Form>
      </section>
    </Main>
  );
}

const Main = styled.main`
  background-color: #cac3ca7b;
  width: 400px;
  border-radius: 10px;
  margin: auto;
  margin-top: 10rem;
  -webkit-box-shadow: 10px -4px 25px -10px rgba(55, 51, 66, 0.3);
  -moz-box-shadow: 10px -4px 25px -10px rgba(55, 51, 66, 0.3);
  box-shadow: 10px -4px 25px -10px rgba(55, 51, 66, 0.3);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Input = styled.input`
  width: 180px;
  height: 20px;
  border: none;
  border-radius: 20px;
`;

export default Autn;
