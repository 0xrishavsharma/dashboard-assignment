import { useState } from "react";
import OpacityPicker from "../opacityPicker/OpacityPicker.jsx";
import ColorPickerSlider from "../colorPickerSlider/ColorPickerSlider";

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState<string>("#6466f2");
    return (
        <div className='flex justify-between items-center gap-4'>
            <div className='flex-[2] w-full'>
                <ColorPickerSlider setSelectedColor={setSelectedColor} />
            </div>
            <div className='flex-[6]'>
                <OpacityPicker color={selectedColor} />
            </div>
        </div>
    );
};

export default ColorPicker;
