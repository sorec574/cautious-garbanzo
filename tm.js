
const verticalMoreIconPath = `M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`;
const stopIconPath = `M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z`;
const regenerateIconPath = `M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z`;
const css = `
${REDACTED(`[data-element-id="input-row"] div:has([data-element-id="prompt-library-small-button"])`)}
${REDACTED('[data-element-id="current-chat-title"]', {delayMs: 0})}

textarea[data-element-id="new-system-instruction"],
textarea[placeholder*="OpenAI Function Spec"],
textarea[placeholder*="JS code"]
{
font-family: Courier New;
height: 400px;
}

.pb-safe:focus {
outline: none;
}

.fixed:has([data-element-id="chat-space-end-part"]) {
filter: drop-shadow(0px -5px 10px #000000);
}

[data-element-id="send-button"] {
display: none;
}
[data-element-id="main-page-buttons-containter"] button {
opacity: 0.2;
transition: opacity 0.2s !important;
}
[data-element-id="main-page-buttons-containter"] button:hover {
opacity: 1;
}

[data-element-id="message-input"] label:has(input[type=checkbox]) {
display: none;
}
[id="elements-in-action-buttons"] {
display: none;
}

[data-element-id="user-message"] {
max-height: 502px;
}

/* my avatar */
[data-element-id="response-block"]:has([data-element-id="user-message"]) [data-element-id="chat-avatar-container"] {
display: none;
}
[data-element-id="config-buttons"] {
display: none;
}
[data-element-id="response-block"]:has([data-element-id="model-setting-info"]) {
border: 1px solid rgba(255,255,255,0.3);
opacity: 0.25;
margin-bottom: 25px;
}

[data-element-id="width-adjust-bar"] {
display: none;
}


/* typing animation */
[data-element-id="response-block"]:not(:has([d="${verticalMoreIconPath}"])) div[data-element-id="ai-response"] p:last-of-type:after {
animation: blink 1s steps(5,start) infinite;
content: "▋";
vertical-align: baseline;
}
@keyframes blink {
0% {opacity: 1}
50% {opacity: 0}
to {opacity: 1}
}

/* typing message */
[data-element-id="response-block"] + div {
/* display: none; */
}
div.text-gray-500:has(>svg.animate-spin) {
/*  display: none; */
}


/* context limit reached buton */
[data-element-id="chat-space-middle-part"] .text-right button {
display: none;
}

/* edit buttons on hover */
div:has(>[data-element-id="edit-message-button"]) {
opacity: 0.5 !important;
}

/* fix janky where it bounces down after responding. */
/* fixed with my scroll override changes i think */
/*[data-element-id="response-block"]:has([data-element-id="edit-message-button"]) {
margin-bottom: 25px;
}
*/

[data-element-id="chat-space-middle-part"] {
padding-bottom: 126px !important;  /* when resuming a chat, it jumps bc it gets a wierdly tall margin */
}

/* stop button */
[data-element-id="chat-space-background"] button:has([d="${stopIconPath}"]) {
display: none;
}

.sticky div:has(>a[href^="https://blog.typingmind.com/"]) {
visibility: hidden;
}
button:has([d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"]):focus {
outline: none;
}
#nav-buy-button {
display: none;
}
#chat-input-textbox {
padding-left: 12px;
background: rgba(0, 0, 0, 0.2);
}
#chat-input-textbox + button {
display: none;
}
div:has(>button [d="${regenerateIconPath}"]) {
display: none;
}
.transition-all {
transition-property: none !important;
}

div:has(> div > img[src="/logo.png"]) {
opacity: 0;
}

.user-avatar {
background: black;
}

body {
background: rgb(16,17,17) !important;
}
.response-block:hover {
background: none !important;
}

/* might need to separate these two */
.response-block li,
.response-block p
{
border-radius: 5px;
margin: 2px;
padding-left: 2px;
padding-right: 2px;
}

.response-block li, .response-block li *
.response-block p, .response-block p *
{
color: white;
transition: color 0.1s ease-in-out;
}
.response-block li:hover, .response-block li:hover *,
.response-block p:hover, .response-block p:hover *
{
color: hotpink;
transition: color 0s;
}

.response-block li ul {
margin-top: 0;
}
.response-block li:nth-child(even), .response-block p:nth-child(even) {
background-color: RGBA(0,0,0,0.3);
}

.prose {
background: rgb(39, 39, 42);
border-radius: 16px;
padding: 10px;
color: white;
}
div:has(>.bg-blue-500) {
display: flex;
justify-content: flex-end;
}
div > button:has(.user-avatar) {
visibility: hidden;
}

div:has(>.pb-safe) {
border: 1px solid dimgray;
border-bottom-width: 0;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
opacity: 1;
transition: opacity 0.2s;
}
div:has(>.pb-safe):focus-within,
div:has(>.pb-safe):hover{
opacity: 1;
}

button[data-element-id="output-settings-button"] {
display: none;
}