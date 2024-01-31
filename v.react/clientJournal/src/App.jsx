import './App.css';
// import { Helmet } from 'react-helmet';

function App() {
    return (
        <>
            <section className="welcome">
                <h1>Journal Safe</h1>
                <div className="p-and-timer-cntr">
                    <p>
                        Pour your thoughts, fears, and frustrations onto this
                        page without reservation. Embrace the catharsis, knowing
                        that your journal entry will be destroyed, offering you
                        a safe space to process and unburden. Start your journey
                        toward inner peace today.
                    </p>
                    <div
                        id="timer-output"
                        className="timer border-and-shadow"
                    ></div>
                </div>
            </section>

            <section className="journal">
                <div className="functionalBtnDiv">
                    <div
                        className="border-and-shadow clearBtnDiv"
                        // onClick={eraseText()}
                        id="clear-btn"
                    >
                        💣
                    </div>
                    <div
                        className="border-and-shadow hideBtnDiv"
                        id="hide-btn"
                        // onClick={hideTimer()}
                    >
                        🫣
                    </div>
                </div>
                <textarea
                    className="border-and-shadow"
                    id="textarea"
                    name="journal-area"
                    rows="30"
                    cols="90"
                ></textarea>
            </section>

            <section className="footer"></section>
        </>
    );
}

export default App;
