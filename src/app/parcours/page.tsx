"use client";
import { Timeline } from "@/components/ui/timeline";
import { TimelineEntry } from "@/types/timeline-entry";

export default function Page() {
  const data: Array<TimelineEntry> = [
    {
      title: "2022",
      content: (
        <div className="text-center">
          <h3 className="text-2xl font-bold">Développeur Web</h3>
          <p className="text-lg">Formation à la Wild Code School</p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="text-center">
          <h3 className="text-2xl font-bold">Développeur Web</h3>
          <p className="text-lg">Formation à la Wild Code School</p>
        </div>
      ),
    },
  ];
  return (
    <>
      <Timeline data={data} />
    </>
  );
}
