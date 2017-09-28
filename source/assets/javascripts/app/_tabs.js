/*
 Expects something like the snippet below. Only the class names and IDs are important. Not the tags:

 <ul class="tab-container-marker">
   <li><span class="tab-marker" rel="tab-id-1">Tab 1</li>
   <li><span class="tab-marker" rel="tab-id-2">Tab 2</li>
 </ul>

 <div>
   <div id="tab-id-1" class="tab_content">
   </div>
   <div id="tab-id-2" class="tab_content">
   </div>
 </div>
 */

var startTabContainer = (function ($) {
  return function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $(".tab-container-marker .tab-marker:first").addClass("active").addClass("d_active");

    $("body").on('click', '.tab-container-marker .tab-marker', function () {
      switchActiveTab($(this).attr('rel'));
    });

    if (window.location.hash) {
      switchActiveTab(window.location.hash.substring(1).replace(/\./g, '-'));
    }
  };
})(jQuery);

var switchActiveTab = function (tabIdentifier) {
  $(".tab_content").hide();
  $(".tab_content#" + tabIdentifier).fadeIn();

  $(".tab-container-marker .tab-marker").removeClass("active").removeClass("d_active");
  $(".tab-container-marker .tab-marker[rel='" + tabIdentifier + "']").addClass("active").addClass("d_active");
};