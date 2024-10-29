"use client";
import UserCard from "../components/namecards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContributerModal } from "@/hooks/use-contributer-modal";
import { ContributerModal } from "../components/modals/contributer-modal"; // Import the modal

export default function Contributors() {
  const contributerModal = useContributerModal();

  return (
    <div className="mx-10 md:mx-52">
      <h1 className="text-center py-3 font-semibold text-xl">Contributors</h1>
      <p className="text-center">
        This page is dedicated to displaying the names of those who have
        contributed to the development of this website.
      </p>
      <UserCard />
      <Link href="/" className="animate-pulse text-md">
        ← Back to Home
      </Link>

      {/* Directly trigger the modal on button click */}
      <div className="flex items-center">
        <Button
          className="ml-2 h-8" // Move hover effect to Button
          onClick={contributerModal.onOpen} // Open the Contributer Modal directly
        >
          + Contributor
        </Button>
      </div>

      {/* Add the ContributerModal component here */}
      <ContributerModal />
    </div>
  );
}
