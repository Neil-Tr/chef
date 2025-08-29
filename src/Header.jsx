import chefLogo from "./assets/chef.png";

export default function Header() {
  return (
    <header>
      <img src={chefLogo} />
      <h1>Chef Neil</h1>
    </header>
  );
}
