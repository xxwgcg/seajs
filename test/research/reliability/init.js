
// 将这里的代码，复制到埋点页面，注意修改加载的文件路径为绝对路径

(function() {

  var t = Math.random();

  var n = 0;
  if (t > 2 / 3) n = 2;
  else if (t > 1 / 3) n = 1;

  
  var file = ['test-a.html', 'test-r.html', 'test-s.html'][n];

  var iframe = document.createElement('iframe');
  
  // file += getUA();
  //iframe.style.width = 0;
  //iframe.style.height = 0;

  iframe.src = file;
  document.body.appendChild(iframe);

})();