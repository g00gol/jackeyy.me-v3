"use client";
import { Cat, PartyPopper } from "lucide-react";
import { usePowerUp } from "@/contexts";

export function EasterEgg() {
  const { setPowerUp, refundPoints } = usePowerUp();

  const powerUpText = "choose a power-up: ";
  const easterEgg = {
    powerUpText,
    border: "".padStart(powerUpText.length + 10, "="),
    cookie: "🍪",
  };

  function handleClick(powerUp: "cat" | "confetti") {
    setPowerUp(powerUp);
  }

  return (
    <div className="text-center font-mono uppercase">
      <p>{easterEgg.border}</p>
      <span className="md:[&>*]:inline">
        <p>{easterEgg.powerUpText}</p>
        <PowerUp handleClick={() => handleClick("cat")} icon={Cat} />
        <p className="inline"> or </p>
        <PowerUp
          handleClick={() => handleClick("confetti")}
          icon={PartyPopper}
        />
      </span>
      <p> ({refundPoints} refund point remaining)</p>
      <p>{easterEgg.border}</p>
    </div>
  );
}

function PowerUp({
  handleClick = () => {},
  icon: Icon,
}: {
  handleClick?: () => void;
  icon: React.ComponentType<any>;
}) {
  return (
    <button
      onClick={handleClick}
      className="group hover:text-primary relative z-10 inline-block cursor-pointer align-middle transition-colors"
    >
      <Icon className="absolute group-hover:animate-ping" />
      <Icon />
    </button>
  );
}
