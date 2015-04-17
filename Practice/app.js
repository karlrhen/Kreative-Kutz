angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // connect to firebase 
  var ref = new Firebase("https://brilliant-fire-1707.firebaseio.com/peopleSchedule");  
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();

  syncObject.$bindTo($scope, 'peopleSchedule');

  // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      andre: {
        name: 'Andre',
        mondaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        tuesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        wednesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        thursdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        },
        fridaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        saturdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        }

      },
      hakeem: {
        name: 'Hakeem',
        mondaySlots: {
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        tuesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        wednesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        thursdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        },
        fridaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        saturdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        }
      },

      jamal: {
        name: 'Jamal',
        mondaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        tuesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        wednesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        thursdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        },
        fridaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        saturdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        }
      },

      lucious: {
        name: 'Lucious',
        mondaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        tuesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        wednesdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        thursdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        },
        fridaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          }
        },
        saturdaySlots: {
          0000: {
            time: '9:00am',
            booked: false
          },
          0001: {
            time: '9:30am',
            booked: false
          },
          1000: {
            time: '10:00am',
            booked: false
          },
          1030: {
            time: '10:30am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          1130: {
            time: '11:30am',
            booked: false
          },
          1200: {
            time: '12:00pm',
            booked: false
          },
          1230: {
            time: '12:30pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          1330: {
            time: '1:30pm',
            booked: false
          },
          1400: {
            time: '2:00pm',
            booked: false
          },
          1430: {
            time: '2:30pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1530: {
            time: '3:30pm',
            booked: false
          },
          1600: {
            time: '4:00pm',
            booked: false
          },
          1630: {
            time: '4:30pm',
            booked: false
          },
          1700: {
            time: '5:00pm',
            booked: false
          },
          1730: {
            time: '5:30pm',
            booked: false
          },
          1800: {
            time: '6:00pm',
            booked: false
          }
        }
      }
    });    

  };
  
});

