import AiModels from "../aiModels/AiModels";
import BottomBar from "../bottomBar/BottomBar";
import ClockComponent from "../clockComponent/ClockComponent";
import Todo from "../todo/Todo";

const MainComponent = () => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-bgBlack rounded-xl'>
            <div className='flex gap-4 text-start'>
                <div className='flex-[3]'>
                    <Todo />
                </div>
                <div className='flex-[5]'>
                    <AiModels />
                </div>
                <div className='flex-[2]'>
                    <ClockComponent />
                </div>
            </div>
            <div className=''>
                <BottomBar />
            </div>
        </div>
    );
};

export default MainComponent;
