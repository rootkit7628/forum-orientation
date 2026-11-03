/// <reference path="../pb_data/types.d.ts" />

// Collections of the forum and who may do what with them.
//
// The website never logs in: visitors read the public content (empty-string rules) and may
// only *create* anonymous statistics and test results, never read them back (null rules =
// superusers only). Organisers manage everything from the PocketBase dashboard.

const PUBLIC_READ = { listRule: "", viewRule: "" }
const WRITE_ONLY = { listRule: null, viewRule: null, updateRule: null, deleteRule: null }

migrate(
  (app) => {
    const categories = new Collection({
      type: "base",
      name: "categories",
      ...PUBLIC_READ,
      fields: [
        { name: "name", type: "text", required: true, max: 60, presentable: true },
        // Hall letter on the floor plan, e.g. "A"
        { name: "hall", type: "text", required: true, pattern: "^[A-Z]$" },
        { name: "rank", type: "number", onlyInt: true },
      ],
      indexes: ["CREATE UNIQUE INDEX idx_categories_hall ON categories (hall)"],
    })
    app.save(categories)

    const exhibitors = new Collection({
      type: "base",
      name: "exhibitors",
      ...PUBLIC_READ,
      fields: [
        { name: "name", type: "text", required: true, max: 120, presentable: true },
        { name: "category", type: "relation", required: true, collectionId: categories.id, maxSelect: 1 },
        // Booth number inside the hall, e.g. 3 for stand "A3"
        { name: "booth", type: "number", required: true, onlyInt: true, min: 1 },
        { name: "summary", type: "text", required: true, max: 220 },
        { name: "description", type: "editor" },
        { name: "website", type: "url" },
        { name: "logo", type: "file", maxSelect: 1, maxSize: 2 * 1024 * 1024,
          mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"], thumbs: ["160x160f"] },
      ],
      indexes: ["CREATE UNIQUE INDEX idx_exhibitors_booth ON exhibitors (category, booth)"],
    })
    app.save(exhibitors)

    const assets = new Collection({
      type: "base",
      name: "assets",
      ...PUBLIC_READ,
      fields: [
        { name: "exhibitor", type: "relation", required: true, collectionId: exhibitors.id,
          maxSelect: 1, cascadeDelete: true },
        { name: "kind", type: "select", required: true, values: ["image", "document", "video"], maxSelect: 1 },
        { name: "title", type: "text", required: true, max: 120 },
        { name: "file", type: "file", maxSelect: 1, maxSize: 20 * 1024 * 1024, thumbs: ["640x400f"] },
        // For videos hosted elsewhere (YouTube, Vimeo…)
        { name: "url", type: "url" },
      ],
    })
    app.save(assets)

    const riasec = { type: "select", values: ["R", "I", "A", "S", "E", "C"], maxSelect: 6 }

    const domains = new Collection({
      type: "base",
      name: "domains",
      ...PUBLIC_READ,
      fields: [
        { name: "name", type: "text", required: true, max: 80, presentable: true },
        { name: "profiles", ...riasec },
      ],
    })
    app.save(domains)

    const jobs = new Collection({
      type: "base",
      name: "jobs",
      ...PUBLIC_READ,
      fields: [
        { name: "name", type: "text", required: true, max: 120, presentable: true },
        { name: "domain", type: "relation", required: true, collectionId: domains.id, maxSelect: 1 },
        { name: "summary", type: "text", required: true, max: 260 },
        { name: "missions", type: "json" }, // list of strings
        { name: "studies", type: "text", max: 200 },
        { name: "qualities", type: "json" }, // list of strings
        { name: "profiles", ...riasec },
        // Optional printable job sheet (PDF or image) shown at the physical forum
        { name: "sheet", type: "file", maxSelect: 1, maxSize: 10 * 1024 * 1024 },
      ],
    })
    app.save(jobs)

    const talks = new Collection({
      type: "base",
      name: "talks",
      ...PUBLIC_READ,
      fields: [
        { name: "title", type: "text", required: true, max: 160, presentable: true },
        { name: "speaker", type: "text", max: 120 },
        { name: "starts_at", type: "date" },
        { name: "summary", type: "text", max: 400 },
        { name: "video_url", type: "url" },
      ],
    })
    app.save(talks)

    const visits = new Collection({
      type: "base",
      name: "visits",
      ...WRITE_ONLY,
      createRule: "@request.body.kind != '' && @request.body.target != ''",
      fields: [
        { name: "kind", type: "select", required: true, maxSelect: 1,
          values: ["stand", "asset", "job", "talk", "test"] },
        { name: "target", type: "text", required: true, max: 40 },
        // Random id kept in the visitor's browser, to count unique visitors; no personal data
        { name: "visitor", type: "text", max: 40 },
        { name: "platform", type: "text", max: 20 },
        { name: "created", type: "autodate", onCreate: true },
      ],
    })
    app.save(visits)

    const results = new Collection({
      type: "base",
      name: "test_results",
      ...WRITE_ONLY,
      createRule: "",
      fields: [
        { name: "code", type: "text", required: true, pattern: "^[RIASEC]{2,3}$" },
        { name: "scores", type: "json", required: true, maxSize: 2000 },
        { name: "visitor", type: "text", max: 40 },
        { name: "created", type: "autodate", onCreate: true },
      ],
    })
    app.save(results)

    // Anonymous writes are open to anyone: turn on PocketBase's built-in rate limiter, whose
    // default rules already cap "*:create" requests per client IP.
    const settings = app.settings()
    settings.rateLimits.enabled = true
    app.save(settings)
  },
  (app) => {
    for (const name of ["test_results", "visits", "talks", "jobs", "domains", "assets", "exhibitors", "categories"]) {
      app.delete(app.findCollectionByNameOrId(name))
    }
  },
)
