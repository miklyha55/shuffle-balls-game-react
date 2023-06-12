import Level from './components/screens/Level';
import { CLASS_NAMES, SCENE_TYPE } from './constants';
import { useAppSelector } from './store/hook';
import Next from './components/screens/Next';
import Menu from './components/screens/Menu';
import './css/App.css';
import './App.css';

function App() {
	const sceneType: string = useAppSelector(state => state.root.sceneType);

	const getScene = () => {
		switch (sceneType) {
			case SCENE_TYPE.Level:
				return <Level></Level>;
			case SCENE_TYPE.Menu:
				return <Menu></Menu>;
			case SCENE_TYPE.Next:
				return <Next></Next>;
		}
	};

	return (
		<div className = { CLASS_NAMES.App }>
			{ getScene() }
		</div>
	);
}

export default App;
