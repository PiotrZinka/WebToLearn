$(document).ready(function(){
  $( '.cs-h50' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h50-style'
  } );
  $( '.cs-h40' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h40-style',
  } );
  $( '.cs-h40-showitems' ).select2( {
      theme: 'bootstrap-5',
      selectionCssClass: 'cs-h40-showitems-style',
      width: '100px'
  } );
  
});
