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
        <div className='container'>
            <div className='box'>
                <h3>Recently Used</h3>
                <div className='box-icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
        <div className='container'>
            <div className='box'>
                <h3>Recent Files</h3>
                <h4>View All</h4>
            </div>
            <table>
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
        <div className='container'>
            <div className='box'>
                <h3>Share with me</h3>
                <h4>View All</h4>
            </div>
            <div>
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