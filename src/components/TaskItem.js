import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente para exibir uma tarefa
const TaskItem = ({ task, onToggleComplete, onRemove }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={[styles.taskText, task.completed && styles.completedTask]}>
        {task.text}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.confirmButton]} 
          onPress={() => onToggleComplete(task.id)}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.removeButton]} 
          onPress={() => onRemove(task.id)}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos básicos para o componente
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#121212', // Fundo principal
    },
    taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 20,
      backgroundColor: '#1E1E1E', // Fundo dos itens de tarefa
      borderWidth: 1,
      borderColor: '#333333', // Borda dos itens de tarefa
      borderRadius: 5,
    },
    taskText: {
      fontSize: 16,
      color: '#E0E0E0', // Texto dos itens de tarefa
      flex: 1,
    },
    completedTask: {
      textDecorationLine: 'line-through',
      color: '#B0B0B0', // Texto riscado
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      padding: 10,
      borderRadius: 5,
      marginLeft: 5,
    },
    confirmButton: {
      backgroundColor: '#388E3C', // Botão Confirmar
    },
    removeButton: {
      backgroundColor: '#D32F2F', // Botão Remover
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });
  
export default TaskItem;
