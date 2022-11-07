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
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    // const [allMemeImages, setAllMemeImages] = useState(data)

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
                <input 
                type="text" 
                placeholder='Top Text' 
                />
                <label htmlFor=""/>
                <input 
                type="text" 
                placeholder='Bottom Text'
                />
            </section>
            <section className="meme-box__bottom">
                <button onClick={changeMemeHandler} className='background-colour '>Get a new Image 🖼</button>
            </section>
            <div className='meme-box__container flex'>
                <img className='meme-box__image' src={meme.randomImage } alt="" />
                <h2 className='meme-text top' >one does not simply</h2>
                <h2 className='meme-text bottom' >walk into mordor</h2>
            </div>
        </div>
     );
}

export default MemeCreator;