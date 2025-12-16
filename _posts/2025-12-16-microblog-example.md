---
layout: post
title: Microblog Feature Example
description: Example page demonstrating the microblog feature
permalink: /microblog-example
microblog: True
---

# Microblog Feature

This page demonstrates the **microblog feature** that has been integrated into your ANPDSS-Pages frontend.

## What is Microblog?

The microblog feature allows users to:
- Create short posts (up to 280 characters) on any page
- Reply to posts
- View posts filtered by current page or all pages
- Guest signup for quick access

## How to Use

1. **Open the Microblog Panel**: Click the floating "💬 Microblog" button in the upper right corner
2. **Guest Signup** (if not logged in): Click "Guest Signup" and create a quick account
3. **Create a Post**: Click the "+" button in the microblog panel
4. **View Posts**: Posts are displayed in a searchable, sortable table
5. **Reply to Posts**: Click the reply icon next to any post
6. **Filter Posts**: Toggle between viewing posts for this page only or all pages

## Technical Details

The microblog feature consists of:
- **Frontend**: JavaScript API module, HTML template, and SCSS styles
- **Backend**: Flask API endpoints in ANPDSS-flask
- **Database**: SQLite/PostgreSQL storage for posts and replies

## How to Enable Microblog on Any Page

To enable the microblog feature on any page, simply add this to the frontmatter:

```yaml
---
layout: post
microblog: True
---
```

That's it! The microblog panel will automatically appear on that page.

## Try It Out!

Click the "💬 Microblog" button in the upper right corner to try out the microblog feature on this page!
