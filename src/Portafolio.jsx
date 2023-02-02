import 'animate.css';
import { Header, Inicio, Proyectos } from './components/';
import { Habilidades } from './components/hablilidades/Habilidades';
import { ScrollProvider } from './context/ScrollProvider';
import './portafolio.css';

export const Portafolio = () => {
  return (
    <ScrollProvider>
      <Header />
      <Inicio />
      <Habilidades />
      <Proyectos />
    </ScrollProvider>
  )
}
