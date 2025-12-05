import Footer from "./components/Footer/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";

function App() {
    return (
        <main className="flex flex-col gap-2 select-none bg-[#F5F5F5]">
            <Header />
            <List />
            <Form />
            <Recipe />
            <RecipeList />
            <Footer />
        </main>
    );
}

export default App;
