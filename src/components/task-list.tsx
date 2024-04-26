"use client";

import { useState } from "react";
import { TaskItem } from "./task-item";
import styles from "./task-list.module.css";

export type Task = {
  id: string;
  title: string;
  state: "COMPLETED" | "ACTIVE";
};

export async function TaskList() {
  const [text, setText] = useState("");

  // todo, get tasks
  const tasks: Task[] = [];
  const activeTasks = tasks.filter((task) => task.state === "ACTIVE");

  return (
    <>
      <div>
        <section className={styles.counter}>
          <div className={styles.taskLabel}>
            {activeTasks.length} task{activeTasks.length == 1 ? "" : "s"}
          </div>
        </section>
        <section className={styles.section}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </section>
      </div>
      <section className={styles.inputContainer}>
        <input
          type="text"
          value={text}
          placeholder="What needs to be done?"
          className={styles.taskInput}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={styles.taskButton}
          onClick={() => {
            // TODO: Implement the add task mutation
            setText("");
          }}
        >
          Add Task
        </button>
      </section>
    </>
  );
}
