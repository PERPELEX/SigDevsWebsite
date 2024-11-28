import Wrapper from "@/components/Wrapper";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  
  return (
    <main className="w-[100%] z-20 overflow-hidden">
      <Wrapper className="bg-graphite noto flex flex-col gap-y-24">
        <Services />
        <WhyUs />
      </Wrapper>
    </main>
  );
}
