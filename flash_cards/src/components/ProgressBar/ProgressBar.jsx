import {useState, useEffect} from "react";
import '../ProgressBar/progressBar.css'

export default function ProgressBar ({done}) {

    const [style, setStyle] = useState();

        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        }

        useEffect(() => {
            setStyle(newStyle);
        });

    return (
        <>
            <div className='progress__body'>
                <h1>Your progress:</h1>
                <div className='progress'>
                    <div className="progress-done" style={style}>
                        {done}%
                    </div>                    
                </div>
            </div>
        </>
    )
}
