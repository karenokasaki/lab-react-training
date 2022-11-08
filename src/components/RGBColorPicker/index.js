import { useState } from "react";
import SingleColorPicker from "../SingleColorPicker";
import style from "./RGBColorPicker.module.css"


function RGBColorPicker() {

    const [rgb, setRgb] = useState('rgb')

    const [form, setForm] = useState({
        r: 0,
        g: 0,
        b: 0
    })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const colorbox = { backgroundColor: `rgb(${form.r},${form.g},${form.b})` }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SingleColorPicker color={rgb[0]} handleChange={handleChange} value={form.r} />
            <SingleColorPicker color={rgb[1]} handleChange={handleChange} value={form.g} />
            <SingleColorPicker color={rgb[2]} handleChange={handleChange} value={form.b} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={colorbox} className={style.boxColor}></div>
                <span>rgb({form.r}, {form.g}, {form.b})</span>
            </div>
        </div>
    );
}

export default RGBColorPicker;