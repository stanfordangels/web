// Keep your original events data at the top (as fallback)
const eventsData = [
    {
        id: 1,
        title: "DC Summer Networking Mixer",
        date: "2025-08-19",
        time: "6:30 PM - 8:30 PM ET",
        location: "Stanford in Washington, Washington, DC",
        excerpt: "Join local and visiting Stanford alums and students in the DMV from various industries, generations, and backgrounds for a happy hour. All levels of experience are invited to come mix and mingle.",
        registrationLink: "https://groups.stanford.edu/events/127932",
        type: "Networking"
    },
    {
        id: 2,
        title: "Boston Summer Networking Mixer",
        date: "2025-08-20",
        time: "6:30 PM - 8:30 PM ET",
        location: "Felipe's Taqueria, Cambridge, MA",
        excerpt: "Join local and visiting Stanford alums and students in Boston from various industries, generations, and backgrounds for a happy hour. All levels of experience are invited to come mix and mingle.",
        registrationLink: "https://groups.stanford.edu/events/126226",
        type: "Networking"
    },
    {
        id: 3,
        title: "Virtual: Investing in Biotech & Medtech Startups",
        date: "2025-08-27",
        time: "4:00 PM - 5:00 PM PT",
        location: "Virtual Event (Zoom)",
        excerpt: "Join us for a panel discussion full of insights from leaders in early stage biotech and medtech investing.",
        registrationLink: "https://groups.stanford.edu/events/133370",
        type: "Pitch Event"
    },
    {
        id: 4,
        title: "Virtual: Curated Pitch for Stanford Angels",
        date: "2025-09-24",
        time: "4:00 PM - 5:15 PM PT",
        location: "Virtual Event (Zoom)",
        excerpt: "Join Stanford Angels & Entrepreneurs United to hear pitches from 5-8 curated startups and meet the talented founders. This event is open to accredited investors with angel membership. To pitch your startup or recommend one to pitch at the event, please use this <a href='https://docs.google.com/forms/d/e/1FAIpQLSdP54E2BUUPD2mvc1DbIXt0cJE2n1CgVHbbyXLQtTd4KgaiGw/viewform' target='_blank'>form</a> to apply.",
        registrationLink: "https://groups.stanford.edu/events/138262",
        type: "Pitch Event"
    }
];

// Function to load events (will use CMS data when available, fallback to hardcoded)
async function loadEventsData() {
    try {
        const response = await fetch('/_events/events.json');
        if (response.ok) {
            const cmsEvents = await response.json();
            console.log('Loaded events from CMS');
            return cmsEvents;
        }
    } catch (error) {
        console.log('CMS events not available, using fallback data');
    }
    
    // Return original hardcoded data as fallback
    return eventsData;
}

// === START CODE FOR Pacific Time FORMAT ===
function formatEventDate(dateString) {
    // Create a new Date object from the YYYY-MM-DD string as UTC
    // This prevents any local timezone offset from being applied initially
    const eventDate = new Date(dateString + 'T00:00:00Z'); 
    
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'America/Los_Angeles' // This correctly converts the UTC date to PT
    };

    return new Intl.DateTimeFormat('en-US', options).format(eventDate);
}
// ====== END CODE FOR FORCING Pacific Time FORMAT =======

function createEventCardHTML(event) {
    return `
        <article class="article-card">
            <div class="article-header">
                <h2 class="article-title">${event.title}</h2>
                <div class="article-meta">
                    <div class="article-meta-line-1">
                        <span class="article-author">${event.type}</span>
                    </div>
                    <span class="article-date">${formatEventDate(event.date)} • ${event.time}</span>
                    <span class="article-date">${event.location}</span>
                </div>
            </div>
            <div class="article-excerpt">
                <p>${event.excerpt || event.body}</p>
            </div>
            <div class="article-actions">
                <a href="${event.registrationLink}" target="_blank" class="read-article-btn">Register for Event</a>
            </div>
        </article>
    `;
}

async function loadEventsList() {
    console.log('loadEventsList called');
    const container = document.getElementById('events-container');
    const loading = document.getElementById('loading');
    
    console.log('Container:', container);
    console.log('Loading:', loading);
    
    if (!container) {
        console.log('Container not found!');
        return;
    }
    
    setTimeout(async () => {
        console.log('Loading events...');
        const events = await loadEventsData();
        const eventsHTML = events
            .filter(event => event.published !== false)
            .map(event => createEventCardHTML(event))
            .join('');
        container.innerHTML = eventsHTML;
        loading.style.display = 'none';
        container.style.display = 'block';
        console.log('Events loaded!');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, checking for events container...');
    if (document.getElementById('events-container')) {
        console.log('Events container found, loading events...');
        loadEventsList();
    } else {
        console.log('Events container NOT found!');
    }
});
