import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Recipe from "./components/Recipe/Recipe";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
    return (
        <div className="app">
            <div className="content">
                <Header />
                <Footer />
                <Form />
                <List />
                <Recipe />
                <RecipeList />
                
            </div>
        </div>
    );
}

export default App;
