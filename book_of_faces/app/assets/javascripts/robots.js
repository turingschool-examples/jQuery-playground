$(document).ready(function () {

  var $robots = $('.robot');

  $('#robot_filter_department').on('change', function () {
    var currentDepartment = this.value;
    $robots.each(function (index, robot) {
      $robot = $(robot);
      if ($robot.data('department') === currentDepartment) {
        $robot.show();
      } else {
        $robot.hide();
      }
    });
  });

});