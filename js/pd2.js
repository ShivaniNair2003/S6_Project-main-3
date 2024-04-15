document.addEventListener("DOMContentLoaded", function() {
    var generateBtn = document.getElementById("intereststag");
    var inputField = document.getElementById("interests");
    var tagList = document.getElementById("tag-list");
  
    generateBtn.addEventListener("click", function() {
      var tagName = inputField.value.trim();
      if (tagName) {
        addTag(tagName);
        inputField.value = "";
      }
    });
  
    function addTag(tagName) {
      var li = document.createElement("li");
      li.classList.add("tag-item");
      li.innerHTML = tagName + "<span>&times;</span>";
      tagList.appendChild(li);
      li.querySelector("span").addEventListener("click", function() {
        li.remove();
      });
    }
  });

  
  