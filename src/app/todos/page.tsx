import { getTodoList } from "@/actions/create-todo";
import { TodoUI } from "@/components/todo-ui";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default withPageAuthRequired(async function Todos() {
  const session = await getSession();
  if (!session?.user) {
    return redirect("/");
  }
  const todoList = await getTodoList();
  return (
    <div className="flex flex-col w-full h-full">
      <TodoUI todoList={todoList.data} />
    </div>
  );
});
