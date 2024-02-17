import chroma from "chroma-js";

type OpacityPickerProps = {
    color: string;
};

const OpacityPicker: React.FC<OpacityPickerProps> = ({ color }) => {
    // const color = "#6466f2";
    // Creating a color scale from white to the selected color
    const colorScale = chroma.scale(["white", color]).mode("lch").colors(10);
    return (
        <div className='bg-bgBlackLighter h-12 rounded-full items-center flex p-4'>
            <div className='flex gap-1 justify-between w-full items-center'>
                {colorScale.map((shade, _id) => {
                    return (
                        <div
                            className='h-4 rounded-full flex-1'
                            style={{ backgroundColor: shade }}
                            key={_id}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default OpacityPicker;
