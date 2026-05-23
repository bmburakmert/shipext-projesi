export default function BlogPage() {

  const posts = [
    {
      category: "Dropshipping",
      date: "13 May 2025",
      title: "Amazon Dropshipping Account Health Guide",
      desc: "Learn how to manage your Amazon dropshipping business safely and avoid account suspensions."
    },
    {
      category: "Amazon FBA",
      date: "10 May 2025",
      title: "How Amazon FBA Helps E-Commerce Brands Scale",
      desc: "Discover how Amazon FBA simplifies logistics and improves operational efficiency."
    },
    {
      category: "Fulfillment",
      date: "26 Apr 2025",
      title: "Why Fulfillment Centers Matter for Online Stores",
      desc: "Explore how fulfillment services improve delivery speed and customer satisfaction."
    },
    {
      category: "Shipping",
      date: "15 Apr 2025",
      title: "Reducing Shipping Costs for E-Commerce Businesses",
      desc: "Practical strategies to lower shipping expenses while maintaining fast delivery."
    },
    {
      category: "Logistics",
      date: "08 Apr 2025",
      title: "Modern Logistics Solutions for Shopify Stores",
      desc: "How modern fulfillment infrastructure supports growing Shopify brands."
    },
    {
      category: "Warehouse",
      date: "02 Apr 2025",
      title: "Warehouse Management Best Practices",
      desc: "Improve operational efficiency with smarter warehouse workflows."
    }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-20">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Shipext Blog
          </h1>

          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Logistics insights, Amazon FBA strategies, fulfillment solutions,
            and e-commerce growth tips.
          </p>

        </div>

      </section>

      {/* BLOG POSTS */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-4">

          {/* SEARCH */}
          <div className="mb-14 flex justify-center">

            <input
              type="text"
              placeholder="Search articles..."
              className="w-full max-w-xl border border-slate-200 rounded-2xl px-6 py-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {posts.map((post, index) => (

              <article
                key={index}
                className="group border border-slate-200 rounded-3xl overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >

                {/* IMAGE */}
                <div className="h-52 bg-gradient-to-br from-slate-100 to-slate-200 relative">

                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="text-[11px] text-slate-400 font-semibold mb-4">
                    📅 {post.date}
                  </div>

                  <h2 className="text-lg font-black text-slate-900 leading-snug mb-4 group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {post.desc}
                  </p>

                  <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition">
                    Read More →
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}