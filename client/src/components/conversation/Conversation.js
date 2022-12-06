

.message-container {
  display: flex;
  justify-content: center;
  height: calc(100vh - 71.5px);
  font-family: Helvetica, sans-serif;
  background-color: #F4F4F4;
}

.msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 867px;
  margin: 10px 10px;
  height: calc(100% - 100px);
  border-radius: 5px;
  border: 1px solid black;
  border-radius: 20px;
}

.msger-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.msger-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}
.msg-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.msg-img-2 {
  width: 75px;
  height: 75px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  display: inline-block;
  vertical-align: text-bottom;
}


.msg-bubble {
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: #ececec;
}
.msg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.msg-info-name {
  margin-right: 10px;
  font-weight: bold;
}
.msg-info-time {
  font-size: 0.85em;
}

.left-msg .msg-bubble {
  border-bottom-left-radius: 0;
  background: rgba(131, 131, 131, 0.25);
}

.right-msg {
  flex-direction: row-reverse;
}
.right-msg .msg-bubble {
  background: #579ffb;
  color: #fff;
  border-bottom-right-radius: 0;
}
.right-msg .msg-img {
  margin: 0 0 0 10px;
}

.msger-inputarea-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.msger-inputarea {
  display: flex;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 80%;
}
.msger-inputarea * {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
}
.msger-input {
  flex: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.msger-send-btn {
  margin-left: 10px;
  background: rgb(0, 196, 65);
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}
.msger-send-btn:hover {
  background: rgb(0, 180, 50);
}

.msger-chat {
  background-color: #F4F4F4;
}

.msg-back-button-container{
  width: 5%;
  display: inline-block;
  height: 75px;
  vertical-align: text-bottom;
  background-color: #F4F4F4;
}

.msg-username-container{
  width: 73%;
  display: inline-block;
  height: 75px;
  vertical-align: text-bottom;
}


.msger-header-title{
  width: 100%;
  height: 75px;
}

.msg-info-button-container{
  width: 5%;
  display: inline-block;
  vertical-align: text-bottom;
  height: 75px;
}

.status-circle {
  width: 10px;
  height: 10px;
  position: relative;
  top: 80%;
  left: 79%;
  border-radius: 5px;
  border: 1px solid #0000004b;
}

.status-color-online {
  background-color: #56E134;
}

.status-color-offline {
  background-color: #e13434;
}

.back-button {
  position: relative;
  top: 50%;
  transform:translate(0%,-50%);
  border: none;
  left: 35%;
  color: #0584FE;
  font-size: 20px;
  background-color: #F4F4F4;
}

.back-button :hover{
  color: #1567b4;
}

.info-button {
  position: relative;
  top: 50%;
  transform:translate(0%,-50%);
  color: #0584FE;
  font-size: 20px;
}

.msg-username {
  font-size: 25px;
}

.msg-position{
  font-size: 16px;
  color: gray;
}
