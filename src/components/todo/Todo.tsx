import "./Todo.scss";
const Todo = () => {
    return (
        <div className='flex flex-col p-8 bg-bgBlackLight rounded-xl text-start gap-6 h-full w-full'>
            <h2 className='text-2xl font-semibold'>Today's Task</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <input type='checkbox' className='todo-checkbox' />
                    <p>Frontend</p>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' className='todo-checkbox' />
                    <p>Review the Design</p>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' className='todo-checkbox' />
                    <p>Estimate the time</p>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' className='todo-checkbox' />
                    <p>Code UI</p>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' className='todo-checkbox' />
                    <p>Testing</p>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' className='todo-checkbox' />
                    <p>Submit</p>
                </div>
            </div>
        </div>
    );
};

export default Todo;
