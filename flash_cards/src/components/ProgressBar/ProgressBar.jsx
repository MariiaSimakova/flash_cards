import {useState, useEffect} from "react";
import '../ProgressBar/progressBar.css'

export default function ProgressBar ({done}) {

    const [style, setStyle] = useState();

    useEffect(() => {
        console.log("effect")
        const timer = setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            setStyle(newStyle);
            console.log('Initial timeout!'); 
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [done]);

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
