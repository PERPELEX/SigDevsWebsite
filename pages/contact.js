import Wrapper from "@/components/Wrapper";
import Consultation from "@/components/contact/Consultation";
import DirectContact from "@/components/contact/DirectContact";
import GetInTouch from "@/components/contact/GetInTouch";

export default function Home() {
  return (
    <main className="w-[100%] z-20 overflow-hidden">
      <Wrapper className="bg-graphite noto flex flex-col gap-y-60 py-28">
        <Consultation />
        <DirectContact />
        <GetInTouch />
      </Wrapper>
    </main>
  );
}
