import React, {useState} from 'react';
import MainLayout from './layouts/MainLayout';
import Search from './components/Search';
import SearchResults from './containers/SearchResults/SearchResults';

function App() {
	const [text, setText] = useState("kids");
	
	return (
		<MainLayout>
			<Search text={text} setText={setText}/>
			<SearchResults text={text}/>
		</MainLayout>
	);
}

export default App;
