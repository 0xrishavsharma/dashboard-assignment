import React from "react";

const Model = () => {
    const [modelOpen, setModelOpen] = React.useState<boolean>(false);
    return (
        <div className=''>
            <button
                className='rounded-full p-3 text-sm-slim bg-bgBlack'
                onClick={() => setModelOpen(!modelOpen)}
            >
                <span>Model</span>
                <span>Model</span>
            </button>
            {modelOpen && (
                <div className='flex flex-col gap-2 p-4 bg-bgBlackLight rounded-xl text-start'>
                    <h2 className='text-xl font-semibold'>Model Name</h2>
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
