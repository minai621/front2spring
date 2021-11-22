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
    onEdit: (props: Item, newTitle?: string, newDone?: boolean) => void;
    onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ( props ) => {
    const [title, setTitle] = useState<string>(props.item.title);
    const [done, setDone] = useState<boolean>(props.item.done);
    const [readOnly, setReadOnly] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);


    const onEditOff = () => {
        setReadOnly(false);
    }

    const onEditSuccess = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            setReadOnly(true);
            props.onEdit(props.item, title);
        }
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onDeleteTodo = () => {
        props.onDelete(props.item.id);
    }

    return(
        <ListItem>
            <Checkbox
                checked={done}
                onClick={() => {
                    setDone(!done)
                    props.onEdit(props.item, props.item.title ,done);
                }}
                disableRipple/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        "aria-readonly": readOnly
                    }}
                    onChange={onChangeTitle}
                    onClick={onEditOff}
                    onKeyPress={onEditSuccess}
                    type="text"
                    ref={inputRef}
                    id={props.item.id}
                    name={props.item.id}
                    value={title}
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