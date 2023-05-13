import React from 'react'

const Header = () => {
    const currentLabel = "Management";
    return (
    <>
        <header className="header">
            <div className='flex'>
                <div className="icon__bg">
                    <i class='bx bx-menu menu__icon'></i>
                </div>
                <div className="current__label">
                    <h1>{currentLabel}</h1>
                </div>
            </div>
            <div className="searchbar">
                <div className="search__icon">
                    <i class='bx bx-search'></i>
                </div>
                <input type="text" className="search__input" />
                <div className="search__icon hidden">
                    <i class='bx bx-x'></i>
                </div>
            </div>
            <div className="flex">
                <div className="icon__bg">
                    <i class='bx bx-refresh'></i>
                </div>
                <div className="icon__bg">
                    <i class='bx bx-devices'></i>
                </div>
                <div className="icon__bg">
                    <i class='bx bx-cog'></i>
                </div>
            </div>
            <div className="flex">
                <div className="icon__bg">
                    <i class='bx bx-grid'></i>
                </div>
                <div className="icon__bg">
                    <i class='bx bxs-user-account' ></i>
                </div>
            </div>
        </header>
    </>
    )
}

export default Header