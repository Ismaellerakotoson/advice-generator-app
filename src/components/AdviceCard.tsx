import type { AdviceSlip } from "../types/Advice";

interface AdviceCardProps {
  advice: AdviceSlip;
}

export default function AdviceCard({ advice }: AdviceCardProps) {
  return (
    <div>
      <h1>ADVICE #{advice.id}</h1>
      <p>"{advice.advice}"</p>
    </div>
  );
}
