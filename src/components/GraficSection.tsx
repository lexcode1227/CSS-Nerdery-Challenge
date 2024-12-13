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
                <div className='stadistic-grafic'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="145" height="144" viewBox="0 0 145 144" fill="none">
                        <path d="M124.176 26.0721C124.465 25.8187 124.493 25.379 124.237 25.0933C113.256 12.8514 98.289 4.89946 81.9984 2.65212C81.6182 2.59967 81.2696 2.86918 81.221 3.24993C81.1723 3.63067 81.442 3.97845 81.8222 4.03098C97.7771 6.23531 112.436 14.0234 123.192 26.0111C123.449 26.2967 123.888 26.3256 124.176 26.0721Z" fill="#C4C4C4" stroke="#4AC29D" stroke-width="5" stroke-miterlimit="1.30541" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M63.7335 3.25576C63.6846 2.87505 63.3358 2.60577 62.9556 2.65848C46.065 5.00006 30.6152 13.4721 19.5574 26.4741C8.49959 39.4762 2.61827 56.0859 3.01919 73.1334C3.02822 73.5171 3.35001 73.8181 3.73363 73.8053C4.11725 73.7924 4.41743 73.4705 4.40848 73.0868C4.0191 56.3852 9.7826 40.1131 20.6162 27.3747C31.4498 14.6362 46.5853 6.33466 63.1327 4.03722C63.5129 3.98443 63.7824 3.63647 63.7335 3.25576Z" fill="#C4C4C4" stroke="#689FF8" stroke-width="5" stroke-miterlimit="1.30541" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83281 88.518C5.4609 88.613 5.23605 88.9916 5.3347 89.3626C8.18716 100.088 13.5679 109.978 21.0304 118.203C28.4929 126.427 37.8151 132.74 48.2139 136.619C48.5736 136.753 48.9722 136.566 49.1028 136.205C49.2333 135.844 49.0462 135.446 48.6866 135.311C38.501 131.51 29.3699 125.325 22.0598 117.269C14.7497 109.212 9.47791 99.5247 6.68158 89.0188C6.58285 88.6479 6.20472 88.4231 5.83281 88.518Z" fill="#C4C4C4" stroke="#BCBECA" stroke-width="5" stroke-miterlimit="1.30541" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M65.6902 139.967C65.6522 140.349 65.9312 140.69 66.3135 140.724C78.6561 141.827 91.0738 139.61 102.278 134.297C113.692 128.885 123.415 120.464 130.401 109.941C137.388 99.4166 141.375 87.1876 141.932 74.5679C142.48 62.1798 139.703 49.8752 133.895 38.9286C133.715 38.5895 133.293 38.4647 132.956 38.648C132.618 38.8313 132.494 39.2532 132.674 39.5923C138.361 50.3169 141.08 62.3709 140.544 74.5065C139.997 86.8738 136.09 98.8583 129.243 109.172C122.396 119.485 112.868 127.737 101.683 133.041C90.7065 138.246 78.5422 140.419 66.4511 139.341C66.0688 139.307 65.7282 139.585 65.6902 139.967Z" fill="#C4C4C4" stroke="#FF9F00" stroke-width="5" stroke-miterlimit="1.30541" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='stadistic-grafic--info'>
                        <h3>85%</h3>
                        <p>Used</p>
                    </div>
                </div>
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