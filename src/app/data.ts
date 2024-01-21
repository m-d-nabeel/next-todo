import { TodoSchema } from "@/schemas/index";
import z from "zod";
export const todoList: z.infer<typeof TodoSchema>[] = [
  {
    id: "1",
    title: "Buy milk",
    description: "Go to the store and buy milk",
    status: "incompleted",
    category: "personal",
    priority: "low",
    tags: ["personal", "chores"],
    createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
    dueDate: "2021-06-02",
    createdAt: "2021-06-02T00:00:00.000Z",
    updatedAt: "2021-06-02T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Buy eggs",
    description: "Go to the store and buy eggs",
    status: "ongoing",
    category: "personal",
    priority: "medium",
    tags: ["personal", "chores"],
    createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
    dueDate: "2021-06-02",
    createdAt: "2021-06-02T00:00:00.000Z",
    updatedAt: "2021-06-02T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Buy bread",
    description: "Go to the store and buy bread",
    status: "completed",
    category: "personal",
    priority: "high",
    tags: ["personal", "chores"],
    createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
    dueDate: "2021-06-02",
    createdAt: "2021-06-02T00:00:00.000Z",
    updatedAt: "2021-06-02T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Buy cheese",
    description: "Go to the store and buy cheese",
    status: "incompleted",
    category: "personal",
    priority: "low",
    tags: ["personal", "chores"],
    createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
    dueDate: "2021-06-02",
    createdAt: "2021-06-02T00:00:00.000Z",
    updatedAt: "2021-06-02T00:00:00.000Z",
  },
];

todoList.push({
  id: "5",
  title: "Complete Presentation Slides",
  description:
    "Create a comprehensive set of presentation slides for the upcoming team meeting. Include key points, visual aids, and relevant data.",
  status: "incompleted",
  category: "work",
  priority: "high",
  tags: ["work", "presentation"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-02",
  createdAt: "2021-06-02T00:00:00.000Z",
  updatedAt: "2021-06-02T00:00:00.000Z",
});

todoList.push({
  id: "6",
  title: "Data Entry and Analysis",
  description:
    "Enter and organize financial data into a spreadsheet. Perform basic data analysis to identify trends and discrepancies. Generate a summary report for review.",
  status: "ongoing",
  category: "work",
  priority: "medium",
  tags: ["work", "data"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-02",
  createdAt: "2021-06-02T00:00:00.000Z",
  updatedAt: "2021-06-02T00:00:00.000Z",
});

todoList.push({
  id: "7",
  title: "Product Launch",
  description:
    "Write compelling copy for a client's upcoming product launch. Engage the target audience and highlight the product's unique selling points.",
  status: "completed",
  category: "work",
  priority: "low",
  tags: ["work", "product"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-02",
  createdAt: "2021-06-02T00:00:00.000Z",
  updatedAt: "2021-06-02T00:00:00.000Z",
});

todoList.push({
  id: "8",
  title: "Graphic Design for Event Flyers",
  description:
    "Create visually appealing event flyers for a community workshop. Incorporate relevant images, colors, and information to attract participants.",
  status: "incompleted",
  category: "personal",
  priority: "high",
  tags: ["personal", "design"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-02",
  createdAt: "2021-06-02T00:00:00.000Z",
  updatedAt: "2021-06-02T00:00:00.000Z",
});

todoList.push({
  id: "9",
  title: "Social Media Campaign Strategy",
  description:
    "Develop a social media campaign strategy for a client in the fashion industry. Identify target audiences, create engaging content, and plan the rollout of posts across various platforms.",
  status: "ongoing",
  category: "personal",
  priority: "medium",
  tags: ["personal", "social"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-02",
  createdAt: "2021-06-02T00:00:00.000Z",
  updatedAt: "2021-06-02T00:00:00.000Z",
});

todoList.push({
  id: "10",
  title: "Academic Paper Editing",
  description:
    "Edit and proofread an academic paper on psychological research. Ensure clarity, coherence, and adherence to academic writing standards.",
  status: "completed",
  category: "personal",
  priority: "low",
  tags: ["personal", "academic"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-02",
  createdAt: "2021-06-02T00:00:00.000Z",
  updatedAt: "2021-06-02T00:00:00.000Z",
});

todoList.push({
  id: "11",
  title: "Programming Assignment",
  description:
    "Complete a Java programming assignment that involves implementing data structures and algorithms. Ensure code efficiency and document the solution thoroughly.",
  status: "incompleted",
  category: "work",
  priority: "low",
  tags: ["work", "programming"],
  createdBy: "auth0|65acb2d4b52eb4c94c2cbba8",
  dueDate: "2021-06-03",
  createdAt: "2021-06-03T00:00:00.000Z",
  updatedAt: "2021-06-03T00:00:00.000Z",
});
