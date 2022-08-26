import React from 'react'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <div className='about-nav'>
                    About me.
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
                                    stanthonyseniorsecondaryschool.com
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
                                    kiet.edu
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
                                    ???
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
