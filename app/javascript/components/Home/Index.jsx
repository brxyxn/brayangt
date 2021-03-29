import React, {Fragment} from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import MetaBalls from '../libs/paper'

const Index = () => {
    

    return(
        <Fragment>
            <Navbar />
            <main className="container h-100 w-100 borderit">
                <section className="row">
                    <div className="greeting">Hello</div>
                    <div className="name">I'm <span>Brayan</span></div>
                    <div className="title">FullStack developer</div>
                    <canvas id="paperjs" className="borderit"></canvas>
                </section>
            </main>
            <Footer />
            <MetaBalls />
        </Fragment>
    )
}

export default Index