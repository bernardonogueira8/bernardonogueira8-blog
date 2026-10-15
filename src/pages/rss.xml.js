import rss from "@astrojs/rss";
import { getAllPosts } from "../lib/posts";

export async function GET(context) {
    const posts = await getAllPosts();
    return rss({
        title: "Bernardo Nogueira | Data Scientist & Math Teacher",
        description:
            "Artigos sobre Matemática, Ciência de Dados e Tecnologia, unindo prática e teoria de forma simples e acessível.",
        site: context.site,
        items: posts.map((post) => ({
            title: post.title,
            pubDate: new Date(post.pub_date),
            description: post.description,
            link: `/blog/posts/${post.slug}`,
        })),
        customData: `<language>pt-BR</language>`,
    });
}
