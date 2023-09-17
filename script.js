const openQuestionCategoryDialog = document.querySelector(
	'#question-category-button'
);
const questionCategoryDialog = document.querySelector(
	'#question-category-dialog'
);

const openQuestionDifficultyDialog = document.querySelector(
	'#question-difficulty-button'
);
const questionDifficultyDialog = document.querySelector(
	'#question-difficulty-dialog'
);

const cancelButton = document.querySelectorAll('.cancel-buttons');
const acceptButtonCategory = document.querySelector('#accept-category');
const acceptButtonDifficulty = document.querySelector('#accept-difficulty');
const dialogElement = document.querySelectorAll('dialog');

const numberOfQuestionsSlider = document.querySelector(
	'#number-of-questions-slider'
);
const numberOfQuestionsNumber = document.querySelector(
	'#number-of-questions-number'
);

const decrementButton10 = document.querySelector('#decrement-button-10');
const decrementButton1 = document.querySelector('#decrement-button-1');
const incrementButton10 = document.querySelector('#increment-button-10');
const incrementButton1 = document.querySelector('#increment-button-1');

const questionCategory = document.querySelectorAll('.question-category');
const questionDifficulty = document.querySelectorAll('.question-difficulty');
const questionCategoryAndDifficulty =
	document.querySelectorAll('.dialog-buttons');
const acceptButtons = document.querySelectorAll('.accept-buttons');

const counterText = document.querySelector('.counter');
const questionText = document.querySelector('#question');
const questionTitle = document.querySelector('#question-title');
const currentQuestionText = document.querySelector('#current-question');

const answerButtons = document.querySelectorAll('.buttons-answer');

const answerButtonOne = document.querySelector('#answer-1');
const answerButtonTwo = document.querySelector('#answer-2');
const answerButtonThree = document.querySelector('#answer-3');
const answerButtonFour = document.querySelector('#answer-4');

const startButton = document.querySelector('#start-button');
const menuContainer = document.querySelector('.quiz-menu-div-container');
const quizContainer = document.querySelector('.quiz-main-div-container');
const quizEnd = document.querySelector('.quiz-end-div-container');

const resultsText = document.querySelector('#result-correct-incorrect');
const resultsTime = document.querySelector('#result-time');
const playAgain = document.querySelector('#play-again');
const home = document.querySelector('#home');

const profileButton = document.querySelector('#profile-button');
const profileDialog = document.querySelector('#profile-dialog');
const saveProfile = document.querySelector('#save-profile-button');
const nickname = document.querySelector('#nickname');
const nicknameWarning = document.querySelector('#nickname-warning');
const createNewProfile = document.querySelector('#create-new-profile');
const editProfile = document.querySelector('#edit-profile');
const newProfileFields = document.querySelector('#new-profile-fields');
const existingProfiles = document.querySelector('#existing-profiles');
const deleteProfile = document.querySelector('#delete-profile');

const picture = document.querySelectorAll('.profile-picture');
const newProfilePictureFile = document.querySelector(
	'#new-profile-picture-file'
);
const leaderboardContainer = document.querySelector(
	'.quiz-leaderboard-container'
);

const leaderboardList = document.querySelector('#leaderboard-list');
const leaderboardSortValues = document.querySelector('#sort-values');
const leaderboardPercentageOfCorrectAnswers = document.querySelector(
	'.leaderboard-percentage-of-correct-answers'
);
const leaderboardNumberOfCorrectAnswers = document.querySelector(
	'.leaderboard-number-of-correct-answers'
);
const leaderboardAverageTimePerAnswer = document.querySelector(
	'.leaderboard-average-time-per-answer'
);
const leaderboardButton = document.querySelectorAll('.leaderboard-button');
const homeButton = document.querySelector('#home-button');
const profileLabel = document.querySelector('#profile-label');

const yesNoDialog = document.querySelector('#yes-no-dialog');
const deleteProfileYes = document.querySelector('#delete-profile-yes');
const deleteProfileNo = document.querySelector('#delete-profile-no');

const startButtonNormalMod = document.querySelector('#start-button-normal-mod');
const startButtonChallengerMod = document.querySelector(
	'#start-button-challenger-mod'
);
const exitToStart = document.querySelector('#exit-to-start');
const currentQuestionDifficulty = document.querySelector(
	'#current-question-difficulty'
);
const exitHowToPlay = document.querySelector('#exit-how-to-play');
const howToPlay = document.querySelector('#how-to-play');
const questionContainer = document.querySelector('.question-container');

const categoryArray = [];
const arrayOfQuestions = [];
const arrayOfAnswers = [];
let currentQuestionIndex = 0;
let numberOfCorrectAnswers = 0;
let numberOfWrongAnswers = 0;
let timeTakenToFinish = 0;
let intervalID = null;
let timeLimit = 10;
let leaderboardStorage = JSON.parse(localStorage.getItem('leaderboard')) || [
	{
		name: 'Guest',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 0,
		timeSpent: 0,
		numberOfAllCorrectAnswers: 0,
		percentageOfCorrectAnswers: null,
		averageTimePerAnswer: null,
	},
	{
		name: 'Lizzie Buck',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 50,
		timeSpent: 50,
		numberOfAllCorrectAnswers: 25,
		percentageOfCorrectAnswers: 50,
		averageTimePerAnswer: 1,
	},
	{
		name: 'Judson Rich',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 50,
		timeSpent: 150,
		numberOfAllCorrectAnswers: 32,
		percentageOfCorrectAnswers: 64,
		averageTimePerAnswer: 3,
	},
	{
		name: 'Marion Villegas',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 50,
		timeSpent: 200,
		numberOfAllCorrectAnswers: 15,
		percentageOfCorrectAnswers: 30,
		averageTimePerAnswer: 4,
	},
	{
		name: 'Emory Hurst',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 50,
		timeSpent: 110,
		numberOfAllCorrectAnswers: 44,
		percentageOfCorrectAnswers: 88,
		averageTimePerAnswer: 2.2,
	},
	{
		name: 'Zachery Kent',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 50,
		timeSpent: 400,
		numberOfAllCorrectAnswers: 10,
		percentageOfCorrectAnswers: 20,
		averageTimePerAnswer: 8,
	},
	{
		name: 'Tracie Obrien',
		userProfilePicture: 'pictures/default-profile-picture.png',
		numberOfAnswers: 50,
		timeSpent: 355,
		numberOfAllCorrectAnswers: 17,
		percentageOfCorrectAnswers: 34,
		averageTimePerAnswer: 7.1,
	},
];

let currentUserIndex = JSON.parse(localStorage.getItem('user-index')) || 0;
let localStorageForSettings = JSON.parse(localStorage.getItem('settings')) || [
	{
		user: 'Guest',
		userProfilePicture: 'pictures/default-profile-picture.png',
		userCategorySettings: [],
		userDifficultSettings: '',
		userNumberOfQuestions: 10,
	},
];

// localStorage.clear();

document.addEventListener('DOMContentLoaded', domLoaded);
function domLoaded() {
	menuContainer.style.display = 'grid';
	quizContainer.style.display = 'none';
	quizEnd.style.display = 'none';
	leaderboardContainer.style.display = 'none';

	nicknameWarning.innerText = '';
	if (
		JSON.parse(localStorage.getItem('settings')) === null ||
		JSON.parse(localStorage.getItem('user-index')) === null
	) {
		localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
		localStorage.setItem('user-index', JSON.stringify(currentUserIndex));

		console.log('settings ', JSON.parse(localStorage.getItem('settings')));
		console.log('index ', JSON.parse(localStorage.getItem('user-index')));
	}
	picture.forEach((element) => {
		element.src = localStorageForSettings[currentUserIndex].userProfilePicture;
	});
	createLeaderboard();
	addOptions();
	highlightButtons(
		localStorageForSettings[currentUserIndex].userCategorySettings
	);
	highlightButtons(
		localStorageForSettings[currentUserIndex].userDifficultSettings
	);
	numberOfQuestionsNumber.value = numberOfQuestionsSlider.value =
		localStorageForSettings[currentUserIndex].userNumberOfQuestions;
	profileLabel.innerText = localStorageForSettings[currentUserIndex].user;
	if (localStorageForSettings[currentUserIndex].userNumberOfQuestions === '0') {
		startButton.classList.add('disabled');
		startButtonNormalMod.classList.add('disabled');
		startButtonChallengerMod.classList.add('disabled');
	} else {
		startButton.classList.remove('disabled');
		startButtonNormalMod.classList.remove('disabled');
		startButtonChallengerMod.classList.add('disabled');
	}
}

document.querySelector('#how-to-play').addEventListener('mousedown', () => {
	if (window.matchMedia('(hover: none)').matches) {
		Array.from(document.querySelector('#how-to-play-container').children).forEach(
			(element) => {
				element.classList.add('mobile-how-to-play');
			}
		);
		document.querySelector('#how-to-play-container').style.display = 'grid';
	} else {
		Array.from(document.querySelector('#how-to-play-container').children).forEach(
			(element) => {
				element.classList.remove('mobile-how-to-play');
			}
		);
		document.querySelector('#how-to-play-container').classList.remove('no-hover');
	}
});
exitHowToPlay.addEventListener('click', () => {
	if (window.matchMedia('(hover: none)').matches) {
		document.querySelector('#how-to-play-container').style.display = 'none';
	} else {
		document.querySelector('#how-to-play-container').classList.add('no-hover');
	}
});

exitToStart.addEventListener('click', () => {
	highlightAndDisableAnswers();
	counterText.classList.remove('counter-tic-slow');
	counterText.classList.remove('counter-tic-fast');
	setTimeout(() => {
		quizContainer.classList.add('div-flip');
		quizContainer.classList.add('disabled');
		Array.from(quizContainer.children).forEach((element) => {
			element.classList.remove('every-element-opacity-0-1');
			element.classList.remove('every-element-opacity-1-0');
		});
		counterText.classList.remove('opacity-1');

		setTimeout(() => {
			quizContainer.classList.remove('div-flip');
			menuContainer.classList.remove('disabled');
			quizContainer.classList.remove('disabled');

			menuContainer.style.display = 'grid';
			quizContainer.style.display = 'none';
			quizEnd.style.display = 'none';
			leaderboardContainer.style.display = 'none';
		}, 1000);
	}, 1000);
});

deleteProfileYes.addEventListener('click', () => {
	saveCurrentChanges();
	openProfile();
	yesNoDialog.close();
});
deleteProfileNo.addEventListener('click', () => {
	cancelCurrentChanges();
	openProfile();
	yesNoDialog.close();
});

document
	.querySelector('#leaderboard-button-menu')
	.addEventListener('mouseover', () => {
		howToPlay.style.transition = '100ms ease-in-out';
		howToPlay.style.opacity = '0';
	});
document
	.querySelector('#leaderboard-button-menu')
	.addEventListener('mouseout', () => {
		howToPlay.style.transition = '';
		howToPlay.style.opacity = '';
	});

leaderboardButton.forEach((element) => {
	element.addEventListener('click', () => {
		Array.from(quizEnd.children).forEach((element) => {
			element.classList.add('every-element-opacity-1-0');
		});
		Array.from(menuContainer.children).forEach((element) => {
			if (
				element.id === 'how-to-play' ||
				element.id === 'leaderboard-button-menu'
			) {
				element.style.display = 'none';
			} else element.classList.add('every-element-opacity-1-0');
		});
		Array.from(leaderboardContainer.children).forEach((element) => {
			element.classList.remove('every-element-opacity-0-1');
		});

		setTimeout(() => {
			leaderboardContainer.classList.add('div-flip');
			quizEnd.classList.add('div-flip');

			createLeaderboard();
			menuContainer.style.display = 'none';
			quizContainer.style.display = 'none';
			quizEnd.style.display = 'none';

			leaderboardContainer.style.display = 'grid';
			nicknameWarning.innerText = '';

			setTimeout(() => {
				Array.from(leaderboardContainer.children).forEach((element) => {
					element.classList.add('every-element-opacity-0-1');
				});
				Array.from(quizEnd.children).forEach((element) => {
					element.classList.remove('every-element-opacity-1-0');
				});
				Array.from(menuContainer.children).forEach((element) => {
					if (
						element.id === 'how-to-play' ||
						element.id === 'leaderboard-button-menu'
					) {
						element.style.display = 'initial';
					} else element.classList.remove('every-element-opacity-1-0');
				});
				quizEnd.classList.remove('div-flip');
				leaderboardContainer.classList.remove('div-flip');
			}, 500);
		}, 500);
	});
});

homeButton.addEventListener('click', goHome);
function goHome() {
	Array.from(quizEnd.children).forEach((element) => {
		element.classList.add('every-element-opacity-1-0');
	});
	Array.from(leaderboardContainer.children).forEach((element) => {
		element.classList.remove('every-element-opacity-0-1');
		element.classList.add('every-element-opacity-1-0');
	});
	setTimeout(() => {
		quizEnd.classList.add('div-flip');
		leaderboardContainer.classList.add('div-flip');
		setTimeout(() => {
			menuContainer.style.display = 'grid';
			quizContainer.style.display = 'none';
			quizEnd.style.display = 'none';
			leaderboardContainer.style.display = 'none';
			nicknameWarning.innerText = '';
			menuContainer.classList.remove('disabled');
			Array.from(quizEnd.children).forEach((element) => {
				element.classList.remove('every-element-opacity-1-0');
			});
			Array.from(leaderboardContainer.children).forEach((element) => {
				element.classList.remove('every-element-opacity-1-0');
			});
			quizEnd.classList.remove('div-flip');
			leaderboardContainer.classList.remove('div-flip');
		}, 500);
	}, 500);
}

function previewFile(fileInput) {
	const file = fileInput.files[0];
	const reader = new FileReader();

	reader.addEventListener(
		'load',
		function () {
			setBackground(reader.result);
		},
		false
	);

	if (file) {
		reader.readAsDataURL(file);
	}
}

function setBackground(imageURL) {
	localStorageForSettings[currentUserIndex].userProfilePicture = imageURL;
	picture.forEach((element) => {
		element.src = imageURL;
	});
}

existingProfiles.addEventListener('change', () => {
	if (existingProfiles.value !== '0') {
		deleteProfile.style.display = 'initial';
		editProfile.style.display = 'initial';
	} else {
		deleteProfile.style.display = 'none';
		editProfile.style.display = 'none';
	}
	existingProfiles.blur();
});

function addOptions() {
	let optionIndex = 0;

	const firstChild = existingProfiles.options[0];
	while (firstChild.nextElementSibling !== null) {
		existingProfiles.removeChild(firstChild.nextElementSibling);
	}
	localStorageForSettings.forEach((element) => {
		if (optionIndex !== 0) {
			const newOption = document.createElement('option');
			newOption.value = optionIndex;
			newOption.textContent = element.user;
			existingProfiles.appendChild(newOption);
		}
		optionIndex++;
	});
}

deleteProfile.addEventListener('click', () => {
	localStorageForSettings.splice(existingProfiles.value, 1);
	deleteProfile.style.display = 'none';
	editProfile.style.display = 'none';
	addOptions();
	currentUserIndex = 0;
	existingProfiles.selectedIndex = currentUserIndex;
	console.log(localStorageForSettings);
	yesNoDialog.showModal();
});

// localStorage.clear();

editProfile.addEventListener('click', () => {
	if (newProfileFields.style.display === 'grid') {
		//button Change
		if (
			localStorageForSettings.some(
				(element) => element.user === nickname.value.trim()
			) &&
			localStorageForSettings[currentUserIndex].user !== nickname.value.trim()
		) {
			nicknameWarning.innerText = 'Nickname already exist!';
		} else {
			editProfile.innerText = 'Edit Profile';
			newProfileFields.style.display = 'none';
			nicknameWarning.innerText = '';

			localStorage.setItem('user-index', JSON.stringify(currentUserIndex));

			localStorageForSettings[currentUserIndex].user =
				nickname.value === ''
					? localStorageForSettings[currentUserIndex].user
					: nickname.value;
			numberOfQuestionsNumber.value = numberOfQuestionsSlider.value =
				localStorageForSettings[currentUserIndex].userNumberOfQuestions;

			leaderboardStorage.find(
				(element) => element.name === nickname.placeholder
			).userProfilePicture =
				localStorageForSettings[currentUserIndex].userProfilePicture;
			leaderboardStorage.find(
				(element) => element.name === nickname.placeholder
			).name = localStorageForSettings[currentUserIndex].user;

			console.info('after settings: ', localStorageForSettings);
			console.info('after leaderboard: ', leaderboardStorage);

			localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
			localStorage.setItem('leaderboard', JSON.stringify(leaderboardStorage));
			document.querySelector('.select').classList.remove('disabled');
			nickname.value = '';
			profileLabel.innerText = localStorageForSettings[currentUserIndex].user;
			profileDialog.close();
		}
	} else {
		//button Edit  Profile

		console.info('before settings: ', localStorageForSettings);
		console.info('before leaderboard: ', leaderboardStorage);
		deleteProfile.style.display = 'none';
		document.querySelector('.select').classList.add('disabled');
		currentUserIndex = existingProfiles.selectedIndex;
		nickname.placeholder = localStorageForSettings[currentUserIndex].user;
		addOptions();
		existingProfiles.selectedIndex = currentUserIndex;
		editProfile.innerText = 'Edit';
		newProfileFields.style.display = 'grid';
	}
});

createNewProfile.addEventListener('click', () => {
	if (newProfileFields.style.display === 'grid') {
		//button Create
		if (
			localStorageForSettings.some(
				(element) => element.user === nickname.value.trim()
			) &&
			localStorageForSettings[currentUserIndex].user !== nickname.value.trim()
		) {
			nicknameWarning.innerText = 'Nickname already exist!';
		} else {
			createNewProfile.innerText = 'Create Profile';
			newProfileFields.style.display = 'none';
			nicknameWarning.innerText = '';

			localStorage.setItem('user-index', JSON.stringify(currentUserIndex));

			localStorageForSettings[currentUserIndex].user =
				nickname.value === ''
					? localStorageForSettings[currentUserIndex].user
					: nickname.value;
			numberOfQuestionsNumber.value = numberOfQuestionsSlider.value =
				localStorageForSettings[currentUserIndex].userNumberOfQuestions;

			leaderboardStorage.push({
				name: localStorageForSettings[currentUserIndex].user,
				userProfilePicture:
					localStorageForSettings[currentUserIndex].userProfilePicture,
				numberOfAnswers: 0,
				timeSpent: 0,
				numberOfAllCorrectAnswers: 0,
				percentageOfCorrectAnswers: null,
				averageTimePerAnswer: null,
			});

			localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
			localStorage.setItem('leaderboard', JSON.stringify(leaderboardStorage));
			document.querySelector('.select').classList.remove('disabled');
			nickname.value = '';
			profileLabel.innerText = localStorageForSettings[currentUserIndex].user;
			profileDialog.close();
		}
	} else {
		//button Create Profile
		localStorageForSettings.push({
			user: 'New Player' + Math.floor(Math.random() * 1000 + 1000),
			userProfilePicture: 'pictures/default-profile-picture.png',
			userCategorySettings: [],
			userDifficultSettings: '',
			userNumberOfQuestions: 10,
		});
		console.log(localStorageForSettings);
		addOptions();
		deleteProfile.style.display = 'none';
		editProfile.style.display = 'none';
		document.querySelector('.select').classList.add('disabled');
		currentUserIndex = localStorageForSettings.length - 1;
		nickname.placeholder = localStorageForSettings[currentUserIndex].user;
		existingProfiles.selectedIndex = currentUserIndex;
		createNewProfile.innerText = 'Create';
		newProfileFields.style.display = 'grid';
	}
});

profileButton.addEventListener('click', openProfile);

function openProfile() {
	if (currentUserIndex !== 0) {
		deleteProfile.style.display = 'initial';
		editProfile.style.display = 'initial';
	} else {
		deleteProfile.style.display = 'none';
		editProfile.style.display = 'none';
	}

	console.log(localStorageForSettings[currentUserIndex]);
	addOptions();
	existingProfiles.selectedIndex = currentUserIndex;
	profileDialog.showModal();
}

saveProfile.addEventListener('click', () => {
	if (newProfileFields.style.display === 'grid') {
		if (
			localStorageForSettings.some(
				(element) => element.user === nickname.value.trim()
			) &&
			localStorageForSettings[currentUserIndex].user !== nickname.value.trim()
		) {
			nicknameWarning.innerText = 'Nickname already exist!';
		} else {
			cancelCurrentChanges();
		}
	} else {
		saveCurrentChanges();
	}
});

function saveCurrentChanges() {
	nicknameWarning.innerText = '';
	localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
	currentUserIndex = existingProfiles.selectedIndex;
	numberOfQuestionsNumber.value = numberOfQuestionsSlider.value =
		localStorageForSettings[currentUserIndex].userNumberOfQuestions;
	picture.forEach((element) => {
		element.src = localStorageForSettings[currentUserIndex].userProfilePicture;
	});
	localStorage.setItem('user-index', JSON.stringify(currentUserIndex));
	createNewProfile.innerText = 'Create Profile';
	newProfileFields.style.display = 'none';
	document.querySelector('.select').classList.remove('disabled');
	highlightButtons(
		localStorageForSettings[currentUserIndex].userCategorySettings
	);
	highlightButtons(
		localStorageForSettings[currentUserIndex].userDifficultSettings
	);
	nickname.value = '';
	profileLabel.innerText = localStorageForSettings[currentUserIndex].user;

	profileDialog.close();
}

nickname.addEventListener('keydown', (event) => {
	if (
		localStorageForSettings.some(
			(element) => element.user === nickname.value.trim()
		) &&
		localStorageForSettings[currentUserIndex].user !== nickname.value.trim()
	) {
		nicknameWarning.innerText = 'Nickname already exist!';
	} else {
		if (event.key === 'Enter') {
			localStorageForSettings[currentUserIndex].user = nickname.value;
			nickname.blur();
		}
	}
});

home.addEventListener('click', goHome);

playAgain.addEventListener('click', () => {
	play();
});

const span = startButton.querySelector('span');
startButton.addEventListener('click', () => {
	span.classList.add('start-button-opacity');
	startButton.classList.add('width-animation-100-0');

	startButton.classList.add('disabled');
	startButtonNormalMod.classList.add('disabled');
	startButtonChallengerMod.classList.add('disabled');

	startButton.addEventListener(
		'animationend',
		() => {
			console.log('animated for 1. time');

			startButton.classList.add('width-animation-0-5em5');
			startButton.classList.remove('width-animation-100-0');

			startButton.addEventListener(
				'animationend',
				() => {
					startButton.style.display = 'none';
					console.log('animated for 2. time');

					startButtonNormalMod.classList.add('start-button-to-the-left');
					startButtonChallengerMod.classList.add('start-button-to-the-right');

					startButtonNormalMod
						.querySelector('span')
						.classList.add('start-button-mod-text-animation');
					startButtonChallengerMod
						.querySelector('span')
						.classList.add('start-button-mod-text-animation');
					startButtonNormalMod.style.display = 'initial';
					startButtonChallengerMod.style.display = 'initial';

					span.classList.remove('start-button-opacity');
					startButton.classList.remove('width-animation-0-5em5');
				},
				{ once: true }
			);
		},
		{ once: true }
	);
});

startButtonNormalMod.addEventListener('click', () => {
	timeLimit = 10;
	startButtonNormalMod.classList.add('disabled');
	startButtonChallengerMod.classList.add('disabled');
	menuContainer.classList.add('disabled');

	play();
});
startButtonChallengerMod.addEventListener('click', () => {
	timeLimit = 5;
	startButtonNormalMod.classList.add('disabled');
	startButtonChallengerMod.classList.add('disabled');
	menuContainer.classList.add('disabled');

	play();
});
startButtonNormalMod.addEventListener('animationend', () => {
	if (startButtonNormalMod.classList.contains('left-button-radius-animation')) {
		startButtonNormalMod.classList.remove('start-button-to-the-left');
		startButtonNormalMod.classList.remove('left-button-radius-animation');
	}
	if (
		startButton.style.display === 'none' &&
		startButtonNormalMod.classList.contains('disabled')
	) {
		startButtonNormalMod.classList.add('left-button-radius-animation');
		startButtonNormalMod.classList.remove('disabled');
	}
});

startButtonChallengerMod.addEventListener('animationend', () => {
	if (
		startButtonChallengerMod.classList.contains('right-button-radius-animation')
	) {
		startButtonChallengerMod.classList.remove('start-button-to-the-right');
		startButtonChallengerMod.classList.remove('right-button-radius-animation');
	}
	if (
		startButton.style.display === 'none' &&
		startButtonChallengerMod.classList.contains('disabled')
	) {
		console.log(`classes ${startButtonChallengerMod.classList}`);
		startButtonChallengerMod.classList.add('right-button-radius-animation');
		startButtonChallengerMod.classList.remove('disabled');
	}
});

answerButtonOne.addEventListener('click', () => {
	buttonHandler(answerButtonOne);
});
answerButtonTwo.addEventListener('click', () => {
	buttonHandler(answerButtonTwo);
});
answerButtonThree.addEventListener('click', () => {
	buttonHandler(answerButtonThree);
});
answerButtonFour.addEventListener('click', () => {
	buttonHandler(answerButtonFour);
});

function buttonHandler(button) {
	button.innerText === arrayOfQuestions[currentQuestionIndex].correctAnswer
		? numberOfCorrectAnswers++
		: numberOfWrongAnswers++;
	console.log('correct answers ', numberOfCorrectAnswers);
	console.log('wrong answers ', numberOfWrongAnswers);

	highlightAndDisableAnswers();
	endOfTheRound();
}

openQuestionCategoryDialog.addEventListener('click', () => {
	questionCategoryDialog.showModal();
});

openQuestionDifficultyDialog.addEventListener('click', () => {
	questionDifficultyDialog.showModal();
});

cancelButton.forEach((element) => {
	element.addEventListener('click', cancelCurrentChanges);
});

function cancelCurrentChanges() {
	questionCategoryAndDifficulty.forEach((element) => {
		element.classList.remove('highlight');
	});

	nicknameWarning.innerText = '';
	nickname.value = '';
	localStorageForSettings = JSON.parse(localStorage.getItem('settings'));
	currentUserIndex = JSON.parse(localStorage.getItem('user-index'));
	document.querySelector('.select').classList.remove('disabled');
	newProfileFields.style.display = 'none';
	editProfile.innerText = 'Edit Profile';
	createNewProfile.innerText = 'Create Profile';
	highlightButtons(
		localStorageForSettings[currentUserIndex].userCategorySettings
	);
	highlightButtons(
		localStorageForSettings[currentUserIndex].userDifficultSettings
	);
	dialogElement.forEach((el) => {
		el.close();
	});
}

acceptButtonCategory.addEventListener('click', () => {
	const categoryArray = [];
	questionCategory.forEach((element) => {
		if (element.classList.contains('highlight')) {
			categoryArray.push(element.innerText);
		}
	});
	console.log('category ', categoryArray);
	localStorageForSettings[currentUserIndex].userCategorySettings = categoryArray;
	localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
	console.log(localStorageForSettings[currentUserIndex]);
	questionCategoryDialog.close();
});
acceptButtonDifficulty.addEventListener('click', () => {
	let difficulty = '';
	questionDifficulty.forEach((element) => {
		if (element.classList.contains('highlight')) {
			difficulty = element.innerText;
		}
	});
	console.log('category ', difficulty);
	localStorageForSettings[currentUserIndex].userDifficultSettings = difficulty;
	localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
	console.log(localStorageForSettings[currentUserIndex]);
	questionDifficultyDialog.close();
});

questionCategory.forEach((element) => {
	element.addEventListener('click', () => {
		element.classList.toggle('highlight');
	});
});

questionDifficulty.forEach((element) => {
	element.addEventListener('click', () => {
		const hasHighlightClass = element.classList.contains('highlight');
		questionDifficulty.forEach((el) => {
			el.classList.remove('highlight');
		});
		if (!hasHighlightClass) {
			element.classList.add('highlight');
		}
	});
});

function highlightButtons(highlightedElements) {
	questionCategoryAndDifficulty.forEach((questionElements) => {
		if (Array.isArray(highlightedElements)) {
			highlightedElements.forEach((element) => {
				if (element === questionElements.innerText.trim()) {
					questionElements.classList.add('highlight');
				}
			});
		} else {
			if (highlightedElements === questionElements.innerText.trim()) {
				questionElements.classList.add('highlight');
			}
		}
	});
}

function setNumberValueForNumberInput() {
	localStorageForSettings[currentUserIndex].userNumberOfQuestions =
		numberOfQuestionsNumber.value = numberOfQuestionsSlider.value;
	localStorage.setItem('settings', JSON.stringify(localStorageForSettings));
	if (localStorageForSettings[currentUserIndex].userNumberOfQuestions === '0') {
		startButton.classList.add('disabled');
		startButtonNormalMod.classList.add('disabled');
		startButtonChallengerMod.classList.add('disabled');
	} else {
		startButton.classList.remove('disabled');
		startButtonNormalMod.classList.remove('disabled');
		startButtonChallengerMod.classList.remove('disabled');
	}
}
numberOfQuestionsSlider.addEventListener('input', () => {
	setNumberValueForNumberInput();
});
numberOfQuestionsNumber.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		numberOfQuestionsSlider.value = Number.isNaN(
			Number(numberOfQuestionsNumber.value)
		)
			? 0
			: numberOfQuestionsNumber.value > 50
			? 50
			: numberOfQuestionsNumber.value < 0
			? 0
			: numberOfQuestionsNumber.value;
		numberOfQuestionsNumber.blur();
		setNumberValueForNumberInput();
	}
});
numberOfQuestionsNumber.addEventListener('blur', (event) => {
	numberOfQuestionsSlider.value = Number.isNaN(
		Number(numberOfQuestionsNumber.value)
	)
		? 0
		: numberOfQuestionsNumber.value > 50
		? 50
		: numberOfQuestionsNumber.value < 0
		? 0
		: numberOfQuestionsNumber.value;
	setNumberValueForNumberInput();
});

decrementButton10.addEventListener('click', () => {
	numberOfQuestionsSlider.value =
		numberOfQuestionsSlider.value < 10 ? 0 : numberOfQuestionsNumber.value - 10;
	setNumberValueForNumberInput();
});
decrementButton1.addEventListener('click', () => {
	numberOfQuestionsSlider.value =
		numberOfQuestionsSlider.value < 1 ? 0 : numberOfQuestionsNumber.value - 1;
	setNumberValueForNumberInput();
});
incrementButton10.addEventListener('click', () => {
	numberOfQuestionsSlider.value =
		numberOfQuestionsSlider.value > 50
			? 50
			: Number(numberOfQuestionsNumber.value) + 10;
	setNumberValueForNumberInput();
});
incrementButton1.addEventListener('click', () => {
	numberOfQuestionsSlider.value =
		numberOfQuestionsSlider.value > 50
			? 50
			: Number(numberOfQuestionsNumber.value) + 1;
	setNumberValueForNumberInput();
});

function reduceCategory() {
	return [...localStorageForSettings[currentUserIndex].userCategorySettings]
		.reduce((accumulate, current) => {
			accumulate.push(current.toLowerCase().split(' ').join('_'));
			return accumulate;
		}, [])
		.join(',');
}

function fetchAPILink(numberOfQuestions) {
	return localStorageForSettings[currentUserIndex].userCategorySettings
		.length === 0 &&
		localStorageForSettings[currentUserIndex].userDifficultSettings.length === 0
		? `https://the-trivia-api.com/api/questions?limit=${numberOfQuestions}`
		: localStorageForSettings[currentUserIndex].userCategorySettings.length !==
				0 &&
		  localStorageForSettings[currentUserIndex].userDifficultSettings.length === 0
		? `https://the-trivia-api.com/api/questions?categories=${reduceCategory()}&limit=${numberOfQuestions}`
		: localStorageForSettings[currentUserIndex].userCategorySettings.length ===
				0 &&
		  localStorageForSettings[currentUserIndex].userDifficultSettings.length !== 0
		? `https://the-trivia-api.com/api/questions?limit=${numberOfQuestions}&difficulty=${localStorageForSettings[
				currentUserIndex
		  ].userDifficultSettings.toLowerCase()}`
		: `https://the-trivia-api.com/api/questions?categories=${reduceCategory()}&limit=${numberOfQuestions}&difficulty=${localStorageForSettings[
				currentUserIndex
		  ].userDifficultSettings.toLowerCase()}`;
}

async function fetchNewAnswers() {
	try {
		const responseOne = await fetch(
			fetchAPILink(localStorageForSettings[currentUserIndex].userNumberOfQuestions)
		);
		const dataOne = await responseOne.json();

		const responseTwo = await fetch(fetchAPILink(10));
		const dataTwo = await responseTwo.json();

		[...dataOne, ...dataTwo].forEach((element) => {
			let charMaxCountExceeded =
				element.question.length > 185 ||
				[element.correctAnswer, ...element.incorrectAnswers].some(
					(charCount) => charCount.length > 75
				);

			if (
				!charMaxCountExceeded &&
				arrayOfQuestions.length <
					localStorageForSettings[currentUserIndex].userNumberOfQuestions
			) {
				arrayOfQuestions.push({
					category: element.category,
					difficulty: element.difficulty,
					question: element.question,
					correctAnswer: element.correctAnswer,
					incorrectAnswers: element.incorrectAnswers,
					allAnswers: [element.correctAnswer, ...element.incorrectAnswers],
				});
			}
		});

		console.log(arrayOfQuestions);

		arrayOfQuestions.forEach((element) => {
			arrayOfAnswers.push(generateRandomAnswerArray(element.allAnswers));
		});
	} catch (error) {
		console.log(error);
	}
}

function generateRandomAnswerArray(array) {
	const arrayOfRandomAnswers = [];
	const arrayOfInitialAnswers = [...array];

	for (let i = 0; i < 4; i++) {
		let randomIndex = Math.floor(Math.random() * arrayOfInitialAnswers.length);
		arrayOfRandomAnswers.push(arrayOfInitialAnswers[randomIndex]);
		arrayOfInitialAnswers.splice(randomIndex, 1);
	}

	return arrayOfRandomAnswers;
}

function play() {
	if (localStorageForSettings[currentUserIndex].userNumberOfQuestions === '0')
		return;
	currentQuestionIndex = 0;
	numberOfCorrectAnswers = 0;
	numberOfWrongAnswers = 0;
	timeTakenToFinish = 0;
	arrayOfQuestions.splice(0);
	arrayOfAnswers.splice(0);
	fetchNewAnswers();
	counterText.innerText = timeLimit;
	console.log(Array.from(menuContainer.children));
	Array.from(menuContainer.children).forEach((element) => {
		element.classList.add('every-element-opacity-1-0');
	});
	Array.from(quizEnd.children).forEach((element) => {
		element.classList.add('every-element-opacity-1-0');
	});
	setTimeout(() => {
		menuContainer.style.display = 'none';
		quizContainer.style.display = 'grid';
		quizEnd.style.display = 'none';

		startButton.classList.remove('disabled');
		startButtonNormalMod.classList.remove('disabled');
		startButtonChallengerMod.classList.remove('disabled');
		nextQuestion();
		intervalCounter();
		Array.from(menuContainer.children).forEach((element) => {
			element.classList.remove('every-element-opacity-1-0');
		});
		Array.from(quizEnd.children).forEach((element) => {
			element.classList.remove('every-element-opacity-1-0');
		});
		console.log(localStorageForSettings[currentUserIndex].userNumberOfQuestions);
	}, 1000);
}

function intervalCounter() {
	quizContainer.classList.add('div-flip');
	quizContainer.classList.add('disabled');
	exitToStart.style.pointerEvents = 'none';

	Array.from(quizContainer.children).forEach((element) => {
		element.classList.remove('every-element-opacity-0-1');
		element.classList.remove('every-element-opacity-1-0');

		setTimeout(() => {
			quizContainer.classList.remove('div-flip');
			element.classList.add('every-element-opacity-0-1');
			counterText.classList.remove('every-element-opacity-0-1');
		}, 500);
	});

	let counter = timeLimit;
	setTimeout(() => {
		quizContainer.classList.remove('disabled');
		counterText.classList.add('opacity-1');
		intervalID = setInterval(() => {
			exitToStart.style.pointerEvents = 'auto';

			if (counter === 10) {
				counterText.classList.add('counter-tic-slow');
			} else if (counter === 5) {
				counterText.classList.remove('counter-tic-slow');
				counterText.classList.add('counter-tic-fast');
			}

			counterText.innerText = counter;
			counterText.style.display = 'none';
			counterText.style.display = 'flex';

			timeTakenToFinish++;
			console.log('counter ', counter);

			if (counter <= 0) {
				highlightAndDisableAnswers();
				timeTakenToFinish--;
				numberOfWrongAnswers++;
				console.log('end');
				counterText.classList.remove('counter-tic-slow');
				counterText.classList.remove('counter-tic-fast');
				endOfTheRound();
				clearInterval(intervalID);
			}
			counter--;
		}, 1000);
	}, 1000);
}

function endOfTheRound() {
	counterText.classList.remove('counter-tic-slow');
	counterText.classList.remove('counter-tic-fast');
	exitToStart.style.pointerEvents = 'none';
	setTimeout(() => {
		currentQuestionIndex++;
		setTimeout(() => {
			Array.from(quizContainer.children).forEach((element) => {
				element.classList.add('every-element-opacity-1-0');
				element.classList.remove('every-element-opacity-0-1');
				counterText.classList.remove('opacity-1');
			});
		}, 500);

		if (
			currentQuestionIndex <
			localStorageForSettings[currentUserIndex].userNumberOfQuestions
		) {
			setTimeout(() => {
				intervalCounter();
				counterText.innerText = timeLimit;
				nextQuestion();
			}, 1000);
		} else {
			setTimeout(() => {
				quizContainer.classList.add('div-flip');

				setTimeout(() => {
					resultsText.innerText =
						numberOfCorrectAnswers +
						' / ' +
						localStorageForSettings[currentUserIndex].userNumberOfQuestions;
					resultsTime.innerText = timeTakenToFinish + 's';
					quizContainer.style.display = 'none';
					quizEnd.style.display = 'grid';
					leaderboardStorage.forEach((element) => {
						if (element.name === localStorageForSettings[currentUserIndex].user) {
							element.numberOfAnswers += currentQuestionIndex;
							element.numberOfAllCorrectAnswers += numberOfCorrectAnswers;
							element.timeSpent += timeTakenToFinish;

							console.log('number of answers: ', element.numberOfAnswers);
							console.log(
								'number of correct answers: ',
								element.numberOfAllCorrectAnswers
							);

							element.percentageOfCorrectAnswers =
								Math.round(
									(element.numberOfAllCorrectAnswers / element.numberOfAnswers) *
										100 *
										100
								) / 100;

							console.log(
								'percentage of correct answers: ',
								element.percentageOfCorrectAnswers
							);

							element.averageTimePerAnswer =
								Math.round((element.timeSpent / element.numberOfAnswers) * 100) / 100;

							console.log('time: ', element.timeSpent);
							console.log('average time per answer: ', element.averageTimePerAnswer);
						}
					});
					localStorage.setItem('leaderboard', JSON.stringify(leaderboardStorage));
					Array.from(quizContainer.children).forEach((element) => {
						element.classList.remove('every-element-opacity-1-0');
						element.classList.remove('every-element-opacity-0-1');
					});
					quizContainer.classList.remove('div-flip');
				}, 500);
			}, 1000);
		}
		console.log('----------\n\n');
	}, 1000);
}

function nextQuestion() {
	console.log('number of questions ', currentQuestionIndex);
	answerButtons.forEach((element, index) => {
		console.log('arrayOfAnswers ', arrayOfAnswers[currentQuestionIndex][index]);
		element.innerText = arrayOfAnswers[currentQuestionIndex][index];
	});
	if (arrayOfQuestions[currentQuestionIndex].difficulty === 'easy') {
		questionContainer.style.background = 'rgb(60,208,112)';
		questionContainer.style.background =
			'radial-gradient(circle, rgba(60,208,112,1) 50%, rgba(196,197,170,1) 100%)';
	} else if (arrayOfQuestions[currentQuestionIndex].difficulty === 'medium') {
		questionContainer.style.background = 'rgb(230,168,60)';
		questionContainer.style.background =
			'radial-gradient(circle, rgba(230,168,60,1) 25%, rgba(196,197,170,1) 100%)';
	} else {
		questionContainer.style.background = 'rgb(208,60,60)';
		questionContainer.style.background =
			'radial-gradient(circle, rgba(208,60,60,1) 50%, rgba(196,197,170,1) 100%)';
	}
	questionText.innerText = arrayOfQuestions[currentQuestionIndex].question;
	questionTitle.innerText = arrayOfQuestions[currentQuestionIndex].category;
	currentQuestionDifficulty.innerText =
		arrayOfQuestions[currentQuestionIndex].difficulty.charAt(0).toUpperCase() +
		arrayOfQuestions[currentQuestionIndex].difficulty.slice(1);
	currentQuestionText.innerText = `${currentQuestionIndex + 1}/${
		localStorageForSettings[currentUserIndex].userNumberOfQuestions
	}`;
}

function highlightAndDisableAnswers() {
	answerButtons.forEach((element) => {
		element.innerText == arrayOfQuestions[currentQuestionIndex].correctAnswer
			? handleAnswer(element, 'correct-answer')
			: handleAnswer(element, 'wrong-answer');
		element.classList.add('disabled');
		clearInterval(intervalID);
	});
}

function handleAnswer(element, className) {
	element.classList.add(className);
	setTimeout(function () {
		element.classList.remove('disabled');
		element.classList.remove(className);
	}, 2000);
}

function addLeaderboardRow(user, sortValue) {
	const leaderboardRow = document.createElement('div');
	leaderboardRow.setAttribute('class', 'leaderboard-row');

	if (user.name === localStorageForSettings[currentUserIndex].user) {
		leaderboardRow.setAttribute('id', 'leaderboard-user-highlight');
	}

	const leaderboardPosition = document.createElement('div');
	leaderboardPosition.setAttribute('class', 'leaderboard-position');
	leaderboardPosition.innerText = user.index;
	leaderboardRow.appendChild(leaderboardPosition);

	const leaderboardNickname = document.createElement('div');
	leaderboardNickname.setAttribute('class', 'leaderboard-nickname');

	const nicknameImgContainer = document.createElement('div');
	nicknameImgContainer.setAttribute('class', 'nickname-img-container');

	const nicknameImg = document.createElement('img');
	nicknameImg.setAttribute('class', 'nickname-img');
	nicknameImg.setAttribute('src', user.userProfilePicture);
	nicknameImg.setAttribute('alt', 'Profile picture');

	nicknameImgContainer.appendChild(nicknameImg);

	const nicknameUser = document.createElement('div');
	nicknameUser.setAttribute('class', 'nickname-user');
	nicknameUser.innerText = user.name;

	leaderboardNickname.appendChild(nicknameImgContainer);
	leaderboardNickname.appendChild(nicknameUser);
	leaderboardRow.appendChild(leaderboardNickname);

	if (sortValue === '0') {
		const leaderboardPercentageOfCorrectAnswers = document.createElement('div');
		leaderboardPercentageOfCorrectAnswers.setAttribute(
			'class',
			'leaderboard-percentage-of-correct-answers'
		);
		leaderboardPercentageOfCorrectAnswers.innerText =
			user.percentageOfCorrectAnswers;
		leaderboardRow.appendChild(leaderboardPercentageOfCorrectAnswers);
	} else if (sortValue === '1') {
		const leaderboardNumberOfCorrectAnswers = document.createElement('div');
		leaderboardNumberOfCorrectAnswers.setAttribute(
			'class',
			'leaderboard-number-of-correct-answers'
		);
		leaderboardNumberOfCorrectAnswers.innerText = user.numberOfAllCorrectAnswers;
		leaderboardRow.appendChild(leaderboardNumberOfCorrectAnswers);
	} else if (sortValue === '2') {
		const leaderboardAverageTimePerAnswer = document.createElement('div');
		leaderboardAverageTimePerAnswer.setAttribute(
			'class',
			'leaderboard-average-time-per-answer'
		);
		leaderboardAverageTimePerAnswer.innerText = user.averageTimePerAnswer;
		leaderboardRow.appendChild(leaderboardAverageTimePerAnswer);
	}

	leaderboardList.appendChild(leaderboardRow);
}
leaderboardSortValues.addEventListener('change', () => {
	console.log(Array.from(leaderboardList.children));
	Array.from(leaderboardList.children)
		.reverse()
		.forEach((element, index) => {
			console.log(index, ' index');

			if (index === 6) {
				return;
			}
			setTimeout(() => {
				element.classList.add('leaderboard-row-animation-from-bellow-reverse');
			}, index * 50);
		});
	console.log(Array.from(leaderboardList.children));
	Array.from(leaderboardList.children)[1].addEventListener(
		'animationend',
		() => {
			createLeaderboard();
			Array.from(leaderboardList.children).forEach((element, index) => {
				if (index === 0) {
					return;
				}
				element.style.display = 'none';
				element.classList.remove('leaderboard-row-animation-from-bellow-reverse');
			});

			console.log('hello');
			Array.from(leaderboardList.children).forEach((element, index) => {
				console.log(index, ' index');

				if (index === 0) {
					return;
				}

				setTimeout(() => {
					element.style.display = 'grid';
					element.classList.add('leaderboard-row-animation-from-bellow');
				}, index * 50);
			});
			Array.from(leaderboardList.children)[6].addEventListener(
				'animationend',
				() => {
					console.log('hello2');
					Array.from(leaderboardList.children).forEach((element, index) => {
						if (index === 0) {
							return;
						}
						element.classList.remove('leaderboard-row-animation-from-bellow-reverse');
						element.classList.remove('leaderboard-row-animation-from-bellow');
					});
				},
				{ once: true }
			);
		},
		{ once: true }
	);
});

function createLeaderboard() {
	const tempArrayForLeaderboard = [...leaderboardStorage].filter(
		(element) => element.numberOfAnswers >= 50
	);
	leaderboardPercentageOfCorrectAnswers.style.display = 'none';
	leaderboardNumberOfCorrectAnswers.style.display = 'none';
	leaderboardAverageTimePerAnswer.style.display = 'none';
	if (leaderboardSortValues.value === '0') {
		leaderboardPercentageOfCorrectAnswers.style.display = 'flex';
		tempArrayForLeaderboard.sort(
			(a, b) =>
				Number(b.percentageOfCorrectAnswers) - Number(a.percentageOfCorrectAnswers)
		);
	} else if (leaderboardSortValues.value === '1') {
		leaderboardNumberOfCorrectAnswers.style.display = 'flex';
		tempArrayForLeaderboard.sort(
			(a, b) =>
				Number(b.numberOfAllCorrectAnswers) - Number(a.numberOfAllCorrectAnswers)
		);
	} else if (leaderboardSortValues.value === '2') {
		leaderboardAverageTimePerAnswer.style.display = 'flex';

		tempArrayForLeaderboard.sort(
			(a, b) => Number(a.averageTimePerAnswer) - Number(b.averageTimePerAnswer)
		);
	}

	let tempUserInTop5 = false;
	tempArrayForLeaderboard.forEach((element, index) => {
		element.index = index + 1;

		if (
			index + 1 <= 6 &&
			element.name === localStorageForSettings[currentUserIndex].user
		) {
			tempUserInTop5 = true;
		}
	});

	while (leaderboardList.childElementCount !== 1) {
		leaderboardList.removeChild(leaderboardList.lastChild);
	}

	tempArrayForLeaderboard.forEach((element) => {
		if (tempUserInTop5 && element.index <= 6) {
			addLeaderboardRow(element, leaderboardSortValues.value);
		} else {
			if (
				element.index <= 6 ||
				element.name === localStorageForSettings[currentUserIndex].user
			) {
				if (element.name === localStorageForSettings[currentUserIndex].user) {
					leaderboardList.removeChild(leaderboardList.lastChild);
				}
				addLeaderboardRow(element, leaderboardSortValues.value);
			}
		}
	});
}
console.log(leaderboardStorage);
