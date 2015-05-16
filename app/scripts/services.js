'use strict';

angular.module('cookbookApp')
  .factory('dataFactory',  function() {

    // Static block of content to store static data
    var dataFactory = {
      'recipes' : [{
        'id': 0,
        'author': 'Mudit Gupta',
        'title': 'Carbonara Spaghetti',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200188.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '5'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '5'
            }
        ],
        'date': '01 June 2014'
      },
      {
        'id': 1,
        'author': 'Mudit Gupta',
        'title': 'French Toast',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200191.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '2'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '1'
            }
        ],
        'date': '03 June 2014'
      },
      {
        'id': 2,
        'author': 'Mudit Gupta',
        'title': 'Rasberry Pancake',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200190.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '4'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '1'
            }
        ],
        'date': '11 June 2014'
      },{
        'id': 3,
        'author': 'Mudit Gupta',
        'title': 'Walking Nacho (Korean Ver.)',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200182.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '2'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '4'
            }
        ],
        'date': '21 June 2014'
      },{
        'id': 4,
        'author': 'Mudit Gupta',
        'title': 'Mont Blanc',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200185.JPG',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '3'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '2'
            }
        ],
        'date': '01 May 2014'
      },
      {
        'id': 5,
        'author': 'Mudit Gupta',
        'title': 'Grilled Honey Chipotle Chicken',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200229.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '1'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '1'
            }
        ],
        'date': '01 January 2014'
      },
      {
        'id': 6,
        'author': 'Mudit Gupta',
        'title': 'Kimchi',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200187.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '2'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '1'
            }
        ],
        'date': '30 June 2014'
      },
      {
        'id': 7,
        'author': 'Mudit Gupta',
        'title': 'Salted Caramel Apple Cake',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200154.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '5'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '1'
            }
        ],
        'date': '01 May 2014'
      },{
        'id': 8,
        'author': 'Mudit Gupta',
        'title': 'Root Beer Pulled Chicken',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200186.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '5'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '5'
            }
        ],
        'date': '11 May 2014'
      },{
        'id': 9,
        'author': 'Mudit Gupta',
        'title': 'Nabeyaki Udon',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200192.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '3'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '4'
            }
        ],
        'date': '01 December 2014'
      },
      {
        'id': 10,
        'author': 'Mudit Gupta',
        'title': 'Adana Kebab',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200189.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '3'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '3'
            }
        ],
        'date': '01 April 2014'
      },{
        'id': 11,
        'author': 'Mudit Gupta',
        'title': 'Crazy Cowboy Casserole',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200219.PNG',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '2'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '1'
            }
        ],
        'date': '01 March 2014'
      },{
        'id': 12,
        'author': 'Mudit Gupta',
        'title': 'Pistachio Cake',
        'imageURL': 'http://www.desktopcookbook.com/images-recipe/200262.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        'comments_detail': [
            {
                'comment': 'Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor',
                'author': 'Mudit Gupta',
                'rating': '5'
            },
            {
                'comment': 'Consectetuer adipiscing elit. Aenean massa.',
                'author': 'Mudit Gupta',
                'rating': '4'
            }
        ],
        'date': '01 February 2014'
      }]
    };
    // Static Content Block Finished



    // Factory Methods
    // Fetch List of Recipes
    dataFactory.getRecipeList = function () {
        var data = dataFactory;
        return data;
    };



    // Push another recipe in list of recipes
    dataFactory.postRecipe = function(data) {
        data.id = dataFactory["recipes"].length;            // Auto Increment to set ID for recipe
        dataFactory["recipes"].push(data);

        console.log(dataFactory);                               // Console.log to check if data entered correctly
    };



    // Fetch Details for selected dish
    dataFactory.getRecipe = function(id) {
        var data = dataFactory;
        return data["recipes"][id];
    };




    // Post review
    dataFactory.postReview = function(data, id) {
        var data_node = dataFactory["recipes"][id];
        data_node["comments_detail"].push(data);

        console.log(dataFactory);                               // Console.log to check if data entered correctly
    };




    // Function to calculate ratings from review
    dataFactory.calculateRating = function(data) {
        var comment_count = data["comments_detail"].length;

        if(comment_count) {
            var total_rating = 0;
            var rating;

            for(var i = 0; i < comment_count; i++) {
                total_rating = total_rating + parseInt(data["comments_detail"][i]["rating"]);
            }

            rating = total_rating / comment_count;                      // Calculate final rating

            data.review = rating;
            data.comments = comment_count;
        } else {
            data.review = 0;
            data.comments = 0;
        }

        return data;
    };


    return dataFactory;

  });
