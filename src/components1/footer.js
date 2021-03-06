import React from 'react'

const Footer = () => {

    return (
        <>
        <footer className="row">
            <div className="col-sm-12 col-lg-3 p-4 d-flex justify-content-center align-items-center">
                <a className="text-white decoration-none d-flex justify-content-start flex-column">
                    {/* <span className="fs-4 fw-bolder">Permata Azzuri Sehat</span> */}
                    <img src="/assets/img/logonew.png" style={{maxWidth: 300}}/>
                    <span style={{fontSize: "0.8rem", marginTop: "1rem"}}> Kami Perusahaan start-up cloud healthcare. Kami membantu klient kami melakukan peningkatan kinerja yang langgeng dan mewujudkan tujuan terpenting mereka melalui aplikasi dan solusi bisnis terbaik</span>
                </a>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="py-3 py-lg-5 px-5">
                    <p className="text-white fw-bolder text-uppercase">Site Map</p>
                    <ul className="list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Karir</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Syarat dan Ketentuan</a></li>
                        <li><a href="#">Partner</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="py-3 py-lg-5 px-5 contact">
                    <p className="text-white fw-bolder text-uppercase">Hubungi kami</p>
                    <p className="text-white ">Maquee Executive Offices At Cyber 2 Tower 18TH Floor Suite M06_CYB, Jl. H.R Rasuna Said, Blok X-5 , Jakarta 12950, Indonesia</p>
                    <p className="text-white m-0"><strong>Phone: </strong> (62-21) 5799 8999</p>
                    <p className="text-white m-0"><strong>Fax: </strong> (62-21) 5799 8988</p>
                    <p className="text-white m-0"><strong>Email: </strong> pt.pas@permataazzurisehat.com</p>
                </div>
            </div>

            <div className="col-lg-2">
            </div>
            
        </footer>
        <div className="row bg-dark-cyan" style={{background:"#024658"}}>
            <div className="col-lg-12 my-3 d-flex flex-column justify-content-center">
                <p className="text-xs text-white m-0 text-center">Code by <a href="https://www.permataazzurisehat.com" className="fw-bolder text-white decoration-none">www.permataazzurisehat.com</a></p>
                <a href="https://www.freepik.com/vectors/people" className="mx-5 mx-md-0 text-white decoration-none text-xs text-center">People vector created by pikisuperstar and pch.vector from - www.freepik.com</a>
                <p className="text-xs text-white m-0 text-center">Version : Beta, By <a href="https://www.permataazzurisehat.com" className="fw-bolder text-white decoration-none">www.permataazzurisehat.com</a></p>
            </div>
        </div>
        </>
    )
}
export default Footer