import { useEffect, useState } from 'react';
// import {data} from '../memeData'

function MemeCreator() {

    const [memeData, setMemeData] = useState([])

    const [meme, setMeme] = useState({
        topText:'',
        bottomText: '',
        randomImage: ''
    })
    useEffect( ()=>{
        async function fetchData() {
            let response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
        setMemeData(data.data.memes)
            // return data
        }
        fetchData()
        console.log('RENDERED useEffect');
    },[])

    let randomMeme = 0

    function newImageHandler(){
        randomMeme = Math.floor(Math.random()* memeData.length)
        setMeme({
            ...meme,
            randomImage:memeData[randomMeme].url
        })
        }
        console.log('rendered useSTATE')

    
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
                <button 
                onClick={newImageHandler}
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