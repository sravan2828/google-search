import React, { Component } from 'react';
import _ from 'lodash';
import ImageList from '../../components/ImageList';
import ImageBox from '../../components/ImageBox';
import prepareImages from "../../utils";
class SearchResults extends Component {

	state = {
		images: [],
	};

	componentDidMount() {
		this.fetchGifs();
	}

	componentDidUpdate(prevProps) {
		if(this.props.text !== prevProps.text)
		{
			_.debounce(this.fetchGifs, 1200, {leading: true})();
		}
	} 

	fetchGifs = () => {
		const {text} = this.props;
		const apiUrl =
			`https://app.zenserp.com/api/v2/search?q=${text}&hl=en&gl=US&location=United%20States&search_engine=google.com&tbm=isch&num=20&apikey=2b20eb80-aad7-11e9-a80b-f5d42510bbba`
		fetch(apiUrl)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					images: result.image_results.map(prepareImages)
				});
			},
			(error) => {
				console.log(error);
			}
		)
	}

	render() {
      return (
				<ImageList images={this.state.images} renderImage={ImageBox} />
			);
	}
}

export default SearchResults;
