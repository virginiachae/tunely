/************
 * DATABASE *
 ************/

 var db = require("/Users/virginiachae/wdi/wdi33/tunely/models");

/* hard-coded data */
// GET /api/albums
function index(req, res) {
  db.Album.find(function(err, succ) {
    res.json(succ);
  })
}

function create(req, res) {
  // FILL ME IN !
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
