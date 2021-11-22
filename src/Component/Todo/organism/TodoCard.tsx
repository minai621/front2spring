import React from 'react';
import AddTodo from "../atom/AddTodo";
import Todos from "../molecule/Todos";
import {useRecoilState} from "recoil";
import {TodoList} from "../../RecoilAtom/atom";
import {Item} from "../../../type";

const TodoCard: React.FC = () => {
    const [todos, setTodos] = useRecoilState(TodoList);

    const onAddItem = (title: string) => {
        const newTodo = {
            id: 'id-'+todos.length,
            title: title,
            done: false
        };
        setTodos([
            ...todos, newTodo
        ]);
    }

    const onDelete = (id: string) => {
        setTodos([...todos.filter(v => v.id !== id)])
    }

    const onEdit = (props: Item, newTitle?: string) => {
        let newTodo = {...props};
        newTodo.done = !newTodo.done;
        if(newTitle){
            newTodo.title = newTitle;
        }
        setTodos(
            [...todos.map(v => v.id === props.id ? newTodo : v)]
        )
    }

    return(
        <>
            <AddTodo onAddItem={onAddItem}/>
            <Todos todos={todos} onEdit={onEdit} onDelete={onDelete}/>
        </>
    )
};

export default TodoCard;