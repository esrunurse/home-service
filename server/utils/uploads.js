import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  for (let file of files.servicePhoto) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "spkorn/homeServices",
      type: "private",
    });
    fileUrl.push({
      url: result.secure_url,
      publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }
  return fileUrl;
};

export { cloudinaryUpload };
