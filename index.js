const getStory = async () => {
  try {
    // Hide the content elements initially
    document.querySelector(".container").style.display = "none";

    // Show loading message
    const loadingElement = document.createElement("h1");
    loadingElement.innerText = "Loading...";
    document.body.appendChild(loadingElement);

    // Fetch data from API
    const res = await fetch("https://shortstories-api.onrender.com");
    const data = await res.json();

    // Remove loading message once data is fetched
    document.body.removeChild(loadingElement);

    // Update content with fetched data
    document.getElementById("author").innerText = data.author;
    document.getElementById("title").innerText = data.title;
    document.getElementById("story").innerText = data.story;

    // Show the content elements after updating
    document.querySelector(".container").style.display = "block";
  } catch (error) {
    console.log("Error: ", error);
  }
};

getStory();
