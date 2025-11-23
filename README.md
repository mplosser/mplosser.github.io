# Matthew C. Plosser - Academic Website

Personal academic website built with Jekyll and the al-folio theme, deployed on GitHub Pages.

## Key Files for Modifying Content

### Pages

- **`_pages/about.md`** - Home page (readme) with bio and site overview
- **`_pages/publications.md`** - Longform page displaying publications from bibliography
- **`_pages/blog.md`** - Shortform page with blog posts
- **`_pages/cv.md`** - CV page (uses `_data/cv.yml` for content)
- **`_pages/repository.md`** - Repository page for code and data
- **`_pages/freeform.md`** - Miscellaneous content page

### Content Data

- **`_bibliography/papers.bib`** - BibTeX file with all publications (displayed on longform page)
- **`_posts/`** - Blog post markdown files (displayed on shortform page)
  - Posts with `redirect:` field link to external content
  - Use front matter: `title`, `date`, `description`, `tags`, `categories`, `external_source`
- **`_data/cv.yml`** - Structured CV data (education, experience)

### Assets

- **`assets/pdf/CV_Plosser.pdf`** - PDF version of CV
- **`assets/img/profile_photo.jpg`** - Profile photo
- **`assets/json/resume.json.backup`** - JSON Resume format (currently not used)

### Styling

- **`_sass/_layout.scss`** - Custom CSS overrides (e.g., mobile profile photo sizing)

## Navigation Structure

1. **readme** (/) - Home page
2. **cv** (/cv/) - Curriculum vitae
3. **longform** (/longform/) - Publications and working papers
4. **shortform** (/shortform/) - Blog posts and shorter content
5. **repository** (/repository/) - Code and data
6. **freeform** (/freeform/) - Miscellaneous content

## Local Development

```bash
bundle exec jekyll serve
```

## Deployment

The site automatically builds and deploys to GitHub Pages via GitHub Actions when pushed to the `main` branch.

## Notes

- BibTeX entries in `papers.bib` with `selected={true}` appear in the publications list
- YAML files require proper quoting for strings containing colons (`:`)
- Blog posts are sorted by date in reverse chronological order
- The CV layout pulls from `cv.yml` (not `resume.json`)
- BibTeX `abstract` fields must use `abstract={...}` format (not `abstract{...}`)
