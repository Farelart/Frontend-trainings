import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Search() {
  return (
    <form action="" className="search">
      <div className="search__bar">
        <MagnifyingGlassIcon className="search__icon"></MagnifyingGlassIcon>
        <input type="text" placeholder="Search Github username..." />
      </div>
      <button>Search</button>
    </form>
  );
}
