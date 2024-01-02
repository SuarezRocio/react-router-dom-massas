import styles from './Prato.module.scss';
import { useParams, useLocation, useNavigate, Routes, Route} from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';


export default function Prato(){
  console.log(useLocation());
  //const{ state } = useLocation();
  const{ id } = useParams(); 
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id)); 
  //const { prato } = state as {prato: typeof cardapio[0]};

  //si no va a retornar el string vacio  
  if(!prato){
    return <NotFound/>;
  }

  //si tiene un prato va a retornar el string a continuacion
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao/>}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'<Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title}/>
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {prato.description}
                </p>
                <TagsPrato {...prato}/>
              </div>
            </section>
          </>
        }/>
      </Route>  
    </Routes>
  );
}

/* <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'<Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title}/>
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPrato {...prato}/>
        </div>
      </section>
  */