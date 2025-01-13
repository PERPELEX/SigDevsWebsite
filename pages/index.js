import Wrapper from "@/components/Wrapper";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main className="w-full z-20 overflow-hidden">
      <Dashboard />
      <Wrapper className="bg-graphite noto flex flex-col gap-y-24">
        <Services />
        <WhyUs />
      </Wrapper>
    </main>
  );
}
