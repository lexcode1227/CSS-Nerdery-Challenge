import './MainSection.css'

const MainSection = () => {
  return (
    <section className='mainSection'>
        <div className='search-container'>
            <div className="search-container--icon">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" name="searchInput" id="searchInput" placeholder='Search'  /> 
        </div>
        <div className='recentlyUsedContainer cardContainer'>
            <div className='cardBox-title'>
                <h3 className='title-h3'>Recently Used</h3>
                <div className='box-icons'>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                    </svg>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </div>
            </div>
            <div className='cardBox-container'>
                <article className='card'>
                    <div className='card-icons'>
                        <div className='card-icons-square shadow'></div>
                        <div className='card-icons-circles'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{marginLeft: "-6px"}}>
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                        </div>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01"/>
                        </svg>
                    </div>
                    <div className='card-title'>
                        <h3>App Project</h3>
                        <h4>Created: 20.02.2020</h4>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-icons'>
                        <div className='card-icons-square shadow'></div>
                        <div className='card-icons-circles'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{marginLeft: "-4px"}}>
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                        </div>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01"/>
                        </svg>
                    </div>
                    <div className='card-title'>
                        <h3>Project: fitbit</h3>
                        <h4>Created: 28.02.2020</h4>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-icons'>
                        <div className='card-icons-square shadow'></div>
                        <div className='card-icons-circles'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{margin: "0 -7px 0 -5px"}}>
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#BEC0C8' fill='white'/>
                            </svg>
                        </div>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01"/>
                        </svg>
                    </div>
                    <div className='card-title'>
                        <h3>Client Documents</h3>
                        <h4>Created: 4.03.2020</h4>
                    </div>
                </article>
            </div>
        </div>
        <div className='recentFilesContainer cardContainer'>
            <div className='cardBox-title'>
                <h3 className='title-h3'>Recent Files</h3>
                <p>View All</p>
            </div>
            <table className='tableContainer'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Members</th>
                        <th>Last Modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <div className='card-recentFile-square'></div>
                            Travel Landing Page
                        </th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>
                        <th>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                            </svg>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className='card-recentFile-square'></div>
                            True Photos
                        </th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>
                        <th>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                            </svg>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className='card-recentFile-square'></div>
                            Dashboard Structure
                        </th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>                        
                        <th>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                            </svg>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className='card-recentFile-square'></div>
                            Character Ilustration
                        </th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>                        
                        <th>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                            </svg>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='shareContainer cardContainer'>
            <div className='cardBox-title'>
                <h3 className='title-h3'>Share with me</h3>
                <p>View All</p>
            </div>
            <div className='cardBox-container'>
                <article className='card card-small'>
                    <div className='card-icons'>
                        <div className='card-icons-square'></div>
                        <div className='card-icons-circles'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#4AC29D' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{marginLeft: "-5px"}}>
                                <circle cx="12" cy="12" r="12" stroke='#FF6860' fill='white'/>
                            </svg>
                        </div>
                    </div>
                    <div className='card-title'>
                        <h3>Landing Page</h3>
                        <h4>Created: 20.02.2020</h4>
                    </div>
                </article>
                <article className='card card-small'>
                    <div className='card-icons'>
                        <div className='card-icons-square'></div>
                        <div className='card-icons-circles'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#4AC29D' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{margin: "0 -7px"}}>
                                <circle cx="12" cy="12" r="12" stroke='#FF6860' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#FF9F00' fill='white'/>
                            </svg>
                        </div>
                    </div>
                    <div className='card-title'>
                        <h3>Illustration Pack</h3>
                        <h4>Created: 20.02.2020</h4>
                    </div>
                </article>
                <article className='card card-small'>
                    <div className='card-icons'>
                        <div className='card-icons-square'></div>
                        <div className='card-icons-circles'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" stroke='#4AC29D' fill='white'/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{marginLeft: "-6px"}}>
                                <circle cx="12" cy="12" r="12" stroke='#FF9F00' fill='white'/>
                            </svg>
                        </div>
                    </div>
                    <div className='card-title'>
                        <h3>CV Design</h3>
                        <h4>Created: 20.02.2020</h4>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default MainSection