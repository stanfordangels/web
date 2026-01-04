// Articles data - this could later be loaded from a JSON file or API
const articlesData = [
    {
        id: 3,
        slug: "investing-ai-startups-warren-packard-amit-garg",
        title: "Investing in AI Startups: A Conversation with Warren Packard and Amit Garg",
        author: "Stanford Angels & Entrepreneurs United",
        date: "2025-05-15",
        excerpt: "Stanford Angels and Entrepreneurs United (SAEU) hosted an online panel discussion in May 2025 on the topic of investing in AI startups. Warren Packard, a partner at the AI Fund, and Amit Garg, founder and a partner at Tau Venture, participated in the panel.",
        content: `This content is loaded from the separate HTML file.`
    },
    {
        id: 2,
        slug: "q2-newsletter",
        title: "Q2 Newsletter",
        author: "Stanford Angels & Entrepreneurs United",
        date: "2025-05-01",
        excerpt: "Q2 2025 Newsletter featuring upcoming events including our AI startup investing webinar, summer networking mixers across the country, community updates from Miami and DC, co-founder classifieds, and insights from recent pitch events and sustainability investing webinar.",
        content: `This content is loaded from the separate HTML file.`
    },
    {
        id: 1,
        slug: "q1-newsletter",
        title: "Q1 Newsletter",
        author: "Stanford Angels & Entrepreneurs United",
        date: "2025-02-01",
        excerpt: "Welcome to the inaugural Stanford Angels and Entrepreneurs United (SAEU) Newsletter! Inside, you'll find our group's upcoming remote and cross-country events, recaps of recent activities, and a new classifieds section.",
        content: `This content is loaded from the separate HTML file.`
    }
];

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to create article summary HTML for articles listing page
function createArticleSummaryHTML(article) {
    return `
        <article class="article-card">
            <div class="article-header">
                <h2 class="article-title">${article.title}</h2>
                <div class="article-meta">
                    <div class="article-meta-line-1">
                        <span class="article-author">By ${article.author}</span>
                    </div>
                    <span class="article-date">${formatDate(article.date)}</span>
                </div>
            </div>
            <div class="article-excerpt">
                <p>${article.excerpt}</p>
            </div>
            <div class="article-actions">
                <a href="article-${article.slug}.html" class="read-article-btn">Read Article</a>
            </div>
        </article>
    `;
}

// Function to load articles list
function loadArticlesList() {
    const container = document.getElementById('articles-container');
    const loading = document.getElementById('loading');
    
    if (!container) return;
    
    // Simulate loading delay
    setTimeout(() => {
        const articlesHTML = articlesData.map(article => createArticleSummaryHTML(article)).join('');
        container.innerHTML = articlesHTML;
        loading.style.display = 'none';
        container.style.display = 'block';
    }, 1000);
}

// Function to get article by slug for individual article pages
function getArticleBySlug(slug) {
    return articlesData.find(article => article.slug === slug);
}

// Function to load individual article content
function loadIndividualArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = window.location.pathname.split('-').slice(1).join('-').replace('.html', '');
    
    const article = getArticleBySlug(slug);
    
    if (!article) {
        document.querySelector('.content-section').innerHTML = `
            <h1>Article Not Found</h1>
            <p>Sorry, the article you're looking for doesn't exist.</p>
            <a href="news.html" class="back-to-articles">← Back to News</a>
        `;
        return;
    }

    const articleContainer = document.getElementById('individual-article');
    if (articleContainer) {
        articleContainer.innerHTML = `
            <div class="article-navigation">
                <a href="news.html" class="back-to-articles">← Back to News</a>
            </div>
            <article class="individual-article-content">
                <header class="article-header">
                    <h1 class="article-title">${article.title}</h1>
                    <div class="article-meta">
                        <div class="article-meta-line-1">
                            <span class="article-author">By ${article.author}</span>
                        </div>
                        <span class="article-date">${formatDate(article.date)}</span>
                    </div>
                </header>
                <div class="article-content">
                    ${article.content}
                </div>
            </article>
        `;
    }
}

// Load appropriate content when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('articles-container')) {
        loadArticlesList();
    } else if (document.getElementById('individual-article')) {
        loadIndividualArticle();
    }
}); 
