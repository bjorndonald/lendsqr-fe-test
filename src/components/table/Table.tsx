import React, { useEffect, useRef, useState } from 'react'
import CaretIcon from '../../icons/Caret.icon'
import DotMenuIcon from '../../icons/DotMenu.icon'
import FilterIcon from '../../icons/Filter.icon'
import './table.style.scss'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';
import EyeIcon from '../../icons/table/Eye.icon'
import BlacklistIcon from '../../icons/table/Blacklist.icon'
import ActivateIcon from '../../icons/table/Activate.icon'
import CalendarIcon from '../../icons/table/Calendar.icon'
import Dropdown from '../dropdown/Dropdown'

type columnType = {
    title: string, key: string, width: string
}

const FilterMenu = () => {
    const [organization, setOrganization] = useState<string | undefined>()
    const [status, setStatus] = useState<string | undefined>()
    const [date, setDate] = useState(new Date())

    const filterDate = (date: Date) => {
        const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        return date.getFullYear() + "-" + month + "-" + day
    }

    return (
        <div id="filter-menu">
            <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <Dropdown setValue={() => { }} id='organization' selectedValue={organization} list={[]} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='User' />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Email' />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <div className="date-input">
                    <input type="text" placeholder='Date' />
                    <a>
                        <CalendarIcon color='#545F7D' />
                    </a>
                    <input value={filterDate(date)} onChange={e => {
                        setDate(new Date(e.target.value))
                    }} type="date" name="date" id="date" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" placeholder='Phone Number' />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <Dropdown setValue={() => { }} id='status' selectedValue={status} list={[]} />
            </div>

            <div className="buttons">
                <div className="btn btn-outline-dark">
                    Reset
                </div>
                <div className="btn btn-green">
                    Filter
                </div>
            </div>
        </div>
    )
}

type ColumnProps = {
    column: columnType,
    index: number
}


type Props = {
    rows: Object[],
    columns: columnType[]
}

function Table({ rows, columns }: Props) {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState<number | string>(10)

    const Column = ({ column, index }: ColumnProps) => {
        return (
            <div onClick={(e) => {
                const menu = $(e.target).parents('.table-col')
                    .find('#filter-menu')
                if (menu.hasClass('active'))
                    menu.removeClass("active")
                else {
                    $('#table #filter-menu')
                        .removeClass('active')
                    menu
                        .addClass('active')
                }
            }} style={{
                width: columns[index].width
            }} className="table-col">
                <h6>{column.title}</h6>
                <a className="icon">
                    <FilterIcon color={'#545F7D'} />
                </a>
                <FilterMenu />
            </div>
        )
    }
    const pageCount = Math.ceil(rows.length / (limit as number));

    useEffect(() => {

        setPage(page < pageCount || !pageCount ? page : pageCount)

        return () => {

        }
    }, [limit])




    return (
        <>
            <div id='table'>
                <div className="table-header">
                    <div className="table-row">
                        {columns.map((x, i) =>
                            <Column column={x} index={i} key={i} />
                        )}
                    </div>
                </div>
                <div className="table-body">
                    {rows.slice((page - 1) * (limit as number), page * (limit as number)).map((x, i) => (
                        <div key={i} className="table-row" >
                            {columns.map((item: any, index) => (
                                <>
                                    <div key={index} style={{ width: columns[index].width }} className="table-col">
                                        <span>{Object.values(x)[index]}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div id="table-footer">
                <div className="d-flex limits align-items-center">
                    <span>Showing</span>

                    <Dropdown setValue={(item) => { setLimit(item) }} id="limit" selectedValue={limit + ''}
                        list={[...new Array(rows.length)]
                            .map((x, i) => ('' + (rows.length - i)))} />
                    <span>out of {rows.length}</span>
                </div>

                <div className="d-flex indexes align-items-center">
                    <a className={`${page === 1 ? 'active' : ''}`}>
                        <CaretIcon />
                    </a>

                    {pageCount <= 8 &&
                        <div className="numbers">
                            {[...new Array(pageCount)].map((item, index) => (
                                <span key={index} onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>
                            ))}
                        </div>
                    }
                    {pageCount > 8 && page < 3 && <div className="numbers">
                        {[...new Array(pageCount)].map((item, index) => (<>
                            {index + 1 < 4 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === 3 && <span>...</span>}

                            {index + 1 === pageCount && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === pageCount - 1 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                        </>
                        ))}
                    </div>}

                    {pageCount > 8 && page === 4 && <div className="numbers">
                        {[...new Array(pageCount)].map((item, index) => (<>
                            {index + 1 <= 5 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === 5 && <span>...</span>}

                            {index + 1 === pageCount && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === pageCount - 1 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                        </>
                        ))}
                    </div>}

                    {pageCount > 8 && page === 3 && <div className="numbers">
                        {[...new Array(pageCount)].map((item, index) => (<>
                            {index + 1 <= 4 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === 4 && <span>...</span>}
                            {index + 1 === pageCount && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === pageCount - 1 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                        </>
                        ))}
                    </div>}

                    {pageCount > 8 && page > 4 && page < pageCount - 3 && <div className="numbers">
                        {[...new Array(pageCount)].map((item, index) => (<>
                            {index + 1 === 1 && <>
                                <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>
                                <span>...</span>
                            </>}
                            {index + 1 > 3 && index + 1 < 8 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === pageCount && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                            {index + 1 === pageCount - 1 && <>
                                <span>...</span>
                                <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>
                            </>}
                        </>
                        ))}
                    </div>}

                    {pageCount > 8 && page === 7 && <div className="numbers">
                        {[...new Array(pageCount)].map((item, index) => (<>
                            {index + 1 === 1 && <>
                                <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>
                                <span>...</span>
                            </>}
                            {index + 1 > pageCount - 5 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}
                        </>
                        ))}
                    </div>}

                    {pageCount > 8 && page > 7 && <div className="numbers">
                        {[...new Array(pageCount)].map((item, index) => (<>
                            {index + 1 === 1 && <>
                                <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>
                                <span>...</span>
                            </>}
                            {index + 1 > pageCount - 4 && <span onClick={() => setPage(index + 1)} className={`${page === index + 1 ? 'active' : ''}`}>{index + 1}</span>}

                        </>
                        ))}
                    </div>}

                    <a className={`${page === pageCount ? 'active' : ''}`}>
                        <CaretIcon />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Table