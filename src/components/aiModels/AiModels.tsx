import Model from "../ui/model";

const AiModels = () => {
    // const modelValues = [
    //     {
    //         id: 1,
    //         name: "UX/UI Design",
    //         checked: false,
    //     },
    //     {
    //         id: 2,
    //         name: "Frontend",
    //         checked: false,
    //     },
    //     {
    //         id: 3,
    //         name: "Backend",
    //         checked: false,
    //     },
    //     {
    //         id: 4,
    //         name: "Full Stack",
    //         checked: false,
    //     },
    //     {
    //         id: 5,
    //         name: "Graphic Designer",
    //         checked: false,
    //     },
    //     {
    //         id: 6,
    //         name: "Web Designer",
    //         checked: false,
    //     },
    //     {
    //         id: 7,
    //         name: "QA",
    //         checked: false,
    //     },
    // ];

    return (
        <div className='p-1 bg-bgBlackLighter rounded-xl'>
            <div className='flex flex-col gap-6 w-full bg-bgBlackLight rounded-xl p-7'>
                <h2 className='text-2xl font-semibold'>AI Models</h2>
                <div className='flex gap-3'>
                    <Model />
                    <Model />
                    <Model />
                </div>
            </div>
        </div>
    );
};

export default AiModels;
