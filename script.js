function sendMessage() {
    var input = document.getElementById('user-input').value;
    var chat = document.getElementById('chat');
    var userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.innerHTML = '<img src="your-avatar.jpg" alt="Avatar"/><p>' + '你: ' + input + '</p>';
    chat.appendChild(userMessage);
    document.getElementById('user-input').value = '';

    var replyMessage = document.createElement('div');
    replyMessage.classList.add('chat-message');
    if (input.includes("试玩")) {
        replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>包含试玩</p>';
    } else if (input.includes("游戏")) {
        replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>请看上面几句话</p>';
    } else {
        replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>请点击前四句话获取游戏！谢谢配合，本次提取码7天内有效！7天后自动失效，请尽快获取！过时不侯！</p>';
    }
    chat.appendChild(replyMessage);
    chat.scrollTop = chat.scrollHeight;
}

// 自动发送欢迎信息
window.onload = function() {
    var chat = document.getElementById('chat');
    var welcomeMessages = [
        '请点击第一句获取游戏。',
        '请点击第二句获取安卓和电脑教程。',
        '请点击第三句获取ios教程。',
        '必须要看教程，不然不会下载和使用！'
    ];

    welcomeMessages.forEach(function(message) {
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>' + message + '</p>';
        messageDiv.onclick = function() {
            var replyMessage = document.createElement('div');
            replyMessage.classList.add('chat-message');
            if (message === '请点击第一句获取游戏。') {
                replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>我用夸克网盘给你分享了「游戏获取」，点击链接或复制整段内容，打开「夸克APP」即可获取。/~a37939qChN~:/链接：https://pan.quark.cn/s/6cc71b4379a7?pwd=scx7</p>';
            } else if (message === '请点击第二句获取安卓和电脑教程。') {
                replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>我用夸克网盘给你分享了「安卓和电脑教程」，点击链接或复制整段内容，打开「夸克APP」即可获取。/~ffd339qB7A~:/链接：https://pan.quark.cn/s/8ab5938c6c1b?pwd=gNL2</p>';
            } else if (message === '请点击第三句获取ios教程。') {
                replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>我用夸克网盘给你分享了「ios教程」，点击链接或复制整段内容，打开「夸克APP」即可获取。/~c0773A5xup~:/链接：https://pan.quark.cn/s/8b708f27c412</p>';
            } else {
                replyMessage.innerHTML = '<img src="bot-avatar.jpg" alt="Avatar"/><p>请看前三句话。</p>';
            }
            chat.appendChild(replyMessage);
            chat.scrollTop = chat.scrollHeight;
        };
        chat.appendChild(messageDiv);
    });
};
