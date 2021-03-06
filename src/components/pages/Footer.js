import './style.css';

const Footer = () => {
    return (
        <div className="mt-3">
            <footer className="text-center py-5">
                <div className="mt-5">
                    <a href="https://docs.google.com/document/d/1zNCA-aYvJaGYsiGWY0a8mV2IN48S19kogd5t9sLNMyw/edit?usp=sharing" target="blank">
                    <div className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "24px"}} >Download My Resume</div>
                    </a>
                    <span className="mt-5" style={{fontFamily: "Karla", fontSize: "18px"}}>Cell Number: (904) 325-0895  ||  Email: Annelise.Rowan@gmail.com</span>

                </div>
            </footer>

        </div>
        
    )
}

export default Footer; 