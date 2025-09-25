import ComicsList from "./comics/ComicsList"
import BlueBarSection from "./BlueBarSection"


const MyMain = () => {
    return (
        <main>

            <section className="jumbotron">
                
            </section>

            <section className="hero">

                <div className="current-series">
                    <button>Current Series</button>
                </div>

                <ComicsList />

                <div className="contenitore-bottone">
                    <button>Load More</button>
                </div>

            </section>

            
            
            
            {/* SEZIONE BLU */}
            
            <section className="blue-bar">

                <div className="container">

                    <BlueBarSection />

                </div>

            </section>
            
        </main>
    )
}

export default MyMain