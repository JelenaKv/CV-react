import './App.css'
import Zivotopis from "./components/Zivotopis"
import ImeISlika from "./components/ImeISlika"
import Podaci from "./components/Podaci"
import Obrazovanje from "./components/Obrazovanje"
import Vjestine from "./components/Vjestine"
import Iskustvo from "./components/Iskustvo";

function App() {
    return (
        <div className="App">

            <Zivotopis />
            <ImeISlika />
            <Podaci />
            <Obrazovanje />
            <Iskustvo />
            <Vjestine />

        </div>
    )
}
export default App


