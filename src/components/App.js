import React from "react"
import Header from "./Header"
import About from "./About"
import Footer from "./Footer"
import "../styles/Fonts.css"
import "../styles/Colors.css"
import "../styles/Layout.css"
import '../assets/MDIO0.4-Bold.otf'
import '../assets/MDIO0.4-Italic.otf'


export default function App() {
    return (
        <div className="container">
            <Header />
            <About />
            <Footer />
        </div>
    )
}