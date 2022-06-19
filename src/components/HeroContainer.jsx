import HeroDescription from "./HeroDescription"
import HeroImageSection from "./HeroImageSection"

const HeroContainer = () => {
  return (
    <section className="container md:grid md:grid-cols-2 md:justify-center md:items-center md:pt-10">
      <HeroImageSection />
      <HeroDescription />
    </section>
  )
}

export default HeroContainer