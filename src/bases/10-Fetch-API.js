

const apiKey = 'wgkQiHRqNkAF5pOH26458dQaEiFOQFFK';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// request.then(res => {
//   res.json().then( data => {
//     console.log(data);
//   })
// })
request
  .then(res => res.json())
  .then( ({data}) => {
    const {url} = data.images.original;
    // console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.error);