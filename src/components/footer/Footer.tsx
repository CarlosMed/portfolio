export default function Footer() {
  return (
    <footer className="mt-4 flex items-center justify-center rounded-md bg-olive p-4 text-[8px] font-extrabold tracking-wider text-eggshell lg:mx-8 lg:mt-8">
      <p className="mr-3 flex-grow-0 text-nowrap">
        <span className="mr-1 font-normal">&copy;</span> {new Date().getFullYear()}
      </p>
      <hr className="flex-1" />
      <p className="ml-3">Carlos Medina</p>
    </footer>
  );
}
