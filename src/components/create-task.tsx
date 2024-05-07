"use client";

import { useState } from "react";
import styles from "./create-task.module.css";

export function CreateTask() {
  const [text, setText] = useState("");

  return (
    <>
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
    </>
  );
}
