import { CreateTask } from "~/components/create-task";
import { TaskItem } from "./task-item";
import styles from "./task-list.module.css";

export type Task = {
  userId: string;
  id: number;
  description: string;
  completed: boolean;
};

export async function TaskList() {
  // TODO: Fetch tasks from server
  const tasks: Task[] = [];

  const activeTasks = tasks.filter((task) => !task.completed);

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
        <CreateTask />
      </section>
    </>
  );
}
