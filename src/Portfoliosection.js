import React from 'react'
import Item from './Item'
import cabin from './img/portfolio/cabin.png'
import cake from './img/portfolio/cake.png'
import circus from './img/portfolio/circus.png'
import game from './img/portfolio/game.png'
import safe from './img/portfolio/safe.png'
import submarine from './img/portfolio/submarine.png'

function Portfoliosection() {
    return (
        <>
            <div>
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        {/* <!-- Portfolio Section Heading--> */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                        {/* <!-- Icon Divider--> */}
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        {/* <!-- Portfolio Grid Items--> */}
                        <div className="row justify-content-center">
                            <Item name={cabin} />
                            <Item name={cake} />
                            <Item name={circus} />
                            <Item name={game} />
                            <Item name={safe} />
                            <Item name={submarine} />
                        </div>
                    </div>
                </section>
            </div>
            
        </>

    )
}

export default Portfoliosection