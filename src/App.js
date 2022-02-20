// import React, { useState} from 'react';
// import './App.css';

// function App() {
// 	const [playing, setPlaying] = useState(false);

// 	const HEIGHT = 500;
// 	const WIDTH = 500;

// 	const startVideo = () => {
// 		setPlaying(true);
// 		navigator.getUserMedia(
// 			{
// 				video: true,
// 			},
// 			(stream) => {
// 				let video = document.getElementsByClassName('app__videoFeed')[0];
// 				if (video) {
// 					video.srcObject = stream;
// 				}
// 			},
// 			(err) => console.error(err)
// 		);
// 	};

// 	const stopVideo = () => {
// 		setPlaying(false);
// 		let video = document.getElementsByClassName('app__videoFeed')[0];
// 		video.srcObject.getTracks()[0].stop();
// 	};

// 	return (
// 		<div className="app">
// 			<div className="opening-page" style = {{display: !playing ? 'block' : 'none'}}>
// 				<div className="opening-page__container">
// 					<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 bg-black">welkmcsoadmdkos</h1>
// 					<a className="btn" onClick= {startVideo}>Click here to learn more!</a>
// 				</div>
// 			</div>
// 			<div className="app__container" style = {{display: playing ? 'block' : 'none'}}>
// 				<video
// 					height={HEIGHT}
// 					width={WIDTH}
// 					muted
// 					autoPlay
// 					className="app__videoFeed"
// 				></video>
// 			</div>
// 			<div className="app__input" style = {{display: playing ? 'block' : 'none'}}>
// 				{playing ? (
// 					<button onClick={stopVideo}>Stop</button>
// 				) : (
// 					<button onClick={startVideo}>Start</button>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default App;
import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
// import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';

import Food from './Food';

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
					<div className="opening-page">
						<div className="opening-page__container">
							<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 bg-black">FoodMood</h1>
							{/* <a className="btn" onClick={start}>Click here to learn more!</a> */}
						</div>
					</div>
					<video
						ref={videoRef}
						style={{ transform: "scale(-1, 1)" }}
						width="500"
						height="500"
						className="app__videoFeed"
					/>
					{loaded && (
						<button className="app__input" onClick={() => toggle()}>
							{start ? "Pause Detection" : "Capture food!"}
						</button>
					)}
				</div>
			</div>
			{result.length > 0 && (
				<div className="results">
					<Food data={result} />
				</div>
			)}
		</div>
	);
}

export default App;