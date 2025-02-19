import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Fungsi untuk menambahkan tugas baru
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Fungsi untuk menghapus tugas berdasarkan indeks
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Tambah</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
