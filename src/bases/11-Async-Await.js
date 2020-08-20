const getImage = async () => {

  try {
    const apiKey = "wgkQiHRqNkAF5pOH26458dQaEiFOQFFK";
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const {data} = await request.json();
    const {url} = data.images.original
    console.log(url);
  
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();