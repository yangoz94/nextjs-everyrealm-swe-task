import Card from "@/components/Card";
import BackButton from "@/components/BackButton";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Playground() {
  const [showModal, setShowModal] = useState(false);

  // create a function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal((prev: boolean) => !prev);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center gap-5 bg-red-200 py-5">
      <BackButton href="/" className="absolute left-5 top-5" />
      <h1 className="extrabold text-2xl">Playground for Components</h1>
      {/* Card demo */}
      <Card
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        title="Sample Card Component"
        image="/next.svg"
      />
      {/* Modal demo */}
      <button
        className="rounded bg-black px-4 py-2 text-white duration-300 hover:bg-white hover:text-black"
        onClick={toggleModal}
      >
        Open Modal
      </button>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <div className="grid gap-3 px-3">
          <h2 className="text-xl font-bold">Hey, I am a Modal Component!</h2>
          <p>Insert some cool content in here</p>
        </div>
      </Modal>
    </main>
  );
}
