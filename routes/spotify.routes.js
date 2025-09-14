const express = require("express");
const router = express.Router();
const {
  getTopTracks,
  login,
  callback,
  currentPlayingSong,
  puaseNowPlayingSong,
  playAnyTrackSong,
  followArtists,
} = require("../controllers/spotify.controllers");

//OAuth
router.get("/auth/login", login);
router.get("/auth/callback", callback);

//spotify
router.get("/top-tracks", getTopTracks);
router.get("/currently-playing", currentPlayingSong);
router.get("/pause-current-song", puaseNowPlayingSong);
router.post("/play-track/:uri", playAnyTrackSong);
router.get("/artists", followArtists);

module.exports = router;
