import ReactMarkdown from 'react-markdown';
import './RecipeList.css'
import { useAppSelector } from '../../app/hooks';

function RecipeList(){
    const recipe = useAppSelector(state => state.ingredient.recipe);
    return (
        <section>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    );
};

export default RecipeList;