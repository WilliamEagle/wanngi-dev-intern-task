import { React, useState } from 'react';
import '../button.css';

export default function Button(props) {
    const icons = ['icon-fire', 'icon-mtn', 'icon-thermo', 'icon-bike'];
    const backgrounds = ['background-135', 'background-136', 'background-137', 'background-207'];
    const [index, setIndex] = useState(0)
    const [icon, setIcon] = useState(icons[0])
    const [background, setBackground] = useState(backgrounds[0])

    function handleClick() {
        let i = index;
        i += 1;

        if (i > backgrounds.length - 1) {
            i = 0;
        }

        setIcon(icons[i]);
        setBackground(backgrounds[i]);
        setIndex(i);
    }
    return (
        <button
            type="button"
            class={background}
            onClick={handleClick}
            {...props}
        >
            <img class={icon} alt="" />
        </button>
    );
};
