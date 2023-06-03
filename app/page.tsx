import Image from "next/image";
import { Payment, columns } from "./columns";
import { TypesAndKeysTable } from "./typesAndKeysTable";
import { Input } from "@/components/ui/input";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen container flex flex-col bg-background">
      <h1 className="text-brand-blue text-5xl font-bold mt-12">
        Type and Key Management
      </h1>
      <p className="py-2">
        View the list of Types and Keys and request new ones.
      </p>

      <Input type="email" placeholder="Search for Types/Keys..." />

      <TypesAndKeysTable columns={columns} data={data} />
    </main>
  );
}
