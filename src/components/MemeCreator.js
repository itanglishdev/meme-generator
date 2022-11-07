import { useState } from 'react';
import {data} from '../memeData'

   

function MemeCreator() {

    function getMemeImage(){
        const randomPosition = Math.floor(Math.random() * data.data.memes.length)
        const randomMeme = data.data.memes[randomPosition].url

        setMeme(prev => ({
            ...prev,
            randomImage:randomMeme
        }))
    }


    const [meme, setMeme] = useState({
        topText:'',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    function memeHandler(e){            
        const {name,value} = e.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return ( 
        <div className="meme-box">
            <section className="meme-box__top">
                <label htmlFor="topText"></label>
                <input 
                type="text" 
                placeholder='Top Text' 
                name='topText'
                value={meme.topText}
                onChange={memeHandler}
                />
                <label htmlFor="bottomText"/>
                <input 
                type="text" 
                placeholder='Bottom Text'
                name='bottomText'
                value={meme.bottomText}
                onChange={memeHandler}
                />
            </section>
            <section className="meme-box__bottom">
                <button onClick={getMemeImage} 
                    className='background-colour'
                    name='randomImage'>
                    Get a new Image 🖼
                </button>
            </section>
            <div className='meme-box__container flex'>
                <img className='meme-box__image' src={meme.randomImage } alt="" />
                <h2 className='meme-text top' >{meme.topText}</h2>
                <h2 className='meme-text bottom' >{meme.bottomText}</h2>
            </div>
        </div>
     );
}

export default MemeCreator;