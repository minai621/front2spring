import React, {useEffect} from 'react';
import AddTodo from "../atom/AddTodo";
import Todos from "../molecule/Todos";
import {useRecoilState} from "recoil";
import {Loading, TodoList} from "../../RecoilAtom/atom";
import {Item} from "../../../type";
import {client} from "../../../api-config";
import AuthNav from "../molecule/AuthNav";

const TodoCard: React.FC = () => {
    const [loading, setLoading] = useRecoilState(Loading);
    const [todos, setTodos] = useRecoilState(TodoList);
    useEffect(() => {
            (async () => {
                try {
                    const data = await client.get('todo').then((response) => {
                        setLoading(true);
                        return response.data.data;
                    });
                    setTodos(data);
                } catch (error) {
                    setLoading(false);
                    window.location.href = "/login";
                }
            })()
    }, [setTodos])

    const onAddItem = (title: string) => {
        client.post('/todo', {
            title
        }).then((response) => {
            const res = response.data.data;
            console.log(res);
            setTodos(res);
        });
    }

    const onDelete = (id: string) => {
        client.delete('/todo', {
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
        client.put('/todo', {
            ...newTodo
        });
    }


    const onSignoutSubmit = () => {
        localStorage.setItem("ACCESS_TOKEN", "null");
        window.location.href = "/login";
    }


    return(
        <>
            <AuthNav onSignoutSubmit={onSignoutSubmit} />
            <AddTodo onAddItem={onAddItem}/>
            { loading ?
                (<Todos todos={todos} onEdit={onEdit} onDelete={onDelete}/>)
                :
                (<h1>Loading...</h1>)
            }
        </>
    )
};

export default TodoCard;