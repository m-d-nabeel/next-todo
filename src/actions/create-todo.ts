"use server";
import { todoList } from "@/app/data";
import { getSession } from "@auth0/nextjs-auth0";
import { TodoListFormSchema } from "@/schemas/index";
import z from "zod";

export const createTodo = async (
  values: z.infer<typeof TodoListFormSchema>
) => {
  try {
    const session = await getSession();
    const userId = session?.user?.sub;
    if (!userId) {
      return { status: "failed" };
    }
    const todoTC = {
      id: (todoList.length + 1).toString(),
      createdBy: userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...values,
    };
    todoList.push(todoTC);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
};

export const getTodoList = async () => {
  try {
    const session = await getSession();
    const userId = session?.user?.sub;

    if (!userId) {
      return { status: "failed" };
    }
    const filteredTodoList = todoList.filter((todo) => {
      if (todo.createdBy === userId) {
        return todo;
      }
    });

    return { status: "success", data: filteredTodoList };
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
};
