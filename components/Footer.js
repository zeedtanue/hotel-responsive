import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small bg-dark text-light pt-4">

                <div className="container-fluid text-center text-md-left">
                    
                    <div className="row">
                        <div className="col-md-7 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>This is a project developed by Tamzeed Hossain for assessment purpose by React Next.js framework</p>
                            <p>Next. js is clever enough to only load the Javascript and CSS that are needed for any given page. This makes for much faster page loading times, as a user's browser doesn't have to download Javascript and CSS that it doesn't need for the specific page the user is viewing.</p>
                            <p>This project is also implemented a server side render. Which is useful in SEO.</p>

                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"></hr>
                        <div className="col-md-3 mb-md-0 mb-3">

                            
                            <h5 className="text-uppercase">Contact Me</h5>

                            <address>
                             
                                Tamzeed Hossain<br/>
                                C-13-03, The Arc<br/>
                                Persiaran Bestari<br/>
                                Cyberjaya, Selangor<br/>
                                63000<br/>

                                Malaysia <hr/>
                                <a href="mailto:webmaster@example.com">Email </a>
                                <a href="callto:+601123570117">Cell </a> 

                                <a href="https://www.linkedin.com/in/tamzeed-hossain-475852171/">LinkedIn</a><br/>
                            </address>

                        </div>
                        <div className="col-md-2 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                        <Link href="/">
                            <a  className=" text-uppercase" >Home
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/about">
                            <a className=" text-uppercase">About</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/services">
                            <a className=" text-uppercase" >Services</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/contact">
                           <a className=" text-uppercase" >Contact</a>
                        </Link>
                        </li>
                    
                        </ul>
                        </div>
                        

                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="https://mdbootstrap.com/"> Tamzeed Hossain</a>
                </div>
            </footer>

            
        </div>
    )
}

export default Footer
