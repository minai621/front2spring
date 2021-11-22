import React, {ChangeEvent, useRef, useState} from 'react';
import {
    Checkbox,
    IconButton,
    InputBase,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {Item} from "../../../type";
import {DeleteOutline} from "@material-ui/icons";

type TodoProps = {
    item: Item;
    onEdit: (props: Item, newTitle?: string) => void;
    onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ( props ) => {
    const [readOnly, setReadOnly] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);


    const onEditOff = () => {
        setReadOnly(false);
    }

    const onEditSuccess = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            setReadOnly(true);
        }
    }

    const onEditTodo = (e: ChangeEvent<HTMLInputElement>) => {
        props.onEdit(props.item, e.target.value);
    }

    const onDeleteTodo = () => {
        props.onDelete(props.item.id);
    }

    return(
        <ListItem>
            <Checkbox
                checked={props.item.done}
                onChange={() => props.onEdit(props.item)}
                disableRipple/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        "aria-readonly": readOnly
                    }}
                    onChange={onEditTodo}
                    onClick={onEditOff}
                    onKeyPress={onEditSuccess}
                    type="text"
                    ref={inputRef}
                    id={props.item.id}
                    name={props.item.id}
                    value={props.item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton
                    onClick={onDeleteTodo}
                    aria-label="Delete Todo">
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default Todo;