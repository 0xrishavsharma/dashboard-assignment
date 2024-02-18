import React, { useEffect } from "react";

const ClockComponent = () => {
    const [currentTime] = React.useState(new Date());
    const hourHandRef = React.useRef<HTMLSpanElement>(null);
    const minuteHandRef = React.useRef<HTMLSpanElement>(null);
    const secondHandRef = React.useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const inc = 1000;

        function clock() {
            const date = new Date();

            const hours = ((date.getHours() + 11) % 12) + 1;
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            const hour = hours * 30;
            const minute = minutes * 6;
            const second = seconds * 6;

            if (
                hourHandRef.current &&
                minuteHandRef.current &&
                secondHandRef.current
            ) {
                hourHandRef.current.style.transform = `rotate(${hour}deg)`;
                minuteHandRef.current.style.transform = `rotate(${minute}deg)`;
                secondHandRef.current.style.transform = `rotate(${second}deg)`;
            }
        }

        const intervalId = setInterval(clock, inc);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", "clock");

        const placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");
        placeholder.style.height = "140px";
        placeholder.style.width = "140px";
        // e.currentTarget.parentNode!.insertBefore(placeholder, e.currentTarget);
    };

    // const handleDragEnd = () => {
    //     const placeholder = document.querySelector(".placeholder");
    //     if (placeholder) placeholder.remove();
    // };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        if (data === "clock") {
            e.currentTarget.appendChild(document.querySelector(".clock")!);
        }
    };

    return (
        <div
            className='flex flex-col gap-4 p-14 items-center justify-center h-full w-full rounded-xl bg-cover relative overflow-hidden'
            style={{
                backgroundImage: `url('/images/clock-component-bg.svg')`,
            }}
        >
            <div className='absolute top-0  h-full w-full bg-gradient-to-t from-primary z-[1]'></div>
            <div className='flex flex-col gap-4 items-center z-10'>
                <div
                    className='clock rounded-full z-10 shadow-xl bg-white h-[140px] w-[140px]'
                    draggable
                    onDragStart={handleDragStart}
                >
                    <div className='wrap overflow-hidden relative h-full w-full rounded-full'>
                        <span
                            className='hour absolute h-8 w-[2.5px] m-auto -top-[32px] left-0 bottom-0 right-0 bg-black origin-[bottom_center] rotate-0 rounded-full z-[-3]'
                            ref={hourHandRef}
                        ></span>
                        <span
                            className='minute absolute h-12 w-[2.5px] m-auto -top-[48px] left-0 bottom-0 right-[-10px] bg-black origin-[bottom_center] rotate-90 rounded-full  z-[-3]'
                            ref={minuteHandRef}
                        ></span>
                        <span
                            className='second absolute h-14 w-[1.5px] m-auto -top-[56px] left-0 right-0 bottom-0  bg-primary  origin-[bottom_center] rotate-180'
                            ref={secondHandRef}
                        ></span>
                        <span className='dot absolute top-0 bottom-0 right-0 left-0 w-2 h-2 rounded-full bg-primary m-auto z-[-1]'></span>
                        <span className='dot absolute top-0 bottom-0 right-0 left-0 w-3 h-3 rounded-full bg-white m-auto z-[-2]'></span>
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-[32px] text-center'>
                        {currentTime.getHours().toString().padStart(2, "0")}:
                        {currentTime.getMinutes().toString().padStart(2, "0")}
                    </h2>
                </div>
                <img
                    src='public/icons/long-arrow.png'
                    className='h-8 w-3.5'
                    alt=''
                />
                <div
                    className='dropzone border-2 border-white/30 border-dashed rounded-full bg-white/10 '
                    style={{
                        height: "132px",
                        width: "132px",
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
            </div>
        </div>
    );
};

export default ClockComponent;
