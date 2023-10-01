import { ToastContainer } from "react-toastify"
import Router from "./Router/Router"
import Header from "./components/Header/Header"

import MainSection from "./components/section/MainSection"

function App() {

    return (
        <>

            <Header />
            <Router />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default App
