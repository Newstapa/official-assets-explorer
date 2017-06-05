/*global Officials, Backbone, JST*/

Officials.Views = Officials.Views || {}

Officials.Views.Nav = Backbone.View.extend({

  template: JST['app/scripts/templates/nav.ejs'],

  el: '#nav',

  events: {
    'click a'   : 'hideSlideOut'
  },

  initialize: function () {
    this.render()
  },

  render: function () {
    this.$el.html(this.template())
    this.afterRender()
  },

  afterRender: function(event) {
    if (window.innerWidth <= 768) {
      $('.button-collapse').sideNav()
    }

    $('.drag-target').css('touch-action', 'no')

    $.ajax({
        url: 'http://newstapa.org/count',
        dataType: 'json',
        success: function(response) {
            if (response.count) {
                var number = response.count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                $('.donation-counter .number').text(number);
            }
        }
    })
  },

  hideSlideOut: function() {
    $('.button-collapse').sideNav('hide')
  }

})
