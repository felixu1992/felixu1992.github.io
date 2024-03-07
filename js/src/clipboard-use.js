/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="" onclick=doCopy(this) >';
      copyHtml += '  <i class="fa fa-globe"></i><span class="sp-copy">Copy!</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      $(".copy-article-url").before(copyHtml);
      var result = new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });
      result.on('success', function(e) {
        // console.log(e);
        result.destroy;
        e.clearSelection();
        // document.getElementById("sp-copy").innerHTML = "已复制～";
        // showTooltip(e.trigger, 'Copied!');
    });
    }
    initCopyCode();
  }(window, document);

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'btn-copy tooltipped tooltipped-s');
    elem.setAttribute('aria-label', msg);
}

function doCopy(ele){
  let btns = document.getElementsByClassName("sp-copy");
  for(let i = 0; i < btns.length; i++){
    btns[i].innerHTML = "Copy!";
  }
  ele.children[1].innerHTML = "Copied!";
}

$(function () {
  $('.btn-copy').bind("click",function () {
      tips('已复制');
  })

  $('.copy-article-url').bind("click",function () {
      tips('已复制');
  })
  
  function tips(text) {
      $('.popup-dom').remove();
      var copyHtml = '';
      copyHtml += '<div class="popup-dom">';
      copyHtml += '<div class="popup-tips">' + text + '</div>';
      copyHtml += '</div>';
      $('body').append(copyHtml);
      $('.popup-dom').slideToggle();
      window.setTimeout('$(".popup-dom").slideToggle();', 2000);
  }
})