  
    <div class="title">
        <h1>Need Some Help?</h1>
    </div>

    <div class="contactUs-detail">
        <div class="con-1">
            <div class="row">
                <span>
                    <p>Call us on:</p>
                    <h2>01234 56 78 90</h2>

                    <p>Email us on:</p>
                    <h2>bakerdozen@gmail.com</h2> 
                </span>

                <img src="img/pastries.png">
            </div>
        </div>

        <div class="con-2">
            <div id="map"></div>
        </div>

        <div class="con-3">
            
            <h2>Contact us directly!</h2>
            <!--======================= Contact Us From =======================-->
            <form onsubmit="event.preventDefault();onSubmit();" autocomplete="off" id="recaptch-form" >
                <label for="name">Name:<star> *</star></label><label class="validation-error hide" id="nameValidationError">This field is required</label>
                <input type="text" id="name" placeholder="Your Name..." required>

                <label for="email">Email:<star> *</star></label><label class="validation-error hide" id="emailValidationError">Invalid Email Address</label>
                <input type="email" id="email" placeholder="Your Email..." required>

                <label for="telephone">Telephone Number:<star> *</star></label><label class="validation-error hide" id="phoneValidationError">Invalid Phone Number</label>
                <input type="text" id="telephone" placeholder="Your Name..."required maxlength="11">

                <label for="message">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message to us..."></textarea>

                <span>
                    <input type="checkbox" id="GDPR ">
                    <label for="GDPR ">You agree to the <a href="#" target="_blank">terms of use</a> and acknowledge the <a href="#" target="_blank">privacy policy</a></label><br>
                </span>

                <div class="g-recaptcha" id="rcaptcha"  data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>

                <input type="submit" value="Submit">
            </form>
            <!--===============================================================-->
        </div>
    </div>

    <!-- Recaptcha Function for Form -->
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script src="js/recaptcha.js"></script>

    <!-- Leafletjs Functions for Map -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="js/leaflet.js"></script>

    <!-- Form Fubmits Functions -->
    <script src="js/email.js"></script>

    