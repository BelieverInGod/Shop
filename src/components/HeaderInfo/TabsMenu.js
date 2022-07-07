import {useState} from 'react'

function TabsMenu() {
    

    return (
        <div className='flexBox'>
            <div className="dropdown">
            <button className="mainmenubtn">Silicone_Case_Kovel</button>
            <div className="dropdown-child">
                <a className='tab' href="http://www.вашдомен.ru/page1.html">Головна сторінка</a>
                <a className='tab' href="http://www.вашдомен.ru/page2.html">Каталог товарів</a>
                <a className='tab' href="http://www.вашдомен.ru/page3.html">Зв'язатися з нами</a>
            </div>
            </div>
        </div>

     )
    }   
      
    export default TabsMenu;
      