import './App.css';
import Level from './components/Level';
import { CLASS_NAMES } from './constants';
import json from './configs/level.json';
import Grid from './components/Grid';
import './css/App.css';

function App() {
	const levelCount: number = 0;

	return (
		<div className = {CLASS_NAMES.App}>
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
