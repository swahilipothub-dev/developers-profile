import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swahilipot Tech x Hacktoberfest",
  description: "This website has been created by the SPH Engineering team to enable and show developers how to contribute to open-source projects.",
};

export default function Head() {
  return (
    <>
      <title>{(metadata.title as string) || "Default Title"}</title>
      <meta name="description" content={(metadata.description as string) || "Default description"} />
    </>
  );
}
