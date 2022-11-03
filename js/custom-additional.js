$(document).ready(function(){
  // Custom inputs
  $( '.cs-h50-square' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h50-style-square'
  });
  $( '.cs-h50' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h50-style'
  });
  $( '.cs-h50-w100' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h50-style',
      width: '100%'
  });
  $( '.cs-h40' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h40-style',
  });
  $( '.cs-h40-w100' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h40-style',
      width: '100%'
  });
  $( '.cs-h40s' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h40s-style',
  });
  $( '.cs-h40s-w100' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h40s-style',
      width: '100%'
  });
  
  // Toggle for left menu in Society
  $('.cpi-cl-board-title').click(function(){
    $(this).toggleClass('active');
  });

  // Toggle for post comments in Society
  $('.cpa-comments-btn').click(function(){
    $(this).closest('.cpi-community-post').find('.community-comments').toggleClass('active');
    $(this).closest('.cpi-community-post').find('.community-comments-message').toggleClass('active');
  });
  
	// Hide and show table action menu
  $('.table-action-btn').click(function(){
    if ( $(this).siblings('.table-action-menu').css('display') == 'none') { 
        $('.table-action-menu').css('display','none');
        $(this).siblings('.table-action-menu').css('display','block');
    }
    else if ( $(this).siblings('.table-action-menu').css('display') == 'block') { 
        $('.table-action-menu').css('display','none');
    }
  });
  
});

	
$(document).mouseup(function(e) {
  // Hide table action menu if click outside menu and btn
  var table_action_menu_and_btn = $(".table-action-menu, .table-action-btn");
  var table_action_menu = $(".table-action-menu");
  if (!table_action_menu_and_btn.is(e.target) && table_action_menu_and_btn.has(e.target).length === 0) {
    table_action_menu.hide();
  }
});
