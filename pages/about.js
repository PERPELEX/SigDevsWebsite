import Wrapper from "@/components/Wrapper";
import AboutUs from "@/components/about/AboutUs";
import OurVision from "@/components/about/OurVision";
import OurCoreValues from "@/components/about/OurCoreValues";

export default function Home() {
  return (
    <main className="w-[100%] z-20 overflow-hidden">
      <Wrapper className="bg-graphite noto flex flex-col gap-y-60 py-28">
        <AboutUs />
        <OurVision />
        <OurCoreValues />
      </Wrapper>
    </main>
  );
}
