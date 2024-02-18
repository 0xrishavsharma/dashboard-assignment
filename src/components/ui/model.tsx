import React from "react";

// Icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Model = () => {
    const [modelOpen, setModelOpen] = React.useState<boolean>(false);
    return (
        <div className='relative shadow-2xl'>
            <button
                className='flex items-center gap-2 rounded-full py-2 px-3 text-sm-slim bg-bgBlack'
                onClick={() => setModelOpen(!modelOpen)}
            >
                <span>Model</span>
                <span className='text-xs-slimmer'>
                    {!modelOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
            </button>
            {modelOpen && (
                <div className='absolute w-56 top-10 flex flex-col gap-2 p-4 bg-bgBlack shadow-lg rounded-xl text-start'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <input type='checkbox' className='' />
                            <p>Frontend</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' />
                            <p>Review the Design</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' />
                            <p>Estimate the time</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' />
                            <p>Code UI</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' />
                            <p>Testing</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' />
                            <p>Submit</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Model;
