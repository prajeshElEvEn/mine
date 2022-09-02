import React from 'react'

const Home = () => {
    return (
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
                    <div className='home-btn'>
                        <div className='home-btn-text'>
                            Take a tour
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
    )
}

export default Home
