import React from "react";
import './App.css';
import Cart from "./Cart/Cart";
import Header from './Header/Header'
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import axios from "axios";

function App() {

    React.useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            console.log(data);
        });
    }, [])
/*    const [currentItem, setCurrentItem] = useState([])
    const onAddGood = (item) => {
        setCurrentItem([...currentItem, item])
    }*/

    return (
        <div className="container">
{/*          <Header currentItem={currentItem} />
          <Main onAddGood={onAddGood} />*/}
            <Cart />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
