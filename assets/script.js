const ip = 'SoftsEnableKKG.aternos.me'; // oy i am programist

function servak() {
    fetch(`https://api.mcstatus.io/v2/status/java/${ip}`)
        .then(res => res.json())
        .then(data => {
            const statusBox = document.getElementById('status');
            const playersBox = document.getElementById('players');
            
            if (data.online) {
                statusBox.innerText = 'Online';
                playersBox.innerText = `${data.players.online}/${data.players.max}`;
            } else {
                statusBox.innerText = 'Offline';
                playersBox.innerText = '0/0';
            }
        })
        .catch(err => console.error("Error", err));
}

servak();
setInterval(servak, 2000); // оновлюється кожних 2 секунди