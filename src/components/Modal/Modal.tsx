import React, {ReactNode, useState} from 'react';
import style from './Modal.module.css'

type OpenModalPropsType = {
    setOpen: (open: boolean) => void
    open: boolean
    children: ReactNode
}

const OpenModal = ({setOpen, open, children}: OpenModalPropsType) => {
    return (
        <>
            <div className={style.overlay}>
                <div className={style.modal}>
                    <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => {
                        setOpen(false)
                    }}>
                        <title/>
                        <path
                            d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                    </svg>
                    {/*<img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>*/}
                    {children}
                </div>
            </div>
        </>
    )
}

export const Modal = () => {
    //что бы сделать модальное окно, необходимо реализовать стейт, который будет отображать либо скрывать что-то(модальное окно)
    const [open, setOpen] = useState<boolean>(false)

    const openModalBtn = style.open + ' ' + style.modal + ' ' + style.btn

    const openModalHandler = () => {
        setOpen(true)
    }

    return (
        <div>
            <button className={openModalBtn} onClick={openModalHandler}>✨ Открыть окно</button>
            {
                open && <OpenModal setOpen={setOpen} open={open}>
                    <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
                    <h3>Модальное окно</h3>
                </OpenModal>

            }
        </div>
    );
};


