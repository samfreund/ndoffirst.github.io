# NDoF Website

This is the official website for NDoF, built with Vue 3, TypeScript, Vite, and Tailwind CSS.

## Project Structure

The website follows the architecture defined in `plan.puml`:

### Pages
- **Home** (`/`) - Landing page
- **Community** (`/community`) - Community overview with subsections:
  - Administrators (`/community/administrators`)
  - Partner Teams (`/community/partners`)
  - Representatives (`/community/representatives`)
  - Retirees (`/community/retirees`)
  - Advisors (`/community/advisors`)
- **Blog** (`/blog`) - Blog and updates
- **Resources** (`/resources`) - Resources and information

### Content Management

All page content is stored as Markdown files in `src/content/`:
- `resources.md`
- `administrators.md`
- `partners.md`
- `representatives.md`
- `retirees.md`
- `advisors.md`

Blogs are stored in `src/content/blog/` as individual Markdown files.

To update page content, simply edit the corresponding `.md` file.

### Components

- **Header.vue** - Unified header with navigation and logo placeholder
- **MarkdownPage.vue** - Renders markdown content as HTML pages

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Customization

- **Colors**: Modify `src/css/main.css` to change the brand color and theme
- **Navigation**: Edit `src/components/Header.vue` to modify navigation structure
- **Routes**: Update `src/router.ts` to add new pages or modify routing

---