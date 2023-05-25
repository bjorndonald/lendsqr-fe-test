import React, { useEffect, useState } from 'react'
import './dropdown.style.scss'
import CaretIcon from '../../icons/Caret.icon'

type Props = {
    selectedValue: string | undefined,
    list: string[],
    id: string,
    setValue: (item: string) => void
}

function Dropdown({ selectedValue, setValue, list, id }: Props) {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        // const element = document.querySelector(`#drop-down data-id['limit'] #item${list.findIndex((x) => x === selectedValue)}`);
        // if (element) {
        //     element.scrollIntoView({ behavior: 'smooth' });
        // }
        return () => {
        }
    }, [selectedValue])

    return (
        <div id='drop-down' data-id={id}>
            <div onClick={() => setOpen(!open)} className="dropdown-btn">
                {!selectedValue?.length && <span>Select</span>}
                {!!selectedValue?.length && <span>{selectedValue}</span>}
                <a><CaretIcon /></a>
            </div>
            {open && <div className="dropdown-list">
                {list.filter(x => x !== selectedValue).map((item, index) => (
                    <div key={index} onClick={() => {
                        setValue(item)
                        setOpen(false)
                    }} id={'item' + index} className="dropdown-item">{item}</div>
                ))}
            </div>}
        </div>
    )
}

export default Dropdown