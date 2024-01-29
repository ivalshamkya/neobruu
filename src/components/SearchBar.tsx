import Link from 'next/link';
import { useState, useEffect, ChangeEvent, useRef } from 'react';

import components from '@/data/components';
import { CgClose, CgSearch } from 'react-icons/cg';
import { MdAdd, MdKeyboardCommandKey } from "react-icons/md";
import { RxComponent1 } from "react-icons/rx";

export default function SearchBar() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<typeof components>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    if (isSearchBarOpen && inputRef.current) {
      inputRef.current.focus();
      setSearchResults(components);
    }
  }, [isSearchBarOpen]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    const matchingComponents = components.filter((component) =>
      component.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(matchingComponents);
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
        className="flex items-center gap-2 md:gap-10 rounded-md border border-black p-[5px] md:p-[10px] text-zinc-700 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
      >
        Search doc...
        <span className='flex items-center gap-0.5 md:gap-1 bg-zinc-200 p-0.5 md:p-1 rounded text-xs text-primary'>
          <MdKeyboardCommandKey /> <MdAdd /> K
        </span>
      </button>
      {isSearchBarOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black/80 z-50 grid place-items-center'>
          <div className="max-w-[345px] md:max-w-xl w-full bg-white border-2 border-primary rounded-lg shadow-md dark:bg-zinc-900">
            <div className='relative w-full h-fit flex items-center rounded-lg overflow-hidden'>
              <CgSearch className="text-lg text-zinc-500 absolute left-2 top-1/4" />
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search documentation..."
                className="w-full px-10 py-2 rounded-t-lg border-b border-black outline-none text-zinc-800"
              />
              <button onClick={handleClose}>
                <CgClose className="text-lg text-zinc-500 hover:text-zinc-900 absolute right-2 top-1/4" />
              </button>
            </div>
            <div className='max-h-[300px] overflow-y-auto p-3'>
              {searchResults.map((result) => (
                <Link
                  href={`/docs/components/${result.name}`}
                  key={result.name}
                  onClick={handleClose}
                >
                  <button className='w-full flex items-center gap-3 p-2 text-left rounded hover:bg-zinc-300'>
                    <RxComponent1 className='text-xs' />
                    <h1 className='font-light'>{result.name}</h1>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
