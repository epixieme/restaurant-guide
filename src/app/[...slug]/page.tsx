import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Page({ params }: any) {
  // Remove the unused console.log
  // Handle both single and multi-segment slugs
  let slug = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "home";
  console.log(slug, "showtheslug");
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/${slug}`,
    { version: "draft" },
    { cache: "no-store" }
  );

  return (
    <div className="mb-40">
      <StoryblokStory story={data.story} bridgeOptions={{}} />
    </div>
  );
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  let paths: { slug: string[] }[] = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;
    if (slug == "home") {
      return;
    }
    let splittedSlug = slug.split("/");
    paths.push({ slug: splittedSlug });
  });
  return paths;
}
