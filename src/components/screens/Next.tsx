import { delay } from '../../utils';
import { BETWEEN_LEVEL_DELAY, CLASS_NAMES, SCENE_TYPE } from '../../constants';
import { nextLevel, switchScene } from "../../store/stateSlice";
import { useAppDispatch } from '../../store/hook';
import '../../css/Next.css';

const Next = () => {
    const dispatch = useAppDispatch();
    const start = async (ms: number) => {
        await delay(ms);

        dispatch(switchScene(SCENE_TYPE.Level));
        dispatch(nextLevel());
    }
    
    start(BETWEEN_LEVEL_DELAY);

    return <div className = { CLASS_NAMES.Next }>
        You are good!
    </div>
}

export default Next;
