export default function PerfectFor() {
  const teams = [
    { name: "Product Teams", description: "Keep your guides fresh with every feature launch" },
    { name: "Development Teams", description: "Automate tutorials in your CI/CD pipeline" },
    { name: "Technical Writers", description: "Create more guides in less time" },
    { name: "Support Teams", description: "Scale your help content effortlessly" },
    { name: "Customer Success", description: "Turn every demo into a reusable guide" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Perfect For Every Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">{team.name}</h3>
              <p className="text-gray-600">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

