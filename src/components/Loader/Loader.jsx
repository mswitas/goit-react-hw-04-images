import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => (
    <div className={css.Loader}>
        <Oval
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
);