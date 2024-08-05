import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiRoutes } from "./route";

const { todo } = apiRoutes;

export const useGetTodos = () => {
  const { url, method } = todo.get;
  return useQuery("todos", () =>
    axios(url, { headers: { method: method } })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching todos:", error);
        throw error;
      })
  );
};

export const useCreateTodos = () => {
  const queryClient = useQueryClient();
  const { url, method } = todo.post; // Assuming you have a create route in your apiRoutes
  return useMutation(
    (data) =>
      axios(url, {
        method: method,
        data: data,
      })
        .then((response) => response.data)
        .catch((error) => {
          console.error("Error creating todo:", error);
          throw error;
        }),
    {
      onSuccess: (data) => {
        data?.message && toast.success(data?.message);
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { url, method } = todo.delete; // Assuming you have a delete route in your apiRoutes

  return useMutation(
    (todoId) =>
      axios
        .delete(url, {
          data: { id: todoId },
          method: method,
        })
        .then((response) => response.data)
        .catch((error) => {
          console.error("Error deleting todo:", error);
          throw error;
        }),
    {
      onSuccess: (data) => {
        data?.message && toast.success(data?.message);
        // Refetch todos after a todo is deleted
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
