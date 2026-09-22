const makeImage = (category, fileName, size = "medium") => ({
  type: "image",
  category,
  src: `/${category}/${fileName}`,
  alt: `${category} gallery piece`,
  size,
});

const makeVideo = (index, size = "medium") => ({
  type: "video",
  category: "video",
  src: `/galleryvideos/gv (${index}).mp4`,
  alt: `Gallery video ${index}`,
  size,
});

export const tabs = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "framework", label: "Framework" },
  { id: "artwork", label: "Art work" },
];

export const brandingItems = [
  makeImage("branding", "Frame 1686553016 (1).png", "medium"),
  makeImage("branding", "Frame 1686553018.png", "large"), 
  makeImage("branding", "Frame 1686553017 (2).png", "medium"),
  makeImage("branding", "Frame 1686553018 (1).png", "wide"),
];

export const frameworkItems = [
  makeImage("framework", "Frame 1686553019.png", "wide"),
  makeImage("framework", "Frame 1686553016 (2).png", "medium"),
  makeImage("framework", "Frame 1686553017 (3).png", "medium"),
  makeImage("framework", "Frame 1686553017 (4).png", "wide"),
  makeImage("framework", "Frame 1686553017 (5).png", "medium"),
  makeImage("framework", "Frame 1686553017 (6).png", "medium"),
  makeImage("framework", "Frame 1686553018 (2).png", "medium"),
  makeImage("framework", "Frame 1686553018 (3).png", "medium"),
  makeImage("framework", "Frame 1686553018 (4).png", "wide"),
];

export const artworkItems = [
  makeImage("artwork", "Frame 1686553016 (3).png", "wide"),
  makeImage("artwork", "Frame 1686553017 (7).png", "medium"),
  makeImage("artwork", "Frame 1686553017 (8).png", "medium"),
  makeImage("artwork", "Frame 1686553018 (5).png", "medium"),
  makeImage("artwork", "Frame 1686553018 (6).png", "medium"),
];

export const videoItems = Array.from({ length: 42 }, (_, index) =>
  makeVideo(index + 1, "medium")
);

export const allItems = [
  videoItems[0],
  videoItems[1],
  videoItems[2],
  artworkItems[0],
  videoItems[3],
  brandingItems[0],
  videoItems[4],
  frameworkItems[1],
  videoItems[5],
  artworkItems[1],
  videoItems[6],
  brandingItems[1],
  videoItems[7],
  frameworkItems[2],
  videoItems[8],
  artworkItems[2],
  videoItems[9],
  brandingItems[2],
  videoItems[10],
  ...videoItems.slice(11),
  ...frameworkItems.slice(3),
  ...artworkItems.slice(3),
  ...brandingItems.slice(3),
];

export const itemsByTab = {
  all: allItems,
  branding: brandingItems,
  framework: frameworkItems,
  artwork: artworkItems,
};
