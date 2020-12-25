import React from "react";

const Home = () => {
    return(
    <>
            <div className='container-fluid nav_bg mt-5 '>
                <div className='row'>
                    <div className='col-10 mx-auto m-auto justify-content-center'>
                        <div className="col-md-11 mt-5 pt-lg-0 order-2 order-lg-1 m-auto justify-content-center">
                            <div className='my-5'><h1 className='my-3'>Covid-19 <i className="fa fa-phone">Upgates</i> </h1></div>
                            <p > WHO is gathering the latest international multilingual scientific findings and knowledge on COVID-19. The global literature cited in the WHO COVID-19 database is updated daily (Monday through Friday) from searches of bibliographic databases, hand searching, and the addition of other expert-referred scientific articles. This database represents a comprehensive multilingual source of current literature on the topic. While it may not be exhaustive, new research is added regularly.</p>
                            <p className='mt-3'>Click on About button if you want to know more about me.</p>
                            <p className='mb-3'>if you want to see covid data then click on Covid updates.</p>
                            <div className='mt-4'>
                                <a href='http://localhost:3000/about' className="btn btn-primary mr-2"> about  > </a>
                                <a href='http://localhost:3000/covid-19' className="btn btn-primary"> Covid updates > </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Home;