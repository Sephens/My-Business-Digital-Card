import mycss from '../Styles/my.css'

export default function EmailMe(){
    return(

        <div className="contact-form">
            <h2 id= 'emailme-header'>Contact Me</h2>
            <form action="" id="contactForm">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Message: </label>
                <textarea name="message" id="message" cols="30" rows="5" required></textarea>

                <button type="submit" id='send'>Send</button>
            </form>
        </div>
    )
}