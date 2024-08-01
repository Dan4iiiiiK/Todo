import Todo from "./Todo";
import styles from './TodoList.module.css'

// const setTodoList = (todos < 0) ?
//  <h2>Todo list is empty</h2> :
//  <div>
//     {todos.map((todo, index) => <Todo todo={todo} key={index}/>)}
//  </div>

function TodoList ({ todos, deleteTodo, toggleTodo }) {
    const setTodoList = (!todos.length) ?
    <h2>Todo list is empty</h2> :
    <div className={styles.todoListContainer}>
       {todos.map((todo) => <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
    </div>

    return  setTodoList
}

export default TodoList