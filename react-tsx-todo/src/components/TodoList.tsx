import {TodoItem} from './TodoItem';
import {ITodo} from '../types/date';

interface ItodoListProps{
    items:ITodo[];
    toggleTodo:(id:number)=>void;
    removeTodo:(id:number)=>void;
}

const TodoList:React.FC<ItodoListProps>=(props)=>{
    const {items,removeTodo,toggleTodo}=props;

    return <div>
        {items.map(todo=><TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo}/>)}
    </div>
    
};

export {TodoList};