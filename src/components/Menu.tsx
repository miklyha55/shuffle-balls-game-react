import { CLASS_NAMES, SCENE_TYPE } from '../constants';
import { useAppDispatch } from '../store/hook';
import '../css/Menu.css';
import { switchScene } from '../store/stateSlice';

const Menu = () => {
    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(switchScene(SCENE_TYPE.Level));
    }

    return <div className = { CLASS_NAMES.Menu }>
        <div className= { CLASS_NAMES.TitleMenu }>SHUFFLE BALLS</div>
        <div onClick = { onClickHandler } className = { CLASS_NAMES.MenuButton }>Play</div>
    </div>
}

export default Menu;
