# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic website using the al-folio theme, deployed on GitHub Pages. This is a personal academic site for Matthew C. Plosser with publications, blog posts, CV, and data repositories.

## Development Commands

**Local development:**
```bash
bundle exec jekyll serve
```
Site will be available at http://localhost:4000

**Formatting:**
```bash
npx prettier . --write
```

**Pre-commit hooks:**
Pre-commit hooks are configured in `.pre-commit-config.yaml` and check for trailing whitespace, EOF fixers, YAML validity, and large files.

## Content Architecture

### Pages (`_pages/`)
All main pages are markdown files in `_pages/` with front matter controlling layout, permalink, navigation, and tooltips:
- `about.md` - Home page with bio
- `publications.md` - Displays publications from `_bibliography/papers.bib`
- `blog.md` - Lists all blog posts from `_posts/`
- `cv.md` - Renders CV from `_data/cv.yml`
- `repository.md` - Code and data links
- `freeform.md` - Miscellaneous content

### Content Data

**Publications:** `_bibliography/papers.bib` - BibTeX file with all publications. Entries with `selected={true}` appear on the publications page. The `abstract` field must use `abstract={...}` format (not `abstract{...}`).

**Blog posts:** `_posts/` - Markdown files with front matter (`title`, `date`, `description`, `tags`, `categories`, `external_source`). Posts with `redirect:` field link to external content. Sorted by date in reverse chronological order.

**CV:** `_data/cv.yml` - Structured YAML data for education and experience. The CV page uses this file (not `resume.json`).

**Other data:** `_data/` contains `citations.yml`, `coauthors.yml`, `repositories.yml`, `socials.yml`, and `venues.yml` for various site features.

### Assets

- `assets/pdf/CV_Plosser.pdf` - PDF version of CV
- `assets/img/profile_photo.jpg` - Profile photo
- `assets/css/main.scss` - Main stylesheet (imports from `_sass/`)

## Styling

**Custom CSS:** `_sass/_layout.scss` contains site-specific overrides:
- Profile image size (desktop): Line 44 `width: 25% !important;`
- Profile image size (mobile): Line 52 `width: 50% !important;`

**Theme configuration:** `_config.yml` controls all theme settings, including enabled features, analytics, bibliographic settings, and third-party library versions.

## Important Notes

- Site builds automatically via GitHub Actions when pushed to `main` branch
- YAML files require proper quoting for strings containing colons (`:`)
- Jekyll plugins are defined in both `_config.yml` and `Gemfile`
- Font Awesome icons are available via `<i class="fab fa-github"></i>` syntax
- Markdown uses Kramdown parser with GFM (GitHub Flavored Markdown) input
- External links automatically get `rel="external nofollow noopener"` and `target="_blank"`
