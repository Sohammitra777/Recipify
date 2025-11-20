import { reset } from "../../app/features/ingredients/ingredientSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./List.css";

function List() {
    const list = useAppSelector((state) => state.ingredient.list);
    const dispatch = useAppDispatch(); 

    return (
        <section>
            <h1>{list.length > 0 && "Ingredients on Hand"}</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {list.length > 0 && <button onClick={()=> dispatch(reset())}>Reset</button>}
        </section>
    );
}

export default List;
