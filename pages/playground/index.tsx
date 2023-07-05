import React, { useState } from "react";
import Card from "@/components/Card";
import BackButton from "@/components/BackButton";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button"; // import the button component

export default function Playground() {
  //useReducer can be considered here as well. Global state would be redundant here.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastType, setToastType] = useState<"info" | "success" | "warning" | "error">("info");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isSpinnerDisplayed, setIsSpinnerDisplayed] = useState(false);

  const showToast = (type: "info" | "success" | "warning" | "error") => {
    setToastType(type);
    setIsToastVisible(true);
  };

  const handleToastClose = () => {
    setIsToastVisible(false);
  };

  const displaySpinner = () => {
    setIsSpinnerDisplayed(true);
    setTimeout(() => {
      setIsSpinnerDisplayed(false);
    }, 3000);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center gap-5 py-5">
      <section id="title-navigation">
        <BackButton href="/" className="absolute left-5 top-5" />
        <h1 className="extrabold text-2xl">Playground for Components</h1>
      </section>

      {/* Card demo */}
      <section id="card-demo">
        <Card
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          title="Sample Card Component"
          image="/next.svg" //optional
        />
      </section>

      {/* Modal demo */}
      <section id="modal-demo">
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="grid gap-3 px-3">
            <h2 className="text-xl font-bold">
              Hey, I am a Modal Component!
            </h2>
            <p>Insert some cool content in here</p>
          </div>
        </Modal>
      </section>

      {/* Toast demo - Buttons can be mapped alternatively */}
      <section className="mx-5 flex gap-3">
        <Button onClick={() => showToast("info")}>Info Toast</Button>
        <Button onClick={() => showToast("success")}>Success Toast</Button>
        <Button onClick={() => showToast("warning")}>Warning Toast</Button>
        <Button onClick={() => showToast("error")}>Error Toast</Button>
        <Toast
          type={toastType}
          isOpen={isToastVisible}
          onClose={handleToastClose}
        />
      </section>

      {/* Spinner demo */}
      <section id="spinner-demo">
        {isSpinnerDisplayed ? (
          <Spinner />
        ) : (
          <Button onClick={displaySpinner}>Show Spinner for 3 seconds</Button>
        )}
      </section>
    </main>
  );
}
