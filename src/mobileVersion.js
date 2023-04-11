$('#showMoreImage').on('click', function () {
  $('#showMoreImage').css('disply', 'none');
  $('#showLessImage').css('display', 'block');
  $('#showMoreContent').css('display', 'flex');
  $('#stickyContent').css('display', 'none');
});

$('#showLessImage').on('click', function () {
  $('#showMoreImage').css('disply', 'block');
  $('#showLessImage').css('display', 'none');
  $('#showMoreContent').css('display', 'none');
  $('#stickyContent').css('display', 'flex');
});
