import React, {ChangeEvent, useState} from 'react';
import {Button, Grid, makeStyles, Paper, TextField} from "@material-ui/core";

type AddType = {
    onAddItem: (title: string) => void;
};

const useStyles = makeStyles({
    btn: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        minWidth: 0,
        maxWidth: '100%'
    },
    input: {
        cursor: "not-allowed"
    }
})

const AddTodo: React.FC<AddType> = ({onAddItem}) => {
    const [title, setTitle] = useState<string>('');
    const classes = useStyles();
    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onAddItemButton = () => {
        onAddItem(title);
    }
    const onAddItemEnter = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            onAddItemButton();
        }
    }
    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container >
                <Grid xs={11} md={11} item style={{ paddingRight: 16}}>
                    <TextField
                        onChange={onTitleChange}
                        onKeyPress={onAddItemEnter}
                        placeholder="Add Todo here" fullWidth value={title}/>
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        onClick={onAddItemButton}
                        color="secondary" variant="outlined"
                        className={classes.btn}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default AddTodo;