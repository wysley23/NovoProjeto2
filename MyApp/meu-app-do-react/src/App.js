import React, { useState } from 'react';
 
 
const App = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const textColor = isHovered ? 'green' : 'red';
    return (
        <div >
            <img className="Logo192" alt="" /><p>Fácil</p>
            <br>
            </br>
            <br>
            </br>
            <button  className={textColor} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><h1>{textColor}</h1> </button>
                       
            <br>
            </br>
            <button className="botao" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><h1>Clique aqui</h1></button>
        </div>
    );


};

export default App;