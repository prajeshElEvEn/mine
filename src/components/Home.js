import React, { useRef } from 'react'

const Home = () => {

    const ref = useRef(null)

    const scrollToAbout = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className='home-container'>
                <div className='home'>
                    <div className='home-left'>
                        <div className='home-title'>
                            <div className='title-left'>
                                <div className='title-left-top'>
                                    I'm
                                </div>
                                <div className='title-left-bottom'>
                                    &
                                </div>
                            </div>
                            <div className='title-right'>
                                <div className='title-right-top'>
                                    Prajesh
                                </div>
                                <div className='title-right-bottom'>
                                    I, code, design, build.
                                </div>
                            </div>
                        </div>
                        <div className='home-btn'
                            onClick={() => {
                                scrollToAbout()
                            }}
                        >
                            <div className='home-btn-text'>
                                Get in touch
                            </div>
                            <svg width="28" height="28" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 11.004H6.414l5.293-5.293-1.414-1.414-7.707 7.707 7.707 7.707 1.414-1.414-5.293-5.293H21v-2Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='home-right'>

                    </div>
                </div>
            </div>
            <div className='about-container'
                ref={ref}
            >
                <div className='about'>
                    <div className='about-nav'>
                        Get to know me. 😉
                    </div>
                    <div className='about-cards-container'>
                        <div className='about-cards'>
                            <div className='about-card'>
                                <div className='about-card-top'>
                                    <div className='about-card-text'>
                                        St. Anthony's Senior Secondary School
                                    </div>
                                    <div className='about-card-title'>
                                        Fatehgarh
                                    </div>
                                    <div className='about-card-sub'>
                                        School
                                    </div>
                                </div>
                                <div className='about-card-bottom'>
                                    <a href='https://www.stanthonyseniorsecondaryschool.com/' target='_blank' rel="noreferrer">
                                        <div className='l-text'>
                                            stanthonyseniorsecondaryschool.com
                                        </div>
                                        <svg width="18" height="18" fill="#8400ec" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3h-8Z"></path>
                                            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='about-card'>
                                <div className='about-card-top'>
                                    <div className='about-card-text'>
                                        KIET Group Of Institutions
                                    </div>
                                    <div className='about-card-title'>
                                        Ghaziabad
                                    </div>
                                    <div className='about-card-sub'>
                                        College
                                    </div>
                                </div>
                                <div className='about-card-bottom'>
                                    <a href='https://www.kiet.edu/' target='_blank' rel="noreferrer">
                                        <div className='l-text'>
                                            kiet.edu
                                        </div>
                                        <svg width="18" height="18" fill="#8400ec" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3h-8Z"></path>
                                            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='about-card'>
                                <div className='about-card-top'>
                                    <div className='about-card-text'>
                                        ???
                                    </div>
                                    <div className='about-card-title'>
                                        ???
                                    </div>
                                    <div className='about-card-sub'>
                                        Workplace
                                    </div>
                                </div>
                                <div className='about-card-bottom'>
                                    <a href='/' target='_blank' rel="noreferrer">
                                        <div className='l-text'>
                                            ???
                                        </div>
                                        {/* <svg width="18" height="18" fill="#8400ec" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3h-8Z"></path>
                                        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7Z"></path>
                                    </svg> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
