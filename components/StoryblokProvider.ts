/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Restaurant from "./Restaurant";
/** 2. Import your components */
// import Page from "./Page"

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "your-access-token",
  use: [apiPlugin],
  components: {
    restaurant: Restaurant,
  },
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
