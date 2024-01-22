import Pagination from '@/components/Pagination'

export default function Introduction() {
  return (
    <div>
      <h2 className="text-4xl font-bold">Introduction</h2>

      <div className="mt-8 text-lg font-light leading-relaxed">
        Neobrutalism components is a collection of type-safe components written
        in React and Tailwind.
        <br />
        <br />
        Neobrutalism is a mix of regular brutalism in web design and more modern
        typography, illustration and animation standards. <br /> Neobrutalism
        refuses the usual components of UX-UI design and embraces uncomfortable
        design elements, and it is more fearless to use distinctive color
        palettes.
        <br />
        <br />I created this collection of components for people who want to
        learn more about neobrutalism style, and to help them get started with
        creating neobrutalism layouts.
      </div>

      <Pagination
        next={{
          name: 'Installation',
          path: '/docs/installation',
        }}
      />

      <div className="flex items-center gap-1 text-sm pt-20 pb-14 font-medium text-neutral-900">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>with</span>
        <div className="relative inline-flex justify-center items-center">
          <div className="text-red-500 rounded-full">❤️</div>
          <div className="text-red-500 absolute top-0 left-0 animate-ping">❤️</div>
          <div className="text-red-500 absolute top-0 left-0 animate-pulse">❤️</div>
        </div>
        <span>by</span>
        <span className="hover:dark:text-neutral-400 cursor-pointer">Ival Shamkya</span>
      </div>

    </div>
  )
}