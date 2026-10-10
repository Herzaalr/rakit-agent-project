document.addEventListener('DOMContentLoaded',function(){
  // copy buttons
  document.querySelectorAll('.term').forEach(function(t){
    var bar=t.querySelector('.bar'),pre=t.querySelector('pre');
    if(!bar||!pre)return;
    var b=document.createElement('button');b.className='copy';b.textContent='copy';
    b.addEventListener('click',function(){
      var txt=pre.innerText.replace(/^\$ /gm,'');
      navigator.clipboard.writeText(txt).then(function(){b.textContent='copied!';setTimeout(function(){b.textContent='copy'},1400)});
    });
    bar.appendChild(b);
  });
  // mobile menu
  var mb=document.querySelector('.menu-btn'),side=document.querySelector('.side');
  if(mb&&side){mb.addEventListener('click',function(){side.classList.toggle('open')})}
  // active nav
  var path=location.pathname.replace(/\/$/,'')||'/';
  document.querySelectorAll('.side a').forEach(function(a){
    var h=a.getAttribute('href').replace(/\/$/,'')||'/';
    if(h===path)a.classList.add('on');
  });
});
