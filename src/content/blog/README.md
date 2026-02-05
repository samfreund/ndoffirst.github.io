# Adding New Blog Posts

This guide explains how to add new blog posts to the NDoF website.

## Quick Start

1. Create a new markdown file in this directory (`src/content/blog/`)
2. Use a descriptive slug for the filename (e.g., `my-blog-post.md`)
3. Add YAML frontmatter at the top of the file
4. Write your blog post content in markdown
5. The blog will automatically appear on the blog page once you rebuild or restart the dev server

## File Naming

Blog filenames should:
- Use lowercase letters, numbers, and hyphens
- Be descriptive and SEO-friendly
- End with `.md` extension
- Example: `inclusive-spaces-in-robotics.md`

The filename (without `.md`) becomes the URL slug. So `my-post.md` will be accessible at `/blog/my-post`.

## Frontmatter Format

Every blog post **must** start with YAML frontmatter enclosed in `---` delimiters. This metadata is used to populate the blog list and display post information.

```markdown
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "A short description that appears in the blog list (one sentence or two)."
---

# Your Blog Post Title

Your markdown content starts here...
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | Yes | The title of your blog post. Use quotes. |
| `date` | String (YYYY-MM-DD) | Yes | Publication date in ISO format (e.g., "2024-02-05"). |
| `description` | String | Yes | A brief description shown in the blog list. Keep it concise (one or two sentences). |

## Example Blog Post

```markdown
---
title: "Getting Started with Neurodiversity Advocacy"
date: "2024-02-10"
description: "Learn the fundamentals of advocating for neurodivergent individuals in FIRST robotics."
---

# Getting Started with Neurodiversity Advocacy

This is your introduction paragraph. It should hook the reader and introduce the topic.

## Key Points

Here are some important things to know:

- Point one about the topic
- Point two about the topic
- Point three about the topic

## Conclusion

Wrap up your post with a concluding thought or call to action.

---

*Got questions? Feel free to reach out on Discord!*
```

## Markdown Formatting

You can use standard markdown syntax:

- **Bold text**: `**bold**`
- *Italic text*: `*italic*`
- [Links](https://example.com): `[Link text](https://example.com)`
- Lists: Use `-` for unordered or numbers for ordered`

## Date Formatting

Dates must be in **YYYY-MM-DD format**:
- Correct: `"2024-02-15"`
- Incorrect: `"02/15/2024"` or `"February 15, 2024"`

The date will be automatically formatted for display (e.g., "February 15, 2024").
