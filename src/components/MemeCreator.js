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
                <button>Get a new Image (icon)</button>
            </section>
        </div>
     );
}

export default MemeCreator;