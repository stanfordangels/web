// Articles data - this could later be loaded from a JSON file or API
const articlesData = [
    {
        id: 1,
        slug: "future-of-angel-investing-2025",
        title: "The Future of Angel Investing in 2025",
        author: "Stanford Angels Team",
        date: "2025-01-15",
        excerpt: "Exploring emerging trends in angel investing and what Stanford entrepreneurs should know about the evolving landscape of early-stage funding.",
        content: `
            <p>The angel investing landscape is rapidly evolving as we enter 2025. With new technologies, changing market dynamics, and shifting investor preferences, Stanford entrepreneurs need to understand these trends to successfully raise capital.</p>
            
            <h3>Key Trends Shaping Angel Investing</h3>
            <p>1. <strong>AI and Machine Learning Focus:</strong> Angel investors are increasingly interested in startups leveraging artificial intelligence and machine learning to solve real-world problems.</p>
            
            <p>2. <strong>Sustainability and Climate Tech:</strong> There's a growing emphasis on companies addressing climate change and sustainability challenges.</p>
            
            <p>3. <strong>Remote-First Investment:</strong> The pandemic has accelerated the adoption of remote due diligence and investment processes.</p>
            
            <h3>What This Means for Stanford Founders</h3>
            <p>Stanford founders should focus on clearly articulating their value proposition, demonstrating traction, and building relationships with investors who understand their market.</p>
            
            <p>At Stanford Angels & Entrepreneurs United, we're committed to connecting our community with these evolving opportunities and helping founders navigate the changing investment landscape.</p>
        `,
        tags: ["Angel Investing", "Trends", "2025"],
        readTime: "5 min read"
    },
    {
        id: 2,
        slug: "building-first-pitch-deck-stanford",
        title: "Building Your First Pitch Deck: A Stanford Perspective",
        author: "Richard Hartung",
        date: "2025-01-10",
        excerpt: "Essential elements every Stanford entrepreneur should include in their pitch deck to capture investor attention and secure funding.",
        content: `
            <p>Creating an effective pitch deck is both an art and a science. After reviewing hundreds of pitches at Stanford Angels, here are the key elements that make a difference.</p>
            
            <h3>The Essential Slides</h3>
            <p>1. <strong>Problem:</strong> Clearly define the problem you're solving</p>
            <p>2. <strong>Solution:</strong> Your unique approach to solving it</p>
            <p>3. <strong>Market:</strong> Size and opportunity</p>
            <p>4. <strong>Business Model:</strong> How you make money</p>
            <p>5. <strong>Traction:</strong> Proof of concept and early results</p>
            <p>6. <strong>Team:</strong> Why you're the right team to execute</p>
            <p>7. <strong>Financials:</strong> Revenue projections and key metrics</p>
            <p>8. <strong>Funding Ask:</strong> How much you need and what you'll use it for</p>
            
            <h3>Stanford-Specific Tips</h3>
            <p>Leverage your Stanford connections and highlight any university-based research or partnerships that give you a competitive advantage.</p>
        `,
        tags: ["Pitch Deck", "Fundraising", "Stanford"],
        readTime: "7 min read"
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
                        <span class="article-read-time">${article.readTime}</span>
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
            <a href="articles.html" class="back-to-articles">← Back to Articles</a>
        `;
        return;
    }

    const articleContainer = document.getElementById('individual-article');
    if (articleContainer) {
        articleContainer.innerHTML = `
            <div class="article-navigation">
                <a href="articles.html" class="back-to-articles">← Back to Articles</a>
            </div>
            <article class="individual-article-content">
                <header class="article-header">
                    <h1 class="article-title">${article.title}</h1>
                    <div class="article-meta">
                        <div class="article-meta-line-1">
                            <span class="article-author">By ${article.author}</span>
                            <span class="article-read-time">${article.readTime}</span>
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