function upDate(previewPic) {
  console.log("upDate function called");  // Log to console when function is called
  
  // Step 1: Get the image URL from the src attribute of the previewPic
  var imageUrl = previewPic.src;
  
  // Step 2: Create the CSS backgroundImage value
  var backgroundImageValue = "url(" +imageUrl+")";
  
  // Step 3: Set the backgroundImage property of the div with id="image"
  var imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = backgroundImageValue;
  
  // Step 4: Change the text of the div with id="image" to the alt text of the previewPic
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo function called");  // Log to console when function is called
  
  // Step 1: Define the original image URL
  var originalImageUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/original.jpg';
  
  // Step 2: Create the CSS backgroundImage value for the original image
  var originalBackgroundImageValue = "url(" + originalImageUrl + ")";
  
  // Step 3: Set the backgroundImage property of the div with id="image" back to the original image
  var imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = originalBackgroundImageValue;
  
  // Step 4: Revert the text of the div with id="image" back to the original text
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
