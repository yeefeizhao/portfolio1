import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import NavButton from "./NavButton";

function App() {
    return (
        <div className="app">
            <Header />
            <div
                className="nav-sticky"
                onClick={(e) => {
                    let nav = document.getElementById("nav");
                    e.preventDefault();
                    nav && nav.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState("nav", "nav", "/");
                }}
            >
                <NavButton />
            </div>

            <div id="nav">
                <Nav />
            </div>
            
        </div>
    );
}

export default App;
