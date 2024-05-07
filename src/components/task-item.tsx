"use client";

import type { Task } from "./task-list";

import styles from "./task-item.module.css";

export function TaskItem({ task }: { task: Task }) {
  // TODO: Implement the add task mutation
  // const addTask = api.tasks...

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div className={styles.round}>
          <input
            type="checkbox"
            id={`task-${task.id}`}
            checked={task.completed}
            data-testid={`task-${task.id}`}
            onClick={() => {
              // TODO: Implement the toggle task completion mutation
            }}
          />
          <label htmlFor={`task-${task.id}`}></label>
        </div>
      </div>
      <span
        className={styles.title}
        style={task.completed ? { textDecoration: "line-through" } : undefined}
      >
        {task.description}
      </span>
      <div className={styles.actions}>
        <button
          data-testid={`delete-${task.id}`}
          className={styles.deleteButton}
          onClick={() => {
            // TODO: Implement the delete task mutation
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
