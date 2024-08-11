import { useState, useEffect } from "react"
import "./App.css"


const App = () => {

    const [params, setParams] = useState({
        bill: 0,
        tip: 0,
        people: 1
    })

    const [totals, setTotals] = useState({
        tipAmount: 0,
        totalPerPerson: 0
    });

    const handleInput = (e, key) => {
        setParams(prevState => {
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    }
    
    useEffect(() => {
        const { bill, tip, people } = params;

        if (people > 0) {
            const tipAmount = (bill * (tip / 100)) / people;
            const totalPerPerson = (bill / people) + tipAmount;

            setTotals({
                tipAmount: tipAmount.toFixed(2),
                totalPerPerson: totalPerPerson.toFixed(2)
            });
        }
    }, [params])

    const handleReset = () => {
        setParams({
            bill: 0,
            tip: 0,
            people: 1
        });
        setTotals({
            tipAmount: 0,
            totalPerPerson: 0
        });
    };

    return (
        <>
            <header>
                <h1>SPLI<br />TTER</h1>
            </header>
            <main className="main">

                <section className="calc">

                    <div className="bill-price">
                        <label htmlFor="price">Bill</label>
                        <input type="number" name="price" id="price" onChange={(e) => handleInput(e, "bill")}/>
                    </div>

                    <div>
                        <p>Select Tip %</p>

                        <div className="button-grid">

                            <button type="button" value={5} onClick={(e) => handleInput(e, "tip")}>5%</button>
                            <button type="button" value={10} onClick={(e) => handleInput(e, "tip")}>10%</button>
                            <button type="button" value={15} onClick={(e) => handleInput(e, "tip")}>15%</button>
                            <button type="button" value={25} onClick={(e) => handleInput(e, "tip")}>25%</button>
                            <button type="button" value={50} onClick={(e) => handleInput(e, "tip")}>50%</button>
                            <input type="number" name="tip" id="tip" placeholder="Custom" onChange={(e) => handleInput(e, "tip")}/>
                        
                        </div>
                    </div>

                    <div className="num-people">
                        <label htmlFor="people">Number of People</label>
                        <input type="number" name="people" id="people" onChange={(e) => handleInput(e, "people")}/>
                    </div>

                </section>
                
                <section className="display">

                    <div className="amount-container">

                        <div className="amounts">
                            <div className="amount">
                                <span>Tip Amount <br /> <small>/ person</small></span>
                                <span className="cost">${totals.tipAmount}</span>
                            </div>
                            <div className="amount">
                                <span>Total <br /> <small>/ person</small></span>
                                <span className="cost">${totals.totalPerPerson}</span>
                            </div>
                        </div>

                        <button type="button" className="reset" onClick={handleReset}>RESET</button>
                    </div>

                </section>
            </main>
        </>
    )
}

export default App