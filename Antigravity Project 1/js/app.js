document.addEventListener('DOMContentLoaded', () => {
    console.log('I SPY Music Blog Loaded');

    // Reviews Data - 27 individual entries for easy customization
    const reviews = [
        {
            id: 1,
            title: "Son of Mr. Green Genes",
            artist: "Frank Zappa",
            thoughts: "This classic Zappa work from Hot Rats had me drumming like a windup monkey on my drive back to College Station. The song enters with a stadium pulse to it, which transitions into an almost 8 minute guitar solo that I wish never ended.  ",
            spotifyId: "0nDpUq6nY7eWsFPQcVizpI"
        },
        {
            id: 2,
            title: "You Never Even Called Me By My Name",
            artist: "David Allan Coe",
            thoughts: "Steve Goodman really did write the perfect country and western song. I needn't say more.",
            spotifyId: "29TI0GvP5gMQMPTJjdMe0H"
        },
        {
            id: 3,
            title: "If",
            artist: "Nelly",
            thoughts: "The Neptunes slapped together one of the sexiest, catchiest, captivating beats my ears have had the pleasure listening to. Then Nelly drops in with flow that perfectly compliments the complexity. Even if I was frozen in a block of carbonite like Han Solo, it wouldn't stop me from bobbing my head. ",
            spotifyId: "374C8tIqg3tsfKX7Sldkje"
        },
        {
            id: 4,
            title: "Cheatin' Woman",
            artist: "Lynyrd Skynyrd",
            thoughts: "A mischievous bass line to go with the telling of a violent revenge of the afore mentioned cheating woman. I wish I had a harley so I could listen to this while I hit a midnight cruise.",
            spotifyId: "2fnAWGcjkl6TXbq58WjCJv"
        },
        {
            id: 5,
            title: "Bones",
            artist: "Crumb",
            thoughts: "I feel lost and confused, like I am having a bad trip in the streets of New York City, when all of a sudden, waves of clarity wash over me slowly. First the music gets clear, then, I am shrouded by a compressed keyboard, which is finely wrapped like a piggie in a blanket by vocals that I can only describe as coming from a cheap dollar-store megaphone. They end the song out of nowhere on the tail of a tenor sax solo. Just as quickly as they made you confused, they left you even more confused.",
            spotifyId: "5JCiqYJxcK4XO1mbQyPNdk"
        },
        {
            id: 6,
            title: "Ball of the Dead Rat",
            artist: "The Teeth",
            thoughts: "Indie song with some ska, vampire, surf, and keys with a nice tremolo. The lyrics to this song are dark but the music feels less so.",
            spotifyId: "13YZn9f8rGCXOx306t6r1I"
        },
        {
            id: 7,
            title: "Brighter Day",
            artist: "Kirk Franklin",
            thoughts: "Though I am not super religious, Kirk Franklin find a way to convert me into a devout believer with this one.",
            spotifyId: "5qFDlKHNb0v68YSghSY4GK"
        },
        {
            id: 8,
            title: "Talullah",
            artist: "Jamiroquai",
            thoughts: "Extravagant. Sexy. Romantic. Funky. Soprano Saxophone. I only hope this song is fictional as it leaves a Talullah-sized longing in my heart. I can't imagine what this girl could have done to Jamiroquai.",
            spotifyId: "0WQ3l6AqrCJLDpxjhDHbFh"
        },
        {
            id: 9,
            title: "I Saw the Light",
            artist: "Todd Rundgren",
            thoughts: "I remember distincly hearing this song in Hawaii for the first time, and boy did it set the tone for island living in the summer. The periodic, chromatic slides by the guitar are so pretty. Maybe its because I associate this song with Hawaii, but every time I listen to this work of art, it just brings pure joy.",
            spotifyId: "0B1zVsLqmV9ibIFdNS5tGs"
        }
        // {
        //     id: 10,
        //     title: "Kiss Me More",
        //     artist: "Doja Cat ft. SZA",
        //     thoughts: "Playful and flirtatious with irresistible grooves. The chemistry between the artists and the funky production make this a certified bop.",
        //     spotifyId: "3DarAbFujv6eYNliUTyqtz"
        // },
        // {
        //     id: 11,
        //     title: "Positions",
        //     artist: "Ariana Grande",
        //     thoughts: "Sultry R&B with Ariana's signature vocal runs. The smooth production and confident lyrics showcase her artistic maturity.",
        //     spotifyId: "35mvY5S1H3J2QZyna3TFe0"
        // },
        // {
        //     id: 12,
        //     title: "Mood",
        //     artist: "24kGoldn ft. iann dior",
        //     thoughts: "A genre-blending hit that captures the anxiety of modern relationships. The melodic rap style is incredibly infectious.",
        //     spotifyId: "3tjFYV6RSFtuktYl3ZtYcq"
        // },
        // {
        //     id: 13,
        //     title: "Dynamite",
        //     artist: "BTS",
        //     thoughts: "Pure joy in musical form. The disco-pop energy and feel-good vibes make this impossible not to dance to.",
        //     spotifyId: "5QDLhrAOJJdNAmCTJ8xMyW"
        // },
        // {
        //     id: 14,
        //     title: "Watermelon Sugar",
        //     artist: "Harry Styles",
        //     thoughts: "Summer vibes distilled into three minutes. The groovy bassline and Harry's smooth vocals create the perfect warm-weather anthem.",
        //     spotifyId: "6UelLqGlWMcVH1E5c4H7lY"
        // },
        // {
        //     id: 15,
        //     title: "Willow",
        //     artist: "Taylor Swift",
        //     thoughts: "Ethereal folk-pop with enchanting storytelling. The gentle guitar work and poetic lyrics create a magical atmosphere.",
        //     spotifyId: "0lx2cLdOt3piJbcaXIV74f"
        // },
        // {
        //     id: 16,
        //     title: "Therefore I Am",
        //     artist: "Billie Eilish",
        //     thoughts: "Minimalist production with maximum attitude. Billie's deadpan delivery and the sparse beat create an effortlessly cool vibe.",
        //     spotifyId: "3Vo4wInECJQuz9BIBMOu8i"
        // },
        // {
        //     id: 17,
        //     title: "34+35",
        //     artist: "Ariana Grande",
        //     thoughts: "Playful and cheeky with a retro feel. The bubbly production and Ariana's vocal acrobatics make this a fun listen.",
        //     spotifyId: "6Im9k8u9iIzKMrmV7BWtlF"
        // },
        // {
        //     id: 18,
        //     title: "Laugh Now Cry Later",
        //     artist: "Drake ft. Lil Durk",
        //     thoughts: "Hard-hitting production with introspective lyrics. The contrast between the triumphant beat and vulnerable verses is compelling.",
        //     spotifyId: "2SAqBLGA283SUiwJ3xOUVI"
        // },
        // {
        //     id: 19,
        //     title: "Dakiti",
        //     artist: "Bad Bunny & Jhay Cortez",
        //     thoughts: "Reggaeton perfection with an irresistible rhythm. The production is crisp and the flow is absolutely infectious.",
        //     spotifyId: "1HNE2PX70ztbEl6MLxrpNL"
        // },
        // {
        //     id: 20,
        //     title: "Prisoner",
        //     artist: "Miley Cyrus ft. Dua Lipa",
        //     thoughts: "Rock-influenced pop with powerhouse vocals. The driving guitars and anthemic chorus create an empowering energy.",
        //     spotifyId: "1obklFzby2NfhuSRfKIjsY"
        // },
        // {
        //     id: 21,
        //     title: "Whoopty",
        //     artist: "CJ",
        //     thoughts: "High-energy drill with an unforgettable hook. The aggressive production and confident delivery make this a certified banger.",
        //     spotifyId: "2kZdJPgrQIq8uMQRuCe1Rg"
        // },
        // {
        //     id: 22,
        //     title: "Streets",
        //     artist: "Doja Cat",
        //     thoughts: "Sultry R&B with a hypnotic groove. The silky-smooth production and Doja's seductive vocals create an intoxicating atmosphere.",
        //     spotifyId: "5Ohxk2dO5COHF1krpoPigN"
        // },
        // {
        //     id: 23,
        //     title: "Astronaut In The Ocean",
        //     artist: "Masked Wolf",
        //     thoughts: "Motivational rap with a unique flow. The spacey production and catchy hook make this an instant earworm.",
        //     spotifyId: "3Ofmpyhv5UAQ70mENzB277"
        // },
        // {
        //     id: 24,
        //     title: "Telepatía",
        //     artist: "Kali Uchis",
        //     thoughts: "Dreamy bilingual pop with a retro feel. The lush production and Kali's angelic vocals transport you to another dimension.",
        //     spotifyId: "6tDxrq4FxEL2q15y5kLFTU"
        // },
        // {
        //     id: 25,
        //     title: "Without You",
        //     artist: "The Kid LAROI",
        //     thoughts: "Emotional pop-rock with raw vulnerability. The soaring chorus and honest lyrics create a powerful cathartic release.",
        //     spotifyId: "4sPmO7WMQUAf45kwMOtONw"
        // },
        // {
        //     id: 26,
        //     title: "Goosebumps",
        //     artist: "Travis Scott",
        //     thoughts: "Atmospheric trap with psychedelic elements. The haunting production and Travis's signature sound create an immersive experience.",
        //     spotifyId: "6gBFPUFcJLzWGx4lenP6h2"
        // },
        // {
        //     id: 27,
        //     title: "Circles",
        //     artist: "Post Malone",
        //     thoughts: "Melancholic pop with a hypnotic melody. The laid-back production and Post's emotive vocals create a contemplative mood.",
        //     spotifyId: "21jGcNKet2qwijlDFuPiPb"
        // }
    ];

    const reviewsGrid = document.getElementById('reviews-grid');
    const recentReviewsGrid = document.getElementById('recent-reviews-grid');

    // Render Reviews (All)
    if (reviewsGrid) {
        reviews.forEach(review => {
            createReviewCard(review, reviewsGrid);
        });
    }

    // Render Recent Reviews (Top 3)
    if (recentReviewsGrid) {
        const recentReviews = reviews.slice(0, 3);
        recentReviews.forEach(review => {
            createReviewCard(review, recentReviewsGrid);
        });
    }

    function createReviewCard(review, container) {
        const card = document.createElement('article');
        card.className = 'review-card';
        card.innerHTML = `
            <iframe class="spotify-embed" src="https://open.spotify.com/embed/track/${review.spotifyId}?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div class="review-content">
                <h3>${review.title}</h3>
                <h4>${review.artist}</h4>
                <div class="review-textbox">
                    <span class="textbox-label">Curator's Notes:</span>
                    <p>${review.thoughts}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    }

    // I SPY Logic
    const spyContainer = document.querySelector('.spy-container');
    const spyOverlay = document.getElementById('spy-overlay');
    const riddleBox = document.querySelector('.riddle-box p');

    // Update riddle text to match image
    if (riddleBox) {
        riddleBox.innerHTML = "I spy a blue castle, a tiny car,<br>a golden key, a fluffly friend,<br>and a lucky clover.";
    }

    // Define items to find (percentages based on visual estimation of the provided image)
    const hiddenItems = [
        { id: 'castle', x: 10, y: 50, width: 12, height: 25, hint: "I spy a blue castle..." },
        { id: 'car', x: 35, y: 65, width: 12, height: 10, hint: "...a tiny car..." },
        { id: 'key', x: 8, y: 8, width: 20, height: 15, hint: "...a golden key..." },
        { id: 'penguin', x: 58, y: 52, width: 12, height: 20, hint: "...a fluffly friend..." },
        { id: 'clover', x: 85, y: 70, width: 10, height: 15, hint: "...and a lucky clover." }
    ];

    let foundItems = 0;

    if (spyOverlay) {
        spyOverlay.innerHTML = ''; // Clear previous items
        hiddenItems.forEach(item => {
            const el = document.createElement('div');
            el.classList.add('spy-item');
            el.dataset.id = item.id;
            el.style.left = `${item.x}%`;
            el.style.top = `${item.y}%`;
            el.style.width = `${item.width}%`;
            el.style.height = `${item.height}%`;

            // For debugging/prototype visibility - keep dashed border but make it subtle
            el.style.position = 'absolute';
            el.style.border = '2px dashed rgba(0, 0, 0, 0.0)'; // Fully transparent as requested
            el.style.borderRadius = '50%'; // Make them roundish
            el.style.cursor = 'pointer';

            el.addEventListener('click', (e) => {
                if (!el.classList.contains('found')) {
                    el.classList.add('found');
                    el.style.border = '3px solid var(--accent-color)';
                    el.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
                    foundItems++;
                    checkWinCondition();
                }
            });
            spyOverlay.appendChild(el); // Ensure element is appended to overlay
        });
    }

    function checkWinCondition() {
        if (foundItems === hiddenItems.length) {
            riddleBox.innerHTML = "You found them all! <br> <a href='reviews.html' style='color: var(--accent-color); text-decoration: underline;'>Go to Reviews</a>";
            riddleBox.style.borderColor = "var(--accent-color)";

            // Redirect to reviews page after a short delay
            setTimeout(() => {
                window.location.href = 'reviews.html';
            }, 1500);
        }
    }
});
