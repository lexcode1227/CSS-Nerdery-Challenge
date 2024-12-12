import './MainSection.css'

const MainSection = () => {
  return (
    <section className='mainSection'>
        <div className='search-container'>
            <div className="search-container--icon">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
                {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg> */}
            </div>
            <input type="search" name="searchInput" id="searchInput" placeholder='Search'  /> 
        </div>
        <div className='recentlyUsedContainer cardContainer'>
            <div className='cardBox'>
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
            <div>
                <article className='card'>
                    
                </article>
                <article className='card'>

                </article>
                <article className='card'>

                </article>
            </div>
        </div>
        <div className='recentFilesContainer cardContainer'>
            <div className='cardBox'>
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
                        <th>Travel Landing Page</th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>
                        <th>...</th>
                    </tr>
                    <tr>
                        <th>True Photos</th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>
                        <th>...</th>
                    </tr>
                    <tr>
                        <th>Dashboard Structure</th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>
                        <th>...</th>
                    </tr>
                    <tr>
                        <th>Character Ilustration</th>
                        <th>5 members</th>
                        <th>Mar 8, 2020</th>
                        <th>...</th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='shareContainer cardContainer'>
            <div className='cardBox'>
                <h3 className='title-h3'>Share with me</h3>
                <p>View All</p>
            </div>
            <div className='cardBox'>
                <article className='card card-small'>
                    
                </article>
                <article className='card card-small'>

                </article>
                <article className='card card-small'>

                </article>
            </div>
        </div>
    </section>
  )
}

export default MainSection