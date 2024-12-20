var isLieBrarian = location.search == '';
var lieBrarianPeerId = location.search.replace('?', '');

var features = {
    'bat' : '蝙蝠',
    'fishbone' : '魚骨頭',
    'fish' : '魚兒',
    'pig' : '小豬',
    'elephant' : '大象',
    'tower' : '城堡',
    'batterylow' : '低電量',
    'truckdelivery' : '快遞',
    'apple' : '蘋果',
    'carrot' : '紅蘿蔔',
    'lollipop' : '棒棒糖',
    'dice5' : '骰子',
    'aquarius' : '水瓶座',
    'moon' : '月亮',
    'cloud' : '雲朵',
    'sunset' : '落日',
    'wind' : '風兒',
    'camper' : '露營車',
    'helicopter' : '直升機',
    'sailboat' : '帆船',
    'scooter' : '滑板車',
    'football' : '美式足球',
    'bowling' : '保齡球',
    'meeple' : '米寶',
    'lego' : '樂高',
    'heartbeat' : '心跳',
    'balloon' : '氣球',
    'circus' : '馬戲團',
    'carousel' : '摩天輪'

}

if (location.search == '?clear') {
    localStorage.clear();
    location.href = './';
}

if (localStorage.getItem('finished')) {
    localStorage.clear();
}

if (!isLieBrarian) {
    localStorage.removeItem('peerId');
    localStorage.removeItem('answerCodes');
    localStorage.removeItem('answer');
    localStorage.removeItem('remotePeerIds');
    localStorage.removeItem('peerfeatures');
    localStorage.removeItem('guessCodes');
    localStorage.removeItem('results');
    localStorage.removeItem('liedResults');
    localStorage.removeItem('tOFCount');
    localStorage.removeItem('guesses');
    localStorage.removeItem('keyboard');
    localStorage.removeItem('timer');
}

var remotePeers = {};
var peerfeatures = JSON.parse(localStorage.getItem('peerfeatures')) || {};
var answerCodes = JSON.parse(localStorage.getItem('answerCodes')) || [];
var guessCodes = JSON.parse(localStorage.getItem('guessCodes')) || [];
var results = JSON.parse(localStorage.getItem('results')) || [];
var liedResults = JSON.parse(localStorage.getItem('liedResults')) || [];
var tOFCount = localStorage.getItem('tOFCount') || 0;

var totalTime = (10 * 60 * 1000); // 10分鐘
var remainingTime = localStorage.getItem('timer') || totalTime;
var togetTime = Date.now() + remainingTime * 1;
var timerInterval;

var lieCode;

if (localStorage.getItem('guesses')) {
    document.querySelector('.guesses').innerHTML = localStorage.getItem('guesses');
}
if (localStorage.getItem('answer')) {
    document.querySelector('.answer').outerHTML = localStorage.getItem('answer');
}
if (localStorage.getItem('keyboard')) {
    document.querySelector('.keyboard').innerHTML = localStorage.getItem('keyboard');
}

function save() {
    localStorage.setItem('remotePeerIds', JSON.stringify(Object.keys(remotePeers)));
    localStorage.setItem('peerfeatures', JSON.stringify(peerfeatures));
    localStorage.setItem('answerCodes', JSON.stringify(answerCodes));
    localStorage.setItem('guessCodes', JSON.stringify(guessCodes));
    localStorage.setItem('results', JSON.stringify(results));
    localStorage.setItem('liedResults', JSON.stringify(liedResults));
    localStorage.setItem('tOFCount', tOFCount);
    localStorage.setItem('timer', remainingTime);
    localStorage.setItem('guesses', document.querySelector('.guesses').innerHTML);
    localStorage.setItem('keyboard', document.querySelector('.keyboard').innerHTML);
}