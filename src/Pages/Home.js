import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from "react-router-dom"
import Banner from "../Images/banner.jpg"
import './Home.css'
const Home = () => {
    return (
        <Layout>
            <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="container">
                    <h1>TheIndianOven</h1>
                    <p>Best Food in Pune</p>
                    <Link to="/menu">
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Home
