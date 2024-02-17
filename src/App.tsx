import "./App.css";
import ColorPicker from "./components/colorPicker/ColorPicker.tsx";
import MainComponent from "./components/mainComponent/MainComponent";

function App() {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col w-[1284px] max-w-[1284px] gap-4'>
                <ColorPicker />
                <div>
                    <MainComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
