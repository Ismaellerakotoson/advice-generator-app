import iconDice from "../assets/images/icon-dice.svg";

interface DiceButtonProps {
  fetchAdvice: () => void;
  loading: boolean;
}

export default function DiceButton({ fetchAdvice, loading }: DiceButtonProps) {
  return (
    <button
      type="button"
      onClick={fetchAdvice}
      disabled={loading}
      aria-label="Get new advice"
      className="bg-green-300 w-16 h-16 rounded-full flex items-center justify-center
                 transition-shadow duration-200
                 hover:shadow-[0_0_25px_6px_rgba(81,255,178,0.55)]
                 active:shadow-[0_0_15px_10px_rgba(81,255,178,0.7)]
                 
                 disabled:opacity-60 disabled:cursor-not-allowed active:cursor-pointer hover:cursor-pointer"
    >
      <img src={iconDice} alt="" />
    </button>
  );
}
