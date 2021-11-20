import React from 'react';
import {itemType} from "./type";
import {List, Paper} from "@material-ui/core";
import Todo from "./Component/Todo/molecule/Todo";

const App: React.FC = () => {
    const items: Array<itemType> = [
        {id: "1", title: "hello Wold 1", done: true},
        {id: "2", title: "hello Wold 2", done: false},
    ];
    return(
        <>
            {items.length > 0 && (
                <Paper style={{ margin: 16 }}>
                    <List>
                        {items.map((item: itemType, index) =>
                            <Todo key={index} {...item}/>
                        )}
                    </List>
                </Paper>
            )}
        </>
    )
};

export default App;