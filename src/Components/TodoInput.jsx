"use client";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useCreateTodos } from "../apiHooks/indeX";

function TodoInput() {
  const [inputVal, setInputVal] = useState("");
  const { mutate } = useCreateTodos();

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      mutate({ todo: inputVal });
      setInputVal("");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <FormControl variant="outlined" fullWidth sx={{ mt: 4 }}>
          <InputLabel htmlFor="todo-input">Todo</InputLabel>
          <Input
            id="todo-input"
            value={inputVal}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <Tooltip title={"Add Todo"}>
                  <IconButton edge="end" type="submit">
                    <IoMdAdd />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            }
            label="Todo"
          />
        </FormControl>
      </form>
    </>
  );
}

export default TodoInput;
