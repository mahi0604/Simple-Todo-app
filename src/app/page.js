"use client";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import Todo from "../Components/todo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const queryClient = new QueryClient({});
  return (
    <main className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Todo />
        </Box>
      </QueryClientProvider>
      <div>
        <Toaster />
      </div>
    </main>
  );
}
