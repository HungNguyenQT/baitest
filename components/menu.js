function Menu(){
    return`
     <!-- Top Bar -->
     <div class="bg-dark text-white py-2">
        <div class="container d-flex justify-content-between">
            <div>
                <span><img src="./Icon/Icon_Envelope.svg" alt="envelope"> info@webmail.com</span>
                <span class="ms-3"><img src="/Icon/Icon_Location.svg" alt="location"> 547 ns tower St. anglo City, USA</span>
            </div>
            <div>
                <a href="#" class="text-white ms-2"><img src="./Icon/Icon_Facebook.svg" alt="facebook"></a>
                <a href="#" class="text-white ms-2"><img src="./Icon/Icon_Twitter.svg" alt="twitter"></a>
                <a href="#" class="text-white ms-2"><img src="./Icon/Icon_Intagram.svg" alt="intagram"></a>
                <a href="#" class="text-white ms-2"><img src="./Icon/Icon_Youtube.svg" alt="youtube"></a>
                <a href="#" class="text-white ms-2"><img src="./Icon/Icon_Pinterest.svg" alt="pinterest"></a>
            </div>
        </div>
    </div>
    <!-- End Top Bar -->
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <div class="logo"><img src="./Icon/Logo.svg" alt="logo"></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse menu" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Feature</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Market</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Log In</a></li>
                    <li class="nav-item"><a class="btn sign-up" href="#">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
    `;
}
document.addEventListener("DOMContentLoaded", function() {
    const menuElements = document.querySelectorAll('[name="Menu"]');
    menuElements.forEach(item => {
        item.innerHTML = Menu();
    });
});
