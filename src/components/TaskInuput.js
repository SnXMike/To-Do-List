import React, { useState } from 'react'; 
import { View, TextInput, Button, StyleSheet } from 'react-native'; 
const TaskInput = ({ onAddTask }) => {   
    const [task, setTask] = useState('');   
    const handleAddTask = () => {     
        if (task.trim()) {       
            onAddTask(task);       
            setTask('');     
        }   
    };   return (     
    <View style={styles.inputContainer}>       
    <TextInput         
    style={styles.input}         
    placeholder="Nova Tarefa"         
    value={task}         
    onChangeText={setTask}       
    />       
    <Button title="Adicionar" onPress={handleAddTask} />     
    </View>   
    ); 
}; 
const styles = StyleSheet.create({   
    inputContainer: {     
        flexDirection: 'row',     
        justifyContent: 'space-between',     
        alignItems: 'center',     
        margin: 10,
        placeholderTextColor: "#888888",   
    },   
    input: {     
        width: '80%',     
        borderBottomColor: '#ccc',     
        borderBottomWidth: 1,     
        padding: 10,
        color: '#E0E0E0', // Cor do texto do input   
    }, 
}); 
export default TaskInput;