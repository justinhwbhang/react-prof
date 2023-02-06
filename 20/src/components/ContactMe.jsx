// import "../assets/css/contact-form.css"

export default function ContactMe() {
    return (
        <div id="contactMe" class="contactMe-section section  ">
            <h2 class="section-title box">Send me a message!</h2>
            <p class="section-description box">Submit the form below and I'll get back to you as soon as possible!</p>

            {/* <div class="contactMe-form-wrapper box "> */}

                <form class="contactMe-form " action="https://formspree.io/f/xknyozbk" method="POST" id="my-form">
                    <div class="form-group box ">
                        <label className="contactMe-label" for="firstName">First Name:</label>
                        <input className="contactMe-input" type="text" id="firstName" name="firstName" required/>
                    </div>

                    <div class="form-group">
                        <label className="contactMe-label" for="latsName">Last Name:</label>
                        <input className="contactMe-input" type="text" id="lastName" name="lastName" required/>
                    </div>

                    <div class="form-group box">
                        <label className="contactMe-label" for="email">Email:</label>
                        <input className="contactMe-input" type="email" id="email" name="email"/>
                    </div>

                    <div class="form-group">
                        <label className="contactMe-label" for="massage">Message:</label>

                        <textarea className="contactMe-input contactMe-input-message " name="massage" id="massage" cols="30" rows="10" required></textarea>
                    </div>

                    <button className="submit-btn" type="submit">Submit</button>
                    {/* <div id="status" className="w-100 box"></div> */}
                </form>
                
            {/* </div> */}
        </div>
    )
}
