$(function ($) {
  let url = window.location.href;
  $('li a').each(function () {
    if (this.href === url) {
      $(this).closest('li').addClass('active');
    }
  });
});
$(document).ready(function () {
  $('.news-list .fix-padding-col:lt(3)').show();
  var items = 6;
  var show = 3;
  $('#expand-item').click(function () {
    let shown = $('.news-list .fix-padding-col:visible').length + 3;
    if (shown < items) {
      $('.news-list .fix-padding-col:lt(' + shown + ')').show(300);
    } else {
      $('.news-list .fix-padding-col:lt(' + items + ')').show(300);
      $('.more').hide();
    }
    if (shown === items) {
      $("#expand-item").addClass("disable")
      $('#expand-item').prop('disabled', true)
    }
  })
})
 var location_object = [
  {
    name: 'CA',
    item:
      [
        {
          place: 'Whole Foods #10005',
          address: '774 Emerson St Palo Alto, CA'
        },
        {
          place: 'Whole Foods #10006',
          address: '3000 Telegraph Ave Berkeley, CA'
        },
        {
          place: 'Whole Foods #10009',
          address: '414 Miller Ave Mill Valley, CA'
        },
        {
          place: 'Whole Foods #10027',
          address: '15980 Los Gatos Blvd Los Gatos, CA'
        },
        {
          place: 'Whole Foods #10033',
          address: '1690 S Bascom Ave Campbell, CA'
        },
        {
          place: 'Whole Foods #10044',
          address: '1765 California St San Francisco, CA'
        },
        {
          place: 'Whole Foods #10071',
          address: '340 3rd St San Rafael, CA'
        },
        {
          place: 'Whole Foods #10087',
          address: '800 Del Monte Ctr Monterey, CA'
        },
        {
          place: 'Whole Foods #10101',
          address: '1333 Newell Ave Walnut Creek, CA'
        },
        {
          place: 'Whole Foods #10122',
          address: '650 W Shaw Ave Fresno, CA'
        },
        {
          place: 'Whole Foods #10126',
          address: '100 Sunset Dr San Ramon, CA'
        },
        {
          place: 'Whole Foods #10137',
          address: '6910 McKinley Ave Sebastopol, CA'
        },
        {
          place: 'Whole Foods #10138',
          address: '621 E Washington St Petaluma, CA'
        },
        {
          place: 'Whole Foods #10139',
          address: '1181 Yulupa Ave Santa Rosa, CA'
        },
        {
          place: 'Whole Foods #10150',
          address: '1010 Park Pl San Mateo, CA'
        },
        {
          place: 'Whole Foods #10151',
          address: '399 4th St San Francisco, CA'
        },

      ]
  },
  {
    name: 'ID',
    item:
      [
        {
          place: 'Whole Foods #10284',
          address: '401 S Broadway Ave Boise, ID'
        },
      ]
  },
  {
    name: 'NY',
    item:
      [
        {
          place: 'Whole Foods #10005',
          address: '774 Emerson St Palo Alto, CA'
        },
        {
          place: 'Whole Foods #10006',
          address: '3000 Telegraph Ave Berkeley, CA'
        },
        {
          place: 'Whole Foods #10009',
          address: '414 Miller Ave Mill Valley, CA'
        },
        {
          place: 'Whole Foods #10027',
          address: '15980 Los Gatos Blvd Los Gatos, CA'
        },
        {
          place: 'Whole Foods #10033',
          address: '1690 S Bascom Ave Campbell, CA'
        },
        {
          place: 'Whole Foods #10044',
          address: '1765 California St San Francisco, CA'
        },
        {
          place: 'Whole Foods #10071',
          address: '340 3rd St San Rafael, CA'
        },
        {
          place: 'Whole Foods #10087',
          address: '800 Del Monte Ctr Monterey, CA'
        },
        {
          place: 'Whole Foods #10101',
          address: '1333 Newell Ave Walnut Creek, CA'
        },
        {
          place: 'Whole Foods #10122',
          address: '650 W Shaw Ave Fresno, CA'
        },
        {
          place: 'Whole Foods #10126',
          address: '100 Sunset Dr San Ramon, CA'
        },
        {
          place: 'Whole Foods #10137',
          address: '6910 McKinley Ave Sebastopol, CA'
        },
        {
          place: 'Whole Foods #10138',
          address: '621 E Washington St Petaluma, CA'
        },
        {
          place: 'Whole Foods #10139',
          address: '1181 Yulupa Ave Santa Rosa, CA'
        },
        {
          place: 'Whole Foods #10150',
          address: '1010 Park Pl San Mateo, CA'
        },
        {
          place: 'Whole Foods #10151',
          address: '399 4th St San Francisco, CA'
        },

      ]
  },
  {
    name: 'NJ',
    item:
      [
        {
          place: 'Whole Foods #10005',
          address: '774 Emerson St Palo Alto, CA'
        },
        {
          place: 'Whole Foods #10006',
          address: '3000 Telegraph Ave Berkeley, CA'
        },
        {
          place: 'Whole Foods #10009',
          address: '414 Miller Ave Mill Valley, CA'
        },
        {
          place: 'Whole Foods #10027',
          address: '15980 Los Gatos Blvd Los Gatos, CA'
        },
        {
          place: 'Whole Foods #10033',
          address: '1690 S Bascom Ave Campbell, CA'
        },
        {
          place: 'Whole Foods #10044',
          address: '1765 California St San Francisco, CA'
        },
        {
          place: 'Whole Foods #10071',
          address: '340 3rd St San Rafael, CA'
        },
        {
          place: 'Whole Foods #10087',
          address: '800 Del Monte Ctr Monterey, CA'
        },
        {
          place: 'Whole Foods #10101',
          address: '1333 Newell Ave Walnut Creek, CA'
        },
        {
          place: 'Whole Foods #10122',
          address: '650 W Shaw Ave Fresno, CA'
        },
        {
          place: 'Whole Foods #10126',
          address: '100 Sunset Dr San Ramon, CA'
        },
        {
          place: 'Whole Foods #10137',
          address: '6910 McKinley Ave Sebastopol, CA'
        },
        {
          place: 'Whole Foods #10138',
          address: '621 E Washington St Petaluma, CA'
        },
        {
          place: 'Whole Foods #10139',
          address: '1181 Yulupa Ave Santa Rosa, CA'
        },
        {
          place: 'Whole Foods #10150',
          address: '1010 Park Pl San Mateo, CA'
        },
        {
          place: 'Whole Foods #10151',
          address: '399 4th St San Francisco, CA'
        },

      ]
  },
  {
    name: 'CT',
    item:
      [
        {
          place: 'Whole Foods #10005',
          address: '774 Emerson St Palo Alto, CA'
        },
        {
          place: 'Whole Foods #10006',
          address: '3000 Telegraph Ave Berkeley, CA'
        },
        {
          place: 'Whole Foods #10009',
          address: '414 Miller Ave Mill Valley, CA'
        },
        {
          place: 'Whole Foods #10027',
          address: '15980 Los Gatos Blvd Los Gatos, CA'
        },
        {
          place: 'Whole Foods #10033',
          address: '1690 S Bascom Ave Campbell, CA'
        },
      ]
  },
  {
    name: 'AZ',
    item:
      [
        {
          place: 'Whole Foods #10246',
          address: '7111 E Mayo Blvd Phoenix, AZ'
        },
        {
          place: 'Whole Foods #10272',
          address: '2955 W Ray Rd Chandler, AZ'
        }
      ]
  },
  {
    name: 'HI',
    item:
      [
        {
          place: 'Whole Foods #50470',
          address: '388 Kamakee St Honolulu, HI'
        },
      ]
  },
]




