// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// Add social media sharing functionality
function setupSocialMediaSharing() {
    const shareButtons = document.querySelectorAll(".share-button");
    shareButtons.forEach(button => {
        button.addEventListener("click", function () {
            const platform = this.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Check out this amazing marketing agency!");
            let shareUrl = "";

            if (platform === "twitter") {
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            } else if (platform === "facebook") {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            } else if (platform === "linkedin") {
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
            }

            if (shareUrl) {
                window.open(shareUrl, "_blank");
            }
        });
    });
}

setupSocialMediaSharing();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(37.774929, -122.419416), // Updated to San Francisco
        zoom: 15, // Adjusted zoom level for better visibility
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // Add a marker for the marketing agency
    var marker = new google.maps.Marker({
        position: mapProp.center,
        map: map,
        title: "Our Marketing Agency"
    });
}