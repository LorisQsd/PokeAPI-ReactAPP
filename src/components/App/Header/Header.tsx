// SCSS
import './header.scss';

export default function Header() {
  return (
    <header className="rounded-2xl px-5 py-3 bg-slate-100 text-v-red-100">
      <h1 className="text-5xl mb-1">
        <a
          href="https://github.com/LorisQsd/PokeAPI-ReactAPP"
          target="_blank"
          rel="noreferrer"
        >
          Pokédex
        </a>
      </h1>
      <a
        href="https://github.com/LorisQsd/PokeAPI-ReactAPP"
        target="_blank"
        rel="noreferrer"
      >
        Code source
      </a>
    </header>
  );
}
