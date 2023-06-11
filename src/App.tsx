import './App.css';
import Level from './components/Level';
import { CLASS_NAMES } from './constants';
import json from './configs/levels.json';
import Grid from './components/Grid';
import './css/App.css';
import { useAppSelector } from './store/hook';

function App() {
	const levelCount: number = useAppSelector(state => state.root.levelCount);

	return (
		<div className = { CLASS_NAMES.App }>
			<Level>
				<Grid
					flaskConfig = { json[levelCount].config.flaskConfig }
					gridConfig = { json[levelCount].config.gridConfig }
					ballConfig = { json[levelCount].config.ballConfig }
				></Grid>
			</Level>
		</div>
	);
}

export default App;
