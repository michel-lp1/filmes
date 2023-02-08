import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from '.favoritar.png';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.favorito}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>

    )
}

export default Card;