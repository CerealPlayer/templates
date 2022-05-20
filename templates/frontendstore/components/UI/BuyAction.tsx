export default function BuyAction() {
  return (
    <>
      <aside className="mx-auto w-full xl:col-span-3 border-2 rounded-xl p-4 border-slate-400">
        <div className="flex justify-end">
          <span className="text-3xl text-slate-200 font-bold bg-slate-600 py-1 px-2 rounded-md">18.10 €</span>
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
      </aside>
    </>
  );
}
