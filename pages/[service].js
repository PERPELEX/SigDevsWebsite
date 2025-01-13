import Wrapper from "@/components/Wrapper";
import ServiceHeading from "@/components/service/ServiceHeading";
import ServiceDescription from "@/components/service/ServiceDescription";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServiceDetails() {
  const router = useRouter();
  const { service } = router.query;
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (service) {
      fetch(`/api/getService?name=${service}`)
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              router.push("/404");
            }
            // throw new Error('Network response was not ok')
          }
          return response.json();
        })
        .then((data) => setServiceData(data))
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [router]);

  if (!serviceData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <main className="w-full z-20 overflow-hidden">
      <ServiceHeading
        title={serviceData?.heading?.title}
        heading={serviceData?.heading?.heading}
        text={serviceData?.heading?.text}
      />
      <Wrapper className="bg-graphite noto flex flex-col gap-y-12 md:gap-y-24 p-4 md:p-8">
        <ServiceDescription description={serviceData?.description} />
      </Wrapper>
    </main>
  );
}
