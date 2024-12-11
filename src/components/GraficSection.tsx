import './GraficSection.css'

const GraficSection = () => {
  return (
    <section className='graficSection'>
        <div className='container'>
            <div>
                <div className='box-icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
            <div className='stadistic-grafic'>
                fg
            </div>
            <div className='box-stadistic'>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'>d</div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>200 GB</p>
                </article>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'>d</div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>200 GB</p>
                </article>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'>d</div>
                    <div className='card-stadistic-container'>
                        <h4>Documents</h4>
                        <p>7200 files</p>
                    </div>
                    <p>200 GB</p>
                </article>
                <article className='card-stadistic'>
                    <div className='card-stadistic-square'>d</div>
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
            <div>
                <h4>Buy more space now!</h4>
                <p>Upgrade to cloud premium</p>
            </div>
            <button>Upgrade Account</button>
        </div>
    </section>
  )
}

export default GraficSection