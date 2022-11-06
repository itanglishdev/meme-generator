import {GrImage } from 'react-icons/gr'

function MemeCreator() {
    return ( 
        <div className="meme-box">
            <section className="meme-box__top">
                <label htmlFor=""></label>
                <input type="text" placeholder='Top Text' />
                <label htmlFor=""/>
                <input type="text" placeholder='Bottom Text'/>
            </section>
            <section className="meme-box__bottom">
                <button className='background-colour '>Get a new Image <GrImage/></button>
            </section>
        </div>
     );
}

export default MemeCreator;