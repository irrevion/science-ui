import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Converter from './Pages/Converter';

function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Welcome />} />
			<Route path="/converter/" element={<Converter />} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
