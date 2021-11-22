import React from 'react';
import {List, Paper} from "@material-ui/core";
import {Item} from "../../../type";
import Todo from "../atom/Todo";

type TodoType = {
    todos: Item[];
    onEdit: (props: Item, newTitle?: string) => void;
    onDelete: (id: string) => void;
}

const Todos: React.FC<TodoType> = ({todos, onEdit, onDelete}) => {
    return(
        <>
            {todos.length > 0 && (
                <Paper style={{ margin: 16 }}>
                    <List>
                        {todos.map((item: Item) =>
                            <Todo key={item.id} item={item} onEdit={onEdit} onDelete={onDelete}/>
                        )}
                    </List>
                </Paper>
            )}
        </>
    )
};

export default Todos;