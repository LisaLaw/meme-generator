import React, { useState } from "react"

export const MemeGenerator = () => {
    const [ topText, bottomText, randomMeme ] = useState();

    const handleChange = () => {
        return "hello world";
    }

    return (
        <div className="form">
            <form>
                <input 
                    name="topText"
                    value={topText}
                    onChange={handleChange}
                />
                <input 
                    name="bottomText"
                    value={bottomText}
                    onChange={handleChange}
                />
            </form>
            <br />

            <img
                src=""
                alt="random meme"
                value={randomMeme}
                name="randomMeme"
            />
            <br />
        </div>
    )
}
