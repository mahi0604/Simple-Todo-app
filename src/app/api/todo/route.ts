import { NextResponse } from "next/server";

let todos = [];

// Helper function to generate a random ID
const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 11);
};

export const GET = async (req: Request) => {
  return NextResponse.json({
    success: true,
    todos,
  });
};

export const POST = async (req: Request) => {
  const body = await req.json();
  const newTodo = {
    id: generateRandomId(),
    todo: body.todo,
  };

  todos.push(newTodo);

  return NextResponse.json({
    success: true,
    message: "Todo created successfully.",
    todo: newTodo,
  });
};

export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const id = body.id;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo ID is required",
        },
        { status: 400 }
      );
    }

    todos = todos.filter((todo) => todo.id !== id);

    return NextResponse.json({
      success: true,
      message: `Todo deleted successfully.`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      { status: 500 }
    );
  }
};
