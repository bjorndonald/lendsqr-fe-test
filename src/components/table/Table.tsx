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
                    {rows.slice(page - 1, page * (limit as number)).map((x, i) => (
                        <div key={i} className="table-row" >
                            {columns.map((item: any, index) => (
                                <>
                                    <div style={{ width: columns[index].width }} className="table-col">
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
                    <a>
                        <CaretIcon />
                    </a>
                    <div className="numbers">
                        {/* {[...new Array(pageCount)]} */}
                        {pageCount <= 6 && [...new Array(pageCount)].map((item, index) => (
                            <span>{index + 1}</span>
                        ))}

                        {pageCount > 6 && <>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>...</span>
                            <span>15</span>
                            <span>16</span>
                        </>}

                    </div>
                    <a>
                        <CaretIcon />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Table