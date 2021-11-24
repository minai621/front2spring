import {atom} from "recoil";
import {Item} from "../../type";

export const TodoList = atom<Array<Item>>({
    key: 'TodoList',
    default: new Array<Item>({id: '', title: '', done: false})
});

export const Loading = atom<boolean>({
    key: 'Loading',
    default: false
});