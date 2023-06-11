import Level from './components/Level';
import { CLASS_NAMES, SCENE_TYPE } from './constants';
import { useAppSelector } from './store/hook';
import Menu from './components/Menu';
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
		}
	};

	return (
		<div className = { CLASS_NAMES.App }>
			{ getScene() }
		</div>
	);
}

export default App;
