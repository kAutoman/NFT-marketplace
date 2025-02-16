import React from 'react';
import {Link} from "react-router-dom";

class Explorers extends React.Component {
    render() {
        return (
            <section className="row row--grid">
                <div className="col-12">
                    <div className="main__title">
                        <h2><Link to="/explorer">Explore</Link></h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main__carousel-wrap">
                        <div className="main__carousel main__carousel--live owl-carousel owl-loaded" id="live">
                            <div className="owl-stage-outer owl-height" style={{height: 527.562}}>
                                <div className="owl-stage"
                                     style={{
                                         transform: 'translate3d(-3325px, 0px, 0px)',
                                         transition: 'all 0.6s ease 0s',
                                         width: 4988
                                     }}>
                                    <div className="owl-item cloned" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}} >
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover4.jpg" alt=""/>
                                                <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/>
                                            </svg>
                                            <span className="card__clock card__clock--2">15:47:57</span>
                                        </span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Industrial Revolution</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>1.11 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>23</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover5.jpg" alt=""/>
                                                <span className="card__time">15 minutes left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to ="/item">I Love You</Link></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>0.99 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>358</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover card__cover--video">
                                                <img src="img/cover/cover6.jpg" alt=""/>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/>
                                                </svg>
                                                <span className="card__time">an hour left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to ="/item">Walking on Air</Link></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>1.63 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>90</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <a href="#modal-asset" className="card__cover open-modal">
                                                <img src="img/cover/cover7.jpg" alt=""/>
                                                <span className="card__time">an hour left</span>
                                            </a>
                                            <h3 className="card__title"><a href="#modal-asset"
                                                                           className="open-modal">Tranquility
                                                (Modal)</a></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>2.55 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>64</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover1.jpg" alt=""/>
                                                <span className="card__time">15 minutes left</span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Walking on Air</Link></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>4.89 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>189</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover2.jpg" alt=""/>
                                                <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                            <span className="card__clock card__clock--1">16:47:57</span>
                                        </span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Les Immortels, the
                                                    Treachery of Artificial Shadows</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>2.61 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>702</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <a href="#modal-asset" className="card__cover open-modal">
                                                <img src="img/cover/cover3.jpg" alt=""/>
                                                <span className="card__time">an hour left</span>
                                            </a>
                                            <h3 className="card__title"><a href="#modal-asset"
                                                                           className="open-modal">Flowers in
                                                Concrete (Modal)</a></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>3.19 €</span>
                                                </div>

                                                <button className="card__likes card__likes--active" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>37</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover4.jpg" alt=""/>
                                                <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                            <span className="card__clock card__clock--2">15:47:57</span>
                                        </span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Industrial
                                                    Revolution</Link></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>1.11 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>23</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover5.jpg" alt=""/>
                                                <span className="card__time">15 minutes left</span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">I Love You</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>0.99 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>358</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover card__cover--video">
                                                <img src="img/cover/cover6.jpg" alt=""/>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/>
                                                </svg>
                                                <span className="card__time">an hour left</span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Walking on Air</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>1.63 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>90</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <a href="#modal-asset" className="card__cover open-modal">
                                                <img src="img/cover/cover7.jpg" alt=""/>
                                                <span className="card__time">an hour left</span>
                                            </a>
                                            <h3 className="card__title"><a href="#modal-asset"
                                                                           className="open-modal">Tranquility
                                                (Modal)</a></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>2.55 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>64</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned active"
                                         style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover1.jpg" alt=""/>
                                                <span className="card__time">15 minutes left</span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Walking on Air</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>4.89 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>189</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned active"
                                         style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover2.jpg" alt=""/>
                                                <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                            <span className="card__clock card__clock--1">16:47:57</span>
                                        </span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Les Immortels, the
                                                    Treachery of Artificial Shadows</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>2.61 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>702</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned active"
                                         style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <a href="#modal-asset" className="card__cover open-modal">
                                                <img src="img/cover/cover3.jpg" alt=""/>
                                                <span className="card__time">an hour left</span>
                                            </a>
                                            <h3 className="card__title"><a href="#modal-asset"
                                                                           className="open-modal">Flowers in
                                                Concrete (Modal)</a></h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>3.19 €</span>
                                                </div>

                                                <button className="card__likes card__likes--active" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>37</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 302.5, marginLeft: 20}}>
                                        <div className="card" style={{height: 460, width: 260, marginLeft: 20}}>
                                            <Link to ="/item" className="card__cover">
                                                <img src="img/cover/cover4.jpg" alt=""/>
                                                <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                            <span className="card__clock card__clock--2">15:47:57</span>
                                        </span>
                                            </Link>
                                            <h3 className="card__title">
                                                <Link to ="/item">Industrial
                                                    Revolution</Link>
                                            </h3>
                                            <div className="card__author ">
                                                <div className="text__location">
                                                    <span>Date 23/11/2021</span>
                                                    <div>
                                                        <span>Location Ibiza - Club XYZ</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>1.11 €</span>
                                                </div>

                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                                    </svg>
                                                    <span>23</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav disabled">
                                <button type="button" role="presentation" className="owl-prev"><span
                                    aria-label="Previous">‹</span></button>
                                <button type="button" role="presentation" className="owl-next"><span
                                    aria-label="Next">›</span></button>
                            </div>
                            <div className="owl-dots disabled"/>
                        </div>

                        <button className="main__nav main__nav--prev" data-nav="#live" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/>
                            </svg>
                        </button>
                        <button className="main__nav main__nav--next" data-nav="#live" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Explorers;