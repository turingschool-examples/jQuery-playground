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

  $('#robot_filter_state').on('change', function () {
    var currentState = this.value;
    $robots.each(function (index, robot) {
      $robot = $(robot);
      if ($robot.data('state') === currentState) {
        $robot.show();
      } else {
        $robot.hide();
      }
    });
  });

  $('#robot_filter_name').on('keyup', function() {
    var currentName = this.value;

    $robots.each(function (index, robot){
      $robot = $(robot);
      if ($robot.data('name').indexOf(currentName) !== -1) {
        $robot.show();
      } else {
        $robot.hide();
      }
    });
  });
});