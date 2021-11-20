import React from 'react';
import {InputBase, ListItem, ListItemText, Checkbox} from "@material-ui/core";
import { itemType } from "../../../type";

const Todo: React.FC<itemType> = (item: itemType) => {
    return(
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    )
};

export default Todo;