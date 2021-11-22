import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "ifeomaimoh",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function getData(req, res) {
  try {
    const res = await cloudinary.v2.api.resources({ resource_type: "video" });
    return res.json(res.resources);
  } catch (error) {
    return res.json({ message: error.message });
  }
}
