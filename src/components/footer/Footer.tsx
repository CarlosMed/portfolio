export default function Footer() {
  return (
    <footer className="flex items-center justify-center rounded-lg bg-olive p-3 text-[8px] font-extrabold tracking-wider text-eggshell">
      <p className="mr-3 flex-grow-0 text-nowrap">
        <span className="font-normal">&copy;</span> {new Date().getFullYear()}
      </p>
      <hr className="flex-1" />
      <p className="ml-3">Carlos Medina</p>
    </footer>
  );
}
