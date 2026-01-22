import Configuracoes from '../assets/configuracoes.svg';
import Contato from '../assets/contato.svg';
import Resumo from '../assets/resumo.svg';
import Sair from '../assets/sair.svg';
import Vendas from '../assets/vendas.svg';
import Webhooks from '../assets/webhooks.svg';
import FintechSVG from './FintechSVG';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
  return (
    <nav className="bg-cor3 flex flex-col items-start p-spacing-padrao rounded-[var(--spacing-padrao)] text-lg">
      <FintechSVG title="Fintech Logo" />
      <li className="flex items-center">
        <span>
          <img src={Resumo} />
        </span>
        <NavLink to="/" className="hover:text-cor1">
          Resumo
        </NavLink>
      </li>
      <li className="flex items-center">
        <span>
          <img src={Vendas} />
        </span>
        <NavLink to="/vendas" className="hover:text-cor1">
          Vendas
        </NavLink>
      </li>
      <li className="flex items-center">
        <span>
          <img src={Webhooks} />
        </span>
        <a href="" className="hover:text-cor1">
          Webhooks
        </a>
      </li>
      <li className="flex items-center">
        <span>
          <img src={Configuracoes} />
        </span>
        <a href="" className="hover:text-cor1">
          Configuracoes
        </a>
      </li>
      <li className="flex items-center">
        <span>
          <img src={Contato} />
        </span>
        <a href="" className="hover:text-cor1">
          Contato
        </a>
      </li>
      <li className="flex items-center">
        <span>
          <img src={Sair} />
        </span>
        <a href="" className="hover:text-cor1">
          Sair
        </a>
      </li>
    </nav>
  );
};

export default Sidenav;
