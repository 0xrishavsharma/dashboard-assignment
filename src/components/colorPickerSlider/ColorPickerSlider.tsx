import chroma from "chroma-js";

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
                className='rounded-full h-4'
                style={{
                    background: `linear-gradient(90deg, ${gradient})`,
                    appearance: "none" /* Remove default styling */,
                    width: "100%" /* Make the slider take up full width */,
                    // height: "15px" /* Adjust as needed */,
                    outline: "none" /* Remove focus outline */,
                    // opacity: "0.7" /* Make the slider slightly transparent */,
                    transition: "opacity 0.2s",
                    /* Custom track styles for Chrome */
                    WebkitSliderRunnableTrack: {
                        height: "16px",
                        borderRadius: "10px",
                    },
                    /* Custom thumb styles for Chrome */
                    WebkitSliderThumb: {
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        border: "2px solid white" /* Add white border */,
                        cursor: "pointer",
                        marginTop:
                            "-3px" /* You may need to adjust this based on the height */,
                        WebkitAppearance: "none" /* Remove default styling */,
                        boxShadow:
                            "0px 0px 10px 0px rgba(0,0,0,0.75)" /* Add box shadow */,
                    },
                    /* Custom thumb styles for Firefox */
                    MozRangeThumb: {
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        cursor: "pointer",
                        boxShadow:
                            "0px 0px 10px 0px rgba(0,0,0,0.75)" /* Add box shadow */,
                        border: "2px solid white" /* Add white border */,
                    },
                    /* Custom thumb styles for IE/Edge */
                    MsThumb: {
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        cursor: "pointer",
                        boxShadow:
                            "0px 0px 10px 0px rgba(0,0,0,0.75)" /* Add box shadow */,
                        border: "2px solid white" /* Add white border */,
                    },
                    /* Custom styles for IE/Edge */
                    MsTrack: {
                        height: "15px",
                        borderRadius: "10px",
                    },
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
