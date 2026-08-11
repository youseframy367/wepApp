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
        <div className="fixed bottom-24 right-3 md:w-[372px] border-[1px] h-[65vh] max-h-[628px]  rounded-2xl border border-secondary bg-black/60 shadow-2xl z-99">
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
          src={isOpen ? "/imge/Chat/drwer.svg" : "/imge/Chat/openChat.png"}
          alt="chat"
        />
      </button>
    </>
  );
}