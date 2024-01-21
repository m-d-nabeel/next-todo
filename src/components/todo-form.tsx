"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { TodoListFormSchema } from "@/schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { createTodo } from "@/actions/create-todo";

export function TodoForm() {
  const form = useForm<z.infer<typeof TodoListFormSchema>>({
    resolver: zodResolver(TodoListFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "personal",
      priority: "medium",
      status: "incompleted",
      dueDate: new Date().toISOString().split("T")[0],
    },
  });

  async function onSubmit(values: z.infer<typeof TodoListFormSchema>) {
    console.log(values);
    const response = await createTodo(values);
    console.log(response);
  }

  return (
    <div className="max-w-4xl p-12 bg-white rounded-md shadow">
      <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Task Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter task title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Task Description</FormLabel>
                <FormControl>
                  <Input placeholder="Describe the task..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TodoListFormSchema.shape.category._def.values.map(
                      (value) => (
                        <SelectItem key={value} value={value}>
                          {value}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TodoListFormSchema.shape.priority._def.values.map(
                      (value) => (
                        <SelectItem key={value} value={value}>
                          {value}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TodoListFormSchema.shape.status._def.values.map(
                      (value) => (
                        <SelectItem key={value} value={value}>
                          {value}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
