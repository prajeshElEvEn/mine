import React from 'react'

const Build = () => {
    return (
        <div className='build-container'>
            <div className='build'>
                <div className='build-nav'>
                    What I've build? 😌
                </div>
                <div className='build-cards-container'>
                    <div className='build-cards'>
                        <div className='build-card'>
                            <div className='build-card-top img1'></div>
                            <div className='build-card-bottom'>
                                <div className='build-card-title'>
                                    Diary.io
                                </div>
                                <div className='build-card-text'>
                                    An e-diary web app to write your daily stuff.
                                </div>
                                <div className='links-container'>
                                    <div className='link-text'>
                                        Take a look
                                    </div>
                                    <div className='links'>
                                        <a href='https://prajesheleven.github.io/diary-io/' target='_blank' rel='noreferrer'>
                                            <svg width="24" height="24" fill="#8d8d8d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707a4.965 4.965 0 0 0-3.535-1.465A4.965 4.965 0 0 0 7.05 9.88L4.929 12a5.008 5.008 0 0 0 0 7.071 4.984 4.984 0 0 0 3.535 1.462A4.984 4.984 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.12Z"></path>
                                                <path d="m12 4.93-.707.708 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.12c-1.133 1.134-3.11 1.134-4.242 0l-.707-.706-1.414 1.414.707.707a4.965 4.965 0 0 0 3.535 1.465 4.965 4.965 0 0 0 3.535-1.465l2.122-2.121a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0Z"></path>
                                            </svg>
                                        </a>
                                        <a href='https://github.com/prajeshElEvEn/diary-io' target='_blank' rel='noreferrer'>
                                            <svg width="24" height="24" fill="#8d8d8d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.026 2a9.973 9.973 0 0 0-9.974 9.974c0 4.406 2.857 8.145 6.82 9.465.5.09.68-.217.68-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.09-.645.35-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.555 9.555 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='build-card'>
                            <div className='build-card-top img2'></div>
                            <div className='build-card-bottom'>
                                <div className='build-card-title'>
                                    Wallpaper.io
                                </div>
                                <div className='build-card-text'>
                                    Share and download wallpaper in this wallpaper archive.
                                </div>
                                <div className='links-container'>
                                    <div className='link-text'>
                                        Take a look
                                    </div>
                                    <div className='links'>
                                        {/* <a href='https://prajesheleven.github.io/diary-io/' target='_blank' rel='noreferrer'>
                                            <svg width="24" height="24" fill="#8d8d8d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707a4.965 4.965 0 0 0-3.535-1.465A4.965 4.965 0 0 0 7.05 9.88L4.929 12a5.008 5.008 0 0 0 0 7.071 4.984 4.984 0 0 0 3.535 1.462A4.984 4.984 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.12Z"></path>
                                                <path d="m12 4.93-.707.708 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.12c-1.133 1.134-3.11 1.134-4.242 0l-.707-.706-1.414 1.414.707.707a4.965 4.965 0 0 0 3.535 1.465 4.965 4.965 0 0 0 3.535-1.465l2.122-2.121a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0Z"></path>
                                            </svg>
                                        </a> */}
                                        <a href='https://github.com/prajeshElEvEn/wallpaper-io' target='_blank' rel='noreferrer'>
                                            <svg width="24" height="24" fill="#8d8d8d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.026 2a9.973 9.973 0 0 0-9.974 9.974c0 4.406 2.857 8.145 6.82 9.465.5.09.68-.217.68-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.09-.645.35-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.555 9.555 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='build-card'>
                            <div className='build-card-top img3'>
                            </div>
                            <div className='build-card-bottom'>
                                <div className='build-card-title'>
                                    Chat App
                                </div>
                                <div className='build-card-text'>
                                    A MERN chat app for one-to-one and also group chats.
                                </div>
                                <div className='links-container'>
                                    <div className='link-text'>
                                        Take a look
                                    </div>
                                    <div className='links'>
                                        <a href='https://learn-mern-chat.herokuapp.com/' target='_blank' rel='noreferrer'>
                                            <svg width="24" height="24" fill="#8d8d8d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707a4.965 4.965 0 0 0-3.535-1.465A4.965 4.965 0 0 0 7.05 9.88L4.929 12a5.008 5.008 0 0 0 0 7.071 4.984 4.984 0 0 0 3.535 1.462A4.984 4.984 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.12Z"></path>
                                                <path d="m12 4.93-.707.708 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.12c-1.133 1.134-3.11 1.134-4.242 0l-.707-.706-1.414 1.414.707.707a4.965 4.965 0 0 0 3.535 1.465 4.965 4.965 0 0 0 3.535-1.465l2.122-2.121a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0Z"></path>
                                            </svg>
                                        </a>
                                        <a href='https://github.com/prajeshElEvEn/chat-app' target='_blank' rel='noreferrer'>
                                            <svg width="24" height="24" fill="#8d8d8d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.026 2a9.973 9.973 0 0 0-9.974 9.974c0 4.406 2.857 8.145 6.82 9.465.5.09.68-.217.68-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.09-.645.35-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.555 9.555 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Build
