export type PowerUp = "cat" | "confetti" | null;

export type PowerUpContext = {
  activePowerUp: PowerUp;
  refundPoints: number;
  setPowerUp: (powerUp: PowerUp) => void;
  clearPowerUp: () => void;
  useRefundPoint: () => void;
  resetRefundPoints: () => void;
};
