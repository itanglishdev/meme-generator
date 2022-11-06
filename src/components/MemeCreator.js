import { useState } from 'react';
import {data} from '../memeData'

    const randomPosition = Math.floor(Math.random() * data.data.memes.length)
    const randomMeme = data.data.memes[randomPosition].url
    // console.log(randomMeme,randomPosition, 'HERE')

function MemeCreator() {
    
    
    const [meme, setMeme] = useState('')
    const [memeImage, setMemeImage] = useState(randomMeme)

    function changeMemeHandler() {
        console.log('clicked!');
        setMeme(prev => [...prev,memeImage])
    }

    return ( 
        <div className="meme-box">
            <section className="meme-box__top">
                <label htmlFor=""></label>
                <input type="text" placeholder='Top Text' />
                <label htmlFor=""/>
                <input type="text" placeholder='Bottom Text'/>
            </section>
            <section className="meme-box__bottom">
                <button onClick={changeMemeHandler} className='background-colour '>Get a new Image 🖼</button>
            </section>
            <img className='meme-box__image' src={meme} alt="" />
        </div>
     );
}

export default MemeCreator;