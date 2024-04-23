import type { Task } from "./task-list";

import styles from "./task-item.module.css";

export function TaskItem({ task }: { task: Task }) {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div className={styles.round}>
          <input type="checkbox" id={`task-${task.id}`} />
          <label htmlFor={`task-${task.id}`}></label>
        </div>
      </div>
      <span className={styles.title}>{task.title}</span>
      <div className={styles.actions}>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}
