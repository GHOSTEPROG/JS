<script language="JavaScript">
  /**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    */
  window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.keyCode == ۷۳) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.keyCode == ۷۴) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == ۸۳ &amp;&amp; (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey &amp;&amp; e.keyCode == ۸۵) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == ۱۲۳) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
</script>
