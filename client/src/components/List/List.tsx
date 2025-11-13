import { useAppSelector } from "../../app/hooks";
import "./List.css";

function List() {
    const list = useAppSelector((state) => state.ingredient.list);

    return (
        <section>
            <h1>{list.length > 0 && "Ingredients on Hand"}</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

export default List;
