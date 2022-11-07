import { useState } from 'react';
import {data} from '../memeData'

    const randomPosition = Math.floor(Math.random() * data.data.memes.length)
    const randomMeme = data.data.memes[randomPosition].url
    // console.log(randomMeme,randomPosition, 'HERE')

function MemeCreator() {
    
    
    // const [meme, setMeme] = useState('')

    const [meme, setMeme] = useState({
        topText:'',
        bottomText: '',
        randomImage: ''
    })

    const [allMemeImages, setAllMemeImages] = useState(data)

    function changeMemeHandler() {

        setMeme(prev => ({
            ...prev,
            randomImage: randomMeme}))
        console.log('clicked!');
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
            <img className='meme-box__image' src={meme.randomImage} alt="" />
        </div>
     );
}

export default MemeCreator;