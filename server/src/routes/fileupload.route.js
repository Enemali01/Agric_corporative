import { Router } from "express";
import upload from "../helpers/helpers.js";
import {multipleFileUpload, getFiles, deleteFile, videoFIle, getVideos, delVideo} from "../controller/file.controller.js";
// import getFiles from "../controller/getfile.controller.js";
// import { MultipleFile } from "../models/file.model.js";

const route = Router();

//Picture Route
route.post("/upload", upload.array("files"), multipleFileUpload);
route.get("/getUploads", getFiles);
route.delete("/delete/:id", deleteFile);

// route.get('/paginatedImage', displayPaginate)

// Video Route
route.post("/video", upload.array('videos'),videoFIle);
route.get("/getVideo", getVideos);
route.delete("/removevid/:id", delVideo);

export default route;
