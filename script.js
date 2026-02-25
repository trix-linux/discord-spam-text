setInterval(() => {
  fetch('your webhook token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: "the messege you want to send"
    })
  })
  .then(res => console.log("Status:", res.status))
  .catch(console.error);

}, 1500); 
