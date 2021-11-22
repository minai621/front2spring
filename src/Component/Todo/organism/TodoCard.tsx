import React, {useEffect} from 'react';
import AddTodo from "../atom/AddTodo";
import Todos from "../molecule/Todos";
import {useRecoilState} from "recoil";
import {TodoList} from "../../RecoilAtom/atom";
import {Item} from "../../../type";
import {client} from "../../../api-config";

const TodoCard: React.FC = () => {

    const [todos, setTodos] = useRecoilState(TodoList);
    useEffect(() => {
            (async () => {
                try {
                    const data = await client.get('todo').then((response) => {
                        return response.data.data;
                    });
                    setTodos(data);
                } catch (error) {
                    window.location.href = "/login";
                }
            })()
    }, [setTodos])

    const onAddItem = (title: string) => {
        client.post('todo', {
            title
        }).then((response) => {
            const res = response.data.data;
            console.log(res);
            setTodos(res);
        });
    }

    const onDelete = (id: string) => {
        client.delete('todo', {
            data: {id}
        }).then((response) => setTodos(response.data));
    }

    const onEdit = (props: Item, newTitle?: string, newDone?: boolean) => {
        let newTodo = {...props};
        if(newTitle){
            newTodo.title = newTitle;
        }
        if(newDone){
            newTodo.done = newDone;
        }
        console.log(newTodo);
        client.put('todo', {
            ...newTodo
        });
    }

    return(
        <>
            <AddTodo onAddItem={onAddItem}/>
            <Todos todos={todos} onEdit={onEdit} onDelete={onDelete}/>
        </>
    )
};

export default TodoCard;