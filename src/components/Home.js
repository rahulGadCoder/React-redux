

const Home = (props) => {
    return (
        <div>
            <h1>In Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max" />
                </div>
                <div className="text-wrapper item">
                    <span>Nokia</span>
                    <span>$15.01</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => { props.addToCartHandler({ price: 1000, name: 'Nokia' }) }}
                    >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;