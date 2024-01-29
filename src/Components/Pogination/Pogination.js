import React from 'react'
import './Pogination.css'

function Pogination({currentPage, number, selectPage}) {

    function handleSelectPage(pageNumber){
        selectPage(pageNumber)
    }

return (
        <li className='pogination__item-btn'>
            <button onClick={() => handleSelectPage(number)} className='pogination__btn'>{number}</button>
        </li>
)
}

export default Pogination;

/*//className={`pogination__btn ${currentPage === number ? 'pogination__btn_active' : ''}`}
<ul className='pogination__num-container'>
<li className='pogination__item-btn'>
<button className='pogination__btn'>2</button>
</li>
<li className='pogination__item-btn'>
<button className='pogination__btn'>3</button>
</li>
</ul>*/