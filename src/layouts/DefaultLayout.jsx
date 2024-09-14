import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <div className="flex h-screen bg-white">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Header />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
