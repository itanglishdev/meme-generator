import {GrImage } from 'react-icons/gr'

function MemeCreator() {
    return ( 
        <div className="meme-box">
            <section className="meme-box__top">
                <label htmlFor=""/>
                <input type="text" />
                <label htmlFor=""/>
                <input type="text" />
            </section>
            <section className="meme-box__bottom">
                <button className='background-colour '>Get a new Image <GrImage/></button>
            </section>
        </div>
     );
}

export default MemeCreator;