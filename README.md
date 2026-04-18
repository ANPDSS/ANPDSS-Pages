# Moodlife – Frontend (GitHub Pages)

**Moodlife** is a mood and wellness tracking application built by the ANPDSS team. This GitHub Pages repository serves as the frontend for the Moodlife project, providing the user-facing interface for logging moods, viewing trends, and engaging with the community.

The frontend communicates with the [Moodlife Flask backend](https://github.com/ANPDSS/ANPDSS-flask) to authenticate users, store mood entries, and surface personalized insights.

## Project Overview

Moodlife helps users develop greater emotional self-awareness through daily mood logging, trend visualization, and reflective journaling. Key goals of the project include:

- Allow users to log and track their mood over time
- Display mood trends and patterns through interactive visualizations
- Support a social/community layer for sharing reflections and reactions
- Integrate AI-assisted insights via the Gemini API
- Provide a responsive, accessible interface for desktop and mobile

## Team & Contributions

Moodlife is developed by the **ANPDSS** team as part of their CSP/CSA coursework. Team members contribute features, blogs, and project documentation to this repository. Contributor names are listed in the front matter of their respective posts and feature branches.

---

## Repository Structure

This GitHub Pages site is built with Jekyll. Content is organized as follows:

- `_posts/` – Markdown blog posts (sprint journals, feature write-ups, reflections)
- `_notebooks/` – Jupyter Notebook-based lessons and coding explorations
- `pages/` – Individual feature pages and UI components
- `assets/` – CSS, JavaScript, and image resources
- `_data/` – Shared data files used across pages
- `_includes/` / `_layouts/` – Reusable HTML components and page templates

### Key Features

- **Mood Logging UI**: Frontend forms and visualizations for users to record and review their mood data, backed by the Flask REST API.
- **User Authentication**: Login and profile management integrated with the backend JWT authentication system.
- **Community MicroBlog**: Social feed for sharing mood reflections and reactions with other users.
- **AI Insights**: Interface for querying the Gemini AI assistant for mood-related suggestions and summaries.
- **Developer Blog**: Sprint journals, feature documentation, and project reflections authored by the team using Markdown and Jupyter Notebooks.

---

## GitHub Pages Setup

**Activate GitHub Pages Actions**: Enable GitHub Pages Actions so the Moodlife frontend is automatically deployed on every push.

- On GitHub: Settings → Pages → Build and Deployment
- Under the Deployment location, select **"GitHub Actions"**.

**Update `_config.yml`**: Set the repository name and base URL so assets and links resolve correctly.

```text
github_repo: "ANPDSS-Pages" 
baseurl: "/ANPDSS-Pages"
```

**Set Repository Name in Makefile**: Update the `REPO_NAME` variable to match your repository name for correct local development previews.

```make
# Configuration, override port with usage: make PORT=4200
PORT ?= 4500
REPO_NAME ?= ANPDSS-Pages
LOG_FILE = /tmp/jekyll$(PORT).log
```

### Tool Requirements

The Moodlife frontend is a GitHub Pages / Jekyll site. Each push to the main branch triggers a GitHub Action that rebuilds and publishes the site automatically.

- **Jekyll** transforms Markdown and HTML content into static pages. [Jekyll](https://jekyllrb.com/)
- A **Linux shell** (Ubuntu or macOS) is required for local development.
- **Visual Studio Code** is the recommended editor. Install the relevant extensions for GitHub Pages and Jupyter Notebooks for the best experience.

### Development Environment Setup

Comprehensive start. A topic-by-topic guide to getting this project running is published [here](https://pages.opencodingsociety.com/tools/).

Quick start.  A quick start below is a reminder, but is dependent on your knowledge.  Only follow this instruction if you need a refresher.  Always default to the comprehensive start if any problem occurs.

#### Clone Repo

Run these commands to clone the Moodlife frontend and navigate into the project directory.

```bash
git clone https://github.com/ANPDSS/ANPDSS-Pages.git
cd ANPDSS-Pages/scripts
```

#### Windows WSL and/or Ubuntu or Kali Users

- Execute the script: `./activate_ubuntu.sh` or `./activate_kali.sh`

#### macOS Users

- Execute the script: `./activate_macos.sh`

#### Kasm Cloud Desktop Users

- Execute the script: `./activate_github.sh`

## Run Server on localhost

To preview the project you will need to "make" the project.

### Bundle install

The very first time you clone run project you will need to run this Ruby command as the final part of your setup.

```bash
bundle install
```

### Jupyter Kernels

To run many of the IPYNB files you will need to install Jupyter kernels for the languages you want to use. Here are the most common and recommended kernels:

#### Recommended Kernels

- **Python3** (ipykernel): For Python code cells and most data science workflows.
- **Java** (IJava or jbang-ijava): For Java code cells and Java notebooks.
- **JavaScript** (tslab): For JavaScript code cells and JavaScript notebooks.

#### Installing tslab

First, Install tslab
```
npm install -g tslab
```

Second, confirm it's installed
```
tslab install --version
```

Finally, register it to your Jupyter environment
```
tslab install
```

#### Installing IJava or JBang

**macOS (Homebrew):**

```bash
# For Java kernel (IJava)
brew install coursier
cs install --channel=https://github.com/SpencerPark/IJava/releases/latest/download/channel.json ijava
# Or for jbang-ijava
brew install jbang
jbang app install ijava
```

**Ubuntu/Linux (apt):**

```bash
# For Java kernel (IJava)
sudo apt install coursier
cs install --channel=https://github.com/SpencerPark/IJava/releases/latest/download/channel.json ijava

# Or for jbang-ijava
sudo apt install jbang
# or sudo snap install jbang --classic
jbang app install ijava
```

#### List your installed kernels

```shell
(venv) username@machine path % jupyter kernelspec list
Available kernels:
  python3        /Users/username/Library/Jupyter/kernels/python3
  java           /Users/username/Library/Jupyter/kernels/java
  jbang-ijava    /Users/username/Library/Jupyter/kernels/jbang-ijava
  jslab          /Users/username/Library/Jupyter/kernels/jslab
  tslab          /Users/username/Library/Jupyter/kernels/tslab
```

Recommended Kernels

### Start the Server  

This requires running terminal commands `make`, `make stop`, `make clean`, or `make convert` to manage the running server.  Logging of details will appear in the terminal.   A `Makefile` has been created in the project to support commands and start processes.

Start the server, this is the best choice for initial and iterative development.  Note. after the initial `make`, you should see files automatically refresh in the terminal on VSCode save.

  ```bash
  make
  ```

### Load web application into the Browser

Start the preview server in the terminal,
The terminal output from `make` shows the server address. "Cmd" or "Ctl" click the http location to open the preview server in a browser. Here is an example Server address message, click on the Server address to load:...

  ```text
  http://0.0.0.0:4500/pages/
  ```

### Regeneration of web application

Save on ".ipynb" or ".md" file activiates "regeneration". An example terminal message is below.  Refresh the browser to see updates after the message displays.

  ```text
  Regenerating: 1 file(s) changed at 2023-07-31 06:54:32
      _notebooks/2024-01-04-cockpit-setup.ipynb
  ```

### Other "make" commands

Terminal messages are generated from background processes.  At any time, click return or enter in a terminal window to obtain a prompt.  Once you have the prompt you can use the terminal as needed for other tasks.  Always return to the root of project `cd ~/open/pages` for all "make" actions.

#### Stop the preview server

Stopping the server ends the web server applications running process.  However, it leaves constructed files in the project in a ready state for the next time you run `make`.

  ```bash
  make stop
  ```

### Clean the local web application environment

This command will top the server and "clean" all previously constructed files (ie .ipynb -> .md). This is the best choice when renaming files has created duplicates that are visible when previewing work.

  ```bash
  make clean
  ```

### Observe build errors

Test Jupyter Notebook conversions (ie .ipynb -> .md), this is the best choice to see if an IPYNB conversion error is occurring.

  ```bash
  make convert
  ```

---

## Development Support

### File Names in "_posts", "_notebooks"

There are two primary directories for creating blogs.  The "_posts" directory is for authoring in markdown only.  The "_notebooks" allows for markdown, pythons, javascript and more.

To name a file, use the following structure (If dates are in the future, review your config.yml setting if you want them to be viewed).  Review these naming conventions.

- For markdown files in _posts:
  - year-month-day-fileName.md
    - GOOD EXAMPLE: 2021-08-02-First-Day.md
    - BAD EXAMPLE: 2021-8-2-first-day.md
    - BAD EXAMPLE: first-day.md
    - BAD EXAMPLE: 2069-12-31-First-Day.md

- For Jupyter notebooks in _notebooks:
  - year-month-day-fileName.ipynb
    - GOOD EXAMPLE: 2021-08-02-First-Day.ipynb
    - BAD EXAMPLE: 2021-8-2-first-day.ipynb
    - BAD EXAMPLE: first-day.ipynb
    - BAD EXAMPLE: 2069-12-31-First-Day.ipynb

### Tags

Tags are used to organize pages by their tag the way to add tags is to add the following to your front matter such as the example seen here `categories: [Tools]` Each item in the same category will be lumped together to be seen easily on the search page.

### Search

All pages can be searched for using the built-in search bar. This search bar will search for any word in the title of a page or in the page itself. This allows for easily finding pages and information that you are looking for. However, sometimes this may not be desirable so to hide a page from the search you need to add `search_exclude: true` to the front matter of the page. This will hide the page from appearing when the viewer uses search.

### Navigation Bar

To add pages to the top navigation bar use _config.yml to order and determine which menus you want and how to order them.  Review the_config.yml in this project for an example.

### Blog Page

There is a blog page that has options for images and a description of the page. This page can help the viewer understand what the page is about and what they can expect to find on the page. The way to add images to a page is to have the following front matter `image: /images/file.jpg` and then the name of the image that you want to use. The image must be in the `images` folder. Furthermore, if you would like the file to not show up on the blog page `hide: true` can be added to the front matter.

### SASS support

Pages supports a variety of different themes that are each overlaid on top of minima. To use each theme, go to the "_sass/minima/custom-styles.scss" file and simply comment or uncomment the theme you want to use.

To learn about the minima themes search for "GitHub Pages minima" and review the README.

To find a new theme search for "GitHub Pages Themes".

### Includes

- Pages uses liquid syntax to import many common page elements that are present throughout the repository. These common elements are imported from the _includes directory. If you want to add one of these common elements, use liquid syntax to import the desired element to your file. Here’s an example of the liquid syntax used to import: `{%- include post_list.html -%}` Note that the liquid syntax is surrounded by curly braces and percent signs. This can be used anywhere in the repository.

### Layouts

- To use or create a custom page layout, make an HTML page inside the _layouts directory, and when you want to use that layout in a file, use the following front matter `layout: [your layout here]`.  All layouts will be written in liquid to define the structure of the page.

### Metadata

Metadata, also known as "front matter", is a set of key-value pairs that provide additional information to GitHub Pages about `.md` and `.ipynb` files.

In the front matter you can define a title, description, tags, and layout for each page. Example:

  ```yaml
  ---
  toc: true
  comments: true
  layout: post
  title: Moodlife Sprint 1 Journal
  description: Recap of our first sprint — mood logging UI and backend integration.
  type: ccc
  ---
  ```

- The front matter is always delimited by `---` at the top and bottom.
- The `type` value controls which column the post appears in on the team board.

---

## Moodlife Development Workflow

The ANPDSS team follows an **Agile / Scrum** workflow with two-week sprints.

### Sprint Ceremonies

- **Sprint Planning** – Define user stories and tasks in GitHub Issues / Projects
- **Daily Standups** – Brief check-ins on progress and blockers
- **Sprint Review / Demo** – Demonstrate completed features to the Product Owner
- **Retrospective** – Reflect on what went well and what to improve

### Contributing

1. Branch off `main` using a descriptive branch name (e.g. `feature/mood-chart`, `fix/login-redirect`)
2. Make your changes and commit with clear messages
3. Open a Pull Request and request a review from a teammate
4. After approval and CI checks pass, merge into `main`

### Related Repositories

| Repository | Purpose |
|------------|---------|
| [ANPDSS-Pages](https://github.com/ANPDSS/ANPDSS-Pages) | This repo — Moodlife frontend (GitHub Pages / Jekyll) |
| [ANPDSS-flask](https://github.com/ANPDSS/ANPDSS-flask) | Moodlife backend — Flask REST API, SQLAlchemy, JWT auth |
