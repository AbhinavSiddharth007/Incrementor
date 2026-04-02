import Counter from "../components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7ed,_#fde68a_0%,_#f8fafc_58%)] px-6 py-16 text-slate-900">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-4xl items-center justify-center">
        <section className="w-full max-w-2xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Counter Demo
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            A Counter :
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            To Increment or decrement, and reset with a small reusable component
            play with it haha.
          </p>
          <div className="mt-10">
            <Counter />
          </div>
        </section>
      </div>
    </main>
  );
}
