import { redirect } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import { CgClose, CgMathPlus, CgSearch } from 'react-icons/cg';
import { MdAdd, MdKeyboardCommandKey } from "react-icons/md";

type SearchBarProps = {};

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => redirect('blog'),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => redirect('contact'),
  },
];

export default function SearchBar({}: SearchBarProps) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<typeof actions>([]); // Use the same type as your actions

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        setIsSearchBarOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    // Filter actions based on keywords
    const matchingActions = actions.filter((action) =>
      action.keywords.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(matchingActions);
  };

  const handleClose = () => {
    setSearchValue('');
    setSearchResults([]);
    setIsSearchBarOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsSearchBarOpen(true)}
        className="flex items-center gap-20 rounded-md border border-black p-[5px] md:p-[10px] text-zinc-700 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
      >
        Search doc...
        <span className='flex items-center gap-0.5 bg-zinc-200 p-1 rounded text-xs text-primary'>
          <MdKeyboardCommandKey /> <MdAdd/> K
        </span>
      </button>
      {isSearchBarOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 grid place-items-center'>
          <div className="max-w-xl w-full bg-white border border-primary rounded-lg shadow-md dark:bg-zinc-900">
            <div className='relative w-full h-fit rounded-lg overflow-hidden'>
              <CgSearch className="text-2xl text-zinc-500 absolute left-2 top-1/4" />
              <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search documentation..."
                className="w-full px-10 py-3 rounded-t-lg border-b border-black outline-none text-zinc-800"
              />
              <button onClick={handleClose}>
                <CgClose className="text-2xl text-zinc-500 hover:text-zinc-900 absolute right-2 top-1/4" />
              </button>
            </div>
            {searchResults.map((result) => (
              <button type='button' onClick={result.perform} key={result.id} className='w-full p-2 text-left rounded hover:bg-zinc-300'>
                <p className='text-lg'>{result.name}</p>
                <p className='text-sm'>{result.keywords}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
