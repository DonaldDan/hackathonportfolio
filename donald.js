const activities = [
    {
        img: "images/group1.jpg",
        caption: "<strong>May 10:</strong> Cloud Automation Webinar"
    },
    {
        img: "images/dodaju.jpg",
        caption: "<strong>May 15:</strong> Networking Workshop"
    },
    {
        img: "images/passport.jpg",
        caption: "<strong>May 20:</strong> SAD Updates"
    },
    {
        img: "images/Github.png",
        caption: "<strong>May 25:</strong> SAD Challenge"
    },
    {
        img: "images/spacenavig.jpg",
        caption: "<strong>May 10:</strong> Space Navigation"
    }
];

let current = 0;

window.addEventListener("DOMContentLoaded", () => {
    const imgEl = document.getElementById("activity-img");
    const captionEl = document.getElementById("activity-caption");

    setInterval(() => {
        current = (current + 1) % activities.length;
        imgEl.src = activities[current].img;
        captionEl.innerHTML = activities[current].caption;
    }, 3000);
});
