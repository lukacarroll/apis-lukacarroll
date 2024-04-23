"use client";

import { TaskItem } from "./task-item";
import styles from "./task-list.module.css";

export type Task = {
  id: string;
  title: string;
  state: "PINNED" | "COMPLETED" | "ACTIVE";
};

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <>
      <div>
        <section className={styles.counter}>
          <div className={styles.taskLabel}>0 tasks</div>
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
          placeholder="What needs to be done?"
          className={styles.taskInput}
        />
        <button className={styles.taskButton}>Add Task</button>
      </section>
    </>
  );
}
