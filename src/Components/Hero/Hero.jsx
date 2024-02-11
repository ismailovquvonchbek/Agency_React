import Button from "../All_Button/Button"
import "./Hero.scss"
import Hero_Img from "../Image/Hero_Img.png"
import React from "react"



function Hero() {

    const Xref = React.useRef()

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <h1 className="hero__heading">Best <span className="hero__span">Marketing</span> Digital Agency</h1>
                        <p className="hero__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>

                        <div className="hero__buttons">
                            <Button value="Get Started" />
                            <button className="while" type="button" onClick={() => {
                                Xref.current.classList.add("blok")
                            }}>Watch Video</button>
                        </div>
                    </div>

                    <img src={Hero_Img} alt="Img" width={599} height={592} />

                    <div className="hero__modal" ref={Xref}>
                        <button onClick={() => {
                            Xref.current.classList.remove('blok')
                        }}>x</button>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dL8Z31rOf5w?si=QbVbqd5qHHMG13Vl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default  Hero;