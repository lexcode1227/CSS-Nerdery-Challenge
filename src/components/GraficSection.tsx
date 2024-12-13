import './GraficSection.css'

const GraficSection = () => {
  return (
    <section className='graficSection'>
        <div className='containerTop-User'>
            <div>
                <div className='box-icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <div className='box-user'>
                    <h4>Name</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='container-stadistics'>
            <h3>Storage</h3>
            <div className='subContainer-stadistic'>
                <div className='stadistic-grafic'></div>
                <p>420.2 GB of 500 GB used</p>
            </div>
            <div className='box-stadistic'>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'></div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>125 GB</p>
                </article>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'></div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>75 GB</p>
                </article>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'></div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>50 GB</p>
                </article>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'></div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>200 GB</p>
                </article>
            </div>
        </div>
        <div className='container-upgrade'>
            <div className='box-gradient'></div>
            <div className='box-information'>
                <h4>Buy more space now!</h4>
                <p>Upgrade to cloud premium</p>
            </div>
            <button className='btn'>Upgrade Account</button>
        </div>
    </section>
  )
}

export default GraficSection