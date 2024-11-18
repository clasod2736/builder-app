import HeroComponent from "@/components/Hero";


export default function HomePage() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <HeroComponent {
        ...{
          title: "builder.io Testing Application for Skedyul",
          description: "Go to testing page click the button below",
          actions: [
            {
              label: "Pricing Page",
              href: "/pricing"
            },
            {
              label: "local testing",
              href: "/local-testing"
            }
          ]
        }
      }/>
    </div>
  )
}