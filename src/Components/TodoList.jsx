"use client";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import { useDeleteTodo, useGetTodos } from "../apiHooks/indeX";

function TodoList() {
  const { data, isLoading, isError, error } = useGetTodos();
  const deleteTodoMutation = useDeleteTodo();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error: {error.message}</Typography>;
  }

  const handleDelete = (todoId) => {
    deleteTodoMutation.mutate(todoId);
  };

  return (
    <Box mt={2}>
      {data?.todos?.length > 0 ? (
        data.todos.map((todo) => (
          <Card key={todo.id} sx={{ minWidth: 275, mb: 2 }}>
            <CardContent sx={{ padding: "16px !important" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{todo.todo}</Typography>
                <Tooltip title={"Delete Todo"}>
                  <IconButton onClick={() => handleDelete(todo.id)}>
                    <MdDelete />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No todos available</Typography>
      )}
    </Box>
  );
}

export default TodoList;
