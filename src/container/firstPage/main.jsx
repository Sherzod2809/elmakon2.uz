import React, { Component } from 'react'
import '../../css/firstPage/main.css'


export default class main extends Component {
    render() {
        return (
            <div className='Main'>
                <div className='cards'>
                    <div className='cards_1'>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div className='cards_2'>
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/34/Maishiy__2_.png" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='section'>
                    <div className='gadget1'>
                        <h2>Хиты продаж / Распродажа / Популярные</h2>
                        <div className='menu'>
                            <a href=""><p>Хиты продаж</p></a>
                            <a href=""><p>Распродажa</p></a>
                            <a href=""><p>Самые популярные</p></a>
                        </div>
                        <div className='imgs'>
                            <img src="	https://elmakon.uz/images/thumbnails/550/450/detai…%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-63_vamj-b7.jpg" alt="" />
                            <img src="" alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
