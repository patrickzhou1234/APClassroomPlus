/*
Instantly finish your AP Classroom video assignments with a tiny bit of javascript

Steps:
1) Open AP Classroom and go to your video of choice
2) Open devtools and switch to the network tab
3) Find a 'graphql' request
4) Within the request, find the body and look for videoId, note this down.
5) Switch to the console tab
6) Paste this script into the console
7) An alert should popup, enter your videoId from before into this
8) The tab should reload and your video should be completed
*/
const videoId = Number(prompt("Please enter your videoId.")); // video id; needs to be passed manually
const video = document.getElementsByTagName('video')[0];
const duration = video.duration;
const progress = new Array(Math.ceil(duration)).fill(1);
const accessToken = window.localStorage.getItem("account_access_token")
const data = {
    "query": "mutation StoreDailyVideoProgressMutation($userId: Int!, $cbPersonid: String!, $videoId: Int!, $status: String!, $progress: String!, $watchedPercentage: String!, $playTimePercentage: String) {\n  storeDailyVideoProgress(userId: $userId, videoId: $videoId, status: $status, cbPersonid: $cbPersonid, progress: $progress, watchedPercentage: $watchedPercentage, playTimePercentage: $playTimePercentage) {\n    ok\n    __typename\n  }\n}\n",
    "variables": {
        "userId": Number(window.current_user.initId),
        "videoId": videoId,
        "progress": progress,
        "status": "COMPLETE",
        "cbPersonid": Number(window.current_user.importId),
        "watchedPercentage": "1.00",
        "playTimePercentage": "1.0000"
    },
    "operationName": "StoreDailyVideoProgressMutation"
}
await fetch("https://apc-api-production.collegeboard.org/fym/graphql", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": `Bearer ${accessToken}`,
        "content-type": "application/json, application/json; charset=utf-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    },
    "referrer": "https://apclassroom.collegeboard.org/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": JSON.stringify(data),
    "method": "POST",
    "mode": "cors"
});
window.location.reload();
