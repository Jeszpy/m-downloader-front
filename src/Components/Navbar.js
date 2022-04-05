import {Link} from "react-router-dom";
import styles from './Navbar.module.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.link}>Скачать <CloudDownloadIcon
                style={{fontSize: '50px', marginLeft: '10px'}}/></Link>
            <Link to="/collection" className={styles.link}>Моя коллекция <LibraryMusicIcon
                style={{fontSize: '50px', marginLeft: '10px'}}/></Link>
        </div>
    )
}

export default Navbar