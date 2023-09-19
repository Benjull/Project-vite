import { useState } from "react";

export default function Text() {
    const [texte, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };
    
    return (
        <div>
            <input
             type="text"
             value={texte}
             onChange={handleChange}
              />
            <p><div>{texte}</div></p>


        </div>
        
    );

   
    };
