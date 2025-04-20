import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //there will be problem if we have 2 filename same
    }
  })
  
export const upload = multer({ storage})
