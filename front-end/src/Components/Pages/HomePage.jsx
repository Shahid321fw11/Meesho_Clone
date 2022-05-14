import React from 'react'
import './home.css'
import Product from './Product';

const HomePage = (productData) => {
    return <>
        <div className='banner'>
            <div className='container'>
                <div className='title'>
                    Lowest Prices
                    <div>Best Quality Shopping</div>
                </div>
                <div className='title1'>
                    50 lakh+ Styles | 650+ categories
                </div>
                <div className='button'>
                    <img width="8%" height="50%" src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png" />
                    <span>Download the Meesho App</span>
                </div>
            </div>
            <div className='container1'>
            </div>
        </div>

        <div className='line'>
            <div className='hr'></div>
            <div className='hrtitle'> Top Categories to choose from </div>
            <div className='hr'></div>
        </div>

        <div className="banner1">
            <div className="img">
                <img src="https://images.meesho.com/images/marketing/1631611172021.png" />
            </div>
            <div className='temp'>
                <img src="https://images.meesho.com/images/marketing/1631610854491.png" />
            </div>
            <div className='temp'>
                <img src="https://images.meesho.com/images/marketing/1631611208025.png" />
            </div>
        </div>

        <div className='banner2'>
            <div className='tbox'>
                <span>Homecare</span>
                <button>VIEW ALL</button>
            </div>

            <div className='cardBox'>
                <div className='card'>
                    <img src="https://images.meesho.com/images/marketing/1629883981751.png" />
                </div>
                <button>Bedsheets</button>
            </div>

            <div className='cardBox'>
                <div className='card'>
                    <img src="https://images.meesho.com/images/marketing/1629884011960.png" />
                </div>
                <button>Kitchenware</button>
            </div>

            <div className='cardBox'>
                <div className='card'>
                    <img src="https://images.meesho.com/images/marketing/1629883997863.png" />
                </div>
                <button>Carpets</button>
            </div>
        </div>

        <div className='banner3'>
            <div className='banner3container'>
                <h4>Become a Reseller and</h4>
                <h1>Start your Online Business</h1>
                <h1>with Zero Investment</h1>
                <div className='banner3ibox'>
                    <img src="https://images.meesho.com/images/pow/playstore-icon.png" />
                    <img src="https://images.meesho.com/images/pow/appstore-icon.png" />
                </div>
            </div>
        </div>

        <div className='banner4'>
        </div>

        <Product />
    </>
}

export default HomePage;