# Featured work

Each project owns its content file here. Shared rendering lives in
`src/components/featured-work/`; route files live in
`src/app/(site)/featured-work/`.

| File | Purpose |
| --- | --- |
| `call-of-duty-hub.tsx` | Call of Duty Hub title, year, images, highlights, and sections |
| `2-shg.tsx` | SHG project content |
| `3-bo7-lp.ts` | Black Ops 7 landing page content |
| `4-treyarch.ts` | Treyarch Studios project content |
| `project-5.ts` | Placeholder content for the remaining project |
| `types.ts` | The `PortfolioProject`, `ProjectImage`, `ProjectHighlight`, and `ProjectSection` shapes |
| `index.ts` | The ordered list displayed on `/featured-work` |

## Editing a project

Set `listingStatus` in the project's content file to control its grid card:

- `published`: show its linked project card.
- `coming-soon`: omit its linked card while the project is in progress.
- `hidden`: omit it from the grid while keeping its data and detail route.

When a project is ready, change its status to `published`. This setting only
affects the listing; existing detail URLs remain accessible for previewing work.

The grid always ends with one non-clickable “More coming soon” teaser,
independent of project statuses.

Edit the project's own file. The grid and detail page read the same title and
year. `thumbnail` is the grid image; `heroImage` is the cropped, clickable detail
image. `highlights` supplies the summary cards, and `sections` supplies the
alternating image/text rows. Each section can have an optional `image` with
`src`, `alt`, `width`, and `height`; omitting it displays a placeholder.

`description` accepts a plain string or inline JSX. For JSX, use a `.tsx` content
file and a fragment containing text, `<span>` for white emphasis, and `<br />`
for line breaks. The description renders inside a paragraph, so keep its markup
inline rather than adding block elements.

Keep image files together under `public/images/featured work/<project-name>/`.
Image URLs start at `/images/`, without `public`.

## Shared components and individual pages

- `featured-work-grid.tsx` renders the project listing.
- `project-detail/project-detail-page.tsx` renders the shared detail layout.
- `project-detail/project-image-lightbox.tsx` handles the cropped hero preview and full-image dialog.

Each project retains its own `page.tsx` route and metadata. Pass project-specific
components as children of `ProjectDetailPage` to add content after its standard
sections. For a substantially different layout, compose that route separately
and reuse the image lightbox as needed. The data model does not require all
projects to use the same page layout.

## Naming a placeholder project

Rename its content file and exported constant, update its import in `index.ts`
and its route, and replace its placeholder content and images. Changing a title
does not require changing its URL. If changing the slug, update the route folder
to match and consider redirecting the old URL.

Call of Duty Hub keeps its existing `/featured-work/1-cod-hub` URL.
