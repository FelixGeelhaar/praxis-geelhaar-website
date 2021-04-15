import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const newsDirectory = join(process.cwd(), "_news")

export function getNewsSlugs() {
    return fs.readdirSync(newsDirectory)
}

export function getNewsBySlug(slug, fields = []) {
    console.log("SLUG", { slug })
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(newsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug
        }
        if (field === "content") {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllNews(fields = []) {
    const slugs = getNewsSlugs()
    const news = slugs
        .map((slug) => getNewsBySlug(slug, fields))
        .sort((news1, news2) => (news1.date > news2.date ? -1 : 1))
    return news
}
