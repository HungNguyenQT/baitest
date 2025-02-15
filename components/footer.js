function Footer(){
    return`
          <!-- Footer -->
        <footer class="text-white py-5 footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="logo-footer">
                            <img src="./Icon/Footer_logo.svg" alt="footer-logo">
                        </div>
                        <p>With over 1 million homes <br>for sale available on the<br> website.</p>
                        <div class="d-flex gap-2">
                            <a href="#"><img src="./Icon/Footer_linkedin.svg" alt="footer-linkedin"></i></a>
                            <a href="#"><img src="./Icon/Footer_facebook.svg" alt="footer-facebook"></i></a>
                            <a href="#"><img src="./Icon/Footer_twitter.svg" alt="footer-twitter"></a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-4">
                        <h5>Company</h5>
                        <ul class="list-unstyled list-footer">
                            <li><a href="#" class="text-white">About</a></li>
                            <li><a href="#" class="text-white">Careers</a></li>
                            <li><a href="#" class="text-white">Mobile</a></li>
                            <li><a href="#" class="text-white">Blog</a></li>
                            <li><a href="#" class="text-white">How we work?</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-4">
                        <h5>Contact</h5>
                        <ul class="list-unstyled list-footer">
                            <li><a href="#" class="text-white">Help/FAQ</a></li>
                            <li><a href="#" class="text-white">Press</a></li>
                            <li><a href="#" class="text-white">Affiliates</a></li>
                            <li><a href="#" class="text-white">Property owners</a></li>
                            <li><a href="#" class="text-white">Partners</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-4">
                        <h5>More</h5>
                        <ul class="list-unstyled list-footer">
                            <li><a href="#" class="text-white">Land fees</a></li>
                            <li><a href="#" class="text-white">Property</a></li>
                            <li><a href="#" class="text-white">Law tips</a></li>
                            <li><a href="#" class="text-white">Badges</a></li>
                            <li><a href="#" class="text-white">Privacy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h5>Head Office</h5>
                        <p class="text-addres">Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565</p>                       
                        <div class="newsletter-container">
                            <h5>News letter</h5>
                            <div class="input-box">
                                <input type="email" placeholder="Enter your email address">
                                <button class="email-icon">
                                    <img src="./Icon/Footer_mail.svg" alt="footer-mail">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-detail-information">
                    <div class="email">email@gmail.com</div>
                    <div class="phone">(123) 456-7890</div>
                    <div class="text-right">© 2021 Aeyman Megha All rights reserved.</div>
                </div>
            </div>           
        </footer>   
        <div class="footer-orange"></div> 
    `;
}
document.addEventListener("DOMContentLoaded", function() {
    const menuElements = document.querySelectorAll('[name="Footer"]');
    menuElements.forEach(item => {
        item.innerHTML = Footer();
    });
});