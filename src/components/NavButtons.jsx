export default function NavButtons({ wordData, position }) {
	const { wordsDataArray, currentWord, setCurrentWord } = wordData;
  
	const handleNext = () => {
	  const currentIndex = wordsDataArray.indexOf(currentWord);
	  const nextIndex = (currentIndex + 1) % wordsDataArray.length;
	  setCurrentWord(wordsDataArray[nextIndex]);
	};
  
	const handleBack = () => {
	  const currentIndex = wordsDataArray.indexOf(currentWord);
	  const prevIndex = (currentIndex - 1 + wordsDataArray.length) % wordsDataArray.length;
	  setCurrentWord(wordsDataArray[prevIndex]);
	};
  
	return (
	  <div className={`two-buttons-container ${position}`}>
		<button  onClick={handleBack}>Back</button>
		<button onClick={handleNext}>Next</button>
	  </div>
	);
  }
  