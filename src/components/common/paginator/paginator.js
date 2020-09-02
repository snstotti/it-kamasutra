import React, { useState } from 'react'
import s from './paginator.module.css'

const Paginator = ({ totalUserCount, pageSize, currentPage, onSetCurentPage }) => {

    let pageNumber = Math.ceil(totalUserCount / pageSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let portionSize = 7 //размер порции
    let portionCountTotal = Math.ceil(pageNumber / portionSize) //общее колличество порций
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    let arrPagination = []
    for (let i = 1; i <= pageNumber; i++) {
        arrPagination.push(i)
    }
    let buttonDown = portionNumber > 1 && <button onClick={()=>setPortionNumber(portionNumber - 1)}>down</button>
    let buttonNext =  portionNumber <= portionCountTotal && <button onClick={()=>setPortionNumber(portionNumber + 1)}>next</button>

    return (
        <div className={s.wrapper}>
            <div>{buttonDown}</div>
            {arrPagination.filter(f => f >= leftPortionPageNumber && f <= rightPortionPageNumber).map(p => {

                return (
                    <div className={s.paginator}  key={p}>
                        <span
                           
                            className={currentPage === p ? s.selectedAction : s.selected}
                            onClick={(e) => onSetCurentPage(p)}
                        >{p}</span>
                    </div>

                )
            })}
            <div>{buttonNext}</div>
        </div>

    )
}

export default Paginator