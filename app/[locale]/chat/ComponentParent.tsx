"use client";
import { useState } from "react";
import Header from "./HeaderChat";
import TypeChat from './typeChat';
import Maseg from "./form";
export default function Chat() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && (
        <div dir="ltr" className="fixed bottom-24 right-3 md:w-[372px] border-[1px] h-[65vh] max-h-[628px]  rounded-2xl border border-secondary md:bg-black/60 bg-black/80 shadow-2xl z-99">
          <Header />
          <TypeChat/>
                <Maseg />

        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-3 right-3 w-[73px]"
      >
        <img
          src={isOpen ? "/imge/Chat/drwer.webp" : "/imge/Chat/openChat.webp"}
          alt="chat"
        />
      </button>
    </>
  );
}