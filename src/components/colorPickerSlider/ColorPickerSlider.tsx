import chroma from "chroma-js";
import "./ColorPickerSlider.scss";

type ColorPickerSliderProps = {
    setSelectedColor: (color: string) => void;
};

const ColorPickerSlider: React.FC<ColorPickerSliderProps> = ({
    setSelectedColor,
}) => {
    // Create a color scale from red to blue
    const colorScale = chroma
        .scale([
            "Orange",
            "Yellow",
            "Green",
            // "LightGreen",
            "Cyan",
            "Blue",
            "Purple",
            "Red",
        ])
        .colors(100);

    // Generate a CSS gradient string from the color scale
    const gradient = colorScale.map((color) => color).join(",");

    return (
        <div className='flex justify-center p-4 items-center rounded-full h-12 bg-bgBlackLighter w-full'>
            <input
                type='range'
                min={0}
                max={99}
                defaultValue={80}
                className='color-picker-input rounded-full h-4'
                style={{
                    background: `linear-gradient(90deg, ${gradient})`,
                }}
                onChange={(e) => {
                    const color = colorScale[parseInt(e.target.value)];
                    setSelectedColor(color);
                }}
            />
        </div>
    );
};

export default ColorPickerSlider;
