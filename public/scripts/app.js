/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');

    $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleSuccess

  });
});

function handleSuccess(albums) {
  albums.forEach(function(album) {
    renderAlbum(album);
})
};



// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var source = $('#album-template').html();
  var template = Handlebars.compile(source);
  var albumHtml = template({ album : album });
  $('#albums').append(albumHtml);

  console.log('rendering album:', album);

}
