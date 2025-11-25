// Simple events data
const eventsData = [
    // Upcoming Events
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
        excerpt: "Join Stanford Angels & Entrepreneurs Midwest to hear pitches from 5-8 curated startups and meet the talented founders. This event is open to accredited investors with angel membership.",
        registrationLink: "https://groups.stanford.edu/events/138262",
        type: "Pitch Event"
    },
    // Past Events
    {
        id: 5,
        title: "Virtual: Investing in AI Startups",
        date: "2025-05-28",
        time: "4:00 PM - 5:00 PM PT",
        location: "Virtual Event (Zoom)",
        excerpt: "Join our panel with AI Fund's Warren Packard and Tau Ventures's Amit Garg as they delve into the dynamic world of AI startup investing and identifying the next emerging stars.",
        registrationLink: "https://groups.stanford.edu/events/124008",
        type: "Panel Discussion"
    },
    {
        id: 6,
        title: "Virtual: Curated Pitch for Stanford Angels",
        date: "2025-07-15",
        time: "4:00 PM - 5:15 PM PT",
        location: "Virtual Event (Zoom)",
        excerpt: "Join Stanford Angels & Entrepreneurs Midwest to hear pitches from 5-8 curated startups and meet the talented founders.",
        registrationLink: "https://groups.stanford.edu/events/127932",
        type: "Pitch Event"
    },
    {
        id: 7,
        title: "Virtual: Investing in Sustainability Startups",
        date: "2025-03-26",
        time: "4:00 PM - 5:00 PM PT",
        location: "Virtual Event (Zoom)",
        excerpt: "Join us for our first Investing Insights Panel, focusing on sustainability innovation with expert panelists sharing their perspectives on key trends.",
        registrationLink: "https://bit.ly/investmarch2025",
        type: "Panel Discussion"
    },
    {
        id: 8,
        title: "Miami: eMerge Americas Perk Me Up Mixer",
        date: "2025-03-27",
        time: "1:30 PM - 2:30 PM ET",
        location: "XO Espresso Bar, Miami Beach, FL",
        excerpt: "SAEM co-hosted an in-person alumni networking reception across the street from the eMerge Americas Conference in Miami Beach.",
        registrationLink: "https://groups.stanford.edu/events/117227",
        type: "Networking"
    },
    {
        id: 9,
        title: "DC Area: Angels & Founders Meetup",
        date: "2025-04-22",
        time: "6:30 PM ET",
        location: "1299 Pennsylvania Ave, Washington DC",
        excerpt: "SAEM hosted an in-person networking meet up for Stanford alumni angels and founders in the Washington DC, Virginia and Maryland metro area.",
        registrationLink: "https://groups.stanford.edu/events/117227",
        type: "Networking"
    }
];

// Format date function
function formatEventDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];
    return `${months[month - 1]} ${day}, ${year}`;
}

// Create event card HTML
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
                <p>${event.excerpt}</p>
            </div>
            <div class="article-actions">
                <a href="${event.registrationLink}" target="_blank" class="read-article-btn">Register for Event</a>
            </div>
        </article>
    `;
}

// Get today's date
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Separate events into upcoming and past
function separateEvents(events) {
    const today = getTodayDate();
    const upcoming = [];
    const past = [];
    
    events.forEach(event => {
        if (event.date >= today) {
            upcoming.push(event);
        } else {
            past.push(event);
        }
    });
    
    // Sort upcoming events: closest to today first
    upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Sort past events: most recent first
    past.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return { upcoming, past };
}

// Main function to load events
function loadEvents() {
    console.log('Loading events...');
    
    const upcomingContainer = document.getElementById('upcoming-events-container');
    const pastContainer = document.getElementById('past-events-container');
    const loading = document.getElementById('loading');
    
    console.log('Containers found:', {
        upcoming: !!upcomingContainer,
        past: !!pastContainer,
        loading: !!loading
    });
    
    if (!upcomingContainer || !pastContainer) {
        console.error('Required containers not found!');
        if (loading) {
            loading.innerHTML = 'Error: Page structure not found. Please refresh.';
        }
        return;
    }
    
    try {
        const { upcoming, past } = separateEvents(eventsData);
        console.log('Events separated:', { upcoming: upcoming.length, past: past.length });
        
        // Render upcoming events
        const upcomingHTML = upcoming.map(event => createEventCardHTML(event)).join('');
        upcomingContainer.innerHTML = upcomingHTML;
        
        // Render past events
        const pastHTML = past.map(event => createEventCardHTML(event)).join('');
        pastContainer.innerHTML = pastHTML;
        
        // Hide loading
        if (loading) {
            loading.style.display = 'none';
        }
        
        console.log('Events loaded successfully!');
    } catch (error) {
        console.error('Error loading events:', error);
        if (loading) {
            loading.innerHTML = 'Error loading events: ' + error.message;
        }
    }
}

// Try to load events immediately
console.log('Script loaded, attempting to load events...');

// Method 1: Try immediately
if (document.readyState === 'complete') {
    console.log('Document already complete, loading now...');
    loadEvents();
} else {
    console.log('Document not ready, waiting for DOM...');
    document.addEventListener('DOMContentLoaded', loadEvents);
}

// Method 2: Fallback after delay
setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading && loading.style.display !== 'none') {
        console.log('Fallback: forcing event load...');
        loadEvents();
    }
}, 1000);

// Method 3: Final fallback
setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading && loading.style.display !== 'none') {
        console.log('Final fallback: loading events...');
        loadEvents();
    }
}, 2000);