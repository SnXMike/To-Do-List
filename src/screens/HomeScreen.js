import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/TaskInuput';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now().toString(), text: taskText, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleComplete={toggleTaskCompletion}
            onRemove={removeTask}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
});

export default HomeScreen;
