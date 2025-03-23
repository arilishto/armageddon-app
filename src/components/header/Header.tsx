import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { getUserKey } from "../../utils/getUserKey";
import { useState } from "react";
import { memo } from "react";

export const Header = memo(() => {
    const [inputOpened, setInputOpened] = useState(false);
    
    return <div className={styles.container}>
        <div>
            <h1>ARMAGEDDON V</h1>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div>
            <Link to="/asteroids">Астероиды</Link>
            <Link to="/destruction">Уничтожение</Link>
        </div>
        <div>
            {getUserKey() === "DEMO_KEY" 
                ? <button onClick={()=>setInputOpened(!inputOpened)} className={`${styles.status} ${styles.unauthorized}`}>Unauthorized</button> 
                : <div className={`${styles.status} ${styles.authorized}`}>Api key provided</div>
            }
        </div>
        {inputOpened ? <input data-testid="api_key_input" onChange={(ev)=>{
            if (ev.target.value.length === 40){
                localStorage.setItem("API_KEY", ev.target.value);
                setInputOpened(false);
            }
        }
        }/> : null}
    </div>
});
