import useAdvice from "./hooks/UseAdvice";
import AdviceCard from "./components/AdviceCard";
import DiceButton from "./components/DiceButton";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";

function App() {
  const { advice, loading, error, fetchAdvice } = useAdvice();

  return (
    <main className="min-h-screen bg-blue-950 flex items-center justify-center px-6">
      {error && <p className="text-red-400">{error}</p>}
      {advice !== null && (
        <div className="relative flex flex-col bg-blue-900 rounded-2xl px-10 pt-10 pb-14 max-w-[550px] text-center shadow-2xl items-center">
          <p className="text-green-300 text-xs font-bold tracking-[0.4em] uppercase t">
            Advice #{advice.id}
          </p>

          <p className="text-blue-200 text-[20px] sm:text-[26px] leading-snug mt-6 font-manrope">
            “{advice.advice}”
          </p>

          <div className="flex items-center gap-4 mt-10">
            <img
              src={patternDividerMobile}
              alt=""
              className="block sm:hidden"
            />
            <img
              src={patternDividerDesktop}
              alt=""
              className="hidden sm:block"
            />
          </div>

          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
            <DiceButton fetchAdvice={fetchAdvice} loading={loading} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
