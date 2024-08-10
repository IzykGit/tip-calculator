import "./App.css"

const App = () => {

    

    return (
        <div className="container">
            <header>
                <h1>SPLI<br />TTER</h1>
            </header>
            <main>

                <section className="calc">

                    <div className="bill-price">
                        <label htmlFor="price">Bill</label>
                        <input type="number" name="price" id="price"/>
                    </div>

                    <div>
                        <p>Select Tip %</p>

                        <div className="button-grid">
                            <button type="button">5%</button>
                            <button type="button">10%</button>
                            <button type="button">15%</button>
                            <button type="button">25%</button>
                            <button type="button">50%</button>
                            <input type="number" name="tip" id="tip" placeholder="Custom"/>
                        </div>
                    </div>

                    <div className="num-people">
                        <label htmlFor="people">Number of People</label>
                        <input type="number" name="people" id="people"/>
                    </div>

                </section>
                
                <section className="display">

                </section>
            </main>
        </div>
    )
}

export default App