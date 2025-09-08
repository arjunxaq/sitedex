import { supabase } from "@/lib/supabaseClient";

export const revalidate = 0; // disables Next.js caching


export default async function HomePage() {
  // Fetch rows from "Curation" table
  const { data: sites, error } = await supabase
    .from("Curation")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
  console.error("Supabase fetch error:", error.message, error.details, error.hint);
  return <p className="p-6 text-red-500">Failed to load curated sites.</p>;
}

  console.log("sites:", sites);

  return (
    <section className="p-6">
      

      {sites && sites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sites.map((site) => (
            <a
              key={site.id}
              href={site.Site_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <img
                src={site.Screenshot_URL || "/placeholder.png"}
                alt={site.Site_Title || "Website screenshot"}
                className="rounded-lg shadow-md group-hover:scale-105 transition"
              />
              <h2 className="mt-2 text-lg font-medium">
                {site.Site_Title || "Untitled"}
              </h2>

              {Array.isArray(site.Tags) && site.Tags.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {site.Tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No curated sites yet.</p>
      )}
    </section>
  );
}
