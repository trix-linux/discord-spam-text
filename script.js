setInterval(() => {
  fetch('https://discord.com/api/webhooks/1475077480535822336/Q17DfnwoGVbqXPpu5QWGAZbbsrSNiEBQ2kjW60Gz2PLHlOzDZ4_Ii497kILFIJtlfyt5', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: "silverrr she is in vc"
    })
  })
  .then(res => console.log("Status:", res.status))
  .catch(console.error);

}, 1500);
