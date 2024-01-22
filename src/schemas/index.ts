import * as z from "zod";

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  status: z.enum(["incomplete", "ongoing", "completed"]),
  category: z.enum(["work", "personal", "others"]),
  priority: z.enum(["low", "medium", "high"]),
  tags: z.array(z.string()).optional(),
  dueDate: z.string(),
  createdBy: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const TodoListFormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  status: z.enum(["incomplete", "ongoing", "completed"]),
  category: z.enum(["work", "personal", "others"]),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.string(),
  tags: z.array(z.string()).optional(),
});
