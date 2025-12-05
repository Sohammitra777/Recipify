import {  useAppSelector } from "../app/hooks";

function List() {
    const list = useAppSelector((state) => state.ingredient.list);

    return (
        <section className="ml-7 mt-2 sm:mt-4">
            <h1 className="text-xl sm:text-3xl font-medium">
                {list.length > 0 && "Ingredients on Hand"}
            </h1>
            <ul className="mt-2">
                {list.map((item, index) => (
                    <li
                        className="mt-1 text-lg sm:text-[1.5rem] tracking-wide text-[#475467]"
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            
        </section>
    );
}

export default List;
