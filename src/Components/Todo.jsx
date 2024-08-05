"use client";
import { Box } from "@mui/material";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  return (
    <>
      <Box
        sx={{
          mt: { xs: 2, sm: 4, md: 6 },
          width: {
            xs: "100%",
            md: "400px",
            lg: "600px",
          },
          padding: "30px ",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            background: "white",
            padding: 4,
            borderRadius: 5,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <TodoHeader />
          <TodoInput />
        </Box>
        <TodoList />
      </Box>
    </>
  );
}

export default Todo;
