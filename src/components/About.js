import React from 'react'

const About = () => {
    return (
        <div className='about-container'>
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
    )
}

export default About
