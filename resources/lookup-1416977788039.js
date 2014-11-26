(function(window, undefined) {
  var dictionary = {
    "924e15a9-4807-4e62-8d3c-27439a46b495": "Article - Web",
    "206001b4-61bf-46e0-a18f-971d6231117f": "Logged In",
    "bc680491-7416-4865-92ba-7c3a91057b70": "Login",
    "78ddab9c-1cc2-4351-8070-e5454650b958": "Login Error",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Feed",
    "f7f29594-323a-4fea-a6c5-890064f62c80": "Article - Zen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);