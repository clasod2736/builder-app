import HeroComponent from "@/components/Hero";
import Card from "@/components/PriceCard";
import TopNavigation from "@/components/NavMenu";

const mockedPriceCardData = {
  title: 'Early Plan',
  description: 'This is the Early Plan with out dedicated team',
  price: 29,
  img: 'testing',
  href: 'testing',
  badge: {
    discount: 20,
  },
  list: [
    {
      label: 'Unlimited Projects',
      isDisabled: false,
    },
    {
      label: 'Unlimited Bookings',
      isDisabled: true,
    },
    {
      label: 'Unlimited Users & Packages',
      isDisabled: false,
    },
  ]
}

const defaultHeroText = {
  title: "Pricing Plan",
  description: "Choose the right plan for you and your business",
  badges: [
    {
      value: "Free Trial",
    },
    {
      value: "No Credit Card Required",
    },
    {
      value: "Cancel Anytime",
    }
  ]
}

const defualtNavigationData = {
  logo: "/favicon.ico",
  items: [
    {
      trigger: "Primitives",
      list: [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        }
      ]
    },
    {
      trigger: "Components",
      list: [
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          description:
            "A user's profile image, often circular.",
        },
        {
          title: "Button",
          href: "/docs/components/button",
          description:
            "A clickable button.",
        }
      ]
    },
    {
      trigger: "Layouts",
      list: [
        {
          title: "Card",
          href: "/docs/layouts/card",
          description:
            "A container for content, actions, and images.",
        },
        {
          title: "Grid",
          href: "/docs/layouts/grid",
          description:
            "A layout system that uses rows and columns to organize content.",
        }
      ]
    }
  ]
}

export default function Home() {
  return (
  <div className="w-full min-h-screen flex flex-col justify-center items-center">
    <TopNavigation {...defualtNavigationData}/>
    <HeroComponent {...defaultHeroText}/>
    <Card {...mockedPriceCardData}/>
  </div>
  )
}