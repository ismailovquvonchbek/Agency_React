import React from "react";
import "./Our.scss"


function Our() {

    const [our, setOur] = React.useState([
        {
            id: 1,
            img: "https://as2.ftcdn.net/v2/jpg/06/14/61/45/1000_F_614614543_0alkdeqzSamlbcFan5KvtZRhbhRg7CLD.jpg"
        },
        
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uotBMX99Ac1iptBJ3yf5IHrJFvdaMCDNRmO9F7oYTMFpcPQj7nlxyTlNgvEbiX2xcA&usqp=CAU"
        },
        
        {
            id: 3,
            img: "https://miro.medium.com/v2/resize:fit:1358/1*EESdKc1WHSgAWsJWJhZ_9g.jpeg"
        },
        
        {
            id: 4,
            img: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        },
        
        {
            id: 5,
            img: "https://cdn.worldvectorlogo.com/logos/logitech-2.svg"
        }
    ])

    return (
        <>
            <section className="our">
                <div className="container">
                    <h2 className="our__heading">
                        OUR TRUSTED CLIENTS
                    </h2>

                    <div className="our__list">
                        {our.map(item => (
                            <div key={item.id} className="our__div">
                                <a className="our__link" href="#link">
                                    <img className='our__img' src={item.img} alt={`${item.id}`} width={200} height={50} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our;