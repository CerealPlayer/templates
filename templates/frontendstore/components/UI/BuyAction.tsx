export default function BuyAction() {
  return (
    <>
      <aside className="mx-auto w-full xl:col-span-3 border-2 rounded-xl p-4 border-slate-400">
        <div className="flex justify-end">
          <span className="text-3xl text-slate-200 font-bold bg-slate-600 py-1 px-2 rounded-md">
            18.10 €
          </span>
        </div>
        <div className="my-8">
          <h3>Includes</h3>
          <ul className=" text-slate-600 list-disc list-outside pl-4">
            <li>Huge community</li>
            <li>Thousands of librarys that will make your job easier</li>
            <li>Hooks</li>
            <li>Backed by Facebook</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button className="px-8 py-4 w-full rounded-lg hover:scale-105 transition-all duration-200 ease-out text-slate-50 font-bold bg-slate-700">
            Add to cart
          </button>
          <button className="px-8 w-full py-4 rounded-lg text-slate-50 font-bold bg-gray-500 hover:scale-105 transition-all duration-200 ease-out">
            Add to wishlist
          </button>
        </div>
        <p className="my-4">
          <span className="font-bold">Return policy:</span> Eligible for return
          within 30 days of receipt
        </p>
      </aside>
    </>
  );
}
