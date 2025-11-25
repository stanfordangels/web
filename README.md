# Web

## How to Add New Articles

### Step 1: Prepare Your Article
- Write your article content in any text editor (like Word or Google Docs)
- Choose a short, URL-friendly slug for your article (e.g., "summer-2025-update" - use lowercase, hyphens instead of spaces)
- Gather any images you want to include and save them with descriptive names

### Step 2: Add Article Metadata
1. Open the file `articles.js` in your code editor
2. Find the `articlesData` array (starts around line 2)
3. Add your new article at the **TOP** of the list (after the opening `[`), following this template:

```javascript
{
    id: [NEXT_NUMBER], // Use the next sequential number
    slug: "your-article-slug-here",
    title: "Your Article Title Here",
    author: "Stanford Angels & Entrepreneurs Midwest", // or specific author name
    date: "2025-MM-DD", // Use YYYY-MM-DD format
    excerpt: "A brief 1-2 sentence summary of your article that will appear on the news page.",
    content: `This content is loaded from the separate HTML file.`
},
```

**Important:** Add a comma after the closing `}` if it's not the last item!

### Step 3: Create the Article HTML File
1. Copy an existing article file (like `article-q2-newsletter.html`)
2. Rename it to `article-[your-slug].html` (using the same slug from Step 2)
3. Edit the new file:

**Note:** You can also just ask ChatGPT to create an HTML version of your article, giving it the other HTML articles as examples for the desired format.

**If you want to do this manually instead:**
- Change the `<title>` tag to match your article title
- Update the meta description
- Replace the article title in the `<h1>` tag
- Update the author and date in the article meta section
- Replace the content inside the `<div class="article-content">` section with your article

### Step 4: Add Images (if needed)
- Upload your images to the `imgs/` folder
- Reference them in your article using: `<img src="imgs/your-image-name.jpg" alt="Description of image">`

## How to Add New Events

### Step 1: Gather Event Information
Collect all event details:
- Event title
- Date and time
- Location (physical address or "Virtual Event")
- Brief description
- Registration link
- Event type (e.g., "Networking", "Pitch Event", "Workshop")

### Step 2: Add Event to Events List
1. Open the file `events.js`
2. Find the `eventsData` array (starts around line 2)
3. Add your new event at the **TOP** of the list, following this template:

```javascript
{
    id: [NEXT_NUMBER], // Use the next sequential number
    title: "Your Event Title",
    date: "2025-MM-DD", // Use YYYY-MM-DD format
    time: "6:00 PM - 8:00 PM PT", // Include timezone
    location: "Venue Name, City, State" or "Virtual Event (Zoom)",
    excerpt: "Brief description of the event and what attendees can expect.",
    registrationLink: "https://your-registration-link.com",
    type: "Event Type" // e.g., "Networking", "Pitch Event", "Workshop"
},
```

**Important:** Add a comma after the closing `}` if it's not the last item!

## Publishing Your Changes

After adding articles or events:
1. Save all your changes
2. Test locally by opening `index.html` in your browser
3. Check that your new content appears on the News or Events pages
4. Upload/commit your changes to your web hosting platform

## Testing Locally

### Option B: Using VS Code Live Server (Recommended)

1. **Install the Live Server extension:**
   - In VS Code, click the Extensions icon (4 squares) in the left sidebar
   - Search for "Live Server"
   - Click "Install" on the one by Ritwick Dey

2. **Start the server:**
   - Right-click on `index.html` in VS Code
   - Select "Open with Live Server"
   - Your website will open automatically in your browser at `http://127.0.0.1:5500`

3. **Auto-refresh:** The page will automatically refresh when you make changes!

## Making Changes and Testing

### Editing Content:
1. Make your changes using the article/event instructions from above
2. Save the files (`Ctrl+S` or `Cmd+S`)
3. Refresh your browser to see changes (or they'll auto-refresh with Live Server)

### Testing:
- Check the News page to see new articles
- Check the Events page to see new events
- Click through links to make sure everything works
- Test on mobile by making your browser window narrow

## How to Commit Changes

This is how your changes will appear on the website!

In the **TERMINAL** (look back to see how to access this), enter these commands sequentially:

```bash
# See what files have changed
git status

# Add specific files
git add articles.js events.js

# Or add all changes
git add .

# Commit with a message
git commit -m "[INSERT COMMIT MESSAGE HERE]"

# Push to GitHub
git push origin main
```

