import { useState } from 'react'
import languages from '../data/languages'

function Button() {
    const lang = [...languages];
    const [activelang, setActivelang] = useState(lang[0]);
    return (
        <div className="my-4 container">
            <ul className="d-flex align-items-center flex-wrap unstyle">
                {lang.map((lang) => (
                    <li key={lang.id} onClick={() => setActivelang(lang)} className='mx-3 p-3 text-bg-primary'>{lang.title}</li>
                ))}
            </ul>
            <div className="box">
                <h3>{activelang.title}</h3>
                <p>{activelang.description}</p>
            </div>
        </div>
    )
}

export default Button;