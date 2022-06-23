import style from "./SingleColorPicker.module.css"

function SingleColorPicker({ color, handleChange, value }) {
    let boxColor;


    if (color === 'r') {
        boxColor = { backgroundColor: `rgb(${value},0,0)` }
    }
    if (color === 'g') {
        boxColor = { backgroundColor: `rgb(0,${value},0)` }
    }
    if (color === 'b') {
        boxColor = { backgroundColor: `rgb(0,0,${value})` }
    }



    return (
        <div style={{ display: 'flex' }}>
            <div className={style.box} style={boxColor}></div>
            <input type="number" min={0} max={255} onChange={handleChange} name={color} />
        </div>
    );
}

export default SingleColorPicker;