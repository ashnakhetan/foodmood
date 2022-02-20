
// export default App;
import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
// import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';

import Food from './Food';
import List from './List';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

let classifier;

function App() {
	const videoRef = useRef();
	const [start, setStart] = useState(false);
	const [result, setResult] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		classifier = ml5.imageClassifier("./model/model.json", () => {
			navigator.mediaDevices
				.getUserMedia({ video: true, audio: false })
				.then((stream) => {
					videoRef.current.srcObject = stream;
					videoRef.current.play();
					setLoaded(true);
				});
		});
	}, []);

	useInterval(() => {
		if (classifier && start) {
			classifier.classify(videoRef.current, (error, results) => {
				if (error) {
					console.error(error);
					return;
				}
				setResult(results);
				// console.log(results)
			});
		}
	}, 500);

	const toggle = () => {
		setStart(!start);
		setResult([]);
	}

	// const startVideo = () => {
	// 	setStart(true);
	// 	navigator.getUserMedia(
	// 		{
	// 			video: true,
	// 		},
	// 		(stream) => {
	// 			let video = document.getElementsByClassName('app__videoFeed')[0];
	// 			if (video) {
	// 				video.srcObject = stream;
	// 			}
	// 		},
	// 		(err) => console.error(err)
	// 	);
	// };

	// const stopVideo = () => {
	// 	setStart(false);
	// 	let video = document.getElementsByClassName('app__videoFeed')[0];
	// 	video.srcObject.getTracks()[0].stop();
	// };

	return (
		<div className="app">
			<div className="upper">
				<div className="app__container">
					<div className="opening-page" style = {{display: !start ? 'block' : 'none'}}>
						<div className="opening-page__container">
							<h1 className="h1">FoodMood</h1>
							{/* <a className="btn" onClick={start}>Click here to learn more!</a> */}
						</div>
					</div>
					<div className = "video">
					<video
						ref={videoRef}
						style={{ transform: "scale(-1, 1)" }, {display: start ? 'block' : 'none'}}
						width="500"
						height="300"
						className="app__videoFeed"
					/>
					{result.length > 0 && (
						<div className="results">
							<List data={result} />
						</div>
					)}
					</div>
					{loaded && (
						<button className="button" onClick={() => toggle()}>
							{start ? "Go back" : "Capture food!"}
						</button>
					)}
					{result.length > 0 && (
						<div className="results">
							<Food data={result} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
