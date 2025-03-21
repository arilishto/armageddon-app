import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header  = ()=>{
    return <div className={styles.container}>
        <div>
            <div>ARMAGEDDON V</div>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div>
            <div>
                <Link to={"/asteroids"}>Астероиды</Link>
                <Link to={"/destruction"}>Уничтожение</Link>
            </div>
        </div>
    </div>


}
