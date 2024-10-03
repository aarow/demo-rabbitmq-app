"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { TableDemo } from "@/components/table-demo";
import { Data } from "./types";

export default function Home() {
  const [data, setData] = useState<Data>([]);

  return (
    <article className="container mx-auto">
      <section className="my-8">
        <ContactForm setData={setData} />
      </section>
      {data.length > 0 && (
        <section>
          <TableDemo data={data} />
        </section>
      )}
    </article>
  );
}
